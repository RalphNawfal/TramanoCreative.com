"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  onClick?: () => void;
};

/** CTA link that magnetically pulls toward the cursor. */
export default function GlowButton({
  href,
  children,
  size = "md",
  variant = "solid",
  onClick,
}: GlowButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 16 });
  const y = useSpring(0, { stiffness: 200, damping: 16 });

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  const variants = {
    solid:
      "bg-cyan/10 text-cyan-bright glow-ring hover:bg-cyan/20 hover:text-white",
    outline:
      "border border-line text-ink-muted hover:border-cyan/50 hover:text-cyan-bright",
  };

  function onPointerMove(e: React.PointerEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-mono uppercase tracking-[0.15em] transition-colors duration-300 ${sizes[size]} ${variants[variant]}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
