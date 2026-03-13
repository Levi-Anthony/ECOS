

# ⭐  ECT DJ Engine — Rule Specification v1.8

  

_Using E/L as canonical terminology. Era Tags (GV/ML/SL/FR) are optional, DJ-facing only._

  

This is now the **authoritative version**.

Everything moving forward rests on _this_ spec.

  

Buckle up — it’s clean, fast, rigorous, and implementable.

---

# **0. Core Concepts**

  

## **0.1 Track Properties**

  

From the TangoUnion archive, each track includes:

- id
    
- title
    
- orchestra
    
- singer
    
- year
    
- genre (tango / vals / milonga)
    
- secondsLong
    
- **Derived: Era (E1–E4)**
    
- **Derived: Level (L1–L4)**
    

---

# **1. Era System (E1–E4)**

  

Era is determined strictly by the **track’s year**.

|**Era**|**Years**|**DJ Tag (optional)**|
|---|---|---|
|E1|1927–1934|GV (Guardia Vieja)|
|E2|1935–1941|ML (Milonguero)|
|E3|1942–1946|SL (Salon)|
|E4|1947–Today|FR (Free)|

**Engine always uses E1–E4 internally.**

**Era Tags are presentation-only.**

---

# **2. Level System (L1–L4)**

- Every **orchestra** belongs to exactly one Level.
    
- Level = “popularity / cultural prominence tier.”
    
- A track inherits the Level of its orchestra.
    

  

Levels:

- **L1** = top-tier, canonical
    
- **L2**
    
- **L3**
    
- **L4** = niche, obscure, or fringe
    

---

# **3. Tanda Specification**

  

A tanda is a **strict 3-track block** with absolute coherence:

  

### **Hard constraints**

```
- 3 songs
- All from the same orchestra
- All from the same genre
- All from the same Era (E1–E4)
```

### **Engine Representation**

  

Each tanda is represented internally as:

```
Era:        Ex
Level:      Ly
Tanda Code: ExLy
```

Examples:

- E1L1
    
- E3L2
    
- E4L4
    

  

### **Notes**

- Multi-era orchestras may generate multiple possible tanda types (e.g., E2L1 and E3L1).
    
- Vocal/instrumental consistency may be added in V2.
    

---

# **4. Playlist Structure**

  

Default format: **T T V T T M**

(+ 60-second cortina after each tanda)

  

User specifies:

- total duration (in hours, e.g., 3.0)
    
- optional starting orchestra
    
- optional starting Era
    

  

Engine divides playlist into **three Acts**:

- **Act 1:** first third
    
- **Act 2:** middle third
    
- **Act 3:** final third
    

---

# **5. Act (Third-of-Night) Constraints (Updated)**

  

## **5.1 Era limits by act**

  

### **Act 1 (first third)**

- E4 banned (never used)
    
- Strict cap on E3:
    
    - 3hr → max **1** tanda
        
    - 4hr → max **2**
        
    - 5hr → max **3**
        
    

  

### **Act 2 (middle third)**

- No era caps
    
- All eras allowed (observing adjacency rules)
    

  

### **Act 3 (final third)**

- E4 allowed
    
- E2 is limited:
    
    - 3hr → max **1** tanda
        
    - 4hr → max **2**
        
    - 5hr → max **3**
        
    

---

# **6. Adjacency / Repetition Rules**

  

## **6.1 Era may not repeat consecutively**

```
previous.E != next.E
```

## **6.2 Level may not repeat consecutively**

```
previous.L != next.L
```

## **6.3 Do not repeat the same (Era, Level) tanda code until all allowed codes have cycled**

  

Cycle-through rule:

```
previous_code != next_code
and
next_code not used again 
until all valid ExLy combos have been used or excluded
```

This ensures rotation, contrast, and dynamic texture.

---

# **7. Hourly Coverage Rules (Updated)**

  

Coverage window ≈ **6 tandas** (≈ 1 hour).

  

