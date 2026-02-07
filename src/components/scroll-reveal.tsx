"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  from?: "left" | "right" | "none";
  className?: string;
  threshold?: number;
};

export function ScrollReveal({
  children,
  from = "right",
  className,
  threshold = 0.3,
}: ScrollRevealProps) {
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
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [from, threshold]);

  const hiddenTranslate =
    from === "right" ? "translate-x-6" : from === "left" ? "-translate-x-6" : "";

  return (
    <div
      ref={wrapperRef}
      className={`${
        from === "none"
          ? ""
          : `transition-all duration-700 ease-out motion-reduce:transition-none ${
              isVisible ? "translate-x-0 opacity-100" : `${hiddenTranslate} opacity-0`
            }`
      } ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}
