**Question bank, part 1: scheduling.** These are the scheduling questions from the class's handwritten revision answers ("Final RTS"), worked out again in full. Each answer ends with a check of the handwritten solution, so you can see where marks would be lost.

> **Summary of the check.** The numbers are mostly right. The main problems:
> - **Q2:** the list of possible frame sizes leaves out **48**, which is also feasible (the same slip is in the textbook model answer this question comes from).
> - **Q3:** the schedule table runs Task 1 at 0–25 and Task 2 at 25–50, **before they are released** (at 20 and 40). A frame grid that starts at 0 also fails Task 2's first job; the grid must start at 15.
> - **Q6 and Q8:** schedulability is decided with the wrong test. Q6 uses $U \le 1$ for $D < T$, and Q8 calls a set unschedulable because it fails the Liu and Layland bound, which is only sufficient. Both conclusions happen to be right, but the reasoning loses marks.
> - **Q6 (RMA, Table 1):** "utilisation is less than 100%, so schedulable" is the EDF test; for RMA compare with 0.780.
> - **Q10:** jitter is described as variation in *execution time*; it is variation in the *timing* (release, start or finish) of a periodic task.
> - **Q14:** answered "hard real time"; pre-emptive priority scheduling alone guarantees only **soft** real time.

## Q1 Table-driven schedule length
A real-time system has three tasks:

| Task | Phase (ms) | $e_i$ (ms) | $d_i$ (ms) | $p_i$ (ms) |
|---|---|---|---|---|
| T1 | 20 | 10 | 20 | 20 |
| T2 | 40 | 10 | 50 | 50 |
| T3 | 70 | 20 | 80 | 80 |

They are to be scheduled by a table-driven scheduler. Compute the length of time for which the schedule must be stored in the precomputed table.

::: answer
A table-driven schedule repeats every **major cycle** (hyperperiod), so the table must cover one major cycle, whatever the phases are:
$$M = \operatorname{lcm}(20, 50, 80)$$
With $20 = 2^2 \cdot 5$, $50 = 2 \cdot 5^2$, $80 = 2^4 \cdot 5$: $M = 2^4 \cdot 5^2 = 400$.

**The schedule must be stored for 400 ms.** (In that time T1 runs 20 times, T2 8 times and T3 5 times. The load is $U = 0.5 + 0.2 + 0.25 = 0.95 \le 1$, so a feasible table exists.)

**Check of the handwritten answer:** correct (400 ms). The EDF utilisation test at the start is not needed for this question.
:::

## Q2 Cyclic frame size (three tasks)
Using a cyclic scheduler, suggest a suitable frame size for T1 ($e = 20$, $p = d = 100$), T2 ($e = 20$, $p = d = 80$), T3 ($e = 30$, $p = d = 150$), all with zero phase.

::: answer
- **Constraint 1:** $f \ge \max(20, 20, 30) = 30$.
- **Constraint 2:** $M = \operatorname{lcm}(100, 80, 150) = 1200$. Divisors of 1200 that are at least 30: 30, 40, 48, 50, 60, 75, 80, 100, 120, 150, 200, 240, 300, 400, 600, 1200.
- **Constraint 3:** $2f - \gcd(f, p_i) \le d_i$:

| $f$ | T1 ($p = 100$) | T2 ($p = 80$) | T3 ($p = 150$) | Feasible |
|---|---|---|---|---|
| 30 | $60 - 10 = 50$ ✓ | $60 - 10 = 50$ ✓ | $60 - 30 = 30$ ✓ | **Yes** |
| 40 | $80 - 20 = 60$ ✓ | $80 - 40 = 40$ ✓ | $80 - 10 = 70$ ✓ | **Yes** |
| 48 | $96 - 4 = 92$ ✓ | $96 - 16 = 80 \le 80$ ✓ | $96 - 6 = 90$ ✓ | **Yes** |
| 50 | $100 - 50 = 50$ ✓ | $100 - 10 = 90 > 80$ ✗ | | No |
| 60 | $120 - 20 = 100$ ✓ | $120 - 20 = 100 > 80$ ✗ | | No |
| 75 | $150 - 25 = 125 > 100$ ✗ | | | No |
| ≥ 80 | $2f - \gcd > 100$ for T1 or $> 80$ for T2 | | | No |

