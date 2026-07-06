import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">
              TRAMANO<span className="text-gold glow-text">·</span>CREATIVE
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.tagline} Websites, Google Ads, and search presence —
              engineered to work together.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              Pages
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
              Talk to us
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-gold-bright hover:glow-text"
            >
              {site.email}
            </a>
            <br />
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-2 inline-block text-sm text-gold-bright hover:glow-text"
            >
              {site.phone}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Saw our name in the footer of a site you liked? That&apos;s how
              most of our work begins.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line/40 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-xs tracking-wider text-ink-faint">
            © {new Date().getFullYear()} {site.name}.
          </p>
          <p className="font-mono text-xs tracking-wider text-ink-faint">
            {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
