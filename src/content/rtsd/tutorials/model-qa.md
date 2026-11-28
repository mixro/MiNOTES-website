**Selected model questions** from the "Real-Time Systems: Model QnA" handout (Prof. R. Mall, NPTEL course), answered again in our own words and matched to the notes. Its scheduling numericals (table-driven length, cyclic frame size, the four-task RMA test) are worked in *Question bank, part 1*, and its traffic-model question in the *February 2022* paper; this page covers the rest that fits the module.

> **Errors found in the handout.**
> - **True/false (ii)** "PSOS and VRTX support EDF scheduling" is marked **TRUE**, but its own justification explains why EDF is *not* supported. The answer is **FALSE** (M1).
> - **Cyclic frame-size question:** the list of candidate frames leaves out 48, 50, 75, 80 and 240; **48 ms** is feasible as well as 30 and 40 ms (see *Question bank, part 1*, Q2).
> - **Table-driven schedule with dependencies:** the dependency table cannot be scheduled under any single reading of its column, and the printed answer only fits a mixed reading (M11).
> - **Four-task RMA question:** correct; the response-time test shows T1 finishes at 106 ms, after its 100 ms deadline.

## M1 True or false: RTOS
State TRUE or FALSE and justify: (i) Real-time processes run at higher priority than kernel processes in RTLinux. (ii) Commercial RTOSs such as PSOS and VRTX support EDF scheduling. (iii) Computation-intensive tasks dynamically take on higher priorities in Unix. (iv) Task switching time is on average larger than task pre-emption time. (v) Segmented addressing usually gives lower memory-access jitter than virtual addressing. (vi) Watchdog timers are used to start sensor and actuator tasks at regular intervals.

::: answer
- **(i) TRUE.** RTLinux runs the whole Linux kernel as the lowest-priority background task under its own small real-time kernel.
- **(ii) FALSE.** PSOS and VRTX offer only static priority levels, which suit RMA. EDF needs priorities recomputed at run time, which they do not support. *(The handout marks this TRUE, contradicting its own explanation.)*
- **(iii) FALSE.** Unix raises the priority of **I/O-bound** tasks, to keep the I/O devices busy; CPU-heavy tasks drift down.
- **(iv) FALSE.** Task switching is only *part* of pre-emption; pre-emption also compares priorities and updates the ready queue, so it takes longer.
- **(v) TRUE.** With virtual memory, an access may hit a page that is swapped out, giving large and unpredictable delays.
- **(vi) FALSE.** Periodic tasks are started by ordinary timers. A **watchdog** detects a hung task or missed deadline and triggers recovery (reset or exception handling).
:::

## M2 Synchronous vs asynchronous I/O
What is the difference between synchronous and asynchronous I/O? Which suits real-time applications?

::: answer
- **Synchronous (blocking) I/O:** the task calls read/write and is **blocked** until the device finishes the physical transfer.
- **Asynchronous (non-blocking) I/O:** the call returns as soon as the request is queued; the task keeps running and is told later (callback, signal or flag) when the transfer is done.

**Asynchronous I/O suits real-time systems**: a task is never held up for a slow, variable device time, so its own timing stays predictable, and computation overlaps with I/O.
:::

## M3 Unix and Windows NT for real time
What are the drawbacks of a traditional Unix kernel, and of Windows NT, for hard real-time applications?

::: answer
**Traditional Unix:**

- **Non-pre-emptive kernel:** a low-priority task inside a system call cannot be pre-empted, so high-priority tasks wait (priority inversion).
- **Dynamic priorities:** the OS keeps changing the priorities the programmer set, so RMA or EDF cannot be applied.
- **Device drivers in the kernel:** adding a device means relinking the kernel.
- **No real-time file services:** blocks are allocated on demand and scattered, so writes may fail and reads have jitter.
- **Coarse timers:** about 10 ms resolution, too coarse for many hard real-time tasks.

**Windows NT:**

- **Interrupt processing:** every ISR and deferred procedure call (DPC), even for an unimportant device, runs above all user threads, including real-time ones, so blocking can be long.
- **No resource-sharing protocol:** no priority inheritance or ceiling support for real-time tasks.
:::

## M4 Multithreading on one processor
Can multithreading give faster response times than single-threaded tasks even on a uniprocessor?

::: answer
**Yes.** In a single-threaded program, a long computation or a blocking call freezes everything, including the response to new inputs. With several threads, the long work runs in a background thread while a high-priority thread stays ready to respond at once. Threads also share one address space, so creating and switching them is cheaper than for separate processes.
:::

## M5 Dynamic priorities
Why do traditional operating systems change task priorities dynamically, and how does this affect real-time systems?

::: answer
A traditional OS aims at **good average response** for all users. I/O devices are slow compared with the CPU, so the OS raises the priority of a task each time it blocks for I/O; this keeps the I/O channels busy and interactive users happy.

For **real-time** systems this is unacceptable: the OS would overrule the priorities the designer chose from deadlines and periods, so a critical task could be pushed down, and no RMA or EDF analysis would hold. A real-time task's priority must not change behind the designer's back.
:::

## M6 Traffic shaping vs policing
Distinguish traffic shaping from policing.

::: answer
Both enforce a traffic contract such as $(\sigma, \rho)$.

