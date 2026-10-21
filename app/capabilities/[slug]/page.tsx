import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities } from "../../content/capabilities";

interface CapabilityPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return capabilities.map(({ slug }) => ({ slug }));
}

export function generateMetadata({
  params,
}: CapabilityPageProps): Metadata {
  const capability = capabilities.find(({ slug }) => slug === params.slug);

  if (!capability) {
    return { title: "Capability not found — Kilofedi" };
  }

  return {
    title: `${capability.title} — Kilofedi`,
    description: capability.description,
  };
}

export default function CapabilityPage({ params }: CapabilityPageProps) {
  const index = capabilities.findIndex(({ slug }) => slug === params.slug);
  const capability = capabilities[index];

  if (!capability) {
    notFound();
  }

  const nextCapability = capabilities[(index + 1) % capabilities.length];

  return (
    <main className="min-h-screen bg-[#F2EFE9] text-[#1A1A1A]">
      <header className="border-t-[3px] border-ink bg-white shadow-[0_1px_0_rgba(21,22,26,0.08)]">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-[74px] sm:px-10">
          <Link href="/" aria-label="Kilofedi home" className="font-serif text-xl font-semibold">
            KÍLOFẸ̀DÌ
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-75 sm:px-5 sm:py-3 sm:text-sm"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12 sm:py-24 xl:px-16">
        <Link
          href="/#capabilities"
          className="inline-flex items-center gap-2 text-sm text-[#1A1A1A]/60 transition-colors hover:text-[#1A1A1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D45C55]"
        >
          <span aria-hidden="true">←</span> All capabilities
        </Link>

        <div className="mt-16 grid gap-12 border-b border-[#8A8779]/70 pb-16 md:mt-24 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-16 md:pb-20">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.18em] text-[#D45C55]">
              [{capability.id}] &mdash; CAPABILITY
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {capability.title}
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-[#1A1A1A]/70 sm:text-xl">
            {capability.introduction}
          </p>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1fr_0.8fr] md:gap-16 md:py-20">
          <div>
            <p className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/45">
              The approach
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">
              {capability.overview}
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/45">
              What we can work on together
            </h2>
            <ul>
              {capability.deliverables.map((deliverable, deliverableIndex) => (
                <li
                  key={deliverable}
                  className="flex gap-4 border-t border-[#8A8779]/50 py-4 text-sm leading-relaxed text-[#1A1A1A]/75"
                >
                  <span className="font-mono text-xs text-[#D45C55]">
                    0{deliverableIndex + 1}
                  </span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {capability.pricing && (
          <section className="mt-16">
            <h2 className="mb-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/45">
              Pricing
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/75">
              {capability.pricing}
            </p>
          </section>
        )}

        <div className="flex flex-col justify-between gap-8 border-t border-[#8A8779]/70 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Ready to make it real?
            </p>
            <p className="mt-2 text-sm text-[#1A1A1A]/60">
              Tell us what you&apos;re working toward.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center gap-6 bg-[#1C1C1B] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#F2EFE9] transition-colors hover:bg-[#3A3A38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D45C55]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>

        <nav aria-label="Other capabilities" className="mt-16 border-t border-[#8A8779]/50 pt-6">
          <Link
            href={`/capabilities/${nextCapability.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A]/45">
                Next capability
              </span>
              <span className="mt-2 block text-xl font-semibold tracking-[-0.03em] transition-transform group-hover:translate-x-1 sm:text-2xl">
                {nextCapability.title}
              </span>
            </span>
            <span aria-hidden="true" className="text-xl text-[#D45C55]">
              →
            </span>
          </Link>
        </nav>
      </section>
    </main>
  );
}
