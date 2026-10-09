import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Capabilities from "./components/Capabilities";
import brandLogo from "../The Cocoon Logo Type 2.jpg";
import FSImage from "../re.jpg";
import ISImage from "../Modern Architecture.jpg";
import GBImage from "../gb.jpg";
import AAImage from "../aa.jpg";
import StephImage from "../Steph ade.jpg";
import lineArtImage from "../line-art-transparent.png";


const work = [
  {
    name: "Fashion & Styling",
    detail: "Visual identity & Presence",
    tag: "F & S",
    visual: FSImage,
  },
  {
    name: "Interior & Spatial Design",
    detail: "Engineering physical environments",
    tag: "I & S",
    visual: ISImage,
  },
  {
    name: "Grooming & Beauty",
    detail: "Sculpting the physical self into the dream self",
    tag: "G & B",
    visual: GBImage,
  },
  {
    name: "Authority & Articulation",
    detail: "Verbal, visual and sound design",
    tag: "A & A",
    visual: AAImage,
  },
  
];

const clients = ["F & S", "I & S", "G & B", "A & A"];

const featuredWork = [
  {
    name: "Adaeze",
    label: "Grocery delivery app",
    visual: "bg-[linear-gradient(135deg,#d9e6d0_0%,#f3c5a8_48%,#ed8e68_100%)]",
    shape: "bg-[radial-gradient(ellipse_at_38%_62%,#20252a_0%,#20252a_18%,transparent_19%),radial-gradient(ellipse_at_67%_62%,#20252a_0%,#20252a_14%,transparent_15%),linear-gradient(165deg,transparent_42%,rgba(255,255,255,0.5)_43%,transparent_46%)]",
  },
  {
    name: "Northbeam",
    label: "Climate data platform",
    visual: "bg-[linear-gradient(135deg,#17352f_0%,#4e8170_50%,#c9d6b9_100%)]",
    shape: "bg-[linear-gradient(145deg,transparent_0%,transparent_38%,rgba(255,255,255,0.9)_39%,rgba(255,255,255,0.9)_62%,transparent_63%),linear-gradient(45deg,transparent_0%,transparent_48%,rgba(255,214,0,0.95)_49%,rgba(255,214,0,0.95)_66%,transparent_67%)]",
  },
  {
    name: "Weld",
    label: "Developer tools",
    visual: "bg-[linear-gradient(135deg,#d9dbe4_0%,#727a9c_48%,#26283d_100%)]",
    shape: "bg-[radial-gradient(ellipse_at_58%_58%,#b7c0c7_0%,#b7c0c7_21%,transparent_22%),radial-gradient(ellipse_at_71%_43%,#e9eceb_0%,#e9eceb_24%,transparent_25%),linear-gradient(140deg,transparent_44%,rgba(31,37,45,0.72)_45%,rgba(31,37,45,0.72)_59%,transparent_60%)]",
  },
];

