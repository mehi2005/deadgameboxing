"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="surface-card rounded-3xl p-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-ember">
          Message received
        </p>
        <h3 className="mt-4 text-3xl font-display uppercase tracking-wide text-ink">
          We will reach out shortly
        </h3>
        <p className="mt-3 text-sm text-sand/74">
          Expect a response within 24 hours. We are ready when you are.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-sand/70 transition hover:border-ember/60 hover:text-ink"
          onClick={() => setSubmitted(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      className="surface-card grid gap-5 rounded-3xl p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
            Full name
          </label>
          <input
            required
            name="name"
            className="rounded-2xl border border-ink/10 bg-fog-lift/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
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
            className="rounded-2xl border border-ink/10 bg-fog-lift/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
            placeholder="jordan@email.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
          Phone
        </label>
        <input
          name="phone"
          className="rounded-2xl border border-ink/10 bg-fog-lift/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
          placeholder="(555) 555-1234"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-[0.25em] text-sand/60">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-2xl border border-ink/10 bg-fog-lift/70 px-4 py-3 text-sm text-ink outline-none transition focus:border-ember"
          placeholder="Tell us what you want to train..."
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-ember px-6 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-ember-dark"
      >
        Send message
      </button>
    </form>
  );
}
