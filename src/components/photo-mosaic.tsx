import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

type MosaicImage = {
  src: string;
  alt: string;
  contain?: boolean;
};

const mosaicImages: MosaicImage[] = [
  { src: "/images/homapagebackroundpng.jpg", alt: "DeadGame boxing gloves" },
  { src: "/images/teamphoto1.webp", alt: "DeadGame training photo 1" },
  { src: "/images/teamphoto2.webp", alt: "DeadGame training photo 2" },
  { src: "/images/teamphoto3.webp", alt: "DeadGame training photo 3" },
  { src: "/images/teamphoto4.webp", alt: "DeadGame training photo 4" },
  { src: "/images/teamphoto5.webp", alt: "DeadGame training photo 5" },
  { src: "/images/teamphoto6.webp", alt: "DeadGame training photo 6" },
  { src: "/images/teamphoto7.webp", alt: "DeadGame training photo 7" },
  { src: "/images/teamphoto8.webp", alt: "DeadGame training photo 8" },
  { src: "/images/teamphoto9.webp", alt: "DeadGame training photo 9" },
  { src: "/images/teamphoto10.webp", alt: "DeadGame training photo 10" },
  { src: "/images/teamphoto11.webp", alt: "DeadGame training photo 11" },
  { src: "/images/teamphoto12.webp", alt: "DeadGame training photo 12" },
  { src: "/images/teamphoto13.webp", alt: "DeadGame training photo 13" },
  { src: "/images/teamphoto14.webp", alt: "DeadGame training photo 14" },
  { src: "/images/dg-hero-ring.jpg", alt: "DeadGame ring session" },
  { src: "/images/dg-logo-wall.jpg", alt: "DeadGame wall logo" },
  { src: "/images/dg-logo-detail.jpg", alt: "DeadGame logo detail" },
  { src: "/images/dg-sparring-coach.jpg", alt: "Coach during sparring round" },
  { src: "/images/dg-heavy-bag.jpg", alt: "Heavy bag training round" },
  { src: "/images/dg-coach-talk.jpg", alt: "Coaches and athletes talking" },
  { src: "/images/dg-kids-ring-lesson.jpg", alt: "Youth ring lesson" },
  { src: "/images/dg-community-lineup.jpg", alt: "DeadGame youth lineup" },
  { src: "/images/dg-youth-focus.jpg", alt: "Youth boxer in profile" },
  { src: "/images/dg-kids-coach-kneel.jpg", alt: "Coach kneeling for instruction" },
  { src: "/images/dg-pullup-training.jpg", alt: "Pull-up strength training" },
  { src: "/images/dg-ring-instruction.jpg", alt: "Ring instruction sequence" },
  { src: "/images/dg-flyer-march.jpg", alt: "DeadGame event flyer", contain: true },
];

function getSpanClass(index: number) {
  const mod = index % 12;
  if (mod === 0 || mod === 7) {
    return "sm:col-span-2 sm:row-span-2";
  }
  if (mod === 3 || mod === 9) {
    return "md:col-span-2";
  }
  if (mod === 5 || mod === 10) {
    return "md:row-span-2";
  }
  return "";
}

export function PhotoMosaic() {
  return (
    <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[185px] lg:grid-cols-6">
      {mosaicImages.map((image, index) => (
        <ScrollReveal
          key={image.src}
          from={index % 2 === 0 ? "left" : "right"}
          threshold={0.08}
          className={getSpanClass(index)}
        >
          <figure className="group relative h-full w-full overflow-hidden rounded-2xl border border-ink/12 bg-fog-lift/70">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              className={`transition duration-700 ${
                image.contain
                  ? "object-contain bg-white p-2 group-hover:scale-105"
                  : "object-cover group-hover:scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/15 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </figure>
        </ScrollReveal>
      ))}
    </div>
  );
}
