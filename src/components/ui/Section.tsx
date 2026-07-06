type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  grid = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${grid ? "hud-grid" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            {title}
          </h2>
        )}
        <div className={eyebrow || title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
