import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import JsonLd from "@/components/seo/JsonLd";
import Faq, { faqPageSchema } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "FAQ — Pricing, Timelines & Process",
  description:
    // 160 characters. Google truncates the snippet around here, and the old
    // version ran to 166 — it was losing "Straight answers." mid-phrase.
    "What a custom website costs ($500 to $3,000 for most projects), how long it takes, who owns the code, and how ads and search fit together. Straight answers.",
  alternates: { canonical: "/faq/" },
};

type Faq = { q: string; a: string };

/**
 * Grouped rather than one flat list.
 *
 * The categories exist for search as much as for reading: each one renders an
 * h2, and every question renders an h3, which is the shape Google pulls
 * featured snippets out of. Answers lead with a direct 40–50 word response
 * that stands alone if it's lifted out of the page — detail comes after.
 *
 * Note that FAQPage schema no longer produces rich results for a site like
 * this (Google restricted those to government and health domains in 2023).
 * It's kept below because AI answer engines still parse it, which is the same
 * reason /llms.txt exists.
 */
const faqGroups: { category: string; items: Faq[] }[] = [
  {
    category: "Pricing",
    items: [
      {
        q: "How much does a custom website cost?",
        a: "Most of our projects land between $1,000 and $3,000. Small, focused builds start at $500, and larger or more complex work is quoted individually. Scope is what moves the number: how many pages, how much of the content needs writing, and how much custom design and motion is involved. You get a fixed price after a short call — no hourly meter, no surprise invoice at the end.",
      },
      {
        q: "What is the cheapest website you will build?",
        a: "$500, and it buys one genuinely good page rather than a stripped-down version of a bigger site: custom design, copy that works, sub-second loading, one clear action. It does not include multiple pages, a blog, a content system you log into, or ongoing search work. If you need those, you are in the $1,000–$3,000 range — and we would rather say so on the call than sell you the cheap option twice.",
      },
      {
        q: "Why are you cheaper than other agencies?",
        a: "Because there is less of us to pay for. Two people, no office lease, no account managers, nobody on commission. An agency quoting three times as much is not necessarily overcharging — they have payroll we do not. The trade-off: we take few projects at a time, and if you need a department of twelve, we are the wrong studio. What you get instead is the people who understood your business on the call writing the code.",
      },
      {
        q: "How much does SEO or Google Ads management cost per month?",
        a: "A fixed monthly fee for a defined scope — never a percentage of your ad spend, because that model quietly rewards an agency for spending more of your money. What sets the fee is how much is actually being done: campaigns running, content published, reporting wanted. You get the number before committing, and your ad budget is separate and paid straight to Google.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Standard terms are half before we start and half before launch, so you are never paying for work that has not happened yet. On larger projects we split it across milestones instead. Everything is invoiced in US dollars at the price agreed up front, and bank transfer, Wise and OMT all work depending on where you are. Third-party costs like domains, hosting and stock licences are billed at cost — we do not mark them up.",
      },
    ],
  },
  {
    category: "Process and timeline",
    items: [
      {
        q: "How long does a website take to build?",
        a: "A typical site launches in 3–6 weeks from kickoff. Week one is discovery and design direction; you see real, working pages by week two. Landing pages can ship in under two weeks. Timelines are agreed up front and we hit them — launch dates don't slip because we control the whole stack.",
      },
      {
        q: "What does the onboarding process look like?",
        a: "Three stages. A 30–45 minute call to understand the business and what the site has to do. A design direction you sign off before a line of code is written. Then the build, with a live preview link you can open at any moment. You get the launch date and the fixed price at the end of stage one. No long questionnaire before we will speak to you, and no discovery phase billed separately.",
      },
      {
        q: "What do you need from me to get started?",
        a: "Less than you would expect, and we tell you exactly what on the first call. Usually your logo and any brand assets, a rough sense of the pages you need, and one person who can give feedback within a few days. Content is the usual bottleneck — if the copy is not written, we write it, priced into the quote rather than left as a surprise blocker halfway through.",
      },
      {
        q: "Who actually does the work?",
        a: "The two people you talk to: Ralph Nawfal and Ramy Al Housary. We deliberately keep the client roster small — no account managers, no hand-offs, no departments. The person on your call is the person building your site and running your campaigns.",
      },
      {
        q: "What happens after launch?",
        a: "You can take the keys and go — everything is documented and you own it all. Most clients stay on a care plan: we handle hosting, updates, monitoring, and content changes (within 48 hours), and keep improving what the numbers say needs improving.",
      },
    ],
  },
  {
    category: "How it is built",
    items: [
      {
        q: "Do you use templates or page builders like WordPress or Wix?",
        a: "No. Every site is designed from zero and built in modern code (React/Next.js). That's why our sites load in under a second, score green on Core Web Vitals, and look like nothing else in your industry. You own all of it — code, content, and domain.",
      },
      {
        q: "What technology do you build on?",
        a: "React and Next.js, written by hand and exported as static files — the same stack this site runs on. No WordPress, no page builders, no plugin layer to break or get exploited. Anything you need to edit yourself goes into a headless content system, so you can change copy and images without touching code. Static files also serve from anywhere in the world at once, which is most of why they load fast.",
      },
      {
        q: "Do I own the website and the code?",
        a: "Yes — all of it. The code, the design files, the content, the domain, and every account involved. Handover goes through a Git repository in your name, and the site can be hosted wherever you like. No licence, no monthly fee for the right to use your own website, nothing stopping you taking it to another developer tomorrow. Worth checking with anyone you hire: a lot of agency work is built so that leaving means starting over.",
      },
      {
        q: "Can you redesign or fix my existing website?",
        a: "Yes, and the first thing we do is work out whether that is the right call. A site with a sound foundation where the real problem is design, speed or structure is a fix, at a fraction of a rebuild. A site on a stack where every improvement fights the platform is usually cheaper to rebuild than repair. We tell you which one you have, with reasons, before you commit to either.",
      },
      {
        q: "Do you build online stores?",
        a: "Yes. Small catalogues we build custom; larger ones go on Shopify with the storefront designed properly rather than a skinned theme. Which way depends on how many products you have and how often they change, not on which platform we prefer. Worth raising early: taking payments is the genuinely hard part of e-commerce in Lebanon, so we establish what you can get approved for before designing the checkout.",
      },
      {
        q: "Do you handle hosting and domains?",
        a: "Either way, whichever you prefer. Most clients take a care plan where we handle hosting, the domain, SSL, updates, monitoring and content changes inside 48 hours. Others would rather hold the accounts themselves, and we set everything up in their name and hand it over. Hosting a static site like the ones we build is cheap — often under $20 a month, sometimes nothing at all — and whatever it costs is billed at cost.",
      },
    ],
  },
  {
    category: "Getting found",
    items: [
      {
        q: "Will my website rank on Google?",
        a: "SEO is engineered in from day one, not bolted on: semantic HTML, structured data on every page, sub-second load times, sitemaps, and content architecture around what your customers search for. Rankings compound over months — our Search Presence work keeps publishing the content that earns them.",
      },
      {
        q: "How do the website, SEO and Google Ads work together?",
        a: "They cover each other's weaknesses. Google Ads produces traffic immediately and stops the day you stop paying. Search presence takes months, then compounds for years. Neither counts for much if the page people land on is slow or unconvincing, which is why the site gets built first. Run together, the ads pay twice: the terms that produce enquiries tell us exactly what content is worth writing.",
      },
      {
        q: "Why send Google Ads traffic to a landing page instead of my homepage?",
        a: "A homepage has to speak to everyone, so it speaks to nobody in particular. Someone who clicked an ad for one service arrived with one question, and a page answering exactly that — navigation stripped back, one obvious next step — holds them far better than a general introduction. Google notices too: it scores how closely the landing page matches the ad, and a better score means you pay less per click.",
      },
      {
        q: "How do you track leads and prove what is working?",
        a: "Analytics, form tracking and call tracking are wired up before launch, not bolted on afterwards. Monthly reporting tells you what was spent, where the enquiries came from, and which search terms produced them. You own every account involved, so nothing disappears if you stop working with us. If something is not working we say so plainly — a dashboard full of impressions and reach is not a result, and we do not present it as one.",
      },
      {
        q: "What does 'AI search optimization' mean?",
        a: "More people now ask ChatGPT, Claude, and Google's AI for recommendations instead of clicking ten blue links. We structure your site so AI systems can read, understand, and cite it — clean semantics, llms.txt files, FAQ schema, and content written to answer real questions. When someone asks an AI who to work with, we want your business in the answer.",
      },
      {
        q: "Do you manage Google Ads?",
        a: "Yes. Search presence compounds over months; Google Ads works immediately — if it's built honestly. We research the terms your buyers actually type, write matching ads, and land every click on a page built to convert it. You get clear monthly reporting: what was spent, what came back. No inflated dashboards.",
      },
    ],
  },
  {
    category: "Working with us",
    items: [
      {
        q: "Do you work with businesses in Lebanon?",
        a: "Yes — we're based in Beirut and Lebanon is our primary market. That means we understand the things that actually matter here: building for connections that vary, quoting in USD so the price you agree is the price you pay, and handling Arabic, French and English properly rather than through a translation plugin.",
      },
      {
        q: "Do you build websites in Arabic?",
        a: "Yes, and properly. Arabic isn't a text swap — right-to-left means the whole layout mirrors, including navigation, buttons and reading order, and the typography has to hold up in both scripts. We build bilingual and trilingual sites where each language version has its own URL so it can rank in search independently.",
      },
      {
        q: "Do you work with clients in the UAE and the Gulf?",
        a: "Yes. We're one hour behind Dubai, so you get a full working-day overlap instead of the overnight lag you'd have with a European or American studio. Costs are lower than a comparable Dubai agency because you're paying for two people doing the work, not for an office and an account manager.",
      },
      {
        q: "Do you work with businesses outside your area?",
        a: "Yes — the whole process runs remotely: video calls, a shared project channel, and live preview links at every stage. Our experience was built serving Canadian businesses, and we work with clients wherever they are.",
      },
      {
        q: "Why is there a 'Built by Tramano Creative' link in your clients' footers?",
        a: "It's our signature — and our accountability. Every site we ship advertises us, which means every site has to be good enough to be our portfolio. Clients keep it because it costs nothing and signals their site was professionally engineered. (If you found us through one: that's exactly how this is supposed to work.)",
      },
    ],
  },
];

/**
 * Q-numbers run continuously across the categories rather than restarting, so
 * a question keeps the same number however the groups are reordered later.
 */
const groupStart = faqGroups.map((_, i) =>
  faqGroups.slice(0, i).reduce((total, group) => total + group.items.length, 0),
);

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq/" }]} />
      <JsonLd data={faqPageSchema(faqGroups.flatMap((group) => group.items))} />
      <div className="pt-20">
        <Section
          slate="Straight answers"
          eyebrow="FAQ"
          title="The questions everyone asks."
          titleAs="h1"
        >
          <div className="max-w-3xl">
            {faqGroups.map((group, g) => (
              <div key={group.category} className="mt-20 first:mt-0">
                <Reveal>
                  <h2 className="font-display text-2xl uppercase leading-none md:text-3xl">
                    {group.category}
                  </h2>
                </Reveal>
                <Faq
                  items={group.items}
                  startIndex={groupStart[g]}
                  className="mt-8"
                />
              </div>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-20">
              <p className="text-base text-grey">
                Something we didn&apos;t cover?
              </p>
              <div className="mt-6">
                <CtaButton href="/contact/">Ask us directly</CtaButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
