import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Book the Call",
  description:
    "Tell Tramano Creative about your business. One honest 30–45 minute call — questions first, recommendations second, and a reply within one business day.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Section eyebrow="Contact" title="Tell us about your business." grid>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-ink-muted">
              Fill this in and we&apos;ll reply within one business day — with
              honest feedback, not a sales script. If we&apos;re not the right
              fit for your project, we&apos;ll tell you.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-gold-bright hover:glow-text"
            >
              {site.email}
            </a>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              Phone / WhatsApp
            </p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-2 inline-block text-gold-bright hover:glow-text"
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
  );
}
