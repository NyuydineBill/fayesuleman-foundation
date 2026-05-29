import Link from "next/link";

export default function FloatingDonate() {
  return (
    <Link
      href="/donate"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-30 lg:hidden inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 bg-gold text-navy text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(200,147,42,0.45)] hover:bg-gold/90 active:scale-95 transition-all pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      aria-label="Donate now"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
      Donate
    </Link>
  );
}
