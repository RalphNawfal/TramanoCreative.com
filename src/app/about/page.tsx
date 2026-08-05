import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import { founders } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — The Two People Doing the Work",
  description:
    "Tramano Creative is Ralph Nawfal and Ramy Al Housary, working from Beirut — a deliberately small roster and no hand-offs. Book a call and talk to both of us.",
  alternates: { canonical: "/about/" },
};

/**
 * The core facts, stated plainly.
 *
 * This page named the founders and the city and stopped there — it said
 * nothing about price, timeline or how we quote, which are the three things
 * anyone reading an about page is actually deciding on. Every line stands
 * alone so it can be quoted without the paragraph around it.
 *
 * Kept in agreement with src/lib/site.ts, /services/, /faq/ and
 * public/llms.txt. Five places; if one moves, all five move.
 */
const facts = [
  "Tramano Creative is a two-person web studio based in Beirut, Lebanon, founded in 2026 by Ralph Nawfal and Ramy Al Housary.",
  "The studio does three things: custom website design and development, Google Ads management, and search presence covering SEO and AI answer engines.",
  "Custom websites cost between $1,000 and $3,000, with focused single-page builds from $500. Larger projects are quoted individually.",
  "Every project is a fixed price in US dollars, agreed before work starts. There is no hourly billing and no percentage of ad spend.",
  "A typical website launches 3 to 6 weeks after kickoff.",
  "Clients are primarily in Lebanon and the United Arab Emirates, and anywhere else remotely.",
];

/*
 * Both portraits are cropped to an identical 4:5 at 720x900 so the two-up grid
 * reads as one set. They were shot separately — different cameras, different
 * nights — so a mild desaturation pulls the two colour temperatures closer
 * together. Drop the `saturate` class here and on the homepage if the pair
 * ever gets reshot together. The list itself lives in src/lib/team.ts, since
 * the homepage founders section renders the same two images.
 */

const principles = [
  {
    title: "The people you talk to do the work",
    body: "There are two of us, and that's on purpose. No account managers, no departments, nothing lost in a hand-off between the person who understood your business and the person building the site.",
  },
  {
    title: "Questions before recommendations",
    body: "A recommendation made before we understand your business isn't a recommendation, it's a guess. So we start by asking how you get customers today, and what growing actually looks like for you.",
  },
  {
    title: "We'd rather be right than hired",
    body: "We don't take everyone. If we're not confident we can help, we'll say so on the first call — our reputation lives in what happens after launch, not in the signature.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about/" }]} />
    <div className="pt-20">
      <Section slate="Who we are" eyebrow="About" title="Two people. No hand-offs." titleAs="h1">
        <div className="max-w-[58ch] space-y-6 text-lg leading-relaxed text-grey">
          <p>
            Tramano Creative is <span className="text-white">Ralph Nawfal</span>{" "}
            and <span className="text-white">Ramy Al Housary</span>. We learned
            this work with Canadian businesses — websites, Google Ads, and
            search, in one of the most crowded digital markets there is.
          </p>
          {/*
            Rewritten to stand on its own. The previous version ran "how little
            of that reaches businesses elsewhere… nobody had brought it to them
            properly… that's the gap" — four back-references in three
            sentences. Fine read in order, meaningless the moment anything
            quotes it in isolation, which is most of how this page will be
            read from now on.
          */}
          <p>
            Very little of that standard reaches businesses outside those
            markets. It is rarely a budget problem — nobody has brought the
            work to them properly. Closing that gap is why Tramano Creative
            exists, and why the studio operates the way it does.
          </p>
          <p className="font-display text-xl italic leading-relaxed text-white">
            We don&apos;t sell websites. A website is a tool, and so are ads —
            the job is building something that keeps working long after
            we&apos;ve handed it over.
          </p>
        </div>

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
        {/*
          Deliberately narrower than the prose above it. Two portraits at full
          page width would be the loudest thing on a page whose argument is
          that the studio is small.
        */}
        <Reveal delay={0.15}>
          <div className="mt-20 grid max-w-2xl gap-px overflow-hidden border border-edge bg-edge sm:grid-cols-2">
            {founders.map((person) => (
              <figure key={person.name} className="bg-carbon">
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={person.width}
                  height={person.height}
                  sizes="(min-width: 640px) 20rem, 100vw"
                  className="h-auto w-full saturate-[0.85]"
                />
                <figcaption className="p-6">
                  <p className="font-display text-lg leading-snug tracking-[-0.015em] text-white">
                    {person.name}
                  </p>
                  <p className="slate mt-2">{person.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section slate="How we operate" eyebrow="Three commitments" title="What you can hold us to.">
        <div className="grid gap-px overflow-hidden border border-edge bg-edge md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="bg-carbon">
              <div className="h-full p-8 md:p-10">
                <p className="slate">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.015em]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-grey">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-14">
            <CtaButton href="/contact/" size="lg">
              Book the call
            </CtaButton>
            <p className="mt-6 text-sm text-grey">
              Or write to us directly:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-white transition-colors hover:text-signal"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
    </>
  );
}
