flowchart TD

%% ========== ENTRY ==========
A0([Start Engine]) --> A1[Input duration_hours<br/>Convert to total_minutes]

A1 --> A2[Generate repeating TTVTTM pattern<br/>(until total_minutes consumed)]

A2 --> A3[Segment night into Acts<br/>Act1, Act2, Act3]

A3 --> A4[Initialize per-genre used_combos sets]

A4 --> A5[Set i = 1]

%% ========== PER-SLOT LOOP ==========
A5 --> B0{{Is tanda i within total slots?}}
B0 -->|No| Z0([Output Slot Blueprint<br/>End Engine])
B0 -->|Yes| B1[Determine genre for tanda i]

B1 --> B2[Compute Act (1,2,3) for tanda i]

%% ========== GENERATE CANDIDATES ==========
B2 --> C0[Generate all (Period,Level) combos]

%% Period Restrictions
C0 --> C1[Filter by Act-period restrictions:<br/>Act1: forbid P4, cap P3<br/>Act3: forbid P1, cap P2]

C1 --> C2[Filter by Adjacency (Rule 2):<br/>P[i] != P[i-1], Q[i] != Q[i-1]<br/>(unless i=1)]

%% Q1 Window
C2 --> C3[If genre=Tango:<br/>Filter by Q1 rule (Rule 3)<br/>Ignore tanda 1]

%% Cycle-Through-Combos
C3 --> C4[Filter by combo-use (Rule 4)<br/>Block reused combo sets]

C4 --> C5{{Any valid candidates?}}
C5 -->|Yes| D0[Select candidate (random valid)] 
C5 -->|No| F0[Begin Fallback Sequence]

%% ========== NORMAL PLACEMENT ==========
D0 --> D1[Assign (Period,Level) to tanda i]
D1 --> D2[Update used_combos[genre]]
D2 --> D3[i = i + 1]
D3 --> A5

%% ========== FALLBACK MODE (Optional) ==========
F0 --> F1{{Fallback enabled?}}
F1 -->|No| ZF([HARD FAIL: no valid candidate])
F1 -->|Yes| F2[Fallback Step 1:<br/>Break Q1 Rule (Rule 3)]

F2 --> F3[Recompute candidates]
F3 -->|Found| FD0[Select candidate → Continue]
F3 -->|None| F4[Fallback Step 2:<br/>Break Cycle Rule (Rule 4)]

F4 --> F5[Recompute candidates]
F5 -->|Found| FD0
F5 -->|None| F6[Fallback Step 3:<br/>Break Adjacency Rule (Rule 2)]

F6 --> F7[Recompute candidates]
F7 -->|Found| FD0
F7 -->|None| ZFF([HARD FAIL:<br/>No candidates even after fallback])

FD0 --> D1