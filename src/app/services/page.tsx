import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Websites, Google Ads & Search Presence",
  description:
    "Custom websites, Google Ads management, and search presence (SEO + AI search) from Tramano Creative — three things built to hold each other up.",
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

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/services/" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.body,
            provider: { "@id": `${site.url}/#organization` },
          })),
        }}
      />
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
