import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  featured?: boolean;
}

export default function NewsCard({
  slug,
  title,
  excerpt,
  category,
  date,
  image,
  featured = false,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (featured) {
    return (
      <Link
        href={`/news/${slug}`}
        className="group grid lg:grid-cols-2 gap-0 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-navy text-[10px] font-bold tracking-wider uppercase px-3 py-1.5">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-muted mb-4">
            <time dateTime={date}>{formattedDate}</time>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-navy leading-snug mb-4 group-hover:text-sky transition-colors duration-200">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6">{excerpt}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-sky transition-colors">
            Read the story
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${slug}`} className="group flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-navy/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <time className="text-xs text-muted mb-2.5" dateTime={date}>{formattedDate}</time>
        <h3 className="font-serif text-xl text-navy leading-snug mb-3 group-hover:text-sky transition-colors duration-200 flex-1">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-navy transition-colors">
          Read more
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
