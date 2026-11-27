# Project crashing and project control

*Chapter 3 · EEU 08106 Engineering Project Management*

## 1. Time–cost relationship of an activity

An activity's duration depends on the resources put into it. Apart from fixed-duration activities (crop growth, gestation periods), you can **shorten an activity by adding resources**, at a higher cost. Within limits, **time and cost are inversely related**.

<figure class="fig"><svg viewBox="0 0 600 275" role="img" aria-label="Time–cost relationship of one activity. Between the normal and crash points the real curve (dotted) is taken as a straight line, whose slope is the crash cost per week saved."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="70.0" y1="240.0" x2="560.0" y2="240.0" class="d-ax" marker-end="url(#ah)"/><line x1="70.0" y1="240.0" x2="70.0" y2="20.0" class="d-ax" marker-end="url(#ah)"/><text x="560.0" y="262.0" text-anchor="end" class="d-t s">Time</text><text x="78.0" y="24.0" text-anchor="start" class="d-t s">Cost</text><polyline class="d-mut2" points="170.0,70.0 177.0,89.0 184.0,96.8 191.0,102.9 198.0,107.9 205.0,112.4 212.0,116.5 219.0,120.2 226.0,123.7 233.0,126.9 240.0,130.0 247.0,132.9 254.0,135.7 261.0,138.4 268.0,141.0 275.0,143.5 282.0,145.9 289.0,148.2 296.0,150.5 303.0,152.7 310.0,154.9 317.0,156.9 324.0,159.0 331.0,161.0 338.0,163.0 345.0,164.9 352.0,166.7 359.0,168.6 366.0,170.4 373.0,172.2 380.0,173.9 387.0,175.6 394.0,177.3 401.0,179.0 408.0,180.6 415.0,182.2 422.0,183.8 429.0,185.4 436.0,187.0 443.0,188.5 450.0,190.0"/><line x1="170.0" y1="70.0" x2="450.0" y2="190.0" class="d-a"/><circle cx="170" cy="70" r="5" class="d-dot"/><circle cx="450" cy="190" r="5" class="d-dot"/><line x1="170" y1="70" x2="170" y2="240" class="d-mut"/><line x1="450" y1="190" x2="450" y2="240" class="d-mut"/><line x1="70" y1="70" x2="170" y2="70" class="d-mut"/><line x1="70" y1="190" x2="450" y2="190" class="d-mut"/><text x="64.0" y="74.0" text-anchor="end" class="d-t s">C<tspan dy="4" font-size="10">c</tspan></text><text x="64.0" y="194.0" text-anchor="end" class="d-t s">C<tspan dy="4" font-size="10">n</tspan></text><text x="170.0" y="260.0" text-anchor="middle" class="d-t s">T<tspan dy="4" font-size="10">c</tspan></text><text x="450.0" y="260.0" text-anchor="middle" class="d-t s">T<tspan dy="4" font-size="10">n</tspan></text><text x="180.0" y="62.0" text-anchor="start" class="d-t s b">Crash point</text><text x="460.0" y="182.0" text-anchor="start" class="d-t s b">Normal point</text><text x="330.0" y="108.0" text-anchor="start" class="d-t s a">assumed straight line:</text><text x="330.0" y="124.0" text-anchor="start" class="d-t s a">slope = cost per unit time saved</text></svg><figcaption>Time–cost relationship of one activity. Between the normal and crash points the real curve (dotted) is taken as a straight line, whose slope is the crash cost per week saved.</figcaption></figure>

| Term | Meaning |
|---|---|
| **Normal time $T_n$** | The duration at **minimum cost**. |
| **Normal cost $C_n$** | The cost at normal time. |
| **Crash time $T_c$** | The **minimum possible** duration. |
| **Crash cost $C_c$** | The cost at crash time. |

The points in between are hard to estimate, so the relationship is **assumed linear** between the normal and crash points. Its slope is the **cost slope**, the extra cost per unit of time saved:

$$\text{Cost slope} = \frac{C_c - C_n}{T_n - T_c}$$

## 2. Project crashing

**Crashing** reduces the project duration by **spending more money**, usually to meet a deadline. Only **critical activities** shorten the project, so only they are crashed. As you crash, another path may become critical and must be considered in the next round.

**Steps**

1. Find the **critical path** and the critical activities.
2. Compute the **cost slope** of each activity.
3. Crash the critical activity with the **least cost slope**, but only until **another path becomes critical** (crashing further saves no time).
4. **Recheck the critical path(s)** and repeat. With several critical paths, crash **one activity on each** at the same time (or an activity common to all), choosing the cheapest combination.
5. Stop when no further crashing is possible. Some activities may not reach their crash point; crashing them further only adds cost.

