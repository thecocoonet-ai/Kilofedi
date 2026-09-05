# Security

This document lists the security measures built into the Kilofedi site and
what to check before/after deploying.

## Built in

- **HTTP security headers** (`next.config.js`): Content-Security-Policy,
  X-Frame-Options (clickjacking), X-Content-Type-Options (MIME sniffing),
  Referrer-Policy, Permissions-Policy, and HSTS in production.
- **`X-Powered-By` header disabled** so the framework/version isn't
  advertised to scanners.
- **Contact form**
  - Server-side validation with `zod` (never trust client-side checks alone).
  - Honeypot field to filter out unsophisticated bots.
  - Basic per-IP rate limiting on the `/api/contact` route.
  - No secrets or provider API keys are ever sent to the browser — only
    `NEXT_PUBLIC_*` env vars are exposed client-side, and none are used for
    the contact flow.
- **Dependency hygiene**
  - Dependabot enabled for weekly `npm` and GitHub Actions updates.
  - CI runs `npm audit --audit-level=high` on every push/PR.
- **`.gitignore`** excludes `.env*`, build output, and `.vercel` so secrets
  and local artifacts never get committed.

## Before going to production

1. Set real values for the env vars in `.env.example` in your host's secret
   manager (Vercel/Netlify project settings) — never commit `.env.local`.
2. If you add any third-party script or font (analytics, embeds, etc.),
   update the `Content-Security-Policy` in `next.config.js` to explicitly
   allow that origin instead of loosening it broadly.
3. Point the contact route at a real email/CRM provider and confirm the
   provider's API key is only referenced server-side (inside
   `app/api/contact/route.ts`), never in a client component.
4. Turn on your platform's DDoS/bot protection (e.g. Vercel's built-in
   protections, or Cloudflare in front of the domain) — the in-app rate
   limiter is a baseline, not a substitute.
5. Enable HTTPS-only / "Always use HTTPS" at the DNS/CDN layer so the HSTS
   header has something to enforce.
6. Restrict who can push to `main` (branch protection) and require the CI
   workflow to pass before merge.

## Reporting a vulnerability

Email **security@kilofedi.com** with details and, if possible, steps to
reproduce. Please don't open a public issue for security reports.
