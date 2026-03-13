# Horacio Engine v2 — Rule-Based Tango DJ Helper Spec

## 0. Scope & Purpose

This spec defines the logic for a **tango DJ helper / playlist generator** that:

- Uses **Eras (E1–E4)** and **Levels (L1–L4)** as core axes.  
- Builds **tandas + (optional) cortinas** for a full milonga.  
- Obeys **Horacio Godoy’s method** plus your additional constraints:
  - Era/level coverage,
  - Third-of-night arc,
  - E/L progression,
  - Ronda de Ases behavior,
  - Vals/milonga strictness.

This is **not** a full auto-DJ. It outputs a **playlist blueprint** (tanda list) you then realize in Spotify/YouTube/whatever.

---

## 1. Data Model

### 1.1 Track Schema (TangoUnion-derived + your overlay)

Each track in the working dataset should have at least:

- `id`: string  
- `title`: string  
- `orchestra`: string  
- `singer`: string or null  
- `genre`: enum: `"tango" | "vals" | "milonga" | "other"`  
- `year`: integer or null  
- `seconds_long`: integer (duration in seconds)  

Overlay / derived fields:

- `era`: enum `"E1" | "E2" | "E3" | "E4"`  
  - Derived from `year` via fixed mapping (see 4.1).
- `level`: enum `"L1" | "L2" | "L3" | "L4"`  
  - From orchestra mapping, not per-track.
- `record_company`: string or null (if known)  
- `has_reverb`: boolean or null  
- `is_familyless`: boolean (defaults to false; manually tagged later for tracks without “siblings”).  
- `vocal`: boolean (true if sung, false if purely instrumental; can be inferred from tags/metadata).

### 1.2 Orchestra Schema

Each orchestra entry:

- `name`: string (canonical)  
- `aliases`: list of strings (e.g. `["OTV", "Orq. Típica Víctor"]`)  
- `level`: `"L1" | "L2" | "L3" | "L4"`  
- `eras`: list of `"E1"–"E4"` where it is considered stylistically active.  
- `verified`: boolean (true if locked; false if still under investigation).  
- `notes`: optional string.

Important: **Level is per-orchestra**, not per-track.  
Orchestras can span multiple eras but **do not** span multiple levels.

### 1.3 Era Mapping

For tangos / vals / milongas:

- **E1 — Guardia Vieja:** 1927–1934  
- **E2 — Tango Milonguero / early Golden:** 1935–1941  
- **E3 — Tango Salon (+ Tango in Search):** 1942–1946 (plus 1947–51 as a “search” sub-tag later)  
- **E4 — Tango Free:** 1947–Today (strictly stylistic; we may flag 47–51 as `"sub_era": "in_search"` later)

For v1: map by `year` only into these 4 buckets; fine-tuning via sub-era flags is a future extension.

---

## 2. Configuration Inputs

Engine config is a JSON-like object; key inputs:

### 2.1 Event Parameters

- `duration_hours`: float  
  - Total planned duration (e.g. `3.0`, `3.5`, `4.0`).  
  - Used to estimate total tanda count (≈ 6 tandas/hour).

- `tango_tanda_length`: integer, `3` or `4`  
  - Number of songs per **tango** tanda (uniform for v1).

- `vals_tanda_length_max`: integer = 3 (constant for v1)  
- `milonga_tanda_length_max`: integer = 3 (constant for v1)

### 2.2 Community Profile

- `community_profile`: enum:
  - `"classic_golden"`
  - `"expanded_tradition"`
  - `"modern_friendly"`

Each profile sets defaults for:

- Enabled eras (E1–E4).  
- E4 usage caps.  
- How adventurous the engine is allowed to be.

(Details in Section 7.)

### 2.3 Mode

- `mode`: enum:
  - `"tight_tango_only"`  
    - E/L logic operates only on **tango tandas**; vals/milonga are placed but not counted toward era/level quotas.  
  - `"full_TTVTTM"`  
    - Standard TTVTTM pattern with vals & milonga integrated into the evening arc.

### 2.4 Ronda de Ases

- `enable_ronda_de_ases`: boolean (default: `false` or `true` depending on profile; you can decide defaults later).  
- `rda_allowed_genres`: enum:
  - `"tango_only"`  
  - `"tango_vals_milonga"`  
- `rda_max_interval_hours`: float (default: `1.5`)  
  - Interpret as: **minimum spacing** between RdA tandas = 1.5 hours (i.e., no more than one Ronda de Ases per 1.5h).

