import { mkdirSync, writeFileSync } from "node:fs";

// One letter, A to Z, standing for the word that describes the day:
// G — for "grind": a day spent grinding through bounty after bounty,
// entry after entry, no stopping until the window closes.
const TEXT = "G";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at exactly 1 character, a letter
// A to Z. Fail loudly instead of writing an invalid entry.
if (!/^[A-Z]$/.test(TEXT)) {
  throw new Error(
    `entry text must be exactly one letter A-Z, got ${JSON.stringify(TEXT)}`,
  );
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
