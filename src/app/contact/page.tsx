import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Tell Tramano Creative about your project. We reply within one business day with honest feedback and a clear path to launch.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Section eyebrow="Open a channel" title="Tell us about the mission." grid>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-ink-muted">
              Fill in the flight plan and we&apos;ll reply within one business
              day — with honest feedback, not a sales script. If we&apos;re not
              the right crew for your project, we&apos;ll tell you.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              Direct frequency
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-cyan-bright hover:glow-text"
            >
              {site.email}
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
