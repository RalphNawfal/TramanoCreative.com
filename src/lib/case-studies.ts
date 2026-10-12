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
 *
 * Performance figures can be re-taken by any reader. Traffic and order figures
 * can't, so they are allowed only from analytics we installed ourselves, read
 * by us, with the event that counts them named in `metricsMethod`. A number a
 * client reports to us still doesn't go in.
 */

/** One period on a build's climb from launch. Figures from the site's own analytics. */
export type CaseGrowthStep = {
  label: string;
  period: string;
  visits: number;
  orders: number;
  /** Order value in whole dollars */
  value: number;
  note: string;
};

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
  /**
   * Launch-to-now progression, shown above the metrics. Only for live builds
   * whose analytics we run.
   */
  growth?: { title: string; steps: CaseGrowthStep[]; summary: string };
  /** How the numbers above were taken. Published so they can be checked. */
  metricsMethod: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "burger-shop",
    slate: "SC. 01",
    title: "A burger shop that had to look hungry",
    status: "Live",
    lead: "A halal smashed-burger shop in Beirut with no website at all. Eleven weeks after launch, the site had taken 61 orders worth $1,129 — without a card processor.",
    seoTitle: "Case Study — Burger Shop, Zero to 61 Orders",
    metaDescription:
      "A Beirut burger shop went from no website to 61 orders and $1,129 in eleven weeks, through a bilingual menu and a WhatsApp checkout. No card processor.",
    facts: [
      "The site takes orders through WhatsApp rather than a card processor, because card payment approval is slow and often unavailable for small food businesses in Lebanon.",
      "Every menu item is written in both English and Arabic, in the same card, rather than behind a language switch.",
      "The menu runs to eight categories and is built as a cart: items are added in place and the order is composed before the customer ever opens WhatsApp.",
      "The build is mobile-first because the shop trades late — most orders arrive on a phone, one-handed, after dark.",
      "In its first eleven weeks the site had 3,310 visits and sent 61 orders to the shop on WhatsApp, worth $1,129 at menu prices.",
      "When the shop pushed on Instagram in October, the site took 25 orders in 16 days — more than either of its first two full months.",
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
      {
        heading: "From nothing to a place to land",
        paras: [
          "Before launch the shop had no website. Search its name and you found an Instagram profile; want to order and you typed it out by hand in a DM or a WhatsApp chat. Nothing was measured, because there was nothing to measure.",
          "The first month brought 839 visits and 22 orders. The second was quieter: 803 visits, 14 orders. That dip is the honest part of the story. A website on its own doesn't create demand — nobody stumbles onto a burger menu.",
          "Then in October the shop started pushing on Instagram, and the site did the job it was built for. In 16 days it had 1,668 visits, 1,219 of them from Instagram, and 93% of those visits were engaged ones — people who stayed and browsed rather than bouncing. 25 orders came through, worth $569 — more than either full month before it. The posts created the hunger. The site was where it turned into an order.",
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
    growth: {
      title: "Zero to 61 orders.",
      steps: [
        {
          label: "Before",
          period: "Until 26 Jul 2026",
          visits: 0,
          orders: 0,
          value: 0,
          note: "No website. Orders typed out by hand in DMs.",
        },
        {
          label: "Month 1",
          period: "26 Jul – 25 Aug",
          visits: 839,
          orders: 22,
          value: 348,
          note: "Launch month. Mostly people who already knew the shop.",
        },
        {
          label: "Month 2",
          period: "26 Aug – 25 Sep",
          visits: 803,
          orders: 14,
          value: 212,
          note: "Roughly the same traffic, fewer orders.",
        },
        {
          label: "16 days",
          period: "26 Sep – 11 Oct",
          visits: 1668,
          orders: 25,
          value: 569,
          note: "Instagram push. Half a month, more orders than either full one.",
        },
      ],
      summary:
        "Eleven weeks, 3,310 visits, 61 orders, $1,129 at menu prices. No card processor, no app, no delivery platform taking a cut.",
    },
    metrics: [
      {
        label: "Orders through the site",
        value: "61",
        note: "Each one a complete order, sent to the shop on WhatsApp, in eleven weeks.",
      },
      {
        label: "Order value",
        value: "$1,129",
        note: "At menu prices. No platform commission taken off the top.",
      },
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
        note: "No plugin layer, no tag manager — only the analytics that counted the orders above.",
      },
    ],
    metricsMethod:
      "Visits, orders and order value come from the site's Google Analytics, which we installed at launch, read on 12 October 2026 for 26 July to 11 October. An order is counted when a customer sends the finished cart to the shop on WhatsApp, at the cart's menu value. That is an order sent, not a payment received, and it may include a few of our own test orders from launch week. Performance was measured 2 August 2026 on the live site using the browser's own Navigation Timing and Layout Instability APIs — figures you can re-take yourself.",
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
