import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";
import SocialLinks, { PhoneList } from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-md">
            <h3 className="font-serif text-2xl mb-2">Stay connected to our work</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Field updates, impact stories, and ways to help, delivered to your inbox.
            </p>
          </div>
          <form
            className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[420px]"
            action="#"
            method="post"
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/25 text-white placeholder:text-white/45 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-navy text-sm font-bold tracking-wide hover:bg-gold/90 active:scale-95 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold/20 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                  <path d="M20 8 C14 8 10 12 10 18 C10 24 20 34 20 34 C20 34 30 24 30 18 C30 12 26 8 20 8Z" fill="#C8932A" />
                </svg>
              </div>
              <span className="font-serif text-lg">{siteConfig.shortName}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/50 mb-5">
              Get Involved
            </h4>
            <ul className="space-y-3">
              <li><Link href="/donate" className="text-sm text-white/70 hover:text-gold transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="text-sm text-white/70 hover:text-gold transition-colors">Volunteer</Link></li>
              <li><Link href="/partners" className="text-sm text-white/70 hover:text-gold transition-colors">Partner With Us</Link></li>
              <li><Link href="/news" className="text-sm text-white/70 hover:text-gold transition-colors">News & Stories</Link></li>
            </ul>
          </div>

          {/* Contact + Efficiency */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/50 mb-5">
              Contact
            </h4>
            <address className="not-italic text-sm text-white/70 space-y-2">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors break-all">
                  {siteConfig.email}
                </a>
              </p>
              <PhoneList linkClassName="hover:text-gold transition-colors" />
            </address>

            <div className="mt-5">
              <SocialLinks variant="dark" size="sm" />
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[10px] text-white/45 uppercase tracking-wider font-semibold mb-3">Our efficiency</p>
              <div className="flex gap-5 text-sm">
                <div>
                  <span className="text-gold font-bold text-xl">82%</span>
                  <p className="text-white/55 text-xs mt-0.5">Programmes</p>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">5%</span>
                  <p className="text-white/55 text-xs mt-0.5">Admin</p>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">3%</span>
                  <p className="text-white/55 text-xs mt-0.5">Fundraising</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Registered NGO, Cameroon.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/transparency" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/transparency" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
