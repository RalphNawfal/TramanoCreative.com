// Submit URLs to IndexNow so Bing (and the assistants that read Bing's index)
// pick up changes without waiting for a crawl. Google ignores IndexNow.
//
//   npm run indexnow                     -> every URL in out/sitemap.xml
//   npm run indexnow -- /blog/some-post/ -> just those paths
//   npm run indexnow -- --dry-run        -> print what would be sent
//
// Run after a deploy has gone live: IndexNow tells Bing to come and look, so
// the new content has to be there when it does. Submitting unchanged URLs in
// bulk is treated as spam, so prefer naming the paths that actually changed.
import fs from "fs";
import path from "path";

const SITE_URL = "https://tramanocreative.com";
const HOST = "tramanocreative.com";
const KEY = "e40e830d6a210465d9b0b8f0dab8dd2e";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const paths = args.filter((arg) => !arg.startsWith("--"));

function fromSitemap() {
  const sitemap = path.join(process.cwd(), "out", "sitemap.xml");
  if (!fs.existsSync(sitemap)) {
    console.error("No out/sitemap.xml — run `npm run build` first.");
    process.exit(1);
  }
  const xml = fs.readFileSync(sitemap, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urlList = paths.length
  ? paths.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`))
  : fromSitemap();

if (urlList.length === 0) {
  console.error("Nothing to submit.");
  process.exit(1);
}

console.log(`IndexNow: ${urlList.length} URL(s)`);
for (const url of urlList) console.log(`  ${url}`);

if (dryRun) {
  console.log("\n--dry-run: nothing sent.");
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  }),
});

// 200 accepted, 202 accepted but the key file hasn't been verified yet.
if (res.ok) {
  console.log(`\nSubmitted — HTTP ${res.status}.`);
} else {
  console.error(`\nRejected — HTTP ${res.status} ${res.statusText}`);
  console.error(await res.text());
  process.exit(1);
}
