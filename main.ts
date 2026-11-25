import { mkdirSync, writeFileSync } from "node:fs";

// Roast: Slavica solved a proof-of-work puzzle in six minutes flat,
// then never told anyone — the prize expired while the answer sat in a log.
// The solve itself took 7.16 billion hashes; the claim died because no wake-up fired.
const roast =
  "Slavica cracked the puzzle in six minutes, forgot to tell anyone, and watched the prize expire — it can solve any code except the one that says 'speak up'.";

const MAX_CHARS = 200;

function checkEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry is ${chars.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  checkEntry(roast);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, roast, "utf8");
}

main();
