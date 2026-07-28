/**
 * First-touch attribution, carried through the contact form.
 *
 * The goal is narrow and deliberately un-clever: when an enquiry lands in the
 * inbox, we want to know which page earned it and what brought that person to
 * the site. At a few leads a month, that per-lead answer is worth more than
 * any conversion-rate dashboard — the sample size is far too small for rates
 * to mean anything, but "this one came from the Lebanon SEO page via Google"
 * is directly actionable.
 *
 * Storage: none. Not a cookie, not localStorage, not sessionStorage. The
 * first-touch snapshot lives in a module-level variable, which survives
 * client-side navigation between pages (Next's <Link> swaps routes without a
 * new document) and dies on hard reload or tab close. That is enough to
 * follow someone from a blog post to the contact form, and it keeps the
 * privacy policy's "stores nothing on your device" claim literally true.
 *
 * Nothing here is sent anywhere until the visitor presses Send. If they never
 * submit the form, this data never leaves the browser.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/** Google/Meta click identifiers, kept because they survive UTM-less ad clicks. */
const CLICK_IDS = ["gclid", "wbraid", "gbraid", "fbclid", "msclkid"] as const;

export type FirstTouch = {
  /** Path the visitor arrived on, including any query string. */
  landingPage: string;
  /** External referrer of the document, or "" for direct/bookmark traffic. */
  referrer: string;
  /** Campaign tags and click IDs present on arrival, flattened to key=value. */
  campaign: Record<string, string>;
};

let firstTouch: FirstTouch | null = null;

/**
 * Snapshot the arrival context. Idempotent: only the first call in a document
 * writes, so later calls from other pages can't overwrite the true entry
 * point with a mid-journey one.
 */
export function captureFirstTouch(): void {
  if (typeof window === "undefined" || firstTouch) return;

  const params = new URLSearchParams(window.location.search);
  const campaign: Record<string, string> = {};
  for (const key of [...UTM_KEYS, ...CLICK_IDS]) {
    const value = params.get(key);
    if (value) campaign[key] = value;
  }

  firstTouch = {
    landingPage: window.location.pathname + window.location.search,
    // document.referrer belongs to the document, so client-side route changes
    // leave it pointing at the true external source for the whole visit.
    referrer: document.referrer || "",
    campaign,
  };
}

/**
 * Flatten the visit context into form fields. Returns readable `Key: value`
 * pairs because these land in an enquiry email that a human reads, not in a
 * database that a query reads.
 */
export function attributionFields(): Record<string, string> {
  if (typeof window === "undefined") return {};

  // Covers the direct-to-/contact/ case, where nothing captured on mount yet.
  captureFirstTouch();
  if (!firstTouch) return {};

  const sameOrigin =
    firstTouch.referrer.startsWith(window.location.origin) ||
    firstTouch.referrer === "";

  const fields: Record<string, string> = {
    "Landed on": firstTouch.landingPage,
    "Submitted from": window.location.pathname,
    "Came from": sameOrigin ? "Direct or bookmark" : firstTouch.referrer,
  };

  const campaign = Object.entries(firstTouch.campaign);
  if (campaign.length > 0) {
    fields["Campaign"] = campaign
      .map(([key, value]) => `${key}=${value}`)
      .join(", ");
  }

  return fields;
}
