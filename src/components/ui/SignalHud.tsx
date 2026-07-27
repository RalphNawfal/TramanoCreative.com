"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fixed corner readout: scroll position and a live signal dot.
 *
 * Writes into the DOM directly from the rAF loop rather than through state —
 * a percentage that re-renders React 60 times a second would be a silly cost
 * for three characters of text.
 *
 * Desktop only, and it stays out of the way of the mobile CTA.
 */
export default function SignalHud() {
  const pct = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let last = -1;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      if (value !== last && pct.current) {
        pct.current.textContent = String(value).padStart(2, "0");
        last = value;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-6 left-6 z-40 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-grey-deep md:flex"
    >
      <span className="signal-dot block h-1.5 w-1.5 rounded-full bg-signal" />
      <span>
        <span ref={pct}>00</span>
        <span className="text-edge"> / </span>
        100
      </span>
    </div>
  );
}
