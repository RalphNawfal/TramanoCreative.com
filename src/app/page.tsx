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
  title: `${site.name} — Web Development Agency | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const missionLog = [
  {
    code: "LOG 001 // ORIGIN",
    title: "You followed a signal.",
    body: "Chances are you arrived here from the footer of a website that felt different — faster, sharper, more alive than the rest of the internet. That wasn't an accident. Every site we launch carries our mark, and every mark is a working proof: this is what we'd build for you.",
    stat: { value: "<1s", label: "load time, every site we ship" },
  },
  {
    code: "LOG 002 // MISSION",
    title: "Most websites are furniture. Ours are engines.",
    body: "A website that just sits there is a sunk cost. We engineer sites the way you'd engineer a spacecraft — every system justified, every gram of weight earned. Speed that search engines reward. Stories that visitors remember. Funnels that turn attention into booked calls.",
    stat: { value: "100%", label: "custom code — zero templates" },
  },
  {
    code: "LOG 003 // METHOD",
    title: "Built in the open, launched in weeks.",
    body: "Discovery, design, build, launch, orbit. You see progress at every stage — real pages, not mockups that die in a slide deck. After launch we stay in orbit: performance monitoring, content, and SEO that compounds month over month.",
    stat: { value: "3–6", label: "weeks from kickoff to launch" },
  },
];

const services = [
  {
    title: "Signature Websites",
    body: "Cinematic, conversion-focused sites with 3D and motion — built to be the best-looking thing in your industry.",
  },
  {
    title: "SEO & Content Systems",
    body: "Technical SEO, structured data, and blogs engineered for both Google and AI answer engines.",
  },
  {
    title: "Care & Orbit Plans",
    body: "Hosting, updates, experiments, and reporting. Your site keeps improving after launch, not decaying.",
  },
];

export default function Home() {
  return (
    <>
      <SpaceBackdrop />
      <SmoothScroll />

      {/* Hero */}
      <section className="scanlines relative flex min-h-svh items-center overflow-hidden">
        {/* Orb: right half on desktop, dimmed backdrop on mobile */}
        <HeroOrb className="absolute inset-y-0 right-0 w-full opacity-40 md:left-auto md:w-[55%] md:opacity-100" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan glow-text">
                Transmission 001 · Incoming
              </p>
            </Reveal>
            <SplitReveal
              text="Websites engineered like spacecraft."
              accent={["spacecraft"]}
              kinetic
              delay={0.2}
              className="mt-6 font-display text-[clamp(2.9rem,8.5vw,7.5rem)] font-bold leading-[0.98] tracking-tight"
            />
            <Reveal delay={0.9}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                We&apos;re Tramano Creative — a web development agency building
                fast, cinematic, conversion-obsessed websites. If you found us
                in the footer of a site you loved, you already know what we can
                do.
              </p>
            </Reveal>
            <Reveal delay={1.05}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlowButton href="/contact/" size="lg">
                  Start a project
                </GlowButton>
                <GlowButton href="/work/" size="lg" variant="outline">
                  See the fleet
                </GlowButton>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
          Scroll to descend
        </div>
      </section>

      {/* Pinned mission-log choreography */}
      <StorySequence logs={missionLog} />

      {/* Services teaser */}
      <Section eyebrow="Systems onboard" title="What we build" grid>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="group h-full rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_8px_40px_rgba(34,211,238,0.12)]">
                <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-cyan-bright">
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
          <div className="mt-10">
            <GlowButton href="/services/" variant="outline">
              Full service manifest
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
                "radial-gradient(ellipse 70% 90% at 50% 110%, rgba(34,211,238,0.14), transparent 65%)",
            }}
          />
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              Final log · Your move
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              The next site people find us through could be yours.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
              Tell us what you&apos;re building. We&apos;ll reply within one
              business day with honest feedback and a clear path to launch.
            </p>
            <div className="mt-10">
              <GlowButton href="/contact/" size="lg">
                Open a channel
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
