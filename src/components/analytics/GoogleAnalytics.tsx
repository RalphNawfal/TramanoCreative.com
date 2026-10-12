"use client";

import Script from "next/script";
import { site } from "@/lib/site";
import { useConsent } from "@/lib/consent";

/**
 * GA4, loaded only after consent.
 *
 * Two things are deliberate here. First, the script tag is not rendered at
 * all until consent is granted, so declining costs Google nothing and tells
 * it nothing. Second, Consent Mode v2 defaults are still declared before
 * `config` runs, because the visitor accepted analytics — not advertising:
 * ad_storage and the personalization signals stay denied unless you later
 * decide to run remarketing, which would need its own disclosure.
 */
export default function GoogleAnalytics() {
  const id = site.analytics.ga4MeasurementId;
  const consent = useConsent();

  // With `requireConsent: false` the tag loads for everyone and no banner is
  // shown. The privacy policy carries the disclosure instead — see the note on
  // that flag in src/lib/site.ts before changing this.
  const allowed = site.analytics.requireConsent ? consent === "granted" : true;

  // Our own visits. Opening any page with ?internal=1 flags that browser and
  // GA4 stops sending from it; ?internal=0 undoes it. Before this, our own
  // test sends counted as leads (GA4 had 8 in 90 days, the inbox 5). The flag
  // only exists on browsers we set it on, so visitors never get it and the
  // privacy policy stays accurate.

  if (!id || !allowed) return null;

  return (
    <>
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          try {
            var internal = new URLSearchParams(location.search).get('internal');
            if (internal === '1') localStorage.setItem('tc_internal', '1');
            if (internal === '0') localStorage.removeItem('tc_internal');
            if (localStorage.getItem('tc_internal') === '1') window['ga-disable-${id}'] = true;
          } catch (e) {}
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
