import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms Tramano Creative works under — fixed pricing, payment, timelines, who owns the finished work, and the limits of our liability. Read before you sign.",
  alternates: { canonical: "/terms/" },
};

const UPDATED = "26 July 2026";

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", href: "/terms/" }]} />
      <div className="pt-20">
        <Section slate={`Last updated ${UPDATED}`} eyebrow="Legal" title="Terms of service" titleAs="h1">
          <div className="prose-tramano max-w-[68ch]">
            <p className="lead">
              These terms cover the use of {site.domain} and the services{" "}
              {site.name} provides. Where we have signed a separate written
              proposal or contract with you, that document governs the project
              and these terms fill in anything it does not address.
            </p>

            <h2>1. Who we are</h2>
            <p>
              {site.name} (&quot;we&quot;, &quot;us&quot;) is a web design and
              digital marketing studio operated by {site.founders.join(" and ")},
              based in Lebanon and working with clients internationally. Contact:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>2. Using this website</h2>
            <p>
              You may read, share and link to anything published here. The
              website itself — its design, code, text and images — belongs to us
              and may not be copied or reproduced as your own work. Screenshots
              shown on our <Link href="/work/">work page</Link> depict projects
              we designed and built; the brands and trademarks appearing in them
              belong to their respective owners.
            </p>
            <p>
              Nothing on this site is a binding offer. Prices and timeframes
              mentioned in articles or on service pages are indicative ranges,
              not quotes.
            </p>

            <h2>3. Quotes and pricing</h2>
            <p>
              We quote a fixed price after a discovery call and a written scope.
              That price holds for the work described in the scope. If you ask
              for something outside it, we will tell you the cost before doing
              it — you will not receive an invoice for work you did not agree
              to.
            </p>
            <p>
              Quotes are valid for 30 days unless stated otherwise. Ongoing
              services such as care plans and ad management are billed monthly
              and can be cancelled with 30 days&apos; notice.
            </p>

            <h2>4. Payment</h2>
            <p>
              Unless agreed otherwise in writing, project work is invoiced 50%
              before we begin and 50% on completion, before the site goes live.
              Invoices are due within 14 days. We may pause work on overdue
              accounts. Third-party costs you authorise — domains, hosting,
              stock imagery, ad spend — are yours and are billed at cost or paid
              by you directly.
            </p>
            <p>
              Advertising budgets are paid by you to the platform. Our fee is
              for managing the campaigns and is separate from what you spend on
              ads.
            </p>

            <h2>5. Timelines and what we need from you</h2>
            <p>
              We give you a launch date before we start and we work to it. That
              date assumes you provide content, feedback and approvals within
              the agreed windows. If material is delayed on your side, the
              launch date moves by a comparable amount — we will tell you when
              that happens rather than let it drift silently.
            </p>
            <p>
              If a project goes quiet on your side for more than 60 days, we may
              treat it as paused, invoice for work completed to that point, and
              re-schedule the remainder when you are ready.
            </p>

            <h2>6. Ownership of the work</h2>
            <p>
              On final payment, <strong>you own the delivered website</strong> —
              the design, the code we wrote for it, and its content. You own your
              domain and your accounts. There is no licence to renew and nothing
              to lose access to if you stop working with us.
            </p>
            <p>
              Two carve-outs. First, third-party components — open-source
              libraries, fonts, stock imagery — remain under their own licences,
              which we pass to you. Second, we retain the underlying tools,
              techniques and generic components we bring to every project, and
              we reserve the right to reuse them.
            </p>
            <p>
              <strong>Portfolio rights:</strong> unless you ask us in writing not
              to, we may show the work we did for you as part of our portfolio,
              including screenshots and a description of what we built. If
              confidentiality matters to you, tell us and we will keep it off the
              site.
            </p>

            <h2>7. The credit link</h2>
            <p>
              Sites we build carry a small credit linking back to us in the
              footer. It is part of how we are found, and it is why the quality
              of every site we ship matters to us. If you would prefer it
              removed, ask — we will discuss it rather than refuse, though it may
              affect pricing.
            </p>

            <h2>8. What we do and do not promise</h2>
            <p>
              We promise to do the work described in your scope competently and
              on time, and to tell you honestly what we think will and will not
              work.
            </p>
            <p>
              We cannot promise specific commercial outcomes. Search rankings,
              traffic volumes, advertising costs and conversion rates depend on
              your market, your competitors, your pricing and decisions made by
              Google and other platforms — none of which we control. Anyone who
              guarantees you a ranking is guessing or lying. We will show you
              what we did, what it cost and what happened.
            </p>
            <p>
              Services are provided on an &quot;as is&quot; basis to the extent
              permitted by law, and we disclaim implied warranties of
              merchantability and fitness for a particular purpose.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, our total liability arising
              from a project is limited to the fees you paid us for that project
              in the 12 months before the claim. We are not liable for indirect
              or consequential losses, including lost profits, lost revenue,
              lost data or business interruption.
            </p>
            <p>
              Nothing in these terms limits liability for fraud, or for anything
              else that cannot lawfully be limited.
            </p>

            <h2>10. Third-party platforms</h2>
            <p>
              Some of what we deliver depends on services we do not run —
              hosting providers, Google Ads, Google Search, analytics tools,
              email providers. We are not responsible for their outages, policy
              changes, account suspensions or pricing decisions, though we will
              help you deal with them.
            </p>

            <h2>11. Confidentiality</h2>
            <p>
              We keep what you tell us about your business confidential and use
              it only to do the work, subject to the portfolio rights in section
              6. We expect the same of any commercially sensitive material we
              share with you.
            </p>

            <h2>12. Ending the engagement</h2>
            <p>
              Either of us can end a project in writing. If you end it, you pay
              for work completed up to that point and we hand over what has been
              produced and paid for. If we end it — which we would only do for
              non-payment or if a working relationship has become untenable — we
              will refund any fees paid for work not yet done.
            </p>

            <h2>13. Governing law</h2>
            <p>
              These terms are governed by the laws of Lebanon, and the courts of
              Beirut have jurisdiction — unless a signed contract with you says
              otherwise, in which case that contract prevails.
            </p>

            <h2>14. Changes</h2>
            <p>
              We may update these terms. The version published here on the date
              your project is agreed is the version that applies to it.
            </p>

            <h2>15. Contact</h2>
            <p>
              Questions about any of this:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </Section>
      </div>
    </>
  );
}
