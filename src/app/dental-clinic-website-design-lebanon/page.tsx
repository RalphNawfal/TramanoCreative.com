import type { Metadata } from "next";
import IndustryPage from "@/components/seo/IndustryPage";

export const metadata: Metadata = {
  title: "Dental Clinic Website Design in Lebanon",
  description:
    "Websites for Lebanese dental clinics — a page per treatment, price ranges patients can plan around, visitors from abroad booking treatment around a trip home, and consent for every smile shown.",
  alternates: { canonical: "/dental-clinic-website-design-lebanon/" },
};

/**
 * Dental, as distinct from /clinic-website-design-lebanon/.
 *
 * The clinic page already covers credentials-first layout, appointment
 * requests versus bookings, and never collecting health data in a form. None
 * of that is repeated here; this page links to it instead.
 *
 * What is true of dentistry and not of medical practices generally:
 *  - Patients search by treatment (implants, veneers, aligners, whitening), and
 *    much of the work is elective, so each treatment needs its own page.
 *  - Elective treatment is a purchase patients plan and compare, which makes
 *    price ranges the most-wanted and most-missing content.
 *  - Lebanese abroad and visitors from the region schedule treatment around a
 *    trip home, which changes what the site must explain (visits needed, time
 *    between them, what can be done in one stay).
 *  - Before/after photographs are the strongest evidence a dental site has, and
 *    each one needs the patient's consent, which the clinic owns.
 *
 * No claims about how common dental travel to Lebanon is: no source we can
 * cite, so the page describes the patient, not the market size.
 */
