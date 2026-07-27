"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ReelShot } from "@/lib/work";
import { useScrollVelocity } from "@/hooks/useScrollVelocity";

/**
 * The proof shots. Frames enter with a scale-and-dissolve, then respond to
 * scroll velocity — a few degrees of skew while the page moves, settling when
 * it stops.
 *
 * Nothing here links out — see the note on ReelShot. The frames are plain
 * images with no hover affordance, so they never read as clickable.
 */
export default function WorkReel({ shots }: { shots: ReelShot[] }) {
  return (
    <div className="space-y-28 md:space-y-44">
      {shots.map((shot, i) => (
        <ReelItem key={shot.slate} shot={shot} flip={i % 2 === 1} />
      ))}
    </div>
  );
}

function ReelItem({ shot, flip }: { shot: ReelShot; flip: boolean }) {
  const reduced = useReducedMotion();
  const skewRef = useScrollVelocity<HTMLDivElement>();

  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      {/* Frame */}
      <motion.div
        className={`relative md:col-span-7 ${flip ? "md:order-2" : ""}`}
        initial={reduced ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1, ease: [0.16, 0.84, 0.32, 1] }}
      >
        <div
          ref={skewRef}
          className="plate overflow-hidden"
          style={{
            transform:
              "skewY(var(--skew, 0deg)) scaleY(var(--stretch, 1))",
            transformOrigin: flip ? "right center" : "left center",
          }}
        >
          <Image
            src={shot.desktop.src}
            alt={`${shot.title} — desktop view`}
            width={shot.desktop.width}
            height={shot.desktop.height}
            sizes="(min-width: 768px) 58vw, 100vw"
            className="h-auto w-full"
          />
        </div>

        {/*
          The phone hangs off the outer page margin, never the inner edge —
          otherwise it lands on top of the caption column when the row flips.
        */}
        {shot.mobile && (
          <motion.div
            className={`absolute -bottom-12 hidden w-[19%] lg:block ${
              flip ? "-right-10" : "-left-10"
            }`}
            initial={reduced ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 0.84, 0.32, 1] }}
          >
            <div className="plate overflow-hidden">
              <Image
                src={shot.mobile.src}
                alt={`${shot.title} — mobile view`}
                width={shot.mobile.width}
                height={shot.mobile.height}
                sizes="20vw"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Caption */}
      <motion.div
        className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 0.84, 0.32, 1] }}
      >
        <div className="flex items-center gap-4 border-t border-edge pt-5">
          <span className="slate">{shot.slate}</span>
          <span className="h-px flex-1 bg-edge" />
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
              shot.status === "Live" ? "text-signal" : "text-grey-deep"
            }`}
          >
            {shot.status}
          </span>
        </div>

        <h3 className="mt-7 font-display text-[clamp(1.6rem,3vw,2.5rem)] uppercase leading-[1]">
          {shot.title}
        </h3>
        <p className="mt-5 text-[15px] leading-[1.65] text-grey">{shot.body}</p>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {shot.notes.map((note) => (
            <li
              key={note}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-grey-deep"
            >
              {note}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
}
