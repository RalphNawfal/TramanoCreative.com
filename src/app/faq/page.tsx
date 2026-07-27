import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
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
    a: "Most projects land between $3,000 and $15,000 depending on scope — how many pages, how much custom design and motion, and how much content needs writing. You get a fixed price after a short call, so there's no surprise invoice later. Landing-page builds start lower, and if you don't need the full treatment we'll say so.",
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
  {
    q: "Do you work with businesses in Lebanon?",
    a: "Yes — we're based in Beirut and Lebanon is our primary market. That means we understand the things that actually matter here: building for connections that vary, quoting in USD so the price you agree is the price you pay, and handling Arabic, French and English properly rather than through a translation plugin.",
  },
  {
    q: "Do you work with clients in the UAE and the Gulf?",
    a: "Yes. We're one hour behind Dubai, so you get a full working-day overlap instead of the overnight lag you'd have with a European or American studio. Costs are lower than a comparable Dubai agency because you're paying for two people doing the work, not for an office and an account manager.",
  },
  {
    q: "Can you invoice in USD?",
    a: "Yes. We quote and invoice in US dollars at a fixed price agreed before we start. Bank transfer, Wise and OMT all work depending on where you are. Third-party costs like domains and hosting are billed at cost with no markup.",
  },
  {
    q: "Do you build websites in Arabic?",
    a: "Yes, and properly. Arabic isn't a text swap — right-to-left means the whole layout mirrors, including navigation, buttons and reading order, and the typography has to hold up in both scripts. We build bilingual and trilingual sites where each language version has its own URL so it can rank in search independently.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq/" }]} />
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
      <div className="pt-20">
        <Section slate="Straight answers" eyebrow="FAQ" title="The questions everyone asks." titleAs="h1">
          <div className="max-w-3xl border-t border-edge">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.25)}>
                <details className="group border-b border-edge">
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 font-display text-lg font-medium leading-snug transition-colors marker:hidden hover:text-signal [&::-webkit-details-marker]:hidden">
                    <span className="slate mt-1.5 shrink-0">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </summary>
                  <p className="max-w-[62ch] pb-7 pl-[4.25rem] text-[15px] leading-relaxed text-grey">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14">
              <p className="text-base text-grey">
                Something we didn&apos;t cover?
              </p>
              <div className="mt-6">
                <CtaButton href="/contact/">Ask us directly</CtaButton>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>
    </>
  );
}
