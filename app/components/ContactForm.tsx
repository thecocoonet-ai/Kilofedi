"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-paper/15 p-8">
        <p className="font-display text-xl">Message sent.</p>
        <p className="mt-2 text-sm text-paper/70">
          Thanks — we&apos;ll reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot field — hidden from real users, bots often fill every input */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="text-sm text-paper/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          className="mt-1 w-full rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-indigo"
          placeholder="Ada Obi"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-paper/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="mt-1 w-full rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-indigo"
          placeholder="ada@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-paper/70">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={4}
          className="mt-1 w-full rounded-lg border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-indigo"
          placeholder="What are you building, and what timeline are you working with?"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-indigo px-6 py-3 text-sm font-medium text-paper transition hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