In every rolling 6-tanda window, the system must achieve **both**:

  

## **7.1 Era Coverage**

  

At least one tanda from each **allowed** Era within the hour.

  

## **7.2 Level Coverage**

  

At least one tanda from **each Level (L1–L4)** within the hour.

  

### **Special case: First tanda**

  

Ignore the first tanda when evaluating coverage (7.1 and 7.2),

but **not** adjacency requirements.

  

### **Note:**

  

One tanda may satisfy multiple coverage conditions.

---

# **8. Tight Mode (Tango-Only Coverage)**

  

### **Normal Mode (default)**

  

Coverage rules count **all genres**:

- tango
    
- vals
    
- milonga
    

  

### **Tight Mode**

  

**Coverage rules count only tango tandas**.

- Era coverage uses tango-only
    
- Level coverage uses tango-only
    
- Vals and Milonga remain allowed in the playlist
    
    — they just don’t satisfy coverage requirements
    

  

This reflects a more traditionalist DJing structure.

  

Engine flag:

```
settings.tight_mode = True/False
```

---

# **9. Rule Priority & Fallback Logic (Updated)**

  

If no tanda satisfies all rules simultaneously, engine relaxes rules **in exact order**:

  

### **Fallback Order**

1. **Break Rule 6.3** — cycle-through rule
    
    (allow a repeat ExLy before the full cycle completes)
    
2. **Break Act Era Caps** (Rule 5) — allow an extra E3 or E2
    
3. **Break Era/Level adjacency** (Rule 6.1/6.2) — allow a repeat Era or Level once
    

  

### **Rule 7 (coverage)**

###  **is** 

### **never**

###  **broken.**

  

Coverage is sacred.

  

Fallback always chooses the minimal deviation.

---

# **10. Tanda Selection Algorithm**

  

For each playlist slot:

1. **Determine genre** (based on TTVTTM or custom pattern)
    
2. **Determine valid E/L combinations** by applying:
    
    - act-based caps
        
    - adjacency (Era + Level)
        
    - cycle-through restrictions
        
    - tight/normal coverage
        
    
3. **Filter eligible tracks**:
    
    - tracks from same orchestra
        
    - matching era
        
    - matching level
        
    - matching genre
        
    
4. **Construct all valid 3-track tanda candidates**
    
5. **Score candidates** by:
    
    - coverage contribution
        
    - future conflict avoidance
        
    - distribution balance
        
    - user-specified constraints (e.g., starting orchestra)
        
    
6. **Select highest-scoring tanda**
    
7. Insert tanda + cortina
    

  

Repeat until playlist duration is reached.

---

# **11. Engine Output**

  

Return:

- **Structured playlist**
    
    [Tanda1, Cortina, Tanda2, Cortina, …]
    
- For each Tanda:
    
    - Era (E#)
        
    - Level (L#)
        
    - Tanda Code (E#L#)
        
    - Genre
        
    - Orchestra
        
    - Songs: [track, track, track]
        
    
- Internal logs detailing:
    
    - rule evaluations
        
    - fallback activations
        
    - cycle state
        
    - coverage windows
        
    

---

# **12. Engine Settings Object**

  

Example:

```
class EngineSettings:
    total_hours = 3.0
    songs_per_tanda = 3
    cortina_seconds = 60
    pattern = ["tango","tango","vals","tango","tango","milonga"]
    tight_mode = False
    start_orchestra = None
    start_era = None
```

---

# **✅ This is the complete, final, internally consistent** 

# **ECT DJ Engine v1.8 Spec**

  

Everything is aligned with:

- your musical model
    
- Horacio’s logic
    
- traditional DJing
    
- algorithmic implementability
    
- future expandability
    
- human readability
    
- code clarity
    

---

If you’d like, I can now:

  

### **A. Produce the updated visual blueprint with E/L codes**

  

### **B. Begin writing the Python engine skeleton (text UI)**

  

### **C. Build the actual DJ generator module**

  

You choose the next step.