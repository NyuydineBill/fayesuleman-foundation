import type { Metadata } from "next";
import PillarCard from "@/components/PillarCard";
import PageHero, { Breadcrumb, SectionLabel, CTAButton } from "@/components/PageHero";
import { pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore FSF's five compassion pillars: food relief, clothing, education, health, and orphan support across Cameroon and Africa.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Five pillars. One mission."
        subtitle="Integrated programmes that address hunger, dignity, education, health, and the needs of vulnerable children."
        image="https://images.unsplash.com/photo-1532629345422-7515f3d4bb93?w=1600&q=80"
        caption="Far North Region, Cameroon · Clothing Distribution · 2025"
      />
      <Breadcrumb items={[{ label: "Our Programs" }]} />

      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionLabel>What We Do</SectionLabel>
            <p className="text-lg text-muted leading-relaxed mt-2">
              Each pillar operates independently yet connects to the whole. A child
              who receives school meals may also get a school uniform, a health
              screening, and mentorship. Need rarely comes in single
              categories.
            </p>
          </div>
        </div>
      </section>

      <div className="divide-y divide-border">
        {pillars.map((pillar, i) => (
          <div key={pillar.id} id={pillar.id}>
            <PillarCard {...pillar} index={i} />
          </div>
        ))}
      </div>

      {/* Where we work */}
      <section className="py-10 lg:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionLabel>Where We Work</SectionLabel>
              <h2 className="font-serif text-3xl text-navy mb-6">
                Operational across Cameroon & sub-Saharan Africa
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Our primary operations are in Cameroon, spanning the Northwest,
                Southwest, Littoral, Far North, and Centre regions. We are actively
                expanding partnerships into neighbouring countries through our
                international outreach programme.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Northwest Region: School meals & education",
                  "Far North: Displaced families & hygiene kits",
                  "Littoral: Headquarters & health outreach",
                  "Centre: Orphan support & vocational training",
                  "Southwest: Emergency food relief",
                ].map((loc) => (
                  <li key={loc} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    <span className="text-navy">{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] bg-navy/5 border border-border flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-20" fill="none">
                <circle cx="200" cy="140" r="80" stroke="#C8932A" strokeWidth="1" />
                <circle cx="200" cy="140" r="40" fill="#C8932A" opacity="0.3" />
                <circle cx="160" cy="100" r="6" fill="#2E7DC4" />
                <circle cx="240" cy="120" r="5" fill="#2E7DC4" />
                <circle cx="190" cy="170" r="4" fill="#2E7DC4" />
                <circle cx="220" cy="90" r="4" fill="#C8932A" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white/90 shadow-sm">
                  <p className="text-sm font-semibold text-navy">Interactive map coming soon</p>
                  <p className="text-xs text-muted mt-1">47 communities · 5 regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 text-center">
        <CTAButton href="/donate" variant="primary">
          Support a programme
        </CTAButton>
      </section>
    </>
  );
}
