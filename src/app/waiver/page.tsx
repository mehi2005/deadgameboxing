import { CTASection } from "@/components/cta-section";
import { Section } from "@/components/section";
import { WaiverForm } from "@/components/waiver-form";

export default function WaiverPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-fog/80 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ember">
              Waiver
            </p>
            <h1 className="text-5xl font-display uppercase tracking-wide text-ink">
              Participant Release &amp; Liability Waiver
            </h1>
            <p className="text-base text-sand/70">
              Complete your electronic waiver before your first session. This
              front-end form is for consent and record collection only.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-fog/80 p-8 text-sm text-sand/70">
            <p className="text-xs uppercase tracking-[0.35em] text-ember">
              Texas, United States
            </p>
            <p className="mt-3">
              Dead Game Boxing is a high-intensity training environment. Boxing
              and conditioning involve physical contact, rapid movement, and
              impact risks. Please review the full waiver language below.
            </p>
            <p className="mt-3 text-sand/60">
              By signing, you acknowledge the risks, accept responsibility, and
              agree to the terms.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Liability"
        title="Read Before Signing"
        description="This waiver is intended to be a comprehensive release of liability for participation in boxing and fitness activities."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-ink/10 bg-fog/80 p-8 text-sm text-sand/70">
            <div className="grid gap-4">
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Assumption of Risk
              </p>
              <p>
                I understand that boxing, sparring, conditioning, and related
                activities are inherently dangerous and involve risks that may
                result in serious injury, illness, or death. These risks include
                but are not limited to falls, collisions, impact with equipment,
                contact with other participants, overexertion, and equipment
                failure.
              </p>
              <p>
                I voluntarily choose to participate and assume all risks,
                whether known or unknown, even if arising from the negligence of
                Dead Game Boxing or its owners, coaches, employees, volunteers,
                or agents.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Release of Liability
              </p>
              <p>
                In consideration of being allowed to participate, I hereby
                release, waive, discharge, and covenant not to sue Dead Game
                Boxing, its owners, officers, employees, coaches, volunteers,
                affiliates, landlords, and agents from any and all claims,
                demands, actions, or causes of action arising from injury,
                disability, death, or property damage related to participation
                or presence at the facility.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Indemnification
              </p>
              <p>
                I agree to indemnify and hold harmless Dead Game Boxing from any
                claims, liabilities, damages, or costs (including reasonable
                attorneys&apos; fees) arising out of my participation or actions.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Medical Authorization
              </p>
              <p>
                I certify that I am physically able to participate. I authorize
                Dead Game Boxing to obtain emergency medical treatment if needed
                and agree to be financially responsible for any medical costs.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Rules &amp; Conduct
              </p>
              <p>
                I agree to follow all gym rules, safety instructions, and coach
                directions. I understand that participation may be terminated if
                I fail to follow safety guidelines or behave in a manner that
                endangers myself or others.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Photo &amp; Video Release
              </p>
              <p>
                I grant permission to Dead Game Boxing to use photos or videos
                of me for promotional purposes without compensation.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Governing Law
              </p>
              <p>
                This waiver is governed by the laws of the State of Texas. Any
                dispute arising from this waiver shall be brought in the courts
                located in Travis County, Texas.
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">
                Electronic Signature
              </p>
              <p>
                By typing my name below, I agree this electronic signature is
                the legal equivalent of my handwritten signature.
              </p>
            </div>
          </div>

          <WaiverForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}

