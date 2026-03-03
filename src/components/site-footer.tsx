import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";
import { BookTrialButton } from "@/components/trial-modal-context";

export function SiteFooter() {
  const footerLinks = navLinks.filter((link) =>
    ["Home", "About", "Programs", "Schedule", "Contact"].includes(link.label),
  );

  return (
    <footer className="border-b border-ink/10 bg-white/95 py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
            <p className="text-2xl font-display uppercase tracking-wide text-fog">
              Dead Game Boxing
            </p>
            <p className="text-sm leading-relaxed text-fog/70">
              Dead Game Boxing is a boxing gym in Cedar Park serving the Austin
              area. Train fundamentals, conditioning, and competition prep with
              a structured team environment.
            </p>
            <BookTrialButton
              label="BOOK TRIAL"
              className="w-fit rounded-full bg-fog px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-fog/90"
            />
          </div>

          <div className="flex flex-col gap-3 text-sm text-fog/70">
            <p className="text-xs uppercase tracking-[0.3em] text-fog/40">
              Address
            </p>
            <p>{siteInfo.address}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-fog/40">
              Contact
            </p>
            <a href="tel:+15122159086">{siteInfo.phone}</a>
            <p>{siteInfo.email}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-fog/70">
            <p className="text-xs uppercase tracking-[0.3em] text-fog/40">
              Hours
            </p>
            {siteInfo.hours.map((row) => (
              <div key={row.day} className="flex flex-col gap-1">
                <span>{row.day}</span>
                <span className="text-fog/50">{row.time}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm text-fog/70">
            <p className="text-xs uppercase tracking-[0.3em] text-fog/40">
              Quick Links
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-fog"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-fog/40">
                Social
              </p>
              {siteInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 transition hover:text-fog"
                >
                  {social.label === "Instagram" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <path d="M16.5 7.5h.01" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  ) : null}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-4 text-xs uppercase tracking-[0.35em] text-fog/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DEAD GAME BOXING</span>
          <span>TRAIN HARD. STAY SHARP.</span>
        </div>
      </div>
    </footer>
  );
}
