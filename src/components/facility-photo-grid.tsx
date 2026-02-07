"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function FacilityPhotoGrid() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="mt-3 grid w-full max-w-[560px] grid-cols-2 gap-3"
    >
      <div
        className={`aspect-[3/4] overflow-hidden rounded-md border border-ink/10 transition-all duration-700 ease-out motion-reduce:transition-none ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-6 opacity-0"
        }`}
      >
        <Image
          src="/images/teamphoto5.webp"
          alt="DeadGame Boxing team"
          width={700}
          height={900}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div
        className={`aspect-[3/4] overflow-hidden rounded-md border border-ink/10 transition-all duration-700 ease-out motion-reduce:transition-none ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
        }`}
      >
        <Image
          src="/images/teamphoto6.webp"
          alt="DeadGame Boxing team"
          width={700}
          height={900}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div
        className={`aspect-[16/9] overflow-hidden rounded-md sm:col-span-2 transition-all duration-700 ease-out motion-reduce:transition-none ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <Image
          src="/images/teamphoto7.webp"
          alt="DeadGame Boxing team"
          width={1200}
          height={675}
          className="h-full w-full object-contain bg-white"
        />
      </div>
    </div>
  );
}
