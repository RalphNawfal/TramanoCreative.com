import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book an Honest 30-Minute Call",
  description:
    "Tell Tramano Creative about your business. One honest 30–45 minute call — questions first, recommendations second, and a reply within one business day.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact/" }]} />
      {/*
        Typed as ContactPage so an assistant asked "how do I get in touch with
        Tramano" has one unambiguous URL to name, rather than inferring it.
        The contact details themselves stay on #organization — repeating them
        here would create a second, separately-maintained copy.
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${site.url}/contact/#contact`,
          name: "Contact Tramano Creative",
          description:
            "Book a 30–45 minute call with Tramano Creative. Replies within one business day.",
          url: `${site.url}/contact/`,
          inLanguage: "en",
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": `${site.url}/#organization` },
          mainEntity: { "@id": `${site.url}/#organization` },
        }}
      />
    <div className="pt-20">
      <Section slate="Last frame" eyebrow="Contact" title="Tell us about your business." titleAs="h1">
        <div className="grid gap-14 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-grey">
              Fill this in and we&apos;ll write back within one business day —
              with an actual opinion, not a sales script. If we&apos;re not the
              right fit, we&apos;ll tell you that instead.
            </p>
            <p className="slate mt-10">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-white transition-colors hover:text-signal"
            >
              {site.email}
            </a>
            <p className="slate mt-8">Phone / WhatsApp</p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-3 inline-block text-white transition-colors hover:text-signal"
            >
              {site.phone}
            </a>
          </div>
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
    </>
  );
}
