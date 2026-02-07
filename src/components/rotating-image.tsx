"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type RotatingImageProps = {
  images: string[];
  alt: string;
  sizes: string;
  className?: string;
  intervalMs?: number;
};

export function RotatingImage({
  images,
  alt,
  sizes,
  className,
  intervalMs = 5000,
}: RotatingImageProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [images, intervalMs]);

  return (
    <>
      {images.map((src, imageIndex) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={className}
          />
        </div>
      ))}
    </>
  );
}
