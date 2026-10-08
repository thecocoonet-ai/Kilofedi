"use client";

import { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Fashion & Styling",
    description:
      "Culturing a visual identity and presence through wardrobe and silhouettes exuding Intent and Power.",
  },
  {
    id: "02",
    title: "Interior & Spatial Design",
    description:
      "Engineering physical environments from executive suites to brand flagships to mirror authority, evoke specific psychological responses, and command high-value interactions.",  },
  {
    id: "03",
    title: "Grooming & Beauty",
    description:
      "Sculpting the physical self into the dream self through skincare, hair care, facial grooming, fragrances, and signature details.",
  },
  {
    id: "04",
    title: "Authority & Articulation",
    description:
      "Bringing the rebrand to the world, then measuring, benchmarking and governing it going forward.",
  },
];

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="capabilities"
      className="relative flex w-full flex-col justify-between overflow-hidden bg-[#F2EFE9] py-24 font-sans text-[#1A1A1A] md:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-16 px-6 md:px-12 lg:grid-cols-12 lg:gap-12 xl:px-16">
        <div className="flex flex-col items-start space-y-4 lg:sticky lg:top-24 lg:col-span-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#6A6A68]">
            Capabilities
          </span>
          <h2 className="max-w-md font-serif text-5xl font-normal leading-[1.05] tracking-wide text-[#1A1A1A] md:text-6xl">
            How We <br />Shape Your <br />Evolution.
          </h2>
        </div>

        <div className="flex w-full flex-col lg:col-span-7">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const panelId = `capability-panel-${service.id}`;

            return (
              <div
                key={service.id}
                className="flex w-full flex-col border-t border-[#1A1A1A]/40 first:border-t-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full select-none items-center justify-between py-7 text-left focus-visible:outline-[#1A1A1A] md:py-8"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="flex min-w-0 items-center gap-4 md:gap-6">
                    <span className="shrink-0 font-serif text-2xl font-normal tracking-tight text-[#1A1A1A] md:text-3xl">
                      {service.id}
                    </span>
                    <span className="font-serif text-2xl font-normal tracking-tight text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-1.5 md:text-3xl">
                      {service.title}
                    </span>
                  </span>

                  <span className="relative ml-4 flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
                    <span
                      className="absolute h-[1.5px] w-4 bg-[#1A1A1A] transition-transform duration-300 ease-out"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    />
                    <span
                      className="absolute h-4 w-[1.5px] bg-[#1A1A1A] transition-transform duration-300 ease-out"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(90deg)" }}
                    />
                  </span>
                </button>

                <div
                  id={panelId}
                  className={`grid overflow-hidden pl-9 transition-all duration-500 ease-in-out md:pl-12 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-8 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-base font-light leading-relaxed text-[#4A4A46] md:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full border-b border-[#1A1A1A]/40" />
        </div>
      </div>
    </section>
  );
}