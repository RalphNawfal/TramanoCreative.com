"use client";

import { useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { purgeStoredConsent, setConsent, useConsent } from "@/lib/consent";

/**
 * Shown only when GA4 is configured and the visitor hasn't chosen yet.
 *
 * Decline is a real button of equal weight, not a greyed-out afterthought —
 * under GDPR refusing has to be as easy as accepting, and a studio that sells
 * honest work should not be running a dark pattern on its own front page.
 *
 * No geo-detection: a static export can't tell where a visitor is without
 * asking a third party, which would leak the very request we're gating. So
 * everyone gets the same prompt.
 */
export default function ConsentBanner() {
  const consent = useConsent();
  // No banner when analytics is off (nothing to consent to) or when consent
  // isn't being asked for (the privacy policy carries the disclosure instead).
  const analyticsDisabled =
    !site.analytics.ga4MeasurementId || !site.analytics.requireConsent;

  // Any stored choice is a leftover from a period when consent was asked for.
  // Clear it: while no banner is shown, `tc-consent` would sit on the device
  // permanently, unreadable and unchangeable by the visitor.
  useEffect(() => {
    if (analyticsDisabled) purgeStoredConsent();
  }, [analyticsDisabled]);

  // "unknown" during prerender and first hydration pass, so the static HTML
  // ships no banner and nobody who already answered sees one flash past.
  if (analyticsDisabled || consent !== "unset") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-edge bg-carbon-lift/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[62ch] text-sm leading-relaxed text-grey">
          We&apos;d like to count visits with Google Analytics, which sets
          cookies. It helps us learn which pages are worth writing. Decline and
          nothing loads — the site works exactly the same.{" "}
          <Link
            href="/privacy/#cookies"
            className="text-white underline underline-offset-4 decoration-edge hover:decoration-signal"
          >
            What this collects
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="rounded-full border border-edge px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="rounded-full bg-signal px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-carbon transition-colors duration-300 hover:bg-signal-deep"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
