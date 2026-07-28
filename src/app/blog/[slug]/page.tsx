import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Section from "@/components/ui/Section";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    // The tag gets the trimmed variant; the headline on the page is untouched.
    title: post.seoTitle ?? post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      // Social cards have room for the full headline.
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          // No edit history is tracked, so modified == published. Omitting it
          // is worse than stating it: Google falls back to guessing from the
          // crawl, and a guessed date can make a current post look stale.
          dateModified: post.date,
          url: `${site.url}/blog/${slug}/`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${site.url}/blog/${slug}/`,
          },
          // Article rich results require an image; posts have no hero of their
          // own, so the site card stands in rather than leaving it absent.
          image: `${site.url}/opengraph-image`,
          inLanguage: "en",
          wordCount: post.content.split(/\s+/).length,
          isPartOf: { "@id": `${site.url}/#website` },
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
      <div className="pt-20">
        <Section className="!py-20">
          <article className="mx-auto max-w-[68ch]">
            <Link
              href="/blog/"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-grey-deep transition-colors hover:text-signal"
            >
              ← All articles
            </Link>
            <header className="mt-10">
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
              <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.025em]">
                {post.title}
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-grey">
                {post.description}
              </p>
            </header>
            <div className="mt-16 space-y-6 text-[17px] leading-[1.75] text-grey [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-14 [&_h2]:font-display [&_h2]:text-[1.75rem] [&_h2]:font-semibold [&_h2]:leading-snug [&_h2]:tracking-[-0.015em] [&_h2]:text-white [&_h3]:mt-10 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-white">
              <MDXRemote source={post.content} />
            </div>
            <footer className="mt-20 border-t border-edge pt-12">
              <p className="font-display text-2xl font-semibold tracking-[-0.015em]">
                Want a site built like this?
              </p>
              <p className="mt-3 text-base text-grey">
                Tell us about your project — we write back within one business
                day.
              </p>
              <Link
                href="/contact/"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-carbon transition-colors hover:bg-signal-deep"
              >
                Book the call
              </Link>
            </footer>
          </article>
        </Section>
      </div>
    </>
  );
}
