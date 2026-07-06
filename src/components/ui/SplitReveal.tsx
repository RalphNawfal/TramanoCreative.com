"use client";

import { motion, useReducedMotion } from "motion/react";

type SplitRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  /** Words rendered with the accent/glow treatment */
  accent?: string[];
};

/** Staggered letter-by-letter reveal; screen readers get the plain string. */
export default function SplitReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  accent = [],
}: SplitRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  let letterIndex = 0;

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, w) => {
        const isAccent = accent.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span
            key={w}
            aria-hidden
            className={`inline-block whitespace-nowrap ${
              isAccent ? "text-cyan-bright glow-text" : ""
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
                  {letter}
                </motion.span>
              );
            })}
            {w < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
