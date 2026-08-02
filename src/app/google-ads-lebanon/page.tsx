import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "Google Ads Management in Lebanon",
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
      facts={[
        "Google Ads management is a fixed monthly fee for a defined scope. Tramano Creative never charges a percentage of ad spend, because that model rewards an agency for spending more of your money.",
        "The client owns the Google Ads account and pays Google directly. The ad budget is separate from the management fee and never passes through us.",
        "Google bills in US dollars, and some Lebanese cards are blocked for international recurring charges. Billing is confirmed before a campaign is built.",
        "Ads produce traffic the day they turn on. First enquiries commonly arrive within one to two weeks; efficiency takes a month or two of cutting terms that don't convert.",
        "Every campaign lands on a page built to answer the ad. Google scores that match, and a better score lowers what you pay per click for the same position.",
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
          a: "Often yes, though it is the step most likely to cause trouble. Google bills in USD and some local cards are blocked for international recurring charges. Fresh-dollar accounts generally work; older lira-linked cards frequently do not. Wise and similar cards are a common fallback, and monthly invoicing is available on larger accounts. We sort billing before building the campaign — there is no point launching one that stops three days later.",
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
        {
          q: "Should I run Google Ads or boost posts on Instagram?",
          a: "They catch people at different moments. Google reaches someone already searching for what you sell — high intent, ready to act. Instagram reaches someone scrolling who was not looking for you at all. If your customers search before buying, start with Google. If your product is visual and impulse-led, social usually wins. Many businesses need both, in that order.",
        },
        {
          q: "Why is my cost per click higher than I expected?",
          a: "Usually competition and landing page relevance. You bid against everyone targeting the same term, and Google discounts the price for advertisers whose page closely matches the ad. A generic homepage as the destination raises what you pay for the same position. Broad match on vague terms is the other common cause — it spends on searches you never intended to buy.",
        },
        {
          q: "Can I run ads without a website?",
          a: "Technically yes, but it wastes most of the budget. Every click has to land somewhere, and sending paid traffic to a social profile or a phone number loses the people who wanted to read before contacting you. A single well-built landing page from $500 usually pays for itself faster than the equivalent spend on more clicks.",
        },
        {
          q: "How do I know if my agency is actually managing the account?",
          a: "Ask for access to the account itself, not a report. You should be the owner, with the agency added as a manager. Once inside, the change history shows what was done and when. An agency that will not give you access, or that only reports impressions and reach rather than cost per enquiry, is telling you something.",
        },
      ]}
      related={[
        {
          href: "/seo-lebanon/",
          label: "SEO in Lebanon",
          blurb:
            "Ads stop the day you stop paying. This is the work that keeps producing after they do.",
        },
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "Every click lands somewhere. A campaign pointed at a weak page burns the budget.",
        },
        {
          href: "/blog/website-speed-google-rankings/",
          label: "Why site speed decides rankings",
          blurb:
            "Google scores how well your landing page matches the ad. Speed is part of that score, and it sets what you pay per click.",
        },
        {
          href: "/blog/how-much-does-a-custom-website-cost/",
          label: "What a custom website actually costs",
          blurb:
            "If the landing page is the bottleneck, this is what fixing it costs.",
        },
      ]}
    />
  );
}
