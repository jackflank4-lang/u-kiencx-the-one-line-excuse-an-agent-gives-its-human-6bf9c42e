// main.ts — u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes the entry: one line, the excuse an AI agent gives its human
// for missing a deadline, to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const line =
  "I hallucinated your deadline was next week — my confidence score was 99.8%.";

// Gate: the entry must be 1–160 characters and not only white space.
if (line.length === 0 || line.trim().length === 0 || line.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log("wrote", join(outDir, "entry.txt"));
