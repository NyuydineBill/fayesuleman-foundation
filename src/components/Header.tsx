"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { siteConfig, navLinks, phoneHref, socialLinks } from "@/lib/data";

const mobileNavLinks = [
  ...navLinks,
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partners", label: "Partners" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  /* scroll shadow */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* close on ESC / desktop resize */
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const r = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", h);
    window.addEventListener("resize", r);
    return () => { window.removeEventListener("keydown", h); window.removeEventListener("resize", r); };
  }, []);

  /* native click on button — bypasses React synthetic event delegation */
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const toggle = () => setOpen((v) => !v);
    btn.addEventListener("click", toggle);
    return () => btn.removeEventListener("click", toggle);
  }, []);

  return (
    <>
      {/* ── sticky shell ── */}
      <div className="sticky top-0 z-50">

        {/* top bar */}
        <div className="bg-navy text-white py-2 px-4 text-center text-xs sm:text-sm leading-snug">
          <span className="text-white/80">School feeding programme active in Northwest Cameroon. </span>
          <Link href="/news/school-meals-northwest-cameroon"
            className="font-semibold text-gold underline underline-offset-2 hover:text-white transition-colors whitespace-nowrap">
            Read the update
          </Link>
        </div>

        {/* header bar */}
        <div className={`bg-white border-b transition-shadow duration-300 ${scrolled ? "shadow-md border-transparent" : "border-border"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 sm:h-[72px]">

            {/* logo */}
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-navy flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
                  <path d="M20 8C14 8 10 12 10 18C10 24 20 34 20 34S30 24 30 18C30 12 26 8 20 8Z" fill="#C8932A"/>
                  <path d="M20 14C17 14 15 16 15 19C15 22 20 28 20 28S25 22 25 19C25 16 23 14 20 14Z" fill="#F7F8FA"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-[1.05rem] font-semibold text-navy leading-tight block">Faye Suleiman</span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-muted font-bold">Foundation</span>
              </div>
            </Link>

            {/* desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}
                  className="text-sm font-medium text-navy/75 hover:text-navy link-underline transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* right actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link href="/volunteer" className="hidden md:inline-flex text-sm font-medium text-navy/65 hover:text-navy transition-colors">
                Volunteer
              </Link>
              <Link href="/donate"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-navy text-sm font-bold tracking-wide hover:bg-gold/90 transition-colors">
                Donate
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>

              {/* hamburger — ref-driven, no synthetic events */}
              <button ref={btnRef} type="button"
                className="lg:hidden flex items-center justify-center w-11 h-11 text-navy hover:bg-cream active:bg-cream rounded-sm transition-colors"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── mobile overlay ── */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col overflow-y-auto"
          role="dialog" aria-modal="true" aria-label="Mobile navigation">

          {/* overlay header */}
          <div className="flex items-center justify-between h-16 sm:h-[72px] px-4 sm:px-8 border-b border-border shrink-0">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-navy flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                  <path d="M20 8C14 8 10 12 10 18C10 24 20 34 20 34S30 24 30 18C30 12 26 8 20 8Z" fill="#C8932A"/>
                  <path d="M20 14C17 14 15 16 15 19C15 22 20 28 20 28S25 22 25 19C25 16 23 14 20 14Z" fill="#F7F8FA"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-base font-semibold text-navy leading-tight block">Faye Suleiman</span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-muted font-bold">Foundation</span>
              </div>
            </Link>
            <button type="button" onClick={() => setOpen(false)}
              className="flex items-center justify-center w-11 h-11 text-navy hover:bg-cream rounded-sm transition-colors"
              aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* links */}
          <nav className="px-4 sm:px-8 py-4 flex flex-col flex-1">
            {mobileNavLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 py-4 text-xl font-serif text-navy border-b border-border active:bg-cream">
                <span className="min-w-0 truncate">{l.label}</span>
                <svg className="w-4 h-4 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}

            <Link href="/donate" onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-gold text-navy text-base font-bold tracking-wide">
              Donate Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[10px] text-muted mb-3 tracking-widest uppercase font-bold">Contact</p>
              <a href={`mailto:${siteConfig.email}`}
                className="text-sm text-navy/70 block break-all mb-1 hover:text-navy transition-colors">
                {siteConfig.email}
              </a>
              {siteConfig.phones.map((p) => (
                <a key={p} href={phoneHref(p)} className="text-sm text-navy/70 block mb-1 hover:text-navy transition-colors">{p}</a>
              ))}
              <div className="mt-4 flex gap-2 flex-wrap">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-2 border border-border text-muted text-xs font-semibold hover:text-navy hover:border-navy/30 transition-colors">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
