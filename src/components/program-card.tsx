"use client";

import { useState } from "react";
import { programs } from "@/lib/data";

type Program = (typeof programs)[number];

export function ProgramCard({ program }: { program: Program }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="surface-card hover-lift flex flex-col rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          {program.level ? (
            <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
              {program.level}
            </p>
          ) : null}
          <h3 className="mt-2 text-3xl font-display uppercase tracking-wide text-sand">
            {program.title}
          </h3>
        </div>
      </div>
      {program.duration || program.intensity ? (
        <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-sand/50">
          {program.duration ? <span>{program.duration}</span> : null}
          {program.intensity ? <span>{program.intensity}</span> : null}
        </div>
      ) : null}
      {program.description || program.details.length ? (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-xs uppercase tracking-[0.3em] text-ember"
            aria-expanded={isOpen}
          >
            {isOpen ? "Hide details" : "View details"}
          </button>
          {isOpen ? (
            <div className="mt-4">
              {program.description ? (
                <p className="text-base text-sand/70">{program.description}</p>
              ) : null}
              {program.details.length ? (
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-sand/70">
                  {program.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="mt-auto pt-8">
        <a
          href="https://app.glofox.com/portal/#/branch/655bc43c75c5896148078ec1/memberships"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-sand/70 transition hover:text-ember hover:!text-ember"
        >
          Book
        </a>
      </div>
    </div>
  );
}