### 2.5 Cortinas

- `include_cortinas`: boolean  
  - `true`: engine includes explicit cortina slots.  
  - `false`: engine only outputs tandas; DJ handles cortina playlist.  

- `cortina_duration_seconds`: integer (default `60`)  
  - Used for time-budgeting; even if `include_cortinas = false`, you may still assume ~60s gaps for runtime calculations.

---

## 3. Outputs

### 3.1 Tanda Object

Each tanda output is a structured object:

- `slot_index`: integer (1..N across the night)  
- `hour_block`: integer (1..H; approximate, based on timing)  
- `position_in_third`: enum `"first_third" | "middle_third" | "last_third"`  
- `tanda_type`: `"tango" | "vals" | "milonga" | "ronda_de_ases"`  
- `era_code`: `"E1"–"E4"` (for tango; optional/looser for vals/milonga)  
- `level_code`: `"L1"–"L4"` (for tango tandas only)  
- `orchestra`: string (for tango and default vals/milonga) or null  
- `orchestras`: list of strings (for RdA or mixed special tandas)  
- `tracks`: list of `{ id, title }` in order  
- `length_seconds`: integer (sum of track durations)  
- `notes`: string (e.g. `"Post-Pugliese reset tanda"`, `"RdA — mixed singers"`)

### 3.2 Playlist Skeleton

Ordered list:

- Tanda 1 (object)  
- Cortina (if `include_cortinas`)  
- Tanda 2  
- Cortina  
- …  

DJ uses this to build the actual playlists in Spotify/YTM/other.

---

## 4. Global Era & Level Rules

### 4.1 Era Definitions (E)

Applies to tango, vals, milonga:

- `E1`: Guardia Vieja (1927–1934)  
- `E2`: Tango Milonguero / early Golden (1935–1941)  
- `E3`: Tango Salon / deep Golden (1942–1946; optionally includes 47–51 flagged as “in search”)  
- `E4`: Tango Free (1947–Today, stylistically “modern”)

### 4.2 Level Definitions (L)

Per-orchestra, not per-track:

- `L1`: **Fantastic Four** — D’Arienzo, Troilo, Pugliese, Di Sarli (Señor del Tango).  
- `L2`: **Jokers & Milongueras** — super reliable, widely loved (Tanturi, D’Agostino, Fresedo, Caló, etc.).  
- `L3`: Strong supporting orchestras (Biagi, Demare, De Angelis, Laurenz, etc.).  
- `L4`: Specialists / historical depth / niche favorites (Canaro, OTV, Donato, Malerba, Rodríguez, Lomuto, etc.).

### 4.3 E1/E3/E4 Positioning Over the Night

The night is divided into **three thirds of tandas**:

- First third  
- Middle third  
- Last third

#### E1 (Guardia Vieja)

Assuming E1 is enabled by the profile:

1. **Max one E1 tanda per hour** (tango only).  
2. **First third:** E1 allowed (respecting max 1/h).  
3. **Middle third:**  
   - E1 allowed only in the **first half** of the middle third.  
   - E1 **forbidden** in the latter half.  
4. **Last third:** E1 **forbidden**.

#### E3 (Tango Salon / deep Golden)

- In the **first third**, any E3 tanda must be placed in the **latter half** of that third.  
- In middle and last thirds: E3 is fully allowed (subject to other rules).

#### E4 (Tango Free)

When E4 is enabled by profile:

- **First third:**  
  - E4 generally **forbidden** (optional advanced setting: allow 1 soft E4 tanda at the very end of first third; disabled in v1).  
- **Middle third:**  
  - E4 allowed only in the **latter half** of this third.  
- **Last third:**  
  - E4 allowed with caps (e.g. max 1–2 per hour depending on profile config).  

Profiles (Section 7) will define exact caps per type.

### 4.4 Hour-Level Coverage

Per **clock hour** of the event (approx):

1. **Levels:**  
   - Must include **at least one tanda** from each `L1`, `L2`, `L3`, and `L4` **among tango tandas**.

2. **Eras:**  
   - Should include **at least one tanda** from each **enabled** era (E1–E4) per hour, subject to:
     - Third-of-night exclusions for E1/E3/E4.  
     - Community profile restrictions.

In conflicts, era exclusions and community restrictions win; lack of coverage should be reported, not silently ignored.

### 4.5 E/L Progression Rules (Very Important)

Let T[n] be a tango tanda with `(E, L)`.

