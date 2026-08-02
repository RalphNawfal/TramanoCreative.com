import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import Spotlight from "@/components/ui/Spotlight";
import type { CaseStudy as CaseStudyData } from "@/lib/case-studies";

/**
 * The case study shell.
 *
 * Built the same way as MarketPage: chrome only, no default copy. A build with
 * nothing specific to say about a decision it made doesn't get a page here —
 * five near-identical write-ups read as filler and get treated as filler.
 *
 * The `facts` block near the top is doing double duty. It gives a scanning
 * reader the shape of the project in four lines, and it gives an answer engine
 * four self-contained sentences it can quote without dragging in surrounding
 * context. Everything below it is narrative, which reads better and cites
 * worse; both are needed.
 */
export default function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <div className="pt-20">
      <Section
        slate={study.slate}
        eyebrow={study.status}
        title={study.title}
        titleAs="h1"
      >
        <p className="max-w-[60ch] text-lg leading-[1.65] text-grey">
          {study.lead}
        </p>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {study.scope.map((item) => (
              <li key={item} className="slate">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* The quotable block. Short, declarative, no back-references. */}
        <Reveal delay={0.15}>
          <div className="mt-16 max-w-[68ch] border-l border-signal pl-7">
            <ul className="space-y-5">
              {study.facts.map((fact) => (
                <li key={fact} className="text-base leading-[1.7] text-grey">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="prose-tramano mt-24 max-w-[68ch]">
          {study.blocks.map((block) => (
            <div key={block.heading}>
              <h2>{block.heading}</h2>
              {block.paras.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section
        slate="The build"
        eyebrow="Screens"
        title="What it looks like."
        className="bg-carbon-lift"
      >
        <div className="space-y-20">
          {study.shots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 0.1}>
              <figure>
                {/*
                  Capped at the asset's own width. Phone-shaped captures are
                  around 350px wide; stretching one to fill a 1152px container
                  upscales it four times over and it reads as a blurry mess.
                  Landscape captures are wider than the container, so this
                  never constrains them.
                */}
                <div
                  className="plate overflow-hidden"
                  style={{ maxWidth: shot.width }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes={`(min-width: 768px) min(68vw, ${shot.width}px), 100vw`}
                    className="h-auto w-full"
                    // The first screenshot is this page's LCP element. Lazy is
                    // right for everything below it and wrong for this one.
                    priority={i === 0}
                  />
                </div>
                <figcaption className="mt-5 max-w-[58ch] text-[15px] leading-[1.65] text-grey">
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section slate="Measured" eyebrow="Results" title="Numbers we can show you.">
        <Spotlight className="grid gap-px overflow-hidden border border-edge bg-edge md:grid-cols-4">
          {study.metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.08}
              className="spotlight-cell relative bg-carbon-lift"
            >
              <div className="relative h-full p-8">
                <p className="font-display text-3xl uppercase leading-none">
                  {metric.value}
                </p>
                <p className="slate mt-4">{metric.label}</p>
                <p className="mt-5 text-[15px] leading-[1.6] text-grey">
                  {metric.note}
                </p>
              </div>
            </Reveal>
          ))}
        </Spotlight>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[68ch] text-[15px] leading-[1.7] text-grey-deep">
            {study.metricsMethod}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-20 border-t border-edge pt-12">
            <h2 className="max-w-[24ch] font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              The next one could be yours.
            </h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-grey">
              Custom websites in Lebanon typically cost between $1,000 and
              $3,000, with focused single-page builds from $500. You get a fixed
              price in US dollars before any work starts.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <CtaButton href="/contact/" size="lg">
                Book the call
              </CtaButton>
              <CtaButton href="/work/" size="lg" variant="quiet">
                Back to the reel
              </CtaButton>
            </div>
            <p className="mt-12 text-base text-grey">
              Also worth reading:{" "}
              <Link
                href="/web-design-lebanon/"
                className="text-white underline underline-offset-4 hover:text-signal"
              >
                web design in Lebanon
              </Link>
              ,{" "}
              <Link
                href="/services/"
                className="text-white underline underline-offset-4 hover:text-signal"
              >
                everything we do
              </Link>
              , or{" "}
              <Link
                href="/faq/"
                className="text-white underline underline-offset-4 hover:text-signal"
              >
                pricing and process
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
