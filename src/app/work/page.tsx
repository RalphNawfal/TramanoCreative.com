import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";

export const metadata: Metadata = {
  title: "Work — Sites in the Fleet",
  description:
    "Case studies from the Tramano Creative fleet: custom websites built for speed, story, and conversion.",
  alternates: { canonical: "/work/" },
};

// Placeholder fleet — replace with real client case studies as they launch.
const fleet = [
  {
    designation: "VESSEL 001",
    title: "Your project here",
    sector: "First client of the new fleet",
    summary:
      "Every fleet starts with a first launch. Early clients get founding-partner pricing and our full attention — and become the case study everyone else sees.",
    status: "DOCK OPEN",
  },
  {
    designation: "VESSEL 002",
    title: "In fabrication",
    sector: "Classified until launch",
    summary:
      "We publish case studies only after results are in: traffic, rankings, and conversion numbers — not just screenshots.",
    status: "IN FABRICATION",
  },
  {
    designation: "VESSEL 003",
    title: "Awaiting mission",
    sector: "Could be your industry",
    summary:
      "We take a limited number of builds at a time so every site gets engineered, not assembled. Reserve a slot before the dock fills.",
    status: "RESERVABLE",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16">
      <Section eyebrow="The fleet" title="Every launch carries our mark." grid>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          Each site we ship links back here from its footer — which means our
          work has to sell itself every single day. Here&apos;s the fleet
          roster.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {fleet.map((v, i) => (
            <Reveal key={v.designation} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-cyan/40">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs tracking-[0.25em] text-cyan">
                    {v.designation}
                  </p>
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-ink-faint">
                    {v.status}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold">
                  {v.title}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {v.sector}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {v.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
          <div className="mt-12">
            <GlowButton href="/contact/" size="lg">
              Claim Vessel 001
            </GlowButton>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
