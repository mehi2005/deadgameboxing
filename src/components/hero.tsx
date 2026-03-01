import Image from "next/image";
import Link from "next/link";
import { BookTrialButton } from "@/components/trial-modal-context";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 py-24 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/homapagebackroundpng.jpg"
          alt="Dead Game Boxing gloves in the ring"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_58%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="animate-fade-up flex max-w-3xl flex-col gap-7">
          <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
            Eastside Boxing Gym
          </p>
          <h1 className="text-5xl font-display uppercase tracking-wide text-white sm:text-6xl">
            Train Like a Fighter. Move Like a Pro.
          </h1>
          <p className="max-w-2xl text-base text-white/82 sm:text-lg">
            DeadGame Boxing delivers elite coaching, high-intensity conditioning,
            and a community built for athletes who want more from every round.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <BookTrialButton />
            <Link
              href="/schedule"
              className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-ember/60 hover:text-white"
            >
              View Schedule
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Years Coaching", value: "12+" },
              { label: "Weekly Classes", value: "40" },
              { label: "Athletes Trained", value: "500+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="hover-lift rounded-2xl border border-white/16 bg-black/45 p-4 backdrop-blur"
              >
                <p className="text-2xl font-display uppercase text-white">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/65">
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
