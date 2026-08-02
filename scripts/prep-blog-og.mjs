// Per-post share cards.
//
// Every blog post used to declare the site's generic /og.png as its schema
// `image` and its og:image. Article-type rich results want an image, so
// omitting it wasn't an option — but pointing all of them at the same card
// meant three posts shared one thumbnail everywhere they were shown, and the
// thumbnail said nothing about any of them.
//
// This renders one card per post, from the post's own frontmatter, in the same
// Carbon & Signal language as scripts/og-image-source.tsx.
//
// Standalone rather than a Next `opengraph-image` route, for the reason
// documented in og-image-source.tsx: that convention emits an extensionless
// URL, GitHub Pages serves it as application/octet-stream, and scrapers that
// check Content-Type (Facebook and LinkedIn both do) drop the image. Running
// Satori here and committing real .png files sidesteps all of it.
//
// Run from the repo root after adding or retitling a post:
//   node scripts/prep-blog-og.mjs
import { ImageResponse } from "next/og.js";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const OUT = path.join(process.cwd(), "public", "og", "blog");

const CLUSTERS = {
  cost: "Cost & buying",
  speed: "Speed & performance",
  search: "Search & AI visibility",
};

await mkdir(OUT, { recursive: true });

const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".mdx"));
const manifest = [];

for (const file of files) {
  const slug = file.replace(/\.mdx$/, "");
  const { data } = matter(await readFile(path.join(BLOG_DIR, file), "utf8"));

  // The on-page headline, not the trimmed seoTitle — a share card has room
  // for the full line and reads better with it.
  const headline = data.title;
  const kicker = CLUSTERS[data.cluster] ?? "Notes";

  // Long headlines need to step down or they overflow the card. Three sizes
  // rather than a continuous scale: the jumps are invisible across a set of
  // cards, and a formula here would need re-tuning every time the font moves.
  const fontSize = headline.length > 68 ? 54 : headline.length > 46 ? 64 : 74;

  const image = new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 118%, rgba(63,123,255,0.30), transparent 62%), radial-gradient(ellipse 55% 50% at 8% -8%, rgba(63,123,255,0.10), transparent 60%), #0c0c0d",
          color: "#f5f4f2",
        },
        children: [
          // Wordmark over the top rule, matching the site card exactly.
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column" },
              children: [
                {
                  type: "div",
                  props: { style: { display: "flex", height: 1, background: "#2b2b30" } },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginTop: 28,
                      fontSize: 21,
                      letterSpacing: 8,
                      color: "#9b9a98",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            width: 9,
                            height: 9,
                            borderRadius: 9,
                            background: "#3f7bff",
                          },
                        },
                      },
                      "TRAMANO CREATIVE",
                    ],
                  },
                },
              ],
            },
          },
          // The headline.
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                fontSize,
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: -2,
                maxWidth: 950,
              },
              children: headline,
            },
          },
          // Footer rule: domain left, cluster right.
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column" },
              children: [
                {
                  type: "div",
                  props: { style: { display: "flex", height: 1, background: "#2b2b30" } },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 26,
                      fontSize: 22,
                      color: "#63625f",
                    },
                    children: [
                      {
                        type: "span",
                        props: { style: { color: "#9b9a98" }, children: "tramanocreative.com" },
                      },
                      { type: "span", props: { children: kicker } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 },
  );

  const buf = Buffer.from(await image.arrayBuffer());
  await writeFile(path.join(OUT, `${slug}.png`), buf);
  manifest.push({ slug, kb: Math.round(buf.length / 1024), fontSize });
}

console.log(JSON.stringify(manifest, null, 2));
