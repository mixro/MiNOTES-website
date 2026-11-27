# Network analysis: critical path and floats

*Chapter 3 · EEU 08106 Engineering Project Management*

Network analysis finds the **project duration** and the **critical activities**, the ones that fix that duration. The duration is **not** the sum of all activity times, because many activities run at the same time; it equals that sum only if every activity is in series. The analysis covers:

1. event numbering
2. earliest start times (EST)
3. latest start times (LST)
4. earliest and latest finish times (EFT, LFT)
5. the critical path
6. slack and float

We continue the **lift irrigation** example:

| Activity | Code | Preceding | Duration (days) |
|---|---|---|---|
| Site selection | A | none | 7 |
| Digging well | B | A | 3 |
| Laying field channels | C | B | 15 |
| Procurement of pump | D | A | 7 |
| Installation of pump | E | B, D | 3 |
| Test run | F | C, E | 2 |

<figure class="fig"><svg viewBox="0 0 600 290" role="img" aria-label="Lift irrigation network with event times. Z is a dummy (pump installation E needs the well B finished). Critical path 1–2–3–5–6 (A–B–C–F), 27 days; event 4 has 8 days of slack."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="64.0" y1="120.0" x2="144.0" y2="120.0" class="d-a w" marker-end="url(#ah)"/><text x="104.0" y="110.0" text-anchor="middle" class="d-t s a">A = 7</text><line x1="190.8" y1="108.0" x2="277.5" y2="58.0" class="d-a w" marker-end="url(#ah)"/><text x="226.6" y="75.0" text-anchor="middle" class="d-t s a">B = 3</text><line x1="321.7" y1="55.2" x2="436.5" y2="109.0" class="d-a w" marker-end="url(#ah)"/><text x="385.5" y="73.5" text-anchor="middle" class="d-t s a">C = 15</text><line x1="484.0" y1="120.0" x2="539.0" y2="120.0" class="d-a w" marker-end="url(#ah)"/><text x="511.5" y="110.0" text-anchor="middle" class="d-t s a">F = 2</text><line x1="190.9" y1="131.8" x2="307.3" y2="197.3" class="d-ax" marker-end="url(#ah)"/><text x="242.3" y="181.7" text-anchor="middle" class="d-t s a">D = 7</text><line x1="304.3" y1="68.6" x2="325.3" y2="184.4" class="d-ax dash" marker-end="url(#ah)"/><text x="326.6" y="129.4" text-anchor="middle" class="d-t s a">Z</text><line x1="349.7" y1="196.3" x2="438.6" y2="134.8" class="d-ax" marker-end="url(#ah)"/><text x="402.1" y="182.1" text-anchor="middle" class="d-t s a">E = 3</text><circle cx="40" cy="120" r="24" class="d-box a"/><line x1="40.0" y1="96.0" x2="40.0" y2="144.0" class="d-ax"/><line x1="40.0" y1="120.0" x2="64.0" y2="120.0" class="d-ax"/><text x="29.0" y="125.0" text-anchor="middle" class="d-t b">1</text><text x="51.0" y="114.0" text-anchor="middle" class="d-t s">0</text><text x="51.0" y="136.0" text-anchor="middle" class="d-t s r">0</text><circle cx="170" cy="120" r="24" class="d-box a"/><line x1="170.0" y1="96.0" x2="170.0" y2="144.0" class="d-ax"/><line x1="170.0" y1="120.0" x2="194.0" y2="120.0" class="d-ax"/><text x="159.0" y="125.0" text-anchor="middle" class="d-t b">2</text><text x="181.0" y="114.0" text-anchor="middle" class="d-t s">7</text><text x="181.0" y="136.0" text-anchor="middle" class="d-t s r">7</text><circle cx="300" cy="45" r="24" class="d-box a"/><line x1="300.0" y1="21.0" x2="300.0" y2="69.0" class="d-ax"/><line x1="300.0" y1="45.0" x2="324.0" y2="45.0" class="d-ax"/><text x="289.0" y="50.0" text-anchor="middle" class="d-t b">3</text><text x="311.0" y="39.0" text-anchor="middle" class="d-t s">10</text><text x="311.0" y="61.0" text-anchor="middle" class="d-t s r">10</text><circle cx="330" cy="210" r="24" class="d-box"/><line x1="330.0" y1="186.0" x2="330.0" y2="234.0" class="d-ax"/><line x1="330.0" y1="210.0" x2="354.0" y2="210.0" class="d-ax"/><text x="319.0" y="215.0" text-anchor="middle" class="d-t b">4</text><text x="341.0" y="204.0" text-anchor="middle" class="d-t s">14</text><text x="341.0" y="226.0" text-anchor="middle" class="d-t s r">22</text><circle cx="460" cy="120" r="24" class="d-box a"/><line x1="460.0" y1="96.0" x2="460.0" y2="144.0" class="d-ax"/><line x1="460.0" y1="120.0" x2="484.0" y2="120.0" class="d-ax"/><text x="449.0" y="125.0" text-anchor="middle" class="d-t b">5</text><text x="471.0" y="114.0" text-anchor="middle" class="d-t s">25</text><text x="471.0" y="136.0" text-anchor="middle" class="d-t s r">25</text><circle cx="565" cy="120" r="24" class="d-box a"/><line x1="565.0" y1="96.0" x2="565.0" y2="144.0" class="d-ax"/><line x1="565.0" y1="120.0" x2="589.0" y2="120.0" class="d-ax"/><text x="554.0" y="125.0" text-anchor="middle" class="d-t b">6</text><text x="576.0" y="114.0" text-anchor="middle" class="d-t s">27</text><text x="576.0" y="136.0" text-anchor="middle" class="d-t s r">27</text><circle cx="80" cy="262" r="16" class="d-box"/><line x1="80.0" y1="246.0" x2="80.0" y2="278.0" class="d-ax"/><line x1="80.0" y1="262.0" x2="96.0" y2="262.0" class="d-ax"/><text x="73.0" y="267.0" text-anchor="middle" class="d-t s b">n</text><text x="88.0" y="257.0" text-anchor="middle" class="d-t s">E</text><text x="88.0" y="276.0" text-anchor="middle" class="d-t s r">L</text><text x="106.0" y="260.0" text-anchor="start" class="d-t s m">event number n, earliest time E (forward pass),</text><text x="106.0" y="276.0" text-anchor="start" class="d-t s m">latest time L (backward pass). Blue = critical path A–B–C–F.</text></svg><figcaption>Lift irrigation network with event times. Z is a dummy (pump installation E needs the well B finished). Critical path 1–2–3–5–6 (A–B–C–F), 27 days; event 4 has 8 days of slack.</figcaption></figure>

