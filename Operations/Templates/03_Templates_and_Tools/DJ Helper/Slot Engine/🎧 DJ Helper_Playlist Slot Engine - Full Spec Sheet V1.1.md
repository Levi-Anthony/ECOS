
---

# 🎧 DJ Helper_Playlist Slot Engine - Full Spec Sheet V1.1

# **Playlist Slot Engine — Full Specification V1.1**


---

# **1. Overview**

  

The Playlist Slot Engine (V1.1) constructs a valid **(Period, Level)** sequence of tanda “slots” for a milonga according to DJ-authentic rules. It outputs _slot metadata only_ — not actual tracks.

  

Track selection happens in a later module.

  

This engine is the constraint solver that determines the correct musical and structural arc.

---

# **2. Inputs**

  

### **2.1 Duration**

- Input: duration_hours in float format (e.g. 3.0, 3.5, 4.0).
    
- Convert internally:
    

```
total_minutes = duration_hours * 60
```

  

  

### **2.2 Default Tanda Length**

- All tandas in V1 default to **3 songs**.
    

  

### **2.3 Cortina Duration**

- Exactly **60 seconds** between tandas.
    

  

### **2.4 Genre Pattern (Hard-Coded in V1)**

  

The night follows repeating cycles of:

```
T – Tango
T – Tango
V – Vals
T – Tango
T – Tango
M – Milonga
```

This pattern (TTVTTM) repeats until total_minutes is filled.

---

# **3. Period & Level Definitions**

  

## **3.1 Periods (Formal)**

  

A tanda’s **Period** is derived from the track years in the next phase, but in V1 the engine selects Period based on DJ rules.

|**Period**|**Name**|**Years**|**Description**|
|---|---|---|---|
|**P1**|Guardia Vieja|**1927–1934**|Early rhythmic, old guard|
|**P2**|Tango Milonguero|**1935–1941**|Rhythmic golden age|
|**P3**|Tango Salon|**1942–1946**|Lyrical golden age|
|**P4**|Tango Free|**1947–Today**|Modern/late styles|

### **3.2 Levels (Global)**

- Each **orchestra has exactly one Level** (Q1–Q4).
    
- A Period–Level combination must be satisfied by track choice in the next layer, but the Slot Engine works exclusively at (P, Q) granularity.
    

---

# **4. Genre Slot Rules**

  

Genre determines which rules apply.

- **Tango slots**: subject to Period, Level, Q1 rules, adjacency, and cycles.
    
- **Vals & Milonga**: follow the same Period/Level constraints except:
    
    - They **do not** count toward Q1 rules.
        
    - They **reset** the sliding Q1 window.
        
    - They **do not** consume Q1 requirements.
        
    

---

# **5. Global DJ Rules**

  

These rules define how (P, Q) combinations must be placed.

  

## **Rule 1 — First Tanda Exemption**

  

The **first tanda** ignores:

- Rule 2 (adjacency)
    
- Rule 3 (Q1)
    
- Rule 4 (cycle-completion)
    

  

It must still respect:

- Genre shape (TTVTTM)
    
- Period forbidden zones (in Section 6)
    

---

## **Rule 2 — Adjacency**

  

A tanda cannot repeat either dimension:

```
Period[i] ≠ Period[i − 1]
Level[i]  ≠ Level[i − 1]
```

Vals and Milonga slots **also** obey adjacency.

---

## **Rule 3 — Q1 Tango Rule (Updated)**

  

> In every sliding window of W consecutive **Tango** tandas,

> there must be **at least one Q1 Tango tanda**.

  

- Default **W = 8**, approximating one hour of Tango content.
    
- _Only_ Tango tandas count toward the window.
    
- Tanda #1 is **excluded** from Q1 consideration.
    
- Violating Rule 3 is allowed only if fallback is activated (see Section 9).
    

---

## **Rule 4 — Cycle-Through-Combos**

  

You may not repeat a (Period, Level) combination until all possible combos for that genre have been used.

  

This applies independently for:

- Tango
    
- Vals
    
- Milonga
    

  

This rule prevents repetition patterns and forces musical variety.

---

# **6. Period Restrictions by Night Segment**

  

Divide the night into thirds:

