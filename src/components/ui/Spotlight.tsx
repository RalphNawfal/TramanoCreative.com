"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-tracked spotlight for a grid of cards.
 *
 * One listener on the container writes --mx/--my; every `.spotlight-cell`
 * child paints its own gradient from those coordinates in CSS. That means a
 * twelve-card grid still costs one listener and one rAF, and the paint work
 * stays on the compositor.
 *
 * The effect itself is defined in globals.css and is already disabled for
 * coarse pointers and reduced motion there, so this only has to feed numbers.
 */
export default function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      el.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`spotlight-field ${className}`}>
      {children}
    </div>
  );
}