## 1. Event numbering

Every event gets a unique number, so each activity can be named by its tail and head events (A = 1–2).

- **Random numbering:** numbers in any order. Inserting new jobs later is easy.
- **Sequential numbering:** numbers increase from start to end, and for every activity the **head event has a higher number than the tail event**.

**Fulkerson's rule** for sequential numbering:

1. Find the **initial event** (arrows leave it, none enter) and number it 1.
2. **Delete** all arrows leaving the numbered event(s). This creates at least one new initial event.
3. Number the new initial events 2, 3, … and repeat until the **final event** (no arrows leave it) is numbered.

Inserting a job later forces renumbering, so a common trick is to number in **tens** (10, 20, 30, …) to leave gaps.

## 2. Earliest times: the forward pass

| | Earliest start time (EST) | Latest start time (LST) |
|---|---|---|
| Pass | **Forward** | **Backward** |
| Starts from | Start event | End event |
| Direction | Left to right | Right to left |
| Initial value | EST = 0 at the start event | LST = EST at the end event |
| Operation | **Add** the activity time | **Subtract** the activity time |
| Where paths meet | **Merge event: take the maximum** | **Burst event: take the minimum** |

$$EST_j = \max_i\,(EST_i + t_{ij})$$

> - Event 1: EST = **0**
> - Event 2: $0 + 7 =$ **7** (also the EST of B and D)
> - Event 3: $7 + 3 =$ **10**
> - Event 4 (merge of D and dummy Z): $\max(7 + 7,\ 10 + 0) = \max(14, 10) =$ **14**
> - Event 5 (merge of C and E): $\max(10 + 15,\ 14 + 3) = \max(25, 17) =$ **25**
> - Event 6: $25 + 2 =$ **27** → **project duration = 27 days**

## 3. Latest times: the backward pass

$$LST_i = \min_j\,(LST_j - t_{ij})$$

> - Event 6: LST = EST = **27**
> - Event 5: $27 - 2 =$ **25**
> - Event 4: $25 - 3 =$ **22**
> - Event 3 (burst into C and Z): $\min(25 - 15,\ 22 - 0) = \min(10, 22) =$ **10**
> - Event 2 (burst into B and D): $\min(10 - 3,\ 22 - 7) = \min(7, 15) =$ **7**
> - Event 1: $7 - 7 =$ **0** (equals the EST at the start, as it must)

