import type { Metadata } from "next";
import PageHero, { Breadcrumb, SectionLabel, CTAButton } from "@/components/PageHero";
import SocialLinks, { PhoneList } from "@/components/SocialLinks";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Faye Suleiman Foundation in Douala, Cameroon.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="We'd love to hear from you"
        subtitle="Whether you're a donor, partner, volunteer, or community member, reach out anytime."
        image="https://images.unsplash.com/photo-1423666639043-f560339c5fe9?w=1600&q=80"
        dark={false}
      />
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-serif text-3xl text-navy mb-8">Contact form</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                      Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-subject" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                    Subject
                  </label>
                  <select
                    id="c-subject"
                    className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Donation Question</option>
                    <option>Partnership</option>
                    <option>Volunteer</option>
                    <option>Media / Press</option>
                    <option>Programme Access</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold text-navy font-bold tracking-wide hover:bg-gold/90 active:scale-95 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-serif text-xl text-navy mb-4">Foundation Office</h3>
                <address className="not-italic text-muted text-sm leading-relaxed space-y-2">
                  <p>{siteConfig.address}</p>
                  <p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sky hover:text-navy transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                  <PhoneList linkClassName="text-sky hover:text-navy transition-colors" />
                </address>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy mb-4">Office Hours</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Monday to Friday: 8:00 AM to 5:00 PM (WAT)<br />
                  Saturday: 9:00 AM to 1:00 PM
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-navy mb-4">Follow Us</h3>
                <SocialLinks variant="light" size="md" />
              </div>

              <div className="bg-cream p-6 border border-border">
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  Looking to donate or partner with FSF?
                </p>
                <div className="flex flex-col gap-3">
                  <CTAButton href="/donate" variant="primary" className="w-full">
                    Donate
                  </CTAButton>
                  <CTAButton href="/partners" variant="ghost" className="w-full">
                    Partner with us
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-navy/5 border-t border-border flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted text-sm">Google Maps embed</p>
          <p className="text-navy/60 text-xs mt-1">{siteConfig.address}</p>
        </div>
      </section>
    </>
  );
}
