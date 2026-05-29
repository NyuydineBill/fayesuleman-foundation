import Link from "next/link";
import { CTAButton } from "@/components/PageHero";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-32 px-5">
      <div className="text-center max-w-md">
        <p className="font-serif text-9xl text-gold/20 font-medium leading-none mb-4">404</p>
        <h1 className="font-serif text-3xl text-navy mb-4">Page not found</h1>
        <p className="text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <CTAButton href="/" variant="primary">
          Back to home
        </CTAButton>
      </div>
    </section>
  );
}
