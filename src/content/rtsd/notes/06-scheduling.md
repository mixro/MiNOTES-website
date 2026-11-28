# Scheduling algorithms

*Outcome 3 · CSEU 08104 Real Time System Design*

Most tasks in a real-time system are **periodic**, coming from sensors, servo loops and monitoring. Each task $T_i$ has a release time $r_i$, a worst-case execution time $C_i$, a period $T_i$ and a deadline $D_i$. The scheduler decides **which ready task runs** and must guarantee that every task runs at its rate and **meets its deadline**.

## Classes of scheduling algorithm

- **Offline (static, table-driven):** a schedule worked out in advance and repeated, e.g. always Ta, then Tb, then Tc. The cyclic scheduler is an example.
- **Online:** the task to run is chosen at run time by **priority**. There are two kinds:
  - **Fixed priority:** every job of a task has the same priority. If job $J_{1,k}$ of T1 outranks $J_{2,k}$ of T2, then $J_{1,k+1}$ outranks $J_{2,k+1}$. *Example:* **rate monotonic**.
  - **Dynamic priority:** different jobs of the same task may have different priorities. *Example:* **earliest deadline first**.

**Optimality.** A **static** algorithm is optimal if it always finds a feasible schedule whenever any other static algorithm can. A **dynamic** algorithm is optimal if it always finds one whenever a static algorithm with complete prior knowledge of all tasks could.

## Processor utilisation

The **utilisation** $U$ is the fraction of processor time the task set needs:

$$U = \sum_{i=1}^{n} \frac{C_i}{T_i}$$

$U = 1$ means 100% load. **If $U > 1$, no algorithm can schedule the set on one processor.**

## Pre-emptive and non-pre-emptive scheduling

- **Pre-emptive:** a running task can be stopped and resumed later, so that a higher-priority task can run.
  - It gives **higher schedulability** and is more flexible.
  - It has **more overhead**, because of more context switches.
- **Non-pre-emptive:** once a task starts, it runs to completion or until it blocks.
  - It gives **lower schedulability** and is rigid.
  - It has **less overhead**, because there are fewer context switches.

| Aspect | Pre-emptive | Non-pre-emptive |
|---|---|---|
| CPU held | For a limited time; can be taken back | Until the task finishes or waits |
| Interruptible | Yes | No |
| Overhead | Higher (context switches) | Lower |
| Flexibility, schedulability | Higher | Lower |
| Examples | RM, EDF, round robin, SRTF | FCFS, non-pre-emptive SJF |

> **Correction to the notes.** The source lists FCFS and shortest job first as examples of *pre-emptive* scheduling. Both are **non-pre-emptive**. Their pre-emptive counterparts are round robin (for FCFS) and shortest remaining time first (for SJF). It also calls the multilevel feedback queue non-pre-emptive; it is normally pre-emptive.

## Rate monotonic (RM) scheduling

**Rule:** the **shorter the period, the higher the priority**. Priority is fixed (the period does not change) and inversely proportional to the period. RM is **pre-emptive**: a released task with a shorter period pre-empts the running one.

**Schedulability test (Liu and Layland):** the set is guaranteed schedulable under RM if

$$U = \sum_{i=1}^{n} \frac{C_i}{T_i} \le n\left(2^{1/n} - 1\right)$$

| $n$ | 1 | 2 | 3 | 4 | $\infty$ |
|---|---|---|---|---|---|
| Bound | 1.000 | 0.828 | 0.780 | 0.757 | $\ln 2 \approx 0.693$ |

The test is **sufficient, not necessary**. A set that passes is safe. A set with bound $< U \le 1$ *may* still be schedulable, and you then check by drawing the schedule or by response-time analysis. The "69%" in the notes is the limit for very many tasks; for three tasks the bound is 78%.

### Example (Table 1)

| Task | $r_i$ | $C_i$ | $D_i$ | $T_i$ |
|---|---|---|---|---|
| T1 | 0 | 0.5 | 3 | 3 |
| T2 | 0 | 1 | 4 | 4 |
| T3 | 0 | 2 | 6 | 6 |

$$U = \frac{0.5}{3} + \frac{1}{4} + \frac{2}{6} = 0.167 + 0.250 + 0.333 = 0.750 \le 0.780$$

