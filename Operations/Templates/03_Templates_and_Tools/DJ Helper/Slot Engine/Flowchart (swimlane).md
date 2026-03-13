flowchart LR
%% ====== Swimlanes ======
subgraph L0[Engine Control]
    A0([Start]) --> A1[Input duration_hours\nCompute total_minutes]
    A1 --> A2[Build TTVTTM pattern\n(determine total slots)]
    A2 --> A3[Segment night into Acts]
    A3 --> A4[Initialize used_combos sets]
    A4 --> A5[Set i = 1]
    A5 --> A6{{i <= total_slots?}}
    A6 -->|No| A7([Return Slot Blueprint\nEnd])
end

subgraph L1[Slot Selection]
    A6 -->|Yes| B1[Identify genre for tanda i]
    B1 --> B2[Compute Act for tanda i]
    B2 --> B3[Generate all (Period,Level) pairs]
    B3 --> B4[Apply Act & period caps\n(P4 ban in Act1, P1 ban in Act3…)]
    B4 --> B5[Apply adjacency rule]
    B5 --> B6[Apply Q1 rule\n(Tango-only, sliding window)]
    B6 --> B7[Apply cycle-through-combos rule]
    B7 --> B8{{Any valid combos?}}
end

subgraph L2[Fallback Logic]
    F0[[Fallback Enabled?]] 
    F1([Break Q1 Rule]) 
    F2([Break Cycle Rule])
    F3([Break Adjacency Rule])
end

subgraph L3[State Tracking]
    C0([Choose (P,Q)]) --> C1[Record combo in used_combos]
    C1 --> C2[i = i + 1]
    C2 --> A5
end

%% ====== Connections between swimlanes ======
B8 -->|Yes| C0

B8 -->|No| F0
F0 -->|No| ZF([HARD FAIL])
F0 -->|Yes| F1

F1 --> B4
B8 -->|Still None| F2
F2 --> B4
B8 -->|Still None| F3
F3 --> B4

B8 -->|None even after all| ZFF([HARD FAIL\nNo candidates])