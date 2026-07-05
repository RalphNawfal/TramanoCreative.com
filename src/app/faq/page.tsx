import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ — Pricing, Timelines & Process",
  description:
    "How much does a custom website cost? How long does it take? Answers to the questions every client asks Tramano Creative before starting a project.",
  alternates: { canonical: "/faq/" },
};

const faqs = [
  {
    q: "How much does a custom website cost?",
    a: "Most Signature Website projects land between $3,000 and $15,000 depending on scope — number of pages, 3D/motion complexity, and content needs. We quote a fixed price after a short discovery call, so there are no surprise invoices. Simpler landing-page builds start lower; we'll tell you honestly if you don't need the full treatment.",
  },
  {
    q: "How long does a website take to build?",
    a: "A typical Signature Website launches in 3–6 weeks from kickoff. Week one is discovery and design direction; you see real, working pages by week two. Landing pages can ship in under two weeks. Timelines are agreed up front and we hit them — launch dates don't slip because we control the whole stack.",
  },
  {
    q: "Do you use templates or page builders like WordPress or Wix?",
    a: "No. Every site is designed from zero and built in modern code (React/Next.js). That's why our sites load in under a second, score green on Core Web Vitals, and look like nothing else in your industry. You own all of it — code, content, and domain.",
  },
  {
    q: "Will my website rank on Google?",
    a: "SEO is engineered in from day one, not bolted on: semantic HTML, structured data on every page, sub-second load times, sitemaps, and content architecture around what your customers search for. Rankings compound over months — our SEO & Content plans keep publishing the content that earns them.",
  },
  {
    q: "What does 'AI search optimization' mean?",
    a: "More people now ask ChatGPT, Claude, and Google's AI for recommendations instead of clicking ten blue links. We structure your site so AI systems can read, understand, and cite it — clean semantics, llms.txt files, FAQ schema, and content written to answer real questions. When someone asks an AI 'who should build my site?', we want your business in the answer.",
  },
  {
    q: "What happens after launch?",
    a: "You can take the keys and go — everything is documented and you own it all. Most clients stay on a Care & Orbit plan: we handle hosting, updates, monitoring, and content changes (within 48 hours), and run quarterly experiments to keep conversion climbing.",
  },
  {
    q: "Why is there a 'Built by Tramano Creative' link in your clients' footers?",
    a: "It's our signature — and our accountability. Every site we ship advertises us, which means every site has to be good enough to be our portfolio. Clients keep it because it costs nothing and signals their site was professionally engineered. (If you found us through one: welcome, that's exactly how this is supposed to work.)",
  },
  {
    q: "Do you work with businesses outside your area?",
    a: "Yes — the whole process runs remotely: video calls, a shared project channel, and live preview links at every stage. We've designed the process so you always see real progress, not status reports.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="pt-16">
        <Section eyebrow="Mission briefing" title="Questions, answered straight." grid>
          <div className="max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.06, 0.3)}>
                <details className="group rounded-2xl border border-line/70 bg-surface/60 backdrop-blur-sm open:border-cyan/40">
                  <summary className="cursor-pointer list-none p-6 font-display text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="mr-3 font-mono text-xs text-cyan">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted md:text-base">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <p className="text-sm text-ink-muted">
                Something we didn&apos;t cover?
              </p>
              <div className="mt-4">
                <GlowButton href="/contact/">Ask us directly</GlowButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
