import Image from "next/image";
import { CoachCard } from "@/components/coach-card";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/section";
import { coaches } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black/70 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
              About DeadGame
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-white">
              A Boxing Gym Built on Discipline
            </h1>
            <p className="text-base text-sand/70">
              DeadGame Boxing is a competitive-minded gym where skill, grit, and
              respect lead every session. We believe in hard coaching, clear
              standards, and building athletes who can perform in and out of the
              ring.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Coach-led training plans",
                "Youth and adult programs",
                "Competition prep",
                "Supportive community",
              ].map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-xs uppercase tracking-[0.3em] text-sand/70"
                >
                  {value}
                </div>
              ))}
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

      <Section
        eyebrow="Our Mission"
        title="Crafting Complete Fighters"
        description="We train athletes with structure, accountability, and a relentless pursuit of fundamentals."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Intentional Coaching",
              text: "Every class is mapped to a skill target so you can track progress.",
            },
            {
              title: "Competition Ready",
              text: "For those who want to fight, we build strategy and ring IQ.",
            },
            {
              title: "Community Driven",
              text: "We push each other hard and keep every round respectful.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-black/60 p-6"
            >
              <h3 className="text-2xl font-display uppercase tracking-wide text-sand">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-sand/70">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Team"
        title="Coaches Who Fight With You"
        description="Hands-on coaching from professionals who care about your growth."
        className="bg-black/60"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
