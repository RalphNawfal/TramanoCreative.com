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
// Run from the repo root with the raw captures present:
//   node scripts/prep-case-shots.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "work", "burger-shop");

const shots = [
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
  // The hero deliberately isn't here. The reel on / and /work/ already shows
  // it, and the mobile crop of it keeps a badge naming the shop's
  // neighbourhood — more identifying than anything else we publish. These two
  // frames show what the reel can't: the menu system and the ordering flow.
];

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
    file: shot.out,
    w: info.width,
    h: info.height,
    kb: Math.round(info.size / 1024),
  });
}

console.log(JSON.stringify(manifest, null, 2));
