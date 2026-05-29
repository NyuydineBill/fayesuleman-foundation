import type { Metadata } from "next";
import PageHero, { Breadcrumb, SectionLabel } from "@/components/PageHero";
import NewsCard from "@/components/NewsCard";
import { newsArticles, pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "News & Blog",
  description: "Latest news, field stories, and updates from the Faye Suleiman Foundation programmes across Cameroon and Africa.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & field stories"
        subtitle="Updates from our programmes, campaigns, and the communities we serve."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
        caption="FSF Communications · 2025"
      />
      <Breadcrumb items={[{ label: "News" }]} />

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="px-4 py-2 text-xs font-bold tracking-wider uppercase bg-navy text-white">
              All
            </button>
            {pillars.map((p) => (
              <button
                key={p.id}
                className="px-4 py-2 text-xs font-bold tracking-wider uppercase border border-border text-navy/75 hover:bg-cream transition-colors"
              >
                {p.short}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <NewsCard {...newsArticles[0]} featured />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <NewsCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
