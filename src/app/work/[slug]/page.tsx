import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CaseStudy from "@/components/work/CaseStudy";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.seoTitle,
    description: study.metaDescription,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.metaDescription,
      // Declaring `openGraph` here replaces the layout's object wholesale, so
      // the image has to be repeated rather than inherited.
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          type: "image/png",
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Work", href: "/work/" },
          { name: study.title, href: `/work/${slug}/` },
        ]}
      />
      {/*
        CreativeWork rather than Article: the subject is the thing that was
        built, not the write-up about it. `creator` points at #organization so
        the studio, not the page, gets the credit — and no client is named,
        which is why there is no `sponsor` or `about` naming an organisation.
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${site.url}/work/${slug}/#work`,
          name: study.title,
          headline: study.title,
          description: study.metaDescription,
          abstract: study.lead,
          url: `${site.url}/work/${slug}/`,
          inLanguage: "en",
          isPartOf: { "@id": `${site.url}/#website` },
          creator: { "@id": `${site.url}/#organization` },
          about: study.scope,
          image: study.shots.map((shot) => `${site.url}${shot.src}`),
        }}
      />
      <CaseStudy study={study} />

    </>
  );
}
