import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Custom Websites, SEO & Care Plans",
  description:
    "Custom web design and development, technical SEO and content systems, and ongoing care plans. See what Tramano Creative can build for your business.",
  alternates: { canonical: "/services/" },
};

const services = [
  {
    id: "signature-websites",
    code: "SYS 01",
    title: "Signature Websites",
    lead: "Your flagship. Designed and built from zero.",
    body: "A custom-designed, custom-built website with cinematic motion, optional 3D, and a structure engineered around one goal: turning visitors into inquiries. No templates, no page builders — code we own end to end, tuned for speed scores that search engines reward.",
    includes: [
      "Custom design & art direction",
      "3D / motion interactive experiences",
      "Conversion-focused copy & structure",
      "Sub-second load performance",
      "Analytics & lead tracking wired in",
    ],
  },
  {
    id: "seo-content",
    code: "SYS 02",
    title: "SEO & Content Systems",
    lead: "Built to be found — by Google and by AI.",
    body: "Technical SEO is table stakes; we go further. Structured data on every page, content architecture around the questions your customers actually ask, and AI-crawler readiness (llms.txt, clean semantics) so answer engines cite you, not your competitor.",
    includes: [
      "Technical SEO & Core Web Vitals",
      "Structured data (JSON-LD) everywhere",
      "Blog & FAQ content engineered for search",
      "AI answer-engine optimization",
      "Monthly ranking & traffic reports",
    ],
  },
  {
    id: "care-orbit",
    code: "SYS 03",
    title: "Care & Orbit Plans",
    lead: "Launch is the beginning, not the end.",
    body: "Websites decay without attention. Orbit plans keep yours improving: updates, uptime and performance monitoring, new content, and conversion experiments — with a real human answering when you need a change made yesterday.",
    includes: [
      "Hosting, updates & security",
      "Performance monitoring",
      "Content updates within 48h",
      "Quarterly conversion experiments",
      "Priority support channel",
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
        <Section eyebrow="Service manifest" title="Every system, justified." grid>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Three ways we work. Each one exists because it moves a number you
            care about — traffic, leads, or revenue. Nothing decorative.
          </p>
        </Section>

        {services.map((s, i) => (
          <Section key={s.id} id={s.id} className="!py-14">
            <Reveal delay={i * 0.05}>
              <div className="rounded-3xl border border-line/70 bg-surface/60 p-8 backdrop-blur-sm md:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                  {s.code}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-2 font-display text-lg text-cyan-bright">
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
                        <span aria-hidden className="mt-0.5 text-cyan">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <GlowButton href="/contact/">
                    Ask about {s.title}
                  </GlowButton>
                </div>
              </div>
            </Reveal>
          </Section>
        ))}
      </div>
    </>
  );
}
