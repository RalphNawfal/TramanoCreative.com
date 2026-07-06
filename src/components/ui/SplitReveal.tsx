"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

type SplitRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  /** Words rendered with the accent/glow treatment */
  accent?: string[];
  /** Letters warp away from the cursor when it comes near */
  kinetic?: boolean;
};

/**
 * Staggered letter-by-letter reveal; screen readers get the plain string.
 * With `kinetic`, each letter shifts and scales based on cursor proximity.
 */
export default function SplitReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  accent = [],
  kinetic = false,
}: SplitRevealProps) {
  const reduced = useReducedMotion();
  const container = useRef<HTMLElement>(null);
  const words = text.split(" ");
  let letterIndex = 0;

  useEffect(() => {
    if (!kinetic || reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const root = container.current;
    if (!root) return;
    const letters = Array.from(root.querySelectorAll<HTMLElement>("[data-letter]"));
    const RADIUS = 150;
    let raf = 0;
    let mx = -1e4;
    let my = -1e4;

    const apply = () => {
      raf = 0;
      for (const el of letters) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - mx;
        const dy = cy - my;
        const dist = Math.hypot(dx, dy);
        if (dist < RADIUS) {
          const f = 1 - dist / RADIUS;
          const push = f * f * 14;
          const nx = (dx / (dist || 1)) * push;
          const ny = (dy / (dist || 1)) * push;
          el.style.transform = `translate(${nx.toFixed(1)}px, ${ny.toFixed(1)}px) scale(${(1 + f * 0.12).toFixed(3)})`;
        } else if (el.style.transform) {
          el.style.transform = "";
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [kinetic, reduced]);

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      className={className}
      aria-label={text}
      ref={container as React.Ref<never>}
    >
      {words.map((word, w) => {
        const isAccent = accent.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span key={w} aria-hidden>
            <span
              className={`inline-block whitespace-nowrap ${
                isAccent ? "text-gold-bright glow-text" : ""
              }`}
            >
            {word.split("").map((letter, l) => {
              const i = letterIndex++;
              return (
                <motion.span
                  key={l}
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.6em", rotateX: -60 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: delay + i * 0.022,
                    ease: [0.21, 0.75, 0.35, 1],
                  }}
                >
                  <span
                    data-letter
                    className="inline-block will-change-transform"
                    style={{ transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.3, 1)" }}
                  >
                    {letter}
                  </span>
                </motion.span>
              );
            })}
            </span>
            {w < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
