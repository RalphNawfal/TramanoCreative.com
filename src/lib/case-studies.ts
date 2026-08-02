/**
 * Written-up builds.
 *
 * Same anonymity rules as src/lib/work.ts — no client name, no link off-site,
 * no screenshot carrying a wordmark or a phone number. A case study earns its
 * place by explaining a decision, not by naming a logo.
 *
 * On `metrics`: every number here is measured, not estimated, and the method
 * is published next to it. Nothing in this file may be a projection, a range
 * borrowed from an industry study, or a figure a client mentioned on a call.
 * If it can't be re-measured by a reader, it doesn't go in.
 */

export type CaseShot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type CaseMetric = {
  label: string;
  value: string;
  note: string;
};

export type CaseStudy = {
  slug: string;
  /** Slate marker, matching the reel entry this expands. */
  slate: string;
  /** Sector-neutral title, same one the reel uses. */
  title: string;
  status: "Live" | "Concept build";
  /** One-sentence framing, used as the page lead and the meta description base. */
  lead: string;
  /** SEO title, 50–60 characters once " — Tramano Creative" is appended. */
  seoTitle: string;
  metaDescription: string;
  /** Short, self-contained factual statements. Written to survive being quoted. */
  facts: string[];
  scope: string[];
  blocks: { heading: string; paras: string[] }[];
  shots: CaseShot[];
  metrics: CaseMetric[];
  /** How the numbers above were taken. Published so they can be checked. */
  metricsMethod: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "burger-shop",
    slate: "SC. 01",
    title: "A burger shop that had to look hungry",
    status: "Live",
    lead: "A halal smashed-burger shop in Beirut that needed to take orders from a phone, at midnight, without a card processor.",
    seoTitle: "Case Study — WhatsApp Ordering in Beirut",
    metaDescription:
      "How we built a bilingual menu and a WhatsApp checkout for a Beirut burger shop — no card processor, no app, and an order sent in under a minute.",
    facts: [
      "The site takes orders through WhatsApp rather than a card processor, because card payment approval is slow and often unavailable for small food businesses in Lebanon.",
      "Every menu item is written in both English and Arabic, in the same card, rather than behind a language switch.",
      "The menu runs to eight categories and is built as a cart: items are added in place and the order is composed before the customer ever opens WhatsApp.",
      "The build is mobile-first because the shop trades late — most orders arrive on a phone, one-handed, after dark.",
    ],
    scope: [
      "Custom design and build",
      "Bilingual menu system",
      "Cart and WhatsApp checkout",
      "Mobile-first layout",
    ],
    blocks: [
      {
        heading: "The problem wasn't the website",
        paras: [
          "A burger shop makes its money in a narrow window, late, from people who are already hungry and already on their phone. The decision takes seconds. Anything between wanting the food and ordering the food is a place to lose the sale.",
          "The obvious answer is an online store with a checkout. In Lebanon that is often the wrong answer. Getting a small food business approved for card payments is slow, and for a shop this size it frequently doesn't happen at all. Building a checkout that can't take money is worse than building no checkout.",
        ],
      },
      {
        heading: "So the cart ends in WhatsApp",
        paras: [
          "The site has a real cart. Items are added from the menu, quantities adjust in place, and the total updates as you go. What it doesn't have is a payment step. At the end the order, the customer's name and phone, the order type and any notes are composed into a single message and handed to WhatsApp.",
          "This is not a downgrade from a checkout. It's the flow the shop already ran by hand, with the slow part removed. Nobody types out an order any more, nothing gets misheard, and the shop receives a structured message in the app it was already watching. Ordering works the same at midnight as at midday, and it works for a customer who has never installed anything.",
        ],
      },
      {
        heading: "Both languages, in the same card",
        paras: [
          "Menu items carry an English name and description with the Arabic directly underneath, in the same card, on the same screen. There is no language toggle to find and no second version of the site to maintain.",
          "This is how people in Beirut actually read a menu. Splitting it in two would have meant a customer scanning for something they recognise having to first make a decision they don't care about.",
        ],
      },
      {
        heading: "Built for the phone it's opened on",
        paras: [
          "The layout was designed at phone width first and widened from there, not the reverse. Categories are a sticky row you thumb along. The add control is a single tap, large enough to hit without looking. The cart is a full-height drawer rather than a page you navigate to, so the menu is never lost behind it.",
          "Everything on the page is arranged around one action, which is placing an order. That's the same principle behind every site here — it just happens to be unusually easy to see on a menu.",
        ],
      },
    ],
    shots: [
      {
        src: "/work/burger-shop/menu-desktop.webp",
        width: 1422,
        height: 548,
        alt: "Menu grid with item cards showing English and Arabic descriptions, prices and a single add button, under a sticky row of category filters",
        caption:
          "Eight categories, sticky at the top. Each card carries both languages and a one-tap add.",
      },
      {
        src: "/work/burger-shop/cart-mobile.webp",
        width: 356,
        height: 830,
        alt: "Mobile order drawer listing two items with quantity controls, a running total, fields for name and phone, an order-type choice, and a send-order-on-WhatsApp button",
        caption:
          "The checkout that isn't one. Name, number, order type, notes — then the whole order goes to WhatsApp as one message.",
      },
    ],
    metrics: [
      {
        label: "Time to first paint",
        value: "0.67s",
        note: "Something on screen before most sites have answered.",
      },
      {
        label: "Server response",
        value: "186ms",
        note: "Time to first byte.",
      },
      {
        label: "Layout shift",
        value: "0.008",
        note: "Google's threshold is 0.1. Nothing moves while it loads.",
      },
      {
        label: "Requests to render",
        value: "14",
        note: "No plugin layer, no tag manager, no third-party scripts.",
      },
    ],
    metricsMethod:
      "Measured 2 August 2026 on the live site from a desktop connection, using the browser's own Navigation Timing and Layout Instability APIs. These are the figures we can stand behind and you can re-take yourself. We don't publish conversion or revenue numbers for client work — we'd have to take someone's word for them, and a figure we can't verify isn't proof of anything.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
