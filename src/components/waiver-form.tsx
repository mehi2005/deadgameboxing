"use client";

import { useMemo, useState } from "react";

export function WaiverForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isMinor, setIsMinor] = useState(false);
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-fog/80 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-ember">
          Waiver received
        </p>
        <h3 className="mt-4 text-3xl font-display uppercase tracking-wide text-sand">
          Thanks for signing
        </h3>
        <p className="mt-3 text-sm text-sand/70">
          This is a front-end confirmation only. We will contact you if any
          details are missing.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-sand/70"
          onClick={() => setSubmitted(false)}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6 rounded-3xl border border-ink/10 bg-fog/80 p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Participant full name
          </label>
          <input
            required
            name="participantName"
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
            placeholder="Jordan Hayes"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Date of birth
          </label>
          <input
            required
            type="date"
            name="dob"
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
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
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
            placeholder="(555) 555-1234"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
          Address
        </label>
        <input
          name="address"
          className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
          placeholder="Street, City, State, ZIP"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Emergency contact name
          </label>
          <input
            required
            name="emergencyContact"
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
            placeholder="Alex Rivera"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Emergency contact phone
          </label>
          <input
            required
            name="emergencyPhone"
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
            placeholder="(555) 555-9876"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-fog/60 p-4 text-sm text-sand/70">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={isMinor}
            onChange={(event) => setIsMinor(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-ink/20"
          />
          <span>I am signing for a participant under 18 years old.</span>
        </label>
      </div>

      {isMinor ? (
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
              Parent/guardian name
            </label>
            <input
              required
              name="guardianName"
              className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
              placeholder="Casey Hayes"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
              Relationship
            </label>
            <input
              required
              name="guardianRelationship"
              className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
              placeholder="Parent / Guardian"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
              Guardian phone
            </label>
            <input
              required
              name="guardianPhone"
              className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
              placeholder="(555) 555-4321"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
              Guardian email
            </label>
            <input
              required
              type="email"
              name="guardianEmail"
              className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
              placeholder="guardian@email.com"
            />
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 rounded-2xl border border-ink/10 bg-fog/60 p-5 text-sm text-sand/70">
        <label className="flex items-start gap-3">
          <input
            required
            type="checkbox"
            name="agreeWaiver"
            className="mt-1 h-4 w-4 rounded border-ink/20"
          />
          <span>
            I have read and agree to the waiver and release terms shown on this
            page.
          </span>
        </label>
        <label className="flex items-start gap-3">
          <input
            required
            type="checkbox"
            name="agreeElectronic"
            className="mt-1 h-4 w-4 rounded border-ink/20"
          />
          <span>
            I consent to use an electronic signature and understand it is the
            legal equivalent of my handwritten signature.
          </span>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Signature (type full name)
          </label>
          <input
            required
            name="signature"
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-lg font-display uppercase tracking-wide text-ink outline-none transition focus:border-ember"
            placeholder="Jordan Hayes"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Signature date
          </label>
          <input
            required
            type="date"
            name="signatureDate"
            defaultValue={today}
            className="rounded-2xl border border-ink/10 bg-fog/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
          />
        </div>
      </div>

      <button
        type="submit"
        className="rounded-full bg-ember px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white"
      >
        Submit waiver
      </button>
    </form>
  );
}
