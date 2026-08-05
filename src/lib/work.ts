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
  /*
   * Alt text is per-image and lives here rather than being built from `title`
   * in the component. It used to render as `${title} — desktop view`, which
   * passes an automated check and tells a screen reader nothing: the title is
   * a marketing line about the client's problem, not a description of what is
   * on screen. These frames are the portfolio — if they can't be seen, the
   * alt has to carry the design itself.
   */
  desktop: { src: string; width: number; height: number; alt: string };
  mobile?: { src: string; width: number; height: number; alt: string };
};

export const reel: ReelShot[] = [
  {
    slug: "burger-shop",
    slate: "SC. 01",
    title: "A burger shop that had to look hungry",
    body: "Loud brand, playful motion, and a menu you can order from in two taps. Built to survive being opened one-handed on a phone outside the shop.",
    status: "Live",
    notes: ["Ordering flow", "Menu system", "Mobile-first"],
    desktop: {
      src: "/work/reel-01-desktop.webp",
      width: 1424,
      height: 826,
      alt: "Burger shop homepage: “Big. Bold. Flavor.” in heavy white and orange type on deep green, with cut-out photos of fries, burgers and fried chicken floating around it, a See the Menu button, and an orange Fast · Fresh · Unforgettable ticker across the bottom.",
    },
    mobile: {
      src: "/work/reel-01-mobile.webp",
      width: 378,
      height: 784,
      alt: "The same burger shop homepage on a phone, headline stacked to two lines and the Not sure what to eat and See the Menu buttons widened to fill the screen.",
    },
  },
  {
    slate: "SC. 02",
    title: "A technical catalogue for people who read spec sheets",
    body: "Hundreds of products, filtered by the numbers buyers actually shop on. Dark, dense, and fast — the specs do the selling, so the layout gets out of the way.",
    status: "Concept build",
    notes: ["Catalogue", "Spec filtering", "Wholesale path"],
    desktop: {
      src: "/work/reel-02-desktop.webp",
      width: 1424,
      height: 826,
      alt: "Dark LED grow light store: “Full Spectrum.” set over a magenta-lit plant photo, a spec line naming Bridgelux diodes and Mean Well drivers, Shop Lights and Request Wholesale Quote buttons, a 650W product card, and a row of shipping, checkout, delivery and warranty guarantees.",
    },
    mobile: {
      src: "/work/reel-02-mobile.webp",
      width: 378,
      height: 786,
      alt: "The grow light store on a phone, with the product card moved below the buttons and a sticky bar at the bottom showing a running CA$0 total beside a Shop Lights button.",
    },
  },
  {
    slate: "SC. 03",
    title: "A booking page built for someone standing in a queue",
    body: "Availability up front, booking in under a minute. High-energy palette, but every decision points at one button.",
    status: "Concept build",
    notes: ["Live availability", "Booking", "Two locations"],
    desktop: {
      src: "/work/reel-03-desktop.webp",
      width: 1424,
      height: 834,
      alt: "Esports lounge booking page in neon blue and purple on near-black: “See what’s free. Book your spot in seconds.” beside a Live Availability panel showing a floor map of stations and four booking options — Solo PC, Squad Row, PS5 Private Room and Party / Tournament.",
    },
    mobile: {
      src: "/work/reel-03-mobile.webp",
      width: 378,
      height: 782,
      alt: "The esports lounge page on a phone, branch switcher pinned at the top, stacked Book a Station and WhatsApp Us buttons, and a sticky booking bar with a WhatsApp button at the bottom.",
    },
  },
  {
    slate: "SC. 04",
    title: "A professional practice that had to earn trust fast",
    body: "Editorial type, a lot of white space, credentials visible without scrolling. Quiet on purpose — the whole page is an argument for competence.",
    status: "Concept build",
    notes: ["Credibility layout", "Discovery call", "Service pages"],
    desktop: {
      src: "/work/reel-04-desktop.webp",
      width: 1424,
      height: 816,
      alt: "Accounting practice site on warm off-white: “Ontario’s Virtual CPA for Small Business” in large underlined serif type, beside an At a Glance panel listing designation, registration, coverage, a free 15-minute discovery call and a five-star Google rating above a Book Now button.",
    },
    mobile: {
      src: "/work/reel-04-mobile.webp",
      width: 378,
      height: 768,
      alt: "The CPA site on a phone, headline broken across four lines with the At a Glance credentials panel pushed below the Free Discovery Call button.",
    },
  },
  {
    slate: "SC. 05",
    title: "A calm, high-touch service brand",
    body: "Soft palette, generous spacing, and an offer you understand in one screen. Everything is arranged around booking an appointment without feeling sold to.",
    status: "Concept build",
    notes: ["Brand direction", "Service menu", "Booking"],
    desktop: {
      src: "/work/reel-05-desktop.webp",
      width: 1424,
      height: 663,
      alt: "At-home skincare service site in soft cream and rose: “Your Sleeping Beauty Treatments, Delivered” in serif type with an italic accent, beside a What We Offer panel listing six treatments and two tiles reading 30–90 minutes per treatment and a free treatment every 15.",
    },
  },
];