export default function Page() {
  return (
    <IndustryPage
      slate="Dental"
      eyebrow="Web design"
      title="Websites for dental clinics."
      href="/dental-clinic-website-design-lebanon/"
      breadcrumbName="Dental Clinic Website Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      industry="dental clinics and dentists"
      faqTitle="Dental, specifically."
      lead="Most of a dental clinic's best patients aren't in pain. They're planning: comparing implants, veneers or aligners, often from abroad, around a trip home. The site that answers their questions plainly gets the consultation."
      facts={[
        "Dental patients search by treatment — implants, veneers, aligners, whitening — rather than for a dentist in general, so each treatment needs its own page.",
        "Elective dental treatment is planned and compared like any significant purchase, and price ranges are the information patients most want and most dental websites leave out.",
        "Lebanese living abroad and visitors to Lebanon often schedule dental treatment around a trip, so a dental website needs to explain how many visits a treatment takes and how long they must be apart.",
        "Before-and-after photographs on a dental website require each patient's consent. The clinic holds that consent; the website should only show cases it covers.",
        "Custom dental clinic websites from Tramano Creative cost between $1,000 and $2,000, quoted as a fixed price in US dollars before work starts.",
      ]}
      blocks={[
        {
          heading: "A page per treatment, because that's what patients search",
          paras: [
            "Someone who needs a filling searches \"dentist near me\" and picks whoever is close and open. Someone considering implants, veneers or clear aligners behaves completely differently. They search the treatment, read about it, compare clinics over days or weeks, and choose the one that explained it best.",
            "So a dental site is built around its treatments. Each one is a page that answers what that patient is actually asking: what the treatment involves, who it suits and who it doesn't, how many visits it takes, how long the result lasts, what it roughly costs and what changes the price. Written as text, in the languages the clinic works in, those pages are what Google ranks for treatment searches and what an AI assistant can quote when a patient asks it the same questions.",
            "A single \"Services\" page listing twelve treatments in a grid does none of that. It tells a patient you offer implants; it doesn't tell them why they should get them from you.",
          ],
        },
        {
          heading: "Price ranges are the most-wanted thing on the page",
          paras: [
            "Elective treatment is a significant purchase, and patients plan it like one. The first thing most of them want to know is roughly what it costs, and the most common answer on dental websites is silence, or \"contact us for a quote\".",
            "That silence costs consultations. A patient comparing three clinics will contact the one that gave them a number to plan around. It doesn't have to be a fixed price — every mouth is different — but a starting figure or a range per treatment, in US dollars, with an honest list of what moves it up or down, answers the question and sets the right expectation before the patient sits in the chair.",
            "Clinics worry that a published range will be read as a promise. Written properly, it isn't: \"implants from $X per tooth; your exact quote follows the examination and depends on bone condition and the restoration you choose\" is both useful and accurate.",
          ],
        },
        {
          heading: "Patients planning treatment around a trip home",
          paras: [
            "Many dental patients in Lebanon are not in Lebanon when they choose a clinic. Lebanese living abroad, and visitors from the region, often plan treatment around a summer or holiday stay, and they're deciding from another country, usually in English or French.",
            "They have questions a local patient never asks, and the site should answer them before they have to: how many visits a treatment needs, how far apart they must be, what can be finished within a two- or three-week stay and what can't, whether a first consultation can happen by video with X-rays sent ahead, and how follow-up works once they've flown home. A clinic that lays this out clearly, treatment by treatment, is the one that gets the booking months before the trip.",
            "The contact route matters too. Someone in another time zone needs WhatsApp, a stated reply time, and a way to send photos or X-rays that doesn't go through a web form.",
          ],
        },
        {
          heading: "Before-and-after photographs, with consent behind every one",
          paras: [
            "For cosmetic and restorative work, before-and-after photographs are the strongest evidence a dental site has. A real case, shown honestly, persuades more than any description of skill.",
            "Every one of those photographs shows a patient, and each needs that patient's consent for this use. The clinic holds and manages that consent; the website shows only cases it covers, and we build the gallery so a case can be removed in a minute if consent is withdrawn. Faces can be cropped to the smile where the patient prefers it.",
            "We also keep the photographs honest. Same lighting and angle before and after where possible, no retouching of the result, and a note of the treatment involved. A gallery that looks too perfect is read as marketing, and patients discount it.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "A page per treatment",
          body: "Implants, veneers, aligners, whitening and the rest, each explained plainly with visits, recovery and a price range — the pages patients and AI assistants find.",
        },
        {
          title: "Built for patients abroad",
          body: "English, French and Arabic, treatment timelines that fit a trip home, and WhatsApp with a stated reply time for patients in other time zones.",
        },
        {
          title: "A gallery you can stand behind",
          body: "Before-and-after cases shown honestly, backed by patient consent, and removable in a minute if a patient changes their mind.",
        },
      ]}
      faqs={[
        {
          q: "Should a dental clinic publish its prices?",
          a: "Price ranges, yes. Patients planning elective treatment compare clinics and contact the one that gave them a number to plan around. Give a starting figure or range per treatment in US dollars and list what changes it. The exact quote still follows the examination.",
        },
        {
          q: "What pages should a dental website have?",
          a: "A page for each main treatment, the dentists' qualifications and languages, a before-and-after gallery with consent, prices or ranges, location and hours, and a clear way to request a consultation. Each treatment page should explain visits, recovery and what moves the price.",
        },
        {
          q: "How do I attract patients from abroad to my dental clinic?",
          a: "Answer their questions on the site in English and French: how many visits each treatment needs, how far apart, what fits in a short stay, whether a first consultation can happen by video, and how follow-up works after they leave. Then make WhatsApp the easy way to start.",
        },
        {
          q: "Can I show before-and-after photos on my dental website?",
          a: "Yes, with each patient's consent for that use, which the clinic obtains and keeps. Show real, unretouched results with consistent lighting, crop to the smile if the patient prefers, and be ready to remove a case quickly if consent is withdrawn.",
        },
        {
          q: "How is a dental website different from a general clinic website?",
          a: "Much of dentistry is elective and planned, so patients search by treatment and compare prices, and many plan around travel. A general clinic site is built around trust and appointment requests. Our clinic page covers what the two share, such as never collecting health details in a form.",
        },
        {
          q: "Can patients send X-rays through the website?",
          a: "We don't recommend collecting medical images through a web form, because the files pass through third-party services. A better route is WhatsApp or email directly with the clinic, which the site can offer clearly, with a note on what to send.",
        },
        {
          q: "How much does a dental clinic website cost?",
          a: "Between $1,000 and $2,000 for most clinics, as a fixed price in US dollars agreed before work starts. A large practice with many dentists, several locations and a full treatment library in three languages is quoted individually.",
        },
      ]}
      related={[
        {
          href: "/clinic-website-design-lebanon/",
          label: "Clinic and medical websites",
          blurb:
            "What dental sites share with every medical practice: credentials first, requests not bookings, and no health data in a form.",
        },
        {
          href: "/blog/clinic-websites-what-patients-check/",
          label: "What patients check before they book",
          blurb:
            "Credentials, location, hours, insurance and how to book — the five questions, in the order patients ask them.",
        },
        {
          href: "/blog/whatsapp-and-your-website/",
          label: "WhatsApp and your website",
          blurb:
            "How a consultation request arrives complete, and how you tell which treatment page it came from.",
        },
        {
          href: "/blog/getting-cited-by-ai-assistants/",
          label: "Getting cited by AI assistants",
          blurb:
            "Patients ask ChatGPT about implants before they ask a dentist. Here's how a treatment page becomes the answer.",
        },
      ]}
    />
  );
}
