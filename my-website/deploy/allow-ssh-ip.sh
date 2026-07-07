#!/usr/bin/env bash
#
# Ensure THIS machine's current public IP is allowed to SSH (tcp/22) to the EC2
# instance configured in deploy.env. Handy when your IP changes (home -> phone
# hotspot, etc.) and the security group's SSH rule no longer matches.
#
# It manages a SINGLE auto-tagged rule (description "deploy-auto-ssh"): it revokes
# any earlier auto rule for a different IP and authorizes your current IP. Any
# manually-added SSH rules are left untouched. Best-effort and non-fatal — if the
# AWS CLI/permissions aren't available it just warns and exits 0.
#
#   ./deploy/allow-ssh-ip.sh
#
# Optional in deploy.env: SSH_SECURITY_GROUP_ID=sg-xxxx (skips auto-discovery).
set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
[ -f "$SCRIPT_DIR/deploy.env" ] && . "$SCRIPT_DIR/deploy.env"
: "${AWS_REGION:=us-east-1}"
DESC="deploy-auto-ssh"

note() { printf '    %s\n' "$*"; }
warn() { printf 'warning: %s\n' "$*" >&2; }

command -v aws  >/dev/null 2>&1 || { warn "aws CLI not found — skipping SSH IP auto-allow"; exit 0; }
command -v curl >/dev/null 2>&1 || { warn "curl not found — skipping SSH IP auto-allow";   exit 0; }

# 1) current public IP
IP="$(curl -s --max-time 8 https://checkip.amazonaws.com | tr -d '[:space:]')"
[ -n "$IP" ] || { warn "could not determine current public IP — skipping"; exit 0; }

# 2) the SSH security group: explicit override, else discover from the instance
#    behind EC2_HOST (its public IP is embedded in the hostname).
SG="${SSH_SECURITY_GROUP_ID:-}"
if [ -z "$SG" ]; then
  [ -n "${EC2_HOST:-}" ] || { warn "no EC2_HOST / SSH_SECURITY_GROUP_ID — cannot find the SG"; exit 0; }
  HOSTIP="$(printf '%s' "$EC2_HOST" | sed -E 's/^ec2-//; s/\..*$//; s/-/./g')"
  INST_SGS="$(aws ec2 describe-instances --region "$AWS_REGION" \
                --filters "Name=ip-address,Values=$HOSTIP" "Name=instance-state-name,Values=running" \
                --query 'Reservations[].Instances[].SecurityGroups[].GroupId' --output text 2>/dev/null | tr '\t' ',')"
  [ -n "$INST_SGS" ] || { warn "no running instance found at $HOSTIP — set SSH_SECURITY_GROUP_ID"; exit 0; }
  # among those SGs, the one that actually has a tcp/22 ingress rule
  SG="$(aws ec2 describe-security-groups --region "$AWS_REGION" \
          --filters "Name=group-id,Values=$INST_SGS" "Name=ip-permission.from-port,Values=22" \
          --query 'SecurityGroups[0].GroupId' --output text 2>/dev/null)"
fi
[ -n "$SG" ] && [ "$SG" != "None" ] || { warn "could not find the SSH security group — set SSH_SECURITY_GROUP_ID in deploy.env"; exit 0; }

echo "==> Ensuring SSH from your current IP ($IP) is allowed on $SG"

# 3) revoke stale auto-managed rules (our description) that aren't the current IP
for old in $(aws ec2 describe-security-groups --region "$AWS_REGION" --group-ids "$SG" \
               --query "SecurityGroups[0].IpPermissions[].IpRanges[?Description=='$DESC'].CidrIp" \
               --output text 2>/dev/null); do
  if [ -n "$old" ] && [ "$old" != "$IP/32" ]; then
    note "revoking stale auto rule $old"
    aws ec2 revoke-security-group-ingress --region "$AWS_REGION" --group-id "$SG" \
      --ip-permissions "IpProtocol=tcp,FromPort=22,ToPort=22,IpRanges=[{CidrIp=$old}]" >/dev/null 2>&1 || true
  fi
done

# 4) authorize the current IP (idempotent — a duplicate is fine)
if out="$(aws ec2 authorize-security-group-ingress --region "$AWS_REGION" --group-id "$SG" \
            --ip-permissions "IpProtocol=tcp,FromPort=22,ToPort=22,IpRanges=[{CidrIp=$IP/32,Description=$DESC}]" 2>&1)"; then
  note "authorized $IP/32 for SSH ✓"
elif printf '%s' "$out" | grep -q 'InvalidPermission.Duplicate'; then
  note "$IP/32 already allowed ✓"
else
  warn "could NOT authorize $IP — $(printf '%s' "$out" | tail -1)"
fi
