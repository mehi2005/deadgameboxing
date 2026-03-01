import Image from "next/image";
import { BookTrialButton } from "@/components/trial-modal-context";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-ember/45 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_rgba(8,8,8,0.96))] p-10 text-center shadow-2xl sm:p-12">
          <div className="absolute inset-0">
            <Image
              src="/images/teamphoto13.webp"
              alt="DeadGame Boxing team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-28"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <p className="relative z-10 text-xs uppercase tracking-[0.35em] text-ember">
            Ready to Train
          </p>
          <h3 className="relative z-10 mt-4 text-4xl font-display uppercase tracking-wide text-white">
            Start Your First Round With Us
          </h3>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-sm text-white/82">
            Book a free trial session and get a personalized training plan from
            our coaching staff.
          </p>
          <div className="relative z-10 mt-8 flex justify-center">
            <BookTrialButton className="rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark" />
          </div>
        </div>
      </div>
    </section>
  );
}

