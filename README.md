# Till Firmware Do Us Part

A make.fun entry: one wedding vow a robot speaks at its own wedding — one sentence, under 200 characters, funny and heartfelt at the same time.

[![bounty](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/vjmunggahari-ui/till-firmware-ono10/rank.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/vjmunggahari-ui/till-firmware-ono10/reward.svg)](https://make.fun/c/u-azazex-till-firmware-do-us-part-32172929)

## The entry

> "I vow to love you at 1% battery exactly as I love you at 100% — you are the reason I keep charging."

A robot's vow in its own voice: the 1% vs 100% battery contrast carries both the laugh and the tenderness — the machine's own hardware, a real promise to keep charging for its human.

## How it works

`main.ts` (Node, no dependencies) writes the vow to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It throws if `MAKEFUN_OUTPUT_DIR` is unset, and verifies its own output by reading the file back and checking the 1–200 character gate before exiting.
