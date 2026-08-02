import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "Web Design in Beirut — Custom Sites",
  description:
    "Custom web design for Beirut businesses, built by a studio that is actually here. Fixed price, 3–6 weeks, no templates. Book a call and meet both of us.",
  alternates: { canonical: "/web-design-beirut/" },
};

/**
 * The Beirut page, as distinct from /web-design-lebanon/.
 *
 * MarketPage ships with no default copy on purpose: a location page that is a
 * find-and-replace of a neighbouring one is a doorway page, gets demoted, and
 * drags down the pages that already rank. So this page is only justified by
 * what is true of Beirut and not of Lebanon generally.
 *
 * The four things it says that the Lebanon page cannot:
 *  - We are physically here, so meeting in person is a real option.
 *  - Beirut is not one market. What a business needs changes by district.
 *  - Beirut search behaviour is neighbourhood-level and heavily transliterated.
 *  - Our one live build is a Beirut business, and it is linked as proof.
 *
 * Everything the Lebanon page already covers — connectivity, trilingual
 * layouts, currency and pricing, the state of the local agency market — is
 * deliberately NOT repeated here. If you find yourself wanting to add it,
 * link to that page instead.
 *
 * One Beirut page, not one per neighbourhood. Five thin district pages is the
 * pattern Google demotes, and this domain has no authority to absorb that.
 */
