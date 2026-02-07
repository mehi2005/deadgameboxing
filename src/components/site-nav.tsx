"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { BookTrialButton, useTrialModal } from "@/components/trial-modal-context";

export function SiteNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useTrialModal();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-fog/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ember/60 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            DG
          </span>
          <div>
            <p className="text-lg font-display uppercase tracking-wide text-sand">
              DeadGame
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-sand/60">
              Boxing
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-sand/70 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-ink ${
                  isActive ? "text-ink" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <BookTrialButton />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-sand lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-lg">{isOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-ink/10 bg-fog/90 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 text-sm uppercase tracking-[0.25em] text-sand/70">
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
                    isActive ? "text-ink" : ""
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
              className="w-full rounded-full bg-ember px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white"
            >
              Book a Free Trial
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
