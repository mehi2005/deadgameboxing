import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CoachCard } from "@/components/coach-card";
import { Hero } from "@/components/hero";
import { ProgramCard } from "@/components/program-card";
import { ScheduleTable } from "@/components/schedule-table";
import { Section } from "@/components/section";
import { TestimonialCard } from "@/components/testimonial-card";
import { coaches, faqs, programs, schedule, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Programs"
        title="Train With Purpose"
        description="Choose a program that matches your goals and level. Our coaches tailor every session for progress."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/programs"
            className="text-xs uppercase tracking-[0.35em] text-ember"
          >
            See all programs →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Facility"
        title="Built For Real Fighters"
        description="A focused space with dedicated ring time, conditioning zones, and recovery amenities."
        className="bg-black/60"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 text-sm text-sand/70">
            <p>
              DeadGame Boxing is more than a gym. We are a performance hub with
              athlete monitoring, open ring access, and coaches on deck every
              hour. You will never train alone.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Two full-size rings",
                "Conditioning turf lane",
                "Recovery + mobility zone",
                "Retail shop and wraps",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.3em] text-sand/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-[2.5rem] border border-white/10">
            <Image
              src="/images/facility.svg"
              alt="DeadGame Boxing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Coaches"
        title="Meet the Crew"
        description="Our coaching team blends competitive experience with a tactical, data-driven approach."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Schedule"
        title="Weekly Training Flow"
        description="Choose from morning conditioning, midday skill work, and evening fight prep."
        className="bg-black/60"
      >
        <ScheduleTable items={schedule.slice(0, 6)} />
        <div className="mt-8">
          <Link
            href="/schedule"
            className="text-xs uppercase tracking-[0.35em] text-ember"
          >
            View full schedule →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="Athletes Who Train Here"
        description="From first timers to competitors, our members keep showing up for one reason: results."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Questions, Answered"
        description="Everything you need before stepping into your first class."
        className="bg-black/60"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-black/60 p-6"
            >
              <h3 className="text-lg font-display uppercase tracking-wide text-sand">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm text-sand/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
