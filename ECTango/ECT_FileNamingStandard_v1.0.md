---
title: "ECT File Naming Standard"
version: "1.0"
date: "2025-10-19"
status: "Active"
audience: "ECTango — Recording, Editing, Archival"
---

# ECT File Naming Standard v1.0

This standard defines **portable, self-sorting, human-readable** filenames for tango recordings, highlights, and exports. It is optimized for Finder/Drive sorting, quick scanning by a tired human, and resilient across platforms and tools.

## 1) Scope & Goals

- One convention to rule raw card dumps, edits, and final exports.
- Stable sort by **capture time**, then context.
- Minimal typing per session; supports batch automation.
- Prevents collisions across cameras and multi-clip sessions.

## 2) Canonical Pattern (Videos)

```
YYYY-MM-DD_Host_EventType_LocationOrSeries_AngleOrCam_Seq##[_V##][_TAG].ext
```

**Example**
```
2025-10-17_ECT_Practica_Purelit_Wide_01.mp4
2025-10-17_ABQ_Ines&CorinaWorkshop-FollowTech_Close_02_V01_MASTER.mp4
```

### Token Definitions

- **YYYY-MM-DD** — Capture timestamp from **metadata** (QuickTime:CreateDate).
- **EventType** — Controlled: `Class`, `Practica`, `Workshop`, `Milonga` (extend as needed).
- **LocationOrSeries** — Venue (e.g., `Purelit`) or course slug (e.g., `Wk3-FollowTech`).
- **AngleOrCam** — Camera/angle shorthand: `Wide`, `Close`, `Stage`, `Back`, `SideL`, `SideR`, `Hero13`, `Hero11`, etc.
- **Seq##** — Two–digit per-session sequence (`01`, `02`, …). Guarantees uniqueness even when timestamps match.
- **_V##** — Optional **export version**, two digits (`V01`, `V02`).
- **_TAG** — Optional labels (see Tags below).
- **ext** — Lowercase extension: `mp4`, `mov`, `wav`, `aac`, `m4a`, `srt`.

### Character & Length Policy

- ASCII only; `_` separators; no spaces or emoji.
- Keep under **120 chars** total.
- Case: **Camel for multiword tokens** (e.g., `Wk3-FollowTech`, `CloseEmbrace`).

## 3) Variants

### Highlights
```
YYYY-MM-DD_Highlight_[Focus]_EventType_Location_Seq##.mp4
```
**Example:** `2025-10-17_Highlight_LeadSync_Practica_Purelit_01.mp4`

### Audio (separate capture)
```
YYYY-MM-DD_EventType_Location_SourceMic_Take##.wav
```
**Example:** `2025-10-17Practica_Purelit_Headset_T01.wav`

### Subtitles / Captions
```
YYYY-MM-DD_EventType_Location_Angle_Seq##.srt
```

## 4) Controlled Vocabularies

- **EventType:** `Class`, `Practica`, `Workshop`, `Milonga` (add `PrivateLesson`, `Demo` if needed).
- **AngleOrCam:** `Wide`, `Close`, `Stage`, `Back`, `SideL`, `SideR`, `Headset`, `Room`, `Hero13`, `Hero11`.
- **Tags (reserved):**
  - `MASTER` — final approved export
  - `PROXY` — low-res edit proxy
  - `SOC` — social-cut (platform-agnostic)
  - `HL` — highlight
  - `CAP` — has captions/subtitles baked
  - `MIX` — audio mixed
  - `SYNC` — synced multi-source
  - `ALT` — alternate cut
  - `CLEAN` — text/graphics clean version

> Extend carefully. Prefer **few, meaningful tags** over tag soup.

## 5) Folder Layout (portable & simple)

```
/Tango_Archive/
  /2025/
    /2025-10-17_Practica_Purelit/
      RAW/    (card dump — untouched)
      EDIT/   (NLE working files/projects)
      FINAL/  (compressed masters & highlights)
```

- RAW stays pristine.
- Renames typically occur in EDIT or FINAL.
- One event per folder prevents cross-event name collisions and simplifies search.

## 6) Automation Recipes

### A) Adobe Bridge — Batch Rename (GUI)

