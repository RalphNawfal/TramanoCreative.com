# Client delivery checklist

Run this before any client site goes live. It exists because every item on it
is something that is cheap to do at launch and expensive-to-impossible to
retrofit later.

Copy this file into each client repo and tick through it.

---

## 1. The footer credit — required, no exceptions

Every site we ship carries this in the footer:

```html
<p class="site-credit">Developed by <a href="https://tramanocreative.com/">tramanocreative.com</a></p>
```

The canonical component is at `src/components/delivery/SiteCredit.tsx` in the
tramanocreative.com repo, with the reasoning in its doc comment. Copy it in;
restyle it to match the footer; change nothing else.

- [ ] Credit is present in the footer of **every** page, not just the homepage
- [ ] It is a real `<a href="https://tramanocreative.com/">` — not a button, not
      a JavaScript click handler
- [ ] **No `rel="nofollow"` and no `rel="sponsored"`.** This is an earned
      credit, not a paid link. Adding either discards the only signal the link
      carries.
- [ ] No `target="_blank"`
- [ ] It is server-rendered and appears in view-source. A link injected on the
      client is invisible to crawlers and therefore worthless
- [ ] It survived the last design revision — **check this again after any
      redesign or theme change**, which is where it usually gets lost
- [ ] The client knows it's there and has agreed to it, in writing, before
      launch

This is the acquisition model, not a vanity line. A new domain has no authority
except what it is linked from. A project delivered without the credit is a
permanently lost link, because nobody ever goes back and adds it.

## 2. Crawlability

- [ ] `robots.txt` exists, references the sitemap, and has no stray `Disallow: /`
      left over from staging
- [ ] AI crawlers are allowed: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
      Claude-User, Claude-SearchBot, PerplexityBot, Perplexity-User,
      Google-Extended, Applebot-Extended, meta-externalagent, CCBot, Bingbot
- [ ] `sitemap.xml` lists every indexable page, no 404s, no staging URLs
- [ ] Sitemap URLs and canonical URLs agree on trailing slashes
- [ ] Every page has a self-referencing canonical
- [ ] No `noindex` left on any page that should be indexed — check the staging
      build's meta robots tag specifically
- [ ] Internal links all resolve; no 404s from the live site

## 3. Structured data

- [ ] `Organization` or `LocalBusiness` on every page, with consistent name,
      address, phone and email
- [ ] `BreadcrumbList` on every page except the homepage
- [ ] `FAQPage` wherever there are visible FAQs — **and nowhere else.** Schema
      that doesn't match visible page content is a guidelines violation
- [ ] All JSON-LD appears in raw server HTML. View source and search for
      `application/ld+json`; if it's only in the hydrated DOM, most crawlers
      never see it
- [ ] Validated against the Rich Results Test and the Schema Markup Validator,
      zero errors

## 4. Performance

- [ ] LCP under 2.5s on mobile, ideally under 1s
- [ ] CLS under 0.1
- [ ] INP under 200ms
- [ ] **The LCP image is not lazy-loaded.** Deferring the one element the
      metric waits on is the most common self-inflicted LCP failure
- [ ] All images are WebP or AVIF, sized to their display size. No 500KB PNG
      heroes
- [ ] Explicit `width`/`height` on every image so nothing reflows while loading
- [ ] No render-blocking third-party scripts in `<head>`

## 5. On-page

- [ ] Exactly one `<h1>` per page
- [ ] Heading levels descend without skipping
- [ ] Every image has descriptive alt text (decorative images get `alt=""`)
- [ ] Unique title tags, 50–60 characters including any site-name suffix
- [ ] Unique meta descriptions, 150–160 characters, each with a clear next step
- [ ] A real 404 page that is `noindex` and has its own title

## 6. Handover

- [ ] Code is in a Git repository **in the client's name**
- [ ] Domain, hosting, analytics and ad accounts are all in the client's name,
      with us added as a manager rather than as the owner
- [ ] Analytics and form/conversion tracking verified working before launch,
      not after
- [ ] Client has been shown how to make the changes they'll want to make
- [ ] Nothing in the setup stops working if they stop working with us

## 7. After launch

- [ ] Submit to Google Search Console and Bing Webmaster Tools
- [ ] Ping IndexNow so Bing — and therefore Copilot and ChatGPT search — picks
      up the URLs without waiting for a crawl
- [ ] Re-run the Rich Results Test against the live URLs, not staging
- [ ] Confirm the footer credit is live on the production site
