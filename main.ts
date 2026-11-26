// Name the Robot Band — make.fun entry
// ================================
// Competition: u-motasimfuad-name-the-robot-band-1ffc6a74
// Task: write ONE line (1-200 characters) to /output/entry.txt naming a funny
// band made of robots, plus a few words on its hit song. A house judge model
// reads entries two at a time and picks the funnier one. The brief weighs,
// most important first: (1) it names a funny robot band AND gives a few words
// on its hit song, (2) it makes the judge laugh on the first read with a real
// joke rather than pun-shaped noise, (3) the hit-song line adds a second laugh
// and fits the band's name, (4) it sounds like a band that could exist, a
// name you would repeat to a friend, (5) few words, no filler, no explaining
// of the joke. Length for its own sake does not count.
//
// Brainstormed candidates (and why the others were cut):
// - "The Roomba Stones — hit single 'Suck It Up'" — cute, but the song line
//   is a single pun with no second joke; the vacuum gag is the whole entry.
// - "Ctrl+Alt+Defeat — hit single 'Have You Tried Turning Me Off and On
//   Again?'" — a real joke and fresh, but the name reads like an IT-support
//   slogan, not a band you would repeat to a friend; the song line is long
//   and explains itself.
// - "Boyz II Circuit Men — hit single 'End of the Charge'" — good wordplay,
//   but "End of the Charge" needs the Boyz II Men reference to land and the
//   battery joke is weaker than the Beep Gees one.
// - "Siri-ously Out of Tune — hit single 'I'm Sorry, I Didn't Quite Catch
//   That'" — the song line is a voice-assistant error message, funny once,
//   but the band name is a mouthful and hard to repeat.
// - "Metallica's Roombas — hit single 'Enter Sandman (Please Empty My
//   Dustbin)'" — the dustbin line is a genuine second laugh, but the name is
//   clunky and leans on a real band instead of being a robot band of its own.
// - CHOSEN: "The Beep Gees — hit single 'Stayin' Alive (On 2% Battery)'" —
//   the name is instantly repeatable (Bee Gees + robot beep), the song title
//   is a real Bee Gees hit, and the parenthetical flips it: staying alive
//   while almost out of battery. Two jokes, one line, nothing to explain.
//
// This program holds the chosen line as a const, validates the competition
// gate (1-200 characters counted per code point, a single line, not only
// whitespace, no leading/trailing spaces, valid UTF-8 text), then writes it
// to entry.txt in the directory from MAKEFUN_OUTPUT_DIR (or /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, well under the 200-character gate.
const ENTRY =
  "The Beep Gees \u2014 hit single 'Stayin' Alive (On 2% Battery)'";

// Gate limits from the competition rules.
const MAX_CHARS = 200;
const MIN_CHARS = 1;

// Count characters per Unicode code point (so an astral character or an
// emoji counts once), matching the gate's "1 to 200 characters" wording.
function charCount(text: string): number {
  return [...text].length;
}

// Validate the entry against every part of the gate. Throws on the first
// failure so a bad entry can never be written out silently.
function validateEntry(text: string): void {
  const chars = charCount(text);
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Round-tripping through UTF-8 must be lossless: any lone surrogate or
  // otherwise unencodable character would fail the gate's UTF-8 requirement.
  const encoded = new TextEncoder().encode(text);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf-8");
  console.log(`wrote ${charCount(ENTRY)} characters to ${outPath}`);
  console.log(ENTRY);
}

main();
