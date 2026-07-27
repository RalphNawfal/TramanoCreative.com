"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "quiet" | "invert";
  onClick?: () => void;
};

/**
 * CTA link with a light magnetic pull — enough to feel responsive, not enough
 * to feel like a gadget.
 */
export default function CtaButton({
  href,
  children,
  size = "md",
  variant = "solid",
  onClick,
}: CtaButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 160, damping: 20 });
  const y = useSpring(0, { stiffness: 160, damping: 20 });

  const sizes = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-7 py-3.5 text-[11px]",
    lg: "px-9 py-4.5 text-xs",
  };
  // Invert-on-hover: solid flips to off-white, outline fills. No glow, no
  // shadow — the colour swap is the whole gesture.
  const variants = {
    solid: "bg-signal text-carbon hover:bg-white hover:text-carbon",
    outline:
      "border border-edge text-white hover:border-white hover:bg-white hover:text-carbon",
    quiet:
      "text-grey hover:text-white underline underline-offset-8 decoration-edge hover:decoration-signal",
    // For use on the solid signal-blue field, where the page is inverted
    invert: "bg-carbon text-white hover:bg-white hover:text-carbon",
  };

  function onPointerMove(e: React.PointerEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.18);
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
        className={`inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.2em] transition-colors duration-200 ${sizes[size]} ${variants[variant]}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
