import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Hotel & Guesthouse Website Design in Lebanon",
  description:
    "Websites for Lebanese hotels and guesthouses — direct bookings that skip the platform commission, deposits without a card processor, and a season that starts abroad.",
  alternates: { canonical: "/hotel-guesthouse-website-design-lebanon/" },
};

/**
 * Hotels and guesthouses, as distinct from /web-design-lebanon/.
 *
 * Same anti-doorway rule as every page routed through MarketPage. What is true
 * here and not of Lebanese businesses generally:
 *  - The competitor is the booking platform, not another hotel. The site's job
 *    is to win back the guest who already found you there.
 *  - A booking needs a deposit, and most small properties here can't take cards
 *    online. That shapes the whole booking flow.
 *  - The season is decided abroad. Summer and holiday demand is largely the
 *    diaspora and foreign visitors planning from another country, in English or
 *    French, weeks ahead.
 *  - Mountain and village properties are found by directions as much as by name,
 *    and a wrong map pin loses a guest who is already on the road.
 *
 * No commission percentages are stated: they vary by platform and contract, and
 * a number we can't source doesn't go on the page.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Hospitality"
      eyebrow="Web design"
      title="Websites for hotels and guesthouses."
      href="/hotel-guesthouse-website-design-lebanon/"
      breadcrumbName="Hotel & Guesthouse Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="hotels and guesthouses"
      faqTitle="Hospitality, specifically."
      lead="Most of your guests find you on a booking platform first. The website's job is to be the place they book the second time — and the place a returning visitor from abroad checks before they call."
      facts={[
        "Booking platforms charge a hotel a commission on every reservation they deliver. A booking made directly on the hotel's own website or by message carries no commission.",
        "Many small hotels and guesthouses in Lebanon cannot take card payments online, so a direct booking usually ends in a request, confirmed by message, with a deposit paid by bank or local money transfer.",
        "A large share of summer and holiday demand in Lebanon comes from the diaspora and foreign visitors planning from abroad, who search in English or French weeks before they arrive.",
        "For mountain and village properties, an accurate map pin and written directions are part of the booking: a guest who cannot find the property at night is a lost guest and a bad review.",
        "Custom hotel and guesthouse websites from Tramano Creative cost between $1,000 and $2,000, quoted as a fixed price in US dollars before work starts.",
      ]}
      blocks={[
        {
          heading: "Your competitor is the booking platform, not the hotel next door",
          paras: [
            "For a small hotel or guesthouse, the booking platforms are both the best source of new guests and the most expensive one. They bring people who would never have found you, and they take a commission on every reservation, including the ones from guests who already knew your name and only used the platform because it was easier than finding your number.",
            "A website will not replace the platforms, and it should not try to. What it can do is make the direct route easier than the platform for everyone who already has a reason to come to you: returning guests, people who were recommended by a friend, people who saw your property on Instagram, and people who found you on a platform and then searched your name to learn more. That last group is larger than most owners expect, and right now most of them land on a platform listing again.",
            "So the site is built around one question: can someone who searches your name book you directly in under a minute? That means your own name ranking above the platform listings, rooms and prices visible without hunting, and a booking route that ends in a conversation with you rather than a form that disappears into an inbox.",
          ],
        },
        {
          heading: "A booking without a card processor",
          paras: [
            "The standard hotel website assumes an online payment gateway: pick dates, pay, done. For many Lebanese properties that gateway is slow to get, expensive, or not available at all, and building a booking engine that cannot take money produces a worse experience than not having one.",
            "The flow that works here is the one most guesthouses already run by hand, with the friction removed. The guest picks dates, room and number of people on the site; the site composes that into a single, complete request and sends it to you on WhatsApp. You confirm availability, and the deposit is settled by bank transfer or a local money transfer service. Nobody has to type out what they want, nothing is misheard, and the request arrives in the app you already watch.",
            "Where an availability calendar is worth showing, it is shown — but only if someone will keep it accurate. A calendar that says a room is free when it is not is worse than no calendar, because the guest finds out after they have planned around it. For many small properties the honest design is \"request these dates, we confirm within the hour\", and saying that plainly sets the right expectation.",
          ],
        },
        {
          heading: "The season is booked from abroad",
          paras: [
            "A large share of summer and holiday demand comes from people who are not in Lebanon when they book: the diaspora coming home, and foreign visitors planning a trip. They search weeks ahead, from another country, in English or French, on their phones, often comparing several places in one evening.",
            "That changes the site in specific ways. The languages have to be complete, not a translated homepage over Arabic-only room pages. Prices should be in US dollars, which is how stays here are actually quoted. The page has to answer the questions a visitor from abroad asks that a local guest never would: how far from the airport, whether there is a generator and how many hours of electricity, whether the road is passable in winter, whether there is parking, whether breakfast is included.",
            "Those answers belong on the page as text, not in a PDF or an image. A guest asking an AI assistant for \"a guesthouse in the mountains with 24-hour electricity\" can only be pointed at a property whose site says so in words a machine can read.",
          ],
        },
        {
          heading: "Getting found on the road, not just on Google",
          paras: [
            "Mountain and village properties have a problem city hotels do not: guests arrive at night, on unlit roads, following a pin. If the pin is wrong, or there is only one pin for a property with a hidden entrance, the stay starts with a phone call from a lost guest — and sometimes with a review about it.",
            "The site carries an accurate map link, written directions from the main road with the landmarks people actually use, and a photograph of the entrance. It is unglamorous work, and it is some of the most valuable on the page. The same details belong in your Google Business Profile, because that is what a guest's phone opens when they search your name in the car.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Direct booking in a minute",
          body: "Rooms, prices in dollars and a request flow that sends dates, room and guests to you on WhatsApp as one message. No gateway needed, and no commission.",
        },
        {
          title: "Built for guests abroad",
          body: "Complete English, French and Arabic, and plain answers to what visitors ask: electricity, airport distance, winter roads, parking, breakfast.",
        },
        {
          title: "Found on the road",
          body: "An accurate map link, written directions with real landmarks and a photo of the entrance, matched to your Google Business Profile.",
        },
      ]}
      faqs={[
        {
          q: "Will a website replace booking platforms for my hotel?",
          a: "No, and it shouldn't try to. Platforms bring guests who would never have found you. The website wins back the guests who already know you — returning guests, recommendations, people who saw you on Instagram — so they book directly instead of paying the platform's commission on your behalf.",
        },
        {
          q: "Can guests book online without a card payment system?",
          a: "Yes. The guest chooses dates, room and number of people, and the site sends that to you as one complete WhatsApp message. You confirm, and the deposit is paid by bank transfer or a local money transfer service. It is the process most guesthouses already run, without the back-and-forth.",
        },
        {
          q: "Should my website show an availability calendar?",
          a: "Only if someone will keep it accurate every day. A calendar showing a room as free when it isn't is worse than none. For many small properties the better design is a request with a promised reply time, which sets the right expectation and never misleads.",
        },
        {
          q: "What languages should a Lebanese hotel website be in?",
          a: "English and French at minimum for guests planning from abroad, and Arabic for local and Gulf guests. Every page needs to exist in each language, not just the homepage — a visitor who switches language and lands on an untranslated room page leaves.",
        },
        {
          q: "Should prices be shown in dollars?",
          a: "Yes. Stays are quoted in US dollars here, so show them that way. If prices change by season, show the season ranges rather than hiding them behind \"contact us\" — a missing price is the most common reason a guest goes back to the platform, where the price is visible.",
        },
        {
          q: "How do I get my guesthouse to show up on Google Maps?",
          a: "Through a Google Business Profile with the correct pin, photos, hours and a link to your site, kept consistent with the details on the website itself. We set the site side up so the two match, and we can walk you through the profile.",
        },
        {
          q: "Can the site show reviews from booking platforms?",
          a: "We can link to them, and quote a few with permission and attribution. We don't copy platform ratings onto the site as if they were your own, because they can't be verified there and readers know it. A guest who wants reviews will check the platform anyway.",
        },
        {
          q: "How much does a hotel website cost?",
          a: "Between $1,000 and $2,000 for most hotels and guesthouses, as a fixed price in US dollars agreed before work starts. A property with many room types, several languages and a live availability system connected to a channel manager is quoted individually.",
        },
      ]}
      related={[
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "The wider picture — connectivity, trilingual layouts, currency, and what the local agency market gets wrong.",
        },
        {
          href: "/work/burger-shop/",
          label: "A WhatsApp checkout, in practice",
          blurb:
            "The same pattern as a booking request: a site that composes the whole order into one message. It took 61 orders in its first eleven weeks.",
        },
        {
          href: "/blog/local-seo-lebanon/",
          label: "Local SEO in Lebanon",
          blurb:
            "Google Business Profile, map results and the searches guests make on the road.",
        },
        {
          href: "/blog/building-for-slow-connections/",
          label: "Building for slow connections",
          blurb:
            "Guests check your site from a mountain road on mobile data. Here's what keeps it usable.",
        },
      ]}
    />
  );
}
