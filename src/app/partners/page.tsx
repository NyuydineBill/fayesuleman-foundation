import type { Metadata } from "next";
import PageHero, { Breadcrumb, SectionLabel } from "@/components/PageHero";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partner with the Faye Suleiman Foundation for corporate CSR, institutional funding, and NGO collaborations.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Stronger together"
        subtitle="We partner with NGOs, corporates, and institutional funders to deliver impact at scale across sub-Saharan Africa."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        caption="FSF Partnership Summit · Douala · 2025"
      />
      <Breadcrumb items={[{ label: "Partners" }]} />

      {/* Current partners */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>Our Partners</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-8">
            Organisations we work alongside
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center p-8 bg-cream border border-border min-h-[120px] hover:border-gold/40 hover:bg-white transition-all duration-200"
              >
                <span className="text-sm font-semibold text-navy/70 text-center tracking-wide">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="bg-cream py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>Partnership Opportunities</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-8">Ways to partner with FSF</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Corporate CSR",
                desc: "Align your company's social responsibility goals with measurable community impact. We provide detailed impact reporting for your stakeholders.",
              },
              {
                title: "Institutional Funding",
                desc: "Grant-ready documentation, audited financials, and programme data for UN agencies, foundations, and bilateral donors.",
              },
              {
                title: "NGO Collaboration",
                desc: "Joint field operations, shared resources, and co-branded programmes with established humanitarian organizations.",
              },
            ].map((type) => (
              <div key={type.title} className="bg-white p-6 lg:p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-serif text-xl text-navy mb-3">{type.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor recognition */}
      <section className="py-10 lg:py-14 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <SectionLabel>Donor Recognition</SectionLabel>
          <h2 className="font-serif text-3xl mb-6">Our gratitude wall</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            We honour every partner and donor who makes our work possible.
            Major supporters are recognized in our annual report and on this page.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["Anonymous Donor", "Community Church Network", "Diaspora Giving Circle", "Local Business Alliance"].map((donor) => (
              <div key={donor} className="p-5 border border-white/15 text-sm text-white/75">
                {donor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership form */}
      <section className="py-10 lg:py-14">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-8">Partnership inquiry</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="org-name" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                  Organization
                </label>
                <input
                  id="org-name"
                  type="text"
                  className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-name" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                  Contact Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label htmlFor="partnership-type" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                Partnership Type
              </label>
              <select
                id="partnership-type"
                className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
              >
                <option>Corporate CSR</option>
                <option>Institutional Grant</option>
                <option>NGO Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold text-navy font-bold tracking-wide hover:bg-gold/90 active:scale-95 transition-all"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
