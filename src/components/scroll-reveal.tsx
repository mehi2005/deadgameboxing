"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  from?: "left" | "right" | "none" | "fade";
  className?: string;
  threshold?: number;
  delayMs?: number;
  durationMs?: number;
};

export function ScrollReveal({
  children,
  from = "right",
  className,
  threshold = 0.3,
  delayMs = 0,
  durationMs = 700,
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
    from === "right"
      ? "translate-x-6"
      : from === "left"
        ? "-translate-x-6"
        : "";

  const transitionStyle = {
    transitionDuration: `${durationMs}ms`,
    transitionDelay: `${delayMs}ms`,
  };

  return (
    <div
      ref={wrapperRef}
      className={`${
        from === "none"
          ? ""
          : `transition-all ease-out motion-reduce:transition-none ${
              isVisible ? "translate-x-0 opacity-100" : `${hiddenTranslate} opacity-0`
            }`
      } ${className ?? ""}`.trim()}
      style={from === "none" ? undefined : transitionStyle}
    >
      {children}
    </div>
  );
}