So the set passes the RM test. The priorities are T1 > T2 > T3, and the hyperperiod is lcm(3, 4, 6) = 12.

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="Rate monotonic schedule of Table 1 over one hyperperiod (12). Arrows mark releases. T1 (period 3) always pre-empts; T3 is pre-empted at t = 3 and t = 9. The CPU is idle at 5–6 and 10–12 (U = 0.75)."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="52.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="74.1" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="118.2" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="184.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="206.6" y="106" width="22.1" height="30" rx="4" class="d-box c"/><rect x="228.7" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="317.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="339.1" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="405.3" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="449.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="471.6" y="106" width="22.1" height="30" rx="4" class="d-box c"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="50.0" x2="184.5" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="50.0" x2="317.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="50.0" x2="449.5" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="50.0" x2="582.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="94.0" x2="228.7" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="94.0" x2="405.3" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="138.0" x2="317.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="138.0" x2="582.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="150.0" x2="96.2" y2="155.0" class="d-ax"/><text x="96.2" y="170.0" text-anchor="middle" class="d-t s m">1</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">2</text><line x1="184.5" y1="150.0" x2="184.5" y2="155.0" class="d-ax"/><text x="184.5" y="170.0" text-anchor="middle" class="d-t s m">3</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">4</text><line x1="272.8" y1="150.0" x2="272.8" y2="155.0" class="d-ax"/><text x="272.8" y="170.0" text-anchor="middle" class="d-t s m">5</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">6</text><line x1="361.2" y1="150.0" x2="361.2" y2="155.0" class="d-ax"/><text x="361.2" y="170.0" text-anchor="middle" class="d-t s m">7</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">8</text><line x1="449.5" y1="150.0" x2="449.5" y2="155.0" class="d-ax"/><text x="449.5" y="170.0" text-anchor="middle" class="d-t s m">9</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">10</text><line x1="537.8" y1="150.0" x2="537.8" y2="155.0" class="d-ax"/><text x="537.8" y="170.0" text-anchor="middle" class="d-t s m">11</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">12</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>Rate monotonic schedule of Table 1 over one hyperperiod (12). Arrows mark releases. T1 (period 3) always pre-empts; T3 is pre-empted at t = 3 and t = 9. The CPU is idle at 5–6 and 10–12 (U = 0.75).</figcaption></figure>

1. At $t = 0$ all three are released. T1 runs (0–0.5), then T2 (0.5–1.5), then T3 starts (1.5–3).
2. At $t = 3$ T1 is released and **pre-empts T3** (3–3.5). T3 finishes its last 0.5 at 3.5–4.
3. At $t = 4$ T2 runs (4–5). The CPU is idle from 5 to 6.
4. At $t = 6$ T1 and T3 are released together: T1 runs (6–6.5), then T3 (6.5–8).
5. At $t = 8$ T2 pre-empts T3 (8–9); at $t = 9$ T1 runs (9–9.5); T3 finishes at 10. The CPU is idle until 12, and the pattern repeats.

### Response-time analysis *(beyond the notes)*

An exact RM test: iterate

$$R_i = C_i + \sum_{j \in hp(i)} \left\lceil \frac{R_i}{T_j} \right\rceil C_j$$

from $R_i = C_i$ until the value stops changing. Task $i$ is schedulable if $R_i \le D_i$. For T3 above: $R = 2 \to 2 + 1(0.5) + 1(1) = 3.5 \to 2 + 2(0.5) + 1(1) = 4 \to 4$. Since $4 \le 6$, T3 is schedulable.

### Features and limitations of RM

- It is simple and **predictable**; fixed priorities are decided before execution starts.
- **Priority inversion:** a low-priority task holding a shared resource can block a high-priority one. The cure is priority inheritance or the priority ceiling protocol.
- **Utilisation bound:** guaranteed only up to about 69–83%, so some CPU capacity is wasted.
- It is less suitable when priorities must change dynamically.

### When RM fails but EDF succeeds

P1 has $C = 25$, $T = 50$ and P2 has $C = 35$, $T = 80$. RM gives P1 the higher priority, because it has the shorter period. $U = 0.5 + 0.4375 = 0.9375$, which is above the bound for two tasks, 0.828.

