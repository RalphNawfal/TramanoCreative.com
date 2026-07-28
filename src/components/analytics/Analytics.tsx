import Script from "next/script";
import { site } from "@/lib/site";

/**
 * Cloudflare Web Analytics beacon.
 *
 * `afterInteractive` rather than `beforeInteractive`: a page view that costs
 * the visitor render time is a bad trade for a studio selling sub-second
 * loads. The beacon reports Core Web Vitals from real visitors, so it also
 * doubles as the field-data source that Lighthouse can't give us.
 *
 * Renders nothing at all until the token is set, which keeps the "no
 * third-party requests" claim in the privacy policy honest in the meantime.
 */
export default function Analytics() {
  if (!site.analytics.cloudflareToken) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({
        token: site.analytics.cloudflareToken,
      })}
    />
  );
}
