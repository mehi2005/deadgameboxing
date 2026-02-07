import Link from "next/link";
import { navLinks, siteInfo } from "@/lib/data";
import { BookTrialButton } from "@/components/trial-modal-context";

export function SiteFooter() {
  const footerLinks = navLinks.filter((link) =>
    ["Home", "About", "Programs", "Schedule", "Contact"].includes(link.label),
  );

  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-display uppercase tracking-wide text-sand">
              Dead Game Boxing
            </p>
            <p className="text-sm text-sand/70">
              Dead Game Boxing is a boxing gym in Cedar Park serving the Austin
              area. Train fundamentals, conditioning, and competition prep with
              a structured team environment.
            </p>
            <BookTrialButton
              label="BOOK A FREE TRIAL"
              className="w-fit rounded-full bg-ember px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
            />
          </div>

          <div className="flex flex-col gap-3 text-sm text-sand/70">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/40">
              Address
            </p>
            <p>{siteInfo.address}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-sand/40">
              Contact
            </p>
            <a href="tel:+15122159086">{siteInfo.phone}</a>
            <p>{siteInfo.email}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-sand/70">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/40">
              Hours
            </p>
            {siteInfo.hours.map((row) => (
              <div key={row.day} className="flex flex-col gap-1">
                <span>{row.day}</span>
                <span className="text-sand/50">{row.time}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm text-sand/70">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/40">
              Quick Links
            </p>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/40">
                Social
              </p>
              {siteInfo.socials.map((social) => (
                <a key={social.label} href={social.href}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.35em] text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DEAD GAME BOXING</span>
          <span>TRAIN HARD. STAY SHARP.</span>
        </div>
      </div>
    </footer>
  );
}
