import Link from "next/link";
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-white/90"
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
    </>
  );
}
