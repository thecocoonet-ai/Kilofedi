/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Allow the Calendly booking widget and iframe to load while keeping the rest
// of the site locked down to a strict Content Security Policy.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://assets.calendly.com https://*.calendly.com`,
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://*.calendly.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data: https://assets.calendly.com",
  "connect-src 'self' https://calendly.com https://*.calendly.com https://assets.calendly.com",
  "frame-src 'self' https://calendly.com https://*.calendly.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // don't leak "X-Powered-By: Next.js"
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
