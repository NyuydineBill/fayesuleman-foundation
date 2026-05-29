import type { Metadata } from "next";
import PageHero, { Breadcrumb, SectionLabel, CTAButton } from "@/components/PageHero";
import { volunteerRoles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join the Faye Suleiman Foundation as a volunteer: remote, in-person, or as a brand ambassador.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        title="Lend your time. Amplify our impact."
        subtitle="Whether you're in Douala or Dublin, there's a role for you in the FSF community."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        caption="FSF Volunteer Programme · 2025"
      />
      <Breadcrumb items={[{ label: "Volunteer" }]} />

      {/* Roles */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>Open Roles</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-8">Current opportunities</h2>
          <div className="space-y-4">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="grid sm:grid-cols-[1fr_auto] gap-4 items-center p-8 bg-white border border-border hover:border-gold/50 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl text-navy">{role.title}</h3>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-cream text-muted border border-border">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{role.description}</p>
                </div>
                <CTAButton href="#apply" variant="ghost" className="whitespace-nowrap self-start sm:self-center">
                  Apply
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador programme */}
      <section className="bg-navy py-10 lg:py-14 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionLabel>Brand Ambassador Programme</SectionLabel>
            <h2 className="font-serif text-3xl mb-6">Be the voice of FSF in your community</h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Ambassadors host fundraisers, share stories on social media, and
              represent FSF at community events worldwide. We provide materials,
              training, and direct support from our team.
            </p>
            <CTAButton href="#apply" variant="primary">
              Become an ambassador
            </CTAButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Host a fundraiser", "Share on social media", "Speak at events", "Recruit volunteers"].map((action) => (
              <div key={action} className="p-6 border border-white/15 text-center hover:border-gold/40 transition-colors">
                <p className="text-sm text-white/85">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-10 lg:py-14">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <SectionLabel>Apply Now</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-8">Volunteer application</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="v-name" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                  Full Name
                </label>
                <input
                  id="v-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="v-email" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                  Email
                </label>
                <input
                  id="v-email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="v-role" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                Role of Interest
              </label>
              <select
                id="v-role"
                className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
              >
                {volunteerRoles.map((r) => (
                  <option key={r.title}>{r.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="v-why" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                Why do you want to volunteer?
              </label>
              <textarea
                id="v-why"
                rows={5}
                className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold text-navy font-bold tracking-wide hover:bg-gold/90 active:scale-95 transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
