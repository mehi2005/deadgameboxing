import { ReactNode } from "react";
type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className ?? ""}`.trim()}>
      <div
        className={`mx-auto w-full max-w-6xl px-6 ${
          contentClassName ?? ""
        }`.trim()}
      >
        <div className="flex flex-col gap-4">
          {eyebrow ? (
            <span className="text-xs uppercase tracking-[0.35em] text-ember">
              {eyebrow}
            </span>
          ) : null}
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-display uppercase tracking-wide text-sand sm:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-base text-sand/70 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