> **Corrections to the notes' table of event times.**
> - Event 4: the table writes "Max(14, 10) = **10**". The maximum is **14**, as the text says.
> - Event 3: the table writes "Min(25 − 15 = 10, **25 − 0 = 25**)". The dummy Z goes to event 4, so it is $22 - 0 = 22$; the answer (10) is unchanged.
> - Event 2: the table writes "Min(7, 15) = **15**". The minimum is **7**.
> - The event slack table swaps event 4's values: **EST = 14, LST = 22** (slack 8).

## 4. Activity times: EST, LST, EFT, LFT

For an activity $i \to j$ with duration $t$:

$$EFT = EST + t, \qquad LFT = LST_j \text{ (of the head event)}, \qquad LST_{act} = LFT - t$$

| Activity | Duration | EST | LST | EFT | LFT |
|---|---|---|---|---|---|
| A | 7 | 0 | 0 | 7 | 7 |
| B | 3 | 7 | 7 | 10 | 10 |
| C | 15 | 10 | 10 | 25 | 25 |
| D | 7 | 7 | **15** | 14 | 22 |
| E | 3 | 14 | **22** | 17 | 25 |
| F | 2 | 25 | 25 | 27 | 27 |

## 5. Slack and float

**Slack** usually refers to an **event**, **float** to an **activity**. Both measure spare time and are used to **smooth resource use**. For activity $i \to j$ with duration $t$, using event times $E$ (earliest) and $L$ (latest):

| Measure | Formula | Meaning |
|---|---|---|
| **Event slack** | $L - E$ | Spare time at an event |
| **Total float (TF)** | $L_j - E_i - t$ | Time the activity can be delayed **without delaying the project** |
| **Free float (FF)** | $E_j - E_i - t$ | Time it can be delayed **without delaying any following activity** |
| **Independent float (IF)** | $E_j - L_i - t$ | Time it can expand **without affecting preceding or following activities**; if negative, take it as 0 |

$$TF \ \ge\ FF\ \ge\ IF$$

> **Floats in the lift irrigation project**
>
> | Activity | $i \to j$ | $t$ | TF | FF | IF |
> |---|---|---|---|---|---|
> | A | 1 → 2 | 7 | 0 | 0 | 0 |
> | B | 2 → 3 | 3 | 0 | 0 | 0 |
> | C | 3 → 5 | 15 | 0 | 0 | 0 |
> | D | 2 → 4 | 7 | $22 - 7 - 7 = 8$ | $14 - 7 - 7 = 0$ | $14 - 7 - 7 = 0$ |
> | Z (dummy) | 3 → 4 | 0 | 12 | 4 | 4 |
> | E | 4 → 5 | 3 | $25 - 14 - 3 = 8$ | $25 - 14 - 3 = 8$ | $25 - 22 - 3 = 0$ |
> | F | 5 → 6 | 2 | 0 | 0 | 0 |
>
> D and E **share** 8 days of total float on the chain D–E: if D uses some of it, less is left for E. That is why D's free float is 0.

## 6. Critical events, activities and path

**Critical events** have **zero slack** (LST = EST).

| Event | EST | LST | Slack | |
|---|---|---|---|---|
| 1 | 0 | 0 | 0 | Critical |
| 2 | 7 | 7 | 0 | Critical |
| 3 | 10 | 10 | 0 | Critical |
| 4 | 14 | 22 | 8 | Not critical |
| 5 | 25 | 25 | 0 | Critical |
| 6 | 27 | 27 | 0 | Critical |

An activity is **critical** when all four conditions hold:

1. EST = LST at its **head** event;
2. EST = LST at its **tail** event;
3. the difference between the ESTs of its head and tail events **equals its duration**;
4. the difference between the LSTs of its head and tail events **equals its duration**.

D, Z and E all touch event 4, which has 8 days of slack, so none of them is critical. The critical activities are **A, B, C and F**.

The **critical path** is the chain of critical activities from start to end, the **longest** path in the network:

$$\textbf{A–B–C–F} \quad (\text{events } 1–2–3–5–6), \qquad 27 \text{ days}$$

Draw it with a **thicker line**. A network can have **several critical paths**, all of the same length.

### Why the critical path matters

- It is the **shortest possible project time**: any delay to a critical activity delays the whole project, so critical activities are the ones to **monitor closely**.
- Activities **with float** can be rescheduled within it to **smooth resource demand**.
- To **shorten the project**, only critical activities help: speed them up with extra resources (see crashing).
