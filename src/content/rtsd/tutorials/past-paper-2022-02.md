**End of semester examination, February 2022, Paper 1** (Semester I 2021/2022, CSEU 08104). Section A: answer all (20 marks). Section B: any four (40 marks). Many questions repeat from March 2021; the answers are given in full so this page stands on its own. The question paper is under *Past papers*.

> **Check of the notes written on the scanned paper.** A margin note says priority inversion "occurs when the lower priority task pre-empts a high priority task". That is not quite right: the low-priority task never pre-empts the high one. The high-priority task **blocks** because the low-priority task holds a resource it needs, and medium-priority tasks can then stretch that wait (see Q1 (ii)).

## Q1 (i) Performance vs behavioural constraint
Differentiate between a performance constraint and a behavioural constraint in a real-time system. **(2 marks)**

::: answer
| | Performance constraint | Behavioural constraint |
|---|---|---|
| Imposed on | the **computer system** (its response) | the **environment** (the stimuli it generates) |
| Ensures | the computer responds fast enough | the environment behaves well |
| Example | "the dial tone must sound within 2 s of lifting the handset" | "the next digit is dialled within 5 s of the previous one" |

Both kinds can be delay, deadline or duration constraints.
:::

## Q1 (ii) Priority inversion
Explain priority inversion in the context of real-time scheduling. **(2 marks)**

::: answer
**Priority inversion** happens when a high-priority task H must wait for a lower-priority task L, because L holds a shared resource (a lock) that H needs. The inversion becomes **unbounded** when medium-priority tasks M, which do not need the resource, pre-empt L: H then waits for all of them as well.

