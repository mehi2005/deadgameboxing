import Image from "next/image";
import { coaches } from "@/lib/data";

type Coach = (typeof coaches)[number];

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-display uppercase tracking-wide text-sand">
            {coach.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-ember/80">
            {coach.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-sand/70">{coach.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-sand/50">
        {coach.specialties.map((item) => (
          <span key={item} className="rounded-full border border-white/10 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
