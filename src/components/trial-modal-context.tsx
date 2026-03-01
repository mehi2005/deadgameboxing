"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type TrialModalContextValue = {
  open: () => void;
  close: () => void;
  isRedirecting: boolean;
};

const TrialModalContext = createContext<TrialModalContextValue | null>(null);

const TRIAL_REDIRECT_URL =
  "https://app.glofox.com/portal/#/branch/655bc43c75c5896148078ec1/memberships";
const TRIAL_REDIRECT_DELAY_MS = 1000;

export function TrialModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const redirectTimeout = useRef<number | null>(null);
  const isRedirectingRef = useRef(false);

  const open = useCallback(() => {
    if (isRedirectingRef.current) return;
    isRedirectingRef.current = true;
    setIsRedirecting(true);
    redirectTimeout.current = window.setTimeout(() => {
      window.location.href = TRIAL_REDIRECT_URL;
    }, TRIAL_REDIRECT_DELAY_MS);
  }, []);

  const close = useCallback(() => {
    if (redirectTimeout.current) {
      window.clearTimeout(redirectTimeout.current);
      redirectTimeout.current = null;
    }
    isRedirectingRef.current = false;
    setIsRedirecting(false);
  }, []);

  const value = useMemo(
    () => ({ open, close, isRedirecting }),
    [open, close, isRedirecting]
  );

  useEffect(() => {
    return () => {
      if (redirectTimeout.current) {
        window.clearTimeout(redirectTimeout.current);
      }
    };
  }, []);

  return (
    <TrialModalContext.Provider value={value}>
      {children}
      <TrialRedirectOverlay isOpen={isRedirecting} />
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
  const { open, isRedirecting } = useTrialModal();
  const trialTone = "!bg-[#d9d9d9] hover:!bg-[#bfbfbf] !text-black";

  return (
    <button
      type="button"
      onClick={open}
      disabled={isRedirecting}
      aria-busy={isRedirecting}
      className={
        className
          ? `${className} ${trialTone} disabled:cursor-not-allowed disabled:opacity-70`
          : `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest transition ${trialTone} disabled:cursor-not-allowed disabled:opacity-70`
      }
    >
      {label}
    </button>
  );
}

function TrialRedirectOverlay({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div
        role="status"
        aria-live="polite"
        className="glass w-full max-w-md rounded-3xl border border-ember/30 bg-black/70 p-10 text-center text-sand shadow-2xl"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-ember">
          DeadGame
        </p>
        <h3 className="mt-4 text-3xl font-display uppercase tracking-wide text-white">
          Loading
        </h3>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-ember" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-ember [animation-delay:150ms]" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-ember [animation-delay:300ms]" />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-sand/60">
          Redirecting
        </p>
      </div>
    </div>
  );
}
