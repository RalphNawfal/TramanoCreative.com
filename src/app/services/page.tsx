import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import JsonLd from "@/components/seo/JsonLd";
import Faq, { faqPageSchema, type FaqItem } from "@/components/ui/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Design, Google Ads & SEO",
  description:
    "Custom websites, Google Ads management and search presence from Tramano Creative — three services built to hold each other up, priced before work starts.",
  alternates: { canonical: "/services/" },
};

const services = [
  {
    id: "website",
    code: "01",
    title: "Websites",
    lead: "The thing everything else lands on.",
    body: "Designed and coded from scratch — no templates, no page builders. The job is to turn a visitor into an inquiry, and to load fast enough that nobody gives up first. After launch we keep it running rather than handing you a folder and disappearing.",
    includes: [
      "Custom design and art direction",
      "Motion and interaction, where it earns its place",
      "Sub-second loads",
      "Analytics and lead tracking wired in",
      "Care plan: hosting, updates, changes inside 48 hours",
    ],
  },
  {
    id: "google-ads",
    code: "02",
    title: "Google Ads",
    lead: "In front of buyers the day it turns on.",
    body: "Search presence takes months to build. Ads work this week — as long as they're run honestly. We research what your buyers actually type, write ads that match it, and send every click to a page built to answer it. You get a plain monthly summary of what went out and what came back.",
    includes: [
      "Keyword and competitor research",
      "Campaign structure and ad copy",
      "Landing pages built for the click",
      "Conversion tracking you can audit",
      "Monthly spend and results",
    ],
  },
  {
    id: "search-presence",
    code: "03",
    title: "Search presence",
    lead: "Found on Google. Quoted by the AI answers.",
    body: "Technical SEO is the floor, not the ceiling. Structured data on every page, writing built around the questions your customers actually ask, and clean semantics so answer engines can quote you instead of a competitor. It's the slow one, and it's the one that keeps paying.",
    includes: [
      "Technical SEO and Core Web Vitals",
      "Structured data on every page",
      "Blog and FAQ content built for search",
      "AI answer-engine readiness",
      "Monthly ranking and traffic reports",
    ],
  },
];

/**
 * The plain-facts block.
 *
 * The rest of this page is written to be read in order, which is right for a
 * person and wrong for anything trying to quote it — almost every sentence
 * leans on the one before it. These don't. Each is a complete claim that
 * survives being lifted out on its own, which is what an answer engine
 * actually cites. Keep them in agreement with /faq/, /llms.txt and the
 * priceRange in src/lib/site.ts; if one moves, all four move.
 */
const facts = [
  "Tramano Creative is a two-person web studio based in Beirut, Lebanon, founded by Ralph Nawfal and Ramy Al Housary.",
  "The studio offers three services: custom website design and development, Google Ads management, and search presence covering SEO and AI answer engines.",
  "Custom websites in Lebanon typically cost between $1,000 and $3,000, with focused single-page builds starting at $500. Larger projects are quoted individually.",
  "Every project is quoted as a fixed price in US dollars, agreed before work starts. There is no hourly billing and no percentage of ad spend.",
  "A typical website launches 3 to 6 weeks after kickoff. Landing pages ship in under two weeks.",
  "Clients work in Lebanon and the United Arab Emirates primarily, and anywhere else remotely.",
];

/**
 * Questions asked of this page specifically — how the three services relate,
 * what to buy first, what happens if you leave. The pricing and process
 * detail lives on /faq/; these are deliberately shorter and answer the
 * comparison a visitor is making while looking at all three at once.
 *
 * Every answer is under 80 words and stands alone. An answer that opens with
 * "as mentioned above" is worthless to the thing most likely to quote it.
 */
