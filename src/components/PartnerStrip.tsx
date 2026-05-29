import { partners } from "@/lib/data";

export default function PartnerStrip() {
  return (
    <section className="bg-cream py-8 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-6">
          Working alongside trusted partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {partners.map((partner, i) => (
            <span
              key={partner}
              className="text-sm font-semibold text-navy/55 hover:text-navy/80 transition-colors tracking-wide"
            >
              {partner}
              {i < partners.length - 1 && (
                <span className="ml-10 text-border hidden" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
