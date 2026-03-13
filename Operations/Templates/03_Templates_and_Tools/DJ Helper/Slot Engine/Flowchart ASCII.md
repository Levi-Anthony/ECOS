┌────────────────────────────────────────────────────────────────────────────┐
│                          PLAYLIST SLOT ENGINE V1.1                         │
└────────────────────────────────────────────────────────────────────────────┘

STEP 0: INPUT + PREP
──────────────────────────────────────────────────────────────────────────────
     duration_hours  →  total_minutes
     build TTVTTM pattern (enough to fill total_minutes)
     divide night into thirds (Act1, Act2, Act3)
     initialize used_combos for each genre
     i = 1

MAIN LOOP (FOR EACH TANDA i)
──────────────────────────────────────────────────────────────────────────────
┌───────────────────────────────────────────────────────────────────────────┐
│ Determine genre for tanda i (Tango, Vals, Milonga)                        │
│ Determine which Act we are in (1, 2, or 3)                                │
└───────────────────────────────────────────────────────────────────────────┘

Generate all possible (Period, Level) pairs
↓
Apply Period Restrictions (Act-based bans/caps)
↓
Apply Adjacency Rule (no same Period or same Level as previous tanda)
↓
If genre=TANGO: Apply Q1 TANGO Rule (sliding window)
↓
Apply Cycle-Through-Combos (can't repeat combos until cycle complete)
↓
──────────────────────────────────────────────────────────────────────────────
     IF CANDIDATES EXIST → pick one → go to ASSIGNMENT
     ELSE → begin FALLBACK MODE
──────────────────────────────────────────────────────────────────────────────

FALLBACK MODE (if enabled)
──────────────────────────────────────────────────────────────────────────────
   1) Break Rule 3 (Q1)        → recompute candidates
         if found   → assign
   2) Break Rule 4 (Cycle)     → recompute candidates
         if found   → assign
   3) Break Rule 2 (Adjacency) → recompute candidates
         if found   → assign
   If still none  → HARD FAIL
──────────────────────────────────────────────────────────────────────────────

ASSIGNMENT
──────────────────────────────────────────────────────────────────────────────
     Save (Period, Level) → tanda i
     Add (P,L) to used_combos for that genre
     i = i + 1
     loop back to MAIN LOOP

END
──────────────────────────────────────────────────────────────────────────────
Return full Slot Blueprint (sequence of tanda slots)