**Feasible frame sizes: 30, 40 and 48 ms.** The usual exam choice is the smallest, **f = 30 ms** (40 frames per major cycle). A larger frame such as 48 ms needs fewer timer interrupts (25 per cycle), which lowers overhead.

**Check of the handwritten answer:** correct method and a valid answer (30 ms), but the list of candidate frames (30, 40, 50, 60, 80, 100 …) leaves out 48, 75, 120, 150 and others, so the feasible size **48** was never tested.
:::

## Q3 Cyclic schedule with task splitting
Three tasks: T1 (start 20, $e = 25$, $p = 150$, $d = 100$), T2 (start 40, $e = 10$, $p = 50$, $d = 30$), T3 (start 60, $e = 50$, $p = 200$, $d = 150$). A cyclic scheduler is to be used. What is the major cycle? Suggest a suitable frame size and give a feasible schedule.

::: answer
**Major cycle:** $M = \operatorname{lcm}(150, 50, 200) = 600$ ms.

**Try the three constraints.**

- Constraint 1: $f \ge \max(25, 10, 50) = 50$.
- Constraint 2: divisors of 600 that are ≥ 50: 50, 60, 75, 100, 120, 150, 200, 300, 600.
- Constraint 3 for T2 ($p = 50$, $d = 30$): even the smallest, $f = 50$, gives $100 - 50 = 50 > 30$ ✗. Every larger frame fails too.

**No frame size works**, because T3 needs a 50 ms frame but T2's deadline is only 30 ms.

**Fix: split T3** into two sub-jobs T3a and T3b of 25 ms each (T3a must run before T3b). Now $\max e_i = 25$:

- Constraint 1: $f \ge 25$. Constraint 2: $600/25 = 24$ frames ✓.
- Constraint 3: T1 $50 - \gcd(25, 150) = 25 \le 100$ ✓; T2 $50 - 25 = 25 \le 30$ ✓; T3 $50 - 25 = 25 \le 150$ ✓.

**Frame size f = 25 ms.**

**Phases.** The test above assumes jobs are released at frame boundaries. Here T2 is released at 40, 90, 140 …, which are 15 ms into frames that start at 0, 25, 50 …. T2's first job would then wait until 50 and finish at 75, after its deadline of 70. Starting the frame grid at **t = 15** puts every T2 release exactly on a frame boundary and keeps all other jobs feasible.

**Feasible schedule** (frames start at 15 + 25k; the table repeats every 600 ms):

| Frame (ms) | Job | Frame (ms) | Job | Frame (ms) | Job |
|---|---|---|---|---|---|
| 15–40 | idle | 215–240 | T1 | 415–440 | idle |
| 40–65 | T2 | 240–265 | T2 | 440–465 | T2 |
| 65–90 | T1 | 265–290 | T3a | 465–490 | T3a |
| 90–115 | T2 | 290–315 | T2 | 490–515 | T2 |
| 115–140 | T3a | 315–340 | T3b | 515–540 | T1 |
| 140–165 | T2 | 340–365 | T2 | 540–565 | T2 |
| 165–190 | T3b | 365–390 | T1 | 565–590 | T3b |
| 190–215 | T2 | 390–415 | T2 | 590–615 | T2 |

Check a few: T1 released at 20 runs 65–90 (deadline 120) ✓; T2 released at 40 runs 40–65 (deadline 70) ✓; T3 released at 60 runs 115–140 and 165–190 (deadline 210) ✓. Busy time: $4(25) + 12(10) + 3(50) = 370$ of 600 ms.

**Check of the handwritten answer:** the splitting idea and $f = 25$ are right. But the schedule table runs T1 at 0–25 and T2 at 25–50, before their releases at 20 and 40, which a cyclic scheduler cannot do, and with frames from 0 the first T2 job misses its deadline.
:::

## Q4 EDF (Table 2)
Three tasks under EDF: T1 (r = 0, C = 1, D = T = 4), T2 (0, 2, 6), T3 (0, 3, 8). (i) Test whether the set is schedulable. (ii) If it is, draw the schedule.

::: answer
**(i) Test.** With $D_i = T_i$, EDF on one processor is optimal: the set is schedulable **if and only if** $U \le 1$.
$$U = \frac{1}{4} + \frac{2}{6} + \frac{3}{8} = 0.250 + 0.333 + 0.375 = 0.958 \le 1$$
**The set is schedulable under EDF**, with the processor busy 95.8% of the time.

