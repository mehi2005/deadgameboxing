import { testimonials } from "@/lib/data";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="surface-card hover-lift rounded-3xl p-6">
      <p className="text-sm leading-relaxed text-sand/76">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">
          {testimonial.name}
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-ember/80">
          {testimonial.program}
        </span>
      </div>
    </div>
  );
}