<figure class="fig"><svg viewBox="0 0 600 150" role="img" aria-label="P1 (25, 50) and P2 (35, 80) under rate monotonic. P2 has only 25 of its 35 units done by t = 80 and misses its deadline (✕), although U = 0.94 < 1."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">P1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">P2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><rect x="52.0" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="134.8" y="62" width="82.8" height="30" rx="4" class="d-box b"/><rect x="217.6" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="300.4" y="62" width="82.8" height="30" rx="4" class="d-box b"/><rect x="383.2" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="466.1" y="62" width="66.2" height="30" rx="4" class="d-box b"/><rect x="548.9" y="18" width="33.1" height="30" rx="4" class="d-box a"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="217.6" y1="50.0" x2="217.6" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="383.2" y1="50.0" x2="383.2" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="548.9" y1="50.0" x2="548.9" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><text x="317.0" y="81.0" text-anchor="middle" class="d-t b r">✕</text><line x1="52.0" y1="106.0" x2="590.0" y2="106.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="106.0" x2="52.0" y2="111.0" class="d-ax"/><text x="52.0" y="126.0" text-anchor="middle" class="d-t s m">0</text><line x1="118.2" y1="106.0" x2="118.2" y2="111.0" class="d-ax"/><text x="118.2" y="126.0" text-anchor="middle" class="d-t s m">20</text><line x1="184.5" y1="106.0" x2="184.5" y2="111.0" class="d-ax"/><text x="184.5" y="126.0" text-anchor="middle" class="d-t s m">40</text><line x1="250.8" y1="106.0" x2="250.8" y2="111.0" class="d-ax"/><text x="250.8" y="126.0" text-anchor="middle" class="d-t s m">60</text><line x1="317.0" y1="106.0" x2="317.0" y2="111.0" class="d-ax"/><text x="317.0" y="126.0" text-anchor="middle" class="d-t s m">80</text><line x1="383.2" y1="106.0" x2="383.2" y2="111.0" class="d-ax"/><text x="383.2" y="126.0" text-anchor="middle" class="d-t s m">100</text><line x1="449.5" y1="106.0" x2="449.5" y2="111.0" class="d-ax"/><text x="449.5" y="126.0" text-anchor="middle" class="d-t s m">120</text><line x1="515.8" y1="106.0" x2="515.8" y2="111.0" class="d-ax"/><text x="515.8" y="126.0" text-anchor="middle" class="d-t s m">140</text><line x1="582.0" y1="106.0" x2="582.0" y2="111.0" class="d-ax"/><text x="582.0" y="126.0" text-anchor="middle" class="d-t s m">160</text><text x="590.0" y="144.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>P1 (25, 50) and P2 (35, 80) under rate monotonic. P2 has only 25 of its 35 units done by t = 80 and misses its deadline (✕), although U = 0.94 < 1.</figcaption></figure>

