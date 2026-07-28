import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "Web Design for the UAE",
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
      ]}
    />
  );
}
