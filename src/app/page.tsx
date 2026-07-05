import type { Metadata } from "next";
import SpaceBackdrop from "@/components/three/SpaceBackdrop";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
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
  },
  {
    code: "LOG 002 // MISSION",
    title: "Most websites are furniture. Ours are engines.",
    body: "A website that just sits there is a sunk cost. We engineer sites the way you'd engineer a spacecraft — every system justified, every gram of weight earned. Speed that search engines reward. Stories that visitors remember. Funnels that turn attention into booked calls.",
  },
  {
    code: "LOG 003 // METHOD",
    title: "Built in the open, launched in weeks.",
    body: "Discovery, design, build, launch, orbit. You see progress at every stage — real pages, not mockups that die in a slide deck. After launch we stay in orbit: performance monitoring, content, and SEO that compounds month over month.",
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
      <section className="scanlines relative flex min-h-svh flex-col items-center justify-center px-5 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan glow-text">
            Transmission 001 · Incoming
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] md:text-7xl">
            Websites engineered
            <br />
            like <span className="text-cyan-bright glow-text">spacecraft</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            We&apos;re Tramano Creative — a web development agency building
            fast, cinematic, conversion-obsessed websites. If you found us in
            the footer of a site you loved, you already know what we can do.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <GlowButton href="/contact/" size="lg">
              Start a project
            </GlowButton>
            <GlowButton href="/work/" size="lg" variant="outline">
              See the fleet
            </GlowButton>
          </div>
        </Reveal>
        <div className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
          Scroll to descend
        </div>
      </section>

      {/* Mission log chapters */}
      {missionLog.map((log, i) => (
        <Section key={log.code} grid={i % 2 === 0}>
          <div className={`max-w-2xl ${i % 2 === 1 ? "ml-auto" : ""}`}>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                {log.code}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
                {log.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                {log.body}
              </p>
            </Reveal>
          </div>
        </Section>
      ))}

      {/* Services teaser */}
      <Section eyebrow="Systems onboard" title="What we build" grid>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-cyan/40">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
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
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">
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