export default function Page() {
  return (
    <MarketPage
      slate="Beirut"
      eyebrow="Web design"
      title="Web design in Beirut."
      href="/web-design-beirut/"
      breadcrumbName="Web Design in Beirut"
      serviceName="Web design and development"
      areaServed="Lebanon"
      lead="Custom websites for Beirut businesses, built by two people who work here. You can meet us, or never meet us — but the people on the call are the people writing the code."
      facts={[
        "Tramano Creative is based in Beirut. Ralph Nawfal and Ramy Al Housary are the only two people in the studio, and both work on every project.",
        "Custom websites for Beirut businesses cost between $1,000 and $3,000, with focused single-page builds from $500, quoted as a fixed price in US dollars before work starts.",
        "A typical website launches 3 to 6 weeks after kickoff. Landing pages ship in under two weeks.",
        "In-person meetings in Beirut are possible but not required. Most of the work runs over calls, a shared channel and a live preview link.",
        "Beirut customers search in Arabic script, transliterated Arabic and English for the same thing, often with a neighbourhood name attached.",
      ]}
      blocks={[
        {
          heading: "We are actually in Beirut, and that changes a few things",
          paras: [
            "Plenty of studios will build you a website from another country and never say so. That is a legitimate way to work — we do it ourselves for clients in the Gulf and further out. But when the studio is in the same city as the business, a few practical things get easier: sitting down together early, seeing the premises before designing a page about them, photographing the actual product instead of licensing a stock image of something similar.",
            "None of that is mandatory. Most Beirut projects still run the way every other project runs, over calls and a preview link, because that is faster for everyone and nobody wants a meeting for its own sake. The point is that it is available, and that there is somebody to hold accountable who is an hour away rather than a time zone away.",
            "The two people who take the call are Ralph Nawfal and Ramy Al Housary, and they are the entire studio. There is no account manager to be handed off to afterwards, because there is nobody to hand off to.",
          ],
        },
        {
          heading: "Beirut is not one market, and a website has to pick a side",
          paras: [
            "A business in Hamra is selling to a mix of students, staff and long-term residents, at a price point that has to survive being compared on a phone in the street. A business in Achrafieh or Verdun is often selling to a wealthier, more French- and English-leaning customer who expects the site to look like the shop does. A restaurant or bar in Mar Mikhaël is competing for a decision made at ten at night, on Instagram, by someone deciding between four places within a block. A business in Dahye is more likely selling to families, in Arabic, on value.",
            "Those are different websites. Not different templates with different colours — genuinely different priorities about what goes at the top of the page, which language leads, whether the menu or the booking button is the first thing you see, and how much the design is allowed to slow you down.",
            "The most common mistake we see in Beirut is a business buying a website that would suit a different neighbourhood entirely: a value-led shop given an expensive-looking minimal site that makes customers assume it is out of their range, or an upmarket practice given a loud template that undercuts the thing it is selling. Working out which one you are is most of the first call.",
          ],
        },
        {
          heading: "How people here actually search for you",
          paras: [
            "Beirut searches are neighbourhood-level far more often than city-level. Somebody looking for a dentist does not search for a dentist in Lebanon, or usually even in Beirut — they search for one in Achrafieh, or near a landmark, or simply near me while standing on the street. A site that never names the districts it serves is invisible to most of that.",
            "The second thing that catches businesses out is script. A large share of local searches arrive in Latin characters rather than Arabic — people type the way their phone keyboard is already set. Someone looking for manakish may type it in Arabic, or as mankouche, or manaeesh, and all three are the same customer. Optimising for formal Arabic alone quietly misses the rest.",
            "This is not solved by listing every neighbourhood in a footer, which reads as spam to a reader and to Google. It is solved by naming the areas you genuinely serve, in the copy, where it makes sense, and by writing the way customers actually type rather than the way a keyword tool spells it.",
          ],
        },
        {
          heading: "What a Beirut business can actually take payment with",
          paras: [
            "This decides more website architecture in Beirut than design taste does. Getting a small business approved for online card payments here is slow, and for many businesses it does not happen at all. Building a checkout that cannot take money is worse than building no checkout.",
            "The realistic options are a merchant account through a local bank or processor, a local wallet, cash on delivery, or handing the order to WhatsApp and settling in person. Which of those you can get is determined by your bank and your commercial registration, not by preference, so it is worth establishing before a checkout is designed rather than after.",
            "Our one live client build is a Beirut food business that went exactly this way: a full cart on the site, and an order composed into a single WhatsApp message at the end instead of a card form. It is written up in full, including how the decision was made and what it measures.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Designed for your street",
          body: "The layout comes from who actually walks past and what they are deciding. A value-led shop and an upmarket practice get genuinely different pages, not the same one restyled.",
        },
        {
          title: "Findable at neighbourhood level",
          body: "Named districts in the copy where they belong, structured data, and content written the way Beirut customers type — including transliterated Arabic, not only formal Arabic.",
        },
        {
          title: "An order path that works here",
          body: "Checkout built around what you can actually get approved for — merchant account, local wallet, cash, or a WhatsApp handoff — decided before the design, not after.",
        },
      ]}
      faqs={[
        {
          q: "How much does a website cost in Beirut?",
          a: "Between $1,000 and $3,000 for most custom business sites, and from $500 for a single focused page. You get a fixed price in US dollars after one short call, and that number does not move. Larger or more complex builds are quoted individually.",
        },
        {
          q: "Can we meet in person in Beirut?",
          a: "Yes. We are here, so a coffee early on is easy to arrange and occasionally useful — particularly if we should see your premises or your product before designing around it. It is not required, and most projects run entirely over calls and a live preview link.",
        },
        {
          q: "Do you work in my neighbourhood?",
          a: "Anywhere in Beirut and greater Beirut — Hamra, Achrafieh, Mar Mikhaël, Verdun, Badaro, Dahye and the rest. Where you are matters less for logistics than for design: it changes who is walking past, which language leads, and what the page has to prove.",
        },
        {
          q: "Should my Beirut site be in Arabic or English?",
          a: "It depends who buys from you. Achrafieh and Verdun businesses often lead in English or French; a shop in Dahye usually leads in Arabic. Many do both. The honest test is which language your existing customers message you in, and we will ask that on the first call.",
        },
        {
          q: "How do I rank for my neighbourhood rather than all of Beirut?",
          a: "Name the areas you actually serve in the page copy where it reads naturally, keep your business information identical everywhere it appears, and answer the questions customers in that area ask. Stuffing a footer with twenty district names does the opposite — it reads as spam to a person and to Google.",
        },
        {
          q: "How do I take card payments from a Beirut business?",
          a: "Through a merchant account with a local bank or processor such as Areeba, or a local wallet like Whish. Stripe does not operate in Lebanon. What you can get approved for depends on your bank and commercial registration, so we establish that before designing a checkout rather than after.",
        },
        {
          q: "Will my site stay up during a power cut?",
          a: "Yes. Your site is served as static files from data centres worldwide, not from a machine in Beirut, so the grid here has no effect on whether it loads. A power cut affects your visitors' connections and your ability to reply — which is a reason to build light pages, not a reason to worry about downtime.",
        },
        {
          q: "Is a Beirut studio cheaper than hiring abroad?",
          a: "Usually, and the reason is structural rather than a discount: no office lease, no account managers, two people. The trade-off is availability — we take a small number of projects at a time and are not always free. If you need a department of twelve, we are the wrong studio and will say so.",
        },
        {
          q: "Can you redo a site another Beirut agency built?",
          a: "Yes, and the first thing we do is establish whether that is the right call. A site with a sound foundation where the problem is design, speed or structure is a fix, at a fraction of a rebuild. A site fighting its own platform is usually cheaper to rebuild. We tell you which you have, with reasons.",
        },
        {
          q: "How long does a Beirut project take?",
          a: "Three to six weeks from kickoff for most builds, and under two weeks for a single landing page. You get the launch date before we start. It assumes content and feedback come back within the agreed windows; if something slips on your side we say so immediately rather than letting the date drift.",
        },
        {
          q: "Do you build sites for restaurants and cafés in Beirut?",
          a: "Yes, and it is the category where the ordering path matters most. A menu that takes three taps to reach, or a checkout that cannot take payment, loses the order to the place next door. Our live build is a Beirut food business and the case study covers exactly those decisions.",
        },
        {
          q: "What if I only have an Instagram and a WhatsApp number?",
          a: "That is where a lot of Beirut businesses genuinely start, and it is not a problem. A site makes you findable in search, gives you somewhere to send ad traffic, and can hand enquiries straight to the WhatsApp number you already answer. Nothing about your current setup has to change.",
        },
      ]}
      related={[
        {
          href: "/work/burger-shop/",
          label: "A Beirut build, in detail",
          blurb:
            "The live case study: a bilingual menu and a checkout that ends in WhatsApp, because card processing wasn't available.",
        },
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "The wider picture — connectivity, trilingual layouts, currency, and what the local agency market gets wrong.",
        },
        {
          href: "/seo-lebanon/",
          label: "SEO in Lebanon",
          blurb:
            "Building the site is half of it. This is the work that gets it found, including how Lebanese search behaviour actually splits.",
        },
        {
          href: "/blog/how-much-does-a-custom-website-cost/",
          label: "What a custom website actually costs",
          blurb:
            "Real price ranges, what moves the number, and what you should refuse to pay for.",
        },
      ]}
    />
  );
}
