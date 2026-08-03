import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import Spotlight from "@/components/ui/Spotlight";
import Faq from "@/components/ui/Faq";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import { isScheduledHref } from "@/lib/blog";
import { site } from "@/lib/site";

export type MarketFaq = { q: string; a: string };
export type MarketBlock = { heading: string; paras: string[] };

/**
 * A contextual link out of this page, with a reason to click.
 *
 * The market pages used to connect to the rest of the site almost entirely
 * through the footer, which distributes link equity evenly and tells a crawler
 * nothing about topical relationships. These are in-content, described, and
 * chosen per page.
 */
export type MarketLink = { href: string; label: string; blurb: string };

export type MarketPageProps = {
  slate: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Service name for schema, e.g. "Web design" */
  serviceName: string;
  /** Country the service is offered in */
  areaServed: string;
  href: string;
  breadcrumbName: string;
  blocks: MarketBlock[];
  /** Three short "what you get" columns */
  deliverables: { title: string; body: string }[];
  faqs: MarketFaq[];
  /**
   * Short declarative statements about this market, each complete on its own.
   *
   * The `blocks` prose above is written to be read in order, which is right
   * for a person and useless to anything trying to quote it — nearly every
   * sentence leans on the one before. These don't. No pronouns pointing
   * backwards, no "that's why", no "the other one". An answer engine lifts a
   * passage whole, and this is the passage it can lift.
   */
  facts?: string[];
  /** Sibling market pages and topically relevant posts, linked in-content. */
  related?: MarketLink[];
};

/**
 * Shared shell for the market pages.
 *
 * Only the *chrome* is shared — every page passes its own genuinely
 * market-specific prose. Near-identical location pages are treated as doorway
 * pages and demoted, so this component deliberately has no default copy to
 * fall back on: if a page has nothing real to say, it can't be built.
 */
export default function MarketPage({
  slate,
  eyebrow,
  title,
  lead,
  serviceName,
  areaServed,
  href,
  breadcrumbName,
  blocks,
  deliverables,
  faqs,
  facts = [],
  related = [],
}: MarketPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ name: breadcrumbName, href }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `${serviceName} — ${areaServed}`,
              description: lead,
              serviceType: serviceName,
              provider: { "@id": `${site.url}/#organization` },
              areaServed: { "@type": "Country", name: areaServed },
              url: `${site.url}${href}`,
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />

      <div className="pt-20">
        <Section slate={slate} eyebrow={eyebrow} title={title} titleAs="h1">
          <p className="max-w-[60ch] text-lg leading-[1.65] text-grey">{lead}</p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <CtaButton href="/contact/" size="lg">
              Book the call
            </CtaButton>
            <CtaButton href="/work/" size="lg" variant="quiet">
              See the work
            </CtaButton>
          </div>

          {facts.length > 0 && (
            <Reveal delay={0.1}>
              <div className="mt-16 max-w-[68ch] border-l border-signal pl-7">
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
          )}

          <div className="prose-tramano mt-24 max-w-[68ch]">
            {blocks.map((block) => (
              <div key={block.heading}>
                <h2>{block.heading}</h2>
                {block.paras.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </Section>

        <Section slate="What you get" eyebrow="Included" title="What the work covers.">
          <Spotlight className="grid gap-px overflow-hidden border border-edge bg-edge md:grid-cols-3">
            {deliverables.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 0.1}
                className="spotlight-cell relative bg-carbon-lift"
              >
                <div className="relative h-full p-8 md:p-10">
                  <span className="slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-xl uppercase leading-[1]">
                    {d.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.65] text-grey">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </Spotlight>
        </Section>

        <Section slate="Questions" eyebrow="FAQ" title={`${areaServed}, specifically.`}>
          {/* h2 rather than h3: the section heading above is itself an h2, so
              there is no category level between it and the questions here. */}
          <Faq items={faqs} questionAs="h2" className="max-w-3xl" />

          {/* A related link to an unpublished post is a 404. Drop it until the
              post's date arrives; the next build brings it back. */}
          {related.filter((r) => !isScheduledHref(r.href)).length > 0 && (
            <div className="mt-16 max-w-3xl border-t border-edge pt-10">
              <h2 className="font-display text-xl uppercase leading-none">
                Related
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-2">
                {related.filter((r) => !isScheduledHref(r.href)).map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group block border-l border-edge pl-5 transition-colors hover:border-signal"
                    >
                      <span className="font-medium leading-snug transition-colors group-hover:text-signal">
                        {r.label}
                      </span>
                      <span className="mt-2 block text-[15px] leading-[1.65] text-grey">
                        {r.blurb}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-16 border-t border-edge pt-10">
            <p className="text-base text-grey">
              Also worth reading:{" "}
              <Link
                href="/services/"
                className="text-white underline underline-offset-4 hover:text-signal"
              >
                everything we do
              </Link>
              ,{" "}
              <Link
                href="/faq/"
                className="text-white underline underline-offset-4 hover:text-signal"
              >
                pricing and process
              </Link>
              , or{" "}
              <Link
                href="/work/"
                className="text-white underline underline-offset-4 hover:text-signal"
              >
                the builds themselves
              </Link>
              .
            </p>
          </div>
        </Section>
      </div>
    </>
  );
}
