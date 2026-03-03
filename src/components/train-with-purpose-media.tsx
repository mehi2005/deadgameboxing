"use client";

import Image from "next/image";
import { ScrollAutoplayVideo } from "@/components/scroll-autoplay-video";

export function TrainWithPurposeMedia() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="relative h-130 w-full max-w-105 place-self-start overflow-hidden rounded-md border border-ink/10 bg-white shadow-lg lg:h-156 lg:max-w-130">
        <Image
          src="/images/mainpage.JPG"
          alt="Dead Game Boxing training photo"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-130 w-full place-self-start overflow-hidden rounded-md border border-ink/10 bg-black lg:h-156">
        <ScrollAutoplayVideo
          src="/videos/Sequence 02.mp4"
          poster="/images/dg-coach-talk.jpg"
          className="h-full w-full scale-110 object-cover object-top"
        />
      </div>
    </div>
  );
}
