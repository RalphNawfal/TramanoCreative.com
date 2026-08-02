import Reveal from "@/components/ui/Reveal";

export type FaqItem = { q: string; a: string };

/**
 * The one FAQ list.
 *
 * This markup existed twice — once in /faq/ and once inside MarketPage — and
 * the two copies had already drifted: the market-page version rendered its
 * questions as bare text instead of a heading and had no anchor ids, so eight
 * questions per market page were invisible to featured-snippet extraction and
 * uncitable individually. Both now render from here.
 *
 * Three things this shape is doing deliberately:
 *
 *  - Questions are real headings. Google pulls featured snippets out of a
 *    heading-then-answer structure; a <summary> containing a <span> is not
 *    that. `questionAs` exists because the level depends on whether the page
 *    puts an h2 category above the list.
 *  - Every answer is inside <details>, which is open to crawlers regardless of
 *    the toggle state — the content is in the HTML, not behind JavaScript.
 *  - Each item gets a stable id derived from the question, so a single answer
 *    can be linked to and cited on its own.
 */
export function slugifyQuestion(question: string) {
  return question
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type FaqProps = {
  items: FaqItem[];
  /**
   * Where the Q-numbers start. Pages that split questions into several lists
   * pass a running offset so numbering stays continuous across the groups and
   * a question keeps its number if the groups are later reordered.
   */
  startIndex?: number;
  /** h3 under a category h2; h2 when the list sits directly under the page h1. */
  questionAs?: "h2" | "h3";
  className?: string;
};

export default function Faq({
  items,
  startIndex = 0,
  questionAs: Heading = "h3",
  className = "",
}: FaqProps) {
  return (
    <div className={`border-t border-edge ${className}`}>
      {items.map((f, i) => (
        <Reveal key={f.q} delay={Math.min(i * 0.05, 0.25)}>
          <details
            id={slugifyQuestion(f.q)}
            className="group border-b border-edge scroll-mt-28"
          >
            <summary className="flex cursor-pointer list-none items-start gap-5 py-6 transition-colors marker:hidden hover:text-signal [&::-webkit-details-marker]:hidden">
              <span className="slate mt-1.5 shrink-0">
                Q{String(startIndex + i + 1).padStart(2, "0")}
              </span>
              <Heading className="font-display text-lg font-medium leading-snug">
                {f.q}
              </Heading>
            </summary>
            <p className="max-w-[62ch] pb-7 pl-[4.25rem] text-[15px] leading-relaxed text-grey">
              {f.a}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

/** FAQPage schema for a flat list of items. Kept next to the markup it describes. */
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
