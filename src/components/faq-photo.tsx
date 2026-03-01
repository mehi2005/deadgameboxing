"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function FAQPhoto() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`w-full max-w-[380px] overflow-hidden rounded-md border border-ink/10 transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
      }`}
    >
      <Image
        src="/images/teamphoto8.webp"
        alt="DeadGame Boxing team"
        width={760}
        height={980}
        className="h-auto w-full object-cover object-top transition duration-700 hover:scale-105"
      />
    </div>
  );
}
