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
        <div className="rounded-3xl border border-white/10 bg-black/60 p-10 text-center">
          <p className="text-sm text-sand/70">
            The shop is opening soon. In the meantime, stop by the front desk or
            contact us to reserve gear.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white"
            >
              Contact the gym
            </Link>
            <Link
              href="/programs"
              className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-sand/70"
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
