export const site = {
  name: "Tramano Creative",
  domain: "tramanocreative.com",
  url: "https://tramanocreative.com",
  tagline: "We build the websites people remember.",
  /**
   * The long-form description. Used for schema.org and /llms.txt, where
   * length is an asset — neither one truncates.
   */
  description:
    "Tramano Creative builds websites, Google Ads, and search presence that hold each other up — custom design, sub-second loads, and honest advice. If you found us at the bottom of a site you liked, that's our work.",

  /**
   * The `<meta name="description">` variant, held to 150–160 characters.
   * Google cuts the snippet around 155, and the long description above runs to
   * 211 — it was being truncated mid-sentence on the homepage and on every
   * page that fell through to the layout default.
   */
  metaDescription:
    "A two-person studio in Beirut building custom websites, Google Ads and search presence for businesses in Lebanon, the UAE and further afield. No templates.",
  email: "info@tramanocreative.com",
  phone: "+961 71 042 427",
  phoneHref: "+96171042427",
  founders: ["Ralph Nawfal", "Ramy Al Housary"],
  foundingDate: "2026",
  foundingLocation: { locality: "Beirut", country: "LB" },

  /**
   * Stated as a real range rather than schema.org's `$$` convention.
   *
   * `$$` is a relative signal — it only means "mid-priced compared to peers",
   * and an answer engine asked "how much does Tramano charge" can do nothing
   * with it. The published numbers are already in plain text on /faq/,
   * /services/ and /llms.txt, so a vague schema value was the one place the
   * site contradicted itself. Keep this in sync with those three.
   */
  priceRange: "$500–$3,000+",
  formspreeEndpoint: "https://formspree.io/f/xkolykzp",

  /**
   * Measurement and search-engine tokens.
   *
   * Every value here is public by design — verification meta tags and the
   * Cloudflare beacon token are readable in the page source of any site that
   * uses them, so they belong in the repo rather than in CI secrets. Nothing
   * here grants access to an account.
   *
   * Each one is empty until claimed. Empty means the feature is genuinely
   * off: no beacon script is rendered, no meta tag is emitted, and the
   * privacy policy's analytics section stays absent. That coupling is
   * deliberate — the policy can never describe tracking the site isn't doing.
   */
  analytics: {
    /**
     * Cloudflare Web Analytics. Cookieless and consent-free by design: no
     * cookies, no local storage, no cross-site identifier, nothing that would
     * need a banner under GDPR or ePrivacy. Chosen over GA4 to keep the
     * promise already made in the privacy policy.
     *
     * Get the token: dash.cloudflare.com → Analytics & Logs → Web Analytics →
     * Add a site → tramanocreative.com. Copy the value of `token` out of the
     * JS snippet it shows you. The domain does not need to be on Cloudflare.
     */
    cloudflareToken: "" as string,

    /**
     * GA4 measurement ID (`G-XXXXXXXXXX`). Unlike the Cloudflare beacon this
     * one sets cookies, so it is consent-gated: the script is not requested
     * at all until a visitor accepts. Setting this ID is what makes the
     * consent banner and the cookie sections of the privacy policy appear.
     *
     * Get it: analytics.google.com → Admin → Data streams → Web → your
     * stream → Measurement ID. Link the property to Google Ads under Admin →
     * Product links if you want `generate_lead` importable as a conversion.
     */
    ga4MeasurementId: "G-T8WWNZEN8P" as string,
  },

  /**
   * Search engine ownership verification. Both are HTML meta tag methods,
   * which survive a static export cleanly; DNS TXT verification would work
   * too but lives at the registrar where it's easy to lose track of.
   */
  verification: {
    /**
     * search.google.com/search-console → Add property → URL prefix → HTML tag.
     *
     * URL-prefix property for https://tramanocreative.com/. Do not switch this
     * to the "Google Analytics" verification method: it requires the GA tag to
     * be present when Google's verifier loads the page, and GA4 here is
     * consent-gated, so the tag does not exist until a visitor clicks Accept.
     * Google's verifier never does.
     */
    google: "Wh6tZbXziJpMG2VmINAljn4MEmt_1vZ8Yc0W2dxr8DY" as string,
    /**
     * bing.com/webmasters → Add site → Meta tag (`msvalidate.01`).
     *
     * Worth more than Bing's own traffic share suggests: Copilot and ChatGPT
     * search both read Bing's index, and so does the IndexNow ping below.
     */
    bing: "4487129FA64D1ADDEA88D619DA6EF91A" as string,
  },

  /**
   * IndexNow key. Pinging this API tells Bing — and therefore Copilot and
   * ChatGPT search, which both lean on Bing's index — that a URL changed,
   * instead of waiting for a crawl. Google does not participate.
   *
   * The key is proven by hosting it at /<key>.txt, so this value and the
   * filename in public/ must always match. Run `npm run indexnow` after a
   * deploy to submit; see scripts/ping-indexnow.mjs.
   */
  indexNowKey: "e40e830d6a210465d9b0b8f0dab8dd2e",

  /**
   * Country-level only, by decision — no street address and no city-pinned
   * identity, so the business stays open to work anywhere. The trade-off is
   * that Google won't show local map-pack results without a postal address.
   */
  areaServed: ["Lebanon", "United Arab Emirates", "Worldwide"],
  languages: ["English", "Arabic", "French"],

  /**
   * Topics the studio is claiming competence in, for `knowsAbout`.
   *
   * This is entity-level context rather than a keyword list: it tells a search
   * engine or an answer engine what subjects to consider this business a
   * candidate for. Every entry has to be backed by a page that actually
   * discusses it — a claim here with nothing behind it is just noise.
   */
  knowsAbout: [
    "Web design",
    "Web development",
    "Next.js",
    "React",
    "Core Web Vitals",
    "Website performance optimization",
    "Google Ads",
    "Pay-per-click advertising",
    "Technical SEO",
    "Structured data",
    "Answer engine optimization",
    "Arabic and right-to-left web design",
    "E-commerce in Lebanon",
  ],

  /**
   * Social/profile URLs.
   *
   * Empty because the studio has no social accounts, not because this is
   * waiting to be filled in. The layout only emits `sameAs` when this has
   * entries, so nothing ships an empty array — an empty `sameAs` is worse
   * than none, since it asserts that no other profiles exist.
   *
   * Worth knowing what the gap costs: `sameAs` is the strongest
   * entity-disambiguation signal available to a small business. It's how
   * Google concludes that the site, the profiles and the listings are all one
   * company rather than several similarly-named ones. With none of them, the
   * only thing tying this entity together is the site itself. Add any profile
   * the moment it exists.
   */
  sameAs: [] as string[],

  nav: [
    { label: "Services", href: "/services/" },
    { label: "Work", href: "/work/" },
    { label: "About", href: "/about/" },
    { label: "Blog", href: "/blog/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" },
  ],

  /**
   * Market pages — linked from the footer, the services hub and the sitemap.
   *
   * Order is deliberate: Beirut sits under Lebanon because it is the narrower
   * page, and a visitor scanning this list should meet the broader one first.
   */
  markets: [
    { label: "Web design in Lebanon", href: "/web-design-lebanon/" },
    { label: "Web design in Beirut", href: "/web-design-beirut/" },
    { label: "Google Ads in Lebanon", href: "/google-ads-lebanon/" },
    { label: "SEO in Lebanon", href: "/seo-lebanon/" },
    { label: "Web design in the UAE", href: "/web-design-uae/" },
  ],

  legal: [
    { label: "Privacy", href: "/privacy/" },
    { label: "Cookies", href: "/privacy/#cookies" },
    { label: "Terms", href: "/terms/" },
  ],
} as const;
