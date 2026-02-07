import Image from "next/image";
import { CTASection } from "@/components/cta-section";
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
      <section className="border-b border-white/10 bg-black/70 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
              About
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-white">
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
          <div className="relative h-[380px] overflow-hidden rounded-[2.5rem] border border-white/10">
            <Image
              src="/images/about-gym.svg"
              alt="DeadGame Boxing culture"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section title="What We Offer">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-xs uppercase tracking-[0.3em] text-sand/70"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Location"
        description="Train in Cedar Park with easy access for the greater Austin area."
        className="bg-black/60"
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="grid gap-3 text-lg text-sand">
            <p>600 S Bell Blvd Ste 207, Cedar Park, TX</p>
            <p className="text-sand/70">(512) 215-9086</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/50 p-6 text-sm text-sand/70">
            <p>
              Parking is available on site. Bring wraps and water, or grab what
              you need at the front desk.
            </p>
          </div>
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
              className="rounded-3xl border border-white/10 bg-black/60 p-6"
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
