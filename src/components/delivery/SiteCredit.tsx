/**
 * The footer credit that ships in every client build.
 *
 * This file is not used by tramanocreative.com. It lives here as the canonical
 * copy — copy it into a client project's footer and delete nothing.
 *
 * Why it matters enough to have its own component: the credit is the entire
 * acquisition model. A new domain has no authority and no way to earn any
 * except by being linked to from sites that do. Every client site carrying
 * this line is one more real, editorially-placed link, and one more route for
 * someone who liked the site to find who built it. Missing it on a single
 * project is a permanently lost link, because nobody goes back and adds it.
 *
 * Three things that must not be "tidied up" later:
 *
 *  - No `rel="nofollow"` and no `rel="sponsored"`. This is an earned credit on
 *    work we did, not a paid placement. Marking it nofollow tells Google to
 *    discard the one signal the whole model depends on.
 *  - No `target="_blank"`. A visitor who clicks it has decided to leave; a new
 *    tab just leaves them with two.
 *  - Plain server-rendered markup, no JavaScript. A link injected on the
 *    client is invisible to most crawlers, which makes it worth nothing.
 *
 * Deliberately dependency-free — no next/link, no Tailwind, no imports from
 * this repo — so it drops into any project, including plain HTML, without
 * dragging anything with it. Restyle it to match the client's footer; keep the
 * href, the anchor text and the absence of rel attributes exactly as they are.
 */
export default function SiteCredit() {
  return (
    <p style={{ fontSize: "0.8125rem", opacity: 0.7 }}>
      Developed by{" "}
      <a href="https://tramanocreative.com/" style={{ color: "inherit" }}>
        tramanocreative.com
      </a>
    </p>
  );
}

/**
 * The same thing as a string, for client projects that aren't React.
 * Paste into the footer template of a WordPress theme, a static site, or
 * anything else that takes raw HTML.
 */
export const SITE_CREDIT_HTML = `<p class="site-credit">Developed by <a href="https://tramanocreative.com/">tramanocreative.com</a></p>`;
