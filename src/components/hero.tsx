import Image from "next/image";
import Link from "next/link";
import { BookTrialButton } from "@/components/trial-modal-context";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(214,40,40,0.25),_transparent_55%)] py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
            Eastside Boxing Gym
          </p>
          <h1 className="text-5xl font-display uppercase tracking-wide text-white sm:text-6xl">
            Train Like a Fighter. Move Like a Pro.
          </h1>
          <p className="max-w-xl text-base text-sand/75 sm:text-lg">
            DeadGame Boxing delivers elite coaching, high-intensity conditioning,
            and a community built for athletes who want more from every round.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <BookTrialButton />
            <Link
              href="/schedule"
              className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-sand/70 transition hover:text-white"
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
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/50 p-4">
                <p className="text-2xl font-display uppercase text-white">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-sand/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 shadow-2xl">
          <Image
            src="/images/hero-boxer.svg"
            alt="DeadGame Boxing training"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs uppercase tracking-[0.35em] text-sand/70">
            Open Gym + Private Rings
          </div>
        </div>
      </div>
    </section>
  );
}
