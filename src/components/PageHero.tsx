import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  caption?: string;
  dark?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  image,
  caption,
  dark = true,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[42vh] lg:min-h-[48vh] flex items-end overflow-hidden grain">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-t from-navy via-navy/75 to-navy/25"
            : "bg-gradient-to-t from-white/95 via-white/65 to-white/15"
        }`}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-8 lg:pb-12 pt-20 sm:pt-24">
        {caption && (
          <p className={`photo-caption mb-4 caption-shadow ${dark ? "text-white/65" : "text-navy/60"}`}>
            {caption}
          </p>
        )}
        <h1
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-4xl ${
            dark ? "text-white hero-text-shadow" : "text-navy"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-5 text-lg sm:text-xl max-w-2xl leading-relaxed ${
              dark ? "text-white/85 hero-text-shadow" : "text-navy/75"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-5">{children}</div>}
      </div>
    </section>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
        <ol className="flex items-center gap-1.5 text-sm text-muted flex-wrap">
          <li>
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-muted/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {item.href ? (
                <Link href={item.href} className="hover:text-navy transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-navy font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase text-gold mb-2">
      <span className="w-4 h-px bg-gold" />
      {children}
    </span>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}) {
  const variants = {
    primary: "bg-gold text-navy hover:bg-gold/90 shadow-sm hover:shadow",
    secondary: "bg-sky text-white hover:bg-sky/90 shadow-sm hover:shadow",
    outline: "border-2 border-white text-white hover:bg-white hover:text-navy",
    ghost: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
