import { programs } from "@/lib/data";

type Program = (typeof programs)[number];

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="surface-card hover-lift rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
            {program.level}
          </p>
          <h3 className="mt-2 text-2xl font-display uppercase tracking-wide text-ink">
            {program.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-sand/76">{program.description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-sand/50">
        <span>{program.duration}</span>
        <span>{program.intensity}</span>
      </div>
      <details className="mt-6">
        <summary className="cursor-pointer text-xs uppercase tracking-[0.3em] text-ember transition hover:text-gold">
          View details
        </summary>
        <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-sand/70">
          {program.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
