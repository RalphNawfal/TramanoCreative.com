"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import GlowButton from "./GlowButton";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-void/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-wide text-ink"
        >
          TRAMANO<span className="text-cyan glow-text">·</span>CREATIVE
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-cyan-bright"
            >
              {item.label}
            </Link>
          ))}
          <GlowButton href="/contact/" size="sm">
            Start a project
          </GlowButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            {open ? "CLOSE" : "MENU"}
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/60 bg-void/95 px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.2em] text-ink-muted hover:text-cyan-bright"
              >
                {item.label}
              </Link>
            ))}
            <GlowButton href="/contact/" onClick={() => setOpen(false)}>
              Start a project
            </GlowButton>
          </div>
        </div>
      )}
    </header>
  );
}
