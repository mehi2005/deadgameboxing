import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Section } from "@/components/section";
import { BookTrialButton } from "@/components/trial-modal-context";

const offerings = [
  "Boxing Fundamentals",
  "Youth Boxing",
  "Competition Team",
  "Conditioning",
  "Private Training",
];

const trainers = [
  { name: "Gabe Benavides", role: "Coach" },
  { name: "Jacob Acuna", role: "Coach" },
  { name: "Ricco Spencer", role: "Coach" },
  { name: "Storm Cosby", role: "Coach" },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-fog-soft/55 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
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
            <div className="relative h-28 w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src="/images/dg-ring-instruction.jpg"
                alt="Coach instruction in the ring"
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
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
            <Image
              src="/images/teamphoto3.webp"
              alt="DeadGame Boxing team session"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
          </ScrollReveal>
        </div>
      </section>

      <Section title="What We Offer">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-ink/10 bg-fog/80 px-5 py-4 text-xs uppercase tracking-[0.3em] text-sand/70"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Location"
        description="Train in Cedar Park with easy access for the greater Austin area."
        className="bg-fog-soft/55"
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_1.2fr] md:items-center">
          <div className="grid gap-5">
            <div className="rounded-3xl border border-ink/10 bg-fog/80 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-ember/80">
                Address
              </p>
              <p className="mt-3 text-lg text-sand">
                600 S Bell Blvd Ste 207, Cedar Park, TX
              </p>
              <p className="mt-2 text-base text-sand/70">(512) 215-9086</p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-fog/80 p-6 text-sm text-sand/70">
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

      <Section
        title="Meet Our Trainers"
        description="Names now, full bios coming soon."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="rounded-3xl border border-ink/10 bg-fog/80 p-6"
            >
              <p className="text-2xl font-display uppercase tracking-wide text-sand">
                {trainer.name}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-ember/80">
                {trainer.role}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-sand/60">
          Full coach profiles coming soon.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
