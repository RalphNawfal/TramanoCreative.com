import MarketPage, { type MarketPageProps } from "./MarketPage";

/**
 * A sector page — "web design for restaurants in Lebanon" — as opposed to a
 * market page, which segments by geography.
 *
 * This is a wrapper, not a second shell. It renders nothing of its own; every
 * pixel comes from MarketPage. Faq.tsx records why that matters: the FAQ markup
 * once existed in two places, drifted apart, and shipped market-page questions
 * as bare text with no anchor ids — eight questions per page invisible to
 * snippet extraction. Cloning ~230 lines of chrome would set that failure up to
 * happen again across nine pages instead of two.
 *
 * What it earns by existing at all is one thing: `faqTitle` becomes required.
 * On MarketPage it has to be optional, or all five existing pages break. But an
 * optional override that an industry page forgets doesn't throw — it silently
 * heads a list of restaurant questions "Lebanon, specifically." Making the
 * obligation part of the type is the difference between a mistake that can't
 * compile and a mistake nobody notices for a month.
 *
 * The same anti-doorway rule applies here as on the market pages, and it is the
 * binding constraint on this whole page family: an industry page has to say
 * things that are not true of /web-design-lebanon/, or it does not get built.
 * Restaurants have menus that change and delivery radiuses; clinics have
 * credentials to establish and details that must never touch a web form;
 * retail has payment processors that may or may not exist in the country. Those
 * are real differences. "We build great sites for restaurants" is not one.
 */
export type IndustryPageProps = Omit<
  MarketPageProps,
  "audience" | "faqTitle" | "schemaName" | "parentCrumb"
> & {
  /**
   * The sector, phrased to read inside a sentence: "restaurants and cafés".
   * Becomes schema.org `audience.audienceType`.
   */
  industry: string;

  /**
   * FAQ section title — "Restaurants, specifically." Required here, unlike on
   * MarketPage, for the reason in the comment above.
   */
  faqTitle: string;

  /** The market page this sits beneath. Defaults to web design in Lebanon. */
  parent?: { href: string; name: string };
};

export default function IndustryPage({
  industry,
  parent,
  ...rest
}: IndustryPageProps) {
  return (
    <MarketPage
      {...rest}
      audience={industry}
      // "Web design and development for restaurants and cafés in Lebanon" —
      // the sector and the country both belong in the Service name, and the
      // geographic default ("… — Lebanon") states only half of it.
      schemaName={`${rest.serviceName} for ${industry} in ${rest.areaServed}`}
      parentCrumb={
        parent ?? { href: "/web-design-lebanon/", name: "Web Design in Lebanon" }
      }
    />
  );
}
