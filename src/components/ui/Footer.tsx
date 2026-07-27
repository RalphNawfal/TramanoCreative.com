import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-edge bg-carbon-lift">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.01em]">
              Tramano<span className="text-signal">·</span>Creative
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-grey">
              Websites, Google Ads, and search presence. Built by two people in
              Beirut who put their name at the bottom of the work.
            </p>
          </div>

          <div>
            <p className="slate">Pages</p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-grey transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="slate">Talk to us</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm text-white transition-colors hover:text-signal"
            >
              {site.email}
            </a>
            <br />
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-2 inline-block text-sm text-white transition-colors hover:text-signal"
            >
              {site.phone}
            </a>
            <p className="mt-5 text-sm leading-relaxed text-grey">
              Saw our name at the bottom of a site you liked? That&apos;s how
              most of this starts.
            </p>
          </div>
        </div>

        {/* Market pages — the internal links that carry location intent */}
        <div className="mt-16 border-t border-edge pt-8">
          <p className="slate">Where we work</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {site.markets.map((market) => (
              <li key={market.href}>
                <Link
                  href={market.href}
                  className="text-sm text-grey transition-colors hover:text-signal"
                >
                  {market.label}
                </Link>
              </li>
            ))}
            <li className="text-sm text-grey-deep">
              …and remotely, anywhere else.
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-edge pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] tracking-[0.15em] text-grey-deep">
            © {new Date().getFullYear()} {site.name}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey-deep transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="font-mono text-[11px] tracking-[0.15em] text-grey-deep">
              {site.domain}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