| | Shaping | Policing |
|---|---|---|
| What it does to excess packets | **Buffers** them and sends them later | **Drops** (or marks) them |
| Effect on bursts | **Smooths** them (leaky bucket) | Passes bursts up to the limit, no smoothing |
| Advantage | No loss, so no re-transmission | No queuing delay |
| Disadvantage | Adds queuing delay | Lost packets reduce throughput |

Shaping is done by the sender; policing is done at the network entry point to protect other flows.
:::

## M7 QoS routing
What is QoS routing? Define additive, multiplicative and concave constraints.

::: answer
**QoS (constraint-based) routing** chooses a path that can **meet the QoS a connection asks for** (delay, bandwidth, loss) while keeping the network well used. Unlike shortest-path routing it considers link load and the flow's needs, so it may pick a longer but lightly loaded path.

For a path made of links $(i, j), (j, k), \ldots$ and a link metric $d$:

- **Additive:** $d(P) = d(i, j) + d(j, k) + \cdots$. *Example:* end-to-end **delay**, jitter.
- **Multiplicative:** $d(P) = d(i, j) \times d(j, k) \times \cdots$. *Example:* **reliability** (probability of delivery).
- **Concave:** $d(P) = \min\{d(i, j), d(j, k), \ldots\}$. *Example:* **bandwidth**: the path is only as wide as its narrowest link.

*Example:* links with delays 4, 6 and 5 ms, success probabilities 0.99, 0.98 and 0.99, and bandwidths 10, 4 and 8 Mbit/s give a path delay of 15 ms, a reliability of $0.99 \times 0.98 \times 0.99 = 0.960$, and a bandwidth of 4 Mbit/s.
:::

## M8 Real-time vs conventional databases
List the important differences between a real-time database and a conventional one. Why is traditional two-phase locking (2PL) unsuitable for real-time databases?

::: answer
**Differences:**

- **Timing constraints:** real-time transactions have **deadlines**; conventional ones do not.
- **Temporal data:** real-time data (sensor readings) is valid only for a limited time and goes stale; conventional data stays valid until changed.
- **Performance measure:** real-time: the fraction of transactions that meet their deadlines; conventional: average throughput and response time.

**Why 2PL fails in real time:** a high-priority transaction can wait for a lock held by a low-priority one (**priority inversion**), blocking can be long and unbounded, deadlocks are possible, and lock decisions ignore deadlines. Real-time variants (2PL-HP, which aborts the low-priority holder) or optimistic concurrency control are used instead.
:::

## M9 Data validity
A relative consistency set R = {position, velocity, acceleration} has a relative validity interval of 100 ms. The data items are (value, timestamp, absolute validity interval): position = (25 m, 2500 ms, 200 ms), velocity = (300 m/s, 2550 ms, 300 ms), acceleration = (20 m/s², 2425 ms, 200 ms). The current time is 2600 ms. Are the items absolutely valid? Are they relatively consistent?

::: answer
**Absolute validity:** age = current time − timestamp must be ≤ the item's validity interval.

| Item | Age (ms) | Limit (ms) | Valid? |
|---|---|---|---|
| Position | 2600 − 2500 = 100 | 200 | ✓ |
| Velocity | 2600 − 2550 = 50 | 300 | ✓ |
| Acceleration | 2600 − 2425 = 175 | 200 | ✓ |

**All three are absolutely valid.**

**Relative consistency:** every pair of timestamps must differ by at most 100 ms.

- Position–velocity: |2500 − 2550| = 50 ✓
- Position–acceleration: |2500 − 2425| = 75 ✓
- Velocity–acceleration: |2550 − 2425| = 125 > 100 ✗

**The set is not relatively consistent**, because velocity and acceleration were sampled too far apart to be combined (e.g. in a position estimate).
:::

## M10 RTOS features
List the important features an RTOS must support.

::: answer
- Real-time priority levels that the OS does not change.
- Fast task pre-emption.
- Predictable and fast interrupt latency.
- Support for resource sharing among real-time tasks (PIP, PCP).
- Real-time memory management (memory locking, no unpredictable paging).
- Asynchronous I/O (M2).
- High-resolution timers.
:::

## M11 Table-driven schedule with dependencies
Four tasks with zero phase repeat every 90 ms: T1 ($e = 30$, $d = 90$), T2 ($e = 15$, $d = 40$, dependency: T1, T3), T3 ($e = 20$, $d = 40$, dependency: T1), T4 ($e = 10$, $d = 70$, dependency: T2). Find a feasible schedule for a table-driven scheduler.

::: answer
**Method.** (1) Respect the precedence (a task runs only after its predecessors). (2) Among ready tasks, run the one with the earliest deadline, or build the schedule backwards: place the task with the latest deadline last, as late as possible, then move everything as early as possible.

**The table is inconsistent.** Read "dependency" as "must run after":

- T1 → T3 → T2 → T4. T1 alone takes 0–30, so T3 cannot finish before 50, past its deadline of 40. **Infeasible.**

Read it the other way, as "must run before":

- T4 → T2 → T3 → T1 gives T4 0–10, T2 10–25, T3 25–45, past T3's deadline of 40. **Infeasible.**

**The handout's answer** is T2 0–15, T3 15–35, T4 35–45, T1 45–75, which meets every deadline (15 ≤ 40, 35 ≤ 40, 45 ≤ 70, 75 ≤ 90). It matches neither reading: it assumes T2 before T1 and T3, T3 before T1, and T2 before T4. In an exam, **state the reading you assume**, then apply the method; with the handout's precedences, its schedule is correct.
:::
