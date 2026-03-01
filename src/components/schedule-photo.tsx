"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SchedulePhotoProps = {
  src: string;
  alt?: string;
  from?: "left" | "right" | "none";
  className?: string;
};

export function SchedulePhoto({
  src,
  alt = "DeadGame Boxing training floor",
  from = "left",
  className,
}: SchedulePhotoProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(from === "none");

  useEffect(() => {
    if (from === "none") return;
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [from]);

  const hiddenTranslate =
    from === "right" ? "translate-x-6" : from === "left" ? "-translate-x-6" : "";

  return (
    <div
      ref={wrapperRef}
      className={`relative h-[620px] w-full max-w-[560px] place-self-center overflow-hidden rounded-2xl border border-ink/12 ${
        from === "none"
          ? ""
          : `transition-all duration-700 ease-out motion-reduce:transition-none ${
              isVisible ? "translate-x-0 opacity-100" : `${hiddenTranslate} opacity-0`
            }`
      } ${className ?? ""}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-top"
      />
    </div>
  );
}
