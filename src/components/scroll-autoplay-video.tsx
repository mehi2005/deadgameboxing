"use client";

import { useEffect, useRef, useState } from "react";

type ScrollAutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  threshold?: number;
};

export function ScrollAutoplayVideo({
  src,
  className,
  poster,
  threshold = 0.4,
}: ScrollAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playAttempt = node.play();
            if (playAttempt) {
              playAttempt.catch(() => {
                // Ignore autoplay errors from strict browser policies.
              });
            }
          } else {
            node.pause();
          }
        });
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const toggleMuted = () => {
    const node = videoRef.current;
    if (!node) return;

    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    node.muted = nextMuted;

    if (!nextMuted) {
      const playAttempt = node.play();
      if (playAttempt) {
        playAttempt.catch(() => {
          // Browsers may still block sound without a qualifying user gesture.
        });
      }
    }
  };

  return (
    <div className="group relative h-full w-fit max-w-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className={className}
      />
      <button
        type="button"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        aria-pressed={!isMuted}
        onClick={toggleMuted}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/65 text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          {isMuted ? (
            <>
              <path d="M11 5l-5 4H3v6h3l5 4V5z" />
              <path d="M23 9l-6 6" />
              <path d="M17 9l6 6" />
            </>
          ) : (
            <>
              <path d="M11 5l-5 4H3v6h3l5 4V5z" />
              <path d="M15.5 8.5a5 5 0 010 7" />
              <path d="M18.5 5.5a9 9 0 010 13" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
