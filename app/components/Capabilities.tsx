import Link from "next/link";
import { capabilities } from "../content/capabilities";

export default function Capabilities() {
  const upperServices = capabilities.slice(0, 4);
  const lowerServices = capabilities.slice(4);

  const renderServices = (services: typeof capabilities) => (
    <ol>
      {services.map((service) => (
        <li
          key={service.id}
          className="border-t border-[#8A8779]/70 transition-colors last:border-b hover:bg-[#1A1A1A]/[0.025]"
        >
          <Link
            href={`/capabilities/${service.slug}`}
            className="group grid grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-start gap-x-4 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D45C55] sm:grid-cols-[3rem_minmax(0,1fr)_2rem] sm:gap-x-5 sm:py-7 lg:gap-x-7"
          >
            <span className="pt-1 font-serif text-lg font-large text-[#1A1A1A] sm:text-xl">
              {service.id}
            </span>
            <h3 className="min-w-0 font-serif text-2xl font-normal leading-tight tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
            {service.title}
            </h3>
            <span
              aria-hidden="true"
              className="pt-1 text-xl text-[#1A1A1A]/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D45C55] sm:justify-self-end"
            >
             <b> __</b>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );

  return (
    <section
      id="capabilities"
      className="bg-[#F2EFE9] px-4 py-5 font-sans text-[#1A1A1A] sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-12 bg-[#F2EFE9] px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-16 lg:px-14 lg:py-20">
        <header className="flex flex-col items-start space-y-4 lg:col-start-1 lg:col-span-6 lg:row-start-1">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/45">
            Capabilities
          </span>
          <h2 className="max-w-md text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            How we can help you
          </h2>
        </header>

        <div className="w-full lg:col-start-7 lg:col-span-6 lg:row-start-1">
          {renderServices(upperServices)}
        </div>

        <div className="w-full lg:col-start-1 lg:col-span-6 lg:row-start-2">
          {renderServices(lowerServices)}
        </div>
      </div>
    </section>
  );
}
