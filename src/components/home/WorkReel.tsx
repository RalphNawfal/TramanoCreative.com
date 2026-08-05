"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReelShot } from "@/lib/work";
import { useScrollVelocity } from "@/hooks/useScrollVelocity";

/**
 * The proof shots. Frames enter with a scale-and-dissolve, then respond to
 * scroll velocity — a few degrees of skew while the page moves, settling when
 * it stops.
 *
 * Nothing here links off-site — see the note on ReelShot. The frames stay
 * plain images with no hover affordance, so they never read as clickable; a
 * build with a written-up case study gets a text link in its caption instead.
 */
export default function WorkReel({
  shots,
  headingLevel = "h3",
}: {
  shots: ReelShot[];
  /**
   * The reel sits under a section h2 on the homepage but directly under the
   * page h1 on /work/, so the item titles can't be a fixed level without
   * skipping one somewhere. Callers pass the level that follows their own.
   */
  headingLevel?: "h2" | "h3";
}) {
  return (
    <div className="space-y-28 md:space-y-44">
      {shots.map((shot, i) => (
        <ReelItem
          key={shot.slate}
          shot={shot}
          flip={i % 2 === 1}
          headingLevel={headingLevel}
          // The first frame is the LCP element on both pages that render this
          // reel. It was lazy-loaded along with the rest, which defers the very
          // request the metric is waiting on. Everything below the fold stays
          // lazy.
          priority={i === 0}
        />
      ))}
    </div>
  );
}

function ReelItem({
  shot,
  flip,
  headingLevel: Heading,
  priority = false,
}: {
  shot: ReelShot;
  flip: boolean;
  headingLevel: "h2" | "h3";
  priority?: boolean;
}) {
  const reduced = useReducedMotion();
  const skewRef = useScrollVelocity<HTMLDivElement>();

  return (
    <article className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      {/* Frame */}
      <motion.div
        className={`relative md:col-span-7 ${flip ? "md:order-2" : ""} ${
          // Below lg the phone hangs into the row rather than into the page
          // margin, so the frame needs clearance or it lands on the caption.
          shot.mobile ? "mb-16 lg:mb-0" : ""
        }`}
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
            alt={shot.desktop.alt}
            width={shot.desktop.width}
            height={shot.desktop.height}
            sizes="(min-width: 768px) 58vw, 100vw"
            className="h-auto w-full"
            priority={priority}
          />
        </div>

        {/*
          From lg up the phone hangs off the outer page margin, never the inner
          edge — otherwise it lands on top of the caption column when the row
          flips. Below lg there is no outer margin to spare (the section is only
          px-5), so it tucks against the frame's own edge instead and takes a
          larger share of the width to stay legible on a small screen.
        */}
        {shot.mobile && (
          <motion.div
            className={`absolute -bottom-12 w-[22%] sm:w-[20%] lg:w-[19%] ${
              flip ? "right-3 lg:-right-10" : "left-3 lg:-left-10"
            }`}
            initial={reduced ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Vertical inset only. A bare "-120px" shrinks the observed area
            // horizontally too, and on a narrow screen this phone sits inside
            // that 120px left/right gutter — it would never intersect, so it
            // would stay at opacity 0 forever. Wide viewports hid the bug.
            viewport={{ once: true, margin: "-120px 0px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 0.84, 0.32, 1] }}
          >
            <div className="plate overflow-hidden">
              <Image
                src={shot.mobile.src}
                alt={shot.mobile.alt}
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

        <Heading className="mt-7 font-display text-[clamp(1.6rem,3vw,2.5rem)] uppercase leading-[1]">
          {shot.title}
        </Heading>
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

        {shot.slug && (
          <Link
            href={`/work/${shot.slug}/`}
            className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-grey-deep transition-colors hover:text-signal"
          >
            Read the case study →
          </Link>
        )}
      </motion.div>
    </article>
  );
}
