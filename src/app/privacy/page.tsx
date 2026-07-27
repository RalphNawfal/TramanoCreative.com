import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tramano Creative handles your data. No cookies, no analytics, no tracking — the only information we hold is what you type into the contact form.",
  alternates: { canonical: "/privacy/" },
};

const UPDATED = "26 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy/" }]} />
      <div className="pt-20">
        <Section slate={`Last updated ${UPDATED}`} eyebrow="Legal" title="Privacy policy" titleAs="h1">
          <div className="prose-tramano max-w-[68ch]">
            <p className="lead">
              This policy explains what {site.name} does with your information
              when you use {site.domain}. It is written to describe what this
              website actually does, not what a template assumes it does.
            </p>

            <h2>The short version</h2>
            <p>
              This website sets <strong>no cookies</strong>, runs{" "}
              <strong>no analytics</strong>, and contains{" "}
              <strong>no tracking pixels, advertising tags or third-party
              embeds</strong>. It stores nothing on your device — no cookies, no
              local storage, no session storage. We do not build a profile of
              you, and we do not sell or share your information for advertising.
            </p>
            <p>
              The only personal information we receive is what you choose to
              type into the contact form and send us.
            </p>

            <h2>Who we are</h2>
            <p>
              {site.name} is a web design and digital marketing studio run by{" "}
              {site.founders.join(" and ")}, based in Lebanon and working with
              clients internationally. For anything in this policy, contact us
              at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
            </p>

            <h2>What we collect, and when</h2>
            <h3>Information you send us through the contact form</h3>
            <p>
              When you submit the form on our{" "}
              <Link href="/contact/">contact page</Link>, these fields are sent
              to us:
            </p>
            <ul>
              <li>Your name (required)</li>
              <li>Your email address (required)</li>
              <li>Your company name or current website (optional)</li>
              <li>Project type, budget range and timeline (required)</li>
              <li>Your message (required)</li>
            </ul>
            <p>
              We use this for one purpose: to reply to you and, if it goes
              further, to discuss and deliver a project. We do not add you to a
              mailing list, and we do not send marketing sequences.
            </p>
            <p>
              The lawful basis under the UK and EU GDPR is our legitimate
              interest in responding to enquiries about our services, and —
              where a project proceeds — the performance of a contract with you.
            </p>

            <h3>Information collected automatically by our host</h3>
            <p>
              This site is served as static files by <strong>GitHub Pages</strong>.
              Like any web host, GitHub records standard server logs when a page
              is requested, which include IP addresses. We do not have access to
              these logs and cannot query them, but you should know they exist.
              GitHub&apos;s handling of that data is governed by the{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>

            <h2 id="cookies">Cookies and tracking</h2>
            <p>
              <strong>This website does not use cookies.</strong> That is not a
              qualified statement — there is no cookie banner because there is
              nothing to consent to.
            </p>
            <p>Specifically, this site does not:</p>
            <ul>
              <li>set or read any cookies, first-party or third-party;</li>
              <li>
                write to local storage, session storage or IndexedDB on your
                device;
              </li>
              <li>
                run Google Analytics, Google Tag Manager, Meta Pixel, or any
                other analytics or advertising script;
              </li>
              <li>
                embed third-party widgets, iframes, maps, chat tools or video
                players;
              </li>
              <li>fingerprint your device or track you across other sites.</li>
            </ul>
            <p>
              One detail worth stating because it is unusual: our fonts are{" "}
              <strong>downloaded and bundled at build time</strong> rather than
              fetched from Google&apos;s servers when you visit. Most sites using
              Google Fonts disclose your IP address to Google on every page
              load. This one does not — no request leaves your browser for
              Google, or for any other third party, simply by reading a page
              here.
            </p>
            <p>
              The only outbound request this site makes to anyone else happens
              when you press Send on the contact form. If you never use the
              form, no third party receives anything about you from us.
            </p>
            <p>
              If we add analytics in future, we will update this section before
              doing so, and we will choose something that does not require
              tracking individuals.
            </p>

            <h2>Who else receives your information</h2>
            <p>
              We keep this list short deliberately. Two companies are involved:
            </p>
            <ul>
              <li>
                <strong>Formspree</strong> — processes our contact form. When
                you press Send, the form fields go to Formspree, which forwards
                them to our inbox and also retains a copy in our Formspree
                account. Formspree may additionally log technical details of the
                submission such as your IP address and browser, under its own{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong>GitHub Pages</strong> — hosts and serves the website, as
                described above.
              </li>
            </ul>
            <p>
              We do not sell your personal information, and we do not share it
              with advertisers, data brokers or anyone else. If a legal
              obligation ever required us to disclose information, we would do
              so only to the extent required.
            </p>

            <h2>International transfers</h2>
            <p>
              We are based in Lebanon and work with clients in the Gulf, Europe,
              North America and elsewhere. Formspree and GitHub are US-based, so
              information you send through the contact form is processed outside
              your country and, if you are in the UK or EEA, outside those
              areas. If you would rather not use the form, email or call us
              directly using the details above.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Enquiries that do not become projects are deleted from our inbox
              and our Formspree account within 24 months. If we work together,
              we keep project correspondence and records for as long as needed
              to deliver the work and to meet our accounting and legal
              obligations afterwards. You can ask us to delete your enquiry at
              any time and we will.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on where you live, you may have the right to ask us to:
            </p>
            <ul>
              <li>confirm what personal information we hold about you;</li>
              <li>provide a copy of it, or send it to someone else;</li>
              <li>correct it if it is wrong;</li>
              <li>delete it;</li>
              <li>
                stop or limit how we use it, including objecting to processing
                based on legitimate interests.
              </li>
            </ul>
            <p>
              Email <a href={`mailto:${site.email}`}>{site.email}</a> and we will
              respond within 30 days. There is no charge. If you are in the UK
              or EEA and think we have handled your information badly, you can
              also complain to your national data protection authority.
            </p>

            <h2>Children</h2>
            <p>
              This is a business-to-business website and is not directed at
              children. We do not knowingly collect information from anyone
              under 16.
            </p>

            <h2>Security</h2>
            <p>
              The site is served over HTTPS. Because it is a static website with
              no database, no login and no server-side code of ours, there is no
              account to breach and no stored customer database on our side. The
              form data resides with Formspree and in our email.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we change how any of this works, we will update this page and
              the date at the top. Material changes to what we collect will be
              described here rather than made quietly.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy, or a request about your information:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </Section>
      </div>
    </>
  );
}
