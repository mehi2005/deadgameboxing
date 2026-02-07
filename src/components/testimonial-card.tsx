import { testimonials } from "@/lib/data";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-fog/80 p-6 shadow-lg">
      <p className="text-sm text-sand/70">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-sand">
          {testimonial.name}
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-ember/80">
          {testimonial.program}
        </span>
      </div>
    </div>
  );
}
