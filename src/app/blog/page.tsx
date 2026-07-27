import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
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
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog/" }]} />
    <div className="pt-20">
      <Section slate="Notes" eyebrow="Blog" title="What we’ve learned, written down." titleAs="h1">
        <p className="-mt-6 max-w-[58ch] text-lg leading-relaxed text-grey">
          Notes from building sites that load fast, rank, and actually get used
          — written for business owners, not developers.
        </p>
        <div className="mt-14 border-t border-edge">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.08, 0.3)}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group block border-b border-edge py-8 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.15em] text-grey-deep">
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
                <h2 className="mt-4 max-w-[30ch] font-display text-2xl font-semibold leading-snug tracking-[-0.015em] transition-colors group-hover:text-signal md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-grey">
                  {post.description}
                </p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-grey-deep transition-colors group-hover:text-signal">
                  Read the article →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
    </>
  );
}
