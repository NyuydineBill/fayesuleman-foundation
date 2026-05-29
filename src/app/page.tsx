import Link from "next/link";
import Image from "next/image";
import ImpactCounter from "@/components/ImpactCounter";
import NewsCard from "@/components/NewsCard";
import TestimonialBlock from "@/components/TestimonialBlock";
import PartnerStrip from "@/components/PartnerStrip";
import { CTAButton, SectionLabel } from "@/components/PageHero";
import {
  siteConfig,
  impactStats,
  pillars,
  newsArticles,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero — editorial, photo-led */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden grain">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/15" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-10 lg:pb-14 pt-20 sm:pt-24">
          <p className="photo-caption text-white/65 caption-shadow mb-6">
            Northwest Region, Cameroon · FSF Field Programme · 2025
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-medium text-white leading-[1.05] max-w-4xl mb-6 hero-text-shadow">
            We help people survive, recover, and rebuild their lives
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-xl leading-relaxed mb-10 hero-text-shadow">
            {siteConfig.tagline} Operating from Cameroon with programmes across
            sub-Saharan Africa, delivering food, dignity, education, and hope
            where it&apos;s needed most.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/donate" variant="primary">
              Donate Now
            </CTAButton>
            <CTAButton href="/about" variant="outline">
              Our Story
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Impact counters — float up over hero */}
      <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-5 sm:px-8">
        <ImpactCounter stats={impactStats} />
      </section>

      {/* Mission statement */}
      <section className="pt-6 pb-10 lg:pt-8 lg:pb-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="font-serif text-3xl lg:text-[2.6rem] text-navy leading-snug">
                Delivering life-changing aid, no matter what
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-muted leading-relaxed text-[1.05rem]">
              <p>
                The Faye Suleiman Foundation is a multi-cause charitable organization
                established in honour of Suleiman, a name that carries dignity,
                wisdom, and enduring legacy. We operate from Cameroon with programmes
                across sub-Saharan Africa, actively seeking international funding
                and partnerships to deliver community impact at scale.
              </p>
              <p>
                From emergency food distribution to school bursaries, from health
                outreach camps to shelter for orphaned children. Our five compassion
                pillars work together as one integrated mission.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold link-underline group"
              >
                Learn about our foundation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="bg-cream py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8">
          <SectionLabel>Five Compassion Pillars</SectionLabel>
          <h2 className="font-serif text-3xl lg:text-[2.6rem] text-navy max-w-2xl">
            One integrated mission across five areas of need
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.slice(0, 3).map((pillar) => (
              <Link
                key={pillar.id}
                href={`/programs#${pillar.id}`}
                className="group relative overflow-hidden bg-white aspect-[4/5] sm:aspect-[3/4]"
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />
                <div className="absolute bottom-0 p-6 lg:p-7 w-full">
                  <span
                    className="inline-block text-[10px] font-bold tracking-widest uppercase text-white/70 mb-2"
                  >
                    Pillar {pillar.number}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl text-white mb-2">
                    {pillar.short}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2 leading-relaxed">{pillar.description}</p>
                </div>
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: pillar.color }}
                />
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            {pillars.slice(3).map((pillar) => (
              <Link
                key={pillar.id}
                href={`/programs#${pillar.id}`}
                className="group relative overflow-hidden bg-white aspect-[16/9]"
              >
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/55 to-transparent" />
                <div className="absolute inset-0 flex items-center p-6 lg:p-8">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 block">
                      Pillar {pillar.number}
                    </span>
                    <h3 className="font-serif text-2xl text-white mb-2">{pillar.short}</h3>
                    <p className="text-sm text-white/80 max-w-md leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/programs" variant="ghost">
              Explore all programmes
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Transparency callout */}
      <section className="py-10 lg:py-14 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>Our Commitment</SectionLabel>
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">
                Know that your donation is making a difference
              </h2>
              <p className="text-white/75 leading-relaxed mb-10">
                We publish audited financials, name our board members, and show
                exactly how every dollar is used. International donors deserve
                transparency, and we built this foundation to earn it.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10">
                <div>
                  <p className="font-serif text-3xl sm:text-5xl text-gold font-medium leading-none">82%</p>
                  <p className="text-xs sm:text-sm text-white/60 mt-2">Goes to programmes</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-5xl text-white font-medium leading-none">5%</p>
                  <p className="text-xs sm:text-sm text-white/60 mt-2">Administration</p>
                </div>
                <div>
                  <p className="font-serif text-3xl sm:text-5xl text-white font-medium leading-none">3%</p>
                  <p className="text-xs sm:text-sm text-white/60 mt-2">Fundraising</p>
                </div>
              </div>
              <CTAButton href="/transparency" variant="primary">
                View our financials
              </CTAButton>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute inset-0 border border-gold/30 rotate-3 transition-transform" />
              <div className="relative h-full overflow-hidden -rotate-1">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628903328?w=600&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <TestimonialBlock {...testimonials[0]} />

      {/* Latest news */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Latest</SectionLabel>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy">
                News & field stories
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy link-underline group self-start sm:self-auto"
            >
              See all stories
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-6">
            <NewsCard {...newsArticles[0]} featured />
            <div className="grid md:grid-cols-2 gap-6">
              {newsArticles.slice(1).map((article) => (
                <NewsCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnerStrip />

      {/* Get involved */}
      <section className="py-10 lg:py-14 bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Get Involved</SectionLabel>
            <h2 className="font-serif text-3xl lg:text-4xl text-navy">
              How you can help
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Donate",
                desc: "A gift of any size helps ensure aid reaches people who need it most.",
                href: "/donate",
                cta: "Give today",
              },
              {
                num: "02",
                title: "Volunteer",
                desc: "Join our community of advocates, remotely or in the field across Cameroon.",
                href: "/volunteer",
                cta: "Find a role",
              },
              {
                num: "03",
                title: "Partner",
                desc: "Corporates, NGOs, and institutions: let's build impact together at scale.",
                href: "/partners",
                cta: "Become a partner",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 lg:p-8 flex flex-col group hover:shadow-md transition-shadow duration-300">
                <span className="font-serif text-4xl text-gold/25 font-medium leading-none mb-6 group-hover:text-gold/40 transition-colors">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-navy mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-gold hover:text-navy transition-colors tracking-wide uppercase group/link"
                >
                  {item.cta}
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
