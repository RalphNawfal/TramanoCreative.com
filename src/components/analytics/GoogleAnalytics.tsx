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

  if (!id || consent !== "granted") return null;

  return (
    <>
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
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
