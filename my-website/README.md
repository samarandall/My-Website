# samarandall.com

Personal portfolio site for Sam Randall — a static [Next.js](https://nextjs.org)
(App Router) app styled with Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router, `output: "standalone"`)
- **React 19**
- **Tailwind CSS v4** + Radix primitives + lucide-react icons
- **framer-motion** for animation
- Deployed as a Docker container behind a **Caddy** reverse proxy (automatic HTTPS)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project layout

```
src/
  app/          # App Router routes (/, /projects, /experience), layout, metadata, robots, sitemap
  views/        # Page-level view components rendered by the routes
  components/   # UI primitives, cards, and page sections
  lib/          # data (profile, projects, experience…), motion variants, utils
  types/        # shared TypeScript types
```

## Deployment

See [`instructions`](./instructions) for the build → push (ECR) → run (EC2 + Docker
Compose) runbook. Security headers are set in [`next.config.ts`](./next.config.ts)
and HSTS at the Caddy edge ([`Caddyfile`](./Caddyfile)).
