import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "SEO in Lebanon",
  description:
    "Technical SEO for Lebanese businesses. Fast, crawlable sites, structured data, Arabic and English search, and content built to be quoted by AI answers.",
  alternates: { canonical: "/seo-lebanon/" },
};

export default function Page() {
  return (
    <MarketPage
      slate="Lebanon"
      eyebrow="Search presence"
      title="SEO in Lebanon."
      href="/seo-lebanon/"
      breadcrumbName="SEO in Lebanon"
      serviceName="SEO and search presence"
      areaServed="Lebanon"
      lead="The technical groundwork and the writing that gets a Lebanese business found — on Google, and increasingly inside the AI answers people now ask instead of searching."
      blocks={[
        {
          heading: "The competition here is thinner than you think",
          paras: [
            "In most Lebanese categories, the businesses ranking on page one are not there because someone did excellent SEO. They are there because they have existed for a while and their competitors have done nothing at all. A lot of local sites still have no structured data, no proper page titles, images that were never compressed, and content that describes the company rather than answering anything a customer asked.",
            "That is unusually good news. In a competitive market, getting onto page one is a long campaign. Here, doing the fundamentals properly and consistently is often enough to move past businesses much larger than you within months.",
            "It also means the work is unglamorous. There is no trick. It is fast pages, clear structure, content that answers real questions, and patience.",
          ],
        },
        {
          heading: "Speed is a ranking factor and a Lebanese problem",
          paras: [
            "Google measures how quickly your pages become usable and uses it in ranking. It measures this on mobile, on connections that look like your real visitors' connections — which in Lebanon means it is measuring exactly the scenario most local sites handle worst.",
            "A site built on a heavy theme with a dozen plugins can take five or six seconds to become usable on mobile data. That costs you twice: the ranking signal, and the visitors who give up before it finishes. Fixing it is usually not a matter of installing a caching plugin on top of the problem — it is a build issue.",
            "Every site we ship loads in under a second, because we write the code and only load what the page needs. When we take on SEO for a site we did not build, an honest speed assessment is the first thing we do, and sometimes the recommendation is a rebuild rather than months of optimising around a bad foundation.",
          ],
        },
        {
          heading: "Arabic and English are two different search markets",
          paras: [
            "Your customers do not all search the same way. Some type in English, some in Arabic, and a great many type Arabic using Latin characters. These behave as separate search markets with different volumes and different competition, and a site that only exists in one of them is invisible in the others.",
            "This affects structure, not just translation. Each language version needs its own crawlable URL and correct language markup so Google understands what it is and shows the right one to the right person. Translation plugins that swap text on the same URL generally fail at this, which is why a lot of bilingual Lebanese sites rank in one language only.",
            "We look at where demand actually sits before recommending which languages to build for. Sometimes the Arabic market is the bigger opportunity and nobody has claimed it; sometimes it is not worth the effort for your particular buyer. That is a research question, not an assumption.",
          ],
        },
        {
          heading: "Being quoted by AI is becoming its own channel",
          paras: [
            "A growing share of people asking who to hire never see a page of blue links. They ask ChatGPT, Claude, or Google's AI overview, and they act on the handful of businesses named in the answer. Being in that answer is a different problem from ranking, and most businesses are doing nothing about it.",
            "What helps is being legible to a machine: clean semantic markup, structured data describing what you do and where, content written to answer specific questions directly rather than to hit a keyword density, and consistent details about your business across the web so the model can be confident it is talking about one company.",
            "This is genuinely early, and nobody can promise you a place in an AI answer. But the work that makes you quotable is largely the same work that makes you rank, which means it is worth doing regardless of how the channel develops.",
          ],
        },
        {
          heading: "What we cannot promise",
          paras: [
            "We will not guarantee you a position. Rankings depend on your competitors, on how long your site has been trusted, on links pointing at it, and on Google's decisions — none of which we control. Any agency that guarantees a number-one ranking is either guessing or targeting a phrase nobody searches for.",
            "What we will do is the work we control, and show you what happened. Monthly reporting covers what was published, what changed technically, and how rankings and traffic moved. Search presence compounds slowly — it is the slow one, and it is the one that keeps paying after you stop spending on ads.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Technical foundation",
          body: "Speed, crawlability, semantic markup, structured data on every page, sitemaps, and Core Web Vitals that pass on mobile rather than only on desktop.",
        },
        {
          title: "Content that answers",
          body: "Pages and articles built around the questions your customers actually ask, in the languages they actually search in — not keyword-stuffed filler.",
        },
        {
          title: "AI answer readiness",
          body: "Clean semantics, structured data and consistent business details so answer engines can understand and cite you rather than a competitor.",
        },
      ]}
      faqs={[
        {
          q: "How long does SEO take to work in Lebanon?",
          a: "Expect months, not weeks — but often fewer months than in a competitive international market, because local competition is thinner. Technical fixes can show up within weeks. Ranking for meaningful commercial phrases usually takes three to six months of consistent work, and it keeps compounding after that.",
        },
        {
          q: "How much does SEO cost in Lebanon?",
          a: "Monthly search work is quoted as a fixed fee against a defined scope, and what sets it is how much is genuinely being done — technical fixes, how much content is published each month, and how much reporting you want. Local rates sit well below what an agency in Dubai or London charges for the same work, which is one of the few structural advantages of operating here. You get the number before committing, and there is no minimum contract designed to keep you paying after the useful work is finished.",
        },
        {
          q: "How do I get my business on Google Maps in Lebanon?",
          a: "Through a Google Business Profile, which is free to create and is the single highest-return hour most Lebanese businesses have never spent. You need a business name, a category, a phone number and a location Google can verify — verification is usually by postcard or phone, and the postcard route can be slow here. Once it is live, the profile is what puts you in the map results above the normal listings, and keeping it filled in with photos, hours, services and replies to reviews is most of what decides where you sit in that pack.",
        },
        {
          q: "Should I do SEO or Google Ads first?",
          a: "If you need enquiries this month, ads — they work the day they turn on. SEO is the one that keeps producing after you stop paying, so the usual answer is ads for now and SEO building underneath. If your budget only covers one, we will tell you which suits your situation rather than selling you both.",
        },
        {
          q: "Do I need content in Arabic to rank in Lebanon?",
          a: "It depends who buys from you. Arabic, English and Latin-character Arabic behave as separate search markets with different competition, and in some categories the Arabic side is wide open. We check where the demand actually is before recommending it, rather than assuming.",
        },
        {
          q: "Can you fix the SEO on my existing website?",
          a: "Often yes, and we will start with an honest assessment. If the site is built on a foundation that makes speed and structure impossible to fix properly, we will say that instead of billing you monthly to optimise around it. Sometimes the cheaper answer over two years is a rebuild.",
        },
        {
          q: "What is AI search optimisation?",
          a: "Structuring your site so that ChatGPT, Claude and Google's AI answers can read, understand and cite it — clean semantic markup, structured data, an llms.txt file, and content written to answer real questions directly. More people now ask an assistant for a recommendation than click through ten results, and almost no local businesses are set up for it.",
        },
        {
          q: "Can you guarantee a first-page ranking?",
          a: "No, and neither can anyone else honestly. Rankings depend on competitors, site history, links and Google's own decisions. We do the work we control and report plainly on what moved. A guaranteed ranking is either a guess or a phrase nobody searches.",
        },
      ]}
    />
  );
}
