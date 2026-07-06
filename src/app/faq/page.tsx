import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ — Pricing, Timelines & Process",
  description:
    "How much does a custom website cost? How long does it take? Do you run Google Ads? Straight answers to the questions every client asks Tramano Creative.",
  alternates: { canonical: "/faq/" },
};

const faqs = [
  {
    q: "How much does a custom website cost?",
    a: "Most projects land between $3,000 and $15,000 depending on scope — number of pages, motion/3D complexity, and content needs. We quote a fixed price after a short discovery call, so there are no surprise invoices. Simpler landing-page builds start lower; we'll tell you honestly if you don't need the full treatment.",
  },
  {
    q: "How long does a website take to build?",
    a: "A typical site launches in 3–6 weeks from kickoff. Week one is discovery and design direction; you see real, working pages by week two. Landing pages can ship in under two weeks. Timelines are agreed up front and we hit them — launch dates don't slip because we control the whole stack.",
  },
  {
    q: "Who actually does the work?",
    a: "The two people you talk to: Ralph Nawfal and Ramy Al Housary. We deliberately keep the client roster small — no account managers, no hand-offs, no departments. The person on your call is the person building your site and running your campaigns.",
  },
  {
    q: "Do you use templates or page builders like WordPress or Wix?",
    a: "No. Every site is designed from zero and built in modern code (React/Next.js). That's why our sites load in under a second, score green on Core Web Vitals, and look like nothing else in your industry. You own all of it — code, content, and domain.",
  },
  {
    q: "Do you manage Google Ads?",
    a: "Yes. Search presence compounds over months; Google Ads works immediately — if it's built honestly. We research the terms your buyers actually type, write matching ads, and land every click on a page built to convert it. You get clear monthly reporting: what was spent, what came back. No inflated dashboards.",
  },
  {
    q: "Will my website rank on Google?",
    a: "SEO is engineered in from day one, not bolted on: semantic HTML, structured data on every page, sub-second load times, sitemaps, and content architecture around what your customers search for. Rankings compound over months — our Search Presence work keeps publishing the content that earns them.",
  },
  {
    q: "What does 'AI search optimization' mean?",
    a: "More people now ask ChatGPT, Claude, and Google's AI for recommendations instead of clicking ten blue links. We structure your site so AI systems can read, understand, and cite it — clean semantics, llms.txt files, FAQ schema, and content written to answer real questions. When someone asks an AI who to work with, we want your business in the answer.",
  },
  {
    q: "What happens after launch?",
    a: "You can take the keys and go — everything is documented and you own it all. Most clients stay on a care plan: we handle hosting, updates, monitoring, and content changes (within 48 hours), and keep improving what the numbers say needs improving.",
  },
  {
    q: "Why is there a 'Built by Tramano Creative' link in your clients' footers?",
    a: "It's our signature — and our accountability. Every site we ship advertises us, which means every site has to be good enough to be our portfolio. Clients keep it because it costs nothing and signals their site was professionally engineered. (If you found us through one: that's exactly how this is supposed to work.)",
  },
  {
    q: "Do you work with businesses outside your area?",
    a: "Yes — the whole process runs remotely: video calls, a shared project channel, and live preview links at every stage. Our experience was built serving Canadian businesses, and we work with clients wherever they are.",
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
        <Section eyebrow="FAQ" title="Questions, answered straight." grid>
          <div className="max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.06, 0.3)}>
                <details className="group rounded-2xl border border-line/70 bg-surface/60 backdrop-blur-sm open:border-gold/40">
                  <summary className="cursor-pointer list-none p-6 font-display text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="mr-3 font-mono text-xs text-gold">
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
