// One-off asset prep: crops captured screenshots below the nav bar (so no client
// wordmark or contact detail survives), trims the scrollbar, and re-encodes to WebP.
//
// Run from the repo root:
//   node scripts/prep-work-shots.mjs --src <dir> [reel-05 reel-06 …]
//
// `--src` is the folder holding the raw *.png captures, and it should be outside
// this repo: the captures are un-anonymised, and the repo is public. It defaults
// to the working directory for backwards compatibility.
//
// With no reel names, every frame below is rebuilt. With names, only those frames
// are. That became necessary once the raw captures for 01–04 were no longer on
// disk: the old all-or-nothing rule meant adding one new build required
// recapturing four that couldn't be recaptured.
//
// Rewrites only the reel frames selected. It used to delete all of public/work
// and rebuild it, which meant a run also destroyed the per-case-study
// subdirectories — and those are built from raw captures kept outside the repo,
// so they could not be regenerated. Now each output is replaced individually and
// nothing else in public/work is touched.
//
// The guard further down still refuses to start if any *selected* source is
// missing, so a half-finished run can't leave the reel in a mixed state.
import sharp from "sharp";
import { access, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "work");

const args = process.argv.slice(2);
const srcFlag = args.indexOf("--src");
const SRC = srcFlag === -1 ? process.cwd() : path.resolve(args[srcFlag + 1] ?? "");
const only = args.filter((a, i) => a !== "--src" && i !== srcFlag + 1);

// top = pixels to remove from the top (kills the logo/nav row)
// bottom = pixels to remove from the bottom (kills anything identifying low in the frame)
// right = scrollbar trim
//
// Source names are anonymous, same rule as the published filenames: this file is
// public, so it can't carry a client name in a filename or in a comment.
const shots = [
  { src: "burger-shop-desktop.png", out: "reel-01-desktop.webp", top: 74, bottom: 0, right: 16 },
  { src: "burger-shop-mobile.png", out: "reel-01-mobile.webp", top: 60, bottom: 0, right: 12 },
  { src: "build-01-desktop.png", out: "reel-02-desktop.webp", top: 74, bottom: 0, right: 16 },
  { src: "build-01-mobile.png", out: "reel-02-mobile.webp", top: 58, bottom: 0, right: 12 },
  { src: "build-02-desktop.png", out: "reel-03-desktop.webp", top: 66, bottom: 0, right: 16 },
  { src: "build-02-mobile.png", out: "reel-03-mobile.webp", top: 62, bottom: 0, right: 12 },
  { src: "build-03-desktop.png", out: "reel-04-desktop.webp", top: 84, bottom: 0, right: 16 },
  { src: "build-03-mobile.png", out: "reel-04-mobile.webp", top: 76, bottom: 0, right: 12 },
  // Builds 05 and 06 are the hero exactly as it loads — viewport captures at
  // 1440×900 and 390×844, never scrolled. The rects were measured from the page
  // at capture time: `top` is the bottom of the header rows (wordmark, phone),
  // `bottom` trims everything past the hero or under a pinned mobile call bar.
  //
  // Build 05 is under NDA. One hero list item names a credential mark, and the
  // form card carries the phone number, and no rect can reach either mid-frame,
  // so both were hidden in the page before capture. Its desktop capture is
  // 1440×1060 rather than 900, so the whole hero — form button included — is on
  // screen at load without scrolling.
  { src: "build-05-desktop.png", out: "reel-05-desktop.webp", top: 128, bottom: 50, right: 15 },
  { src: "build-05-mobile.png", out: "reel-05-mobile.webp", top: 144, bottom: 257, right: 15 },
  // Build 06 isn't public yet, and its headline IS the business name. Hiding it
  // would leave a hole in the hero, so the name, street, founding year, staff
  // name and review count were blurred in place before capture, heavily enough
  // that nothing is legible while the layout stays true.
  { src: "build-06-desktop.png", out: "reel-06-desktop.webp", top: 114, bottom: 17, right: 15 },
  { src: "build-06-mobile.png", out: "reel-06-mobile.webp", top: 114, bottom: 71, right: 15 },
];

const selected =
  only.length === 0
    ? shots
    : shots.filter((s) => only.some((name) => s.out.startsWith(`${name}-`)));

if (selected.length === 0) {
  console.error(
    `No reel frames match: ${only.join(", ")}\n` +
      `Known: ${[...new Set(shots.map((s) => s.out.replace(/-(desktop|mobile)\.webp$/, "")))].join(", ")}`,
  );
  process.exit(1);
}

// Check every selected source exists before removing anything.
const missing = [];
for (const shot of selected) {
  try {
    await access(path.join(SRC, shot.src));
  } catch {
    missing.push(shot.src);
  }
}
if (missing.length > 0) {
  console.error(
    `Refusing to run: ${missing.length} source capture(s) missing from ${SRC}.\n` +
      missing.map((f) => `  - ${f}`).join("\n") +
      `\n\nAll ${selected.length} selected captures have to be present, so a run either\n` +
      `replaces those frames or changes nothing.`,
  );
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

// Only the files this run is about to write. A recursive delete of OUT would
// take the case-study subdirectories with it, and those can't be rebuilt from
// anything in the repo.
for (const shot of selected) {
  await rm(path.join(OUT, shot.out), { force: true });
}

const manifest = [];

for (const shot of selected) {
  const src = path.join(SRC, shot.src);
  const { width, height } = await sharp(src).metadata();

  const left = 0;
  const cropW = width - shot.right;
  const cropH = height - shot.top - shot.bottom;

  const info = await sharp(src)
    .extract({ left, top: shot.top, width: cropW, height: cropH })
    .resize({ width: Math.min(cropW, 1600), withoutEnlargement: true })
    // WebP rather than JPEG: same visual quality on these flat UI screenshots
    // at roughly half the bytes, and `images.unoptimized` is forced on by the
    // static export, so nothing downstream will re-encode these for us.
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(OUT, shot.out));

  manifest.push({ file: shot.out, w: info.width, h: info.height, kb: Math.round(info.size / 1024) });
}

console.log(JSON.stringify(manifest, null, 2));
