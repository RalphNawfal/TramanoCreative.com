"use client";

import { setConsent, useConsent } from "@/lib/consent";

/**
 * Withdraw-or-give consent control for the privacy page.
 *
 * GDPR requires withdrawing consent to be as easy as giving it, and a link
 * that says "adjust your cookie preferences" then buries the switch two
 * modals deep does not meet that bar. This states the current answer in plain
 * words and offers the opposite in one press.
 */
export default function ConsentControls() {
  const consent = useConsent();

  if (consent === "unknown") return null;

  const label =
    consent === "granted"
      ? "You have accepted analytics cookies."
      : consent === "denied"
        ? "You have declined analytics cookies. Nothing is loading from Google."
        : "You have not answered yet, so nothing is loading from Google.";

  return (
    <div className="not-prose my-8 border border-edge bg-carbon-lift p-6">
      <p className="text-sm text-grey">{label}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {consent !== "granted" && (
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="rounded-full bg-signal px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-carbon transition-colors duration-300 hover:bg-signal-deep"
          >
            Accept analytics
          </button>
        )}
        {consent !== "denied" && (
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="rounded-full border border-edge px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:border-white"
          >
            {consent === "granted" ? "Withdraw consent" : "Decline analytics"}
          </button>
        )}
      </div>
    </div>
  );
}
