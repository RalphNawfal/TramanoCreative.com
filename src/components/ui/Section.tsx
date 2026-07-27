type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  /** Mono marker shown in the left column of the header rule */
  slate?: string;
  /** Page-level sections should pass "h1"; everything else keeps the h2 default. */
  titleAs?: "h1" | "h2";
};

/**
 * Swiss section header: a hard rule across the full measure, then an
 * asymmetric two-column split — mono marker pinned left, display title
 * spanning the wide right column.
 */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  slate,
  titleAs: Title = "h2",
}: SectionProps) {
  const hasHeader = Boolean(slate || eyebrow || title);

  return (
    <section id={id} className={`relative py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        {hasHeader && (
          <div className="border-t border-edge pt-8 md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              {slate && <p className="slate">{slate}</p>}
              {eyebrow && (
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  {eyebrow}
                </p>
              )}
            </div>
            {title && (
              <Title className="mt-6 font-display text-[clamp(2.25rem,6.5vw,5rem)] uppercase leading-[0.92] md:col-span-9 md:mt-0">
                {title}
              </Title>
            )}
          </div>
        )}
        <div className={hasHeader ? "mt-16" : ""}>{children}</div>
      </div>
    </section>
  );
}
