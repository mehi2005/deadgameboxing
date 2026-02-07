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
        <ScheduleFilter
          items={schedule}
          programs={programs.map((program) => program.title)}
        />
      </Section>
      <CTASection />
    </>
  );
}
