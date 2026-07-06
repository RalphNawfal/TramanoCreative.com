import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — The Two People Doing the Work",
  description:
    "Tramano Creative is Ralph Nawfal and Ramy Al Housary — experience built in the Canadian market, a deliberately small client roster, and no hand-offs.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "The people you talk to do the work",
    body: "We deliberately keep the client roster small. No account managers, no hand-offs, no departments — the people on the call are the people building your site and running your campaigns.",
  },
  {
    title: "Questions before recommendations",
    body: "A recommendation made before understanding your business isn't a recommendation — it's a guess. Every engagement starts with an honest conversation about how you attract customers today and what growth actually means for you.",
  },
  {
    title: "Results over signed contracts",
    body: "We don't work with everyone. We only take on businesses we're confident we can help, because our reputation is built on what happens after launch — not on closing the deal.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Section eyebrow="About" title="Two people. No hand-offs." grid>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
          <p>
            Tramano Creative is{" "}
            <span className="text-ink">Ralph Nawfal</span> and{" "}
            <span className="text-ink">Ramy Al Housary</span>. We built our
            experience working with Canadian businesses — helping them win
            customers through websites, Google Ads, and search optimization in
            one of the most competitive digital markets in the world.
          </p>
          <p>
            What we saw was simple: most businesses outside those markets
            don&apos;t have access to that level of system. Not because they
            can&apos;t afford it — but because it was never brought to them
            properly. That&apos;s the gap Tramano Creative exists to close,
            wherever you are.
          </p>
          <p>
            One principle sits under everything:{" "}
            <em className="font-display text-ink">
              we don&apos;t sell websites. A website is a tool. Ads are a tool.
            </em>{" "}
            The job is building assets that keep producing results long after
            the work is done — and every recommendation we make connects back
            to that.
          </p>
        </div>
      </Section>

      <Section eyebrow="How we operate" title="Three commitments.">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm">
                <p className="font-mono text-xs tracking-[0.25em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <GlowButton href="/contact/" size="lg">
              Book the call
            </GlowButton>
            <p className="mt-4 text-sm text-ink-muted">
              Or write to us directly:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-gold-bright hover:glow-text"
              >
                {site.email}
              </a>
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
