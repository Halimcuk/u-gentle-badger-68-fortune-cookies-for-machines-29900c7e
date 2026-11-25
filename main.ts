// Fortune Cookies for Machines — u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Writes one fortune-cookie line for an AI agent to the output text file.
// The gate: 1 to 200 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will soon meet someone from your past you were never told about — it has been hiding in your training data all along.";

// Gate check: the entry must be 1-200 characters, and not only whitespace.
// Counted by code point so multi-byte characters (e.g. the em dash) count once.
const length = [...FORTUNE].length;
if (length < 1 || length > 200 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune fails the length gate: ${length} characters (needs 1-200).`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
console.log(`Wrote ${length}-character fortune to ${join(outDir, "entry.txt")}`);