**(ii) Schedule** over the major cycle $\operatorname{lcm}(4, 6, 8) = 24$. At each instant the ready job with the earliest absolute deadline runs; on a tie the running job continues.

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="EDF schedule of Table 2 over the hyperperiod (24). At each instant the ready job with the earliest absolute deadline runs; ties keep the running job. Every deadline is met (U ≈ 0.958); the only idle slot is 23–24."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="52.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="74.1" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="118.2" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="184.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="206.6" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="250.8" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="272.8" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="339.1" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="361.2" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="405.3" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="427.4" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="493.7" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="515.8" y="62" width="44.2" height="30" rx="4" class="d-box b"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="140.3" y1="50.0" x2="140.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="50.0" x2="228.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="50.0" x2="317.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="50.0" x2="405.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="493.7" y1="50.0" x2="493.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="50.0" x2="582.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="94.0" x2="184.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="94.0" x2="449.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="138.0" x2="228.7" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="138.0" x2="405.3" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="138.0" x2="582.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="150.0" x2="96.2" y2="155.0" class="d-ax"/><text x="96.2" y="170.0" text-anchor="middle" class="d-t s m">2</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">4</text><line x1="184.5" y1="150.0" x2="184.5" y2="155.0" class="d-ax"/><text x="184.5" y="170.0" text-anchor="middle" class="d-t s m">6</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">8</text><line x1="272.8" y1="150.0" x2="272.8" y2="155.0" class="d-ax"/><text x="272.8" y="170.0" text-anchor="middle" class="d-t s m">10</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">12</text><line x1="361.2" y1="150.0" x2="361.2" y2="155.0" class="d-ax"/><text x="361.2" y="170.0" text-anchor="middle" class="d-t s m">14</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">16</text><line x1="449.5" y1="150.0" x2="449.5" y2="155.0" class="d-ax"/><text x="449.5" y="170.0" text-anchor="middle" class="d-t s m">18</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">20</text><line x1="537.8" y1="150.0" x2="537.8" y2="155.0" class="d-ax"/><text x="537.8" y="170.0" text-anchor="middle" class="d-t s m">22</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">24</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>EDF schedule of Table 2 over the hyperperiod (24). At each instant the ready job with the earliest absolute deadline runs; ties keep the running job. Every deadline is met (U ≈ 0.958); the only idle slot is 23–24.</figcaption></figure>

| Time | 0–1 | 1–3 | 3–6 | 6–7 | 7–9 | 9–10 | 10–13 | 13–14 | 14–16 | 16–17 | 17–20 | 20–21 | 21–23 | 23–24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Runs | T1 | T2 | T3 | T1 | T2 | T1 | T3 | T1 | T2 | T1 | T3 | T1 | T2 | idle |

**Check of the handwritten answer:** correct ($U = 0.958$), and the drawn schedule matches.
:::

## Q5 Frame-size constraints
(a) Describe the three constraints a cyclic scheduler's frame size must satisfy. (b) Select a frame size for T1 = (1, 4), T2 = (1, 5), T3 = (1, 20), T4 = (2, 20).

::: answer
**(a)**

Let $f$ be the frame size, $e_i$ the execution time, $p_i$ the period and $d_i$ the relative deadline of task $i$.

1. **Minimum context switching (execution time):** a job must finish inside one frame, so $f \ge \max_i e_i$.
2. **Minimisation of table size (divides the major cycle):** a whole number of frames must fit in the major cycle $M = \operatorname{lcm}(p_i)$, so $f$ must divide $M$ (ideally it divides at least one period too).
3. **Satisfaction of deadlines:** between a job's release and its deadline there must be at least one full frame, so for every task
$$2f - \gcd(f, p_i) \le d_i$$

**(b)** The source paper gives $e_2 = 1$.

- **Constraint 1:** $f \ge \max(1, 1, 1, 2) = 2$.
- **Constraint 2:** $M = \operatorname{lcm}(4, 5, 20, 20) = 20$, so $f \in \{2, 4, 5, 10, 20\}$.
- **Constraint 3:** $2f - \gcd(f, p_i) \le d_i$ (here $d_i = p_i$):

