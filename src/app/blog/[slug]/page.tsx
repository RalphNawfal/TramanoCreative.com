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
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
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
          url: `${site.url}/blog/${slug}/`,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
      <div className="pt-16">
        <Section className="!py-16">
          <article className="mx-auto max-w-2xl">
            <Link
              href="/blog/"
              className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint hover:text-cyan-bright"
            >
              ← All field notes
            </Link>
            <header className="mt-8">
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
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                {post.description}
              </p>
            </header>
            <div className="prose-invert mt-12 space-y-6 text-base leading-relaxed text-ink-muted [&_a]:text-cyan-bright [&_a]:underline [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">
              <MDXRemote source={post.content} />
            </div>
            <footer className="mt-16 rounded-2xl border border-line/70 bg-surface/60 p-8 text-center backdrop-blur-sm">
              <p className="font-display text-xl font-semibold">
                Want a site built like this?
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Tell us about your project — we reply within one business day.
              </p>
              <Link
                href="/contact/"
                className="glow-ring mt-6 inline-flex items-center justify-center rounded-full bg-cyan/10 px-6 py-2.5 font-mono text-sm uppercase tracking-[0.15em] text-cyan-bright transition-all hover:bg-cyan/20 hover:text-white"
              >
                Start a project
              </Link>
            </footer>
          </article>
        </Section>
      </div>
    </>
  );
}
