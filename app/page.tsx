import ContactForm from "./components/ContactForm";

const capabilities = [
  {
    title: "Brand & identity",
    items: ["Naming & positioning", "Visual identity systems", "Guidelines & brand voice", "Pitch & investor decks"],
  },
  {
    title: "Product design",
    items: ["UX research & flows", "Design systems", "High-fidelity UI", "Prototyping"],
  },
  {
    title: "Web engineering",
    items: ["Marketing sites", "Web apps (React/Next)", "CMS & headless setups", "Performance & accessibility"],
  },
  {
    title: "Motion & 3D",
    items: ["Product visualisation", "UI micro-interactions", "Launch trailers", "Interactive demos"],
  },
];

const work = [
  { name: "Adaeze — grocery delivery app", tag: "Product design" },
  { name: "Northbeam — climate data platform", tag: "Brand + web" },
  { name: "Osaru — creator payments", tag: "Product design" },
  { name: "Palmline — logistics dashboard", tag: "Web engineering" },
  { name: "Ferro — furniture studio", tag: "Brand identity" },
  { name: "Weld — developer tools", tag: "Web engineering" },
];

const plans = [
  {
    name: "Project",
    blurb: "A fixed-scope engagement — a brand, a site, a product surface.",
    price: "From $6,000",
    features: ["Fixed timeline & scope", "Two dedicated leads", "Weekly reviews", "Source files handed over"],
  },
  {
    name: "Studio retainer",
    blurb: "Ongoing design and engineering capacity for a growing team.",
    price: "$9,500 / month",
    features: ["Async + weekly syncs", "Design + build in one team", "Pause or cancel anytime", "Priority turnaround"],
    featured: true,
  },
  {
    name: "Advisory",
    blurb: "A few hours a month to pressure-test decisions before you ship.",
    price: "$1,200 / month",
    features: ["Monthly design review", "Slack access", "Roadmap input", "No build work included"],
  },
];

const faqs = [
  {
    q: "How does a typical engagement start?",
    a: "A 30-minute call to understand the problem, then a short written proposal with scope, timeline, and price. Work usually begins within two weeks.",
  },
  {
    q: "Who actually works on the project?",
    a: "A small fixed team — never a rotating pool of contractors. You'll know the two or three people working on your project by name.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — about half of our work is with pre-seed to Series A teams. The Project plan is usually the right fit at that stage.",
  },
  {
    q: "What do we receive at the end?",
    a: "Full source files (design + code), a short handover document, and a licence to use everything without restriction.",
  },
  {
    q: "Can we bring our own engineers?",
    a: "Often, yes. We're used to working alongside in-house teams — pairing on architecture decisions and handing off cleanly.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-clay/20 bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-display text-xl tracking-tight">
            Kilofedi
          </a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#work" className="hover:text-indigo">Work</a>
            <a href="#capabilities" className="hover:text-indigo">Capabilities</a>
            <a href="#pricing" className="hover:text-indigo">Pricing</a>
            <a href="#faq" className="hover:text-indigo">FAQ</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2 text-sm text-paper transition hover:bg-indigo"
          >
            Start a project
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="mb-6 max-w-md text-sm text-clay">
          A design and engineering studio working in short, focused sprints.
        </p>
        <h1 className="font-display text-4xl leading-[1.08] tracking-tight md:text-6xl">
          We build the brand, the product, and the site — as one connected piece of work.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink/70">
          Kilofedi pairs designers and engineers on the same team, on the same
          timeline, so nothing gets lost between the mockup and the shipped
          product.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-indigo px-6 py-3 text-sm font-medium text-paper transition hover:opacity-90"
          >
            Tell us about your project
          </a>
          <a href="#work" className="text-sm underline underline-offset-4 hover:text-indigo">
            See recent work
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-clay/20 bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">Selected work</h2>
            <span className="hidden text-sm text-paper/50 md:block">2023 — 2026</span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-paper/10 sm:grid-cols-2">
            {work.map((w) => (
              <div
                key={w.name}
                className="group flex aspect-[4/3] flex-col justify-end bg-ink p-6 transition hover:bg-paper/5"
              >
                <span className="mb-2 text-xs uppercase tracking-wide text-indigo">
                  {w.tag}
                </span>
                <span className="font-display text-xl">{w.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-4xl">What we do</h2>
        <p className="mt-4 max-w-xl text-ink/70">
          Four disciplines, one team — so the brand and the build stay in
          sync from the first sketch to launch.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="border-t border-clay/30 pt-6">
              <h3 className="font-display text-xl">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-clay/20 bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl md:text-4xl">Pricing</h2>
          <p className="mt-4 max-w-xl text-paper/70">
            Three ways to work with us — pick the shape, not just the size.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? "border-indigo bg-indigo/10"
                    : "border-paper/15"
                }`}
              >
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-paper/60">{p.blurb}</p>
                <p className="mt-6 font-display text-2xl">{p.price}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-paper/70">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-5 py-2.5 text-center text-sm font-medium transition ${
                    p.featured
                      ? "bg-indigo text-paper hover:opacity-90"
                      : "border border-paper/30 hover:border-paper"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-4xl">Frequently asked</h2>
        <div className="mt-10 divide-y divide-clay/20">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="ml-4 shrink-0 text-clay transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-clay/20 bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 max-w-md text-paper/70">
              Tell us what you&apos;re building. We reply within one business
              day with next steps.
            </p>
            <p className="mt-8 text-sm text-paper/60">
              Or write directly to{" "}
              <a href="mailto:studio@kilofedi.com" className="underline underline-offset-4">
                studio@kilofedi.com
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-clay">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg text-ink">Kilofedi</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-indigo">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo">Terms</a>
          </div>
          <span>© {new Date().getFullYear()} Kilofedi Studio</span>
        </div>
      </footer>
    </main>
  );
}
