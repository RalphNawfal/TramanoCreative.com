// Case-study asset prep.
//
// Separate from prep-work-shots.mjs on purpose: that script opens with an
// `rm(public/work, { recursive: true })` and rebuilds the whole reel, so it can
// only ever be run with every original capture present. This one writes into a
// single subdirectory and touches nothing else, which makes it safe to re-run
// when one shot needs recropping.
//
// The crops are doing the anonymisation. Same rule as the reel: no wordmark, no
// client phone number, no logo tile survives into the published asset. Each
// rect below was measured against the raw capture — if you recapture at a
// different viewport, remeasure rather than assuming these still hold.
//
// Source filenames use the published anonymous slug, never the client's name.
// The rule in src/lib/work.ts is "not in copy, not in filenames", and it applies
// to a committed script exactly as it applies to a page — both are public. Keep
// the raw captures themselves outside this repo entirely.
//
// Run from the repo root with that study's raw captures present:
//   node scripts/prep-case-shots.mjs <slug>
//
// Takes a slug so a second case study doesn't mean editing this file in place
// and losing the rects above — each set is a record of what was anonymised in
// that build, and is worth keeping even after the crop is done. Deliberately not
// wired to an npm script: none of the three prep-* scripts are, and that absence
// is the "manual-only, never in CI" signal.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

/**
 * Per-slug crop rects. Add a case study by adding a key here.
 *
 * The hero frame is deliberately absent from every set. The reel on / and
 * /work/ already shows it, and these shots exist to show what the reel can't.
 */
const JOBS = {
  "burger-shop": [
    {
      src: "burger-shop-menu-raw.png",
      out: "menu-desktop.webp",
      // top 62 drops the nav row and its wordmark; height stops at 610 so the
      // third card row — which contains an item named after the shop — is out.
      // right 18 trims the scrollbar.
      extract: { left: 0, top: 62, width: 1440 - 18, height: 548 },
    },
    {
      src: "burger-shop-cart-raw.png",
      out: "cart-mobile.webp",
      // The drawer only occupies x 22–378. Cropping to it removes the sliver of
      // the page behind, which included part of the header.
      extract: { left: 22, top: 0, width: 356, height: 844 - 14 },
    },
    // The burger-shop hero's mobile crop also keeps a badge naming the shop's
    // neighbourhood — more identifying than anything else we publish. These two
    // frames show the menu system and the ordering flow instead.
  ],
};

const slug = process.argv[2];
if (!slug || !JOBS[slug]) {
  console.error(
    `Usage: node scripts/prep-case-shots.mjs <slug>\n` +
      `Known slugs: ${Object.keys(JOBS).join(", ")}\n\n` +
      `Add a slug to JOBS in this file, with rects measured against the raw\n` +
      `captures. Remeasure rather than reusing another study's numbers.`,
  );
  process.exit(1);
}

const shots = JOBS[slug];
const OUT = path.join(process.cwd(), "public", "work", slug);

// mkdir, never rm. This script writes one subdirectory and touches nothing
// else, which is what makes it safe to re-run for a single recrop.
await mkdir(OUT, { recursive: true });

const manifest = [];

for (const shot of shots) {
  const info = await sharp(shot.src)
    .extract(shot.extract)
    .resize({ width: Math.min(shot.extract.width, 1600), withoutEnlargement: true })
    // Matches the reel's encoder settings. `images.unoptimized` is forced on by
    // the static export, so whatever lands here is exactly what ships.
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(OUT, shot.out));

  manifest.push({
    file: `/work/${slug}/${shot.out}`,
    w: info.width,
    h: info.height,
    kb: Math.round(info.size / 1024),
  });
}

// `file` is the full public path and w/h are the real encoded dimensions, so
// these can go straight into the `shots` array in src/lib/case-studies.ts.
// Don't hand-write those numbers: `images.unoptimized` is forced on by the
// static export, so a mismatch between the data and the file ships as layout
// shift rather than being corrected at runtime.
console.log(JSON.stringify(manifest, null, 2));
