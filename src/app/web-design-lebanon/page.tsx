import type { Metadata } from "next";
import MarketPage from "@/components/seo/MarketPage";

export const metadata: Metadata = {
  title: "Web Design & Development in Lebanon",
  description:
    "Custom web design and development for Lebanese businesses. No templates, sub-second load times, trilingual layouts, and a fixed price agreed before we start.",
  alternates: { canonical: "/web-design-lebanon/" },
};

export default function Page() {
  return (
    <MarketPage
      slate="Lebanon"
      eyebrow="Web design"
      title="Web design in Lebanon."
      href="/web-design-lebanon/"
      breadcrumbName="Web Design in Lebanon"
      serviceName="Web design and development"
      areaServed="Lebanon"
      lead="Custom websites for Lebanese businesses — designed and coded from scratch, fast enough to work on a patchy connection, and priced at a fixed number you agree before anything starts."
      blocks={[
        {
          heading: "Most Lebanese business sites lose people before they load",
          paras: [
            "Connectivity here is not what it is in the Gulf or Europe. A lot of your visitors are on mobile data, on a connection that varies by the hour and by the neighbourhood. A site built on a heavy page builder, loaded with a dozen plugins and a slider that pulls three megabytes of images, will simply not finish loading for a meaningful share of them — and those people do not wait, they go back to the search results.",
            "This is the single biggest gap we see in the local market, and it is not a design problem. It is a build problem. We write the code ourselves, ship images at the size they are actually displayed, and load nothing that is not needed for what you can see. Every site we hand over loads in under a second on a normal connection, and still works on a bad one.",
            "The practical effect is that a well-built site outranks and out-converts a prettier one that is slow. Google measures load speed directly, and your customers measure it without realising they are.",
          ],
        },
        {
          heading: "Arabic, French and English are a design decision, not a plugin",
          paras: [
            "Lebanese businesses rarely speak to their customers in one language. Depending on who you sell to, you may need Arabic, French, English, or Arabic written in Latin characters — and each one changes the design, not just the words.",
            "Arabic runs right to left, which means the entire layout mirrors: navigation, buttons, the direction a reader's eye travels, where a call to action belongs. It sets at a different visual weight to Latin type, so a heading size that looks confident in English can look shouty in Arabic. Bolting a translation plugin onto a template does none of this — it produces a page that technically contains Arabic and reads like a machine wrote it.",
            "We handle multilingual builds properly: real right-to-left layouts, type chosen to work in both scripts, and language switching that search engines can follow so each version can rank on its own. If you only need one language today but might add another, we build so that adding it later is not a rebuild.",
          ],
        },
        {
          heading: "Pricing, payment and the currency question",
          paras: [
            "We quote in US dollars and we quote a fixed price. Given how the lira has behaved, a fixed number in a stable currency is the only honest way to price work that takes weeks — and it means the figure you agree at the start is the figure you pay at the end.",
            "Most projects land between $1,000 and $3,000 depending on how many pages there are, how much of the content needs writing, and how much custom design and motion is involved. A small, focused build — a single strong page doing one job — starts at $500. Larger or more complex work is quoted individually. We tell you which of those you actually need, and we have talked people out of the bigger option more than once.",
            "Payment is normally half before we start and half before launch, and we can work with bank transfer, OMT, or Wise depending on what suits you. Third-party costs like domains and hosting are yours and are billed at cost — we do not mark them up.",
          ],
        },
        {
          heading: "What the competition here is getting wrong",
          paras: [
            "The Lebanese market splits roughly in two. At one end, cheap template work — a bought theme, some stock photography, a contact form that may or may not deliver mail. It is fast to produce and it looks like everything else, which is precisely the problem when your customer is comparing three suppliers.",
            "At the other end, agencies that charge properly but hand the actual build to whoever is free, so the person who understood your business in the meeting is not the person who built the thing. What arrives is competent and generic.",
            "We sit deliberately outside both. There are two of us, we take a small number of projects at a time, and the people on the call are the people writing the code. That is the whole reason the roster stays short, and it is why we sometimes say no.",
          ],
        },
      ]}
      deliverables={[
        {
          title: "Design from zero",
          body: "No themes, no page builders, no starter template with your logo dropped in. The layout comes from your business and what it needs a visitor to do.",
        },
        {
          title: "Built for bad connections",
          body: "Sub-second loads, images sized for the slot they sit in, and nothing loaded that isn't visible. It works on 3G in a stairwell, not just on office fibre.",
        },
        {
          title: "Kept running after launch",
          body: "Optional care plan covering hosting, updates, monitoring and content changes turned around inside 48 hours. Or take the keys and go — you own everything.",
        },
      ]}
      faqs={[
        {
          q: "How much does a website cost in Lebanon?",
          a: "Most custom websites in Lebanon run between $1,000 and $3,000, with small focused builds starting at $500 and larger projects quoted individually. Scope is what moves the number: page count, how much content needs writing, and how much custom design and motion is involved. You get a fixed price in USD after a discovery call, so there is no surprise invoice at the end.",
        },
        {
          q: "Can you build a site in Arabic, French and English?",
          a: "Yes — trilingual builds are normal here and we treat them as a design problem rather than a translation one. Arabic runs right to left, so navigation, buttons and reading order all mirror, and the type has to hold its weight in both scripts. French and English share a direction but not a rhythm; the same heading set at the same size reads differently in each. Every language version gets its own URL so it can rank in search independently, and adding a third language later is not a rebuild if we plan for it now.",
        },
        {
          q: "Can you invoice in USD?",
          a: "Yes. We quote and invoice in US dollars, which is the only sensible way to price multi-week work at the moment. We can accept bank transfer, OMT or Wise depending on what is easiest for you.",
        },
        {
          q: "Can I take card payments online from a Lebanese business?",
          a: "Yes, but not through Stripe — it does not operate in Lebanon, and PayPal will let you send money far more easily than receive it. What does work is a merchant account through a local bank or processor such as Areeba, or a local wallet like Whish, alongside OMT and bank transfer for customers who prefer them. Which of those is available to you depends on your bank and your commercial registration, so we check what you can actually get approved for before we design the checkout rather than after.",
        },
        {
          q: "Should I register a .lb domain or a .com?",
          a: "For most businesses, .com. A .com.lb domain is administered through the registry run by AUB and requires documentation proving your registered business name, which takes time and paperwork a .com does not. The local extension signals you are Lebanese, which is worth something if all your customers are here — but it is not a ranking advantage, and it is harder to move if you ever sell abroad. Plenty of clients register both and point one at the other.",
        },
        {
          q: "Do we need to meet in person?",
          a: "Not unless you want to. The whole process runs over calls, a shared channel for questions, and live preview links you can open at any stage to see exactly where the build is. We are in Beirut, so meeting is possible — it is just rarely necessary.",
        },
        {
          q: "How long does a website take?",
          a: "Three to six weeks from kickoff for most builds, and you get the launch date before we start. Landing pages can ship in under two weeks. The date assumes content and feedback come back within the agreed windows; if something is delayed on your side we tell you immediately rather than letting the date drift quietly.",
        },
        {
          q: "Will my site rank on Google in Lebanon?",
          a: "The technical groundwork is built in from day one — clean semantic markup, structured data, fast loads, and content organised around what your customers actually search for. That is what we control. Rankings themselves depend on your competition, how long the site has been live, and links pointing at it, and they build over months. Anyone guaranteeing you a position is guessing.",
        },
      ]}
      related={[
        {
          href: "/work/burger-shop/",
          label: "A Beirut build, in detail",
          blurb:
            "The decisions behind a live Lebanese site: a bilingual menu, and a checkout that ends in WhatsApp because card processing wasn't an option.",
        },
        {
          href: "/blog/how-much-does-a-custom-website-cost/",
          label: "What a custom website actually costs",
          blurb:
            "Real price ranges, what moves the number up or down, and what you should refuse to pay for.",
        },
        {
          href: "/seo-lebanon/",
          label: "SEO in Lebanon",
          blurb:
            "Building the site is half of it. This is the work that gets it found once it's live.",
        },
        {
          href: "/google-ads-lebanon/",
          label: "Google Ads in Lebanon",
          blurb:
            "The faster route to traffic while search presence builds underneath it.",
        },
      ]}
    />
  );
}
