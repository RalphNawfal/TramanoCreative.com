# tramanocreative.com

The Tramano Creative studio site. Next.js 16 App Router, React 19, Tailwind v4,
statically exported and served from GitHub Pages.

Most of this project's documentation is in the code itself — nearly every
component and data file carries a doc comment explaining why it is the way it
is. Read those before changing something that looks odd; it usually isn't.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # next build + scripts/flatten-rsc.mjs → out/
npm run lint
npx tsc --noEmit
npm run indexnow     # after deploy: ping Bing/IndexNow with changed URLs
```

Deploy is automatic: push to `main` triggers `.github/workflows/deploy.yml`,
which builds and publishes `out/` to GitHub Pages.

## Things that will surprise you

**This is not the Next.js you know.** See `AGENTS.md`. Read the relevant guide
in `node_modules/next/dist/docs/` before writing code against an API you
remember rather than one you've checked.

**Static export.** `output: "export"` in `next.config.ts`. No server runtime, no
request-time anything. All data is read at build time. `images.unoptimized` is
forced on as a consequence, so **`next/image` does no optimization** — whatever
is committed to `public/` is exactly what ships. Pre-encode to WebP.

**`npm run build` has a post-step.** `scripts/flatten-rsc.mjs` copies Next 16's
nested RSC segment payloads to the dot-joined filenames the client requests,
because GitHub Pages can't rewrite. Skipping it breaks client-side navigation.

**MDX strips JavaScript expressions.** `next-mdx-remote` v6 removes JSX
attribute expressions from MDX by default as a security measure, so
`<Component prop={[...]} />` in a post silently arrives as `undefined`.
Structured post content goes in frontmatter — see `src/lib/blog.ts`.

## Layout

```
content/blog/*.mdx          Posts. Frontmatter drives takeaways, FAQs, schema.
src/lib/site.ts             Single source of truth: NAP, pricing, nav, tokens.
src/lib/work.ts             The reel. Read the constraints comment first.
src/lib/case-studies.ts     Written-up builds. Measured numbers only.
src/lib/blog.ts             MDX reader.
src/app/robots.ts           Generated robots.txt, incl. the AI crawler allowlist.
src/app/sitemap.ts          Generated sitemap.xml.
src/components/seo/         JsonLd, Breadcrumbs, MarketPage shell.
src/components/ui/          Section, Faq, CtaButton, Reveal, Nav, Footer, …
src/components/delivery/    SiteCredit — the client footer credit. See below.
public/llms.txt             Hand-written summary for AI crawlers.
scripts/prep-work-shots.mjs Reel asset prep. Wipes public/work — read it first.
scripts/prep-case-shots.mjs Case-study asset prep. Additive, safe to re-run.
```

## Rules that aren't negotiable

**Client work is anonymous.** No client names, no links to client sites, and
screenshots cropped so no wordmark or phone number survives. The constraint and
its one permitted exception are documented at the top of `src/lib/work.ts`.

**No invented numbers.** Nothing in `src/lib/case-studies.ts` may be a
projection, an industry average, or a figure someone mentioned on a call. Every
metric is measured, and the method is published next to it. There are no
testimonials on this site because we don't have any we can verify.

**Facts stay in sync across four places.** Pricing, timeline, founders and
location appear in `src/lib/site.ts`, `src/app/faq/page.tsx`,
`src/app/services/page.tsx` and `public/llms.txt`. If one changes, all four
change — an answer engine reading a contradiction picks one at random.

## Client delivery

Every site we ship carries a `Developed by tramanocreative.com` credit in its
footer. It is the studio's entire acquisition model, and it is the first thing
lost in a redesign.

The canonical component is `src/components/delivery/SiteCredit.tsx` — copy it
into the client project. The full pre-launch list, including the credit and the
ways it commonly gets broken, is **[DELIVERY-CHECKLIST.md](./DELIVERY-CHECKLIST.md)**.
