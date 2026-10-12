import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";
import {
  campaigns,
  campaignMethod,
  type Campaign,
} from "@/lib/campaign-results";

/**
 * Campaign numbers in place of testimonials.
 *
 * Body only, no section header: it is dropped into /work/ and into the Google
 * Ads page, which each frame it under their own heading. The lead campaign gets
 * its month-by-month climb drawn out; the rest are one card each.
 *
 * The bars are plain divs sized by percentage of the best month, so they
 * render at build time with no chart library and no client JavaScript.
 */
export default function CampaignResults() {
  const [lead, ...rest] = campaigns;

  return (
    <div>
      <p className="max-w-[60ch] text-lg leading-[1.65] text-grey">
        Ralph has built and managed search campaigns for businesses in Canada.
        These are five of them, with the numbers copied straight from the
        campaign dashboards and the client names left off. No quotes, no star
        ratings — just what the campaigns did.
      </p>

      <Reveal delay={0.1}>
        <LeadCampaign campaign={lead} />
      </Reveal>

      <Spotlight className="mt-px grid gap-px overflow-hidden border border-t-0 border-edge bg-edge md:grid-cols-2">
        {rest.map((c, i) => (
          <Reveal
            key={c.sector}
            delay={i * 0.08}
            className="spotlight-cell relative bg-carbon-lift"
          >
            <div className="relative h-full p-8">
              <p className="slate">{c.sector}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-grey-deep">
                {c.span}
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                <Figure label="Conversions" value={c.conversions} />
                <Figure label="Rate" value={c.conversionRate} />
                {c.calls !== undefined ? (
                  <Figure label="Calls" value={c.calls} />
                ) : (
                  <Figure label="Clicks" value={c.clicks} />
                )}
              </dl>
              <p className="mt-7 text-[15px] leading-[1.6] text-grey">
                {c.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </Spotlight>

      <Reveal delay={0.2}>
        <p className="mt-10 max-w-[68ch] text-[15px] leading-[1.7] text-grey-deep">
          {campaignMethod}
        </p>
      </Reveal>
    </div>
  );
}

function LeadCampaign({ campaign }: { campaign: Campaign }) {
  const months = campaign.months ?? [];
  const best = Math.max(1, ...months.map((m) => m.conversions));

  return (
    <div className="mt-14 border border-edge bg-carbon-lift p-8 md:p-12">
      <div className="md:flex md:items-end md:justify-between md:gap-10">
        <div>
          <p className="slate">{campaign.sector}</p>
          <h3 className="mt-4 max-w-[22ch] font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            From zero conversions to {campaign.conversions.toLocaleString("en-US")}.
          </h3>
        </div>
        <dl className="mt-8 grid grid-cols-3 gap-6 md:mt-0 md:min-w-[22rem]">
          <Figure label="Clicks" value={campaign.clicks} />
          <Figure label="Rate" value={campaign.conversionRate} />
          {campaign.costPerConversion && (
            <Figure label="Per conversion" value={campaign.costPerConversion} />
          )}
        </dl>
      </div>

      <ol className="mt-12 space-y-7">
        {months.map((m) => (
          <li key={m.label} className="md:grid md:grid-cols-12 md:items-center md:gap-8">
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">
                {m.label}
              </p>
              <p className="mt-1 text-[13px] text-grey-deep">{m.period}</p>
            </div>
            <div className="mt-3 md:col-span-6 md:mt-0">
              <div className="flex items-center gap-4">
                <div className="h-2 flex-1 bg-edge">
                  <div
                    className="h-full bg-signal"
                    style={{ width: `${(m.conversions / best) * 100}%` }}
                  />
                </div>
                <p className="w-12 text-right font-display text-xl tabular-nums">
                  {m.conversions}
                </p>
              </div>
            </div>
            <p className="mt-2 text-[14px] leading-[1.55] text-grey md:col-span-3 md:mt-0">
              {m.note}
              {m.costPerConversion && ` ${m.costPerConversion} per conversion.`}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-[62ch] text-[15px] leading-[1.65] text-grey">
        {campaign.summary}
      </p>
    </div>
  );
}

function Figure({ label, value }: { label: string; value: number | string }) {
  return (
    // Label after the number visually, before it in the markup, so a screen
    // reader hears "Conversions, 979" and the dl stays valid.
    <div className="flex flex-col-reverse">
      <dt className="slate mt-3">{label}</dt>
      <dd className="font-display text-2xl leading-none tabular-nums">
        {typeof value === "number" ? value.toLocaleString("en-US") : value}
      </dd>
    </div>
  );
}
