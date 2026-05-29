import type { Metadata } from "next";
import Image from "next/image";
import PageHero, { Breadcrumb, SectionLabel, CTAButton } from "@/components/PageHero";
import { boardMembers, coreValues, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Faye Suleiman Foundation: our story, mission, vision, and leadership team.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built on legacy. Driven by compassion."
        subtitle="Established in honour of Suleiman, a name that carries dignity, wisdom, and enduring legacy."
        image="https://images.unsplash.com/photo-1541534741688-6077885a9b9f?w=1600&q=80"
        caption="Douala, Cameroon · FSF Headquarters · 2025"
      />
      <Breadcrumb items={[{ label: "About Us" }]} />

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-snug">
                Why FSF exists
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-muted leading-relaxed">
              <p className="text-lg text-navy font-medium leading-relaxed">
                The Faye Suleiman Foundation was born from a simple conviction: that
                no child should go hungry, no family should lack dignity, and no
                community should be forgotten.
              </p>
              <p>
                Named after Suleiman, whose name evokes wisdom, generosity, and
                enduring legacy, the Foundation was established by Faye Rauda Nyuyfoni
                to channel compassion into concrete action across Cameroon and
                sub-Saharan Africa.
              </p>
              <p>
                What began as local food drives and clothing distributions has grown
                into a multi-cause organization serving thousands through five
                integrated compassion pillars. We actively seek international funding
                and partnerships because the scale of need demands it, and because
                communities across Africa deserve the same standard of support that
                any global charity provides.
              </p>
              <p>
                Today, FSF operates feeding programmes, school bursaries, health
                outreach camps, and orphan support initiatives. We stay community-led,
                transparent, and focused on lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 lg:p-8">
              <SectionLabel>Mission</SectionLabel>
              <p className="font-serif text-2xl text-navy leading-relaxed mt-2">
                To deliver food, clothing, education, health care, and holistic
                support to vulnerable communities across sub-Saharan Africa,
                with dignity, transparency, and lasting impact.
              </p>
            </div>
            <div className="bg-navy p-6 lg:p-8 text-white">
              <SectionLabel>Vision</SectionLabel>
              <p className="font-serif text-2xl leading-relaxed mt-2">
                A continent where every child is fed, clothed, educated, and cared
                for, and where communities rebuild with hope, not handouts.
              </p>
            </div>
          </div>

          <SectionLabel>Core Values</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-6">What guides every decision</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="border-t-2 border-gold pt-6">
                <h3 className="font-serif text-xl text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md">
                <Image
                  src={boardMembers[0].image}
                  alt="Faye Rauda Nyuyfoni, Founder"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/15 -z-10" />
            </div>
            <div>
              <SectionLabel>From the Founder</SectionLabel>
              <h2 className="font-serif text-3xl text-navy mb-6">
                A letter from Faye Rauda Nyuyfoni
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  When I founded the Faye Suleiman Foundation, I wasn&apos;t starting
                  from scratch. I was continuing a legacy of giving that Suleiman
                  embodied throughout his life. His name means &ldquo;man of peace&rdquo;
                  and &ldquo;wisdom,&rdquo; and that is exactly what our work seeks to
                  bring to communities in crisis.
                </p>
                <p>
                  I have walked through villages where children share a single meal
                  between three siblings. I have met mothers who choose between
                  school fees and medicine. These are not abstract statistics. They
                  are our neighbours, our communities, our responsibility.
                </p>
                <p>
                  FSF was built to be the kind of organization I would trust with my
                  own donation: transparent, community-rooted, and relentlessly focused
                  on impact. We invite you to join us.
                </p>
              </div>
              <p className="mt-8 font-serif text-xl text-navy italic">
                Faye Rauda Nyuyfoni<br />
                <span className="text-base not-italic text-muted">Founder & Executive Director</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-10 lg:py-14 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="font-serif text-3xl lg:text-4xl mb-8">Board of Directors</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {boardMembers.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-square mb-6 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="300px"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <SectionLabel>Legal & Registration</SectionLabel>
          <h2 className="font-serif text-3xl text-navy mb-6">Registered & accountable</h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            The Faye Suleiman Foundation is a registered non-governmental organization
            in Cameroon. Registration documents and annual reports are available on
            our transparency page.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/transparency" variant="ghost">
              View legal documents
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
