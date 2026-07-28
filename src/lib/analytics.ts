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

export function track(
  event: string,
  params: Record<string, string | number> = {},
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", event, params);
}
