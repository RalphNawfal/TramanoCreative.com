import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "Google Ads in Lebanon",
  description:
    "Google Ads for Lebanese businesses. Campaigns built on the terms buyers actually search, landing pages built to answer them, and reporting you can audit.",
  alternates: { canonical: "/google-ads-lebanon/" },
};

export default function Page() {
  return (
    <MarketPage
      slate="Lebanon"
      eyebrow="Google Ads"
      title="Google Ads in Lebanon."
      href="/google-ads-lebanon/"
      breadcrumbName="Google Ads in Lebanon"
      serviceName="Google Ads management"
      areaServed="Lebanon"
      lead="Search ads for Lebanese businesses, built around what your buyers actually type and pointed at pages built to answer them. Small budgets that work beat big ones that look busy."
      blocks={[
        {
          heading: "Lebanon is a cheap market to advertise in — which cuts both ways",
          paras: [
            "Cost per click here is a fraction of what the same term costs in the Gulf, Europe or North America. For most local service categories you are competing against a handful of advertisers rather than dozens, and plenty of your competitors are not running search ads at all. A budget that would be pointless in Dubai can genuinely produce enquiries in Beirut.",
            "The flip side is that cheap clicks make waste easy to hide. When traffic costs very little, a badly structured campaign can run for months, spend the budget, produce a healthy-looking click count, and generate almost no business — and nobody notices because the dashboard is green. We have picked up accounts where most of the spend was going to search terms that were never going to buy anything.",
            "Because clicks are cheap, the leverage is almost entirely in targeting and in the page the click lands on, not in bidding cleverness. That is where we put the work.",
          ],
        },
        {
          heading: "The landing page decides whether the ad was worth running",
          paras: [
            "The most common failure we see is not the campaign — it is sending paid traffic to a homepage. Someone searches for a specific thing, clicks an ad promising that thing, and arrives on a general page about your company where they have to work out where to go next. Most of them leave, and you paid for every one.",
            "Because we build sites as well as run ads, the page and the campaign get designed together. Each ad group points at a page that answers that specific search, with one obvious action on it. This is the single biggest difference between advertising that returns money and advertising that consumes it, and it is the reason we would rather do both than run ads onto a site we cannot change.",
            "If your existing site cannot support that, we will say so before taking your money — sometimes the honest recommendation is to fix the site first and hold the ad budget until it can convert.",
          ],
        },
        {
          heading: "How the money works",
          paras: [
            "Your ad budget is paid by you directly to Google, on your own card, in your own account. You own the account, you can see every figure in it, and if you stop working with us you keep all of it including the history. We never take a cut of ad spend, because that creates an incentive to spend more rather than to spend well.",
            "Our fee is separate and is for managing the campaigns. Payment cards issued by Lebanese banks can be awkward with Google Ads billing depending on your bank and limits — we have dealt with this before and will help you get billing working, whether that is a particular card, a foreign card, or a prepaid arrangement.",
            "Reporting is monthly and plain: what was spent, what came in, which search terms produced it, and what we changed. No dashboard screenshots inflated with impression counts that mean nothing.",
          ],
        },
        {
          heading: "What we do in the first month",
          paras: [
            "We start by finding out what people actually type — which is often not the phrase you would use for your own product. That means keyword and competitor research, and in a bilingual market it means checking demand in Arabic and in Latin-character Arabic as well as English, because the same customer searches differently depending on the moment.",
            "Then structure: tight ad groups so each ad matches its search closely, negative keywords to stop paying for the searches you do not want, and conversion tracking wired properly so we can tell an enquiry from a click. A lot of accounts we inherit are not tracking conversions correctly at all, which means nobody could have known what was working.",
            "The first month is deliberately about learning what converts before scaling spend. We would rather show you a small, honest number that is real than a large one that isn't.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Research first",
          body: "Keyword and competitor research in English and Arabic, so the campaign is built on how your buyers search rather than how you describe yourself.",
        },
        {
          title: "Pages that answer the ad",
          body: "Every ad group points at a page built for that specific search, with one obvious next action. We build them, so they are never an afterthought.",
        },
        {
          title: "Numbers you can audit",
          body: "Conversion tracking set up properly, your own account and card, and a plain monthly summary of spend, enquiries and what changed.",
        },
      ]}
      faqs={[
        {
          q: "How much should I spend on Google Ads in Lebanon?",
          a: "Clicks here are cheap compared to the Gulf or Europe, so meaningful testing is possible on a modest budget — many local service businesses learn a lot from a few hundred dollars a month. The right number depends on how many people search for what you sell and what a customer is worth to you, and we will work that out with you on the call rather than quote a figure blind.",
        },
        {
          q: "Do you take a percentage of ad spend?",
          a: "No. Our fee is fixed and separate from your budget. Charging a percentage rewards us for spending more of your money, which is the wrong incentive. Your ad budget goes straight from you to Google.",
        },
        {
          q: "Is my ad budget included in your management fee?",
          a: "No — they are two separate things, and it matters that you can see both. Your ad budget goes directly from you to Google on your own billing, so you can log in and see every dollar of it. Our management fee is a fixed monthly amount covering campaign build, keyword and competitor research, ad copy, conversion tracking, landing pages and reporting. Nobody sits between you and Google, and there is no markup hidden inside the spend.",
        },
        {
          q: "Can I pay for Google Ads with a Lebanese bank card?",
          a: "Often yes, though it is the step most likely to cause trouble. Google bills in USD and some local cards are declined or blocked for international recurring charges, so the practical answer depends on your bank and your card. Fresh-dollar accounts generally work; older lira-linked cards frequently do not. Wise and similar cards are a common fallback, and monthly invoicing is available on larger accounts. We sort billing out before building the campaign, because there is no point launching one that stops three days later.",
        },
        {
          q: "Who owns the Google Ads account?",
          a: "You do. It is set up under your billing, you have full access, and if we stop working together you keep the account and all its history. We will not hold an account hostage — that practice is common and it is indefensible.",
        },
        {
          q: "Can you run ads in Arabic?",
          a: "Yes, and it usually matters. People search for the same thing in Arabic, in English and in Latin-character Arabic depending on the context, and demand is often distributed differently than clients expect. We research all of it before deciding where the budget goes.",
        },
        {
          q: "Will ads work if my current website is weak?",
          a: "Usually not well, and we will tell you rather than take the work. Paid traffic landing on a slow or unfocused page is money spent to lose people. If that is the situation, the honest sequence is to fix the site first and start ads when there is something worth sending clicks to.",
        },
        {
          q: "How quickly do Google Ads produce results?",
          a: "Ads start showing the day they go live, which is the main reason to run them while search rankings are still building. First enquiries often arrive in the first week or two. Getting the account genuinely efficient takes a month or two of learning which terms convert and cutting the ones that don't.",
        },
      ]}
    />
  );
}
