"use client";

import { useEffect, useRef, useState } from "react";
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
  const sentRef = useRef<HTMLDivElement>(null);

  /*
   * Success replaces the whole form, which drops keyboard focus back to
   * <body> — a keyboard user is silently returned to the top of the document
   * with no idea the send worked. Moving focus to the confirmation both
   * announces it and leaves the next Tab somewhere sensible.
   */
  useEffect(() => {
    if (status === "sent") sentRef.current?.focus();
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const body = new FormData(form);
      // A bot that fills every field fills the hidden one too. Show it the
      // success screen and send nothing, so it never reaches the inbox or GA4.
      if (body.get("_gotcha")) {
        setStatus("sent");
        return;
      }
      // Appended at submit rather than rendered as hidden inputs: the values
      // depend on how this visit started, which the statically exported HTML
      // cannot know at build time.
      for (const [name, value] of Object.entries(attributionFields())) {
        body.append(name, value);
      }
      // The same ID goes into the email and the GA4 event, so a lead in the
      // report can be matched to the message in the inbox, one for one.
      const leadId = Math.random().toString(36).slice(2, 8).toUpperCase();
      body.append("lead_id", leadId);
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      if (res.ok) {
        // Fires on confirmed success only — a failed POST is not a lead.
        // Budget and project type ride along as dimensions so the GA4 report
        // can separate a $5k enquiry from a tyre-kick, which is the only
        // segmentation that matters at this volume.
        track(LEAD_EVENT, {
          project_type: String(body.get("projectType") ?? ""),
          budget: String(body.get("budget") ?? ""),
          timeline: String(body.get("timeline") ?? ""),
          lead_id: leadId,
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
      <div
        ref={sentRef}
        tabIndex={-1}
        role="status"
        className="border border-edge bg-carbon-lift p-12 text-center"
      >
        <p className="slate">Got it</p>
        <p className="mt-6 font-display text-3xl font-semibold leading-snug tracking-[-0.02em]">
          We&apos;ll write back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
      className="space-y-6"
    >
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
            <option>Google Ads</option>
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
            <option>Under $1k</option>
            <option>$1k – $2k</option>
            <option>$2k – $5k</option>
            <option>$5k+</option>
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
      {/* Honeypot. Hidden from people and screen readers; Formspree drops any submission that fills it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-carbon transition-colors duration-300 hover:bg-signal-deep disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {/*
        The button label changing to "Sending…" is invisible to a screen reader
        on its own — the accessible name of the focused element doesn't get
        re-announced when it changes underneath you. This says it out loud.
      */}
      <p className="sr-only" role="status">
        {status === "sending" ? "Sending your message" : ""}
      </p>

      {status === "error" && (
        <p role="alert" className="text-sm text-signal">
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
