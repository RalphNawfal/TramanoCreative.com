/**
 * Renders a structured-data block into the server HTML.
 *
 * A native <script> rather than next/script: this is data, not executable
 * code, and next/script's loading strategies would only delay it past the
 * point where a crawler reads the page.
 *
 * The `<` escape is the sanitisation Next's JSON-LD guide calls for.
 * `JSON.stringify` does not escape HTML, so a string containing `</script>`
 * anywhere in the payload would close this tag early and let whatever follows
 * be parsed as markup. Replacing `<` with its unicode escape is inert inside
 * JSON — the parsed value is identical — and makes that impossible. All of
 * this content is ours today, but the schema is assembled from page copy and
 * blog frontmatter, which is exactly the kind of input that stops being
 * hand-checked once there's enough of it.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
