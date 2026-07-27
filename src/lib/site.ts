export const site = {
  name: "Tramano Creative",
  domain: "tramanocreative.com",
  url: "https://tramanocreative.com",
  tagline: "We build the websites people remember.",
  description:
    "Tramano Creative builds websites, Google Ads, and search presence that hold each other up — custom design, sub-second loads, and honest advice. If you found us at the bottom of a site you liked, that's our work.",
  email: "info@tramanocreative.com",
  phone: "+961 71 042 427",
  phoneHref: "+96171042427",
  founders: ["Ralph Nawfal", "Ramy Al Housary"],
  foundingDate: "2026",
  priceRange: "$$",
  formspreeEndpoint: "https://formspree.io/f/xkolykzp",

  /**
   * Country-level only, by decision — no street address and no city-pinned
   * identity, so the business stays open to work anywhere. The trade-off is
   * that Google won't show local map-pack results without a postal address.
   */
  areaServed: ["Lebanon", "United Arab Emirates", "Worldwide"],
  languages: ["English", "Arabic", "French"],

  /**
   * Social/profile URLs. `sameAs` is the strongest entity-disambiguation
   * signal available to a small business — Google uses it to decide that the
   * site, the Google Business Profile and the social accounts are all the
   * same company. Add every profile that exists, including the GBP listing
   * once it's created.
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

  /** Market pages — linked from the footer and the services hub. */
  markets: [
    { label: "Web design in Lebanon", href: "/web-design-lebanon/" },
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
