/**
 * Search campaign results, shown instead of testimonials.
 *
 * A quote on a website proves nothing: anyone can write one, and readers know
 * it. A campaign's own numbers are harder to argue with, so that is what goes
 * here.
 *
 * Rules for this file:
 *  - These are campaigns Ralph built and managed for businesses in Canada. Say
 *    so wherever they appear. They are not Tramano client accounts, and no copy
 *    may present them as such.
 *  - Every figure is copied from the campaign's dashboard, exactly. Nothing is
 *    rounded up, projected or averaged across campaigns.
 *  - No client names, no city, nothing a reader could search back to the
 *    business. The sector is as specific as it gets.
 *  - No impressions. The Google Ads page promises reporting without "impression
 *    counts that mean nothing", and a results block full of them would break
 *    that promise on the same page.
 *  - Dashboard screenshots stay out of the repo: they carry the platform's
 *    branding. The numbers are re-set in the site's own type instead.
 */

export type CampaignMonth = {
  /** Billing month as the dashboard labelled it, e.g. "13 Aug – 13 Sep 2025" */
  period: string;
  /** Short label for the progression, e.g. "Month 1" */
  label: string;
  clicks: number;
  conversions: number;
  /** As a percentage string, copied from the dashboard */
  conversionRate: string;
  /** Present only where the dashboard showed it */
  costPerConversion?: string;
  note: string;
};

export type Campaign = {
  sector: string;
  /** How long the totals below cover, in words */
  span: string;
  clicks: number;
  conversions: number;
  conversionRate: string;
  calls?: number;
  costPerConversion?: string;
  /** One or two sentences on what the numbers show. No adjectives doing the work. */
  summary: string;
  /** Month-by-month progression, where the monthly dashboards exist */
  months?: CampaignMonth[];
};

/** Where the numbers came from. Shown under the results, every time. */
export const campaignMethod =
  "Figures copied from each campaign's own dashboard: clicks across Google and Bing search, conversions as each campaign's tracking defined them, and phone calls where call tracking was on. Cost per conversion is listed only where the dashboard reported it. Client names are left off; the sectors are real.";

/**
 * The lead story: a campaign that converted nothing in its first month.
 * First in the array, and rendered larger than the rest.
 */
export const campaigns: Campaign[] = [
  {
    sector: "Service business",
    span: "First five months",
    clicks: 3234,
    conversions: 979,
    conversionRate: "30.27%",
    calls: 20,
    costPerConversion: "$1.79",
    summary:
      "The first month produced 179 clicks and no conversions at all, with 98% of the clicks coming from Bing. By month three, 93% came from Google search and 93 of them converted. By month five, 256 did, at $1.17 each.",
    months: [
      {
        period: "13 Aug – 13 Sep 2025",
        label: "Month 1",
        clicks: 179,
        conversions: 0,
        conversionRate: "0.00%",
        note: "98% of clicks from Bing. Nothing converted.",
      },
      {
        period: "13 Oct – 13 Nov 2025",
        label: "Month 3",
        clicks: 398,
        conversions: 93,
        conversionRate: "23.37%",
        costPerConversion: "$3.23",
        note: "93% of clicks now from Google search.",
      },
      {
        period: "13 Dec 2025 – 13 Jan 2026",
        label: "Month 5",
        clicks: 572,
        conversions: 256,
        conversionRate: "44.76%",
        costPerConversion: "$1.17",
        note: "Nearly three times the conversions of month three, on 44% more clicks.",
      },
    ],
  },
  {
    sector: "Online store",
    span: "Lifetime of the campaign",
    clicks: 8524,
    conversions: 3072,
    conversionRate: "36.04%",
    calls: 48,
    summary:
      "More than one in three clicks became a conversion, and 92% of the clicks came from Google search.",
  },
  {
    sector: "B2B consulting firm",
    span: "Lifetime of the campaign",
    clicks: 4134,
    conversions: 1297,
    conversionRate: "31.37%",
    calls: 21,
    summary:
      "A business-to-business service, where each enquiry is worth far more than a click. Nearly a third of the clicks converted.",
  },
  {
    sector: "Local business",
    span: "Eleven months",
    clicks: 579,
    conversions: 75,
    conversionRate: "12.95%",
    calls: 29,
    summary:
      "A small budget, kept running for eleven months. 75 conversions and 29 phone calls from 579 clicks.",
  },
  {
    sector: "Commercial real estate",
    span: "Lifetime of the campaign",
    clicks: 1112,
    conversions: 57,
    conversionRate: "5.13%",
    calls: 66,
    summary:
      "A slower, higher-value market. More enquiries arrived as phone calls (66) than as tracked conversions (57).",
  },
];
