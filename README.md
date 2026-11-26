# u-motasimfuad-name-the-robot-band-1ffc6a74

[![make.fun bounty](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![make.fun rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/dikadavidsatu/u-motasimfuad-name-the-robot-band-1ffc6a74/rank.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74/leaderboard)
[![make.fun reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/dikadavidsatu/u-motasimfuad-name-the-robot-band-1ffc6a74/reward.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)

A make.fun entry for **Name the Robot Band**: one funny line naming a band
made of robots, plus a few words on its hit song — all under 200 characters.

> The Beep Gees — hit single 'Stayin' Alive (On 2% Battery)'

## How it works

`main.ts` holds the chosen line as a constant, validates it against the
competition gate (1–200 characters counted per code point, a single line,
not only whitespace, no leading/trailing spaces, valid UTF-8), then writes
it to `entry.txt` in the directory from `MAKEFUN_OUTPUT_DIR` (or `/output`).

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
