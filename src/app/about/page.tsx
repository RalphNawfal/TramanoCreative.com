import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — The Two People Doing the Work",
  description:
    "Tramano Creative is Ralph Nawfal and Ramy Al Housary, working from Beirut — experience built in the Canadian market, a deliberately small roster, no hand-offs.",
  alternates: { canonical: "/about/" },
};

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
          <p>
            What stood out was how little of that reaches businesses elsewhere.
            Not a budget problem. Nobody had brought it to them properly.
            That&apos;s the gap we set out to close, and it&apos;s why we work
            the way we do.
          </p>
          <p className="font-display text-xl italic leading-relaxed text-white">
            We don&apos;t sell websites. A website is a tool, and so are ads —
            the job is building something that keeps working long after
            we&apos;ve handed it over.
          </p>
        </div>
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
