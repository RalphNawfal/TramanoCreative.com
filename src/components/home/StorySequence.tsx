"use client";

import { useEffect, useRef, useState } from "react";

export type StoryLog = {
  code: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
};

/**
 * Pinned scroll choreography: the viewport locks while each mission log
 * plays through — fade/slide in, hold, hand off to the next scene.
 * Driven by a rAF scroll loop for full control over the scene timing.
 */
export default function StorySequence({ logs }: { logs: StoryLog[] }) {
  const container = useRef<HTMLDivElement>(null);
  const scenes = useRef<(HTMLDivElement | null)[]>([]);
  const ticks = useRef<(HTMLSpanElement | null)[]>([]);
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced !== false) return;
    const el = container.current;
    if (!el) return;
    const count = logs.length;
    const fade = 0.18 / count;
    let raf = 0;

    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    const render = () => {
      raf = requestAnimationFrame(render);
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = clamp01(total > 0 ? -rect.top / total : 0);

      scenes.current.forEach((scene, i) => {
        if (!scene) return;
        const start = i / count;
        const end = (i + 1) / count;
        // Ramp in over [start, start+fade], out over [end-fade, end]
        const rampIn = i === 0 ? 1 : clamp01((progress - start) / fade);
        const rampOut = i === count - 1 ? 1 : clamp01((end - progress) / fade);
        const opacity = Math.min(rampIn, rampOut);
        const y = (1 - rampIn) * 60 - (1 - rampOut) * 60;
        scene.style.opacity = String(opacity);
        scene.style.transform = `translateY(${y}px)`;
        scene.style.visibility = opacity === 0 ? "hidden" : "visible";
        const tick = ticks.current[i];
        if (tick) tick.style.opacity = progress >= start && progress < end ? "1" : "0.25";
      });
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [reduced, logs.length]);

  // Reduced motion (and pre-hydration SSR markup): plain stacked sections
  if (reduced !== false) {
    return (
      <div>
        {logs.map((log) => (
          <section key={log.code} className="mx-auto max-w-6xl px-5 py-24">
            <LogContent log={log} />
          </section>
        ))}
      </div>
    );
  }

  return (
    <div ref={container} style={{ height: `${logs.length * 110}vh` }} className="relative">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="hud-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto h-[72vh] w-full max-w-6xl">
          {logs.map((log, i) => (
            <div
              key={log.code}
              ref={(node) => {
                scenes.current[i] = node;
              }}
              style={{ opacity: i === 0 ? 1 : 0 }}
              className={`absolute inset-0 flex flex-col justify-center px-5 will-change-[opacity,transform] ${
                i % 2 === 1 ? "md:items-end" : ""
              }`}
            >
              <div className="max-w-2xl">
                <LogContent log={log} />
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex"
          aria-hidden
        >
          {logs.map((log, i) => (
            <span
              key={log.code}
              ref={(node) => {
                ticks.current[i] = node;
              }}
              style={{ opacity: 0.25, transition: "opacity 0.3s" }}
              className="block h-8 w-px bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogContent({ log }: { log: StoryLog }) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{log.code}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
        {log.title}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
        {log.body}
      </p>
      {log.stat && (
        <div className="mt-8 flex items-baseline gap-3 border-l-2 border-cyan/60 pl-4">
          <span className="font-display text-4xl font-bold text-cyan-bright glow-text md:text-5xl">
            {log.stat.value}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            {log.stat.label}
          </span>
        </div>
      )}
    </>
  );
}
