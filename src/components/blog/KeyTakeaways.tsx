/**
 * The summary block that sits near the top of a post.
 *
 * It exists for two readers at once. A person scanning decides in about four
 * seconds whether the rest is worth their time. An answer engine looking for
 * something to quote wants exactly this: short, declarative, self-contained
 * statements that survive being lifted out of the page with no surrounding
 * context. Every line here has to read correctly on its own — no "this", no
 * "as above", no pronoun pointing at the paragraph before it.
 *
 * Fed from a post's `takeaways` frontmatter, not from the MDX body — see the
 * note on PostMeta.takeaways in src/lib/blog.ts for why that isn't optional.
 */
export default function KeyTakeaways({ points }: { points: string[] }) {
  return (
    <aside
      aria-label="Key takeaways"
      className="not-prose border border-edge bg-carbon-lift p-7 md:p-9"
    >
      <p className="slate">The short version</p>
      <ul className="mt-6 space-y-4">
        {points.map((point) => (
          <li
            key={point}
            className="relative pl-6 text-[15px] leading-[1.65] text-grey before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-signal"
          >
            {point}
          </li>
        ))}
      </ul>
    </aside>
  );
}
