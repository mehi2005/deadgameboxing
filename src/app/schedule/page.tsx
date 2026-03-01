import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { ScheduleFilter } from "@/components/schedule-filter";
import { Section } from "@/components/section";
import { programs, schedule } from "@/lib/data";

export default function SchedulePage() {
  return (
    <>
      <Section
        eyebrow="Schedule"
        title="Weekly Class Schedule"
        description="Filter by program to find the right time slot for your training goals."
      >
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="relative h-44 overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src="/images/dg-heavy-bag.jpg"
              alt="Heavy bag training at DeadGame"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src="/images/teamphoto9.webp"
              alt="DeadGame class action shot"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src="/images/dg-ring-instruction.jpg"
              alt="Ring instruction sequence"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
        <ScheduleFilter
          items={schedule}
          programs={programs.map((program) => program.title)}
        />
      </Section>
      <CTASection />
    </>
  );
}
