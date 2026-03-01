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
    <section id={id} className={`py-24 sm:py-28 ${className ?? ""}`.trim()}>
      <div
        className={`mx-auto w-full max-w-6xl px-6 ${
          contentClassName ?? ""
        }`.trim()}
      >
        <div className="flex flex-col gap-5">
          {eyebrow ? (
            <span className="text-xs uppercase tracking-[0.4em] text-ember">
              {eyebrow}
            </span>
          ) : null}
          <div className="flex flex-col gap-4">
            <h2 className="max-w-4xl break-words text-5xl font-display uppercase tracking-wide text-ink leading-tight sm:text-6xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-3xl break-words text-base leading-relaxed text-sand/78 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {children ? <div className="mt-14 sm:mt-16">{children}</div> : null}
      </div>
    </section>
  );
}

