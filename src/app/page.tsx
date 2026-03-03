import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { FacilityPhotoGrid } from "@/components/facility-photo-grid";
import { FAQPhoto } from "@/components/faq-photo";
import { Hero } from "@/components/hero";
import { InstagramEmbed } from "@/components/instagram-embed";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Section } from "@/components/section";
import { TrainWithPurposeMedia } from "@/components/train-with-purpose-media";
import { TestimonialCard } from "@/components/testimonial-card";
import { faqs, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal from="none">
        <Section
          eyebrow="Programs"
          title="Train With Purpose"
          description="Choose a program that matches your goals and level. Our coaches tailor every session for progress."
          className="bg-neutral-800 !pt-8 sm:!pt-10"
          contentClassName="relative z-10"
          eyebrowClassName="!text-white/70"
          titleClassName="!text-white"
          descriptionClassName="!text-white/80"
        >
          <div className="-mt-12 mb-6">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] !text-black transition hover:bg-white/90"
            >
              <span>Programs</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12h16m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <TrainWithPurposeMedia />
        </Section>
      </ScrollReveal>

      <ScrollReveal from="fade" threshold={0.14}>
        <Section
          eyebrow="Facility"
          title="Built For Real Fighters"
          description="A focused space with dedicated ring time, conditioning zones, and recovery amenities."
          className="bg-fog/80"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-3 text-sm text-sand/70">
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "One full-size ring",
                  "Weights section for strength + conditioning",
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
              <p className="mt-8">
                DeadGame Boxing is more than a gym. We are a performance hub with
                athlete monitoring, open ring access, and coaches on deck every
                hour. You will never train alone.
              </p>
            </div>

            <div className="flex w-full justify-center">
              <InstagramEmbed permalink="https://www.instagram.com/reel/C5ijnC4OEZ3/?utm_source=ig_embed&utm_campaign=loading" />
            </div>
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal from="fade" threshold={0.14}>
        <Section
          eyebrow="Testimonials"
          title="Athletes Who Train Here"
          description="From first timers to competitors, our members keep showing up for one reason: results."
          className="border-y border-black/10 bg-white"
          eyebrowClassName="!text-black"
          titleClassName="!text-black"
          descriptionClassName="!text-black"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Section>
      </ScrollReveal>

      <ScrollReveal from="fade" threshold={0.14}>
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
      </ScrollReveal>

      <ScrollReveal from="fade" threshold={0.14}>
        <CTASection />
      </ScrollReveal>
    </>
  );
}
