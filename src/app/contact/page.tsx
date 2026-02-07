import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/section";
import { siteInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Talk With Our Coaches"
        description="Send us a note, ask about a program, or book a free trial session."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/60 p-8 text-sm text-sand/70">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
                Gym Location
              </p>
              <p className="mt-2 text-base text-sand">{siteInfo.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
                Contact
              </p>
              <p className="mt-2">{siteInfo.phone}</p>
              <p>{siteInfo.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
                Hours
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {siteInfo.hours.map((row) => (
                  <div key={row.day} className="flex flex-col">
                    <span className="text-sand">{row.day}</span>
                    <span className="text-sand/60">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
