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
          <div className="grid gap-6">
            <div className="surface-card flex flex-col gap-6 rounded-3xl p-8 text-sm text-sand/72">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-ember/80">
                  Gym Location
                </p>
                <p className="mt-2 text-base text-ink-soft">{siteInfo.address}</p>
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
                      <span className="text-ink-soft">{row.day}</span>
                      <span className="text-sand/62">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-36 overflow-hidden rounded-2xl border border-ink/10">
                <Image
                  src="/images/dg-coach-talk.jpg"
                  alt="Coach and athlete discussion"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="relative h-36 overflow-hidden rounded-2xl border border-ink/10">
                <Image
                  src="/images/teamphoto6.webp"
                  alt="DeadGame training floor"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition duration-700 hover:scale-105"
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
