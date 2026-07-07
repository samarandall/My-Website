#!/usr/bin/env bash
#
# Automated deploy for samarandall.com:
#   build (linux/amd64) -> push to ECR -> upload compose/Caddyfile -> pull + restart on EC2
#
# Config lives in deploy/deploy.env (gitignored). Copy deploy/deploy.env.example first.
#
# Usage:
#   ./deploy/deploy.sh                 # build current git SHA, push, deploy
#   ./deploy/deploy.sh --no-build      # deploy an already-pushed tag (default: current SHA)
#   ./deploy/deploy.sh --tag <sha>     # use a specific image tag
#   ./deploy/deploy.sh --no-build --tag <old-sha>   # ROLLBACK to a previous build
#   ./deploy/deploy.sh --allow-dirty   # allow deploying with uncommitted changes
#   ./deploy/deploy.sh -h | --help
#
set -euo pipefail

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"          # the my-website/ dir (build context)
ENV_FILE="$SCRIPT_DIR/deploy.env"

# ---------------------------------------------------------------------------
# Pretty output
# ---------------------------------------------------------------------------
if [ -t 1 ]; then BOLD=$'\033[1m'; DIM=$'\033[2m'; RED=$'\033[31m'; GRN=$'\033[32m'; YLW=$'\033[33m'; RST=$'\033[0m'
else BOLD=""; DIM=""; RED=""; GRN=""; YLW=""; RST=""; fi
step() { printf '%s\n' "${BOLD}==>${RST} $*"; }
info() { printf '%s\n' "${DIM}    $*${RST}"; }
warn() { printf '%s\n' "${YLW}warning:${RST} $*" >&2; }
die()  { printf '%s\n' "${RED}error:${RST} $*" >&2; exit 1; }

usage() { sed -n '3,14p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit "${1:-0}"; }

# ---------------------------------------------------------------------------
# Args
# ---------------------------------------------------------------------------
DO_BUILD=true
ALLOW_DIRTY=false
TAG=""
while [ $# -gt 0 ]; do
  case "$1" in
    --no-build)    DO_BUILD=false ;;
    --tag)         TAG="${2:-}"; [ -n "$TAG" ] || die "--tag needs a value"; shift ;;
    --allow-dirty) ALLOW_DIRTY=true ;;
    -h|--help)     usage 0 ;;
    *)             die "unknown option: $1 (try --help)" ;;
  esac
  shift
done

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------
[ -f "$ENV_FILE" ] || die "missing $ENV_FILE — copy deploy/deploy.env.example to deploy/deploy.env and fill it in."
# shellcheck source=/dev/null
. "$ENV_FILE"

: "${AWS_REGION:=us-east-1}"
: "${SSH_USER:=ec2-user}"
: "${TARGET_PLATFORM:=linux/amd64}"
: "${SITE_URL:=}"
for v in EC2_HOST SSH_KEY REMOTE_DIR ECR_REPO; do
  [ -n "${!v:-}" ] || die "$v is not set in $ENV_FILE"
done
[ -f "$SSH_KEY" ] || die "SSH key not found: $SSH_KEY"

ECR_REGISTRY="${ECR_REPO%%/*}"              # strip /repo to get the registry host
SSH_OPTS=(-i "$SSH_KEY" -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15)
REMOTE="$SSH_USER@$EC2_HOST"

# ---------------------------------------------------------------------------
# Pre-flight
# ---------------------------------------------------------------------------
step "Pre-flight checks"
for bin in docker aws ssh scp git; do command -v "$bin" >/dev/null 2>&1 || die "$bin not found in PATH"; done

if [ -z "$TAG" ]; then
  TAG="$(git -C "$APP_DIR" rev-parse --short HEAD)" || die "not a git repo / no commits"
fi

if [ "$DO_BUILD" = true ] && [ -n "$(git -C "$APP_DIR" status --porcelain)" ]; then
  if [ "$ALLOW_DIRTY" = true ]; then
    warn "deploying with uncommitted changes — image tag $TAG will not match the working tree"
  else
    die "working tree has uncommitted changes; commit them, or re-run with --allow-dirty"
  fi
fi

info "AWS identity:"
aws sts get-caller-identity --query 'Arn' --output text 2>/dev/null | sed 's/^/    /' \
  || die "AWS credentials not working (run: aws configure / aws sso login)"

info "registry : $ECR_REGISTRY"
info "image    : $ECR_REPO:$TAG"
info "platform : $TARGET_PLATFORM"
info "target   : $REMOTE:$REMOTE_DIR"

