import Image from "next/image";
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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid">
            <div className="surface-card flex flex-col gap-4 rounded-3xl p-5 text-sm text-sand/72">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ember">
                  Gym Location
                </p>
                <p className="mt-1.5 text-base text-ink-soft">{siteInfo.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ember">
                  Contact
                </p>
                <p className="mt-1.5">{siteInfo.phone}</p>
                <p>{siteInfo.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ember">
                  Hours
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  {siteInfo.hours.map((row) => (
                    <div key={row.day} className="flex flex-col">
                      <span className="text-ink-soft">{row.day}</span>
                      <span className="text-sand/62">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-2 h-52 overflow-hidden rounded-2xl border border-ink/10">
                <Image
                  src="/images/dg-logo-detail.jpg"
                  alt="Dead Game Boxing logo detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transition duration-700 hover:scale-105"
                />
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

