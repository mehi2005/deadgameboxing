import { testimonials } from "@/lib/data";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="hover-lift rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
      <p className="text-sm leading-relaxed text-black/75">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-black">
          {testimonial.name}
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-black/65">
          {testimonial.program}
        </span>
      </div>
    </div>
  );
}
