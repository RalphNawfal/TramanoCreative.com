import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { site } from "@/lib/site";
import ConsentControls from "@/components/analytics/ConsentControls";

/**
 * Every claim on this page is derived from `site.analytics`, not written by
 * hand, so the policy cannot drift out of step with what the site loads. Each
 * token that gets filled in relaxes exactly the claims it invalidates and no
 * others — turning on GA4 must not quietly weaken the statements that are
 * still true.
 */
const cfEnabled = Boolean(site.analytics.cloudflareToken);
const ga4Enabled = Boolean(site.analytics.ga4MeasurementId);
const anyAnalytics = cfEnabled || ga4Enabled;

/**
 * Whether GA4 is gated behind a banner.
 *
 * When it isn't, this page is the only place a visitor can find out what is
 * being set on their device — so the `askConsent === false` branch below has
 * to be specific: both cookie names, what they hold, how long they last, and
 * real ways to refuse. That specificity is the whole justification for not
 * asking. Weakening it turns a disclosed practice into an undisclosed one.
 */
const askConsent = ga4Enabled && site.analytics.requireConsent;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: askConsent
    ? "How Tramano Creative handles your data. Analytics cookies only if you accept them, no advertising trackers, and the information you type into the contact form."
    : ga4Enabled
    ? "How Tramano Creative handles your data — exactly which analytics cookies are set, what they hold, and three ways to refuse them. No advertising trackers."
    : anyAnalytics
      ? "How Tramano Creative handles your data. No cookies, no tracking, no profiling — anonymous visit counts and the information you type into the contact form."
      : "How Tramano Creative handles your data. No cookies, no analytics, no tracking — the only information we hold is what you type into the contact form.",
  alternates: { canonical: "/privacy/" },
};

