import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(4000),
  // Honeypot: real visitors never fill this in (it's visually hidden).
  company: z.string().max(0).optional().or(z.literal("")),
});

// Simple in-memory fixed-window rate limiter.
// Good enough for a low-traffic marketing site on a single instance.
// Swap for a shared store (Upstash/Redis) once running on multiple instances.
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const hits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(key, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  // Honeypot tripped — pretend success so bots don't learn to avoid it.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  // TODO: wire up a transactional email/CRM provider here, e.g.:
  // await sendEmail({ to: process.env.CONTACT_FORM_TO_EMAIL, name, email, message });
  // Keep the API key server-side only (see .env.example) — never expose it
  // via NEXT_PUBLIC_*.
  console.log("New contact submission:", { name, email, messageLength: message.length });

  return NextResponse.json({ ok: true });
}
