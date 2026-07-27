"use client";

import { motion, useReducedMotion } from "motion/react";

type SplitRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  /** Words rendered in the ember accent */
  accent?: string[];
};

/**
 * Word-by-word dissolve. Slower and heavier than a letter stagger — it reads
 * as a title card settling rather than type animating. Screen readers get the
 * plain string.
 */
export default function SplitReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  accent = [],
}: SplitRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, w) => {
        const isAccent = accent.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span key={w} aria-hidden className="inline-block overflow-hidden">
            <motion.span
              className={`inline-block whitespace-nowrap ${isAccent ? "text-signal" : ""}`}
              initial={{ opacity: 0, y: "0.5em", filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: delay + w * 0.09,
                ease: [0.16, 0.84, 0.32, 1],
              }}
            >
              {word}
            </motion.span>
            {w < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
