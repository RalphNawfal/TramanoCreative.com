"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import CtaButton from "./CtaButton";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Transparent over the title card, solid once the trailer starts.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
   * Escape closes the menu and puts focus back on the button that opened it.
   * Without the second half, dismissing the menu drops focus to <body> and the
   * next Tab starts from the top of the document again.
   */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-edge bg-carbon" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-[-0.01em] text-white"
        >
          Tramano<span className="text-signal">·</span>Creative
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-grey transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href="/contact/" size="sm">
            Book the call
          </CtaButton>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-14 items-center justify-end text-white md:hidden"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-edge bg-carbon px-5 py-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.22em] text-grey hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <CtaButton href="/contact/" onClick={() => setOpen(false)}>
                Book the call
              </CtaButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
