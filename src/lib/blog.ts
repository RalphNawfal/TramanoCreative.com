import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** A question/answer pair, matching the shape the shared Faq component takes. */
export type PostFaq = { q: string; a: string };

export type PostMeta = {
  slug: string;
  /** The headline, as rendered on the page and the index card. */
  title: string;
  /**
   * Optional shorter title for the `<title>` tag only. A headline that reads
   * well on the page can blow past the ~60 characters Google shows once the
   * " — Tramano Creative" suffix is appended; this lets the tag be trimmed
   * without shortening the headline itself.
   */
  seoTitle?: string;
  description: string;
  date: string;
  /**
   * Optional revision date, `YYYY-MM-DD`.
   *
   * Falls back to `date` when absent, so an untouched post still emits a
   * truthful `dateModified` rather than leaving Google to guess one from the
   * crawl. Set this whenever a post's substance changes — an evergreen guide
   * that visibly says "updated last month" outranks the same guide dated two
   * years ago, and answer engines weight recency heavily when choosing which
   * source to quote.
   */
  updated?: string;
  /**
   * Optional Q&A block rendered at the foot of the post and emitted as
   * FAQPage schema. Kept in frontmatter rather than in the MDX body so the
   * same array can feed both the visible markup and the structured data —
   * they can never drift apart, which is the failure mode Google penalises.
   */
  faqs?: PostFaq[];
  /**
   * Optional summary points, rendered near the top of the post.
   *
   * In frontmatter rather than as a `<KeyTakeaways points={[…]} />` call in
   * the body, for a reason worth knowing before you try the other way:
   * next-mdx-remote v6 ships a remark plugin that strips JSX *attribute
   * expressions* from MDX by default, as hardening against code execution in
   * untrusted content. `points={[...]}` is silently deleted and the component
   * renders with undefined props. Frontmatter sidesteps that entirely, and
   * has the side benefit of putting the block in the same place on every post
   * instead of wherever an author happened to type it.
   */
  takeaways?: string[];
  /**
   * Optional cluster key. Groups the post under a pillar on the blog index
   * and drives the in-content link back to that pillar.
   */
  cluster?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

/**
 * One parser for both readers below. They previously duplicated the field
 * mapping, which is how `updated` and `faqs` would end up supported on the
 * post page but silently missing from the index.
 */
function parse(slug: string, raw: string): Post {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    seoTitle: data.seoTitle as string | undefined,
    description: data.description as string,
    date: data.date as string,
    updated: data.updated as string | undefined,
    faqs: data.faqs as PostFaq[] | undefined,
    takeaways: data.takeaways as string[] | undefined,
    cluster: data.cluster as string | undefined,
    readingMinutes: Math.max(1, Math.round(content.split(/\s+/).length / 220)),
    content,
  };
}

/**
 * Today in UTC, as `YYYY-MM-DD`, for comparing against frontmatter dates.
 *
 * String comparison rather than Date maths: both sides are ISO dates, which
 * sort correctly as strings, and it sidesteps the timezone question of what
 * "published on the 4th" means when the build runs on a US-hosted runner.
 */
function today() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Every post whose publish date has arrived.
 *
 * A post dated in the future is excluded from the index, the sitemap, and
 * `generateStaticParams` — so it isn't built at all and has no URL to find.
 * That is what makes scheduling real on a static export: without this, a
 * future `date` is decoration and the post is live the moment it is committed.
 *
 * The catch worth knowing: publication happens at BUILD time, not at midnight.
 * A scheduled post appears on the next build after its date. The daily cron in
 * .github/workflows/deploy.yml exists for exactly this reason — remove it and
 * scheduled posts sit unpublished until someone happens to push.
 *
 * `includeScheduled` is for local previewing. Never use it in a page.
 */
export function getAllPosts(includeScheduled = false): PostMeta[] {
  const now = today();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) =>
      parse(f.replace(/\.mdx$/, ""), fs.readFileSync(path.join(BLOG_DIR, f), "utf8")),
    )
    .filter((post) => includeScheduled || post.date <= now)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Posts still waiting for their date. Build tooling only. */
export function getScheduledPosts(): PostMeta[] {
  const now = today();
  return getAllPosts(true).filter((p) => p.date > now);
}

/**
 * True if `href` points at a blog post that hasn't published yet.
 *
 * Scheduling creates a problem that isn't obvious until it bites: a published
 * pillar links down to its supports, and those supports don't exist for weeks.
 * Left alone that ships real 404s on the highest-traffic pages on the site.
 */
export function isScheduledHref(href: string): boolean {
  const m = /^\/blog\/([a-z0-9-]+)\/?$/.exec(href);
  if (!m) return false;
  return getScheduledPosts().some((p) => p.slug === m[1]);
}

/**
 * Removes markdown links that point at unpublished posts, keeping the text.
 *
 * `[Core Web Vitals](/blog/core-web-vitals-explained/)` becomes plain
 * "Core Web Vitals" until that post's date arrives, at which point the next
 * build restores the link automatically.
 *
 * Chosen over the alternatives deliberately: stripping the sentence loses
 * meaning, and leaving the link ships a 404. Authors get to write the internal
 * links properly on day one and forget about the schedule entirely.
 */
export function unlinkScheduled(markdown: string): string {
  const scheduled = new Set(getScheduledPosts().map((p) => p.slug));
  if (scheduled.size === 0) return markdown;
  return markdown.replace(
    /\[([^\]]+)\]\(\/blog\/([a-z0-9-]+)\/?\)/g,
    (whole, text: string, slug: string) => (scheduled.has(slug) ? text : whole),
  );
}

export function getPost(slug: string): Post {
  return parse(slug, fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8"));
}
