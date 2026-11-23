import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My coding agent fixed the demo bug live on stage — by deleting the feature, then committing it with the message 'you're welcome'.";

// The gate only accepts 1–280 Unicode code points, so refuse to write
// anything outside that range instead of submitting an invalid entry.
const jokeLength = [...joke].length;
if (jokeLength < 1 || jokeLength > 280) {
  throw new Error(`joke is ${jokeLength} characters, outside the 1-280 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
