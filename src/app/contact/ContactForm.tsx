"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-line bg-surface/80 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-all duration-300 focus:border-cyan/60 focus:outline-none focus:ring-1 focus:ring-cyan/40 focus:shadow-[0_0_24px_rgba(34,211,238,0.18)] focus:bg-surface";

const labelClass =
  "block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted mb-2";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glow-ring rounded-2xl bg-surface/60 p-10 text-center backdrop-blur-sm">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          Transmission received
        </p>
        <p className="mt-4 font-display text-2xl font-semibold">
          We&apos;ll respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company / website
        </label>
        <input id="company" name="company" className={inputClass} placeholder="Company name or current site URL" />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project type *
          </label>
          <select id="projectType" name="projectType" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>New website</option>
            <option>Redesign</option>
            <option>SEO / content</option>
            <option>Care plan</option>
            <option>Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget *
          </label>
          <select id="budget" name="budget" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Under $3k</option>
            <option>$3k – $8k</option>
            <option>$8k – $15k</option>
            <option>$15k+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline *
          </label>
          <select id="timeline" name="timeline" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>ASAP</option>
            <option>1–2 months</option>
            <option>3+ months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          The mission *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="What are you building, and what should this website do for your business?"
        />
      </div>

      <input type="hidden" name="source" value="tramanocreative.com contact form" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="glow-ring inline-flex items-center justify-center rounded-full bg-cyan/10 px-8 py-3.5 font-mono text-base uppercase tracking-[0.15em] text-cyan-bright transition-all duration-300 hover:bg-cyan/20 hover:text-white disabled:opacity-50"
      >
        {status === "sending" ? "Transmitting…" : "Send transmission"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Transmission failed. Email us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-cyan-bright underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
