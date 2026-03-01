import { Section } from "@/components/section";

export default function ShopPage() {
  return (
    <>
      <Section
        eyebrow="Shop"
        title="Coming Soon"
        description="DeadGame Gear is on the way."
      >
        <div className="surface-card rounded-3xl px-10 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-ember">
            Coming Soon
          </p>
          <p className="mt-4 text-base text-sand/75">
            A curated shop for wraps, gloves, and branded gear.
          </p>
        </div>
      </Section>
    </>
  );
}
