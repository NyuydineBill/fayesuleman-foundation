import type { Metadata } from "next";
import PageHero, { Breadcrumb, SectionLabel } from "@/components/PageHero";
import { transparencyBreakdown } from "@/lib/data";

export const metadata: Metadata = {
  title: "Transparency",
  description: "FSF financial transparency: audited reports, governance documents, and donation allocation breakdown.",
};

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        title="Transparency is not optional. It's our foundation."
        subtitle="Every donor deserves to know exactly where their money goes. Here are our numbers, our documents, and our commitment."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
        caption="FSF Annual Review · 2025"
      />
      <Breadcrumb items={[{ label: "Transparency" }]} />

      {/* Donation breakdown */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionLabel>How We Use Donations</SectionLabel>
              <h2 className="font-serif text-3xl text-navy mb-6">
                Where every dollar goes
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                We are committed to maximizing the impact of every donation. Our
                financial management is overseen by an independent board treasurer
                and subject to annual audit.
              </p>
              <div className="space-y-5">
                {transparencyBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-navy">{item.label}</span>
                      <span className="font-bold text-navy">{item.percent}%</span>
                    </div>
                    <div className="h-2.5 bg-cream rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy text-white p-6 lg:p-8">
              <p className="font-serif text-7xl text-gold font-medium mb-3 leading-none">82%</p>
              <p className="text-xl text-white mb-6 font-medium">of all donations go directly to programmes</p>
              <div className="w-12 h-0.5 bg-gold/50 mb-6" />
              <p className="text-white/70 text-sm leading-relaxed">
                This exceeds the industry benchmark for charitable organizations
                and reflects our commitment to keeping overhead low while maintaining
                professional operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-cream py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>Documents & Reports</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-6">Download our reports</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Annual Report 2024", type: "PDF · 2.4 MB" },
              { title: "Audited Financial Statements 2024", type: "PDF · 1.1 MB" },
              { title: "Foundation Registration Certificate", type: "PDF · 0.5 MB" },
              { title: "Governance & Bylaws", type: "PDF · 0.8 MB" },
              { title: "Programme Impact Summary 2024", type: "PDF · 3.2 MB" },
              { title: "Privacy Policy", type: "PDF · 0.3 MB" },
            ].map((doc) => (
              <button
                key={doc.title}
                className="flex items-start gap-4 p-6 bg-white border border-border hover:border-gold/50 hover:shadow-sm transition-all duration-200 text-left group"
              >
                <div className="w-10 h-10 bg-cream flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-1">{doc.title}</p>
                  <p className="text-xs text-muted">{doc.type}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <SectionLabel>Accreditation</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-6">Charity ratings & seals</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Candid Platinum Seal", "Charity Navigator", "GuideStar", "Registered NGO, Cameroon"].map((badge) => (
              <div key={badge} className="px-5 py-4 border border-border text-sm font-semibold text-navy/65 tracking-wide hover:border-gold/40 transition-colors text-center">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
