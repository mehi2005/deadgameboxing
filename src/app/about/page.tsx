import Image from "next/image";
import { CoachCard } from "@/components/coach-card";
import { CTASection } from "@/components/cta-section";
import { RotatingImage } from "@/components/rotating-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Section } from "@/components/section";
import { BookTrialButton } from "@/components/trial-modal-context";
import { coaches } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-fog-soft/55 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember">
              About
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-ink">
              Dead Game Boxing
            </h1>
            <p className="text-xl text-sand/80">
              Elite team training, built to develop disciplined boxers and real
              competitors.
            </p>
            <div className="grid gap-4 text-base text-sand/70">
              <p>
                Dead Game Boxing is a boxing gym in Cedar Park serving the
                Austin area. You train with structure, clear coaching, and a
                pace that matches your level. We focus on fundamentals first,
                then conditioning, then competition prep.
              </p>
              <p>
                Whether you want to learn the basics, build confidence, or
                compete, you will get a plan that makes progress measurable.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <BookTrialButton
                label="Book a Free Trial"
                className="rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark"
              />
            </div>
          </div>
          <ScrollReveal
            from="right"
            className="relative h-[440px] overflow-hidden border border-ink/10"
          >
            <RotatingImage
              images={[
                "/images/dg-coach-talk.jpg",
                "/images/teamphoto1.webp",
                "/images/teamphoto10.webp",
                "/images/teamphoto11.webp",
              ]}
              alt="DeadGame Boxing team training"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
              intervalMs={5000}
            />
          </ScrollReveal>
        </div>
      </section>

      <Section
        title="Location"
        description="Train in Cedar Park with easy access for the greater Austin area."
        className="border-y border-black/10 bg-white py-6 sm:py-8"
        titleClassName="!text-black !text-4xl sm:!text-5xl"
        descriptionClassName="!text-black"
        headerClassName="gap-3"
        childrenClassName="!mt-6 sm:!mt-8"
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_1.2fr] md:items-center">
          <div className="grid gap-5">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/65">
                Address
              </p>
              <p className="mt-3 text-lg text-black">
                600 S Bell Blvd Ste 207, Cedar Park, TX
              </p>
              <p className="mt-2 text-base text-black/70">(512) 215-9086</p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-black/70 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
              <p>
                Parking is available on site. Bring wraps and water, or grab
                what you need at the front desk.
              </p>
            </div>
          </div>
          <ScrollReveal
            from="right"
            className="relative h-[432px] overflow-hidden border border-ink/10"
          >
            <Image
              src="/images/teamphoto12.webp"
              alt="DeadGame Boxing training group"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
          </ScrollReveal>
        </div>
      </Section>

      <section className="border-y border-ink/10 bg-fog-soft/55 py-24 sm:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-0">
          <div className="flex flex-col gap-5">
            <span className="text-xs uppercase tracking-[0.4em] text-ember/90">
              Coaches
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-4xl text-5xl font-display uppercase tracking-wide text-ink sm:text-6xl">
                Meet the Crew
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-sand/75 sm:text-lg">
                Our coaching team blends competitive experience with a tactical, data-driven approach.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} coach={coach} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
