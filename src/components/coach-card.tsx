import Image from "next/image";
import { coaches } from "@/lib/data";

type Coach = (typeof coaches)[number];

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="surface-card hover-lift rounded-3xl p-6">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-ink/15 bg-fog-lift/70">
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-display uppercase tracking-wide text-ink">
            {coach.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-ember/80">
            {coach.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-sand/76">{coach.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-sand/50">
        {coach.specialties.map((item) => (
          <span key={item} className="rounded-full border border-ink/15 bg-fog-lift/60 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
