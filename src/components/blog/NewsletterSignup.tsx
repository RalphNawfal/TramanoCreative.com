"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { attributionFields } from "@/lib/attribution";
import { track, NEWSLETTER_EVENT } from "@/lib/analytics";

/*
 * Same classes as ContactForm rather than a shared import. Two forms is not
 * enough duplication to justify a module neither of them owns; if a third
 * appears, lift these out then.
 */
const inputClass =
  "w-full rounded-sm border border-edge bg-carbon-lift px-4 py-3.5 text-[15px] text-white placeholder:text-grey-deep transition-colors duration-300 focus:border-signal focus:outline-none";

type Props = {
  /**
   * Where this instance is mounted, sent as a GA4 dimension so the two
   * placements can be compared. The end-of-post form and the index form catch
   * different people and there is no way to tell them apart afterwards without
   * this.
   */
  location: "post_footer" | "blog_index";
};

/**
 * Newsletter signup.
 *
 * Renders nothing at all until `site.formspreeNewsletterEndpoint` is set. That
 * is not defensive coding — it is the same coupling the analytics tokens use:
 * the endpoint being empty means the feature is genuinely off, including the
 * newsletter sections of the privacy policy, which are derived from the same
 * value. Shipping a form while the policy still says "we do not add you to a
 * mailing list" is the failure this prevents.
 *
 * Formspree collects the address; it does not send anything. Whatever eventually
 * sends the newsletter is a fourth processor and needs its own line in the
 * policy before it starts.
 */
export default function NewsletterSignup({ location }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const sentRef = useRef<HTMLDivElement>(null);

  // Same reason as ContactForm: replacing the form drops focus to <body>, so a
  // keyboard user is silently returned to the top of the document.
  useEffect(() => {
    if (status === "sent") sentRef.current?.focus();
  }, [status]);

  if (!site.formspreeNewsletterEndpoint) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const body = new FormData(form);
      // Appended at submit, not rendered as hidden inputs — the static HTML
      // cannot know at build time how this visit started. This is what answers
      // "which article earned this subscriber".
      for (const [name, value] of Object.entries(attributionFields())) {
        body.append(name, value);
      }
      const res = await fetch(site.formspreeNewsletterEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      if (res.ok) {
        /*
         * Explicit, and not optional. EventTracking.tsx works off a delegated
         * click listener that only ever sees <a> elements, so a submit button
         * is invisible to it — without this call the signup is untracked.
         */
        track(NEWSLETTER_EVENT, { location });
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
      <div ref={sentRef} tabIndex={-1} role="status">
        <p className="slate">Subscribed</p>
        <p className="mt-4 font-display text-2xl leading-snug tracking-[-0.01em]">
          You&apos;ll get the next one.
        </p>
        <p className="mt-3 text-base text-grey">
          Reply to any email to get off the list, or write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-white underline underline-offset-4 hover:text-signal"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <p className="slate">The next one</p>
      <p className="mt-4 font-display text-2xl leading-snug tracking-[-0.01em]">
        Get new guides by email.
      </p>
      {/*
        This sentence is a commitment, not copy. Whatever it says has to match
        what actually gets sent — see the note where the endpoint is declared.
      */}
      <p className="mt-3 text-base leading-[1.65] text-grey">
        One email when something new goes up. No sequences, no pitching, and
        your address goes nowhere else.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`newsletter-email-${location}`} className="sr-only">
            Email address
          </label>
          <input
            id={`newsletter-email-${location}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-carbon transition-colors duration-300 hover:bg-signal-deep disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>

      <input type="hidden" name="source" value="tramanocreative.com newsletter" />

      {/* The button label changing is not re-announced to a screen reader. */}
      <p className="sr-only" role="status">
        {status === "sending" ? "Subscribing" : ""}
      </p>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-signal">
          That didn&apos;t go through. Email us at{" "}
          <a href={`mailto:${site.email}`} className="text-white underline">
            {site.email}
          </a>{" "}
          and we&apos;ll add you.
        </p>
      )}
    </form>
  );
}
