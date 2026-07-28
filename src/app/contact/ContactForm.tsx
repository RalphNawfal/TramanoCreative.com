"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { attributionFields } from "@/lib/attribution";
import { track, LEAD_EVENT } from "@/lib/analytics";

const inputClass =
  "w-full rounded-sm border border-edge bg-carbon-lift px-4 py-3.5 text-[15px] text-white placeholder:text-grey-deep transition-colors duration-300 focus:border-signal focus:outline-none";

const labelClass =
  "block font-mono text-[11px] uppercase tracking-[0.22em] text-grey mb-3";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const body = new FormData(form);
      // Appended at submit rather than rendered as hidden inputs: the values
      // depend on how this visit started, which the statically exported HTML
      // cannot know at build time.
      for (const [name, value] of Object.entries(attributionFields())) {
        body.append(name, value);
      }
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      if (res.ok) {
        // Fires on confirmed success only — a failed POST is not a lead.
        // Budget and project type ride along as dimensions so the GA4 report
        // can separate a $15k enquiry from a tyre-kick, which is the only
        // segmentation that matters at this volume.
        track(LEAD_EVENT, {
          project_type: String(body.get("projectType") ?? ""),
          budget: String(body.get("budget") ?? ""),
          timeline: String(body.get("timeline") ?? ""),
        });
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
      <div className="border border-edge bg-carbon-lift p-12 text-center">
        <p className="slate">Got it</p>
        <p className="mt-6 font-display text-3xl font-semibold leading-snug tracking-[-0.02em]">
          We&apos;ll write back within one business day.
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
          The project *
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
        className="inline-flex items-center justify-center rounded-full bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-carbon transition-colors duration-300 hover:bg-signal-deep disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-signal">
          That didn&apos;t send. Email us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-white underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