By $t = 80$, P2 has received only 25 of its 35 units, so it **misses its deadline**. Under EDF, P2 runs at 25–60 (its deadline 80 is earlier than P1's 100) and every deadline is met, because $U < 1$.

## Earliest deadline first (EDF)

**Rule:** at every instant, run the ready job with the **earliest absolute deadline**. Priority is **dynamic**: a job that is most urgent now may be less urgent a moment later. Every release and completion is a scheduling event. EDF is normally **pre-emptive**, and ties may be broken arbitrarily. Keeping the running task avoids a needless context switch.

- EDF is **optimal on one processor**. With $D_i = T_i$, a set is schedulable **if and only if** $U \le 1$.
- It makes **no assumption of periodicity**, so it can also schedule **aperiodic** tasks.

### Example (Table 2)

| Task | $r_i$ | $C_i$ | $D_i$ | $T_i$ |
|---|---|---|---|---|
| T1 | 0 | 1 | 4 | 4 |
| T2 | 0 | 2 | 6 | 6 |
| T3 | 0 | 3 | 8 | 8 |

$$U = \frac{1}{4} + \frac{2}{6} + \frac{3}{8} = 0.250 + 0.333 + 0.375 = 0.958 \le 1$$

The set is schedulable by EDF. The notes round $U$ down to 0.95.

Under RM it fails, because $U > 0.780$ and T3 would miss at $t = 8$. This shows EDF's advantage.

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="EDF schedule of Table 2 over the hyperperiod (24). At each instant the ready job with the earliest absolute deadline runs; ties keep the running job. Every deadline is met (U ≈ 0.958); the only idle slot is 23–24."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="52.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="74.1" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="118.2" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="184.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="206.6" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="250.8" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="272.8" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="339.1" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="361.2" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="405.3" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="427.4" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="493.7" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="515.8" y="62" width="44.2" height="30" rx="4" class="d-box b"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="140.3" y1="50.0" x2="140.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="50.0" x2="228.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="50.0" x2="317.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="50.0" x2="405.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="493.7" y1="50.0" x2="493.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="50.0" x2="582.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="94.0" x2="184.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="94.0" x2="449.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="138.0" x2="228.7" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="138.0" x2="405.3" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="138.0" x2="582.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="150.0" x2="96.2" y2="155.0" class="d-ax"/><text x="96.2" y="170.0" text-anchor="middle" class="d-t s m">2</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">4</text><line x1="184.5" y1="150.0" x2="184.5" y2="155.0" class="d-ax"/><text x="184.5" y="170.0" text-anchor="middle" class="d-t s m">6</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">8</text><line x1="272.8" y1="150.0" x2="272.8" y2="155.0" class="d-ax"/><text x="272.8" y="170.0" text-anchor="middle" class="d-t s m">10</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">12</text><line x1="361.2" y1="150.0" x2="361.2" y2="155.0" class="d-ax"/><text x="361.2" y="170.0" text-anchor="middle" class="d-t s m">14</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">16</text><line x1="449.5" y1="150.0" x2="449.5" y2="155.0" class="d-ax"/><text x="449.5" y="170.0" text-anchor="middle" class="d-t s m">18</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">20</text><line x1="537.8" y1="150.0" x2="537.8" y2="155.0" class="d-ax"/><text x="537.8" y="170.0" text-anchor="middle" class="d-t s m">22</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">24</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>EDF schedule of Table 2 over the hyperperiod (24). At each instant the ready job with the earliest absolute deadline runs; ties keep the running job. Every deadline is met (U ≈ 0.958); the only idle slot is 23–24.</figcaption></figure>

- At $t = 0$, T1 (deadline 4) runs first, then T2 (deadline 6), then T3 (deadline 8) from 3.
- At $t = 4$, the new T1 job also has deadline 8, a tie with T3, so T3 continues to 6.
- From then on, at every release the earliest deadline wins. All deadlines are met in the hyperperiod 24, with one idle unit at 23–24.

### Transient overload and the domino effect

A **transient overload** is a short period in which the demand for processor time is greater than the capacity. It can be caused by environmental changes, simultaneous arrival of aperiodic jobs, or exceptions.

Under EDF, once one task misses its deadline, the others start missing theirs one after another: this is the **domino effect**. It happens because EDF keeps giving the CPU to jobs that are already late.

| Task | $C_i$ | $D_i = T_i$ |
|---|---|---|
| T1 | 2 | 5 |
| T2 | 2 | 6 |
| T3 | 2 | 7 |
| T4 | 2 | 8 |

$U = 0.40 + 0.33 + 0.29 + 0.25 = 1.27 > 1$.

<figure class="fig"><svg viewBox="0 0 600 238" role="img" aria-label="Domino effect under EDF (Table 3, U ≈ 1.27). Once the processor is overloaded, EDF keeps running late jobs, so T1 misses at 15, then T4 at 16, T2 at 18, T1 at 20 and T3 at 21 (✕)."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><text x="42.0" y="168.0" text-anchor="end" class="d-t b">T4</text><line x1="52.0" y1="180.0" x2="582.0" y2="180.0" class="d-mut"/><rect x="52.0" y="18" width="44.2" height="30" rx="4" class="d-box a"/><rect x="96.2" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="140.3" y="106" width="44.2" height="30" rx="4" class="d-box c"/><rect x="184.5" y="150" width="44.2" height="30" rx="4" class="d-box"/><rect x="228.7" y="18" width="44.2" height="30" rx="4" class="d-box a"/><rect x="272.8" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="317.0" y="106" width="44.2" height="30" rx="4" class="d-box c"/><rect x="361.2" y="18" width="44.2" height="30" rx="4" class="d-box a"/><rect x="405.3" y="150" width="44.2" height="30" rx="4" class="d-box"/><rect x="449.5" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="493.7" y="18" width="44.2" height="30" rx="4" class="d-box a"/><rect x="537.8" y="106" width="44.2" height="30" rx="4" class="d-box c"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="162.4" y1="50.0" x2="162.4" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="272.8" y1="50.0" x2="272.8" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="383.2" y1="50.0" x2="383.2" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="493.7" y1="50.0" x2="493.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="94.0" x2="184.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="94.0" x2="449.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="206.6" y1="138.0" x2="206.6" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="361.2" y1="138.0" x2="361.2" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="515.8" y1="138.0" x2="515.8" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="182.0" x2="52.0" y2="144.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="182.0" x2="228.7" y2="144.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="182.0" x2="405.3" y2="144.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="182.0" x2="582.0" y2="144.0" class="d-ax" marker-end="url(#ah)"/><text x="383.2" y="37.0" text-anchor="middle" class="d-t b r">✕</text><text x="405.3" y="169.0" text-anchor="middle" class="d-t b r">✕</text><text x="449.5" y="81.0" text-anchor="middle" class="d-t b r">✕</text><text x="493.7" y="37.0" text-anchor="middle" class="d-t b r">✕</text><text x="515.8" y="125.0" text-anchor="middle" class="d-t b r">✕</text><line x1="52.0" y1="194.0" x2="590.0" y2="194.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="194.0" x2="52.0" y2="199.0" class="d-ax"/><text x="52.0" y="214.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="194.0" x2="96.2" y2="199.0" class="d-ax"/><text x="96.2" y="214.0" text-anchor="middle" class="d-t s m">2</text><line x1="140.3" y1="194.0" x2="140.3" y2="199.0" class="d-ax"/><text x="140.3" y="214.0" text-anchor="middle" class="d-t s m">4</text><line x1="184.5" y1="194.0" x2="184.5" y2="199.0" class="d-ax"/><text x="184.5" y="214.0" text-anchor="middle" class="d-t s m">6</text><line x1="228.7" y1="194.0" x2="228.7" y2="199.0" class="d-ax"/><text x="228.7" y="214.0" text-anchor="middle" class="d-t s m">8</text><line x1="272.8" y1="194.0" x2="272.8" y2="199.0" class="d-ax"/><text x="272.8" y="214.0" text-anchor="middle" class="d-t s m">10</text><line x1="317.0" y1="194.0" x2="317.0" y2="199.0" class="d-ax"/><text x="317.0" y="214.0" text-anchor="middle" class="d-t s m">12</text><line x1="361.2" y1="194.0" x2="361.2" y2="199.0" class="d-ax"/><text x="361.2" y="214.0" text-anchor="middle" class="d-t s m">14</text><line x1="405.3" y1="194.0" x2="405.3" y2="199.0" class="d-ax"/><text x="405.3" y="214.0" text-anchor="middle" class="d-t s m">16</text><line x1="449.5" y1="194.0" x2="449.5" y2="199.0" class="d-ax"/><text x="449.5" y="214.0" text-anchor="middle" class="d-t s m">18</text><line x1="493.7" y1="194.0" x2="493.7" y2="199.0" class="d-ax"/><text x="493.7" y="214.0" text-anchor="middle" class="d-t s m">20</text><line x1="537.8" y1="194.0" x2="537.8" y2="199.0" class="d-ax"/><text x="537.8" y="214.0" text-anchor="middle" class="d-t s m">22</text><line x1="582.0" y1="194.0" x2="582.0" y2="199.0" class="d-ax"/><text x="582.0" y="214.0" text-anchor="middle" class="d-t s m">24</text><text x="590.0" y="232.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>Domino effect under EDF (Table 3, U ≈ 1.27). Once the processor is overloaded, EDF keeps running late jobs, so T1 misses at 15, then T4 at 16, T2 at 18, T1 at 20 and T3 at 21 (✕).</figcaption></figure>

Critical tasks can therefore miss their deadlines unpredictably. The remedies are **least laxity first (LLF)**, another optimal dynamic algorithm, admission control, and **demand bound analysis** to check schedulability.

### EDF compared with RM

| EDF advantages | EDF disadvantages |
|---|---|
| No priorities to assign offline | **Less predictable**: response times vary (they are constant under fixed priority) |
| Fewer pre-emptions and context switches than RM | Less control over which task runs |
| Uses the processor up to **100%** | Higher run-time overhead (deadlines kept sorted) |
| | Poor behaviour in **transient overload** (domino effect) |

**Shortcomings of EDF in practice:** (1) transient overload; (2) resource-sharing problems (it needs a protocol for shared resources); (3) efficient implementation is harder, because the ready queue must be kept sorted by deadline.

EDF has **no explicit priority value**: tasks are scheduled only by the nearness of their deadlines. You can still regard it as a **dynamic priority** algorithm, because the longer a job waits, the closer its deadline and the higher its effective priority.

## Cyclic (clock-driven) scheduling

A **cyclic scheduler** is a **static, clock-driven** scheduler. A **schedule table** is built offline, and a single periodic timer interrupt starts each **frame**. Tasks are not pre-empted within a frame.

- **Major cycle (hyperperiod)** $M = \operatorname{lcm}(T_1, \dots, T_n)$: the schedule repeats after this time.
- **Minor cycle (frame)** of size $f$: the major cycle is split into $F = M/f$ equal frames.
- **Schedule table:** which tasks run in which frame.
- **Frame timer:** one periodic interrupt at each frame boundary.

### Frame-size constraints

1. Every task fits in a frame: $\;f \ge \max_i(C_i)$.
2. The frame divides the major cycle: $\;M \bmod f = 0$.
3. There is at least one full frame between each task's release and its deadline: $\;2f - \gcd(T_i, f) \le D_i$ for every task.

### How it runs

1. **Offline construction:** the designer chooses $f$ and builds the table.
2. **At run time** the timer interrupts every $f$.
3. **Dispatch:** the scheduler looks up the frame and runs its tasks in order.
4. **Completion:** tasks must finish before the frame boundary; otherwise a **frame overrun** occurs.
5. **Idle:** if the frame's tasks finish early, the CPU idles until the next interrupt.

**Advantages:** simple, low overhead (one timer), fully **deterministic**, easy to certify for safety. **Disadvantages:** inflexible (adding a task means rebuilding the table), handles aperiodic tasks poorly, and is sensitive to changes in execution time.

**Uses:** avionics and flight control, temperature controllers and other feedback loops, DSP systems.

### Example: choosing a frame size

T1 = (C = 1, T = 4), T2 = (1, 5), T3 = (1, 20), T4 = (2, 20), with $D_i = T_i$.

- **Constraint 1:** $f \ge 2$.
- **Constraint 2:** $M = \operatorname{lcm}(4, 5, 20) = 20$, so $f \in \{2, 4, 5, 10, 20\}$.
- **Constraint 3**, for each candidate:

| $f$ | T1 ($T = 4$) | T2 ($T = 5$) | T3, T4 ($T = 20$) | OK? |
|---|---|---|---|---|
| 2 | $4 - 2 = 2 \le 4$ ✓ | $4 - 1 = 3 \le 5$ ✓ | $4 - 2 = 2 \le 20$ ✓ | **Yes** |
| 4 | $8 - 4 = 4 \le 4$ ✓ | $8 - 1 = 7 > 5$ ✗ | | No |
| 5 | $10 - 1 = 9 > 4$ ✗ | | | No |
| 10 | $20 - 2 = 18 > 4$ ✗ | | | No |
| 20 | $40 - 4 = 36 > 4$ ✗ | | | No |

**Only $f = 2$ works.** The source sheet left T2's execution time blank; it is 1 in the original example, and the answer depends only on $\max C_i = 2$.

## Round robin (RR)

**Round robin** is the **pre-emptive version of FCFS**. Every process gets a fixed **time quantum** in turn. A process that has not finished goes to the back of the ready queue.

Its characteristics: equal time allocation, cyclic execution, **no starvation**, and frequent context switching.

### Example (quantum 2 ms)

| Process | Burst (ms) | Arrival (ms) |
|---|---|---|
| P1 | 5 | 0 |
| P2 | 4 | 1 |
| P3 | 2 | 2 |
| P4 | 1 | 4 |

<figure class="fig"><svg viewBox="0 0 600 238" role="img" aria-label="Round robin, quantum 2 ms. P1 (burst 5) needs three turns and finishes at 12; P2 at 11; P3 at 6; P4 at 9."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">P1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">P2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">P3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><text x="42.0" y="168.0" text-anchor="end" class="d-t b">P4</text><line x1="52.0" y1="180.0" x2="582.0" y2="180.0" class="d-mut"/><rect x="52.0" y="18" width="88.3" height="30" rx="4" class="d-box a"/><rect x="140.3" y="62" width="88.3" height="30" rx="4" class="d-box b"/><rect x="228.7" y="106" width="88.3" height="30" rx="4" class="d-box c"/><rect x="317.0" y="18" width="88.3" height="30" rx="4" class="d-box a"/><rect x="405.3" y="150" width="44.2" height="30" rx="4" class="d-box"/><rect x="449.5" y="62" width="88.3" height="30" rx="4" class="d-box b"/><rect x="537.8" y="18" width="44.2" height="30" rx="4" class="d-box a"/><line x1="52.0" y1="194.0" x2="590.0" y2="194.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="194.0" x2="52.0" y2="199.0" class="d-ax"/><text x="52.0" y="214.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="194.0" x2="96.2" y2="199.0" class="d-ax"/><text x="96.2" y="214.0" text-anchor="middle" class="d-t s m">1</text><line x1="140.3" y1="194.0" x2="140.3" y2="199.0" class="d-ax"/><text x="140.3" y="214.0" text-anchor="middle" class="d-t s m">2</text><line x1="184.5" y1="194.0" x2="184.5" y2="199.0" class="d-ax"/><text x="184.5" y="214.0" text-anchor="middle" class="d-t s m">3</text><line x1="228.7" y1="194.0" x2="228.7" y2="199.0" class="d-ax"/><text x="228.7" y="214.0" text-anchor="middle" class="d-t s m">4</text><line x1="272.8" y1="194.0" x2="272.8" y2="199.0" class="d-ax"/><text x="272.8" y="214.0" text-anchor="middle" class="d-t s m">5</text><line x1="317.0" y1="194.0" x2="317.0" y2="199.0" class="d-ax"/><text x="317.0" y="214.0" text-anchor="middle" class="d-t s m">6</text><line x1="361.2" y1="194.0" x2="361.2" y2="199.0" class="d-ax"/><text x="361.2" y="214.0" text-anchor="middle" class="d-t s m">7</text><line x1="405.3" y1="194.0" x2="405.3" y2="199.0" class="d-ax"/><text x="405.3" y="214.0" text-anchor="middle" class="d-t s m">8</text><line x1="449.5" y1="194.0" x2="449.5" y2="199.0" class="d-ax"/><text x="449.5" y="214.0" text-anchor="middle" class="d-t s m">9</text><line x1="493.7" y1="194.0" x2="493.7" y2="199.0" class="d-ax"/><text x="493.7" y="214.0" text-anchor="middle" class="d-t s m">10</text><line x1="537.8" y1="194.0" x2="537.8" y2="199.0" class="d-ax"/><text x="537.8" y="214.0" text-anchor="middle" class="d-t s m">11</text><line x1="582.0" y1="194.0" x2="582.0" y2="199.0" class="d-ax"/><text x="582.0" y="214.0" text-anchor="middle" class="d-t s m">12</text><text x="590.0" y="232.0" text-anchor="end" class="d-t s m">t (ms)</text></svg><figcaption>Round robin, quantum 2 ms. P1 (burst 5) needs three turns and finishes at 12; P2 at 11; P3 at 6; P4 at 9.</figcaption></figure>

**Order:** P1 (0–2), P2 (2–4), P3 (4–6, done), P1 (6–8), P4 (8–9, done), P2 (9–11, done), P1 (11–12, done). Turnaround = completion − arrival; waiting = turnaround − burst:

| Process | Completion | Turnaround | Waiting |
|---|---|---|---|
| P1 | 12 | 12 | 7 |
| P2 | 11 | 10 | 6 |
| P3 | 6 | 4 | 2 |
| P4 | 9 | 5 | 4 |
| **Average** | | **7.75** | **4.75** |

The notes give 7.7 and 4.7; the exact values are 31/4 = 7.75 ms and 19/4 = 4.75 ms.

- **Advantages:** fair; allows time sharing; quick first response; no starvation.
- **Disadvantages:** the quantum must be chosen carefully (too small means a lot of switching; too large and it behaves like FCFS); waiting times can be long; many context switches; extra overhead. Because it ignores urgency, RR suits **soft** real-time work only.

## Choosing an algorithm

| Algorithm | Priority | Test | Best for |
|---|---|---|---|
| Cyclic | None (table) | Frame constraints | Small, fully periodic, safety-certified systems |
| Rate monotonic | Fixed (period) | $U \le n(2^{1/n}-1)$ (sufficient) | Periodic hard real-time with an RTOS |
| EDF | Dynamic (deadline) | $U \le 1$ | High utilisation, mixed periodic and aperiodic |
| Round robin | None (time slice) | n/a | Soft real-time, time sharing |

**Little's law** *(queueing)*: the average number of tasks in a system $L$ equals the arrival rate $\lambda$ times the average time each task spends in it, $W$: $L = \lambda W$.
