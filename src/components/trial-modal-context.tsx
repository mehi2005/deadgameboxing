"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { programs } from "@/lib/data";

type TrialModalContextValue = {
  open: () => void;
  close: () => void;
};

const TrialModalContext = createContext<TrialModalContextValue | null>(null);

export function TrialModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const open = useCallback(() => {
    setSubmitted(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  return (
    <TrialModalContext.Provider value={value}>
      {children}
      <TrialModal
        isOpen={isOpen}
        submitted={submitted}
        onClose={close}
        onSubmit={() => setSubmitted(true)}
      />
    </TrialModalContext.Provider>
  );
}

export function useTrialModal() {
  const context = useContext(TrialModalContext);
  if (!context) {
    throw new Error("useTrialModal must be used within TrialModalProvider");
  }
  return context;
}

export function BookTrialButton({
  className,
  label = "Book a Free Trial",
}: {
  className?: string;
  label?: string;
}) {
  const { open } = useTrialModal();
  return (
    <button
      type="button"
      onClick={open}
      className={
        className ??
        "inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-ember-dark"
      }
    >
      {label}
    </button>
  );
}

function TrialModal({
  isOpen,
  submitted,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  submitted: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="glass w-full max-w-2xl rounded-3xl p-8 text-sand shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ember">
              Free Trial
            </p>
            <h3 className="mt-3 text-3xl font-display uppercase tracking-wide">
              Book Your First Session
            </h3>
            <p className="mt-2 text-sm text-sand/70">
              Tell us what you want to train and we will confirm your spot.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sand/70 transition hover:text-white"
          >
            Close
          </button>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-ember">
              Submission received
            </p>
            <h4 className="mt-4 text-2xl font-display uppercase tracking-wide">
              You are on the roster.
            </h4>
            <p className="mt-3 text-sm text-sand/70">
              A coach will reach out within 24 hours to confirm your session.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            className="mt-10 grid gap-5 md:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
                Full name
              </label>
              <input
                required
                name="name"
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-ember"
                placeholder="Jordan Hayes"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-ember"
                placeholder="jordan@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
                Phone
              </label>
              <input
                required
                name="phone"
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-ember"
                placeholder="(555) 555-1234"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
                Preferred program
              </label>
              <select
                name="program"
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-ember"
              >
                {programs.map((program) => (
                  <option key={program.slug} value={program.title}>
                    {program.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
                Preferred date + time
              </label>
              <input
                required
                type="datetime-local"
                name="datetime"
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-ember"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-ember px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark"
              >
                Request my trial
              </button>
              <p className="mt-3 text-xs text-sand/60">
                We will confirm availability within one business day.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
