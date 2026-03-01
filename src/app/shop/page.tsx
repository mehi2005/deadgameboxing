import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/section";

export default function ShopPage() {
  return (
    <>
      <Section
        eyebrow="Shop"
        title="DeadGame Gear"
        description="Our retail store is gearing up with wraps, gloves, and branded apparel."
      >
        <div className="surface-card rounded-3xl p-10 text-center">
          <p className="text-sm text-sand/74">
            The shop is opening soon. In the meantime, stop by the front desk or
            contact us to reserve gear.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark"
            >
              Contact the gym
            </Link>
            <Link
              href="/programs"
              className="rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-sand/70 transition hover:border-ember/60 hover:text-ink"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
