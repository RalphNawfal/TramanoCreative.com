import type { Metadata } from "next";
import SpaceBackdrop from "@/components/three/SpaceBackdrop";
import HeroOrb from "@/components/three/HeroOrb";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import GlowButton from "@/components/ui/GlowButton";
import StorySequence from "@/components/home/StorySequence";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Websites, Google Ads & Search Presence`,
  description: site.description,
  alternates: { canonical: "/" },
};

const story = [
  {
    code: "01 · HOW YOU GOT HERE",
    title: "You found us in a footer.",
    body: "Chances are you arrived from the bottom of a website that felt different — faster, sharper, more considered than the rest. That link is our signature, and our accountability: every site we ship has to be good enough to be our portfolio. What you saw is what we'd build for you.",
    stat: { value: "<1s", label: "load time, every site we ship" },
  },
  {
    code: "02 · WHAT WE ACTUALLY DO",
    title: "A website is a tool. So are ads.",
    body: "A beautiful site that nobody finds is furniture. Ads that land on a weak site burn money. We build the pieces so they work together — design that earns trust, Google Ads that put you in front of buyers, and a search presence that compounds. Assets that keep producing long after launch.",
    stat: { value: "100%", label: "custom code — zero templates" },
  },
  {
    code: "03 · HOW WE WORK",
    title: "Questions first. Recommendations second.",
    body: "We take on a small number of clients at a time, so the people you talk to are the people doing the work — no account managers, no hand-offs. It starts with an honest 30–45 minute call about your business. If we're not the right fit, we'll tell you that too.",
    stat: { value: "3–6", label: "weeks from kickoff to launch" },
  },
];

const pillars = [
  {
    title: "Website",
    body: "Custom-designed, custom-built, tuned for sub-second loads and conversion. Care plans keep it improving after launch — hosting, updates, and changes within 48 hours.",
  },
  {
    title: "Google Ads",
    body: "Campaigns built on the search terms your buyers actually use, landing on pages engineered to convert — so every click has a job to do.",
  },
  {
    title: "Search Presence",
    body: "Technical SEO, structured data, and content that ranks — on Google and in AI answers. Visibility that compounds month over month.",
  },
];

export default function Home() {
  return (
    <>
      <SpaceBackdrop />
      <SmoothScroll />

      {/* Hero */}
      <section className="scanlines relative flex min-h-svh items-center overflow-hidden">
        <HeroOrb className="absolute inset-y-0 right-0 w-full opacity-40 md:left-auto md:w-[55%] md:opacity-100" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-gold glow-text">
                Tramano Creative
              </p>
            </Reveal>
            <SplitReveal
              text="A website is a tool. We build the whole machine."
              accent={["machine"]}
              kinetic
              delay={0.2}
              className="mt-6 font-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold leading-[1.02] tracking-tight"
            />
            <Reveal delay={0.9}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                Design, Google Ads, and search presence — engineered to work
                together, and to keep working long after launch. If you found
                us in the footer of a site you liked, that&apos;s our work.
              </p>
            </Reveal>
            <Reveal delay={1.05}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlowButton href="/contact/" size="lg">
                  Book the call
                </GlowButton>
                <GlowButton href="/work/" size="lg" variant="outline">
                  See the work
                </GlowButton>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
          Keep reading
        </div>
      </section>

      {/* Story choreography */}
      <StorySequence logs={story} />

      {/* Pillars */}
      <Section eyebrow="What we build" title="Three tools. One machine." grid>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="group h-full rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_8px_40px_rgba(212,175,92,0.12)]">
                <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gold-bright">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
            Every recommendation connects back to one outcome.
          </p>
          <div className="mt-6">
            <GlowButton href="/services/" variant="outline">
              See how each works
            </GlowButton>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-line/70 bg-surface/60 px-7 py-16 text-center backdrop-blur-sm md:py-24">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 90% at 50% 110%, rgba(212,175,92,0.14), transparent 65%)",
            }}
          />
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
              No pitch. No pressure.
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              One honest call. Then you decide.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
              Thirty to forty-five minutes about your business — what&apos;s
              working, what isn&apos;t, and what we&apos;d do about it. If
              there&apos;s a fit, you get a clear recommendation with a fixed
              price. If not, we&apos;ll say so.
            </p>
            <div className="mt-10">
              <GlowButton href="/contact/" size="lg">
                Book the call
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