const UPDATED = "27 July 2026";

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
            {ga4Enabled && !askConsent ? (
              <p>
                This website uses <strong>Google Analytics</strong> to count
                visits, and it loads on every visit. It sets{" "}
                <strong>two first-party cookies</strong> holding a random
                number — no name, no email, nothing you typed. There is no
                cookie banner; we describe it here instead, and{" "}
                <a href="#cookies">how to refuse it</a> is three clicks away.
                There are <strong>no advertising tags, remarketing pixels or
                third-party embeds</strong>, and we do not sell or share your
                information.
              </p>
            ) : ga4Enabled ? (
              <p>
                This website asks before it measures anything. Google Analytics
                is used to count visits, and because it sets cookies{" "}
                <strong>it does not load at all unless you press Accept</strong>
                . Decline, or simply ignore the prompt, and no request is ever
                made to Google — the site behaves identically either way. There
                are <strong>no advertising tags, remarketing pixels or
                third-party embeds</strong> in any case, and we do not sell or
                share your information.
              </p>
            ) : cfEnabled ? (
              <p>
                This website sets <strong>no cookies</strong> and contains{" "}
                <strong>no tracking pixels, advertising tags or third-party
                embeds</strong>. It stores nothing on your device — no cookies,
                no local storage, no session storage. We count visits using a
                privacy-preserving tool that does not identify you or follow you
                between sites. We do not build a profile of you, and we do not
                sell or share your information for advertising.
              </p>
            ) : (
              <p>
                This website sets <strong>no cookies</strong>, runs{" "}
                <strong>no analytics</strong>, and contains{" "}
                <strong>no tracking pixels, advertising tags or third-party
                embeds</strong>. It stores nothing on your device — no cookies,
                no local storage, no session storage. We do not build a profile
                of you, and we do not sell or share your information for
                advertising.
              </p>
            )}
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
              The submission also tells us{" "}
              <strong>which page you were reading when you sent it</strong>, the
              page you first arrived on, and — if you reached us from a search
              engine, a link elsewhere or one of our ads — where that click came
              from. This is how we learn which of our pages are worth writing.
              It is read off the address bar and the standard browser referrer
              at the moment you press Send; it is not stored on your device
              beforehand, and if you never submit the form we never receive it.
            </p>
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
            {ga4Enabled && !askConsent ? (
              <>
                <p>
                  <strong>
                    This website uses Google Analytics, and it loads on every
                    visit.
                  </strong>{" "}
                  There is no cookie banner. We would rather tell you plainly
                  what is set and how to refuse it than interrupt you with a
                  dialog most people click through without reading.
                </p>
                <p>Google Analytics sets two first-party cookies:</p>
                <ul>
                  <li>
                    <code>_ga</code> — a random identifier used to recognise a
                    returning browser so one person is not counted as several.
                    Expires after two years.
                  </li>
                  <li>
                    <code>_ga_{site.analytics.ga4MeasurementId.replace("G-", "")}</code>{" "}
                    — holds session state for this specific property. Expires
                    after two years.
                  </li>
                </ul>
                <p>
                  Neither holds your name, your email, or anything you typed.
                  They hold a random number. We use what they measure to see
                  which pages are worth writing more of, and nothing else.
                </p>
                <p>This site does not:</p>
                <ul>
                  <li>
                    run advertising, remarketing or conversion pixels — Google
                    Consent Mode is set to deny ad storage, ad user data and ad
                    personalisation on every page load, so this data cannot be
                    used to target you;
                  </li>
                  <li>
                    embed third-party widgets, iframes, maps, chat tools or
                    video players;
                  </li>
                  <li>fingerprint your device;</li>
                  <li>sell or share what it measures with anyone.</li>
                </ul>
                <p>
                  IP anonymisation is enabled, so your address is truncated by
                  Google before it is stored.
                </p>
                <p>
                  <strong>How to refuse.</strong> Any of these work and none of
                  them degrade the site:
                </p>
                <ul>
                  <li>
                    Block third-party and analytics cookies in your browser
                    settings. Firefox and Safari block much of this by default.
                  </li>
                  <li>
                    Install Google&apos;s official{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Analytics Opt-out Browser Add-on
                    </a>
                    , which stops GA on every site you visit, not just this one.
                  </li>
                  <li>
                    Use a content blocker. We do not detect, circumvent or
                    complain about them.
                  </li>
                </ul>
                <p>
                  If you would rather we removed the tag entirely, say so at{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a> and we will
                  tell you plainly what we decide.
                </p>
              </>
            ) : ga4Enabled ? (
              <>
                <p>
                  <strong>
                    This website sets no cookies until you allow it to.
                  </strong>{" "}
                  On your first visit you are asked once. Nothing is stored and
                  no request is sent to Google before you answer, and declining
                  is a single click that costs you nothing — the site is not
                  degraded, gated or nagged afterwards.
                </p>
                <p>If you press Accept, Google Analytics sets:</p>
                <ul>
                  <li>
                    <code>_ga</code> and <code>_ga_&lt;id&gt;</code> — first-party
                    cookies holding a random identifier used to recognise a
                    returning browser and avoid counting one person as several.
                    They expire after two years.
                  </li>
                </ul>
                <p>Whether you accept or not, this site does not:</p>
                <ul>
                  <li>
                    run advertising, remarketing or conversion pixels — no Meta
                    Pixel, no ad tags, no cross-site audiences;
                  </li>
                  <li>
                    embed third-party widgets, iframes, maps, chat tools or
                    video players;
                  </li>
                  <li>
                    fingerprint your device, or sell or share what it measures.
                  </li>
                </ul>
                <p>
                  We also store one small item regardless of your answer: your
                  answer itself, kept in your browser&apos;s local storage under{" "}
                  <code>tc-consent</code> so you are not asked again on every
                  page. It holds a single word — accepted or declined — and no
                  identifier. Clearing your browser storage resets the question.
                </p>
                <p>
                  <strong>Changing your mind</strong> is deliberately easy. Use
                  the button below; if you withdraw consent, the Google
                  Analytics script stops loading immediately on your next page
                  view.
                </p>
                <ConsentControls />
              </>
            ) : (
              <>
                <p>
                  <strong>This website does not use cookies.</strong> That is
                  not a qualified statement — there is no cookie banner because
                  there is nothing to consent to.
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
                    advertising or remarketing script
                    {cfEnabled
                      ? " — the one measurement script we do run is described below"
                      : ""}
                    ;
                  </li>
                  <li>
                    embed third-party widgets, iframes, maps, chat tools or
                    video players;
                  </li>
                  <li>
                    fingerprint your device or track you across other sites.
                  </li>
                </ul>
              </>
            )}
            <p>
              One detail worth stating because it is unusual: our fonts are{" "}
              <strong>downloaded and bundled at build time</strong> rather than
              fetched from Google&apos;s servers when you visit. Most sites using
              Google Fonts disclose your IP address to Google on every page
              load. This one does not
              {askConsent
                ? " — reading a page here contacts Google only if you accepted analytics, and never merely to render type."
                : ga4Enabled
                  ? " — the analytics request described above is the only one that reaches Google, and never one merely to render type."
                  : " — no request leaves your browser for Google, or for any other third party, simply by reading a page here."}
            </p>
            {anyAnalytics && <h2 id="analytics">Visitor measurement</h2>}
            {ga4Enabled && (
              <>
                <p>
                  {askConsent ? "If you accept, we use" : "We use"}{" "}
                  <strong>Google Analytics 4</strong> to see which pages are
                  read, how people reach us, and which of them go on to contact
                  us. Alongside page views we record a small number of named
                  actions: submitting the contact form, pressing a
                  call-to-action, tapping a phone or email link, and how far
                  down a long page you read.
                </p>
                <p>
                  Those actions are recorded as counts against a page, not
                  against a person we can name. We do not upload your email
                  address or any other identifier from the contact form into
                  Analytics, and we have not enabled Google Signals, advertising
                  personalisation or remarketing audiences — the advertising
                  consent flags stay switched off{" "}
                  {askConsent ? "even for visitors who accept" : "on every page load"}.
                  IP addresses are anonymised before storage.
                </p>
                <p>
                  Google acts as our processor for this and may transfer data to
                  the United States under its{" "}
                  <a
                    href="https://business.safety.google/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    business privacy terms
                  </a>
                  . Our lawful basis is your consent, which you can withdraw at
                  any time using the button above.
                </p>
              </>
            )}
            {cfEnabled && (
              <>
                <p>
                  We also use{" "}
                  <a
                    href="https://www.cloudflare.com/web-analytics/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cloudflare Web Analytics
                  </a>{" "}
                  to see how many people read these pages, which pages they
                  read, roughly where in the world they are, and how fast the
                  site loaded for them. We use it to fix slow pages and to write
                  more of what gets read.
                </p>
                <p>
                  It is <strong>cookieless</strong>. It sets no cookie, writes
                  nothing to your device, assigns you no identifier, and cannot
                  follow you to any other website
                  {ga4Enabled
                    ? ", so it needs no consent and runs for everyone"
                    : " — which is why there is still no consent banner on this site"}
                  . Measurement is derived from a page-load signal, not from a
                  profile of you, and we cannot single out an individual visitor
                  in it. Cloudflare processes this on our behalf under its{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy policy
                  </a>
                  ; it does not use the data to build advertising profiles.
                </p>
                <p>
                  Our lawful basis under the UK and EU GDPR is legitimate
                  interest in understanding whether our own website works. If
                  you would rather not be counted at all, any browser
                  content-blocker will stop the script, and nothing on the site
                  breaks if you do.
                </p>
              </>
            )}
            {!anyAnalytics && (
              <>
                <p>
                  The only outbound request this site makes to anyone else
                  happens when you press Send on the contact form. If you never
                  use the form, no third party receives anything about you from
                  us.
                </p>
                <p>
                  If we add analytics in future, we will update this section
                  before doing so, and we will choose something that does not
                  require tracking individuals.
                </p>
              </>
            )}

            <h2>Who else receives your information</h2>
            <p>
              We keep this list short deliberately.{" "}
              {["Two", "Three", "Four"][Number(cfEnabled) + Number(ga4Enabled)]}{" "}
              companies are involved:
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
              {cfEnabled && (
                <li>
                  <strong>Cloudflare</strong> — provides the cookieless visit
                  measurement described under{" "}
                  <Link href="/privacy/#analytics">visitor measurement</Link>.
                </li>
              )}
              {ga4Enabled && (
                <li>
                  <strong>Google</strong> — provides Google Analytics.{" "}
                  {askConsent
                    ? "Only for visitors who accepted it; if you declined, Google receives nothing from your visit at all."
                    : "It runs on every visit, and Google receives the page views and events described above. The ways to prevent that are listed under cookies and tracking."}
                </li>
              )}
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
