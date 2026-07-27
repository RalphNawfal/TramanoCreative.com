"use client";

import { MotionConfig } from "motion/react";

/**
 * The CSS kill-switch in globals.css only reaches CSS transitions and
 * animations — motion's JS-driven ones ignore it. `reducedMotion="user"`
 * makes every motion component on the site honour the OS setting, so the
 * reveals and dissolves stop moving without each component opting in.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
