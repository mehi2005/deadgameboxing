import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CoachCard } from "@/components/coach-card";
import { FacilityPhotoGrid } from "@/components/facility-photo-grid";
import { FAQPhoto } from "@/components/faq-photo";
import { Hero } from "@/components/hero";
import { InstagramEmbed } from "@/components/instagram-embed";
import { SchedulePhoto } from "@/components/schedule-photo";
import { RotatingImage } from "@/components/rotating-image";
import { ScheduleTable } from "@/components/schedule-table";
import { Section } from "@/components/section";
import { TestimonialCard } from "@/components/testimonial-card";
import { coaches, faqs, schedule, testimonials } from "@/lib/data";

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
            <div className="rounded-3xl border border-ink/10 bg-fog/80 p-8 shadow-lg">
              <p className="text-sm text-sand/70">
                Explore our full membership lineup, training packages, and camp
                offerings.
              </p>
              <div className="mt-6">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark"
                >
                  See all programs
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[520px] w-full max-w-[360px] place-self-center overflow-hidden rounded-md border border-ink/10 lg:h-[624px] lg:max-w-[432px]">
            <RotatingImage
              images={[
                "/images/teamphoto1.webp",
                "/images/teamphoto10.webp",
                "/images/teamphoto11.webp",
              ]}
              alt="DeadGame Boxing team training"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
              intervalMs={5000}
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
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-3 text-sm text-sand/70">
            <p>
              DeadGame Boxing is more than a gym. We are a performance hub with
              athlete monitoring, open ring access, and coaches on deck every
              hour. You will never train alone.
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
                  className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-xs uppercase tracking-[0.3em] text-sand/70"
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
        className="bg-fog/80"
        contentClassName="max-w-[1400px]"
      >
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr_0.75fr] lg:items-start">
          <SchedulePhoto
            src="/images/teamphoto9.webp"
            alt="DeadGame Boxing training"
            from="left"
            className="order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2 lg:max-w-[720px] lg:justify-self-center">
            <ScheduleTable items={schedule.slice(0, 6)} />
            <div className="mt-8">
              <Link
                href="/schedule"
                className="text-xs uppercase tracking-[0.35em] text-ember"
              >
                View full schedule ?
              </Link>
            </div>
          </div>
          <SchedulePhoto
            src="/images/teamphoto4.webp"
            alt="DeadGame Boxing training floor"
            from="left"
            className="order-3"
          />
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FAQPhoto />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-ink/10 bg-fog/80 p-7 md:p-8"
              >
                <h3 className="text-xl font-display uppercase tracking-wide text-sand">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base text-sand/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