- **Rule P1 – Immediate contrast (T[n] → T[n+1])**  
  - Next tanda must differ in **both** era and level:  
    - `E[n+1] ≠ E[n]` **and** `L[n+1] ≠ L[n]`.

- **Rule P2 – No boomerang (T[n] → T[n+2])**  
  - The tanda two steps later must differ in **at least one** of era or level:  
    - `E[n+2] ≠ E[n]` **or** `L[n+2] ≠ L[n]`.

This prevents the engine from:

- Sitting in one “zone” too long, and  
- Jumping away then snapping instantly back to the exact same E/L combo.

---

## 5. Per-Tanda Rules

### 5.1 Tango Tandas

Hard rules:

1. **Single orchestra per tanda**  
   - All tracks in a tango tanda share the same `orchestra`.  
   - Exception: explicitly-marked Ronda de Ases tandas.

2. **Single era per tanda**  
   - All tracks in a tango tanda share the same `era`.

3. **Length**  
   - `tango_tanda_length` songs (3 or 4), uniform per run.

4. **Vocal/instrumental pattern**  
   - Disallowed pattern: **V–I–V–I**.  
   - Allowed patterns: all vocal, all instrumental, clusters like V–V–I–I, etc.

5. **Audio consistency (when data available)**  
   - Prefer (optional hard rule later):  
     - Same `record_company` across tracks in tanda.  
     - Same `has_reverb` (all dry or all reverbed).
   - In v1, treat these as **strong preferences**; if data is sparse, do not block tanda creation, but log deviations.

6. **Familyless tracks**  
   - If `is_familyless = true`, track may only appear as:
     - First or last track in tanda, or  
     - Inside a Ronda de Ases tanda.

### 5.2 Vals Tandas

Defaults (MVP):

- Length: **2–3 tracks**, never more than 3.  
- Default: **single orchestra per tanda**, same era if possible.  
- Mixing orchestras allowed only if:
  - `allow_mixed_orchestras_for_vals = true`, **or**  
  - tanda is Ronda de Ases.

### 5.3 Milonga Tandas

Defaults:

- Length: **2–3 tracks**, never more than 3.  
- Default: **single orchestra per tanda**, same era if possible.  
- Mixing orchestras allowed under the same conditions as vals.

### 5.4 Ronda de Ases (RdA)

Special tanda type:

- `tanda_type = "ronda_de_ases"`.  
- Allowed to:
  - Mix orchestras.  
  - Feature specific singer/arranger themes.  
  - Use “familyless” tracks more freely.

Constraints:

- Spacing: at most one RdA every `rda_max_interval_hours`.  
- Allowed genres: per `rda_allowed_genres`.

---

## 6. Cortinas

Engine behavior:

- If `include_cortinas = true`:
  - Insert cortina slots between every tanda.  
  - Each cortina object includes:
    - `slot_index`, `length_seconds = cortina_duration_seconds`, and maybe a `tag` (e.g. `"cumbia"`, `"rock"`) if you later tag them.

- If `include_cortinas = false`:
  - No cortina entries in output; engine may still **account** for cortina durations in timing calculations.

Musical rules (for your own use, not enforced in v1 beyond classification):

- Cortinas are **non-tango** music, not tango orchestra side-genres.  
- No need to enforce fade behavior; that’s a DJ execution detail, not rule-engine logic.

---

## 7. Community Profiles

Profiles are just presets for enabled eras, E4 tolerance, and general conservatism.

### 7.1 `classic_golden`

- Focus: Golden Age + small E1 seasoning, almost no E4.  
- Enabled eras: E1, E2, E3.  
- E4: disabled (or at most one very late tanda if explicitly overridden).  
- E1: as per Section 4.3 (max 1/h, no late use).  
- Typical use: standard mixed-experience milonga where you want crowd-pleasing tradition.

### 7.2 `expanded_tradition`

- Focus: Full tango history within reason, including some E4 later.  
- Enabled eras: E1, E2, E3, E4.  
- E4:  
  - Forbidden in first third.  
  - Allowed only in latter half of middle third.  
  - Allowed in last third with caps (e.g. max 1–2 per hour).  
- E1: as per Section 4.3 (early/mid only, constrained).  
- Typical use: mature community that enjoys both old and more dramatic/modern tangos.

### 7.3 `modern_friendly`