| $f$ | T1 ($p = 4$) | T2 ($p = 5$) | T3, T4 ($p = 20$) | Result |
|---|---|---|---|---|
| 2 | $4 - 2 = 2 \le 4$ ✓ | $4 - 1 = 3 \le 5$ ✓ | $4 - 2 = 2 \le 20$ ✓ | **Feasible** |
| 4 | $8 - 4 = 4 \le 4$ ✓ | $8 - 1 = 7 > 5$ ✗ | | No |
| 5 | $10 - 1 = 9 > 4$ ✗ | | | No |
| 10 | $20 - 2 = 18 > 4$ ✗ | | | No |
| 20 | $40 - 4 = 36 > 4$ ✗ | | | No |

**The appropriate frame size is $f = 2$**, giving $20/2 = 10$ frames per major cycle. One valid schedule table:

| Frame | 0–2 | 2–4 | 4–6 | 6–8 | 8–10 | 10–12 | 12–14 | 14–16 | 16–18 | 18–20 |
|---|---|---|---|---|---|---|---|---|---|---|
| Jobs | T1, T2 | T4 | T1, T3 | T2 | T1 | T2 | T1 | idle | T1, T2 | idle |

Each job sits in a frame that starts at or after its release and ends by its deadline (for example T2's job released at 5 runs in 6–8, before its deadline at 10). The busy time is $5(1) + 4(1) + 1 + 2 = 12$ of 20 units.

**Check of the handwritten answer:** correct ($f = 2$).
:::

## Q6 Rate monotonic (Table 1) and EDF with D < T
(a) Three tasks under RMA: T1 (C = 0.5, D = T = 3), T2 (1, 4), T3 (2, 6). Test the RMA condition and draw the schedule. (b) For Task 1 (start 20, C = 25, T = 150, D = 100), Task 2 (40, 10, 50, 30), Task 3 (60, 50, 200, 150), determine whether the set is schedulable under EDF.

::: answer
**(a)** **(i) Test.** Priorities by RMA: shorter period, higher priority, so T1 > T2 > T3.
$$U = \frac{0.5}{3} + \frac{1}{4} + \frac{2}{6} = 0.167 + 0.250 + 0.333 = 0.750$$
$$n(2^{1/n} - 1) = 3(2^{1/3} - 1) = 0.780$$
Since $0.750 \le 0.780$, **the Liu and Layland condition is satisfied and the set is RMA-schedulable.**

*Check by response time:* $R_1 = 0.5$; $R_2 = 1 + 0.5 = 1.5$; $R_3 = 2 + \lceil 3.5/3 \rceil 0.5 + \lceil 3.5/4 \rceil 1 = 4$, and $4 \le 6$. All meet their deadlines.

**(ii) Schedule** over the major cycle $\operatorname{lcm}(3, 4, 6) = 12$:

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="Rate monotonic schedule of Table 1 over one hyperperiod (12). Arrows mark releases. T1 (period 3) always pre-empts; T3 is pre-empted at t = 3 and t = 9. The CPU is idle at 5–6 and 10–12 (U = 0.75)."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="52.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="74.1" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="118.2" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="184.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="206.6" y="106" width="22.1" height="30" rx="4" class="d-box c"/><rect x="228.7" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="317.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="339.1" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="405.3" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="449.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="471.6" y="106" width="22.1" height="30" rx="4" class="d-box c"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="50.0" x2="184.5" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="50.0" x2="317.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="50.0" x2="449.5" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="50.0" x2="582.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="94.0" x2="228.7" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="94.0" x2="405.3" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="138.0" x2="317.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="138.0" x2="582.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="150.0" x2="96.2" y2="155.0" class="d-ax"/><text x="96.2" y="170.0" text-anchor="middle" class="d-t s m">1</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">2</text><line x1="184.5" y1="150.0" x2="184.5" y2="155.0" class="d-ax"/><text x="184.5" y="170.0" text-anchor="middle" class="d-t s m">3</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">4</text><line x1="272.8" y1="150.0" x2="272.8" y2="155.0" class="d-ax"/><text x="272.8" y="170.0" text-anchor="middle" class="d-t s m">5</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">6</text><line x1="361.2" y1="150.0" x2="361.2" y2="155.0" class="d-ax"/><text x="361.2" y="170.0" text-anchor="middle" class="d-t s m">7</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">8</text><line x1="449.5" y1="150.0" x2="449.5" y2="155.0" class="d-ax"/><text x="449.5" y="170.0" text-anchor="middle" class="d-t s m">9</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">10</text><line x1="537.8" y1="150.0" x2="537.8" y2="155.0" class="d-ax"/><text x="537.8" y="170.0" text-anchor="middle" class="d-t s m">11</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">12</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>Rate monotonic schedule of Table 1 over one hyperperiod (12). Arrows mark releases. T1 (period 3) always pre-empts; T3 is pre-empted at t = 3 and t = 9. The CPU is idle at 5–6 and 10–12 (U = 0.75).</figcaption></figure>

T1 runs 0–0.5, T2 0.5–1.5, T3 1.5–3; at 3 T1 pre-empts T3, which finishes at 4 (deadline 6). The CPU is idle 5–6 and 10–12.

**(b)** **Step 1: collect the data.** Here the deadline is shorter than the period for every task, so the plain $U \le 1$ test is not enough on its own.

| Task | Phase $\phi$ | $C$ | $T$ | $D$ | $C/T$ | $C/D$ |
|---|---|---|---|---|---|---|
| Task 1 | 20 | 25 | 150 | 100 | 0.167 | 0.250 |
| Task 2 | 40 | 10 | 50 | 30 | 0.200 | 0.333 |
| Task 3 | 60 | 50 | 200 | 150 | 0.250 | 0.333 |
| **Sum** | | | | | **0.617** | **0.917** |

**Step 2: necessary condition (utilisation).**
$$U = \frac{25}{150} + \frac{10}{50} + \frac{50}{200} = 0.167 + 0.200 + 0.250 = 0.617 \le 1$$
This must hold for *any* schedule, so it is necessary but, with $D < T$, not sufficient.

**Step 3: sufficient condition (density).** When $D_i < T_i$, EDF is guaranteed to succeed if
$$\sum_i \frac{C_i}{\min(D_i, T_i)} = \frac{25}{100} + \frac{10}{30} + \frac{50}{150} = 0.250 + 0.333 + 0.333 = 0.917 \le 1$$

**Step 4: conclusion.** Both conditions hold, so **the task set is schedulable on a uniprocessor under EDF**. The schedule below confirms it: Task 2 always runs first when ready because its deadline is only 30 ms after release.

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="EDF schedule of the past-paper task set (phases 20, 40 and 60 ms) from 0 to 300 ms. Arrows mark releases. Task 2 has the tightest deadline (30 ms after release), so it runs first whenever it is ready; Task 1 is pre-empted at 40 and finishes at 55, Task 3 is pre-empted at 90 and finishes at 120. No deadline is missed."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="87.3" y="18" width="35.3" height="30" rx="4" class="d-box a"/><rect x="122.7" y="62" width="17.7" height="30" rx="4" class="d-box b"/><rect x="140.3" y="18" width="8.8" height="30" rx="4" class="d-box a"/><rect x="158.0" y="106" width="53.0" height="30" rx="4" class="d-box c"/><rect x="211.0" y="62" width="17.7" height="30" rx="4" class="d-box b"/><rect x="228.7" y="106" width="35.3" height="30" rx="4" class="d-box c"/><rect x="299.3" y="62" width="17.7" height="30" rx="4" class="d-box b"/><rect x="352.3" y="18" width="35.3" height="30" rx="4" class="d-box a"/><rect x="387.7" y="62" width="17.7" height="30" rx="4" class="d-box b"/><rect x="405.3" y="18" width="8.8" height="30" rx="4" class="d-box a"/><rect x="476.0" y="62" width="17.7" height="30" rx="4" class="d-box b"/><rect x="511.3" y="106" width="53.0" height="30" rx="4" class="d-box c"/><rect x="564.3" y="62" width="17.7" height="30" rx="4" class="d-box b"/><line x1="87.3" y1="50.0" x2="87.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="352.3" y1="50.0" x2="352.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="122.7" y1="94.0" x2="122.7" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="211.0" y1="94.0" x2="211.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="299.3" y1="94.0" x2="299.3" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="387.7" y1="94.0" x2="387.7" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="476.0" y1="94.0" x2="476.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="564.3" y1="94.0" x2="564.3" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="158.0" y1="138.0" x2="158.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="511.3" y1="138.0" x2="511.3" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">50</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">100</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">150</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">200</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">250</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">300</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t (ms)</text></svg><figcaption>EDF schedule of the past-paper task set (phases 20, 40 and 60 ms) from 0 to 300 ms. Arrows mark releases. Task 2 has the tightest deadline (30 ms after release), so it runs first whenever it is ready; Task 1 is pre-empted at 40 and finishes at 55, Task 3 is pre-empted at 90 and finishes at 120. No deadline is missed.</figcaption></figure>

> **Common mistake.** Many answers stop at $U = 0.617 \le 1$. That test only applies when $D = T$; with $D < T$ you must use the density $\sum C/D$ (or simulate), as in Step 3.

**Check of the handwritten answer:** (a) the numbers are right ($0.75 \le 0.78$), but the conclusion is given as "utilisation is less than 100%, so schedulable", which is the EDF condition, not the RMA one. (b) uses only $U = 0.617 < 1$; with $D < T$ the density $\sum C/D = 0.917 \le 1$ is the test to show.
:::

## Q7 Scheduling points
Explain the scheduling point of a task scheduling algorithm. How are scheduling points determined in clock-driven, event-driven and hybrid schedulers?

::: answer
**Scheduling points** are the instants on the time line at which the scheduler wakes up and decides which task runs next.

- **(a) Clock-driven** (table-driven, cyclic): the scheduling points are the **interrupts of a periodic timer**, for example the start of every frame.
- **(b) Event-driven** (RM, EDF): the scheduling points are **events**: a task arrives (is released), completes, blocks or unblocks.
- **(c) Hybrid** (e.g. round robin with a time slice): **both** timer interrupts (end of a time slice) and events (task arrival or completion).

**Check of the handwritten answer:** correct.
:::

## Q8 RMA with four tasks
Determine whether the following periodic tasks are schedulable on a uniprocessor using RMA.

| Task | Start (ms) | $C$ (ms) | $T$ (ms) | $D$ (ms) |
|---|---|---|---|---|
| T1 | 20 | 25 | 150 | 100 |
| T2 | 40 | 7 | 40 | 40 |
| T3 | 60 | 10 | 60 | 50 |
| T4 | 25 | 10 | 30 | 20 |

::: answer
**Step 1: necessary condition.**
$$U = \frac{25}{150} + \frac{7}{40} + \frac{10}{60} + \frac{10}{30} = 0.167 + 0.175 + 0.167 + 0.333 = 0.842 \le 1 \ ✓$$

**Step 2: Liu and Layland bound.** $4(2^{1/4} - 1) = 0.757$. Since $0.842 > 0.757$ the test **fails, which is inconclusive**: the bound is sufficient only.

**Step 3: response-time (Lehoczky) test.** Priorities by period: T4 (30) > T2 (40) > T3 (60) > T1 (150). Iterate $R = C_i + \sum_{hp} \lceil R / T_j \rceil C_j$ (worst case, all released together):

| Task | Iterations | $R$ | $D$ | Meets? |
|---|---|---|---|---|
| T4 | 10 | 10 | 20 | ✓ |
| T2 | 7 → 17 → 17 | 17 | 40 | ✓ |
| T3 | 10 → 27 → 27 | 27 | 50 | ✓ |
| T1 | 25 → 52 → 69 → 89 → 96 → 106 → 106 | 106 | 100 | ✗ |

For T1, e.g. $R = 96$: $25 + \lceil 96/30 \rceil 10 + \lceil 96/40 \rceil 7 + \lceil 96/60 \rceil 10 = 25 + 40 + 21 + 20 = 106$, and $R = 106$ gives 106 again.

**Conclusion:** T1 can finish as late as 106 ms after release, past its 100 ms deadline, so **the set is not RMA-schedulable.**

**Check of the handwritten answer:** the conclusion is right, but it is drawn from the failed bound alone ("0.842 > 0.757, hence not schedulable"). Failing the bound proves nothing; Step 3 is what shows that T1 misses.
:::

## Q9 Periodic, aperiodic and sporadic tasks
What are the distinguishing characteristics of periodic, aperiodic and sporadic real-time tasks?

::: answer
- **Periodic task:** repeats at a **fixed period** $p$; release times are known in advance. *Example:* read a temperature sensor every 100 ms.
- **Aperiodic task:** arrives at **random** times with no minimum gap; usually soft or no deadline. *Example:* an operator display request.
- **Sporadic task:** arrives at random but with a **known minimum inter-arrival time**, and usually has a **hard deadline**. *Example:* an emergency shutdown or fault alarm.

**Check of the handwritten answer:** correct.
:::

## Q10 Jitter
What is jitter associated with a periodic task? Mention techniques by which jitter can be overcome.

::: answer
**Jitter** is the deviation of a periodic task from strictly periodic behaviour: the variation, from one period to the next, in the instant the task is released, starts, or produces its output. *Example:* a task meant to sample every 10 ms actually samples at 10, 21, 29, 40 ms.

- **Arrival (release) jitter:** variation in when the task becomes ready.
- **Completion (output) jitter:** variation in when it finishes, caused by pre-emption and varying execution time.

**Techniques to reduce it:**

- Give jitter-sensitive tasks the **highest priority** (or schedule them in fixed slots with a clock-driven scheduler).
- Do the time-critical I/O in a **timer interrupt** or with **hardware** (timer-triggered ADC, DMA), so the sample instant does not depend on the task.
- **Buffer** the result and release it at the next timer tick (fixed output time).
- Keep ISRs and critical sections short so other work cannot delay the task.

**Check of the handwritten answer:** defines jitter as variation in *execution time*; it is variation in *timing*. The listed techniques are fine.
:::

## Q11 EDF as dynamic priority
Can EDF be considered a dynamic-priority scheduling algorithm?

::: answer
**Yes.** EDF does not use fixed priority numbers: at every scheduling point the ready job with the **earliest absolute deadline** runs. A task's priority changes from job to job (each new job has a new deadline), so the effective priority is dynamic. Note that within one job it does not change (EDF is *job-level fixed*).

**Check of the handwritten answer:** correct.
:::

## Q12 EDF shortcomings
Explain three important shortcomings of EDF when used for real-time tasks in practical applications.

::: answer
1. **Poor handling of transient overload.** When demand briefly exceeds 100%, EDF cannot choose *which* tasks miss; the **domino effect** can make many tasks, including critical ones, miss one after another.
2. **Run-time inefficiency.** The ready queue must be kept sorted by absolute deadline and priorities recomputed at every release, which costs more than fixed priorities.
3. **Resource sharing.** Tasks that share resources suffer priority inversion; protocols such as PIP and PCP were designed for fixed priorities and do not carry over directly.
4. **Little support in commercial RTOSs.** Most RTOSs offer only static priority levels, so EDF is hard to implement efficiently.

Any three, explained, earn the marks.

**Check of the handwritten answer:** correct (overload, run-time overhead, implementation).
:::

## Q13 Cyclic scheduling
What is cyclic scheduling?

::: answer
A **cyclic scheduler** is a static, clock-driven (table-driven) scheduler. A schedule is worked out offline for one **major cycle** $M$ (the LCM of the periods) and stored in a table. The major cycle is split into equal **frames** of size $f$; a periodic timer interrupt starts each frame, the scheduler looks up which jobs run in that frame, and a job is never pre-empted inside its frame. The table is repeated every major cycle. It is simple and fully predictable, but inflexible.

**Check of the handwritten answer:** correct, though short.
:::

## Q14 Pre-emptive priority scheduling
What type of real time supports pre-emptive, priority-based scheduling?

::: answer
**Soft real time.** A pre-emptive priority scheduler always runs the most urgent ready task, but by itself it only guarantees soft real-time behaviour. **Hard** real time also needs a schedulability test or admission control, bounded latencies and resource protocols, so that every deadline is *guaranteed*.

**Check of the handwritten answer:** says "hard real-time system". Pre-emption is needed for hard real time, but on its own it guarantees only soft real time.
:::

## Q15 Priorities of P1 and P2
P1 has a period of 50 and CPU burst 25; P2 has a period of 80 and CPU burst 35. What are the priorities of P1 and P2?

::: answer
Under **rate monotonic**, P1 (shorter period) has the higher priority, fixed. But $U = 0.94 > 0.828$, and the response time of P2 is $35 \to 60 \to 85 > 80$, so **P2 misses its deadline under RM**.

Under **EDF**, the priorities **keep varying**: P1 is higher at $t = 0$ (deadline 50 vs 80), P2 is higher at $t = 50$ (deadline 80 vs 100). Since $U \le 1$, EDF schedules both.

**Check of the handwritten answer:** gives the RM priority (P1 higher) only; it should add that RM fails here and that under EDF the priorities vary.
:::

## Q16 Rate of a task
If the period of a process is $p$, what is the rate of the task?

::: answer
Rate $= 1/p$ (jobs per unit time). A period of 25 ms gives a rate of 40 per second.

**Check of the handwritten answer:** correct.
:::
