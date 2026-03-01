import { ReactNode } from "react";
type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  headerClassName?: string;
  childrenClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
  headerClassName,
  childrenClassName,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 sm:py-28 ${className ?? ""}`.trim()}>
      <div
        className={`mx-auto w-full max-w-6xl px-6 ${
          contentClassName ?? ""
        }`.trim()}
      >
        <div className={`flex flex-col gap-5 ${headerClassName ?? ""}`.trim()}>
          {eyebrow ? (
            <span
              className={`text-xs uppercase tracking-[0.4em] text-ember ${
                eyebrowClassName ?? ""
              }`.trim()}
            >
              {eyebrow}
            </span>
          ) : null}
          <div className="flex flex-col gap-4">
            <h2
              className={`max-w-4xl text-5xl font-display uppercase tracking-wide text-ink sm:text-6xl ${
                titleClassName ?? ""
              }`.trim()}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={`max-w-3xl text-base leading-relaxed text-sand/78 sm:text-lg ${
                  descriptionClassName ?? ""
                }`.trim()}
              >
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {children ? (
          <div className={`mt-14 sm:mt-16 ${childrenClassName ?? ""}`.trim()}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
