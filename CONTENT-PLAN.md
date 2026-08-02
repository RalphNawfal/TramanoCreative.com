# Content plan — blog clusters and the Beirut page

**Status: the three pillars are written. The twelve supports are still
outlines.** Review and cut the supports before anything gets drafted.

**Done:**
- Cost pillar — expanded to 2,142 words, 12 question-form H2s, 4 FAQs.
- Speed pillar — 1,909 words, 10 H2s, 5 FAQs. Includes the disclosure that
  this site's own LCP was 2.3s until it was fixed.
- Search pillar — 1,921 words, 11 H2s, 4 FAQs. Retitled to *How Businesses Get
  Found in 2026* so it covers Google and assistants both.
- `/web-design-beirut/` — built, not outlined. 12 FAQs, facts block, linked
  from the footer, `/services/`, the sitemap and three sibling pages.

**One decision made during the write-up:** the search pillar keeps its
`ai-search-optimization-for-businesses` slug despite the retitle. The site is
a static export on GitHub Pages, which has no redirect mechanism, so renaming
the file would 404 a URL that is already in the sitemap and possibly indexed.
A slug that no longer matches its title is a mild smell; a dead URL on a
one-month-old domain is worse. Support 3.3 below reuses the AI-specific angle
under its own slug.

Three topic clusters, each a substantial pillar with supporting posts linking
into it. The three existing posts become the three pillars — they're currently
430–520 words each, which is a 2-minute read that ranks for nothing and gives
an answer engine four sentences to work with.

## What's already built

The mechanics these outlines assume are in place and working:

- `takeaways:` frontmatter → the key-takeaways block near the top of the post
- `faqs:` frontmatter → visible FAQ section at the foot **and** `FAQPage` schema,
  from one array so they can't drift apart
- `updated:` frontmatter → visible "Updated <date>" and `dateModified` in schema
- `cluster:` frontmatter → the cluster marker on the blog index
- `BreadcrumbList` on every post; `Blog` + `ItemList` on the index

**Do not put structured content in the MDX body.** `next-mdx-remote` v6 strips
JSX attribute expressions, so `<Component prop={[...]} />` silently arrives as
`undefined`. Everything structured goes in frontmatter.

## Rules for every post

- The first 2–3 sentences answer the title question directly and completely.
  This one thing wins featured snippets and AI citations at the same time.
- H2s are phrased as real questions.
- Key-takeaways block near the top, 4–6 points, each a complete standalone claim.
- FAQ section at the foot, 4–6 questions, every answer under 80 words.
- Links in-content to the cluster pillar and to a relevant service or location
  page. Not a link dump at the end.
- No invented statistics. Any number needs a source or it comes out.

---

# CLUSTER 1 — Cost and buying decisions

**Pillar: `/blog/how-much-does-a-custom-website-cost/`**
*Expansion — currently ~520 words, target 2,200–2,600.*

Already has takeaways, 4 FAQs, and links to `/services/`, `/web-design-lebanon/`,
`/faq/` and the speed post. The expansion is depth, not plumbing.

Questions to answer:
- What does a custom website actually cost in 2026, by tier?
- What specifically drives the number up or down?
- Why do quotes for the same brief vary by 5×?
- What should you refuse to pay for?
- How do you budget against what a customer is worth?
- What does the payment schedule normally look like?
- What's different about buying a website in Lebanon specifically?

Add: a worked example running one brief through three tiers showing what
changes; a section on what "$500" does and doesn't buy; the agency-overhead
breakdown that explains price variance without disparaging anyone.

Links in: all four supports below, `/services/`, `/faq/`, `/web-design-lebanon/`.

### Supports (all net-new)

**1.1 Custom vs template: which one is actually right for you** — 1,400–1,700
Answers: When is a template genuinely the correct choice? What breaks first on a
template site? What does "custom" actually mean, since everyone claims it? How
much slower are builder sites, with numbers? Can you start on a template and
move later?
→ Links: pillar, `/blog/website-speed-google-rankings/`, `/services/`.
Deliberately concedes the template case. A post that says "always go custom"
from a studio that sells custom convinces nobody.

**1.2 The costs nobody puts in the quote** — 1,200–1,500
Answers: What are you paying after launch? What does hosting really cost? Who
pays for domains, stock images, fonts, plugins? What's a fair care-plan price?
What is "content" going to cost you in time if not money? What happens if you
need changes six months on?
→ Links: pillar, `/faq/`, `/services/`.

**1.3 What to ask before you hire anyone to build your website** — 1,300–1,600
Answers: Who owns the code, the domain and the accounts? What happens if we stop
working together? Is the quote fixed or an estimate? Who's actually doing the
work? What's the launch date and what happens if it slips? Can I see something
live before launch?
→ Links: pillar, 1.4, `/about/`, `/faq/`.
Format as questions with the good answer and the bad answer side by side. Highly
citable, and it's the single most shareable format in this cluster.

**1.4 Fixed price vs hourly: why it matters more than the number** — 1,000–1,300
Answers: What's the difference in practice? Who carries the risk of a bad
estimate? When is hourly genuinely fairer? Why won't some agencies quote fixed?
What's a milestone schedule and why is it better for you?
→ Links: pillar, 1.3, `/faq/`.

