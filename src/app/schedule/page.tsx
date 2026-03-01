import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ScheduleFilter } from "@/components/schedule-filter";
import { Section } from "@/components/section";
import { programs, schedule } from "@/lib/data";

export default function SchedulePage() {
  const liveSessionsUrl =
    "https://app.glofox.com/portal/#/branch/655bc43c75c5896148078ec1/classes-list-view";

  return (
    <>
      <Section
        eyebrow="Schedule"
        title="Weekly Class Schedule"
        contentClassName="max-w-[1500px]"
      >
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="max-w-3xl text-base leading-relaxed text-sand/78 sm:text-lg">
              View the full weekly schedule at once with color-coded class blocks
              for quick scanning.
            </p>
          </div>

          <ScrollReveal from="right" threshold={0.08} className="lg:justify-self-end">
            <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-none border border-ink/10">
              <Image
                src="/images/teamphoto13.webp"
                alt="DeadGame team training"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>
        </div>
        <ScheduleFilter
          items={schedule}
          programs={programs.map((program) => program.title)}
        />
        <div className="mt-4 lg:-mt-25 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8">
          <div className="hidden lg:block" />
          <div className="lg:pl-6">
            <Link
              href={liveSessionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] !text-black transition hover:bg-white/90"
            >
              View Live Sessions
            </Link>
            <p className="mt-3 text-sm text-sand/62">
              Click to view more up to date sessions in case of changes.
            </p>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
