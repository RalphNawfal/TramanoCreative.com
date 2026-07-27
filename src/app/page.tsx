import type { Metadata } from "next";
import Image from "next/image";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import CtaButton from "@/components/ui/CtaButton";
import Spotlight from "@/components/ui/Spotlight";
import ZoomStory from "@/components/home/ZoomStory";
import WorkReel from "@/components/home/WorkReel";
import StatBand from "@/components/home/StatBand";
import { reel } from "@/lib/work";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Websites, Google Ads & Search Presence`,
  description: site.description,
  alternates: { canonical: "/" },
};

/*
 * The flight path. Each beat sits one magnification deeper than the last, so
 * the copy has to survive being read in one pass on the way through — no beat
 * gets a second look. Order is doing the persuading: we start where the
 * visitor actually is (comparing five agencies), fly down into the proof, and
 * only then say who we are and what the call is. By the time they book, the
 * call has already been framed.
 */
const beats = [
  {
    slate: "SC. 01 — WHERE YOU ARE RIGHT NOW",
    title: "You have five of these tabs open.",
    accent: "five",
    body: "Everyone shopping for a website does the same thing — open a row of results, message all of them, go with whoever replies first. It's a terrible way to pick, and it's the only way anyone's given you. So here's ours instead: keep scrolling and you'll know exactly what we do and how we work before you ever speak to us.",
    set: "results" as const,
    origin: "62% 50%",
  },
  {
    slate: "SC. 02 — THE ONE THAT FELT DIFFERENT",
    title: "You've already been on a site we built.",
    accent: "already",
    body: "Maybe not ours — one of our clients'. It opened before you expected it to, it didn't fight you on your phone, and you found what you came for without hunting. You didn't think about any of that at the time. That's the point.",
    set: "browser" as const,
    origin: "50% 92%",
  },
  {
    slate: "SC. 03 — HOW YOU GOT HERE",
    title: "Our name was at the bottom of it.",
    accent: "bottom",
    body: "One line in the footer. That link is the entire pitch, and it's why every site we ship has to be good enough to send strangers back to us. It's also the thing we'd be building for you: the site that makes someone go looking for who made it.",
    set: "credit" as const,
    origin: "50% 50%",
  },
  {
    slate: "SC. 04 — WHAT WE ACTUALLY DO",
    title: "A great site nobody finds is furniture.",
    accent: "furniture",
    body: "So we don't stop at the build. We run the ads that put you in front of people already typing what you sell, and the technical search work that gets you found without paying for every click. Three things, built to hold each other up — and we'd rather do all three for a few clients than one for everyone.",
    set: "browser" as const,
    origin: "50% 50%",
  },
  {
    slate: "SC. 05 — WHO'S ON THE CALL",
    title: "Two of us. That's the whole company.",
    accent: "Two of us.",
    body: "Ralph and Ramy, in Beirut. No account manager, no junior handed your project after you sign. The people you talk to are the people building it, which is why the roster stays short and why we sometimes say no.",
    set: "none" as const,
    origin: "50% 50%",
  },
  {
    slate: "SC. 06 — WHAT HAPPENS NEXT",
    title: "Thirty minutes. No deck.",
    accent: "No deck.",
    body: "We ask what your business actually does, what you've already tried, and what happens when someone finds you. You get a plain recommendation and a fixed price — or you get told you don't need a new site yet. You now know everything you'd have learned on the call, which means we can skip straight to your business.",
    set: "none" as const,
    origin: "50% 50%",
  },
];

const pillars = [
  {
    n: "01",
    title: "Websites",
    body: "Designed and coded from scratch, no templates. Fast enough that nobody waits, clear enough that nobody has to think. After launch we keep it running — hosting, updates, and changes turned around inside 48 hours.",
  },
  {
    n: "02",
    title: "Google Ads",
    body: "Built around the words your buyers actually type, pointed at pages made to answer them. We'd rather run a small budget that works than a big one that looks busy.",
  },
  {
    n: "03",
    title: "Search presence",
    body: "The technical groundwork, the structured data, and the writing that gets you surfaced — on Google, and increasingly inside AI answers. Slower than ads, and it keeps paying.",
  },
];

const stats = [
  { to: 1, prefix: "<", suffix: "s", label: "Load time on every site we ship. We treat it as a requirement, not a target." },
  { to: 100, suffix: "%", label: "Custom code. No page builders, no bought themes, nothing you can't own outright." },
  { to: 6, prefix: "3–", suffix: " wks", label: "From kickoff to launch, for most builds. You'll know the date before we start." },
];

export default function Home() {
  return (
    <>
      <SmoothScroll />

      {/* ── Title card ─────────────────────────────────────────── */}
      <section className="relative flex min-h-svh items-end overflow-hidden pb-16 pt-32 md:items-center md:pb-0">
        {/*
          A hard-edged plate of our own work occupying the right third, rather
          than a full-bleed wash. Swiss layouts put images in blocks, not
          behind everything — and it keeps the headline on flat carbon.
        */}
        <div
          className="absolute inset-y-0 right-0 -z-10 hidden w-[38%] lg:block"
          aria-hidden
        >
          <div className="relative h-full w-full opacity-[0.28]">
            <Image
              src={reel[0].desktop.src}
              alt=""
              width={reel[0].desktop.width}
              height={reel[0].desktop.height}
              loading="eager"
              fetchPriority="high"
              sizes="40vw"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/60 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-edge" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="flex items-center gap-4 border-t border-edge pt-5">
              <span className="signal-dot block h-1.5 w-1.5 rounded-full bg-signal" />
              <p className="slate">Tramano Creative — Reel 2026 — Beirut</p>
            </div>
          </Reveal>

          {/*
            Headline is sized so the sub-copy and both CTAs still clear the
            fold on a 900px-tall laptop. It can be loud, but not at the cost
            of pushing the ask below the screen.
          */}
          <SplitReveal
            text="We build the websites people remember."
            accent={["remember"]}
            delay={0.2}
            className="mt-8 max-w-[15ch] font-display text-[clamp(2.4rem,6.2vw,5.5rem)] uppercase leading-[0.9]"
          />

          <Reveal delay={0.8}>
            <p className="mt-10 max-w-[48ch] text-base leading-[1.65] text-grey md:text-lg">
              Websites, Google Ads, and the search work that keeps them found.
              Two people, a short list of clients, and work we&apos;re happy to
              sign.
            </p>
          </Reveal>

          {/*
            The ask comes first and it comes solid. A meaningful share of SEO
            traffic lands here already decided and will never scroll — that
            visitor should not have to hunt for the booking link, so the
            sequence below is positioned as the optional long version.
          */}
          <Reveal delay={0.95}>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <CtaButton href="/contact/" size="lg">
                Book the call
              </CtaButton>
              <CtaButton href="#reel" size="lg" variant="quiet">
                See the work first
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={1.1}>
            <div className="mt-16 flex items-center gap-4 border-t border-edge pt-6 md:mt-20">
              <span
                aria-hidden
                className="signal-dot block h-1.5 w-1.5 rounded-full bg-signal"
              />
              <p className="slate">
                Not ready? Scroll — two minutes and you&apos;ll know if we fit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The sequence ───────────────────────────────────────── */}
      <ZoomStory beats={beats} />

      {/* ── The reel ───────────────────────────────────────────── */}
      <Section
        id="reel"
        slate="SC. 07 — THE WORK"
        eyebrow="Five builds"
        title="This is what we mean."
      >
        <Reveal>
          <p className="-mt-6 mb-20 max-w-[58ch] text-lg leading-relaxed text-grey">
            One live, four concept builds. We&apos;re keeping the names off
            these — what matters is the thinking, not the logo in the corner.
          </p>
        </Reveal>
        <WorkReel shots={reel} />
      </Section>

      {/* ── What we do ─────────────────────────────────────────── */}
      <Section
        slate="SC. 08 — WHAT YOU GET"
        eyebrow="Three things"
        title="Built to hold each other up."
        className="bg-carbon-lift"
      >
        <Spotlight className="grid gap-px overflow-hidden border border-edge bg-edge md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="spotlight-cell relative bg-carbon-lift"
            >
              <div className="relative h-full p-8 md:p-10">
                <span className="slate">{p.n}</span>
                <h3 className="mt-6 font-display text-xl uppercase leading-[1]">
                  {p.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] text-grey">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </Spotlight>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <CtaButton href="/services/" variant="outline">
              How each one works
            </CtaButton>
          </div>
        </Reveal>
      </Section>

      {/* ── The founders ───────────────────────────────────────── */}
      <Section slate="SC. 09 — WHO YOU'D BE WORKING WITH">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            {/*
              TODO: drop a real photo of Ralph + Ramy at public/team/founders.jpg
              (roughly 4:5, warm light) and replace this block with an <Image>.
              A real photograph here is worth more than everything above it.
            */}
            <div className="relative aspect-[4/5] overflow-hidden border border-edge bg-carbon-card">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 70% at 30% 20%, rgba(63,123,255,0.20), transparent 65%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <p className="slate">Ralph &amp; Ramy · Beirut</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.75rem)] uppercase leading-[0.94]">
              We&apos;d rather tell you no than sell you something.
            </h2>
            <p className="mt-8 max-w-[54ch] text-base leading-[1.65] text-grey md:text-lg">
              The first conversation is thirty to forty-five minutes, and it
              costs nothing. We ask about your business, what&apos;s working,
              and what you&apos;ve already tried. Sometimes the honest answer is
              that you don&apos;t need a new website yet — and we&apos;ll say
              so.
            </p>
            <p className="mt-6 max-w-[54ch] text-base leading-[1.65] text-grey md:text-lg">
              If there is a fit, you get a plain recommendation and a fixed
              price before anyone commits to anything.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── Numbers ────────────────────────────────────────────── */}
      <Section>
        <StatBand stats={stats} />
      </Section>

      {/* ── Closing card ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-edge bg-signal py-32 md:py-44">
        {/*
          The one full-colour block on the site. After a page of near-black,
          a solid signal-blue field is the loudest thing available — and it
          only gets used once, on the ask.
        */}
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-carbon/70">
            SC. 10 — Fade out
          </p>
          <h2 className="mt-8 max-w-[16ch] font-display text-[clamp(2.5rem,8vw,6.5rem)] uppercase leading-[0.9] text-carbon">
            One honest call. Then you decide.
          </h2>
          <p className="mt-10 max-w-[46ch] text-base leading-[1.65] text-carbon/80 md:text-lg">
            No deck, no pressure, no follow-up sequence. Just a conversation
            about your business and what we&apos;d do about it.
          </p>
          <div className="mt-12">
            <CtaButton href="/contact/" size="lg" variant="invert">
              Book the call
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
