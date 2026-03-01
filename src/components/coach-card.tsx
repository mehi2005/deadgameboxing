"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { coaches } from "@/lib/data";

type Coach = (typeof coaches)[number];

function getFixedPreview(text: string, maxChars = 220) {
  if (text.length <= maxChars) return text;

  const sliced = text.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(" ");
  const safeCut = lastSpace > 0 ? lastSpace : maxChars;

  return `${sliced.slice(0, safeCut).trimEnd()}...`;
}

export function CoachCard({ coach }: { coach: Coach }) {
  const [isOpen, setIsOpen] = useState(false);
  const fullDescription = coach.longBio?.join(" ") ?? coach.bio;
  const previewDescription = getFixedPreview(fullDescription, 220);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="surface-card hover-lift rounded-3xl p-6">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-ink/15 bg-fog-lift/70">
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-display uppercase tracking-wide text-ink">
            {coach.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-ember">
            {coach.role}
          </p>
        </div>

        <p className="mt-4 min-h-[132px] text-sm leading-relaxed text-sand/76">
          {previewDescription}
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-4 inline-flex rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sand/80 transition hover:border-ink/40 hover:text-ink"
        >
          View More
        </button>

        <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-sand/50">
          {coach.specialties.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/15 bg-fog-lift/60 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="surface-card w-full max-w-3xl rounded-3xl p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ember">
                  {coach.role}
                </p>
                <h3 className="mt-2 text-3xl font-display uppercase tracking-wide text-ink">
                  {coach.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-ink/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-sand/70 transition hover:border-ink/40 hover:text-ink"
              >
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-6 sm:grid-cols-[220px_1fr] sm:items-start">
              <div className="relative h-56 overflow-hidden rounded-2xl border border-ink/15 bg-fog-lift/70 sm:h-72">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
              <div className="grid max-h-[55vh] gap-4 overflow-y-auto pr-1 text-sm leading-relaxed text-sand/76">
                {coach.longBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

