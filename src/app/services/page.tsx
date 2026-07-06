import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Websites, Google Ads & Search Presence",
  description:
    "Custom websites, Google Ads management, and search presence (SEO + AI search) — three tools engineered to work together. See what Tramano Creative builds.",
  alternates: { canonical: "/services/" },
};

const services = [
  {
    id: "website",
    code: "TOOL 01",
    title: "Website",
    lead: "The foundation everything else lands on.",
    body: "A custom-designed, custom-built website — no templates, no page builders. Engineered around one goal: turning visitors into inquiries, with speed scores search engines reward. After launch, a care plan keeps it improving instead of decaying: hosting, updates, monitoring, and content changes within 48 hours.",
    includes: [
      "Custom design & art direction",
      "Interactive 3D / motion when it serves the story",
      "Sub-second load performance",
      "Analytics & lead tracking wired in",
      "Care plan: hosting, updates, changes within 48h",
    ],
  },
  {
    id: "google-ads",
    code: "TOOL 02",
    title: "Google Ads",
    lead: "In front of buyers the day it turns on.",
    body: "Search presence compounds, but it takes months. Google Ads works now — if it's built honestly. We research the terms your buyers actually type, write ads that match, and land every click on a page built to convert it. Clear monthly reporting on what was spent and what came back.",
    includes: [
      "Keyword & competitor research",
      "Campaign structure & ad copy",
      "Landing pages built to convert clicks",
      "Conversion tracking, honestly measured",
      "Monthly spend & results reports",
    ],
  },
  {
    id: "search-presence",
    code: "TOOL 03",
    title: "Search Presence",
    lead: "Found on Google. Cited by AI.",
    body: "Technical SEO is table stakes; we go further. Structured data on every page, content built around the questions your customers actually ask, and AI-search readiness — llms.txt, clean semantics — so answer engines cite you, not your competitor. This is the asset that compounds month over month.",
    includes: [
      "Technical SEO & Core Web Vitals",
      "Structured data (JSON-LD) everywhere",
      "Blog & FAQ content engineered for search",
      "AI answer-engine optimization",
      "Monthly ranking & traffic reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.body,
            provider: { "@type": "Organization", name: site.name, url: site.url },
          })),
        }}
      />
      <div className="pt-16">
        <Section eyebrow="Services" title="Three tools. One machine." grid>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            None of these is the product on its own. A website, ads, and search
            presence are tools — the value is in how they work together, and in
            what they keep producing after the work is done.
          </p>
        </Section>

        {services.map((s, i) => (
          <Section key={s.id} id={s.id} className="!py-14">
            <Reveal delay={i * 0.05}>
              <div className="rounded-3xl border border-line/70 bg-surface/60 p-8 backdrop-blur-sm md:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
                  {s.code}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-2 font-display text-lg italic text-gold-bright">
                  {s.lead}
                </p>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <p className="text-base leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                  <ul className="space-y-2.5">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink-muted"
                      >
                        <span aria-hidden className="mt-0.5 text-gold">
                          ◆
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <GlowButton href="/contact/">Ask about {s.title}</GlowButton>
                </div>
              </div>
            </Reveal>
          </Section>
        ))}

        <Section>
          <Reveal>
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
                Not sure which you need? That&apos;s what the call is for.
              </p>
              <div className="mt-6">
                <GlowButton href="/contact/" size="lg">
                  Book the call
                </GlowButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
