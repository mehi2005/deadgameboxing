import { pricing } from "@/lib/data";
import { BookTrialButton } from "@/components/trial-modal-context";

type PricingTier = (typeof pricing)[number];

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`hover-lift rounded-3xl border p-6 ${
        tier.highlight
          ? "surface-card border-ember/60 bg-ember/12"
          : "surface-card"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-ember">
          {tier.name}
        </p>
        {tier.highlight ? (
          <span className="rounded-full bg-ember px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white">
            Most popular
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-display uppercase tracking-wide text-ink">
          {tier.price}
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-sand/60">
          {tier.cadence}
        </span>
      </div>
      <p className="mt-4 text-sm text-sand/74">{tier.description}</p>
      <ul className="mt-6 flex list-disc flex-col gap-2 pl-5 text-sm text-sand/74">
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="mt-6">
        <BookTrialButton className="w-full rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark" />
      </div>
    </div>
  );
}