# Make sure THIS machine can SSH to the instance — auto-updates the security
# group's SSH rule for your current public IP (handles changing IPs / phone
# hotspot). Non-fatal: if it can't, the SSH steps below fail with a clear error.
step "Ensuring SSH access from your current IP"
bash "$SCRIPT_DIR/allow-ssh-ip.sh" || warn "SSH IP auto-allow had a problem — SSH below may fail"

# ---------------------------------------------------------------------------
# Build + push
# ---------------------------------------------------------------------------
ecr_login_local() {
  aws ecr get-login-password --region "$AWS_REGION" \
    | docker login --username AWS --password-stdin "$ECR_REGISTRY" >/dev/null \
    || die "ECR login failed (local)"
}

if [ "$DO_BUILD" = true ]; then
  step "Logging in to ECR (local)"
  ecr_login_local

  step "Building image ($TARGET_PLATFORM) and tagging $TAG + latest"
  docker build --platform "$TARGET_PLATFORM" \
    -t "$ECR_REPO:$TAG" -t "$ECR_REPO:latest" "$APP_DIR"

  step "Pushing $TAG and latest to ECR"
  docker push "$ECR_REPO:$TAG"
  docker push "$ECR_REPO:latest"
else
  step "Skipping build (--no-build); deploying existing tag $TAG"
fi

# ---------------------------------------------------------------------------
# Ship config to the server
# ---------------------------------------------------------------------------
step "Uploading docker-compose.yml + Caddyfile to $REMOTE_DIR"
ssh "${SSH_OPTS[@]}" "$REMOTE" "mkdir -p '$REMOTE_DIR'" || die "cannot reach $REMOTE / mkdir failed"
scp "${SSH_OPTS[@]}" "$APP_DIR/docker-compose.yml" "$APP_DIR/Caddyfile" "$REMOTE:$REMOTE_DIR/" \
  || die "scp of compose/Caddyfile failed"

# docker-compose.yml references ${ECR_REPO} rather than hardcoding it (keeps
# the account/registry out of the committed file). Persist it in a .env next
# to the compose file so any `docker compose` run on the server — not just
# ones driven by this script — resolves the image correctly.
ssh "${SSH_OPTS[@]}" "$REMOTE" "cat > '$REMOTE_DIR/.env'" <<EOF
ECR_REPO=$ECR_REPO
EOF

# ---------------------------------------------------------------------------
# Deploy on the server
# ---------------------------------------------------------------------------
step "Deploying tag $TAG on $EC2_HOST"
ssh "${SSH_OPTS[@]}" "$REMOTE" \
  "IMAGE_TAG='$TAG' ECR_REPO='$ECR_REPO' AWS_REGION='$AWS_REGION' ECR_REGISTRY='$ECR_REGISTRY' REMOTE_DIR='$REMOTE_DIR' bash -s" <<'REMOTE_SCRIPT'
set -euo pipefail
aws ecr get-login-password --region "$AWS_REGION" \
  | docker login --username AWS --password-stdin "$ECR_REGISTRY" >/dev/null
cd "$REMOTE_DIR"
export IMAGE_TAG ECR_REPO
echo "    pulling app image ($IMAGE_TAG)..."
docker compose pull app
echo "    (re)starting services..."
docker compose up -d
echo "    waiting for the app container to report healthy..."
healthy=false
for _ in $(seq 1 30); do
  status="$(docker inspect -f '{{ if .State.Health }}{{ .State.Health.Status }}{{ else }}none{{ end }}' my-website 2>/dev/null || echo missing)"
  echo "      health: $status"
  if [ "$status" = "healthy" ]; then healthy=true; break; fi
  if [ "$status" = "none" ]; then healthy=true; break; fi   # no healthcheck defined
  sleep 2
done
docker image prune -f >/dev/null 2>&1 || true               # drop dangling layers
docker compose ps
[ "$healthy" = true ] || { echo "    app did not become healthy in time" >&2; exit 1; }
REMOTE_SCRIPT

# ---------------------------------------------------------------------------
# Public health check (optional)
# ---------------------------------------------------------------------------
if [ -n "$SITE_URL" ]; then
  step "Checking $SITE_URL"
  code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 15 "$SITE_URL" || echo 000)"
  if [ "$code" = "200" ]; then info "${GRN}$SITE_URL -> 200${RST}"
  else warn "$SITE_URL returned $code (DNS/TLS propagation or a real problem — check the server)"; fi
fi

step "${GRN}Deployed $TAG${RST}"
info "rollback: ./deploy/deploy.sh --no-build --tag <previous-sha>"
