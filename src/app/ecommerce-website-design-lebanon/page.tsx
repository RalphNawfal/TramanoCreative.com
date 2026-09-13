import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "E-commerce Website Design in Lebanon",
  description:
    "Online shops for Lebanese retailers — dual-currency pricing, stock you can keep honest without an ERP, delivery zones, and straight advice on when to use Shopify instead.",
  alternates: { canonical: "/ecommerce-website-design-lebanon/" },
};

/**
 * The e-commerce page, as distinct from /web-design-lebanon/.
 *
 * Same anti-doorway rule. Justified only by what is true of shops selling goods
 * and not of Lebanese businesses generally.
 *
 * The four things it says that no other page on this site can:
 *  - Dual-currency pricing is a design problem, not a settings toggle. Which
 *    number is the real one, and what happens when the rate moves.
 *  - Stock accuracy without an ERP. Overselling is the failure that costs a
 *    customer permanently, and the answer is mostly design, not software.
 *  - Delivery zones and cost are the checkout question that abandons carts here,
 *    because the honest answer is often "it depends where you are".
 *  - When a hosted platform is the right answer and we will say so. This is the
 *    page arguing against its own sale, which is the site's whole voice.
 *
 * Deliberately NOT repeated: which processors a business can get approved for
 * (that is /web-design-lebanon/ and /web-design-beirut/), connectivity, page
 * weight, trilingual layouts. Links instead.
 *
 * No conversion-rate figures, no cart-abandonment percentages, no "shops
 * typically see" anywhere. The claims are structural or observational. A number
 * added later needs a source, per CONTENT-PLAN.md.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Retail"
      eyebrow="Web design"
      title="Online shops for Lebanese retailers."
      href="/ecommerce-website-design-lebanon/"
      breadcrumbName="E-commerce Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="retailers and e-commerce businesses"
      faqTitle="Selling online, specifically."
      lead="Selling online in Lebanon means answering three questions most platforms assume away: which currency the price is really in, whether the stock number is true, and what delivery costs to where the customer actually lives."
      facts={[
        "Pricing in two currencies is a design decision before it is a technical one: a shop has to establish which number is authoritative and what happens to a displayed price when the exchange rate moves.",
        "Overselling — taking payment for something out of stock — costs a customer permanently, and is caused more often by a stock number nobody updates than by a software failure.",
        "Custom e-commerce builds from Tramano Creative cost between $1,000 and $2,000, quoted as a fixed price in US dollars before work starts. Catalogues of substantial size are quoted individually.",
        "A hosted platform such as Shopify is sometimes the correct choice over a custom build, and Tramano Creative says so when it is rather than selling the more expensive option.",
        "Delivery cost in Lebanon varies by area in a way a flat shipping rate cannot express, and an unexpected delivery charge at the last step is a common reason a cart is abandoned.",
      ]}
      blocks={[
        {
          heading: "Two currencies, and only one of them can be the real one",
          paras: [
            "Every platform has a multi-currency setting, and none of them solve the actual problem. The setting assumes a stable conversion between a home currency and a display currency, updated occasionally, with the customer understanding that the second number is an approximation. That model does not describe a Lebanese shop.",
            "The decision that has to be made first is which price is authoritative — the one you will honour when someone pays. For most shops here that is the dollar price, with local currency shown as a convenience. That has to be stated on the page rather than left for the customer to work out, because the alternative is an argument at the point of payment about which number counted.",
            "Then: what happens when the rate moves. If local-currency prices are stored as fixed numbers, every one of them is wrong the day the rate shifts, and somebody has to edit a spreadsheet. If they are calculated from a rate held in one place, updating that single value corrects the whole catalogue. That is a build decision, and getting it wrong is the difference between a five-second update and an afternoon.",
            "The related trap is rounding. A converted price of 1,347,213 reads as a machine output and quietly undermines confidence in the shop. Prices customers see should look like prices somebody chose.",
          ],
        },
        {
          heading: "Stock you can keep honest without buying an ERP",
          paras: [
            "The worst thing an online shop can do is take money for something it does not have. It is worse than a slow site, worse than an ugly one, and worse than a missing feature, because the customer does not come back and they tell people.",
            "Most advice here points at inventory software that syncs the shop to the warehouse. If you have that, connect it. Most small Lebanese retailers do not, and will not, and building the site as though they do produces a stock number that was accurate on launch day and fiction within a fortnight — which is more dangerous than no number at all, because customers believe it.",
            "The honest alternative is mostly design. Show availability at the coarseness you can actually maintain: in stock, low, made to order, or ask us. Let staff mark something unavailable from a phone in ten seconds, because a system that takes ten minutes is a system nobody uses when the shop is busy. For anything genuinely scarce, confirm the order before taking payment rather than after. And where an item is one-of-a-kind, treat the enquiry as the conversion — a request to reserve beats a checkout that might sell the same piece twice.",
            "None of that is impressive on a feature list. All of it means the number on the page is true, which is the only property that matters.",
          ],
        },
        {
          heading: "Delivery: the question that loses the cart at the last step",
          paras: [
            "A customer who has chosen an item, entered their details and reached the final screen has done all the work. Presenting an unexpected delivery charge there is the most expensive possible moment to surprise them, and it is where a great many Lebanese checkouts lose the order.",
            "The difficulty is real rather than lazy. Delivery to a Beirut address, to Tripoli, to a village in the Bekaa and to somewhere reached by describing a landmark are four different costs and four different logistics, and a flat rate either overcharges most customers or loses money on the rest. Address entry itself resists the standard model — a form demanding a street number and a postcode is asking for data that frequently does not exist in a usable form.",
            "What works is telling the truth early. Delivery cost by area shown before checkout rather than at it, an address step that accepts how people actually describe where they live, a courier the customer recognises, and cash on delivery treated as a first-class option rather than a fallback — because for many buyers it remains the preferred way to pay, and burying it signals that you would rather they didn't.",
            "Whether you can take card payment at all is a separate question with a real answer, and it is covered on the Lebanon page rather than repeated here.",
          ],
        },
        {
          heading: "When you should use Shopify instead, and we will say so",
          paras: [
            "We sell custom builds, so treat this section with appropriate suspicion and then check it against anyone else you ask.",
            "A hosted platform is the better choice when your requirements are ordinary and your catalogue is large. If you sell a few hundred products with variants, need standard cart and discount behaviour, want an app for a courier integration and a staff member to manage it all without calling anybody, then you are describing what Shopify does well, and a custom build would cost more to reach the same place and leave you dependent on us for changes. We would rather say that than take the project.",
            "A custom build earns its cost when the selling logic is unusual, and this is where the honest line falls. Filtering on technical specifications buyers actually shop by, quoting rather than checkout, wholesale pricing alongside retail, dual-currency behaviour that a platform's settings cannot express, an ordering path that finishes on WhatsApp, or a level of page speed a theme loaded with apps will not reach. Those are the cases where a template fights you and every workaround adds weight.",
            "The other honest answer is that a shop may not be the priority at all. If most of your orders currently arrive by direct message and close in conversation, a fast catalogue with a good enquiry path can outperform a full checkout, cost less, and match how you already sell. We will tell you which of these three you are, with reasons, on the first call — and one of the possible answers is that you should not hire us.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Pricing that survives the rate moving",
          body: "One authoritative currency, stated plainly, with local-currency prices calculated from a single rate you can update in one place — and rounded to numbers that look like a person chose them.",
        },
        {
          title: "Stock you can actually keep true",
          body: "Availability shown at a coarseness you can maintain, markable from a phone in seconds, with confirm-before-payment on anything scarce. A true rough number beats a precise fictional one.",
        },
        {
          title: "Delivery costs shown before checkout",
          body: "Cost by area surfaced early rather than sprung at the last step, an address step that accepts how people here describe where they live, and cash on delivery treated as a real option.",
        },
      ]}
      faqs={[
        {
          q: "Should I use Shopify or a custom site?",
          a: "Shopify, if your requirements are ordinary and your catalogue is large — standard cart behaviour, hundreds of products, apps for couriers, staff managing it without a developer. A custom build earns its cost when the selling logic is unusual: spec filtering, quoting instead of checkout, wholesale alongside retail, WhatsApp ordering, or speed a theme full of apps won't reach. We sell the custom option and will still tell you when it is the wrong one.",
        },
        {
          q: "How do I price in dollars and Lebanese pounds?",
          a: "Decide which one you will honour when somebody pays, say so on the page, and calculate the other from a single stored rate rather than typing fixed numbers into every product. Then updating one value corrects the entire catalogue instead of an afternoon of edits. Round the converted figure so it looks like a price rather than a calculation.",
        },
        {
          q: "What happens to my prices when the exchange rate changes?",
          a: "If the build stores local prices as fixed numbers, all of them become wrong that day and someone edits them by hand. If it calculates from one rate held in one place, you change that number and the shop is correct again. This is decided when the site is built, so it is worth raising on the first call.",
        },
        {
          q: "Can I take card payments online in Lebanon?",
          a: "Sometimes, and it depends on your bank and commercial registration rather than your preference. A merchant account through a local processor or a local wallet are the realistic routes; Stripe does not operate here. This is covered properly on the Lebanon page, and it is worth settling before a checkout is designed rather than after.",
        },
        {
          q: "How do I stop selling things I don't have in stock?",
          a: "Show availability only as precisely as you can genuinely maintain — in stock, low, made to order — and make marking something unavailable a ten-second job from a phone. For scarce or one-off items, confirm before taking payment. A rough number that is true is far better than an exact number that stopped being true two weeks ago.",
        },
        {
          q: "Do I need inventory software?",
          a: "Only if you already have it or your volume genuinely demands it. Building the site as though you have an ERP when you don't produces a stock figure that is fiction within a fortnight, which is worse than showing no figure, because customers believe it.",
        },
        {
          q: "How should delivery charges work?",
          a: "Shown by area before checkout, not revealed at the final step. Delivery to Beirut, to Tripoli and to a village are genuinely different costs, and a flat rate either overcharges most people or loses money on the rest. Surprising someone on the last screen is the most expensive moment to do it.",
        },
        {
          q: "What about addresses — nobody here uses postcodes?",
          a: "So the form should not insist on one. An address step that accepts how people actually describe where they live, plus a phone number the courier will use anyway, works. Demanding a street number and postal code produces either abandoned carts or invented data.",
        },
        {
          q: "Should I offer cash on delivery?",
          a: "For most Lebanese shops, yes, and it should look like a real option rather than a grudging fallback. A significant share of buyers prefer it, and hiding it below a card form reads as a shop that would rather they paid another way.",
        },
        {
          q: "How much does an online shop cost?",
          a: "Between $1,000 and $2,000 for most custom builds, fixed price in US dollars after one short call. A large catalogue, wholesale pricing tiers or spec-level filtering pushes it above that and is quoted individually. If Shopify is the better answer we will say so, and that costs you a platform subscription instead.",
        },
        {
          q: "Can you build filtering for technical products?",
          a: "Yes, and it is one of the clearest cases for a custom build. Buyers of technical goods shop on the numbers — dimensions, output, compatibility, rating — and filtering on those is exactly what a general-purpose theme handles badly. The catalogue in our concept work was built around precisely this.",
        },
        {
          q: "Will my shop be fast with hundreds of products?",
          a: "That depends on decisions made early: image handling, how much runs in the browser, and whether filtering re-requests the page or happens instantly. A shop assembled from a theme plus a dozen apps is slow almost by construction. Page weight matters more here than in markets with better connectivity — there is a linked piece on that below.",
        },
      ]}
      related={[
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "The wider picture — including which payment processors a business can actually get approved for, and why that decides architecture.",
        },
        {
          href: "/blog/custom-website-vs-template/",
          label: "Custom or template?",
          blurb:
            "When a template is genuinely right, when it stops being right, and what breaks first — from a studio that sells the expensive option.",
        },
        {
          href: "/blog/google-ads-without-online-payments/",
          label: "Ads when the sale finishes offline",
          blurb:
            "How to run and measure Google Ads when the order closes on WhatsApp, on the phone or in person.",
        },
        {
          href: "/blog/image-optimization-for-websites/",
          label: "Image optimisation, done properly",
          blurb:
            "Which format when, how large an image should be, and why a 4000px photo in an 800px slot costs you — the main lever on a catalogue's speed.",
        },
      ]}
    />
  );
}