<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Priority inversion. (a) L holds the lock; H blocks on it at t = 4, then M pre-empts L and runs for as long as it likes, so H waits for M: the inversion is unbounded. (b) With priority inheritance L runs at H’s priority until it releases the lock at t = 7, so M cannot cut in and H finishes at 10."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="60.0" y="16.0" text-anchor="start" class="d-t b">(a) Unbounded inversion</text><text x="50.0" y="42.0" text-anchor="end" class="d-t b">H</text><line x1="60.0" y1="52.0" x2="580.0" y2="52.0" class="d-mut"/><rect x="138" y="30" width="26" height="22" rx="4" class="d-box a"/><rect x="424" y="30" width="78" height="22" rx="4" class="d-box a"/><text x="463.0" y="46.0" text-anchor="middle" class="d-t s">CS</text><text x="50.0" y="76.0" text-anchor="end" class="d-t b">M</text><line x1="60.0" y1="86.0" x2="580.0" y2="86.0" class="d-mut"/><rect x="190" y="64" width="182" height="22" rx="4" class="d-box b"/><text x="281.0" y="80.0" text-anchor="middle" class="d-t s">M runs (no lock)</text><text x="50.0" y="110.0" text-anchor="end" class="d-t b">L</text><line x1="60.0" y1="120.0" x2="580.0" y2="120.0" class="d-mut"/><rect x="60" y="98" width="78" height="22" rx="4" class="d-box c"/><text x="99.0" y="114.0" text-anchor="middle" class="d-t s">CS</text><rect x="164" y="98" width="26" height="22" rx="4" class="d-box c"/><rect x="372" y="98" width="52" height="22" rx="4" class="d-box c"/><text x="398.0" y="114.0" text-anchor="middle" class="d-t s">CS</text><text x="294.0" y="46.0" text-anchor="middle" class="d-t s r">H blocked on the lock</text><text x="60.0" y="152.0" text-anchor="start" class="d-t b">(b) With priority inheritance</text><text x="50.0" y="178.0" text-anchor="end" class="d-t b">H</text><line x1="60.0" y1="188.0" x2="580.0" y2="188.0" class="d-mut"/><rect x="138" y="166" width="26" height="22" rx="4" class="d-box a"/><rect x="242" y="166" width="78" height="22" rx="4" class="d-box a"/><text x="281.0" y="182.0" text-anchor="middle" class="d-t s">CS</text><text x="50.0" y="212.0" text-anchor="end" class="d-t b">M</text><line x1="60.0" y1="222.0" x2="580.0" y2="222.0" class="d-mut"/><rect x="320" y="200" width="182" height="22" rx="4" class="d-box b"/><text x="411.0" y="216.0" text-anchor="middle" class="d-t s">M waits</text><text x="50.0" y="246.0" text-anchor="end" class="d-t b">L</text><line x1="60.0" y1="256.0" x2="580.0" y2="256.0" class="d-mut"/><rect x="60" y="234" width="78" height="22" rx="4" class="d-box c"/><text x="99.0" y="250.0" text-anchor="middle" class="d-t s">CS</text><rect x="164" y="234" width="78" height="22" rx="4" class="d-box a"/><text x="203.0" y="250.0" text-anchor="middle" class="d-t s">L at H prio</text><line x1="60.0" y1="270.0" x2="588.0" y2="270.0" class="d-ax" marker-end="url(#ah)"/><line x1="60.0" y1="270.0" x2="60.0" y2="275.0" class="d-ax"/><text x="60.0" y="290.0" text-anchor="middle" class="d-t s m">0</text><line x1="112.0" y1="270.0" x2="112.0" y2="275.0" class="d-ax"/><text x="112.0" y="290.0" text-anchor="middle" class="d-t s m">2</text><line x1="164.0" y1="270.0" x2="164.0" y2="275.0" class="d-ax"/><text x="164.0" y="290.0" text-anchor="middle" class="d-t s m">4</text><line x1="216.0" y1="270.0" x2="216.0" y2="275.0" class="d-ax"/><text x="216.0" y="290.0" text-anchor="middle" class="d-t s m">6</text><line x1="268.0" y1="270.0" x2="268.0" y2="275.0" class="d-ax"/><text x="268.0" y="290.0" text-anchor="middle" class="d-t s m">8</text><line x1="320.0" y1="270.0" x2="320.0" y2="275.0" class="d-ax"/><text x="320.0" y="290.0" text-anchor="middle" class="d-t s m">10</text><line x1="372.0" y1="270.0" x2="372.0" y2="275.0" class="d-ax"/><text x="372.0" y="290.0" text-anchor="middle" class="d-t s m">12</text><line x1="424.0" y1="270.0" x2="424.0" y2="275.0" class="d-ax"/><text x="424.0" y="290.0" text-anchor="middle" class="d-t s m">14</text><line x1="476.0" y1="270.0" x2="476.0" y2="275.0" class="d-ax"/><text x="476.0" y="290.0" text-anchor="middle" class="d-t s m">16</text><line x1="528.0" y1="270.0" x2="528.0" y2="275.0" class="d-ax"/><text x="528.0" y="290.0" text-anchor="middle" class="d-t s m">18</text><line x1="580.0" y1="270.0" x2="580.0" y2="275.0" class="d-ax"/><text x="580.0" y="290.0" text-anchor="middle" class="d-t s m">20</text></svg><figcaption>Priority inversion. (a) L holds the lock; H blocks on it at t = 4, then M pre-empts L and runs for as long as it likes, so H waits for M: the inversion is unbounded. (b) With priority inheritance L runs at H’s priority until it releases the lock at t = 7, so M cannot cut in and H finishes at 10.</figcaption></figure>

Fixes: **priority inheritance** (L temporarily runs at H's priority), the **priority ceiling protocol**, or keeping critical sections short and non-pre-emptible.
:::

## Q1 (iii) Hard vs soft communication
What is the difference between hard and soft real-time communication supported by a network? **(2 marks)**

::: answer
- **Hard real-time communication:** the network gives an **absolute (deterministic) guarantee** that every message is delivered within its deadline, with bounded delay and jitter. A late message counts as a failure. *Example:* brake and engine messages on a CAN bus.
- **Soft real-time communication:** the network gives **no absolute guarantee**, only good average (statistical) QoS. Occasional late or lost packets lower quality but do not cause failure. *Example:* video streaming or VoIP over the Internet.
:::

## Q1 (iv) PCP
Describe how deadlocks, unbounded priority inversions and chain blocking are prevented using PCP. **(2 marks)**

::: answer
Under PCP each resource has a **ceiling** = the highest priority of any task that may use it. A task may lock a free resource only if its priority is **higher than the current system ceiling** (the highest ceiling of resources now locked by other tasks), and a task that blocks a higher-priority task **inherits** that task's priority.

- **Deadlock:** a task can only take a resource when none of the resources it might later need is held by another task, so no task can hold part of what another needs while waiting for the rest. The circular wait never forms.
- **Unbounded priority inversion:** the low-priority holder inherits the blocked task's priority, so medium-priority tasks cannot pre-empt it; the inversion lasts at most one critical section.
- **Chain blocking:** a task can be blocked **at most once**, for the length of one critical section of one lower-priority task, because once it starts it will find all its resources free.
:::

## Q1 (v) Fail-safe state
What is a "fail-safe" state? Since safety-critical systems do not have a fail-safe state, how is safety guaranteed? **(1 mark)**

::: answer
- **Fail-safe state:** a state which, if the system enters it when it fails, causes **no damage**. On a fault the system simply goes there and stops. *Examples:* all traffic lights turn red; a railway signal shows red and the train stops; a lift stops and holds its brakes.
- **Safety-critical systems** have **no fail-safe state** (an aircraft in flight cannot just "stop"), so a failure can cause damage or loss of life. Their safety can only come from **very high reliability**: careful design and testing to avoid and remove faults, plus **fault tolerance** (redundant hardware such as TMR, diverse software, watchdogs) so that the system keeps working correctly even when a part fails.
:::

## Q1 (vi) Scheduling points
Explain the scheduling point of a task scheduling algorithm. How are the scheduling points determined in (a) clock-driven, (b) event-driven, (c) hybrid schedulers? **(2 marks)**

::: answer
**Scheduling points** are the instants on the time line at which the scheduler wakes up and decides which task runs next.

- **(a) Clock-driven** (table-driven, cyclic): the scheduling points are the **interrupts of a periodic timer**, for example the start of every frame.
- **(b) Event-driven** (RM, EDF): the scheduling points are **events**: a task arrives (is released), completes, blocks or unblocks.
- **(c) Hybrid** (e.g. round robin with a time slice): **both** timer interrupts (end of a time slice) and events (task arrival or completion).
:::

## Q1 (vii) EDF with phases and D < T
Consider three independent periodic tasks:

| Task | Starting time (ms) | Execution time (ms) | Period (ms) | Deadline (ms) |
|---|---|---|---|---|
| Task 1 | 20 | 25 | 150 | 100 |
| Task 2 | 40 | 10 | 50 | 30 |
| Task 3 | 60 | 50 | 200 | 150 |

Determine whether the task set is schedulable on a uniprocessor using EDF. Show all intermediate steps. **(2 marks)**

::: answer
**Step 1: collect the data.** Here the deadline is shorter than the period for every task, so the plain $U \le 1$ test is not enough on its own.

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
:::

## Q1 (viii) EDF shortcomings
Explain three important shortcomings of EDF when used for scheduling real-time tasks in practical applications. **(3 marks)**

::: answer
1. **Poor handling of transient overload.** When demand briefly exceeds 100%, EDF cannot choose *which* tasks miss; the **domino effect** can make many tasks, including critical ones, miss one after another.
2. **Run-time inefficiency.** The ready queue must be kept sorted by absolute deadline and priorities recomputed at every release, which costs more than fixed priorities.
3. **Resource sharing.** Tasks that share resources suffer priority inversion; protocols such as PIP and PCP were designed for fixed priorities and do not carry over directly.
4. **Little support in commercial RTOSs.** Most RTOSs offer only static priority levels, so EDF is hard to implement efficiently.

Any three, explained, earn the marks.
:::

## Q1 (ix) Five RTOS features
Describe five features of a real-time operating system. **(2 marks)**

::: answer
- **Real-time priority levels** that the OS never changes (static priorities).
- **Fast task pre-emption:** a high-priority task that becomes ready runs almost at once.
- **Predictable and fast interrupt latency.**
- **Support for resource sharing** among real-time tasks (PIP/PCP mutexes).
- **Real-time memory management:** static allocation, memory locking, no unpredictable paging.
- **Support for asynchronous I/O**, so a task does not block on I/O.
- **High-resolution timers and clocks.**
:::

## Q1 (x) Real-time file system
Explain the requirements of a real-time file system. How does it compare with traditional file systems? **(2 marks)**

::: answer
A real-time file system must give **predictable, bounded** read and write times.

- **Contiguous files:** the blocks of a file are stored next to each other, so reads have no seek jitter.
- **Pre-allocation:** space is reserved when the file is created, so a write never waits for (or fails on) block allocation.
- **Priority-aware I/O:** disk requests are served by priority or deadline, not first-come-first-served.

A **traditional** file system allocates blocks on demand wherever they are free and serves requests in arrival order. That gives good average throughput but unpredictable access times (jitter), and a write can even fail when the disk fills.
:::

## Q2 Cyclic scheduler
(i) The frame size is an important design parameter and must be chosen carefully. Describe the three constraints the selected frame size must satisfy. **(4 marks)** (ii) A cyclic scheduler is to run T1 = (e1 = 1, p1 = 4), T2 = (e2 = 1, p2 = 5), T3 = (e3 = 1, p3 = 20), T4 = (e4 = 2, p4 = 20) on a uniprocessor. Select an appropriate frame size. **(6 marks)**

::: answer
**(i)**

Let $f$ be the frame size, $e_i$ the execution time, $p_i$ the period and $d_i$ the relative deadline of task $i$.

1. **Minimum context switching (execution time):** a job must finish inside one frame, so $f \ge \max_i e_i$.
2. **Minimisation of table size (divides the major cycle):** a whole number of frames must fit in the major cycle $M = \operatorname{lcm}(p_i)$, so $f$ must divide $M$ (ideally it divides at least one period too).
3. **Satisfaction of deadlines:** between a job's release and its deadline there must be at least one full frame, so for every task
$$2f - \gcd(f, p_i) \le d_i$$

**(ii)** The source paper gives $e_2 = 1$.

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
:::

## Q3 Fault tolerance
(i) Explain why hardware fault tolerance is easy to achieve compared to software fault tolerance. **(1 mark)** (ii) Explain the main techniques available to achieve hardware fault tolerance. **(4 marks)** (iii) What are the main techniques available to achieve software fault tolerance, and what are their shortcomings? **(5 marks)**

::: answer
**(i)**

- **Hardware faults are mostly random and independent.** Components wear out or fail at random, so a duplicate unit almost never fails at the same moment. Adding identical spares (redundancy) therefore works.
- **Software faults are design faults.** A bug is present in every copy of the program, so running identical copies gives no protection: all copies fail together on the same input. Tolerating software faults needs *different* versions (design diversity), which is expensive, and even independently written versions tend to share mistakes (correlated faults).
- **Hardware faults are easier to detect:** parity, ECC, watchdogs and self-tests catch them; a software fault may appear only under rare input and timing conditions.
- **Hardware is simpler and well modelled** (failure rates are known), while software is very complex, so its reliability is hard to predict.

**(ii)**

- **Built-in self-test (BIST):** the system tests its own memory, processor and I/O at start-up and periodically, and switches to a spare when a fault is found.
- **Triple modular redundancy (TMR):** three identical units work on the same input and a **voter** takes the majority output, so one faulty unit is masked. The voter itself must be very reliable.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="10" y="95" width="80" height="46" rx="10" class="d-box"/><text x="50.0" y="123.0" text-anchor="middle" class="d-t b">Input</text><rect x="170" y="20" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="48.0" text-anchor="middle" class="d-t b">Module 1</text><line x1="90.0" y1="118.0" x2="168.0" y2="43.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="43.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="98" width="130" height="46" rx="10" class="d-box b"/><text x="235.0" y="118.0" text-anchor="middle" class="d-t b">Module 2</text><text x="235.0" y="134.0" text-anchor="middle" class="d-t b">(faulty)</text><line x1="90.0" y1="118.0" x2="168.0" y2="121.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="121.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="176" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="204.0" text-anchor="middle" class="d-t b">Module 3</text><line x1="90.0" y1="118.0" x2="168.0" y2="199.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="199.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="400" y="88" width="90" height="60" rx="10" class="d-box c"/><text x="445.0" y="115.0" text-anchor="middle" class="d-t b">Majority</text><text x="445.0" y="131.0" text-anchor="middle" class="d-t b">voter</text><line x1="490.0" y1="118.0" x2="520.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="522" y="95" width="70" height="46" rx="10" class="d-box"/><text x="557.0" y="123.0" text-anchor="middle" class="d-t b">Output</text></svg><figcaption>Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted.</figcaption></figure>

- **Standby sparing (dual redundancy):** a spare unit takes over when the active one fails (hot standby runs in step; cold standby is switched on when needed).
- **Information redundancy:** error-detecting and correcting codes (parity, CRC, ECC memory).
- **Watchdog timers:** the software must reset the timer regularly; if it hangs, the timer expires and resets the system or switches to a backup.

**(iii)**

- **N-version programming:** $N \ge 3$ teams independently write versions from the same specification; all run on the same input and a **voter** picks the majority result.
- **Recovery blocks:** the **primary** version runs; its result is checked by an **acceptance test**. If the test fails, the system rolls back to a checkpoint and runs an **alternate** version, and so on, until one passes or all fail.

**Shortcomings:**

- **Correlated faults:** independent teams often make the same mistakes (or share a wrong specification), so versions fail together and the voter is outvoted.
- **High cost:** developing and maintaining $N$ versions multiplies the effort.
- **Acceptance tests are hard to write**, and an imperfect test lets wrong results through.
- **Timing overhead:** running several versions, or rolling back and retrying, uses CPU time and can make the task miss its deadline.
:::

## Q4 Networks and QoS
(i) Describe the types of network in real-time communication. **(2 marks)** (ii) Describe five service quality parameters expected of the underlying network. **(8 marks)**

::: answer
**(i)**

- **Controller area network (CAN):** a short bus (typically under 50 m) inside a machine or vehicle that connects sensors, actuators and controllers. Messages win access by **priority arbitration**, so delay is bounded: suited to **hard** real-time traffic. *Example:* engine, brake and airbag units in a car.
- **Local area network (LAN):** connects computers in one building or plant. Ordinary Ethernet is not deterministic, so real-time LANs use modified protocols (token-based, time-triggered or switched industrial Ethernet such as PROFINET and EtherCAT). *Example:* PLCs and SCADA stations in one factory.
- **Internet / wide area network:** covers cities or countries; delay varies with traffic and routing, so there is **no hard guarantee**. Used for **soft** real-time work such as remote monitoring and supervision. *Example:* a utility monitoring substations from a control centre.

**(ii)**

- **Delay (latency):** time for a message to travel from source to destination; must be bounded and short.
- **Delay jitter:** the variation in delay between messages of one session; high jitter makes periodic control or audio irregular.
- **Bandwidth (throughput):** data rate the connection is guaranteed; must cover the peak needs of the application.
- **Loss rate:** the fraction of packets lost or corrupted, $\text{loss rate} = \dfrac{\text{packets lost}}{\text{packets sent}}$; must be very low.
- **Blocking probability:** the chance that a new connection request is refused because resources are short.
- **Mean opinion score (MOS):** for voice and video, user-rated quality on a 1 (bad) to 5 (excellent) scale.

Any five, each with a line of explanation, earn the marks.
:::

## Q5 EDF (Table 2)
Three tasks are scheduled under EDF: T1 (r = 0, C = 1, D = 4, T = 4), T2 (0, 2, 6, 6), T3 (0, 3, 8, 8). (i) Test whether the set is schedulable and satisfies the EDF condition. **(4 marks)** (ii) If it can be scheduled, draw the schedule. **(6 marks)**

::: answer
**(i) Test.** With $D_i = T_i$, EDF on one processor is optimal: the set is schedulable **if and only if** $U \le 1$.
$$U = \frac{1}{4} + \frac{2}{6} + \frac{3}{8} = 0.250 + 0.333 + 0.375 = 0.958 \le 1$$
**The set is schedulable under EDF**, with the processor busy 95.8% of the time.

**(ii) Schedule** over the major cycle $\operatorname{lcm}(4, 6, 8) = 24$. At each instant the ready job with the earliest absolute deadline runs; on a tie the running job continues.

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="EDF schedule of Table 2 over the hyperperiod (24). At each instant the ready job with the earliest absolute deadline runs; ties keep the running job. Every deadline is met (U ≈ 0.958); the only idle slot is 23–24."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="52.0" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="74.1" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="118.2" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="184.5" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="206.6" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="250.8" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="272.8" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="339.1" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="361.2" y="62" width="44.2" height="30" rx="4" class="d-box b"/><rect x="405.3" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="427.4" y="106" width="66.2" height="30" rx="4" class="d-box c"/><rect x="493.7" y="18" width="22.1" height="30" rx="4" class="d-box a"/><rect x="515.8" y="62" width="44.2" height="30" rx="4" class="d-box b"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="140.3" y1="50.0" x2="140.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="50.0" x2="228.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="50.0" x2="317.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="50.0" x2="405.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="493.7" y1="50.0" x2="493.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="50.0" x2="582.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="94.0" x2="184.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="94.0" x2="449.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="138.0" x2="228.7" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="138.0" x2="405.3" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="138.0" x2="582.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="150.0" x2="96.2" y2="155.0" class="d-ax"/><text x="96.2" y="170.0" text-anchor="middle" class="d-t s m">2</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">4</text><line x1="184.5" y1="150.0" x2="184.5" y2="155.0" class="d-ax"/><text x="184.5" y="170.0" text-anchor="middle" class="d-t s m">6</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">8</text><line x1="272.8" y1="150.0" x2="272.8" y2="155.0" class="d-ax"/><text x="272.8" y="170.0" text-anchor="middle" class="d-t s m">10</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">12</text><line x1="361.2" y1="150.0" x2="361.2" y2="155.0" class="d-ax"/><text x="361.2" y="170.0" text-anchor="middle" class="d-t s m">14</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">16</text><line x1="449.5" y1="150.0" x2="449.5" y2="155.0" class="d-ax"/><text x="449.5" y="170.0" text-anchor="middle" class="d-t s m">18</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">20</text><line x1="537.8" y1="150.0" x2="537.8" y2="155.0" class="d-ax"/><text x="537.8" y="170.0" text-anchor="middle" class="d-t s m">22</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">24</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>EDF schedule of Table 2 over the hyperperiod (24). At each instant the ready job with the earliest absolute deadline runs; ties keep the running job. Every deadline is met (U ≈ 0.958); the only idle slot is 23–24.</figcaption></figure>

| Time | 0–1 | 1–3 | 3–6 | 6–7 | 7–9 | 9–10 | 10–13 | 13–14 | 14–16 | 16–17 | 17–20 | 20–21 | 21–23 | 23–24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Runs | T1 | T2 | T3 | T1 | T2 | T1 | T3 | T1 | T2 | T1 | T3 | T1 | T2 | idle |
:::

## Q6 Traffic models
Describe any two traffic specification models that can satisfactorily specify bursty traffic. **(10 marks)**

::: answer
Bursty traffic sends packets in clumps, so a peak rate alone over-reserves and an average alone under-reserves. Two models bound both:

- **$(X_{min}, X_{avg}, S_{max}, I)$ model.** $X_{min}$ = minimum time between two packets, $S_{max}$ = maximum packet size, $X_{avg}$ = average inter-arrival time measured over any interval of length $I$. The peak rate is $S_{max}/X_{min}$ and the average rate is $S_{max}/X_{avg}$, so the model bounds **both** peak and average rate and describes variable-bit-rate traffic well.
- **$(\sigma, \rho)$ model (token bucket).** $\sigma$ = maximum burst size, $\rho$ = long-term average rate. A source conforms if, in **every** interval of length $t$, the bits it sends are at most $\sigma + \rho t$. A token bucket of depth $\sigma$ filled at rate $\rho$ enforces it.

*Worked example ($\sigma$, $\rho$):* a sensor gateway has $\sigma = 4$ kbit and $\rho = 64$ kbit/s. In any 50 ms it may send at most $4 + 64 \times 0.05 = 7.2$ kbit. For a burst of 6 kbit in 20 ms the bound is $4 + 64 \times 0.02 = 5.28$ kbit. Since $6 > 5.28$, the burst **does not conform**, and the extra 0.72 kbit must be delayed (shaped) or dropped (policed).

**Shaping vs policing** (often asked with this question): a *shaper* buffers packets above the agreed rate and sends them later, smoothing bursts at the cost of delay; a *policer* drops (or marks) the excess at once, adding no delay but losing data.
:::
