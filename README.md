# Kilofedi

Marketing site for Kilofedi — a design & engineering studio. Built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values locally
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

| Command           | What it does                          |
| ------------------ | -------------------------------------- |
| `npm run dev`       | Local dev server with hot reload       |
| `npm run build`     | Production build                       |
| `npm run start`     | Serve the production build             |
| `npm run lint`      | ESLint                                 |
| `npm run typecheck` | TypeScript, no emit                    |

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             The landing page
  globals.css          Tailwind + base styles
  components/
    ContactForm.tsx    Client-side contact form
  api/contact/route.ts Server-side form handling (validation, honeypot, rate limit)
next.config.js          Security headers (CSP, HSTS, etc.)
SECURITY.md              Security measures & pre-launch checklist
```

## Pushing to Git

This project is already initialised for git. To push to a new GitHub repo:

```bash
git remote add origin git@github.com:<your-org>/kilofedi.git
git branch -M main
git push -u origin main
```

Branch protection on `main` (require the CI check, require PR review) is
recommended before opening this up to more than one contributor — see
`SECURITY.md`.

## Deploying

The project deploys cleanly to any Next.js-compatible host. Two common
options:

### Vercel (recommended — zero config)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Add the environment variables from `.env.example` under
   **Project Settings → Environment Variables**.
3. Every push to `main` deploys to production; every PR gets a preview URL.

### Netlify

1. Import the repo, framework preset "Next.js" is auto-detected.
2. Build command: `npm run build`. Publish directory: handled automatically
   by the Next.js runtime plugin.
3. Add the same environment variables in **Site settings → Environment**.

### Any Node host (Railway, Render, Fly.io, a VPS, etc.)

```bash
npm ci
npm run build
npm run start   # serves on $PORT, default 3000
```

## CI

`.github/workflows/ci.yml` runs lint, typecheck, build, and a dependency
audit on every push and pull request. `.github/dependabot.yml` keeps
dependencies patched automatically.

## Security

See [`SECURITY.md`](./SECURITY.md) for the full list of measures (headers,
form hardening, rate limiting, dependency scanning) and the pre-launch
checklist.
