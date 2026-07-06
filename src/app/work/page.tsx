import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";

export const metadata: Metadata = {
  title: "Work — Every Site Carries Our Name",
  description:
    "Case studies from Tramano Creative: custom websites built for speed and conversion, published with results — traffic, rankings, and inquiries.",
  alternates: { canonical: "/work/" },
};

// Placeholder roster — replace with real client case studies as they launch.
const projects = [
  {
    number: "01",
    title: "Your project here",
    sector: "Founding client",
    summary:
      "Every roster starts with a first launch. Early clients get founding-client pricing and our full attention — and become the case study everyone else sees.",
    status: "OPEN",
  },
  {
    number: "02",
    title: "In progress",
    sector: "Private until launch",
    summary:
      "We publish case studies only after results are in: traffic, rankings, and inquiries — not just screenshots.",
    status: "IN PROGRESS",
  },
  {
    number: "03",
    title: "Reserved",
    sector: "Could be your industry",
    summary:
      "We take a limited number of builds at a time so every site gets engineered, not assembled. Reserve a slot before the roster fills.",
    status: "RESERVABLE",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16">
      <Section eyebrow="Work" title="Every site carries our name." grid>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          Each site we ship links back here from its footer — which means our
          work has to sell itself every single day. That&apos;s deliberate.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((v, i) => (
            <Reveal key={v.number} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-gold/40">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs tracking-[0.25em] text-gold">
                    {v.number}
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
              Become the first case study
            </GlowButton>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
