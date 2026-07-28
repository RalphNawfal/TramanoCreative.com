// One-off asset prep: crops captured screenshots below the nav bar (so no client
// wordmark or contact detail survives), trims the scrollbar, and re-encodes to WebP.
// Run from the repo root with the raw *.png captures present:  node scripts/prep-work-shots.mjs
import sharp from "sharp";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "work");

// top = pixels to remove from the top (kills the logo/nav row)
// bottom = pixels to remove from the bottom (kills anything identifying low in the frame)
// right = scrollbar trim
const shots = [
  { src: "jsbite-desktop.png", out: "reel-01-desktop.webp", top: 74, bottom: 0, right: 16 },
  { src: "jsbite-mobile.png", out: "reel-01-mobile.webp", top: 60, bottom: 0, right: 12 },
  { src: "build-01-desktop.png", out: "reel-02-desktop.webp", top: 74, bottom: 0, right: 16 },
  { src: "build-01-mobile.png", out: "reel-02-mobile.webp", top: 58, bottom: 0, right: 12 },
  { src: "build-02-desktop.png", out: "reel-03-desktop.webp", top: 66, bottom: 0, right: 16 },
  { src: "build-02-mobile.png", out: "reel-03-mobile.webp", top: 62, bottom: 0, right: 12 },
  { src: "build-03-desktop.png", out: "reel-04-desktop.webp", top: 84, bottom: 0, right: 16 },
  { src: "build-03-mobile.png", out: "reel-04-mobile.webp", top: 76, bottom: 0, right: 12 },
  // Aurora: phone number sits low in the frame, so trim the bottom too.
  // Mobile is intentionally skipped — that demo's mobile layout is broken.
  { src: "build-04-desktop.png", out: "reel-05-desktop.webp", top: 72, bottom: 165, right: 16 },
];

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const manifest = [];

for (const shot of shots) {
  const img = sharp(shot.src);
  const { width, height } = await img.metadata();

  const left = 0;
  const cropW = width - shot.right;
  const cropH = height - shot.top - shot.bottom;

  const info = await sharp(shot.src)
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