### Example: agro-technology demonstration blocks

<figure class="fig"><svg viewBox="0 0 600 290" role="img" aria-label="Agro-technology demonstration project at normal times (weeks). Critical path A–C–E–G = 88 weeks; A–B–F–G is only one week shorter."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="69.0" y1="130.0" x2="144.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="106.5" y="120.0" text-anchor="middle" class="d-t s a">A 16</text><line x1="189.7" y1="116.3" x2="278.6" y2="54.8" class="d-ax" marker-end="url(#ah)"/><text x="225.6" y="78.2" text-anchor="middle" class="d-t s a">B 26</text><line x1="319.7" y1="53.7" x2="408.6" y2="115.2" class="d-ax" marker-end="url(#ah)"/><text x="372.7" y="77.1" text-anchor="middle" class="d-t s a">F 27</text><line x1="194.0" y1="130.0" x2="404.0" y2="130.0" class="d-ax" marker-end="url(#ah)"/><text x="299.0" y="125.0" text-anchor="middle" class="d-t s a">D 30</text><line x1="189.7" y1="143.7" x2="278.6" y2="205.2" class="d-a w" marker-end="url(#ah)"/><text x="226.2" y="190.9" text-anchor="middle" class="d-t s a">C 26</text><line x1="319.7" y1="206.3" x2="408.6" y2="144.8" class="d-a w" marker-end="url(#ah)"/><text x="372.1" y="192.1" text-anchor="middle" class="d-t s a">E 28</text><line x1="454.0" y1="130.0" x2="534.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="494.0" y="120.0" text-anchor="middle" class="d-t s a">G 18</text><circle cx="45" cy="130" r="24" class="d-box a"/><text x="45.0" y="135.0" text-anchor="middle" class="d-t b">1</text><circle cx="170" cy="130" r="24" class="d-box a"/><text x="170.0" y="135.0" text-anchor="middle" class="d-t b">2</text><circle cx="300" cy="40" r="24" class="d-box"/><text x="300.0" y="45.0" text-anchor="middle" class="d-t b">3</text><circle cx="300" cy="220" r="24" class="d-box a"/><text x="300.0" y="225.0" text-anchor="middle" class="d-t b">4</text><circle cx="430" cy="130" r="24" class="d-box a"/><text x="430.0" y="135.0" text-anchor="middle" class="d-t b">5</text><circle cx="560" cy="130" r="24" class="d-box a"/><text x="560.0" y="135.0" text-anchor="middle" class="d-t b">6</text><text x="300.0" y="280.0" text-anchor="middle" class="d-t s m">Paths: A–C–E–G = 88 (critical), A–B–F–G = 87, A–D–G = 64 weeks</text></svg><figcaption>Agro-technology demonstration project at normal times (weeks). Critical path A–C–E–G = 88 weeks; A–B–F–G is only one week shorter.</figcaption></figure>

| Activity | Normal time (weeks) | Crash time (weeks) | Normal cost (Rs) | Crash cost (Rs) | Time saved | Extra cost | Cost slope (Rs/week) |
|---|---|---|---|---|---|---|---|
| A | 16 | 11 | 36 000 | 38 000 | 5 | 2 000 | 400 |
| B | 26 | 18 | 27 000 | 33 000 | 8 | 6 000 | 750 |
| C | 26 | 21 | 8 000 | 8 900 | 5 | 900 | **180** |
| D | 30 | 23 | 135 000 | 138 570 | 7 | 3 570 | 510 |
| E | 28 | 20 | 20 000 | 22 400 | 8 | 2 400 | 300 |
| F | 27 | 23 | 12 000 | 13 700 | 4 | 1 700 | 425 |
| G | 18 | 12 | 35 000 | 36 500 | 6 | 1 500 | **250** |
| **Total** | | | **273 000** | **291 070** | 43 | 18 070 | |

**Paths at normal times:** A–C–E–G = **88** weeks (critical), A–B–F–G = 87, A–D–G = 64. Normal cost Rs 273 000.

**How the notes crash it**

| Crashed | By (weeks) | Duration (weeks) | Project cost (Rs) | Extra cost (Rs) |
|---|---|---|---|---|
| Normal | | 88 | 273 000 | |
| C | 5 | 88 → 87 | 273 900 | 900 |
| G | 6 | 87 → 81 | 275 400 | 2 400 |
| A | 5 | 81 → 76 | 277 400 | 4 400 |
| F | 4 | 76 → 72 | 279 100 | 6 100 |
| E | 8 | 72 → 72 | 281 500 | 8 500 |
| B | 8 | 72 → 64 | 287 500 | 14 500 |

Crashing C by 5 weeks saves only **1 week**, because the next path (A–B–F–G, 87 weeks) was only 1 week shorter than the critical path. Likewise, after F is crashed there are **two critical paths** (A–B–F–G and A–C–E–G, both 72 weeks), so crashing E alone saves nothing until B is crashed too. The project can be cut from 88 to **64 weeks** (24 weeks shorter) for **Rs 14 500** extra.

> **Corrections.**
> - **Cost slope of G** is $1500/6 =$ **Rs 250/week**, not 2 500. The notes' own crashing table uses 250 (6 weeks for Rs 1 500).
> - After crashing G the cost is **Rs 275 400**, not 275 000 (the table has it right).
> - **Crash only as far as it helps.** Crashing C by all 5 weeks spends Rs 900 for 1 week; crashing it by **1 week** costs only **Rs 180** for the same saving.

**Least-cost crashing, step by step**

| Step | Critical path(s) | Crash | Cost per week (Rs) | Duration (weeks) | Extra cost (Rs) | Total cost (Rs) |
|---|---|---|---|---|---|---|
| 0 | A–C–E–G | none | | 88 | 0 | 273 000 |
| 1 | A–C–E–G | C by **1** | 180 | 87 | 180 | 273 180 |
| 2 | both | G by 6 (on both paths) | 250 | 81 | 1 500 | 274 680 |
| 3 | both | A by 5 (on both paths) | 400 | 76 | 2 000 | 276 680 |
| 4 | both | C by 4 **and** F by 4 | 180 + 425 = 605 | 72 | 2 420 | 279 100 |
| 5 | both | E by 8 **and** B by 8 | 300 + 750 = 1 050 | 64 | 8 400 | 287 500 |

Both routes end at **64 weeks for Rs 287 500**; D is never crashed, since A–D–G is only $11 + 30 + 12 = 53$ weeks. But the least-cost route is cheaper at every intermediate duration (for example, 87 weeks costs Rs 273 180 instead of 273 900), and those intermediate points are what you need if the deadline is, say, 80 weeks.

**How far to crash** is a **management decision** about the time–cost trade-off, based on how much money is available and what the deadline is worth.

## 3. Project control

No technique removes management's duty to **control the project by making decisions**; good techniques supply the information that makes those decisions better informed. A project lives in **constant change**, so the original plan can never be followed to the last detail. Typical reasons:

- the completion date changes
- activity durations change
- resource availability changes
- activity relationships change
- suppliers fail to deliver on time
- unexpected conditions (strikes, weather, etc.)

**Project control** checks progress at regular intervals against the plan, highlights discrepancies and takes corrective action. The loop of **instruction → execution → measurement → feedback → correction** is fundamental to control theory. Planning can be done at leisure; control happens **under continuous pressure**. For large projects, a computer is invaluable for rescheduling.

### Steps in project control

1. **Fix the review period.** There is no standard rule; it depends on the type of project, its duration and its uncertainty. A **fortnightly** review suits an average project; fast-changing projects need more frequent reviews. Projects using **three time estimates (PERT)** need more frequent reviews than those using **single estimates (CPM)** of the same length.
2. **Obtain progress information.** A progress report form records activities **started**, activities **completed**, and progress on **current** activities (best given as an expected completion date). For each activity it lists the duration, the scheduled start and finish, the actual start and finish, the expected dates for delayed activities, and remarks.
3. **Compare actual progress with the schedule.** Transfer the actual progress onto the network or schedule table to identify deviations.
4. **Take corrective action when required.**
   - Delay in a **non-critical** activity: usually just reschedule the following activities.
   - Delay in a **critical** activity: move resources from non-critical to critical jobs, or do series operations in parallel. If the time still cannot be recovered, the project will finish late.
5. **Report to higher management.**

Fresh schedules are then prepared for the next week or fortnight, and the cycle repeats.

### Updating the network

There is no standard frequency. **Update** at regular intervals, or whenever:

- a major change will affect the **completion date**,
- a change causes a **shift in the critical path**, or
- the effect of changes cannot be seen just by inspecting the network.

If the changes are large, **redraw the network**.