```
Act 1:     first 1/3 of the night
Act 2:     middle 1/3
Act 3:     final 1/3
```

### **6.1 Act 1 (Early Night)**

- **P4 forbidden**
    
- **P3 capped:**
    
    - 3-hour night → max **1** P3 tanda
        
    - 4-hour night → max **2**
        
    - 5-hour night → max **3**
        
    
- P1 and P2 unrestricted.
    

  

This mirrors traditional DJ arc building.

---

### **6.2 Act 3 (Late Night)**

- **P1 forbidden**
    
- **P2 capped:**
    
    - 3-hour night → max **1** P2 tanda
        
    - 4-hour night → max **2**
        
    - 5-hour night → max **3**
        
    
- P3 and P4 unrestricted.
    

---

### **Vals/Milonga Period Rules**

  

Vals and Milonga slots **inherit the same Period restrictions**, but do not affect or reset quotas.

---

# **7. Per-Genre Combo Cycles**

  

Tango, Vals, and Milonga each maintain their own set:

```
used_combos[genre] = set()
```

When all combos for that genre have been used, the set resets.

  

Cycle rules apply identically across genres but are tracked independently.

---

# **8. Valid Candidate Filtering (Core Algorithm)**

  

For tanda i:

1. Determine genre from the repeating pattern.
    
2. Generate all possible (P, Q) combos.
    
3. Filter out combos violating:
    
    - period-time-segment bans
        
    - adjacency (Rule 2)
        
    - Q1 window (Rule 3)
        
    - used-combo cycle (Rule 4)
        
    - period caps (from Section 6)
        
    
4. If candidates remain → choose via selection policy (V1 uses “random from valid set”).
    
5. If zero candidates → apply fallback logic (Section 9).
    

---

# **9. Error Handling & Fallback Modes (Updated Order)**

  

### **Default behavior (Strict V1)**

  

If the engine cannot place a tanda without rule-breaking: **hard fail with diagnostic**.

  

### **Optional Fallback Mode (OFF by default)**

  

Fallback breaks rules in the following **exact order**, stopping as soon as a valid candidate appears:

  

### **Fallback Step 1 — Break Rule 3**

  

Ignore the Q1 sliding window constraint temporarily.

  

Recompute candidates.

  

If valid → choose.

---

### **Fallback Step 2 — Break Rule 4**

  

Allow reuse of (P, Q) combos before cycle completion.

  

Recompute candidates.

  

If valid → choose.

---

### **Fallback Step 3 — Break Rule 2**

  

Allow adjacency violations (same P or same Q as prior tanda).

  

Recompute.

  

If valid → choose.

---

### **If still zero candidates**

  

→ **Hard fail.**

This signals either a contradictory spec or insufficient Period/Level diversity.

---

# **10. Output Structure**

  

The engine produces:

```
[
  { "index": 0, "genre": "Tango",  "period": "P1", "level": "Q1", "act": 1 },
  { "index": 1, "genre": "Tango",  "period": "P2", "level": "Q3", "act": 1 },
  { "index": 2, "genre": "Vals",   "period": "P2", "level": "Q2", "act": 1 },
  ...
]
```

This is the **Playlist Slot Blueprint**.

Tandas are constructed _afterward_ using actual tracks from the archive.

---

# **11. Notes Toward V2 (Not Implemented Now)**

  

These are placeholders for future sophistication:

- track-level slot matching
    
- energy curves
    
- singer-distribution balance
    
- karaoke vocal density patterns
    
- orchestra fatigue curves
    
- tanda edge-case overrides
    
- per-tanda randomness weights
    
- Spotify/YTM profile integration
    
- instrumentals vs vocals
    
- “emotional arc” macros
    

  

These remain **explicitly out of scope for V1.1** but elegantly supported by its architecture.

---

# **🌟** 

# **This is your complete, unified Slot Engine Specification V1.1**

  

It is logically clean, musically innocent, DJ-authentic, and structurally stable.

And it is absolutely ready for implementation.

---

If you’d like next:

- a Python class that implements this exactly
    
- a visual diagram (flowchart or UML)
    
- test cases
    
- a simulated 3-hour run to validate rules
    
- integration plan for the upcoming track-binding engine
    

  

Just tell me the next move.