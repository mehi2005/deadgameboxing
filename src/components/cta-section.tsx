import { BookTrialButton } from "@/components/trial-modal-context";

export function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-ember/40 bg-[radial-gradient(circle_at_top,_rgba(214,40,40,0.3),_rgba(11,11,11,0.9))] p-10 text-center shadow-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-ember/90">
            Ready to Train
          </p>
          <h3 className="mt-4 text-4xl font-display uppercase tracking-wide text-ink">
            Start Your First Round With Us
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-sand/80">
            Book a free trial session and get a personalized training plan from
            our coaching staff.
          </p>
          <div className="mt-8 flex justify-center">
            <BookTrialButton className="rounded-full bg-ember px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
