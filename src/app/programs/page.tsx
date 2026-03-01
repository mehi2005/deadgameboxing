import { CTASection } from "@/components/cta-section";
import { ProgramsHeroVideo } from "@/components/programs-hero-video";
import { ProgramsSwitcher } from "@/components/programs-switcher";
import { Section } from "@/components/section";

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/95 py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-fog">
              Programs
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-fog">
              Every Round Has a Purpose
            </h1>
            <p className="text-base text-fog/70">
              Choose from foundational skill training, youth development,
              competition prep, and performance conditioning.
            </p>
          </div>
          <div className="relative h-100 overflow-hidden border border-ink/10 lg:h-120">
            <ProgramsHeroVideo />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Programs"
        title="Find Your Track"
        description="Select a program name to see details, intensity, and class structure."
      >
        <ProgramsSwitcher />
      </Section>

      <CTASection />
    </>
  );
}

