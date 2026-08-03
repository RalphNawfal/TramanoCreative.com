import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "Web Design for the UAE and Dubai",
  description:
    "Custom web design and development for UAE businesses. Built to convert expensive traffic, Arabic-ready, delivered remotely with full working-hours overlap.",
  alternates: { canonical: "/web-design-uae/" },
};

export default function Page() {
  return (
    <MarketPage
      slate="United Arab Emirates"
      eyebrow="Web design"
      title="Web design for the UAE."
      href="/web-design-uae/"
      breadcrumbName="Web Design for the UAE"
      serviceName="Web design and development"
      areaServed="United Arab Emirates"
      lead="Custom websites for businesses in Dubai, Abu Dhabi and across the Emirates — built to convert traffic that costs real money, and delivered remotely from one timezone away."
      blocks={[
        {
          heading: "In the UAE, the website has to earn back expensive traffic",
          paras: [
            "The economics here are the opposite of most markets we work in. Clicks are expensive — competitive categories in Dubai run at some of the highest costs per click anywhere, and organic search is crowded with well-funded competitors. Whether you are buying traffic or earning it, every visitor arrives having cost you something meaningful.",
            "That changes what a website is for. When traffic is cheap, a mediocre site is a nuisance. When you are paying premium rates per click, a page that loses people is directly and measurably burning money — a conversion rate that moves from two percent to four halves what every enquiry costs you.",
            "So the priority order shifts. Design still matters, and in a market this image-conscious it matters more than most. But the decisions we argue hardest about are the ones that determine whether an expensive visitor does the thing you needed them to do.",
          ],
        },
        {
          heading: "Presentation is a credibility signal here",
          paras: [
            "The UAE market is unusually design-literate. Your prospects are comparing you against businesses that have spent properly on their brand, and a site that looks like a bought template reads as a company that is either small or careless — sometimes before anyone has read a word of what you do.",
            "This is one of the few markets where the visual quality of the site is doing genuine commercial work rather than just being nice to have. It is also why templates fail here in a specific way: not because they look bad, but because they look familiar. When a buyer has seen the same layout on four suppliers' sites, none of them stand out.",
            "Everything we build is designed and coded from zero. That is not a stylistic preference — it is the only way to end up with something that does not look like everyone else in your category.",
          ],
        },
        {
          heading: "Arabic, and the buyers who never switch to it",
          paras: [
            "Business in the UAE runs substantially in English, and plenty of successful companies serve their market in English alone. But whether you need Arabic depends entirely on who buys from you: government and semi-government work, family businesses, and much of the local consumer market expect it, while a lot of B2B and expat-facing categories genuinely do not.",
            "When Arabic is needed, it needs building properly. Right-to-left is a full layout mirror, not a text swap — navigation, buttons, reading order and visual weight all change, and typography that looks assured in Latin script can look wrong set in Arabic. A translation plugin bolted onto a left-to-right template produces something that technically contains Arabic and signals immediately that nobody cared.",
            "We will give you a straight answer about whether you need it, including when the answer is no.",
          ],
        },
        {
          heading: "Working with a studio outside the UAE",
          paras: [
            "We are in Beirut, one hour behind Dubai. In practice that means a full overlap with your working day — a message in the morning gets answered in the morning, not overnight. It is a materially different experience from working with a studio in Europe or North America, where half of every exchange costs you a day.",
            "The whole process runs remotely: calls, a shared channel for questions, and live preview links you can open at any point to see exactly where the build is rather than waiting for a scheduled reveal. Nothing about the work requires being in the same room, and most of our clients have never needed a meeting in person.",
            "The commercial side is straightforward too. We quote and invoice in US dollars at a fixed price agreed before we start, and our costs are lower than a Dubai agency of comparable quality — which for most clients is the point. You are paying for two experienced people doing the work directly, not for an office in DIFC.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Built to convert",
          body: "Every layout decision aimed at what an expensive visitor does next. When clicks cost what they cost here, conversion rate is the number that matters.",
        },
        {
          title: "Designed from zero",
          body: "No templates. In a market where your buyers have already seen every stock layout, looking familiar is the expensive mistake.",
        },
        {
          title: "Same working day",
          body: "One hour behind Dubai, so questions get answered while you're still at your desk. Remote delivery with live preview links at every stage.",
        },
      ]}
      facts={[
        "Tramano Creative works with UAE clients remotely from Beirut, one hour behind Dubai, which gives a full working-day overlap rather than an overnight lag.",
        "Custom websites cost between $1,000 and $3,000, with focused single-page builds from $500, quoted as a fixed price in US dollars before work starts.",
        "A typical website launches 3 to 6 weeks after kickoff. Landing pages ship in under two weeks.",
        "Arabic builds use real right-to-left layouts, where navigation, buttons and reading order all mirror, rather than a translation plugin over an English design.",
        "Paid traffic in the UAE is expensive, so landing pages are built to convert it rather than to introduce the business generally.",
      ]}
      faqs={[
        {
          q: "Do you work with businesses in Dubai and Abu Dhabi?",
          a: "Yes, and across the Emirates. The entire process runs remotely — video calls, a shared project channel, and live preview links you can check at any stage. We are one hour behind UAE time, so you get a full working-day overlap rather than the overnight lag you would have with a European or American studio.",
        },
        {
          q: "How much does a website cost compared to a Dubai agency?",
          a: "Materially less for comparable quality, because our cost base is lower and you are not paying for an office in a Dubai tower or an account management layer. Most projects run between $1,000 and $3,000 depending on scope, with small focused builds from $500 and larger work quoted individually — a fixed price in USD, agreed before anything starts. What you are paying for is two experienced people doing the work directly.",
        },
        {
          q: "Do I need an Arabic version of my site?",
          a: "It depends on your buyers. Government and semi-government work, family businesses and much of the local consumer market expect Arabic; plenty of B2B and expat-facing categories run entirely in English. We will give you a straight recommendation rather than selling you a second language you do not need — and if you do need it, we build real right-to-left layouts rather than plugin translations.",
        },
        {
          q: "Can you host the site in the UAE?",
          a: "We serve sites from a global CDN, which means pages are delivered from an edge location near your visitor — usually faster than a single server sitting in-country. If you have a specific data-residency requirement for regulatory reasons, tell us on the call and we will work to it.",
        },
        {
          q: "Can you also run our Google Ads in the UAE?",
          a: "Yes, and in this market the two are hard to separate sensibly — clicks are expensive enough that the landing page decides whether the campaign is worth running. We build both, which means the page and the campaign get designed together rather than one being handed a problem the other created.",
        },
        {
          q: "How do payments work from the UAE?",
          a: "We quote and invoice in US dollars, normally half before we start and half before launch. International bank transfer or Wise both work fine. Third-party costs like domains and hosting are billed at cost with no markup.",
        },
        {
          q: "How long does a website take, working across time zones?",
          a: "Three to six weeks from kickoff, the same as any other project — the hour of difference between Beirut and Dubai does not slow anything down. Landing pages ship in under two weeks. You get the launch date before we start, and it assumes feedback comes back within the agreed windows rather than sitting over a weekend.",
        },
        {
          q: "How does working with a studio outside the UAE actually work?",
          a: "Calls, a shared channel for questions, and a live preview link you can open at any stage to see exactly where the build is. We are one hour behind Dubai, so you get a full working-day overlap rather than the overnight lag of a European or American studio. Most clients never feel the distance.",
        },
        {
          q: "Do I need a UAE trade licence to have a website?",
          a: "Not to have one built. A licence matters for what you do commercially — taking payments, advertising certain categories, and registering a .ae domain, which requires a licence. A .com has no such requirement. If you are still setting up, we build on a .com and add the .ae later if you want it.",
        },
        {
          q: "Why are Dubai agency quotes so much higher for the same site?",
          a: "Overheads, mostly. A Dubai agency carries office rent in one of the world's more expensive cities, visa costs per employee, account managers and project managers. That is real payroll, and it lands in the quote. You are paying for a structure, not necessarily for better design or code. Ask what proportion of the fee reaches the people building it.",
        },
        {
          q: "Can you build for Ramadan or seasonal campaigns?",
          a: "Yes, and it is worth planning early because the calendar is unforgiving. Ramadan and Eid shift each year and compress buying into a short, intense window. A landing page for a seasonal campaign ships in under two weeks, but it needs to exist before the ads start rather than being built while spend is already running.",
        },
        {
          q: "Do you understand the UAE market or just build for it remotely?",
          a: "Honest answer: we build for it remotely, from Beirut, and our deepest market knowledge is Lebanese. What transfers is the technical work, multilingual and right-to-left builds, and designing for expensive paid traffic. What we will not do is claim local ground knowledge we do not have. If a project genuinely needs someone in the room in Dubai, we will say so.",
        },
      ]}
      related={[
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "The home market, and where most of the constraints we design around were learned.",
        },
        {
          href: "/blog/how-much-does-a-custom-website-cost/",
          label: "What a custom website actually costs",
          blurb:
            "Real price ranges and what drives them — useful context if you're comparing against Dubai agency quotes.",
        },
        {
          href: "/blog/website-speed-google-rankings/",
          label: "Why site speed decides rankings",
          blurb:
            "Clicks are expensive in the Gulf. A slow landing page wastes them twice over.",
        },
        {
          href: "/work/burger-shop/",
          label: "A live build, in detail",
          blurb:
            "How one site's ordering flow was designed around what its customers could actually use.",
        },
      ]}
    />
  );
}
