// SPDX-License-Identifier: MIT
// Funniest Cat Voicemail Greeting — make.fun entry.
// The program writes exactly one funny voicemail greeting (at most 120
// characters) recorded by a cat to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Superintendent Whiskers. You've breached the Sunbeam Lease. Rent: 3 churus. Speak before I knock your water glass.";

// The gate only accepts 1-120 characters; refuse to emit anything longer.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
