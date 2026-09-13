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
  status: "Live" | "Concept build" | "In build";
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
        label: "Kickoff to launch",
        value: "3 weeks",
        note: "Live on 26 July 2026, on the date agreed at kickoff.",
      },
      {
        label: "Time to first paint",
        value: "0.67s",
        note: "Something on screen before most sites have answered.",
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
      "Performance measured 2 August 2026 on the live site from a desktop connection, using the browser's own Navigation Timing and Layout Instability APIs — figures you can re-take yourself. We don't publish conversion or revenue numbers for client work. We'd have to take someone's word for them, and a number we can't verify isn't proof of anything.",
  },
  {
    // Under NDA. Sector only — no name, no location, no credential or
    // certification name, nothing a reader could search back to the client.
    slug: "commercial-contractor",
    slate: "SC. 05",
    title: "A contractor that had to win the bid before the first call",
    status: "Live",
    lead: "A commercial building-envelope contractor whose work arrives as tender packages, and who needed a site that turns an estimator's scope into an enquiry.",
    seoTitle: "Case Study — Contractor Bid-Request Site",
    metaDescription:
      "How we built a contractor website around one job: getting a general contractor's scope into a quote request — credentials first, form in the first screen.",
    facts: [
      "The homepage puts the quote-request form in the first screen, beside the headline, rather than on a separate contact page.",
      "The form's enquiry field sorts requests by type — including manpower only and requests for references — so the reply can be prepared before anyone calls back.",
      "Spam is filtered with a hidden honeypot field rather than a captcha, so a real enquiry never has to solve a puzzle.",
      "On phones, a sticky bar keeps Request a Quote and Call Now on screen for the whole page.",
    ],
    scope: [
      "Custom design and build",
      "Quote-request form",
      "Credentials and standards content",
      "Mobile call bar",
    ],
    blocks: [
      {
        heading: "The visitor is an estimator, not a homeowner",
        paras: [
          "Commercial installation work doesn't arrive through browsing. It arrives as a tender package on a general contractor's desk, and the person reading the site is comparing subcontractors against a scope and a schedule. They want three answers quickly: do you install this system, can your crews hold the programme, and how do I get a price.",
          "A site built for a homeowner — a big photo, a slogan, a contact page three clicks away — answers none of them. So the first screen was designed as the answer to all three.",
        ],
      },
      {
        heading: "The form asks for a quote, not a conversation",
        paras: [
          "The form sits in the hero, beside the headline. It asks for name, company, email and phone, then what the enquiry is — the panel systems the contractor installs, manpower only, or a request for references — and a single box for scope and schedule, prompted with the four things an estimate actually needs: system, location, approximate area and target dates.",
          "The reply time is promised directly under the heading, so nobody sends a scope wondering if it will be read. When the form sends, the confirmation replaces it in the same space rather than moving the page. Spam is caught by a hidden field that people never see and scripts always fill, instead of a captcha — the one visitor who matters shouldn't be asked to prove they're human.",
        ],
      },
      {
        heading: "Credentials before claims",
        paras: [
          "Next to the headline sits a short checklist of the things a general contractor checks before shortlisting anyone. Further down, the installation standard gets its own section, with the documentation it produces and an offer of a sample report — evidence a buyer can hold, rather than an adjective.",
          "Safety gets its own section too. On commercial sites a subcontractor's safety programme is part of how they are vetted, so it is laid out as a numbered process rather than a line in the footer.",
        ],
      },
      {
        heading: "Built for the site office and the site itself",
        paras: [
          "Estimators read at a desk; site supervisors read on a phone, outdoors, between other things. On mobile the layout collapses to a single column, and a two-button bar — request a quote, call now — stays pinned to the bottom of the screen the entire way down.",
          "The same page also recruits. A careers section speaks to installers directly, because for a contractor that sells crews, hiring is part of being able to say yes to the next job.",
        ],
      },
    ],
    shots: [
      {
        src: "/work/commercial-contractor/services-desktop.webp",
        width: 1425,
        height: 627,
        alt: "Services grid under the heading What we install: six bordered cards for cladding and architectural panel, insulated metal panels, corrugated metal siding, building envelope support, substructure and detail work, and union manpower support, each with a short description.",
        caption:
          "Six systems, each described the way an estimator would check it against a specification.",
      },
      {
        src: "/work/commercial-contractor/form-mobile.webp",
        width: 367,
        height: 763,
        alt: "Mobile quote-request form titled Send your scope, promising a reply within one business day, with fields for name, company, email and phone, an enquiry dropdown set to Cladding, a scope and schedule box, and a blue Send Request button.",
        caption:
          "The whole enquiry on one phone screen: who you are, which system, and when.",
      },
    ],
    metrics: [
      {
        label: "Layout shift",
        value: "0",
        note: "Google's threshold is 0.1. Nothing moves while it loads, form included.",
      },
      {
        label: "Requests to render",
        value: "8",
        note: "The whole homepage, images included, in eight requests.",
      },
      {
        label: "Third-party hosts",
        value: "0",
        note: "Every file comes from the site's own domain. No tag manager, no chat widget, no font service.",
      },
    ],
    metricsMethod:
      "Measured 12 September 2026 on the live site from a desktop browser, using the browser's own Navigation Timing, Resource Timing and Layout Instability APIs — figures you can re-take yourself. Load times aren't listed: they were taken from another continent to a server near the client, and a number that mostly measures the distance between the two isn't a fair one. We don't publish conversion or revenue numbers for client work; a number we can't verify isn't proof of anything.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
