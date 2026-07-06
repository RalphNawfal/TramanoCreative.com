"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Glowing ring that trails the cursor and swells over interactive elements. */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 28 });
  const springY = useSpring(y, { stiffness: 350, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target instanceof Element ? e.target : null;
      setHovering(!!target?.closest("a, button, [role='button'], input, select, textarea, summary"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        borderColor: "rgba(103,232,249,0.65)",
        boxShadow: "0 0 12px rgba(34,211,238,0.35)",
      }}
      animate={{
        width: hovering ? 44 : 22,
        height: hovering ? 44 : 22,
        opacity: hovering ? 1 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
    />
  );
}
