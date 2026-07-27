"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export type Stat = {
  /** Numeric target for the count-up */
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

/** Three numbers, counted up once on view. Quiet on purpose. */
export default function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-12 border-y border-edge py-16 md:grid-cols-3 md:gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <Counter stat={stat} />
          <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-grey">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? stat.to : 0);

  useEffect(() => {
    if (!inView || reduced) {
      if (reduced) setValue(stat.to);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out so it lands softly rather than stopping dead
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * stat.to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, stat.to]);

  return (
    <p
      ref={ref}
      className="font-display text-[clamp(3rem,7vw,5rem)] font-semibold leading-none tracking-[-0.03em] text-white"
    >
      {stat.prefix}
      {value}
      {stat.suffix}
    </p>
  );
}
