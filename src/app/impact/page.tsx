import type { Metadata } from "next";
import Image from "next/image";
import ImpactCounter from "@/components/ImpactCounter";
import TestimonialBlock from "@/components/TestimonialBlock";
import PageHero, { Breadcrumb, SectionLabel, CTAButton } from "@/components/PageHero";
import { impactStats, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impact & Stories",
  description: "See the real impact of FSF programmes: statistics, beneficiary stories, and field photography from Cameroon and Africa.",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d4bb93?w=600&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Impact you can see. Stories you can trust."
        subtitle="Real numbers from real programmes, because donors deserve proof, not promises."
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1600&q=80"
        caption="Bafut, Northwest Region · School Feeding Programme · 2025"
      />
      <Breadcrumb items={[{ label: "Impact" }]} />

      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ImpactCounter stats={impactStats} />
        </div>
      </section>

      {/* Dashboard-style breakdown */}
      <section className="py-10 lg:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>2024 Programme Results</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-8">Impact by programme area</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { area: "Food Relief", metric: "12,400", unit: "meals served", change: "+34% vs 2023" },
              { area: "Education", metric: "340", unit: "students on bursaries", change: "+22% vs 2023" },
              { area: "Health", metric: "2,100", unit: "consultations", change: "New programme" },
              { area: "Clothing", metric: "890", unit: "families clothed", change: "+18% vs 2023" },
              { area: "Orphans & Children", metric: "180", unit: "children supported", change: "+41% vs 2023" },
              { area: "Communities", metric: "47", unit: "communities reached", change: "5 regions" },
            ].map((item) => (
              <div key={item.area} className="bg-white p-8 border-l-4 border-gold hover:shadow-sm transition-shadow">
                <p className="text-xs font-bold tracking-wider uppercase text-muted mb-3">
                  {item.area}
                </p>
                <p className="font-serif text-4xl text-navy mb-1 leading-none">{item.metric}</p>
                <p className="text-sm text-muted mb-3">{item.unit}</p>
                <p className="text-xs text-sky font-semibold">{item.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock {...testimonials[0]} />

      {/* Photo gallery */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>Field Gallery</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-6">Life on the ground</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="bg-navy py-12 text-white text-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-3xl mb-4">Annual Impact Reports</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Download our programme reports and see detailed breakdowns of every initiative.
          </p>
          <CTAButton href="/transparency" variant="primary">
            Download reports
          </CTAButton>
        </div>
      </section>
    </>
  );
}
