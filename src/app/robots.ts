import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * AI crawlers are allowed explicitly rather than by default.
 *
 * Default-allow would have the same practical effect today, but naming them
 * makes the decision deliberate and visible: we want this site readable by
 * answer engines, because being cited in an AI answer is becoming its own
 * acquisition channel. See /llms.txt for the summary written for them.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  // Common Crawl. Not an answer engine itself, but its archive is training and
  // retrieval input for several of the ones above, so blocking it would quietly
  // undo part of the list.
  "CCBot",
];

/**
 * Conventional search crawlers, named explicitly.
 *
 * The `*` rule already allows these, so these groups are redundant to a crawler
 * and exist for the reader. Bing earns the mention because Copilot and ChatGPT
 * search both read its index — see site.verification.bing — which makes it an
 * answer-engine dependency even though the crawler itself isn't one. Googlebot
 * is deliberately absent: there is nothing to say about it that `*` doesn't.
 */
const SEARCH_CRAWLERS = ["Bingbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...SEARCH_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
