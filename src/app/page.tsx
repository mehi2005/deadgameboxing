import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CoachCard } from "@/components/coach-card";
import { FacilityPhotoGrid } from "@/components/facility-photo-grid";
import { FAQPhoto } from "@/components/faq-photo";
import { Hero } from "@/components/hero";
import { InstagramEmbed } from "@/components/instagram-embed";
import { PhotoMosaic } from "@/components/photo-mosaic";
import { SchedulePhoto } from "@/components/schedule-photo";
import { ProgramCard } from "@/components/program-card";
import { RotatingImage } from "@/components/rotating-image";
import { ScheduleTable } from "@/components/schedule-table";
import { Section } from "@/components/section";
import { TestimonialCard } from "@/components/testimonial-card";
import { coaches, faqs, programs, schedule, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Inside DeadGame"
        title="Discipline First. Results Follow."
        description="From first-time students to active competitors, the gym is structured so each athlete knows exactly what to work on every round."
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-6">
            <div className="grid gap-3 text-sm leading-relaxed text-sand/76">
              <p>
                You get clear progression in technique, conditioning, and ring
                IQ. Classes are paced by level, and coaches keep every round
                intentional.
              </p>
              <p>
                We built this gym culture around consistency and accountability,
                so whether your goal is confidence, fitness, or competition,
                your training plan stays focused.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Beginner to competition tracks",
                "Youth + adult class flow",
                "Coach-supervised open gym",
                "Technique + conditioning split",
              ].map((item) => (
                <div
                  key={item}
                  className="surface-card rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-sand/76"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.34em] text-white transition hover:bg-ember-dark"
              >
                Learn About The Gym
              </Link>
              <Link
                href="/schedule"
                className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.34em] text-sand/70 transition hover:border-ember/60 hover:text-ink"
              >
                Explore Schedule
              </Link>
            </div>
          </div>
          <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-ink/12 lg:h-[620px]">
            <RotatingImage
              images={[
                "/images/teamphoto1.webp",
                "/images/teamphoto10.webp",
                "/images/teamphoto11.webp",
                "/images/dg-heavy-bag.jpg",
                "/images/dg-ring-instruction.jpg",
                "/images/dg-kids-ring-lesson.jpg",
              ]}
              alt="DeadGame Boxing training"
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-top"
              intervalMs={4200}
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Programs"
        title="Train With Purpose"
        description="Choose a track that matches your goals and train with coaches who adapt every session to your level."
        className="bg-fog-soft/55"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/programs"
            className="text-xs uppercase tracking-[0.35em] text-ember transition hover:text-gold"
          >
            See all programs →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Gallery"
        title="Every Photo Back In Rotation"
        description="This wall includes the full original site photo set and every new image you sent."
        contentClassName="max-w-[1400px]"
      >
        <PhotoMosaic />
      </Section>

      <Section
        eyebrow="Schedule"
        title="Weekly Training Flow"
        description="Morning conditioning, evening classes, and progression paths that stay consistent week to week."
        className="bg-fog-soft/55"
        contentClassName="max-w-[1400px]"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.45fr_0.8fr] lg:items-start">
          <SchedulePhoto
            src="/images/teamphoto9.webp"
            alt="DeadGame Boxing training"
            from="left"
            className="order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2 lg:max-w-[740px] lg:justify-self-center">
            <ScheduleTable items={schedule.slice(0, 8)} />
            <div className="mt-8">
              <Link
                href="/schedule"
                className="text-xs uppercase tracking-[0.35em] text-ember transition hover:text-gold"
              >
                View full schedule →
              </Link>
            </div>
          </div>
          <SchedulePhoto
            src="/images/teamphoto4.webp"
            alt="DeadGame Boxing training floor"
            from="right"
            className="order-3"
          />
        </div>
      </Section>

      <Section
        eyebrow="Coaches"
        title="Meet the Crew"
        description="Technical instruction, high standards, and hands-on coaching in every session."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Facility"
        title="Built For Real Fighters"
        description="Dedicated ring time, focused conditioning areas, and coaching support throughout the week."
        className="bg-fog-soft/55"
      >
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="grid gap-4 text-sm leading-relaxed text-sand/74">
            <p>
              DeadGame Boxing is a performance space, not just a drop-in gym.
              We coach with structure and keep the floor moving with purpose.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Two full-size rings",
                "Conditioning turf lane",
                "Recovery + mobility zone",
                "Retail shop and wraps",
              ].map((item) => (
                <div
                  key={item}
                  className="surface-card rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-sand/74"
                >
                  {item}
                </div>
              ))}
            </div>
            <FacilityPhotoGrid />
          </div>
          <div className="flex w-full justify-center">
            <InstagramEmbed permalink="https://www.instagram.com/reel/C5ijnC4OEZ3/?utm_source=ig_embed&utm_campaign=loading" />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Testimonials"
        title="Athletes Who Train Here"
        description="Results in confidence, conditioning, and ring skill from members at every level."
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
        className="bg-fog-soft/55"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FAQPhoto />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="surface-card rounded-3xl p-7 md:p-8"
              >
                <h3 className="text-xl font-display uppercase tracking-wide text-ink">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base text-sand/74">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
