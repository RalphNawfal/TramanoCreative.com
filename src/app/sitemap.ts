import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Stable date rather than `new Date()`. Regenerating every lastModified on
 * every build tells crawlers the whole site changed when nothing did, which
 * is noise they learn to ignore. Bump this when content actually changes.
 *
 * It sat at 2026-08-17 through the 13 September release — new prices on
 * nearly every page, Lebanon in the titles, two new reel builds, a new case
 * study and four industry pages going live — so for a day the sitemap told
 * Google none of that had happened. Any commit that changes a non-blog page's
 * content bumps this in the same commit.
 */
const CONTENT_UPDATED = new Date("2026-09-13");

export default function sitemap(): MetadataRoute.Sitemap {
  // The homepage is "/" rather than "" so its <loc> carries the trailing slash
  // that `trailingSlash: true` gives every other URL — and that its own
  // canonical already declares. Emitting the bare origin here made the sitemap
  // disagree with the canonical on the single most important URL on the site.
  const primary = ["/", "/services/", "/work/", "/contact/"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.9,
  }));

  // Market pages carry the location-intent search terms.
  const markets = site.markets.map((market) => ({
    url: `${site.url}${market.href}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Industry pages carry the commercial-intent search terms. Same priority as
  // the market pages — these are their peers, not pages beneath them.
  const industries = site.industries.map((industry) => ({
    url: `${site.url}${industry.href}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // The blog index gains a card every time a scheduled post publishes, which
  // CONTENT_UPDATED never sees — so its date follows the newest published post.
  // getAllPosts() is sorted newest first and already excludes scheduled posts.
  const newestPost = getAllPosts()[0];
  const secondary = ["/about/", "/blog/", "/faq/"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified:
      route === "/blog/" && newestPost
        ? new Date(newestPost.date)
        : CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legal = ["/privacy/", "/terms/"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  // Case studies are proof pages, so they rank above the blog but below the
  // commercial pages they support.
  const work = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}/`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}/`,
    // Revisions move the date; an untouched post keeps its publish date.
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...primary,
    ...markets,
    ...industries,
    ...work,
    ...secondary,
    ...posts,
    ...legal,
  ];
}