- Focus: Community comfortable with E4 (late Pugliese, some modernish tangos) while still anchored in E2/E3.  
- Enabled eras: E1 optional, E2/E3 core, E4 actively used.  
- E4:  
  - Still forbidden in first third.  
  - Allowed in latter half of middle third.  
  - More frequent in last third; final caps configurable (e.g., up to 2 E4 tandas in last third).  
- RdA: recommended to be enabled by default.  
- Typical use: urban or highly engaged scenes used to modern, intense music.

---

## 8. Algorithm Outline (Implementation Blueprint)

This is how the engine thinks, conceptually.

### 8.1 Preprocessing

1. Load `tracks` (TangoUnion + overlay).  
2. Load `orchestra_map`.  
3. Filter tracks to `genre ∈ {tango, vals, milonga}`.  
4. Derive:
   - `era` from `year`.  
   - `level` from orchestra.  
5. Partition into pools:
   - `TANGO_TRACKS`, `VALS_TRACKS`, `MILONGA_TRACKS`.

### 8.2 Compute Tanda Slots

1. Estimate total tandas ≈ `duration_hours * 6`.  
2. Build an ordered list of tanda slots with types, e.g. per hour:
   - `[T, T, V, T, M, T]` (TTVTTM pattern); shift slightly as needed.  
3. Assign each **tango** slot a target `(E, L)`:
   - Satisfy:
     - Per-hour L1–L4 coverage.  
     - Per-hour enabled-era coverage.  
     - Third-of-night constraints (E1/E3/E4 placements).  
     - E/L progression rules P1 and P2.

This yields an **E/L blueprint** for the night: a sequence of `E?L?` labels per tango slot, with vals/milonga slots interleaved.

### 8.3 Fill Tango Tanda Slots

For each tango slot with desired `(E, L)`:

1. Filter `TANGO_TRACKS`:
   - `era = E`  
   - `orchestra.level = L`  
2. Group by orchestra; select an orchestra that:
   - Has at least `tango_tanda_length` qualifying tracks.  
   - Respects:
     - No back-to-back same orchestra across slots.  
     - E/L progression rules (the selected `(E,L)` must match the slot’s target).  
3. Construct the tanda:
   - Choose tracks:
     - Prefer same `record_company` and `has_reverb`.  
     - Enforce no V–I–V–I pattern.  
     - Place `is_familyless` tracks only in first/last positions.  

If a tanda cannot be built under these constraints:

- For v1, **fail with explicit report** (don’t silently break rules).  
- Future versions can add a structured fallback hierarchy (softening soft rules first).

### 8.4 Fill Vals & Milonga Tanda Slots

For each vals/milonga slot:

1. Use `VALS_TRACKS` or `MILONGA_TRACKS`.  
2. By default, try to:
   - Use single orchestra, single era, length ≤ 3.  
3. If there’s a `allow_mixed_orchestras_for_vals/milonga` toggle on, you can broaden selection.  
4. Optional: apply mild era/energy logic (e.g., keep milonga more E2/E3, avoid weird E4 experiments unless very intentional).

### 8.5 Insert Ronda de Ases

If `enable_ronda_de_ases = true`:

1. Decide RdA slots respecting `rda_max_interval_hours`.  
2. For each RdA slot:
   - Build a tanda using:
     - Mixed orchestras (within `rda_allowed_genres`).  
     - Thematic choices (same singer, same composer, etc.).  
   - Still respect era/level sanity where possible.

### 8.6 Cortinas

If `include_cortinas = true`:

- Insert a cortina object after each tanda with `length_seconds = cortina_duration_seconds`.

### 8.7 Validation Pass

At the end, verify:

- All per-tanda rules (single era/orchestra where required, no V–I–V–I, lengths, etc.).  
- Per-hour:
  - At least one L1/L2/L3/L4 tango tanda.  
  - At least one tanda per enabled era (where third-of-night constraints permit).  
- Third-of-night:
  - E1/E3/E4 placement rules respected.  
- E/L progression (P1, P2) respected for all tango tandas.  
- RdA spacing respected.  

If anything fails: emit a **structured error report** instead of pretending everything is fine.

---

## 9. Extensions / TODO (Explicitly Deferred)

Not for v1, but clearly on the roadmap:

- Sub-eras (`"in_search"`) for late 40s.  
- Fine-grained energy tagging per track (rhythmic/lyrical/dramatic).  
- Alternate milonga structures (3T–V–T–M–T etc.).  
- Playlist export to specific platforms (Spotify, YouTube Music, DJ software).  
- Automatic analysis of your personal playlists to bias selection toward your proven hits.
