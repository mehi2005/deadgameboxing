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
    <div className="group relative h-full w-full">
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
        onClick={toggleMuted}
        className="absolute right-3 top-3 z-10 rounded-full border border-white/30 bg-black/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
