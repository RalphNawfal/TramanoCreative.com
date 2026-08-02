/**
 * The reel.
 *
 * Deliberate constraints, agreed with the founders:
 *  - No `href` field exists on this type, so no reel item can ever link out to
 *    a client's site. Visitors stay with us; the work is shown, not visited.
 *  - Client names appear nowhere — not in copy, not in filenames, and the
 *    screenshots themselves are cropped below the nav so no wordmark or
 *    phone number survives. See scripts/prep-work-shots.mjs.
 *  - Descriptors say what the build had to *do*, not who it was for.
 *
 * `slug` is the one link that is allowed, and it is not an exception to the
 * rule above: it points at our own case study page, which is still anonymous
 * and still hosted here. Anything pointing off-site remains impossible by
 * construction — there is deliberately no field to put such a URL in.
 */

export type ReelShot = {
  /**
   * Case-study slug under /work/. Present only on builds with a written-up
   * page; absent items render as plain frames exactly as before.
   */
  slug?: string;
  /** Slate marker, e.g. "SC. 01" */
  slate: string;
  /** What the build is, sector-neutral */
  title: string;
  /** What it had to solve */
  body: string;
  status: "Live" | "Concept build";
  /** Short craft notes shown as small caps under the frame */
  notes: string[];
  desktop: { src: string; width: number; height: number };
  mobile?: { src: string; width: number; height: number };
};

export const reel: ReelShot[] = [
  {
    slug: "burger-shop",
    slate: "SC. 01",
    title: "A burger shop that had to look hungry",
    body: "Loud brand, playful motion, and a menu you can order from in two taps. Built to survive being opened one-handed on a phone outside the shop.",
    status: "Live",
    notes: ["Ordering flow", "Menu system", "Mobile-first"],
    desktop: { src: "/work/reel-01-desktop.webp", width: 1424, height: 826 },
    mobile: { src: "/work/reel-01-mobile.webp", width: 378, height: 784 },
  },
  {
    slate: "SC. 02",
    title: "A technical catalogue for people who read spec sheets",
    body: "Hundreds of products, filtered by the numbers buyers actually shop on. Dark, dense, and fast — the specs do the selling, so the layout gets out of the way.",
    status: "Concept build",
    notes: ["Catalogue", "Spec filtering", "Wholesale path"],
    desktop: { src: "/work/reel-02-desktop.webp", width: 1424, height: 826 },
    mobile: { src: "/work/reel-02-mobile.webp", width: 378, height: 786 },
  },
  {
    slate: "SC. 03",
    title: "A booking page built for someone standing in a queue",
    body: "Availability up front, booking in under a minute. High-energy palette, but every decision points at one button.",
    status: "Concept build",
    notes: ["Live availability", "Booking", "Two locations"],
    desktop: { src: "/work/reel-03-desktop.webp", width: 1424, height: 834 },
    mobile: { src: "/work/reel-03-mobile.webp", width: 378, height: 782 },
  },
  {
    slate: "SC. 04",
    title: "A professional practice that had to earn trust fast",
    body: "Editorial type, a lot of white space, credentials visible without scrolling. Quiet on purpose — the whole page is an argument for competence.",
    status: "Concept build",
    notes: ["Credibility layout", "Discovery call", "Service pages"],
    desktop: { src: "/work/reel-04-desktop.webp", width: 1424, height: 816 },
    mobile: { src: "/work/reel-04-mobile.webp", width: 378, height: 768 },
  },
  {
    slate: "SC. 05",
    title: "A calm, high-touch service brand",
    body: "Soft palette, generous spacing, and an offer you understand in one screen. Everything is arranged around booking an appointment without feeling sold to.",
    status: "Concept build",
    notes: ["Brand direction", "Service menu", "Booking"],
    desktop: { src: "/work/reel-05-desktop.webp", width: 1424, height: 663 },
  },
];