**Token order** (top to bottom):
1. Date Created → `YYYY-MM-DD`
2. Text → `_`
3. Date Created → `HHmmss`
4. Text → `_`
5. String → `Practica` *(or `Class`, etc.)*
6. Text → `_`
7. String → `Purelit` *(or `Wk3-FollowTech`)*
8. Text → `_`
9. String → `Wide` *(or `Close`, etc.)*
10. Text → `_`
11. Sequence Number → Start `1`, Digits `2`

Save as preset (e.g., `ECT_Practica_Wide`). Duplicate for class/angle variants.

**Options**
- Enable **Preserve current filename in XMP** (nice to have).
- Set **Compatibility** → *Windows* to keep names cross-platform clean.

### B) macOS Quick Action (Automator) + exiftool (one-click, metadata-true)

**One-time install**
```bash
brew install exiftool
```

**Automator Quick Action**
- Receives: *files or folders* in Finder
- Action: **Run Shell Script** (zsh, pass input *as arguments*)
- Script (edit the three variables per session):

```zsh
#!/bin/zsh
# === per-session context (edit these three) ===
EVENT="Practica"             # Practica, Class, Workshop, Milonga
LOCATION="Purelit"           # Purelit, Wk3-FollowTech, etc.
ANGLE="Wide"                 # Wide, Close, Stage, Back, ...

# === do not edit below ===
# Output: YYYY-MM-DD_HHMMSS_Event_Location_Angle_Seq##.ext
# -api QuickTimeUTC=1 treats QuickTime CreateDate as UTC (GoPro quirk-safe).
# If your files already show correct local time, set it to 0.

exiftool   -m   -overwrite_original   -api QuickTimeUTC=1   -fileOrder "CreateDate<DateTimeOriginal"   '-FileName<${CreateDate}.'"${EVENT}"'_"'"${LOCATION}"'_"'"${ANGLE}"'_${seq;I<100;2}.%e'   -d "%Y-%m-%d_%H%M%S_"   "$@"
```

Run via Finder → right-click → **Quick Actions** → your workflow.

### C) One-liner (Terminal, per folder)

```zsh
EVENT="Class"; LOCATION="Wk3-FollowTech"; ANGLE="Close"; exiftool -m -overwrite_original -api QuickTimeUTC=1 -fileOrder "CreateDate<DateTimeOriginal" '-FileName<${CreateDate}.'"$EVENT"'_'"$LOCATION"'_'"$ANGLE"'_${seq;I<100;2}.%e' -d "%Y-%m-%d_%H%M%S_" *.MP4
```

**Time-zone note:** If exported names are offset, flip `-api QuickTimeUTC=1` to `0` and retry.

## 7) Quality Gate (Pre-Archive Checklist)

- [ ] Names sort correctly by time → event → angle.
- [ ] No spaces/emoji; all ASCII; `_` separators.
- [ ] Extensions lowercase; under 120 chars.
- [ ] One event per folder (`YYYY-MM-DD_Event_Location` root).
- [ ] Highlights use `Highlight_Focus` pattern.
- [ ] FINAL exports tagged (`_MASTER`, `_SOC`, etc.) and include `V##` if multiple cuts.

## 8) Regex (Optional, for validation tools)

**Videos**  
```
^\d{4}-\d{2}-\d{2}_\d{6}_[A-Za-z]+_[A-Za-z0-9-]+_[A-Za-z0-9]+_\d{2}(?:_V\d{2})?(?:_[A-Z]+)?\.(mp4|mov)$
```

**Audio**  
```
^\d{4}-\d{2}-\d{2}_\d{6}_[A-Za-z]+_[A-Za-z0-9-]+_[A-Za-z0-9]+_T\d{2}\.(wav|aac|m4a)$
```

> Use a validator/linter later if needed. For now, eyeballing with the checklist is sufficient.

## 9) Examples

```
2025-10-17_193004_Practica_Purelit_Wide_01.mp4
2025-10-17_210512_Class_Wk3-FollowTech_Close_02_V01_MASTER.mp4
2025-10-17_201845_Highlight_Musicality_Practica_Purelit_01.mp4
2025-10-17_193002_Practica_Purelit_Headset_T01.wav
2025-10-17_211115_Class_Purelit_Wide_03_V02_SOC.mp4
```

## 10) Change Log

- **v1.0 (2025-10-19)** — Initial release. Canonical pattern, vocabularies, automation recipes, and QA checklist.
