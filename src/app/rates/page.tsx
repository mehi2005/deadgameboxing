import { CTASection } from "@/components/cta-section";
import { PricingCard } from "@/components/pricing-card";
import { Section } from "@/components/section";
import { pricing } from "@/lib/data";

export default function RatesPage() {
  return (
    <>
      <Section
        eyebrow="Rates"
        title="Membership Options"
        description="Flexible membership tiers built around your training frequency and goals."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
        <div className="mt-10 grid gap-6 rounded-3xl border border-ink/10 bg-fog/80 p-8 text-sm text-sand/70 md:grid-cols-3">
          {[
            {
              title: "Drop-In Pass",
              detail: "$29 per class, applied toward membership.",
            },
            {
              title: "Gear Rentals",
              detail: "Gloves + wraps included in your first visit.",
            },
            {
              title: "Competition Camp",
              detail: "Custom pricing based on fight camp length.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
                {item.title}
              </p>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
