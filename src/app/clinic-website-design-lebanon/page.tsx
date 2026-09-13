import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Clinic & Medical Website Design in Lebanon",
  description:
    "Websites for Lebanese clinics and practices — credentials that establish trust, appointment requests that work without an EMR, and no patient details in a web form.",
  alternates: { canonical: "/clinic-website-design-lebanon/" },
};

/**
 * The clinic page, as distinct from /web-design-lebanon/.
 *
 * Same anti-doorway rule as every page routed through MarketPage: it exists only
 * because of what is true of medical practices and not of Lebanese businesses
 * generally.
 *
 * The four things it says that no other page on this site can:
 *  - The buying decision is trust before convenience, which inverts the usual
 *    hierarchy — credentials go above the fold, not on an About page.
 *  - An appointment *request* is not a booking, and pretending otherwise is the
 *    most common failure in this category.
 *  - A static site must never collect symptoms or medical history. This is the
 *    one place on this site where the correct advice is "do less", and it is
 *    genuinely expert: the reason is that the form's contents pass through a
 *    third-party processor, which is fine for an enquiry and not for health data.
 *  - Advertising a clinic is restricted in ways that decide site architecture,
 *    and before/after imagery carries a consent obligation the practice owns.
 *
 * Deliberately NOT repeated here: connectivity, page weight, currency,
 * trilingual layouts, neighbourhood search behaviour. Links, not restatements.
 *
 * NOTE ON SCOPE: this page describes what we build and refuses to give medical,
 * legal or regulatory advice. Lebanese medical advertising rules and syndicate
 * requirements are named as things to check with the practitioner's own
 * syndicate, never asserted. Ralph should confirm that framing reads correctly
 * to a doctor before publish — it is deliberately cautious.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Clinics"
      eyebrow="Web design"
      title="Websites for clinics and practices."
      href="/clinic-website-design-lebanon/"
      breadcrumbName="Clinic Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="clinics and medical practices"
      faqTitle="Practices, specifically."
      lead="A patient choosing a doctor is not shopping, they are deciding whether to trust you. That inverts almost everything about how the page should be built."
      facts={[
        "A clinic website should not collect symptoms, medical history or any other health information through a web form. Form contents pass through a third-party processing service, which is appropriate for an enquiry and not for medical data.",
        "An appointment request is not a confirmed booking. A website with no connection to the practice's calendar can honestly offer the first and should never display the second.",
        "Custom clinic and practice websites from Tramano Creative cost between $1,000 and $2,000, quoted as a fixed price in US dollars before work starts.",
        "Practitioner credentials — qualifications, syndicate registration, years in practice, hospital affiliations — are the single most load-bearing content on a medical website, and belong above the fold rather than on an About page.",
        "Google restricts advertising for many health-related services and treatments, so what a clinic can promote in search ads is narrower than what it can describe on its own website.",
      ]}
      blocks={[
        {
          heading: "Trust comes before convenience, which inverts the whole page",
          paras: [
            "Most business websites are built around an action. Buy this, book that, get a quote. A patient looking for a doctor is doing something different first: deciding whether you are competent and whether they will be treated well. Until that question is answered, no button matters. A beautifully designed booking flow on a page that has not established who you are gets no clicks, and the practice concludes the website doesn't work.",
            "So the hierarchy is unusual. Qualifications, where you trained, syndicate registration, hospital affiliations, how long you have practised, what you actually specialise in — that is not About-page material, it is the first thing on the page. A patient scrolling for thirty seconds should have finished the trust question before they reach anything asking them to act.",
            "This is also what search engines and AI assistants are looking for when they assess a medical page, and it is the one category where they are explicitly stricter. A page making health claims with no identifiable, credentialed author behind it is treated as a low-quality result, and correctly so. Naming the practitioner, their qualifications and their registration is both the honest thing and the thing that ranks.",
            "The design consequence is quieter than most businesses expect. Editorial type, generous space, no motion for its own sake, no stock photograph of a smiling model in a white coat. Competence reads as restraint. A loud template actively undercuts the thing a practice is selling.",
          ],
        },
        {
          heading: "An appointment request is not a booking, and the difference is honesty",
          paras: [
            "Practices ask for online booking, and what they usually mean is that patients should be able to arrange an appointment without a phone call. Those are not the same thing, and conflating them is the most common way a clinic website fails.",
            "Real booking means the website knows your calendar. It knows Dr. so-and-so is in on Tuesdays, that the eleven o'clock slot is gone, that a first consultation needs forty minutes and a follow-up needs fifteen. That requires the site to talk to whatever system actually holds the schedule. If the schedule lives in a paper diary at reception, or in one person's head, no website can know any of it.",
            "What a site can do honestly is take a request: preferred day, preferred time of day, new patient or returning, and a phone number. Reception confirms. The patient gets a clear message saying exactly that — requested, not booked, someone will call — and nobody turns up to a slot that was never real. That last sentence is the entire reason to care about the distinction.",
            "If you do run scheduling software, connecting it is possible and quoted separately. The wrong order is buying a booking widget first and finding out afterwards that it cannot see the diary. We establish which situation you are in on the first call, before anything is designed.",
          ],
        },
        {
          heading: "Why we will not put a symptoms field on your website",
          paras: [
            "This is the one place on this site where our advice is to collect less than you could, and it is worth explaining rather than asserting.",
            "When somebody submits a form on a static website, the contents do not go straight to your inbox. They pass through a third-party form-processing service, which forwards them and also retains a copy, and which may log technical details of the submission. For an enquiry about a website — a name, an email, a description of a project — that is entirely appropriate, and it is exactly how our own contact form works.",
            "Health information is a different category. A free-text box inviting a patient to describe their symptoms produces medical data about an identifiable person, sitting in a third-party account that was never chosen or assessed for that purpose, forwarded by email, and readable by anyone with access to the inbox. Nobody intends this. It happens because a form field is easy to add and the consequence is invisible.",
            "So the form asks for what is needed to make contact: name, phone number, whether they are a new patient, and when suits them. The clinical conversation happens on the phone or in the room, where it belongs. If a practice genuinely needs intake information before a visit, that requires a system built for medical data with an agreement to match — which is a real project with a real budget, not a field on a contact page. We will tell you that plainly rather than quietly adding the box.",
            "We are describing how we build websites here, not giving legal or regulatory advice. Your obligations as a practitioner are yours and your syndicate's to determine.",
          ],
        },
        {
          heading: "What you can advertise, and whose consent the photographs need",
          paras: [
            "Two constraints specific to this category decide site architecture, and both are better known before design than after.",
            "The first is advertising. Google restricts promotion of a range of health services and treatments, and what is allowed differs by country and by treatment. The practical effect is that a clinic often cannot run ads for the specific procedure that is most profitable, while it can perfectly well publish a thorough page about it on its own site. That pushes the strategy toward search visibility and structured, credentialed content rather than paid traffic — a different build emphasis from a restaurant or a retailer. What is permitted for your specialty is worth confirming before a page is built around ad traffic that may never be approved.",
            "The second is imagery. Before-and-after photographs are the most persuasive content an aesthetic or dental practice has, and every one of them is identifiable medical information about a patient. Consent for use on a public website is specific, it is the practice's to obtain and hold, and it is not implied by consent to treatment. We will build the gallery; we will also ask whether the consent exists, and we will not use an image you cannot account for.",
            "Language matters more here than the trilingual question on the Lebanon page. Patients search using everyday words and sometimes the wrong ones, while the profession writes in clinical terms — and in Lebanon that runs across Arabic, French and English at once, with French clinical vocabulary common in practice and English common online. A page written only in correct clinical terminology is invisible to the patient who does not know it. Both belong: the everyday phrasing to be found, the precise term to be trusted.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Credentials that do the work",
          body: "Qualifications, registration, affiliations and specialisation placed where the trust decision actually happens — above the fold, and marked up so search engines and AI assistants can attribute the page to a real practitioner.",
        },
        {
          title: "An honest appointment path",
          body: "A request form that asks only what is needed to make contact, confirms clearly that it is a request rather than a booking, and hands off to however your reception actually keeps the diary.",
        },
        {
          title: "Findable in the words patients use",
          body: "Written for how patients search — everyday phrasing across Arabic, French and English — while keeping the precise clinical terms that establish you know what you are doing.",
        },
      ]}
      faqs={[
        {
          q: "Can patients book appointments directly on the site?",
          a: "They can request one, and the site says so plainly. Real booking requires the website to see your actual schedule, which is only possible if that schedule lives in software rather than a diary at reception. If it does, we can connect it, quoted separately. What we will not do is show live slots that aren't real, because that ends with someone arriving for an appointment nobody made.",
        },
        {
          q: "Why won't you add a field for patients to describe their symptoms?",
          a: "Because form submissions on a static site pass through a third-party processing service that keeps a copy, and health information about an identifiable person should not sit there. That service is appropriate for an enquiry and not for medical data. The form collects what is needed to make contact; the clinical conversation happens on the phone or in the room. If you need intake data beforehand, that is a system built for it, not a field on a contact page.",
        },
        {
          q: "How much does a clinic website cost in Lebanon?",
          a: "Between $1,000 and $2,000 for most practice websites, quoted as a fixed price in US dollars after one short call. Multi-practitioner sites with a page per doctor, or a build connected to scheduling software, are quoted individually.",
        },
        {
          q: "Should my credentials really be at the top of the page?",
          a: "Yes, and it is the single biggest change most practice websites need. A patient is deciding whether to trust you before they are deciding whether to contact you, and no button works until that is settled. Qualifications on an About page nobody reaches are qualifications doing no work.",
        },
        {
          q: "Can I run Google Ads for my clinic?",
          a: "For some services yes, for others no — Google restricts advertising on a range of health treatments, and it varies by country and procedure. It is common to be unable to advertise the specific treatment that matters most while being perfectly free to publish a thorough page about it. Worth confirming for your specialty before a page is built around ad traffic. What is permitted for your practice is between you, Google and your syndicate.",
        },
        {
          q: "Can I show before-and-after photographs?",
          a: "Yes, with patient consent that specifically covers publication on a public website — consent to treatment does not cover it, and it is yours to obtain and hold. We will build the gallery and we will ask about consent for each image. We will not publish a photograph you cannot account for.",
        },
        {
          q: "Should the site be in Arabic, French or English?",
          a: "Often more than one, and the split is different from other businesses because clinical vocabulary is frequently French while patients search in English or everyday Arabic. The rule we use: everyday phrasing so you are found, precise terms so you are trusted. Both go on the page.",
        },
        {
          q: "Do you write the medical content?",
          a: "No. We structure it, edit it for clarity, and tell you where a page is thin — but a practitioner writes or approves anything clinical, and the page names who that is. A medical page with no credentialed author behind it is treated as low quality by search engines, and they are right to.",
        },
        {
          q: "What about a page for each doctor in the practice?",
          a: "Usually the right call. Patients search for a named practitioner more often than for a practice, and a page per doctor with their own qualifications and specialisation is findable in a way a shared team page is not. It also lets each doctor's page be attributed to them properly in structured data.",
        },
        {
          q: "Can you integrate with our patient management system?",
          a: "Sometimes. It depends entirely on whether the system offers a way in, and many local ones do not. We check before promising anything. If it cannot be connected, a clean request-and-confirm path that reception works from is a perfectly good outcome and considerably better than a broken integration.",
        },
        {
          q: "How do patients find a clinic in search?",
          a: "Overwhelmingly by specialty plus area, and increasingly by asking an assistant rather than typing. Both reward the same thing: a page that clearly states who you are, what you treat, where you are, and what your credentials are, in text a machine can read. There is more on how Lebanese search behaviour splits in the linked piece below.",
        },
        {
          q: "Is a static website secure enough for a medical practice?",
          a: "For publishing information, yes, and more so than most alternatives — there is no database to breach, no login, and no server-side code of ours. That is precisely why the boundary matters: the security argument holds because the site does not hold patient data, and adding a symptoms field is what would break it.",
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
          href: "/seo-lebanon/",
          label: "SEO in Lebanon",
          blurb:
            "How the work of getting found actually runs here, including how Lebanese search behaviour splits across three scripts.",
        },
        {
          href: "/blog/local-seo-lebanon/",
          label: "How patients here search",
          blurb:
            "Three scripts, one customer. Why intent is neighbourhood-level, and how to rank for an area without stuffing a footer.",
        },
        {
          href: "/blog/structured-data-explained/",
          label: "Structured data, without the jargon",
          blurb:
            "What schema markup actually gets you, which types matter for a small practice, and how to check what your pages emit.",
        },
      ]}
    />
  );
}
