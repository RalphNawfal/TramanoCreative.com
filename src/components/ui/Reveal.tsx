"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /**
   * Set false to slide without fading.
   *
   * Only matters for an element that is the page's Largest Contentful Paint.
   * A browser does not count an element at opacity 0 as painted, so fading one
   * in pushes LCP out by the delay plus the duration — on this site's homepage
   * that was the difference between a 0.16s first paint and a 2.3s LCP. Moving
   * on transform alone paints at full opacity on the first frame, so the
   * animation costs the metric nothing.
   *
   * Everything below the fold should keep the fade. This is not a general
   * improvement, it's a fix for the one element being measured.
   */
  fade?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  fade = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={fade ? { opacity: 0, y: 28 } : { y: 28 }}
      whileInView={fade ? { opacity: 1, y: 0 } : { y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.16, 0.84, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
