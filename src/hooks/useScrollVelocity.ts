"use client";

import { useEffect, useRef } from "react";

/**
 * Exposes a smoothed, clamped scroll velocity via a CSS custom property.
 *
 * Rather than returning React state (which would re-render on every frame),
 * this writes `--skew` and `--stretch` onto the target element and lets CSS do
 * the transform. Consumers just reference the variables.
 *
 * Deliberately subtle: skew is capped at ±3deg. An over-tuned scroll skew is
 * one of the more recognisable "generated site" tells, and the point of this
 * build is to avoid exactly that.
 */
export function useScrollVelocity<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const MAX_SKEW = 3;
    let raf = 0;
    let lastY = window.scrollY;
    let velocity = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      // Low-pass filter so the value eases in and settles rather than snapping.
      velocity += (delta - velocity) * 0.12;

      const skew = Math.max(-MAX_SKEW, Math.min(MAX_SKEW, velocity * 0.06));
      const stretch = 1 + Math.min(0.02, Math.abs(velocity) * 0.0004);

      el.style.setProperty("--skew", `${skew.toFixed(3)}deg`);
      el.style.setProperty("--stretch", stretch.toFixed(4));
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return ref;
}
