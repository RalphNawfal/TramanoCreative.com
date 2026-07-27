import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import { site } from "@/lib/site";

/**
 * Static export renders this to out/404.html, which GitHub Pages serves for
 * unmatched URLs. Without it visitors get GitHub's unbranded default page.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 py-32">
      <div className="border-t border-edge pt-8">
        <p className="slate">Error 404</p>
        <h1 className="mt-8 max-w-[14ch] font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9]">
          This page isn&apos;t here.
        </h1>
        <p className="mt-8 max-w-[48ch] text-base leading-[1.65] text-grey md:text-lg">
          Either it moved, or the link was wrong. Nothing is broken on your end.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <CtaButton href="/" size="lg">
            Back to the start
          </CtaButton>
          <CtaButton href="/contact/" size="lg" variant="quiet">
            Or get in touch
          </CtaButton>
        </div>

        <div className="mt-20 border-t border-edge pt-8">
          <p className="slate mb-5">Where you might be going</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-grey transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
