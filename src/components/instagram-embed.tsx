"use client";

import Script from "next/script";
import { useEffect } from "react";

type InstagramEmbedProps = {
  permalink: string;
  captioned?: boolean;
};

export function InstagramEmbed({
  permalink,
  captioned = true,
}: InstagramEmbedProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const instgrm = (window as typeof window & { instgrm?: { Embeds?: { process: () => void } } })
      .instgrm;
    instgrm?.Embeds?.process();
  }, [permalink]);

  return (
    <div className="mx-auto w-full max-w-[540px]">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned={captioned}
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: 3,
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <a href={permalink} target="_blank" rel="noreferrer" />
      </blockquote>
      <Script
        src="https://www.instagram.com/embed.js"
        async
        onLoad={() => {
          const instgrm = (
            window as typeof window & { instgrm?: { Embeds?: { process: () => void } } }
          ).instgrm;
          instgrm?.Embeds?.process();
        }}
      />
    </div>
  );
}
