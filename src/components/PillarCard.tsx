import Image from "next/image";

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  stat: string;
  image: string;
  color: string;
  index: number;
}

export default function PillarCard({
  number,
  title,
  description,
  stat,
  image,
  color,
  index,
}: PillarCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article className="grid lg:grid-cols-2 gap-0 overflow-hidden">
      <div
        className={`relative min-h-[240px] lg:min-h-[300px] ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div
          className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center font-serif text-lg text-white font-medium shadow-lg"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
      </div>
      <div
        className={`p-6 lg:p-8 flex flex-col justify-center bg-white ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: color }} />
        <h3 className="font-serif text-2xl lg:text-3xl text-navy mb-3">{title}</h3>
        <p className="text-muted leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-3">
          <span className="font-bold text-navy">{stat}</span>
          <span className="text-muted text-sm">reached in 2024</span>
        </div>
      </div>
    </article>
  );
}