---

# CLUSTER 2 — Speed and technical performance

**Pillar: `/blog/website-speed-google-rankings/`**
*Expansion — currently ~470 words, target 2,000–2,400.*

Already has takeaways, 4 FAQs, and links to `/web-design-lebanon/`,
`/work/burger-shop/` and the homepage. **The false "real-time 3D starfield"
claim has been removed** — the site has no 3D anywhere, and the sentence was
sitting in the post arguing for our technical credibility.

Questions to answer:
- How does speed actually feed into ranking, mechanically?
- What do LCP, INP and CLS each measure and what breaks them?
- Why do most business sites fail, cause by cause?
- How do you diagnose your own site in ten minutes?
- What does a genuinely fast architecture look like?
- When is a rebuild cheaper than optimisation?

Add: how to read a PageSpeed report without a developer; lab vs field data and
why they disagree; a real before/after with measured numbers **only if we have
one we can stand behind**.

**Honest disclosure worth making here:** this site's own homepage LCP is ~1.5s,
not sub-second, because the hero's entrance animation defers the largest paint.
First paint is ~0.16s. A post about measuring speed honestly is the natural
place to say so — and saying it is more persuasive than the claim it replaces.
Ralph's call.

Links in: all four supports, `/web-design-lebanon/`, `/work/burger-shop/`.

### Supports (all net-new)

**2.1 Core Web Vitals in plain language** — 1,200–1,500
Answers: What is Google actually measuring? What counts as the "largest
contentful paint" on a normal page? What makes a page feel unresponsive? What
causes things to jump around while loading? What are the thresholds and where do
they come from? How do you check yours?
→ Links: pillar, 2.4, `/seo-lebanon/`.

**2.2 Why page builders are slow, and what you can do about it** — 1,300–1,600
Answers: What does a builder actually ship to the browser? Why do plugins
compound? Can you fix a builder site or only replace it? What does a caching
plugin actually do? At what point is rebuilding cheaper?
→ Links: pillar, 1.1, `/services/`.

**2.3 Building for connections that aren't fast** — 1,100–1,400
Answers: Why does this matter more in Lebanon than in Europe? What breaks first
on a slow or intermittent connection? How much weight can you actually cut? What
should load first? How do you test on a bad connection deliberately?
→ Links: pillar, `/web-design-lebanon/`, `/work/burger-shop/`.
This is the most defensible post on the whole list — it's genuinely local
expertise no international competitor can write, and it's the strongest single
counter to WebVue's neighbourhood pages.

**2.4 Image optimisation, done properly** — 1,000–1,300
Answers: Which format when, WebP vs AVIF vs JPEG? How big should an image
actually be? Why does a 4000px photo in a 800px slot cost you? What is lazy
loading and when does it backfire? Why must the LCP image never be lazy?
→ Links: pillar, 2.1.
Worked example: a real 589KB PNG hero re-encoded, with the byte counts. We have
live examples of exactly this failure to hand.

---

# CLUSTER 3 — Search and AI visibility

**Pillar: `/blog/ai-search-optimization-for-businesses/`**
*Expansion — currently ~430 words, target 2,200–2,600. Retitle toward "how
businesses get found in 2026" so the pillar covers both Google and assistants,
and the current AI-specific angle becomes support 3.3.*

Already has takeaways, 4 FAQs, and links to `/services/`, `/seo-lebanon/`,
`/google-ads-lebanon/`.

Questions to answer:
- Where do customers actually look for a business now, and in what proportion?
- What has changed about Google specifically?
- How do AI assistants choose who to name?
- What's the same across both, and what genuinely differs?
- What order should a business do this in?
- How do you tell if any of it is working?

Add: the overlap-vs-difference table between classic SEO and answer-engine work;
what to measure when there's no click to count; the honest limits — we can't see
inside an assistant's retrieval and shouldn't pretend to.

Links in: all four supports, `/seo-lebanon/`, `/services/`, `/faq/`.

### Supports (all net-new)

**3.1 Technical SEO basics for people who don't write code** — 1,400–1,700
Answers: What is technical SEO actually? What's a canonical and why does it
matter? What do robots.txt and a sitemap do? What is crawlability? Which of
these can you check yourself? What needs a developer?
→ Links: pillar, `/seo-lebanon/`, 2.1.

**3.2 Structured data, explained without the jargon** — 1,200–1,500
Answers: What is schema markup, in one paragraph? What does it actually get you
now that FAQ rich results are restricted? Which types matter for a small
business? How do you check yours? What happens if the schema disagrees with the
page?
→ Links: pillar, 3.3, `/seo-lebanon/`.
Worth stating plainly: `FAQPage` no longer produces rich results outside
government and health domains. We keep it because answer engines parse it. That
honesty is the post's whole differentiator.

**3.3 How to get cited by ChatGPT, Claude and Google's AI** — 1,300–1,600
Answers: How do assistants pick sources? What makes a passage quotable? What is
llms.txt and does it do anything yet? Should you block AI crawlers? How do you
tell if you're being cited? What can't you control?
→ Links: pillar, 3.2, `/seo-lebanon/`, `/services/`.
Largely an expansion of what the current pillar already says, moved here so the
pillar can go broader.

