import Image from "next/image";
import Link from "next/link";
import { BookTrialButton } from "@/components/trial-modal-context";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/homapagebackroundpng.jpg"
          alt="Dead Game Boxing gloves in the ring"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,40,40,0.25),_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
            Eastside Boxing Gym
          </p>
          <h1 className="text-5xl font-display uppercase tracking-wide text-white sm:text-6xl">
            Train Like a Fighter. Move Like a Pro.
          </h1>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            DeadGame Boxing delivers elite coaching, high-intensity conditioning,
            and a community built for athletes who want more from every round.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <BookTrialButton />
            <Link
              href="/schedule"
              className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
            >
              View Schedule
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "Years Coaching", value: "12+" },
              { label: "Weekly Classes", value: "40" },
              { label: "Athletes Trained", value: "500+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/10 bg-fog/70 p-4"
              >
                <p className="text-2xl font-display uppercase text-ink">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-sand/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
