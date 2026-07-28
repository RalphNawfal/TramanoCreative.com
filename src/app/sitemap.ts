import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Stable date rather than `new Date()`. Regenerating every lastModified on
 * every build tells crawlers the whole site changed when nothing did, which
 * is noise they learn to ignore. Bump this when content actually changes.
 */
const CONTENT_UPDATED = new Date("2026-07-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const primary = ["", "/services/", "/work/", "/contact/"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  // Market pages carry the location-intent search terms.
  const markets = site.markets.map((market) => ({
    url: `${site.url}${market.href}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const secondary = ["/about/", "/blog/", "/faq/"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legal = ["/privacy/", "/terms/"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...primary, ...markets, ...secondary, ...posts, ...legal];
}
