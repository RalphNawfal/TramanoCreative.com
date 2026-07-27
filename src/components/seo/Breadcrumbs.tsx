import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

type Crumb = { name: string; href: string };

/**
 * Emits BreadcrumbList structured data. Renders nothing visually — the page
 * headers already communicate hierarchy, this exists so search engines can
 * show the trail in results instead of a bare URL.
 *
 * Home is prepended automatically; pass the trail from there.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${site.url}${crumb.href}`,
        })),
      }}
    />
  );
}