**3.4 Local SEO in Lebanon** — 1,300–1,600
Answers: What's different about searching for a business here? How do Arabic,
French and English searches differ for the same intent? Does a `.lb` domain
help? How do you rank for a neighbourhood? What do you do when your customers
search in transliterated Arabic?
→ Links: pillar, `/seo-lebanon/`, `/web-design-lebanon/`, `/web-design-beirut/`.
**Scope note:** the brief excludes Google Business Profile and directory work,
so this post covers on-site local signals only. Flag if that leaves a hole worth
filling.

---

# New location page: `/web-design-beirut/`

Direct counter to WebVue's neighbourhood pages. Uses the existing `MarketPage`
shell, so it needs `blocks`, three `deliverables`, ~12 `faqs` and a `related`
array — plus `site.markets`, `sitemap.ts` and `llms.txt` updating.

**The bar this has to clear.** `MarketPage` deliberately ships with no default
copy, because a location page that's a find-and-replace of another one is a
doorway page and gets demoted. `/web-design-lebanon/` already exists. **If this
page can't say things that are true of Beirut and not of Lebanon generally, it
should not be built** — and shipping a thin one would actively hurt the four
market pages that currently rank.

What's genuinely Beirut-specific and defensible:
- We're physically here. Meeting in person is possible, which is a real
  differentiator against remote studios and worth one honest paragraph, not a
  section.
- Neighbourhood commercial character differs enough to change what a site needs
  — Hamra, Achrafieh, Mar Mikhaël, Verdun, Dahye. Written from actual knowledge
  or not at all.
- Power and connectivity realities shape what you can assume of a visitor.
- Trilingual and transliterated-Arabic search behaviour is more pronounced here
  than nationally.
- Payment and delivery constraints for Beirut businesses specifically —
  `/work/burger-shop/` is the live proof and should be linked prominently.

Proposed shape:
- **H1:** Web Design in Beirut
- **Title:** `Web Design in Beirut — Custom Sites & Development` (~50 chars
  before the site-name suffix)
- **Blocks:** (1) What a Beirut business needs from a site that a generic
  Lebanese one doesn't; (2) Language, and what trilingual actually costs;
  (3) Building for the infrastructure that's actually here; (4) Taking payment
  as a Beirut business.
- **Deliverables:** three columns, same pattern as the existing market pages.
- **FAQs:** ~12, all Beirut-specific — pricing here, meeting in person,
  neighbourhood targeting, Arabic/RTL, payment processing, hosting locally vs
  abroad.
- **Related:** `/web-design-lebanon/`, `/seo-lebanon/`, `/work/burger-shop/`,
  3.4.

**Decision needed before drafting:** whether to build one Beirut page, or follow
WebVue into per-neighbourhood pages. Recommendation is one strong Beirut page.
Five thin neighbourhood pages is precisely the pattern Google demotes, and on a
one-month-old domain with almost no authority the risk isn't worth the coverage.
Revisit once the domain has links behind it.

---

# Summary

| # | Piece | Type | Words |
|---|---|---|---|
| — | Cost pillar | **Expansion** | 2,200–2,600 |
| 1.1 | Custom vs template | Net-new | 1,400–1,700 |
| 1.2 | The costs nobody quotes | Net-new | 1,200–1,500 |
| 1.3 | What to ask before hiring | Net-new | 1,300–1,600 |
| 1.4 | Fixed price vs hourly | Net-new | 1,000–1,300 |
| — | Speed pillar | **Expansion** | 2,000–2,400 |
| 2.1 | Core Web Vitals in plain language | Net-new | 1,200–1,500 |
| 2.2 | Why page builders are slow | Net-new | 1,300–1,600 |
| 2.3 | Building for slow connections | Net-new | 1,100–1,400 |
| 2.4 | Image optimisation done properly | Net-new | 1,000–1,300 |
| — | Search & AI pillar | **Expansion** (+retitle) | 2,200–2,600 |
| 3.1 | Technical SEO basics | Net-new | 1,400–1,700 |
| 3.2 | Structured data explained | Net-new | 1,200–1,500 |
| 3.3 | Getting cited by AI assistants | Net-new | 1,300–1,600 |
| 3.4 | Local SEO in Lebanon | Net-new | 1,300–1,600 |
| — | `/web-design-beirut/` | Net-new page | — |

**3 expansions, 12 net-new posts, 1 net-new page. Roughly 24,000 words.**

Suggested order — highest return first, not cluster by cluster:

1. The three pillar expansions. They already rank for something and already
   have links pointing at them; making them substantial is the cheapest gain
   available.
2. **2.3 (slow connections)** and **3.4 (local SEO in Lebanon)** — the two posts
   no competitor outside Lebanon can credibly write.
3. **1.3 (what to ask before hiring)** — the most linkable and most shareable
   thing on the list.
4. `/web-design-beirut/`, once there's enough surrounding content to link it
   from more than the footer.
5. Everything else.