const plans = [
  {
    name: "Pockets",
    blurb: "Single Offering",
    price: "From ₦250,000",
    features: ["Fixed timeline & scope", "Design & Strategy Docs (Single)",  "Kilofedi Products (Single)", ],
  },
  {
    name: "Full Circle",
    blurb: "Bundle Offering",
    price: "From ₦800,000",
    features: ["Fixed timeline & scope", "Design & Strategy Docs (Bundle)" , "Kilofedi Products (Bundle)", "Intensive Training", ],
    featured: true,
  },
  {
    name: "Retainer",
    blurb: "Evolutionary Offering",
    price: "₦150,000 / month",
    features: ["Monthly Implementation Review", "Kilofedi Products (Retainer)", "Continuous Training Advisory"],
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
      <header className="sticky top-0 z-50 border-t-[3px] border-ink bg-white text-ink shadow-[0_1px_0_rgba(21,22,26,0.08)]">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-[74px] sm:px-10">
          <a href="#top" aria-label="Kilofedi home" className="flex items-center">
            <h1 className="bold">KÍLOFẸ̀DÌ</h1>
          </a>

          <div className="flex items-center gap-3 text-[15px] font-medium sm:gap-12">
            <a href="#work" className="hidden transition-opacity hover:opacity-60 sm:block">Works</a>
            <a href="#capabilities" className="hidden transition-opacity hover:opacity-60 sm:block">Services</a>
            <a href="#faq" className="hidden transition-opacity hover:opacity-60 sm:block">About Us</a>
            <a
              href="#contact"
              className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.03] sm:px-5 sm:py-3 sm:text-sm"
            >
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
              </svg>
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#F2EFE9] py-16 font-sans text-[#1A1A1A] lg:py-0">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-8 xl:px-16">
          <div className="z-10 flex flex-col items-start text-left lg:col-span-5">
            <h1 className="mb-6 font-serif text-5xl font-normal uppercase leading-none tracking-[0.03em] text-[#1A1A1A] md:text-6xl xl:text-7xl">
              KÍLOFẸ̀DÌ
            </h1>
            <div className="mb-8 space-y-1">
              <h2 className="text-xl font-light tracking-normal text-[#1A1A1A] md:text-2xl">
                (Who do you want to become?)
              </h2>
              
            </div>
            <a
              href="#contact"
              className="bg-[#1C1C1B] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F2EFE9] transition-colors duration-300 hover:bg-[#3A3A38] active:scale-[0.98]"
            >
              Own it 
            </a>
          </div>

          <div className="flex min-h-[350px] w-full items-center justify-center md:min-h-[500px] lg:col-span-7 lg:justify-end">
            <Image
              src={lineArtImage}
              alt="Single-line illustration of a face transforming into a wing"
              priority
              className="h-auto w-full max-w-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="border-b border-clay/10 bg-white py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-5">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">Selected work</h2>
            <span className="hidden text-sm text-ink/40 md:block">2023 — 2026</span>
          </div>

          <div className="mb-10 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">
            {clients.map((client) => (
              <span key={client} className="rounded-full border border-ink/10 bg-[#f2f2f0] px-3 py-2">
                {client}
              </span>
            ))}
          </div>

          <div className="grid items-start gap-4 sm:grid-cols-2 sm:gap-5 md:gap-10">
            {work.map((project, index) => (
              <article
                key={project.name}
                className={`w-full max-w-[26rem] space-y-3 ${index % 2 === 1 ? "sm:mt-20 md:mt-28" : ""}`}
              >
                {typeof project.visual === "string" ? (
                  <div className={`group aspect-[1.12] overflow-hidden rounded-[16px] ${project.visual}`}>
                    <div className="h-full w-full bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.6),transparent_24%),linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.2)_30%,transparent_31%,transparent_62%,rgba(0,0,0,0.12)_63%,transparent_64%)] transition duration-700 group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="group relative aspect-[1.12] overflow-hidden rounded-[16px]">
                    <Image
                      src={project.visual}
                      alt={project.name}
                      fill
                     className="object-cover object-[50%_30%] transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.15),transparent_26%),linear-gradient(115deg,transparent_32%,rgba(0,0,0,0.12)_33%,transparent_34%,transparent_64%,rgba(0,0,0,0.12)_65%,transparent_66%)]" />
                  </div>
                )}
                <div className="min-h-[126px] rounded-[16px] bg-[#f2f2f0] p-4 md:p-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-ink/45">{project.tag}</p>
                  <h3 className="mt-3 font-display text-[1.5rem] leading-none md:text-[1.8rem]">{project.name}</h3>
                  <p className="mt-2 max-w-[13rem] text-[13px] leading-relaxed text-ink/65">{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Capabilities />

      {/* Pricing */}
      <section id="pricing" className="border-y border-paper/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl md:text-4xl">Pricing</h2>
          <p className="mt-4 max-w-xl text-paper/60">
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
      <section id="faq" className="bg-paper py-20 text-ink md:py-28">
        <div className="mx-auto max-w-3xl px-6">
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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-paper/10 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              Let&apos;s talk about YOU
            </h2>
            <p className="mt-4 max-w-md text-paper/60">
              Come tell us who you want to be. Let's bend-shape your reality
            </p>
            <p className="mt-8 text-sm text-paper/50">
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
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-paper/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg text-paper">Kilofedi</span>
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
