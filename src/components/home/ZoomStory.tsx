"use client";

import { useEffect, useRef, useState } from "react";
import CtaButton from "@/components/ui/CtaButton";

export type Beat = {
  slate: string;
  title: string;
  /** Word or phrase inside `title` painted in signal blue. */
  accent?: string;
  body: string;
  /** Where the camera is pointing when it leaves this beat. */
  origin?: string;
  set?: SetPiece;
};

type SetPiece = "results" | "browser" | "footer" | "credit" | "none";

/**
 * The middle act, shot as one continuous push-in.
 *
 * Every beat lives on the same stage at a fixed depth. Scroll moves a single
 * camera value `d` forward through those depths, and each beat is scaled by
 * BASE^(d - depth) — so it starts as a speck far ahead, passes through 1:1
 * where it's readable, then blows past the lens. Two beats are on screen at
 * once and they cross through each other, which is what makes this read as
 * one unbroken flight rather than a stack of fades.
 *
 * The story it tells is deliberately literal: search results → someone
 * else's site → the footer of that site → our credit line in it → us. The
 * visitor arrives at the CTA already knowing how they got here.
 */
export default function ZoomStory({ beats }: { beats: Beat[] }) {
  const container = useRef<HTMLDivElement>(null);
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const marks = useRef<(HTMLSpanElement | null)[]>([]);
  const rail = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced !== false) return;
    const el = container.current;
    if (!el) return;

    const count = beats.length;
    /*
     * Magnification per beat. Four is the number that felt like flight —
     * lower reads as a gentle drift, higher and the incoming beat snaps in
     * too fast to be read on the way.
     *
     * Narrow screens get a gentler rate. A beat is only ever at exactly 1:1
     * for an instant; either side of that it's overscaled, and a wide
     * viewport has slack in the margins to absorb that while a phone does
     * not — at BASE 4 the headline is clipped on both edges through most of
     * its readable window.
     */
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const BASE = narrow ? 2.4 : 4;
    /* How far either side of 1:1 a beat stays on screen, in depth units. */
    const WINDOW = 0.72;

    let raf = 0;
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    const render = () => {
      raf = requestAnimationFrame(render);

      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = clamp01(travel > 0 ? -rect.top / travel : 0);
      /* d === 0 parks beat 0 at 1:1; d === count - 1 parks the last one. */
      const d = progress * (count - 1);

      for (let i = 0; i < count; i++) {
        const layer = layers.current[i];
        if (!layer) continue;

        const offset = d - i;
        const opacity = clamp01(1 - Math.abs(offset) / WINDOW);

        if (opacity <= 0.001) {
          if (layer.style.visibility !== "hidden") {
            layer.style.visibility = "hidden";
            layer.style.opacity = "0";
          }
          continue;
        }

        const scale = Math.pow(BASE, offset);
        layer.style.visibility = "visible";
        layer.style.opacity = opacity.toFixed(3);
        layer.style.transform = `scale(${scale.toFixed(4)})`;

        const mark = marks.current[i];
        if (mark) {
          const active = Math.abs(offset) < 0.5;
          mark.style.opacity = active ? "1" : "0.3";
          mark.style.color = active ? "var(--signal)" : "var(--grey-deep)";
        }
      }

      /*
       * The escape hatch. Once the flight is properly underway we surface a
       * persistent book-the-call pill, so nobody who's sold at beat two has
       * to scroll to the bottom to act on it.
       */
      if (rail.current) {
        const show = progress > 0.12 && progress < 0.97;
        rail.current.style.opacity = show ? "1" : "0";
        rail.current.style.pointerEvents = show ? "auto" : "none";
        rail.current.style.transform = show
          ? "translateY(0)"
          : "translateY(12px)";
      }
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [reduced, beats.length]);

  /* Reduced motion, and the pre-hydration markup crawlers see: plain sections. */
  if (reduced !== false) {
    return (
      <div>
        {beats.map((beat) => (
          <section key={beat.slate} className="mx-auto max-w-4xl px-5 py-24">
            <BeatContent beat={beat} />
          </section>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={container}
      style={{ height: `${beats.length * 115}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {beats.map((beat, i) => (
          <div
            key={beat.slate}
            ref={(node) => {
              layers.current[i] = node;
            }}
            style={{
              opacity: i === 0 ? 1 : 0,
              visibility: i === 0 ? "visible" : "hidden",
              transformOrigin: beat.origin ?? "50% 50%",
            }}
            className="absolute inset-0 flex items-center justify-center will-change-[opacity,transform]"
          >
            <SetPieceLayer piece={beat.set} />
            {/*
              Generous side padding on small screens is load-bearing, not
              taste: it's the margin the overscaled beat eats into before the
              type starts getting clipped at the viewport edge.
            */}
            <div className="relative mx-auto w-full max-w-4xl px-10 md:px-5">
              <BeatContent beat={beat} />
            </div>
          </div>
        ))}

        {/* Depth gauge — how far into the story you are */}
        <div
          className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 border-l border-edge pl-4 md:flex"
          aria-hidden
        >
          {beats.map((beat, i) => (
            <span
              key={beat.slate}
              ref={(node) => {
                marks.current[i] = node;
              }}
              style={{ opacity: 0.3, transition: "color 0.4s ease" }}
              className="block font-mono text-[10px] tracking-[0.2em]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        {/* Always-available ask, for anyone sold before the end */}
        <div
          ref={rail}
          style={{ opacity: 0, transform: "translateY(12px)" }}
          className="absolute bottom-8 right-6 transition-[opacity,transform] duration-500 md:bottom-10 md:right-10"
        >
          <CtaButton href="/contact/" size="sm">
            Book the call
          </CtaButton>
        </div>
      </div>
    </div>
  );
}

function BeatContent({ beat }: { beat: Beat }) {
  return (
    <>
      <p className="slate max-w-[28ch] leading-relaxed md:max-w-none">
        {beat.slate}
      </p>
      <h2 className="mt-6 font-display text-[clamp(1.9rem,6.4vw,5.25rem)] uppercase leading-[0.92]">
        <Accented text={beat.title} accent={beat.accent} />
      </h2>
      <p className="mt-8 max-w-[54ch] text-[15px] leading-[1.6] text-grey md:text-lg md:leading-[1.65]">
        {beat.body}
      </p>
    </>
  );
}

function Accented({ text, accent }: { text: string; accent?: string }) {
  if (!accent) return <>{text}</>;
  const at = text.indexOf(accent);
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="text-signal">{accent}</span>
      {text.slice(at + accent.length)}
    </>
  );
}

/**
 * The set each beat is played against. These are drawn, not photographed —
 * a real screenshot at 0.02 scale is mud, and abstractions survive the zoom.
 * Kept faint so the type stays the subject.
 */
function SetPieceLayer({ piece = "none" }: { piece?: SetPiece }) {
  if (piece === "none") return null;

  if (piece === "results") {
    /* A page of search results, seen from orbit. One of them is the one. */
    return (
      <div className="absolute inset-0 grid grid-cols-4 gap-6 p-10 opacity-[0.13]" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`border ${i === 6 ? "border-signal" : "border-edge"} p-3`}
          >
            <div
              className={`h-1.5 w-2/3 ${i === 6 ? "bg-signal" : "bg-edge"}`}
            />
            <div className="mt-2 h-1 w-full bg-edge" />
            <div className="mt-1.5 h-1 w-4/5 bg-edge" />
          </div>
        ))}
      </div>
    );
  }

  if (piece === "browser") {
    /* One of those results, opened. */
    return (
      <div className="absolute inset-0 flex items-center justify-center p-10 opacity-[0.15]" aria-hidden>
        <div className="h-full w-full border border-edge">
          <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-grey-deep" />
            <span className="h-1.5 w-1.5 rounded-full bg-grey-deep" />
            <span className="h-1.5 w-1.5 rounded-full bg-grey-deep" />
            <span className="ml-4 h-1.5 w-40 bg-edge" />
          </div>
          <div className="space-y-4 p-8">
            <div className="h-8 w-1/2 bg-edge" />
            <div className="h-1.5 w-3/4 bg-edge" />
            <div className="h-1.5 w-2/3 bg-edge" />
          </div>
        </div>
      </div>
    );
  }

  if (piece === "footer") {
    /* The bottom of that page — where our name actually lives. */
    return (
      <div className="absolute inset-x-0 bottom-0 border-t border-edge px-10 py-8 opacity-[0.2]" aria-hidden>
        <div className="flex items-end justify-between gap-10">
          <div className="space-y-2">
            <div className="h-1.5 w-24 bg-edge" />
            <div className="h-1.5 w-16 bg-edge" />
          </div>
          <div className="h-1.5 w-32 bg-signal" />
        </div>
      </div>
    );
  }

  /* credit — the line itself, the thing the camera has been flying toward. */
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.10]" aria-hidden>
      <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
        Site by Tramano Creative
      </p>
    </div>
  );
}