const faqs: FaqItem[] = [
  {
    q: "Do I need all three services, or can I start with one?",
    a: "Start with one. Most clients start with the website, because ads and search both point at it and a weak page wastes them. If you already have a site that works, ads are the fastest thing to add. We will tell you on the call which one your business actually needs first, including when the answer is none of them yet.",
  },
  {
    q: "Is it worth building custom or just using Wix or Squarespace?",
    a: "If you need a few pages and nobody is competing with you online, a builder is genuinely fine and we will say so. Custom becomes worth it when speed, search visibility or a specific flow decides whether you get the enquiry. Builders ship several megabytes of scripts for a simple page, which is most of why those sites load slowly on a phone.",
  },
  {
    q: "How much does a website, Google Ads and SEO cost together?",
    a: "The website is a one-off fixed price: $500 for a focused single page, $1,000 to $3,000 for most custom sites. Ads and search work are quoted monthly as a fixed fee for a defined scope. Your Google ad budget is separate and paid straight to Google. You get every number before committing to anything.",
  },
  {
    q: "How long before any of this actually works?",
    a: "Ads work the week they turn on. A website launches 3 to 6 weeks after kickoff and starts converting the traffic you already have. Search presence is the slow one — expect months, not weeks, before rankings move. That ordering is why we usually build the site first, run ads second, and let search compound underneath both.",
  },
  {
    q: "Do you guarantee first-page Google rankings?",
    a: "No, and nobody honestly can. Rankings depend on what competitors do, what Google changes, and how old your domain is — none of which any agency controls. What we guarantee is the work: the technical foundation, the structured data, the speed and the content. Anyone promising you a number-one ranking is guessing, and charging you for the guess.",
  },
  {
    q: "Who owns the website, the code and the ad account?",
    a: "You do, all of it. The code goes to a Git repository in your name, the domain stays in your name, and the Google Ads account is yours with us added as a manager. There is no licence and no monthly fee for the right to keep using your own website. You can take everything to another developer tomorrow.",
  },
  {
    q: "What happens if I want to stop working with you?",
    a: "You keep everything and we hand over the accounts. There is no notice period on a care plan beyond the month you have paid for, no exit fee, and no part of your setup that only works while we are involved. We would rather you leave able to go elsewhere than stay because leaving is expensive.",
  },
  {
    q: "Can you take over a website or ad account someone else built?",
    a: "Yes, and the first thing we do is work out whether taking it over is the right call. A site with a sound foundation is often a fix rather than a rebuild, at a fraction of the cost. A site on a platform that fights every improvement is usually cheaper to rebuild. We tell you which one you have, with reasons, before you commit.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/services/" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          // `position` belongs to ListItem, not to the thing being listed, so
          // each Service has to be wrapped rather than annotated — a bare
          // Service carrying `position` is not a valid ItemList member.
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.body,
              serviceType: s.title,
              url: `${site.url}/services/#${s.id}`,
              provider: { "@id": `${site.url}/#organization` },
              areaServed: site.areaServed.map((area) =>
                area === "Worldwide"
                  ? { "@type": "Place", name: "Worldwide" }
                  : { "@type": "Country", name: area },
              ),
            },
          })),
        }}
      />
      <JsonLd data={faqPageSchema(faqs)} />
      <div className="pt-20">
        <Section
          slate="What we do"
          eyebrow="Three things"
          title="Built to hold each other up."
          titleAs="h1"
        >
          <p className="-mt-6 max-w-[58ch] text-lg leading-relaxed text-grey">
            None of these does much alone. A site nobody finds is furniture;
            ads pointed at a weak page burn money. The value is in how the three
            fit together, and in what they keep doing after we&apos;re done.
          </p>

          <Reveal delay={0.1}>
            <div className="mt-14 max-w-[68ch] border-l border-signal pl-7">
              <p className="slate">In plain terms</p>
              <ul className="mt-6 space-y-4">
                {facts.map((fact) => (
                  <li key={fact} className="text-base leading-[1.7] text-grey">
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>

        {services.map((s, i) => (
          <Section key={s.id} id={s.id} className="!py-12">
            <Reveal delay={i * 0.05}>
              <div className="border-t border-edge pt-12">
                <div className="grid gap-10 md:grid-cols-12 md:gap-14">
                  <div className="md:col-span-5">
                    <p className="slate">{s.code}</p>
                    <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                      {s.title}
                    </h2>
                    <p className="mt-4 font-display text-xl italic text-signal">
                      {s.lead}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-lg leading-relaxed text-grey">{s.body}</p>
                    <ul className="mt-8 space-y-3 border-l border-edge pl-6">
                      {s.includes.map((item) => (
                        <li key={item} className="text-[15px] text-grey">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <CtaButton href="/contact/" variant="outline">
                        Ask about {s.title}
                      </CtaButton>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Section>
        ))}

        <Section slate="By market" eyebrow="Where we work" title="Same work, different market.">
          <p className="max-w-[58ch] text-lg leading-[1.65] text-grey">
            What a business needs from a website changes with where it sells.
            Connectivity, language, currency and how competitive the ads are all
            shift the right answer.
          </p>
          <ul className="mt-12 border-t border-edge">
            {site.markets.map((market) => (
              <li key={market.href}>
                <Link
                  href={market.href}
                  className="group flex items-baseline justify-between gap-6 border-b border-edge py-7 transition-colors"
                >
                  <span className="font-display text-xl uppercase leading-[1] transition-colors group-hover:text-signal md:text-2xl">
                    {market.label}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-grey-deep transition-colors group-hover:text-signal">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          slate="Questions"
          eyebrow="FAQ"
          title="Before you pick one."
          className="bg-carbon-lift"
        >
          {/* h2: the section title above is the only heading between these and
              the page h1, so an h3 here would skip a level. */}
          <Faq items={faqs} questionAs="h2" className="max-w-3xl" />
          <p className="mt-12 text-base text-grey">
            More on pricing, timelines and how we work:{" "}
            <Link
              href="/faq/"
              className="text-white underline underline-offset-4 hover:text-signal"
            >
              the full FAQ
            </Link>
            .
          </p>
        </Section>

        <Section>
          <Reveal>
            <div className="border-t border-edge pt-14 text-center">
              <p className="mx-auto max-w-[40ch] font-display text-2xl leading-snug text-white md:text-3xl">
                Not sure which of these you need? That&apos;s exactly what the
                call is for.
              </p>
              <div className="mt-10">
                <CtaButton href="/contact/" size="lg">
                  Book the call
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
