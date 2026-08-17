import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Real Estate Website Design in Lebanon",
  description:
    "Websites for Lebanese agencies and developers — every listing its own findable page, sold URLs handled properly, image weight controlled, enquiries that reach WhatsApp.",
  alternates: { canonical: "/real-estate-website-design-lebanon/" },
};

/**
 * The real estate page, as distinct from /web-design-lebanon/.
 *
 * Same anti-doorway rule. Justified only by what is true of property businesses.
 *
 * The four things it says that no other page on this site can:
 *  - A listing is a page or it is invisible. Property search is the clearest case
 *    on the site where the individual item, not the site, is the entry point.
 *  - What happens to a sold listing's URL. Genuinely technical, entirely
 *    specific to businesses whose inventory disappears, and almost always done
 *    wrong — a deleted page throws away the only asset that had accumulated
 *    ranking.
 *  - Image weight at listing scale. Thirty photographs per property is the
 *    normal case, which turns a solved problem into an architectural one.
 *  - Agency and developer sites are different products. One sells a changing
 *    inventory, the other sells a single fixed thing over a long cycle.
 *
 * NO CASE STUDY YET. This is the one industry with no matching build in the reel.
 * The page says so in its own FAQ and points at /work/ rather than stretching an
 * unrelated study to stand in for it. When the technical-catalogue concept gets
 * written up as a case study, link it here and from that FAQ — a listing grid and
 * a spec catalogue are the same problem — and revisit properly if a real property
 * project ever lands.
 *
 * No price indices, no market statistics, no invented averages. Property figures
 * date fast and this page has no business quoting them.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Property"
      eyebrow="Web design"
      title="Websites for agencies and developers."
      href="/real-estate-website-design-lebanon/"
      breadcrumbName="Real Estate Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="real estate agencies and developers"
      faqTitle="Property, specifically."
      lead="Nobody searches for an estate agency. They search for a two-bedroom in a particular area at a particular price — which means every listing has to be a page that can be found on its own."
      facts={[
        "In property search the individual listing is the entry point, not the homepage, so each listing needs its own indexable URL rather than appearing only inside a filtered results view.",
        "When a property sells, deleting its page discards the only URL on the site that had accumulated any search ranking. Keeping it, marked as sold and pointing to comparable listings, retains that value.",
        "A single property listing commonly carries twenty to thirty photographs, which makes image handling an architectural decision rather than an optimisation applied at the end.",
        "An agency website and a developer website are different products: one presents a changing inventory of many properties, the other sells a single development over a long decision cycle.",
        "Custom real estate websites from Tramano Creative cost between $1,000 and $3,000, quoted as a fixed price in US dollars before work starts. Large listing systems with agent accounts are quoted individually.",
      ]}
      blocks={[
        {
          heading: "A listing is a page, or it does not exist",
          paras: [
            "Nobody wakes up wanting to visit an estate agency's website. They want a two-bedroom in a specific area, under a specific number, and they will type approximately that. The consequence is that the homepage is close to irrelevant as an entry point, and every individual property has to be findable on its own terms.",
            "Plenty of property sites fail this at the foundation. The listings live inside a search interface that loads results dynamically, which means there is no address you can send to anybody, nothing for a search engine to index, and no page for an assistant to cite. The catalogue exists, and none of it is reachable. From outside, the site is one page with a search box.",
            "Built properly, each property has a real URL that loads the property, describes it in text, and can be shared in a message, bookmarked, indexed and quoted. Structured data lets a search engine understand price, location, size and type as facts rather than as a paragraph, which is what makes a listing eligible to appear as something richer than a blue link.",
            "This also decides how filtering should behave. Narrowing by area and price is what visitors came to do, and it should be instant — but the filtered view is a convenience layered over pages that each stand alone, not a replacement for them. Get that order wrong and the site's entire inventory is invisible.",
          ],
        },
        {
          heading: "What happens to a listing when the property sells",
          paras: [
            "This is the question specific to property, and it is nearly always answered badly, because the obvious action is the wrong one.",
            "When a property sells or is let, the listing page is usually deleted. It is a reasonable instinct — it is no longer for sale. But that page is very often the best-ranked URL on the whole site: it accumulated links, it was shared, it matched exactly the search somebody was making, and it had been indexed for months. Deleting it throws all of that away and hands visitors a 404, and on a statically hosted site there is no redirect mechanism waiting to catch them.",
            "The better pattern costs nothing. Keep the page. Mark it clearly as sold or let, with the date, and remove the price if you would rather not publish what it went for. Then use the space it has already earned to point at genuinely comparable properties — same area, same bracket. Somebody arriving from a search for exactly that kind of home has told you precisely what they want, and the page is now a well-ranked entry point into current stock instead of an error.",
            "It is also honest proof of work in a way a testimonial is not. A page saying this sold, in this area, at this time is a record. Agencies claiming a strong track record while their site shows only what is currently unsold are throwing away the evidence.",
            "The exception worth naming: if a listing has to disappear for a client's privacy, it should be removed deliberately with the right response rather than left to rot into a broken link. That is a decision to make per property, not a default.",
          ],
        },
        {
          heading: "Thirty photographs per property, which changes everything",
          paras: [
            "Every kind of website has images. Property has a quantity of them that stops being an optimisation problem and becomes a structural one: twenty to thirty photographs per listing, dozens of listings, all of them large, and the whole point is that they look good.",
            "The naive build loads the full gallery when the page opens. On a property site that means the visitor waits through several megabytes before reading the description, and on Lebanese mobile data a meaningful number of them leave first. The competing failure is over-correcting into lazy loading everything, so the first photograph — the one the page is really about — arrives late and the page looks broken while it does.",
            "What actually works is boring and specific. The lead image is treated as the most important thing on the page and loads immediately at a size chosen for the slot it occupies rather than the size the camera produced. The rest of the gallery loads as it is needed. Everything is served in a modern format, and dimensions are declared so the layout does not jump while photographs arrive — a page that reflows under someone's thumb as they scroll is the most irritating thing a listing can do.",
            "There is a related discipline nobody enjoys: the photographs have to be prepared. A folder of untouched camera exports is the single most common reason a property site is slow, and no amount of build cleverness fully compensates for a four-thousand-pixel image in an eight-hundred-pixel slot.",
          ],
        },
        {
          heading: "Agencies and developers need different sites",
          paras: [
            "These get treated as one category and they behave nothing alike.",
            "An agency sells a changing inventory. Its site is a system: listings arrive and leave, several agents each need attribution and their own contact route, buyers arrive through individual properties, and the value is in how quickly and cleanly stock can be added by someone who is not a developer. If adding a listing requires an email to an agency, listings will go up late or not at all, and the site will lose to whichever competitor made it easy.",
            "A developer sells one thing, over a long time, to someone making the largest purchase of their life. There is no changing inventory — there is a single development, a set of unit types, a location argument, a construction timeline, and a decision that takes months and involves more than one family member. That site is closer to a considered brochure: floor plans that can be examined, an honest account of what is finished and what is not, and a payment-plan explanation that survives being read twice. Off-plan buying is largely a trust exercise, and everything about the page is either building that or spending it.",
            "The enquiry differs too. In both cases the conversation almost always continues on WhatsApp, and pretending otherwise with a formal contact form adds a step everyone will route around. What the site should do is make sure the enquiry arrives with the property attached, so nobody has to ask which one — and so you can tell which listings and which areas actually generate interest.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Every listing its own page",
          body: "A real URL per property that can be shared, indexed and cited, with price, area, size and type in structured data — plus instant filtering layered over the top rather than replacing it.",
        },
        {
          title: "Sold listings that keep working",
          body: "A sold or let property stays published, dated and clearly marked, pointing visitors at comparable current stock — keeping the ranking it earned instead of becoming a 404.",
        },
        {
          title: "Galleries that don't cost you the visit",
          body: "Lead image immediate and correctly sized, the rest loaded as needed, modern formats, declared dimensions so nothing jumps while photographs arrive.",
        },
      ]}
      faqs={[
        {
          q: "Does every property need its own page?",
          a: "Yes, and it is the foundation. Buyers search for a specific kind of home in a specific area, not for your agency, so the listing is the entry point. If your properties only exist inside a dynamic search view, there is no URL to share, nothing to index and nothing an AI assistant can cite — from outside, your site is a single page with a search box.",
        },
        {
          q: "What should happen to a listing after the property sells?",
          a: "Keep the page, mark it sold or let with the date, drop the price if you prefer, and point it at comparable current listings. That page is often the best-ranked URL on your site; deleting it discards everything it earned and hands visitors a 404, and a static site has no redirect mechanism to catch them. It also becomes honest proof of what you actually sell.",
        },
        {
          q: "Won't keeping sold listings make the site look stale?",
          a: "Not if they are clearly marked and dated, and they should be visually distinct from available stock so nobody is misled for a moment. A visible record of what sold, where and when reads as a working agency. The alternative — showing only what nobody has bought yet — is the version that looks bad.",
        },
        {
          q: "How many photos can a listing have?",
          a: "As many as the property deserves; twenty to thirty is normal. What matters is that the first one loads immediately at the right size and the rest arrive as the visitor reaches them, so the page is usable in a second rather than after several megabytes. Preparing the images properly is part of the job and the most common reason a property site is slow.",
        },
        {
          q: "Can my agents add and edit listings themselves?",
          a: "Yes, and this is not optional — if publishing a listing requires contacting us, listings go up late and the site loses to the competitor who made it easy. Adding a property, uploading photographs and marking something sold all need to be jobs your team does directly.",
        },
        {
          q: "Do you build sites for developers as well as agencies?",
          a: "Both, and they are genuinely different builds. An agency site is a system for changing inventory with multiple agents. A developer site sells one development over a long decision cycle — unit types, floor plans, construction status, payment plans — and is closer to a considered brochure. Ask for the wrong one and you get a site fighting its purpose.",
        },
        {
          q: "How should enquiries work?",
          a: "Ending on WhatsApp, in almost every case, because that is where the conversation will continue whatever the site does. The important part is that the enquiry arrives with the property attached so nobody has to ask which one — which also tells you which listings and areas are actually generating interest.",
        },
        {
          q: "Should prices be in dollars?",
          a: "Lebanese property is quoted and transacted in US dollars, so the site should present that plainly rather than converting into figures nobody uses. Where a price is on application, say that rather than leaving an empty field — an absent price reads as a broken page.",
        },
        {
          q: "Can buyers search by area?",
          a: "Yes, and area is usually the first filter anyone touches, ahead of price. It needs to reflect how people here actually describe locations, which is by neighbourhood and landmark rather than by administrative district. Getting that vocabulary right matters more than the filter's cleverness.",
        },
        {
          q: "Can you import our listings from a portal or spreadsheet?",
          a: "Usually. A spreadsheet or a structured export is straightforward; a portal depends on whether it offers a way out, and some do not. We check before promising it. If there is no route, an initial bulk entry plus an easy way to add new listings is a perfectly workable outcome.",
        },
        {
          q: "How much does a real estate website cost?",
          a: "Between $1,000 and $3,000 for most builds, fixed price in US dollars after one short call. A large listing system with agent accounts, portal imports and saved searches is a bigger project and quoted individually. A single-development site for a builder usually sits in the standard range.",
        },
        {
          q: "Do you have a property case study?",
          a: "Not yet, and we would rather say so than show you something adjacent and imply otherwise. The nearest genuine work is a concept build of a technical catalogue, where the problems are the same ones: a dense grid of items, filtering on the numbers buyers care about, and a lot of imagery kept fast. You can see it on the work page.",
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
          href: "/blog/image-optimization-for-websites/",
          label: "Image optimisation, done properly",
          blurb:
            "Which format when, how large an image should actually be, and why a 4000px photo in an 800px slot costs you. The main lever on a listing gallery.",
        },
        {
          href: "/blog/technical-seo-basics/",
          label: "Technical SEO without code",
          blurb:
            "Canonicals, sitemaps and crawlability explained plainly — the machinery that decides whether your listings get indexed at all.",
        },
        {
          href: "/blog/structured-data-explained/",
          label: "Structured data, without the jargon",
          blurb:
            "What schema markup gets you, and how a listing's price, size and location become facts a search engine can read.",
        },
      ]}
    />
  );
}
