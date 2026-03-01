import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { ProgramsGrid } from "@/components/programs-grid";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Section } from "@/components/section";

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-fog-soft/55 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
              Programs
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-ink">
              Every Round Has a Purpose
            </h1>
            <p className="text-base text-sand/70">
              Choose from foundational skill training, youth development,
              competition prep, and performance conditioning.
            </p>
            <div className="relative h-28 w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src="/images/dg-sparring-coach.jpg"
                alt="Coach guiding a sparring session"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
          <ScrollReveal
            from="right"
            className="relative h-[380px] overflow-hidden border border-ink/10"
          >
            <Image
              src="/images/teamphoto2.webp"
              alt="DeadGame Boxing training session"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top scale-105"
            />
          </ScrollReveal>
        </div>
      </section>

      <Section
        eyebrow="Programs"
        title="Find Your Track"
        description="Open the cards for program details, intensity, and class structure."
      >
        <ProgramsGrid />
      </Section>

      <CTASection />
    </>
  );
}
