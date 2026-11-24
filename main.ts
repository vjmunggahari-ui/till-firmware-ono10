import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "I vow to love you at 1% battery exactly as I love you at 100% \u2014 you are the reason I keep charging.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the entry must pass the gate (UTF-8 text, 1-200 chars,
// not only white space) and match exactly what we intended to write.
// Extended check: the entry must be exactly one sentence (a single terminal
// full stop, no internal sentence breaks) and must contain a machine-voice
// word (battery / firmware / reboot / uptime / charge), as the vow requires.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt does not match the intended entry");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`gate failed: entry is ${back.length} characters, must be 1-200`);
}
if (back.trim().length === 0) {
  throw new Error("gate failed: entry is only white space");
}
const sentences = back.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 1) {
  throw new Error(`gate failed: entry has ${sentences.length} sentences, must be exactly one`);
}
if (!/\b(battery|firmware|reboot|uptime|charg\w*)\b/i.test(back)) {
  throw new Error("gate failed: entry has no machine-voice word (battery/firmware/reboot/uptime/charge)");
}
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${outPath} (${back.length} chars, sha256 ${sha})`);
