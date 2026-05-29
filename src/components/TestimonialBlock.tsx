import Image from "next/image";

interface TestimonialBlockProps {
  quote: string;
  name: string;
  location: string;
  image: string;
}

export default function TestimonialBlock({
  quote,
  name,
  location,
  image,
}: TestimonialBlockProps) {
  return (
    <blockquote className="relative bg-navy text-white overflow-hidden">
      <div className="grid lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2 relative min-h-[240px] lg:min-h-full">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/70 hidden lg:block" />
        </div>
        <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center relative">
          <svg
            className="w-12 h-12 text-gold/30 mb-5"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="font-serif text-2xl lg:text-3xl xl:text-4xl leading-relaxed mb-6 text-white/95">
            &ldquo;{quote}&rdquo;
          </p>
          <footer>
            <cite className="not-italic flex items-center gap-4">
              <div className="w-10 h-0.5 bg-gold" />
              <div>
                <span className="block font-bold text-gold tracking-wide">{name}</span>
                <span className="text-sm text-white/70 mt-0.5 block">{location}</span>
              </div>
            </cite>
          </footer>
        </div>
      </div>
    </blockquote>
  );
}
