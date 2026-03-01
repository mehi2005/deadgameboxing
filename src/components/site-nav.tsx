"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navLinks } from "@/lib/data";
import { BookTrialButton, useTrialModal } from "@/components/trial-modal-context";

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useTrialModal();
  const navRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const getIsActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const setUnderlineTo = (element: HTMLAnchorElement | null) => {
    const underline = underlineRef.current;
    const nav = navRef.current;
    if (!underline || !nav || !element) return;

    const left = element.offsetLeft;
    const width = element.offsetWidth;
    underline.style.transform = `translateX(${left}px)`;
    underline.style.width = `${width}px`;
    underline.style.opacity = "1";
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-fog/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-ember/70">
            <Image
              src="/images/teamphoto14.webp"
              alt="DeadGame Boxing"
              fill
              sizes="44px"
              className="object-cover object-center"
            />
          </span>
          <div>
            <p className="text-lg font-display uppercase tracking-wide text-ink">
              DeadGame
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-sand/60">
              Boxing
            </p>
          </div>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-7 text-xs uppercase tracking-[0.32em] text-sand/70 lg:flex"
          onMouseLeave={() => {
            const underline = underlineRef.current;
            if (underline) {
              underline.style.opacity = "0";
              underline.style.width = "0px";
            }
          }}
        >
          {navLinks.map((link) => {
            const isActive = getIsActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.href] = el;
                }}
                className={`transition hover:text-ink ${
                  isActive ? "text-ember" : ""
                }`}
                onMouseEnter={(event) => {
                  setUnderlineTo(event.currentTarget);
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <span
            ref={underlineRef}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-ember transition-all duration-300 ease-out"
            style={{ opacity: 0 }}
          />
        </nav>

        <div className="hidden lg:block">
          <BookTrialButton />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-sand lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-lg">{isOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-ink/10 bg-fog-soft/95 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-7 text-sm uppercase tracking-[0.28em] text-sand/70">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-ink ${
                    isActive ? "text-ember" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                open();
                setIsOpen(false);
              }}
              className="w-full rounded-full bg-[#d9d9d9] px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-[#bfbfbf]"
            >
              Book a Free Trial
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
