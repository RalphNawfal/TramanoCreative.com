"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/** Pages long enough for scroll depth to mean anything. */
const DEEP_READ = /^\/(web-design-|google-ads-|seo-|blog\/)/;

const SCROLL_MARKS = [25, 50, 75, 100] as const;

/**
 * One delegated listener for every tracked click on the site.
 *
 * Deliberately not per-component: phone and email links appear in the footer,
 * the contact page, the about page and both legal pages, and CTAs are spread
 * across the nav, the hero and every section end. Wiring handlers into each
 * would mean a dozen edits now and a silent gap the next time someone adds a
 * link. Delegation means new links are tracked the day they're written.
 *
 * Every call routes through `track`, which no-ops unless GA4 loaded after
 * consent — so this component is inert for anyone who declined.
 */
export default function EventTracking() {
  const pathname = usePathname();
  const reached = useRef<Set<number>>(new Set());

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const label = (link.textContent ?? "").trim().slice(0, 60);

      if (href.startsWith("tel:")) {
        track("contact_click", { method: "phone", page: window.location.pathname });
        return;
      }
      if (href.startsWith("mailto:")) {
        track("contact_click", { method: "email", page: window.location.pathname });
        return;
      }
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("contact_click", { method: "whatsapp", page: window.location.pathname });
        return;
      }

      // Internal CTA: anything pointing at the contact page. This is the
      // click that matters — it's the step before the only conversion.
      if (href === "/contact/" || href.startsWith("/contact/#")) {
        track("cta_click", { label, page: window.location.pathname });
        return;
      }

      if (/^https?:\/\//.test(href) && !href.startsWith(window.location.origin)) {
        track("outbound_click", { link_url: href, page: window.location.pathname });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    reached.current = new Set();
    if (!DEEP_READ.test(pathname)) return;

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = ((window.scrollY / scrollable) * 100) | 0;
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !reached.current.has(mark)) {
          reached.current.add(mark);
          track("scroll_depth", { percent_scrolled: mark, page: pathname });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
