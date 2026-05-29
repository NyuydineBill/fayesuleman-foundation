import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, SectionLabel } from "@/components/PageHero";
import { newsArticles } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return { title: article.title, description: article.excerpt };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Breadcrumb items={[{ label: "News", href: "/news" }, { label: article.title }]} />

      <article className="py-8 lg:py-12">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <SectionLabel>{article.category}</SectionLabel>
          <h1 className="font-serif text-3xl lg:text-5xl text-navy leading-tight mb-6 mt-2">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted mb-6 pb-6 border-b border-border">
            <span>By {article.author}</span>
            <span aria-hidden="true" className="w-1 h-1 bg-muted/60 rounded-full" />
            <time dateTime={article.date}>{formattedDate}</time>
          </div>
        </div>

        <div className="relative aspect-[21/9] max-w-5xl mx-auto mb-8">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover"
            sizes="1000px"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="space-y-6 text-muted leading-relaxed">
            <p className="text-xl text-navy font-medium leading-relaxed">{article.excerpt}</p>
            <p>
              Our field team has been working closely with community leaders and local
              partners to ensure that every beneficiary receives not just aid, but
              dignity. This programme represents months of planning, fundraising, and
              coordination, and the results speak for themselves.
            </p>
            <p>
              &ldquo;When FSF arrived in our community, we didn&apos;t just receive supplies.
              We received hope,&rdquo; said a local community leader who asked to remain
              anonymous. &ldquo;Our children can now focus on learning instead of worrying
              about their next meal.&rdquo;
            </p>
            <p>
              The programme will continue through the end of 2025, with plans to expand
              to neighbouring communities based on available funding. Donors who wish to
              support this initiative can designate their gift to the relevant compassion
              pillar on our donate page.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy link-underline group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to all stories
            </Link>
            <div className="flex gap-2">
              {["Share", "Facebook", "X"].map((s) => (
                <button
                  key={s}
                  className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 border border-border text-muted hover:text-navy hover:border-navy/30 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
