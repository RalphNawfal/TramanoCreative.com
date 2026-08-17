/**
 * Thin wrapper over gtag. Every call is a no-op when GA4 is absent — either
 * because no measurement ID is configured, or because the visitor declined
 * consent and the script was never loaded. Callers therefore never need to
 * check whether tracking is on, and no event path can throw.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4 reserved name for a qualified lead — maps to a conversion in Ads. */
export const LEAD_EVENT = "generate_lead";

/**
 * A newsletter subscription.
 *
 * Deliberately not LEAD_EVENT. That event maps to a Google Ads conversion, and
 * folding subscribers into it would corrupt the one number that decides ad
 * spend — a free email address and a project enquiry are not the same thing and
 * must not average together.
 *
 * Also not GA4's reserved `sign_up`, which implies an account being created.
 * Nothing is created here, and the report should say what actually happened.
 */
export const NEWSLETTER_EVENT = "newsletter_signup";

export function track(
  event: string,
  params: Record<string, string | number> = {},
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", event, params);
}
