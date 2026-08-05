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
import { reel } from "@/lib/work";
import { founders } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Websites, Google Ads & Search Presence`,
  description:
    "Custom websites, Google Ads and SEO from a two-person studio in Beirut. No templates, sub-second loads, and a fixed price agreed before any work starts.",
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


export default function Home() {
  return (
    <>
      <SmoothScroll />

      {/* ── Title card ─────────────────────────────────────────── */}
      {/*
        No image. Everything here hangs off a single 12-column grid inside one
        container, so every rule spans the same measure and every vertical
        divider lands on a column line. The previous version floated a plate
        against the viewport edge while the type sat in a centred container —
        the hairline between them answered to nothing, which is what made the
        grid read as broken.
      */}
      <section className="relative flex min-h-svh items-end pb-14 pt-24 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-6xl px-5">
          {/*
            The headline opens the page directly. A metadata strip above it
            only delayed the one thing this screen exists to say.
          */}
          <SplitReveal
            text="We build the websites people remember."
            accent={["remember"]}
            delay={0.1}
            className="max-w-[15ch] font-display text-[clamp(2.4rem,6vw,5.5rem)] uppercase leading-[0.88]"
          />

          {/*
            Copy left, ask right — both starting on their own column line.

            The delays below used to run 0.8 / 0.95 / 1.1, and this paragraph
            is the page's LCP element. Measured on the built site that put LCP
            at 2.3s — near Google's 2.5s failure threshold, on the page whose
            entire pitch is sub-second loading. The page was never slow; first
            paint is 0.16s. The choreography was deferring the largest paint,
            because a browser does not count an element at opacity 0 as
            painted.

            So this one block slides without fading (`fade={false}`) and starts
            immediately: it paints at full opacity on the first frame and the
            movement costs the metric nothing. The two blocks after it keep the
            fade and the stagger, which is where the sequencing was doing the
            work anyway.

            This is the one place on the site where an animation delay is also
            a ranking signal. Re-measure before changing it.
          */}
          <div className="mt-9 grid grid-cols-12 gap-x-6 gap-y-9 md:mt-12">
            <Reveal fade={false} className="col-span-12 md:col-span-5">
              <p className="max-w-[46ch] text-base leading-[1.65] text-grey md:text-lg">
                Websites, Google Ads, and the search work that keeps them
                found. Two people, a short list of clients, and work
                we&apos;re happy to sign.
              </p>
            </Reveal>

            {/*
              The ask comes first and it comes solid. A meaningful share of
              SEO traffic lands here already decided and will never scroll —
              that visitor should not have to hunt for the booking link.
            */}
            <Reveal
              delay={0.42}
              className="col-span-12 md:col-span-6 md:col-start-7"
            >
              <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
                <CtaButton href="/contact/" size="lg">
                  Book the call
                </CtaButton>
                <CtaButton href="#reel" size="lg" variant="quiet">
                  See the work first
                </CtaButton>
              </div>
              <p className="slate mt-6 leading-relaxed">
                Not ready? Scroll — two minutes and you&apos;ll know if we fit.
              </p>
            </Reveal>
          </div>

          {/* Proof row — four equal cells, dividers on the quarter columns */}
          <Reveal delay={0.54}>
            {/*
              Two columns on mobile, four on desktop. The divider classes are
              written out per cell rather than derived — at two columns the
              left rule belongs on the odd cells, at four it belongs on every
              cell but the first, and a clever expression for that is a good
              way to get one rule in the wrong place at one breakpoint.
            */}
            <dl className="mt-12 grid grid-cols-2 border-t border-edge md:mt-14 md:grid-cols-4">
              {[
                { k: "Load time", v: "<1s", cell: "" },
                { k: "Custom code", v: "100%", cell: "border-l border-edge pl-5" },
                {
                  k: "Kickoff to launch",
                  v: "3–6 wks",
                  cell: "border-t border-edge md:border-t-0 md:border-l md:pl-5",
                },
                {
                  k: "People you'll meet",
                  v: "Two",
                  cell: "border-l border-t border-edge pl-5 md:border-t-0",
                },
              ].map((stat) => (
                <div key={stat.k} className={`py-5 ${stat.cell}`}>
                  <dd className="font-display text-2xl uppercase leading-none md:text-3xl">
                    {stat.v}
                  </dd>
                  <dt className="slate mt-3">{stat.k}</dt>
                </div>
              ))}
            </dl>
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
        {/*
          The price, in plain text, on the highest-authority page on the site.
          It wasn't stated anywhere on this page — the flight path talks around
          it and the number only appeared on /faq/ and /services/. It is the
          first thing anyone wants to know and the first thing an answer engine
          is asked, and neither should have to go looking for it.

          Placed here rather than in the hero deliberately: the SC.01→SC.10
          sequence is built to be read in one pass and a price in the opening
          frame would answer a question the visitor hasn't asked yet.
        */}
        <Reveal delay={0.25}>
          <div className="mt-14 max-w-[68ch] border-l border-signal pl-7">
            <p className="slate">What it costs</p>
            <p className="mt-6 text-base leading-[1.7] text-grey">
              Custom websites cost between $1,000 and $3,000, with focused
              single-page builds from $500. Larger projects are quoted
              individually. Every project is a fixed price in US dollars,
              agreed before any work starts — no hourly meter, no surprise
              invoice.
            </p>
          </div>
        </Reveal>

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
          {/*
            Two portraits side by side rather than one frame. Each keeps its
            own 4:5 — fitting both into the single 4:5 plate that used to sit
            here would squeeze each to 2:5 and crop the faces out of them.
          */}
          <Reveal className="md:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-edge bg-edge">
              {founders.map((person) => (
                <Image
                  key={person.name}
                  src={person.src}
                  alt={person.alt}
                  width={person.width}
                  height={person.height}
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="h-auto w-full saturate-[0.85]"
                />
              ))}
            </div>
            <p className="slate mt-5">Ralph &amp; Ramy · Beirut</p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.75rem)] uppercase leading-[0.94]">
              We&apos;d rather tell you to walk than underdeliver.
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

      {/*
        The numbers band that used to sit here is gone — the same three figures
        now sit in the hero proof row, where they reach the visitor who never
        scrolls. Repeating them two-thirds down the page was redundant and it
        made the page longer for no gain. StatBand is still available if a
        counted-up treatment is ever wanted elsewhere.
      */}

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
            One call. Then you decide.
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
