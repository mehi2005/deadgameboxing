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
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <div className="grid gap-6 md:grid-cols-2">
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
          </div>
          <div className="relative h-[520px] w-full max-w-[360px] place-self-center overflow-hidden rounded-md border border-ink/10">
            <Image
              src="/images/teamphoto1.png"
              alt="DeadGame Boxing team training"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Facility"
        title="Built For Real Fighters"
        description="A focused space with dedicated ring time, conditioning zones, and recovery amenities."
        className="bg-fog/80"
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
                  className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-xs uppercase tracking-[0.3em] text-sand/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative pb-20">
            <div className="relative h-[400px] overflow-hidden rounded-md border border-ink/10">
              <Image
                src="/images/facility.svg"
                alt="DeadGame Boxing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 left-6 h-[240px] w-[170px] overflow-hidden rounded-md border border-ink/10 shadow-2xl sm:left-10 sm:h-[260px] sm:w-[190px]">
              <Image
                src="/images/teamphoto2.png"
                alt="DeadGame Boxing team"
                fill
                sizes="(max-width: 1024px) 60vw, 20vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Coaches"
        title="Meet the Crew"
        description="Our coaching team blends competitive experience with a tactical, data-driven approach."
      >
        <div className="relative h-[420px] w-full max-w-[420px] place-self-center overflow-hidden rounded-md border border-ink/10">
          <Image
            src="/images/teamphoto3.png"
            alt="DeadGame Boxing team session"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-top"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Schedule"
        title="Weekly Training Flow"
        description="Choose from morning conditioning, midday skill work, and evening fight prep."
        className="bg-fog/80"
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <ScheduleTable items={schedule.slice(0, 6)} />
            <div className="mt-8">
              <Link
                href="/schedule"
                className="text-xs uppercase tracking-[0.35em] text-ember"
              >
                View full schedule →
              </Link>
            </div>
          </div>
          <div className="relative h-[520px] w-full max-w-[360px] place-self-center overflow-hidden rounded-md border border-ink/10">
            <Image
              src="/images/teamphoto4.png"
              alt="DeadGame Boxing training floor"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
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
        className="bg-fog/80"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-ink/10 bg-fog/80 p-6"
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
