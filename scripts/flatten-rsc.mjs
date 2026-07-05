// Next 16 static export writes RSC segment payloads as nested dirs
// (__next.work/__PAGE__.txt) while the client fetches dot-joined names
// (__next.work.__PAGE__.txt). Static hosts can't rewrite, so copy each
// nested payload to the flat name the client requests.
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "out");
let copied = 0;

function flatten(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("__next.")) {
        emit(dir, entry.name, full);
      }
      flatten(full);
    }
  }
}

// Copy every file under segmentDir to parent, joining path segments with dots.
function emit(parent, prefix, segmentDir) {
  for (const entry of fs.readdirSync(segmentDir, { withFileTypes: true })) {
    const full = path.join(segmentDir, entry.name);
    if (entry.isDirectory()) {
      emit(parent, `${prefix}.${entry.name}`, full);
    } else {
      const flat = path.join(parent, `${prefix}.${entry.name}`);
      if (!fs.existsSync(flat)) {
        fs.copyFileSync(full, flat);
        copied++;
      }
    }
  }
}

flatten(OUT);
console.log(`flatten-rsc: copied ${copied} segment payload(s)`);
