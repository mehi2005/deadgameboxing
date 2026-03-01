"use client";

import Image from "next/image";
import { useState } from "react";
import { programs as allPrograms } from "@/lib/data";

type Program = (typeof allPrograms)[number];

export function ProgramsSwitcher({ items = allPrograms }: { items?: Program[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProgram = items[activeIndex] ?? items[0];

  if (!activeProgram) {
    return null;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="flex flex-col gap-2">
        {items.map((program, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={program.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-full whitespace-normal wrap-break-word rounded-2xl border px-5 py-4 text-left text-sm uppercase tracking-[0.3em] leading-snug transition ${
                isActive
                  ? "border-ember/70 bg-fog-lift text-white shadow-[0_0_0_1px_rgba(255,77,59,0.18)]"
                  : "border-ink/10 text-sand/70 hover:border-ember/50 hover:text-ember"
              }`}
              aria-pressed={isActive}
            >
              {program.title}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 rounded-3xl border border-ink/10 bg-white/95 p-6 md:p-8">
        {activeProgram.level ? (
          <p className="text-xs uppercase tracking-[0.3em] text-ember">
            {activeProgram.level}
          </p>
        ) : null}
        <h3 className="wrap-break-word text-3xl font-display uppercase tracking-wide text-fog leading-tight">
          {activeProgram.title}
        </h3>
        {activeProgram.duration || activeProgram.intensity ? (
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-fog/60">
            {activeProgram.duration ? (
              <span>{activeProgram.duration}</span>
            ) : null}
            {activeProgram.intensity ? (
              <span>{activeProgram.intensity}</span>
            ) : null}
          </div>
        ) : null}
        {activeProgram.description ? (
          <p className="wrap-break-word text-lg text-fog/80">
            {activeProgram.description}
          </p>
        ) : null}
        {activeProgram.details.length ? (
          <ul className="flex list-disc flex-col gap-2 pl-5 text-sm text-fog/80">
            {activeProgram.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
        {activeProgram.slug === "kids-boxing-academy" ? (
          <div className="relative mt-3 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-kids-ring-lesson.jpg"
              alt="Kids boxing lesson in the ring"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {activeProgram.slug === "competition-boxing-membership" ? (
          <div className="relative mt-4 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-sparring-coach.jpg"
              alt="Coach guiding a sparring session"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {activeProgram.slug === "1-on-1-personal-training-package" ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src="/images/dg-heavy-bag.jpg"
              alt="Boxer training on the heavy bag"
              width={2304}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-auto w-full"
            />
          </div>
        ) : null}
        {activeProgram.slug === "fight-ready-fitness-training-camp" ? (
          <div className="relative mt-4 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-coach-talk.jpg"
              alt="Coach speaking to the class"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {activeProgram.slug === "1-day-drop-in" ? (
          <div className="relative mt-4 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-logo-wall.jpg"
              alt="DeadGame Boxing logo wall"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {activeProgram.slug === "platinum-membership" ? (
          <div className="relative mt-4 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-logo-wall.jpg"
              alt="DeadGame Boxing logo wall"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {activeProgram.slug === "mitt-session-package" ? (
          <div className="relative mt-4 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-logo-wall.jpg"
              alt="DeadGame Boxing logo wall"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {activeProgram.slug === "gold-membership" ? (
          <div className="relative mt-4 h-104 w-full overflow-hidden rounded-2xl border border-ink/10 md:h-128">
            <Image
              src="/images/dg-pullup-training.jpg"
              alt="Athlete training on pull-up bars"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
        <a
          href="https://app.glofox.com/portal/#/branch/655bc43c75c5896148078ec1/memberships"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-fog px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-fog/90"
        >
          Book
        </a>
      </div>
    </div>
  );
}

