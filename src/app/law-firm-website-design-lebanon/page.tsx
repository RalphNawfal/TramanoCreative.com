import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Law Firm Website Design in Lebanon",
  description:
    "Websites for Lebanese law firms — practice-area pages clients actually search, Arabic, French and English, enquiries from abroad, and no case details in a web form.",
  alternates: { canonical: "/law-firm-website-design-lebanon/" },
};

/**
 * Law firms, as distinct from /web-design-lebanon/.
 *
 * What is true here and not of Lebanese businesses generally:
 *  - Clients search for their problem, not for a firm, so each practice area
 *    needs its own page.
 *  - A large share of demand comes from Lebanese abroad dealing with
 *    inheritance, property and documents at home, searching in English or French.
 *  - French carries real weight in Lebanese legal practice, so a trilingual
 *    site is a professional requirement here, not a courtesy.
 *  - The enquiry form must not collect case details before a conflict check.
 *    Like the clinic page, the right advice is "ask for less".
 *
 * SCOPE: this page describes what we build. It gives no legal or regulatory
 * advice. Professional conduct rules on how lawyers may present themselves are
 * named as something to check with the firm's own bar association, never
 * asserted. Ralph should confirm the framing reads correctly to a lawyer.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Legal"
      eyebrow="Web design"
      title="Websites for law firms."
      href="/law-firm-website-design-lebanon/"
      breadcrumbName="Law Firm Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="law firms and lawyers"
      faqTitle="Law firms, specifically."
      lead="Nobody searches for a law firm. They search for their problem — an inheritance, a property dispute, a residency question — and the firm that explains it clearly is the one they call."
      facts={[
        "People looking for a lawyer search for their legal problem rather than for a firm, so each practice area needs its own page that explains the problem in plain language.",
        "A large share of enquiries to Lebanese law firms come from Lebanese living abroad, about inheritance, property, powers of attorney and civil documents, and they usually search in English or French.",
        "A law firm's enquiry form should ask only for contact details and the general subject. Case details should wait until the firm has checked for conflicts of interest.",
        "Professional conduct rules in Lebanon limit how lawyers may promote their services, so a law firm website should be informative and factual rather than promotional. The firm's bar association is the authority on what is allowed.",
        "Custom law firm websites from Tramano Creative cost between $1,000 and $2,000, quoted as a fixed price in US dollars before work starts.",
      ]}
      blocks={[
        {
          heading: "Clients search for the problem, not the firm",
          paras: [
            "Almost nobody types \"law firm Beirut\" and picks from the list. They type what is happening to them: how inheritance works for a property in Lebanon, how to sell an apartment while living in Canada, what a power of attorney needs to be valid, how to register a marriage that took place abroad. The firm that answers that question clearly, on a page of its own, is the firm they contact.",
            "So the structure of a law firm site is the practice areas, each one a real page that explains the situation, the usual steps, the documents involved and how long things tend to take — in plain language, without promising outcomes. A single \"Our Services\" page listing twelve areas in bullet points is invisible to search, and gives an AI assistant nothing to quote when someone asks it the same question.",
            "Those pages are also what a careful client reads before calling. Legal work is bought on trust, and an explanation that is accurate and calm does more for that trust than any claim about experience.",
          ],
        },
        {
          heading: "Many of the clients are abroad",
          paras: [
            "A large share of the demand for Lebanese lawyers comes from Lebanese living elsewhere: an inheritance to settle, a family property to sell or divide, a power of attorney to issue, documents to register or obtain. They are in Montreal, Paris, Sydney or Dubai, they search in English or French, and they cannot drop into an office.",
            "That decides how the site works. It needs to explain plainly what can be done remotely, what requires a power of attorney, and what needs someone physically present. It needs a contact route that works across time zones — usually WhatsApp, with a stated reply time. And it needs to read as trustworthy to someone who cannot visit, check the building or ask a neighbour about you.",
          ],
        },
        {
          heading: "Arabic, French and English are all professional languages here",
          paras: [
            "Lebanese legal practice is conducted in Arabic, rests heavily on a French legal tradition, and serves international clients in English. A firm that publishes in only one of those is invisible to a large part of its own market.",
            "Translation is the easy part. The harder part is that legal terms do not map neatly between the three, and a client reading in English needs the English explanation, not a literal rendering of the Arabic one. We build the structure for all three languages with proper right-to-left layouts; the legal content itself is written or approved by the firm, because accuracy here is the lawyer's responsibility, not ours.",
          ],
        },
        {
          heading: "Ask for less in the enquiry form",
          paras: [
            "The instinct is a detailed intake form: describe your case, the other party, the amounts involved. It is the wrong design. Until a firm has checked whether it already acts for someone on the other side, it should not be receiving the details of a dispute — and a form's contents pass through an email provider and a form processor on their way to the inbox.",
            "The form we build asks for name, how to reach them, where they are, the general area of the matter and when they are available. The details come later, on a call or in a meeting, once the firm is free to hear them. The page says that plainly, which also reassures the client that their information is being handled with care.",
            "How lawyers may present and promote themselves is governed by professional conduct rules, and we treat the firm's bar association as the authority on what a page may say. Our default is informative and factual: explanations, credentials, languages, how to get in touch. No claims of results, no comparisons with other firms.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "A page per practice area",
          body: "Each area its own page, explaining the problem, the steps and the documents in plain language — the pages clients and AI assistants actually find.",
        },
        {
          title: "Built for clients abroad",
          body: "Arabic, French and English with real right-to-left layouts, a clear account of what can be done remotely, and a contact route that works across time zones.",
        },
        {
          title: "Enquiries that protect you",
          body: "A short form that collects contact details and the general subject only, so no case details arrive before your conflict check.",
        },
      ]}
      faqs={[
        {
          q: "What should a law firm website include?",
          a: "A page for each practice area explaining the situation in plain language, the lawyers' qualifications and languages, how to make contact, and what happens after an enquiry. Factual and calm rather than promotional. Clients read these pages to decide whether you understand their problem.",
        },
        {
          q: "Are lawyers in Lebanon allowed to advertise on a website?",
          a: "Professional conduct rules limit how lawyers may promote their services, and the firm's bar association is the authority on what is permitted. We don't give legal advice on that. Our default is an informative, factual site, and we adjust anything the firm's own reading of the rules requires.",
        },
        {
          q: "Should a law firm website be in French?",
          a: "In Lebanon, usually yes. French carries real weight in Lebanese legal practice and is the working language of many clients here and abroad. Most firms need Arabic, French and English, each complete, rather than one language with a partial translation.",
        },
        {
          q: "Can clients abroad contact the firm through the website?",
          a: "Yes, and for many firms they are a large share of enquiries. The site explains what can be handled remotely and what needs a power of attorney, and offers WhatsApp with a stated reply time so time zones aren't a barrier.",
        },
        {
          q: "Why shouldn't the contact form ask for case details?",
          a: "Because the firm should check for conflicts of interest before hearing them, and because a form's contents pass through an email provider and a form processor. The form asks for contact details and the general subject only; the details come on the first call.",
        },
        {
          q: "Who writes the legal content on the site?",
          a: "The firm writes or approves it. We structure the pages, edit for clarity and search, and build them in each language, but legal accuracy is the lawyer's responsibility and we won't publish legal explanations the firm hasn't signed off.",
        },
        {
          q: "How much does a law firm website cost in Lebanon?",
          a: "Between $1,000 and $2,000 for most firms, as a fixed price in US dollars agreed before work starts. A large firm with many practice areas in three languages, or with a client portal, is quoted individually.",
        },
      ]}
      related={[
        {
          href: "/web-design-lebanon/",
          label: "Web design in Lebanon",
          blurb:
            "The wider picture — connectivity, trilingual layouts, currency, and what the local agency market gets wrong.",
        },
        {
          href: "/clinic-website-design-lebanon/",
          label: "Clinic websites",
          blurb:
            "The other profession where the right enquiry form asks for less, and trust comes before convenience.",
        },
        {
          href: "/blog/getting-cited-by-ai-assistants/",
          label: "Getting cited by AI assistants",
          blurb:
            "Clients ask ChatGPT about inheritance and property before they call anyone. Here's how a page becomes the answer.",
        },
        {
          href: "/blog/structured-data-explained/",
          label: "Structured data, without the jargon",
          blurb:
            "How a search engine learns that your firm is a law firm, where it practises and which languages it works in.",
        },
      ]}
    />
  );
}
