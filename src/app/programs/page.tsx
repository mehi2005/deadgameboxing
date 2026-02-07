import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { ProgramCard } from "@/components/program-card";
import { Section } from "@/components/section";
import { programs } from "@/lib/data";

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black/70 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
              Programs
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-white">
              Every Round Has a Purpose
            </h1>
            <p className="text-base text-sand/70">
              Choose from foundational skill training, youth development,
              competition prep, and performance conditioning.
            </p>
          </div>
          <div className="relative h-[340px] overflow-hidden rounded-[2.5rem] border border-white/10">
            <Image
              src="/images/programs-hero.svg"
              alt="Boxing training programs"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Programs"
        title="Find Your Track"
        description="Open the cards for program details, intensity, and class structure."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
