import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Contractor & Construction Website Design in Lebanon",
  description:
    "Websites for Lebanese contractors — finished projects as proof, a quote form that collects the scope, a company profile ready for prequalification, and a site that wins Gulf work.",
  alternates: { canonical: "/contractor-website-design-lebanon/" },
};

/**
 * Contractors and construction, as distinct from /web-design-lebanon/.
 *
 * The one industry page with a live case study behind it:
 * /work/commercial-contractor/. That build is under NDA. Link the case study,
 * describe it only as the case study itself does, and never add a name,
 * location, country or certification that could identify the client. See
 * the reel rules in src/lib/case-studies.ts and the memory note on SC. 05.
 *
 * What is true here and not of Lebanese businesses generally:
 *  - The buyer is often a professional (developer, engineer, consultant, main
 *    contractor) checking a subcontractor against a scope, not a consumer.
 *  - Finished projects are the evidence, and each one needs its own page.
 *  - Prequalification runs on documents, so a downloadable company profile is
 *    the one place on any site we build where a PDF is the right answer.
 *  - Much Lebanese contracting work is won in the Gulf and further afield, so
 *    the site sells to clients who will never see the yard.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Construction"
      eyebrow="Web design"
      title="Websites for contractors."
      href="/contractor-website-design-lebanon/"
      breadcrumbName="Contractor Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="contractors and construction companies"
      faqTitle="Contractors, specifically."
      lead="The person reading a contractor's website is usually checking it against a scope: can you do this system, at this size, on this schedule? The site that answers in the first screen gets the request for quote."
      facts={[
        "Many visitors to a contractor's website are professionals, such as developers, engineers, consultants and main contractors, checking whether a subcontractor can deliver a specific scope.",
        "Finished projects are a contractor's strongest evidence, and each one works best as its own page with the scope, size, duration and photographs, rather than as an image in a gallery.",
        "Prequalification for construction work runs on documents, so a contractor's site should offer a current company profile as a downloadable file alongside the web pages.",
        "Many Lebanese contractors win work in the Gulf and abroad, so the website has to persuade clients who will never visit the company's yard or office.",
        "Custom contractor websites from Tramano Creative cost between $1,000 and $2,000, quoted as a fixed price in US dollars before work starts.",
      ]}
      blocks={[
        {
          heading: "The reader is checking you against a scope",
          paras: [
            "A homeowner looking for a renovation browses. A developer, consultant or main contractor looking for a subcontractor does something else entirely: they have a package on their desk, and they are checking whether you install that system, at that scale, within that programme. They want those answers in seconds, and if the site makes them dig, they move to the next name on the list.",
            "So the first screen does three things: says plainly what you build or install, shows the size of work you take on, and offers a way to send a scope. Everything a professional checks before shortlisting — the trades you cover, the equipment and crews you run, the safety and quality standards you work to — sits directly under it, as facts rather than adjectives.",
            "We built exactly this for a commercial building-envelope contractor: a quote-request form in the first screen beside the headline, an enquiry type that sorts requests before anyone calls back, and the credentials a buyer checks laid out as a list. The full case study, linked below, walks through every decision.",
          ],
        },
        {
          heading: "A finished project is a page, not a photo",
          paras: [
            "Most contractor websites show past work as a gallery: a grid of photographs with a project name underneath. It looks fine and proves very little. A buyer can't tell what you actually did on that building, how big it was or how long it took.",
            "Each finished project works far harder as its own page. What the project was, what your scope covered, the size and duration, the system or trade involved, and photographs from during the work as well as after. Written as text, those pages are what someone finds when they search for a contractor who has done that kind of job, and what an AI assistant can cite when asked for one.",
            "Some clients won't allow their building to be named, and some work is under confidentiality agreements. That's normal, and it doesn't stop the page from existing. A project described by sector, scope and size — \"a twelve-storey residential tower, full façade cladding, eight months\" — is still evidence, as long as the photographs don't identify what the client asked to keep private.",
          ],
        },
        {
          heading: "Prequalification runs on documents",
          paras: [
            "On almost every site we build, we argue against PDFs: they're slow, invisible to search and unreadable on a phone. A contractor's company profile is the exception. Prequalification is a document process, and the person assembling a shortlist needs a file they can attach, forward and print.",
            "So the site offers both. The web pages carry everything as readable text for search and for a first look, and a current company profile is available as a download, kept in step with the site. The page says when it was last updated, because an outdated profile with old project lists does more harm than none.",
            "The quote form follows the same logic. It asks for what an estimate actually needs — the system or trade, the location, the approximate size and the target dates — and lets the buyer attach drawings or a scope through a route that suits large files.",
          ],
        },
        {
          heading: "Winning work you'll never be visited for",
          paras: [
            "Many Lebanese contractors win a large share of their work in the Gulf, in Africa or elsewhere abroad. Those clients decide without visiting a yard, meeting the crews or seeing a finished building in person. The website is a large part of what they judge you on.",
            "That changes what the site needs. English first, with Arabic and French where your clients use them. Project pages that show the countries and scales you've worked at. A clear account of how you mobilise abroad, if you do. And contact routes that work across time zones, which in practice means WhatsApp and a named person, alongside the form.",
            "The same site also recruits. For a contractor that sells crews and capacity, hiring is part of being able to say yes to the next job, so a careers section aimed at skilled trades belongs on the site rather than on a job board alone.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Scope in the first screen",
          body: "What you build, the size of work you take on and a quote form that collects system, location, size and dates — so the reply can be prepared before the call.",
        },
        {
          title: "Projects as evidence",
          body: "Each finished project its own page with scope, size, duration and photos, written to be found, cited and checked. Confidential work described without identifying the client.",
        },
        {
          title: "Ready for prequalification",
          body: "A current company profile to download, kept in step with the site, plus the credentials, standards and safety record buyers check before shortlisting.",
        },
      ]}
      faqs={[
        {
          q: "What should a contractor's website include?",
          a: "What you build or install, the scale of work you take on, finished projects with scope and size, your credentials and safety standards, a downloadable company profile, and a quote form that collects the details an estimate needs. Professionals shortlist on those facts.",
        },
        {
          q: "Should a construction company have a PDF company profile?",
          a: "Yes, alongside the website rather than instead of it. Prequalification is a document process and buyers need a file to attach and forward. The website carries the same information as text, so search engines and AI assistants can read it too.",
        },
        {
          q: "How do I show projects that are under a confidentiality agreement?",
          a: "Describe them by sector, scope, size and duration instead of by name, and only use photographs that don't identify the building or client. That's still useful evidence. Our own contractor case study is anonymous for exactly this reason.",
        },
        {
          q: "Can a website help a Lebanese contractor win work in the Gulf?",
          a: "It's a large part of how Gulf clients judge a contractor they can't visit. Lead in English, show projects at the scale and in the countries you've worked, explain how you mobilise, and make contact easy across time zones.",
        },
        {
          q: "Should the quote form ask for drawings?",
          a: "It should make sending them easy, but not through a web form upload, which struggles with large files. Offer email or a file-sharing link for drawings, and keep the form itself to the scope, location, size and dates.",
        },
        {
          q: "Do you have experience with contractor websites?",
          a: "Yes. We built the site for a commercial building-envelope contractor, with a quote form in the first screen, an enquiry type that sorts requests, and a phone bar for site staff. The client is under NDA, so the case study is anonymous, but the decisions are all there.",
        },
        {
          q: "How much does a contractor website cost?",
          a: "Between $1,000 and $2,000 for most contractors, as a fixed price in US dollars agreed before work starts. A large group with many divisions, several countries and a full project library in three languages is quoted individually.",
        },
      ]}
      related={[
        {
          href: "/work/commercial-contractor/",
          label: "A contractor build, in detail",
          blurb:
            "The live case study: a quote form in the first screen, credentials before claims, and a call bar for site staff.",
        },
        {
          href: "/blog/selling-to-the-gulf-from-lebanon/",
          label: "Selling to the Gulf from Lebanon",
          blurb:
            "What Gulf clients check on a supplier site before they shortlist you.",
        },
        {
          href: "/web-design-uae/",
          label: "Web design in the UAE",
          blurb:
            "Selling to Gulf clients from Lebanon — what they expect from a site before they shortlist you.",
        },
        {
          href: "/google-ads-lebanon/",
          label: "Google Ads in Lebanon",
          blurb:
            "Search ads for the jobs people actually search for, pointed at pages that answer them.",
        },
        {
          href: "/blog/structured-data-explained/",
          label: "Structured data, without the jargon",
          blurb:
            "How a search engine learns what you build, where you work and which projects you've finished.",
        },
      ]}
    />
  );
}
