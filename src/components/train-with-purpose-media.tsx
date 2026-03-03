"use client";

import Image from "next/image";
import { ScrollAutoplayVideo } from "@/components/scroll-autoplay-video";

export function TrainWithPurposeMedia() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="relative h-[520px] w-full max-w-[420px] place-self-start overflow-hidden rounded-md border border-ink/10 bg-white shadow-lg lg:h-[624px] lg:max-w-[520px]">
        <Image
          src="/images/mainpage.JPG"
          alt="Dead Game Boxing training photo"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-[520px] w-fit max-w-full place-self-start overflow-hidden rounded-md border border-ink/10 bg-black lg:h-[624px]">
        <ScrollAutoplayVideo
          src="/videos/mainpagevid.MP4"
          poster="/images/dg-coach-talk.jpg"
          className="h-full w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}
