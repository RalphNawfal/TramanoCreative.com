import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Guides on Websites, Ads & Search",
  description:
    "Practical guides on web design, SEO, site speed, and AI search from Tramano Creative.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="pt-16">
      <Section eyebrow="Blog" title="What we&apos;ve learned, written down." grid>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          What we&apos;ve learned building sites that rank, load fast, and
          convert — written for business owners, not developers.
        </p>
        <div className="mt-12 space-y-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.08, 0.3)}>
              <Link
                href={`/blog/${post.slug}/`}
                className="block rounded-2xl border border-line/70 bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-gold/40"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider text-ink-faint">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold md:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {post.description}
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  Read the article →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
