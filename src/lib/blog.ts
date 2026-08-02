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

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) =>
      parse(f.replace(/\.mdx$/, ""), fs.readFileSync(path.join(BLOG_DIR, f), "utf8")),
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post {
  return parse(slug, fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8"));
}
