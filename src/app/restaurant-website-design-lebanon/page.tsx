import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Restaurant Website Design in Lebanon",
  description:
    "Websites for Lebanese restaurants and cafés — menus that are readable and findable, ordering that ends where your customers already are, and hours that stay true.",
  alternates: { canonical: "/restaurant-website-design-lebanon/" },
};

/**
 * The restaurant page, as distinct from /web-design-lebanon/.
 *
 * IndustryPage inherits MarketPage's rule: a sector page that is the Lebanon
 * page with a noun swapped is a doorway page, gets demoted, and drags the pages
 * that already rank down with it. So this page is only justified by what is true
 * of food businesses and not of Lebanese businesses generally.
 *
 * The four things it says that no other page on this site can:
 *  - The menu is the product, and most menus here are published as images, which
 *    makes them unreadable to search and to anyone using a screen reader.
 *  - Discovery happens on Instagram; the website's job is the part Instagram
 *    can't do. That reframes what the homepage is even for.
 *  - The ordering decision is aggregator vs. direct, and it is a margin
 *    question, not a design question.
 *  - Operating hours are content that goes stale weekly, and a wrong closing
 *    time costs a customer who is standing outside.
 *
 * Deliberately NOT repeated here, because /web-design-lebanon/ and
 * /web-design-beirut/ already carry it: connectivity and page weight, trilingual
 * layouts, currency, neighbourhood-level search behaviour, and which payment
 * processors a business can get approved for. Where this page needs one of
 * those, it links rather than restates.
 *
 * No commission percentages, no share-of-search figures, no "restaurants
 * typically see" anywhere on this page. Every claim here is either structural
 * (an image cannot be read as text) or an observation stated as one. If a number
 * gets added later it needs a source, per CONTENT-PLAN.md.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Restaurants"
      eyebrow="Web design"
      title="Websites for restaurants and cafés."
      href="/restaurant-website-design-lebanon/"
      breadcrumbName="Restaurant Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="restaurants and cafés"
      faqTitle="Restaurants, specifically."
      lead="Your menu is the product, and most restaurant websites publish it as a photograph nobody can search, read aloud, or update without a designer. We build the other kind."
      facts={[
        "A menu published as a JPEG or a PDF cannot be read by Google, by an AI assistant, or by a screen reader. A menu built as structured text can be read by all three.",
        "Custom restaurant websites from Tramano Creative cost between $1,000 and $2,000, with focused single-page builds from $500, quoted as a fixed price in US dollars before work starts.",
        "Tramano Creative's one live client build is a Lebanese food business, with a published case study including measured performance figures.",
        "Delivery aggregators charge a commission on every order. A direct ordering path on a restaurant's own site does not, which is why the two are a margin decision rather than a design preference.",
        "Restaurant opening hours change more often than any other content on a restaurant website, and a wrong closing time costs a customer who is already standing outside.",
      ]}
      blocks={[
        {
          heading: "The menu is the product, and most menus here are invisible",
          paras: [
            "Walk through the websites of Lebanese restaurants and you will find the same thing again and again: the menu is a photograph. Sometimes it is a PDF, which is marginally better. Occasionally it is a scan of a printed card, rotated slightly. It looks fine to the owner, because the owner already knows what is on it.",
            "To everything that is not a human with good eyesight, that menu does not exist. Google cannot read the dishes, so you never appear when somebody searches for the thing you are best at. An AI assistant asked for somewhere nearby that does a particular dish cannot recommend you, because it has no idea you make it. A customer using a screen reader gets silence. Someone on a slow connection waits for a two-megabyte image to load before they can find out whether you do breakfast.",
            "Built as text with structure behind it, the same menu becomes searchable, quotable, readable aloud, translatable, and roughly a hundredth of the file size. It also becomes something you can change yourself. Which matters more than it sounds, because of the next thing.",
            "Prices move here. When they move, a menu that lives inside an image means either a designer with the original file or a website that is quietly lying to customers. Neither is acceptable, and the second one is what usually happens.",
          ],
        },
        {
          heading: "Instagram already does discovery. The site does the part it can't",
          paras: [
            "For most food businesses in Lebanon, Instagram is the front door and everybody knows it. That is not a problem to be fixed, and a website that tries to compete with it on atmosphere will lose. The useful question is what Instagram is genuinely bad at, because that is the job left for the site.",
            "It is bad at being found by someone who does not already follow you. It is bad at answering a question at the moment it is asked — whether you are open now, whether you have a vegetarian option, whether you deliver to a particular area. It is bad at being a destination for advertising, because you cannot control what happens after the tap. And a link in a bio is a dead end that goes to one place, when the person tapping it wanted one of four different answers.",
            "So the homepage of a restaurant site is not a brand statement. It is closer to a service desk: are you open, what do you serve, how do I order, where are you. The photography carries the atmosphere — and it should be your photography, of your food, because licensed images of a generic burger are visible from a long way off.",
            "The site is also the only asset in this list that you own. An account can be lost, restricted, or algorithmically buried without warning or appeal, and the businesses that discover this discover it at the worst possible time.",
          ],
        },
        {
          heading: "Aggregator or direct: a margin decision, not a design one",
          paras: [
            "Delivery platforms bring you orders you would not otherwise have had, and they take a commission on every one of them. Both halves of that sentence are true, which is why the answer is rarely to abandon them and rarely to rely on them alone.",
            "What changes the arithmetic is where a repeat customer ends up. Someone ordering from you for the fourth time through an aggregator is a customer you are renting. The same person ordering through your own site is one you own, at full margin, with their order history and their phone number. The site's job is not to win the first order — it is to be the obvious place for the fifth.",
            "In practice that means the direct path has to be genuinely easier than the app, not merely available. Two taps from landing to a composed order. No account creation. No form asking for a delivery address in a country where the honest answer is a landmark and a phone call. For a great many Lebanese food businesses the right ending is a single well-formatted WhatsApp message containing the whole order, sent to the number somebody already answers all day.",
            "Our live client build went exactly this way, and the case study covers how the decision was made and what it measures. Whether you can take card payments at all is a separate question with a real answer, covered on the Lebanon page.",
          ],
        },
        {
          heading: "Hours, closures and the things that go stale weekly",
          paras: [
            "Every other kind of business has a website that is broadly true for a year at a time. A restaurant's is out of date constantly. Hours shift with the season. You close for a private event, a public holiday, a wedding, a power problem, Ramadan, or because the fridge died. Ramadan alone rearranges opening hours across a whole month, in a way that no plugin anticipates.",
            "This is the failure mode nobody designs for, and it is more expensive than any of the design decisions above, because it fails at the exact moment of intent: somebody is out, hungry, deciding between you and two others, and your site says you shut at eleven when you shut at nine.",
            "The answer is unglamorous. Hours live in one place, they are editable by whoever is actually in the restaurant rather than by a developer, they appear in structured data so Google and Maps can read them, and a temporary closure is a two-minute change from a phone. If updating your own opening hours requires emailing an agency, the hours will be wrong.",
            "The same applies to sold-out items, seasonal dishes and a price that changed on Tuesday. Anything that changes weekly has to be changeable by you, or it stops being maintained within a month of launch. We have watched that happen to sites we didn't build, and it is always the same story.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "A menu that can be read",
          body: "Built as structured text, not an image or a PDF — so search engines, AI assistants and screen readers can all read it, it loads instantly on a bad connection, and you can change a price yourself.",
        },
        {
          title: "An order path that ends where you answer",
          body: "Two taps from landing to a composed order, no account, no forced address form — finishing on WhatsApp, a call, or a real checkout, depending on what you can actually take payment with.",
        },
        {
          title: "Hours you can fix from your phone",
          body: "Opening times, closures and sold-out items editable by whoever is in the restaurant, published as structured data so Google and Maps read them correctly.",
        },
      ]}
      faqs={[
        {
          q: "Why can't I just upload a photo of my menu?",
          a: "You can, and it will look right to you. But an image of a menu is unreadable to Google, to AI assistants, to screen readers, and to anyone on a slow connection who gives up before it loads. You will never appear in a search for the dish you are best at, because nothing can tell that you make it. Built as text it is searchable, readable aloud, and about a hundredth of the size.",
        },
        {
          q: "How much does a restaurant website cost in Lebanon?",
          a: "Between $1,000 and $2,000 for most custom builds, and from $500 for a single focused page with a menu and an ordering path. You get a fixed price in US dollars after one short call, and that number does not move. A large multi-branch build with live availability is quoted individually.",
        },
        {
          q: "Can customers order directly from the site?",
          a: "Yes, and how the order finishes depends on what you can take payment with. Options are a real card checkout, cash on delivery, or composing the whole order into a single WhatsApp message to the number you already answer. The last one is the right answer for more Lebanese food businesses than people expect, and it is what our live client build does.",
        },
        {
          q: "Should I stop using delivery apps if I have my own site?",
          a: "No. They bring orders you would not otherwise get, and cutting them off to make a point costs you money. The goal is narrower: make your own site the obvious place for a repeat customer, so you stop paying commission on people who already know you. Winning the first order and winning the fifth are different problems.",
        },
        {
          q: "Can I update my own menu and prices?",
          a: "Yes, and this is not an optional extra — it is the difference between a site that stays true and one that quietly starts lying. If changing a price needs a developer, the price will be wrong within a month. Menu, prices, hours and sold-out items are all editable by you.",
        },
        {
          q: "How do I keep my opening hours right during Ramadan?",
          a: "By having hours you can change yourself from a phone, in one place, that feed both the website and your structured data at once. Ramadan rearranges opening times for a month and no plugin predicts it. Temporary closures work the same way — a two-minute change, not an email to an agency.",
        },
        {
          q: "Do I need professional food photography?",
          a: "You need photographs of your own food. They do not have to be expensive, but they cannot be licensed stock, because a generic image of a burger is recognisable as one and it undermines everything else on the page. If you have nothing usable we will say so before design starts rather than build around a gap.",
        },
        {
          q: "Will the site work if my customers find me on Instagram first?",
          a: "That is the normal path, and the site is built assuming it. Instagram is good at atmosphere and bad at answering a question at the moment it is asked — open now, do you deliver here, is there a vegetarian option. The site handles those, and gives your ads somewhere to land that you control.",
        },
        {
          q: "What about a site for multiple branches?",
          a: "Each branch needs its own hours, its own area, and often its own menu variations, and it needs to be findable by people searching near that branch rather than near your head office. That is more work than one page listing three addresses, and it is quoted as such — but a single page for three locations ranks for none of them well.",
        },
        {
          q: "Can you make my site load fast on a bad connection?",
          a: "Yes, and for a restaurant it matters more than most, because the page is often opened outdoors on mobile data by someone deciding quickly. Replacing an image-based menu with text does most of the work. There is a longer piece on building for slow connections linked below.",
        },
        {
          q: "Do you handle table reservations?",
          a: "We build the request path — the form, the confirmation, the handoff to however you actually keep the book. Integrating with a full reservations platform is possible and quoted separately. If you currently take bookings on WhatsApp, that is not a problem to solve; it is a system that already works and the site should feed it.",
        },
        {
          q: "How long does a restaurant site take to build?",
          a: "Three to six weeks from kickoff for most builds, under two weeks for a single page. Menus are the usual reason a project slips, so getting yours into text early — even messily — is the most useful thing you can do to protect the launch date.",
        },
      ]}
      related={[
        {
          href: "/work/burger-shop/",
          label: "A Lebanese food build, in detail",
          blurb:
            "The live case study: a bilingual menu and a checkout that ends in WhatsApp, because card processing wasn't available. Includes measured figures.",
        },
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "The wider picture — connectivity, trilingual layouts, currency, and which payment processors a business can actually get approved for.",
        },
        {
          href: "/blog/local-seo-lebanon/",
          label: "How people here actually search",
          blurb:
            "Three scripts, one customer. Why intent in Lebanon is neighbourhood-level, and how to rank for an area without stuffing a footer.",
        },
        {
          href: "/blog/building-for-slow-connections/",
          label: "Building for a bad connection",
          blurb:
            "What breaks first when the network is poor, and why page weight matters more here than in markets with good infrastructure.",
        },
      ]}
    />
  );
}
