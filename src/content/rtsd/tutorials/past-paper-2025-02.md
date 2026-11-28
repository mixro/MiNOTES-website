**End of semester examination, 13 February 2025** (Semester I 2024/2025, CSEU 08104). Section A: answer all (20 marks). Section B: any four (40 marks). Each answer ends with a check of the "past paper attempt (model answers)" document shared with the class.

> **Summary of the model-answer check.** Most of it is correct. Points to fix:
> - **Q1 (c), (e), (g), (i)** come from a well-known RTOS multiple-choice bank, and the model answers miss the key word the marker is likely to look for: priorities *keep varying* under EDF (c), the *foreground/background* split (e), priority *must not degrade over time* (g), and *soft* real time (i). Details below.
> - **Q1 (j):** the working ($\sum C/D = 0.917$) is right, but it should say this is the *sufficient* (density) test and also show $U = 0.617$ as the necessary condition. 0.9166 rounds to **0.917**, not 0.916.
> - **Q1 (i):** "RTOS" names a kind of operating system, not a *type of real-time system*.

## Q1 (a) Binary vs counting semaphore
Differentiate between a binary semaphore and a counting semaphore in the context of real-time systems. **(1 mark)**

::: answer
| Binary semaphore | Counting semaphore |
|---|---|
| Value only 0 or 1 | Value 0 to $N$ |
| Guards **one** resource (mutual exclusion) or signals one event | Guards a pool of $N$ **identical** resources, or counts events |
| *Example:* one shared UART | *Example:* 4 identical DMA buffers |

In an RTOS a *mutex* is a binary semaphore with an owner and priority inheritance, which a plain binary semaphore does not have.

**Model answer check:** correct.
:::

## Q1 (b) Rate of a task
If the period of a process is $p$, what is the rate of the task? **(1 mark)**

::: answer
$$\text{rate} = \frac{1}{p}$$
For example, $p = 20$ ms gives 50 jobs per second (50 Hz).

**Model answer check:** correct.
:::

## Q1 (c) Priorities of P1 and P2
P1 has a period of 50 and a CPU burst $t_1 = 25$; P2 has a period of 80 and a CPU burst of 35. The priorities of P1 and P2 are ___? **(2 marks)**

::: answer
**Under rate monotonic (static) scheduling:** P1 has the shorter period, so **P1 has the higher priority**, fixed for ever. But this set fails under RM:
$$U = \frac{25}{50} + \frac{35}{80} = 0.500 + 0.4375 = 0.94 > 2(2^{1/2} - 1) = 0.828$$
and response-time analysis gives $R_2 = 35 \to 35 + 25 = 60 \to 35 + 2(25) = 85 > 80$, so **P2 misses its deadline at 80**:

<figure class="fig"><svg viewBox="0 0 600 150" role="img" aria-label="P1 (25, 50) and P2 (35, 80) under rate monotonic. P2 has only 25 of its 35 units done by t = 80 and misses its deadline (✕), although U = 0.94 < 1."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">P1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">P2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><rect x="52.0" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="134.8" y="62" width="82.8" height="30" rx="4" class="d-box b"/><rect x="217.6" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="300.4" y="62" width="82.8" height="30" rx="4" class="d-box b"/><rect x="383.2" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="466.1" y="62" width="66.2" height="30" rx="4" class="d-box b"/><rect x="548.9" y="18" width="33.1" height="30" rx="4" class="d-box a"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="217.6" y1="50.0" x2="217.6" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="383.2" y1="50.0" x2="383.2" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="548.9" y1="50.0" x2="548.9" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><text x="317.0" y="81.0" text-anchor="middle" class="d-t b r">✕</text><line x1="52.0" y1="106.0" x2="590.0" y2="106.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="106.0" x2="52.0" y2="111.0" class="d-ax"/><text x="52.0" y="126.0" text-anchor="middle" class="d-t s m">0</text><line x1="118.2" y1="106.0" x2="118.2" y2="111.0" class="d-ax"/><text x="118.2" y="126.0" text-anchor="middle" class="d-t s m">20</text><line x1="184.5" y1="106.0" x2="184.5" y2="111.0" class="d-ax"/><text x="184.5" y="126.0" text-anchor="middle" class="d-t s m">40</text><line x1="250.8" y1="106.0" x2="250.8" y2="111.0" class="d-ax"/><text x="250.8" y="126.0" text-anchor="middle" class="d-t s m">60</text><line x1="317.0" y1="106.0" x2="317.0" y2="111.0" class="d-ax"/><text x="317.0" y="126.0" text-anchor="middle" class="d-t s m">80</text><line x1="383.2" y1="106.0" x2="383.2" y2="111.0" class="d-ax"/><text x="383.2" y="126.0" text-anchor="middle" class="d-t s m">100</text><line x1="449.5" y1="106.0" x2="449.5" y2="111.0" class="d-ax"/><text x="449.5" y="126.0" text-anchor="middle" class="d-t s m">120</text><line x1="515.8" y1="106.0" x2="515.8" y2="111.0" class="d-ax"/><text x="515.8" y="126.0" text-anchor="middle" class="d-t s m">140</text><line x1="582.0" y1="106.0" x2="582.0" y2="111.0" class="d-ax"/><text x="582.0" y="126.0" text-anchor="middle" class="d-t s m">160</text><text x="590.0" y="144.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>P1 (25, 50) and P2 (35, 80) under rate monotonic. P2 has only 25 of its 35 units done by t = 80 and misses its deadline (✕), although U = 0.94 < 1.</figcaption></figure>

**Under EDF:** priorities follow the absolute deadlines, so they **keep varying from time to time** (at $t = 0$ P1, deadline 50, is higher; at $t = 50$ P2's deadline 80 is earlier than P1's new deadline 100, so P2 is higher). Since $U = 0.94 \le 1$, EDF meets every deadline.

The question comes from a standard multiple-choice bank whose answer is "keep varying from time to time", that is, the EDF view. Give both views in an exam.

**Model answer check:** gives only the RM answer (P1 higher). Correct as far as it goes, but it misses that RM fails for this set and that under EDF the priorities vary.
:::

## Q1 (d) Interrupt latency
Why does interrupt latency happen? **(2 marks)**

::: answer
Interrupt latency is the time from the interrupt signal to the first instruction of its ISR. It happens because:

- the CPU first **finishes the current instruction** (long instructions take several cycles);
- **interrupts are disabled** for a while, in kernel or application critical sections;
- a **higher-priority ISR** is already running and must finish first;
- the CPU must **save the context** (registers, program counter) and look up the vector;
- a **non-pre-emptive kernel** may delay the switch until a system call ends.

An RTOS keeps it small and, above all, **bounded**.

**Model answer check:** correct.
:::

## Q1 (e) Parts of the software
In an interrupt-driven RTOS environment, into how many parts does the interrupt split the software? **(2 marks)**

::: answer
**Two parts:**

- **Foreground:** the interrupt service routines, which run in response to interrupts.
- **Background:** the main program (or the tasks), which runs when no interrupt is being serviced and is "transparent" to the interrupt mechanism.

Good practice is to keep the foreground short (just move data and set a flag) and do the heavy processing in the background.

**Model answer check:** says two parts, but calls them *top half* and *bottom half*. That is a Linux term for splitting the ISR's own work; the expected split is **foreground (ISRs) and background (main program)**.
:::

## Q1 (f) Security
How do you ensure security in a real-time system? **(2 marks)**

::: answer
- **Access control and authentication** of users, devices and messages (passwords, keys, role-based access).
- **Encryption and message authentication** on communication links, chosen so the delay stays within the deadline.
- **Secure boot and signed firmware updates**, so only trusted code runs.
- **Memory protection and partitioning** (MPU), so a faulty or attacked task cannot overwrite others.
- **Intrusion detection and monitoring**, with a safe reaction when an attack is found.

**Model answer check:** correct.
:::

## Q1 (g) Priority of a real-time task
What is the priority of a real-time task? **(2 marks)**

::: answer
The priority is a number that tells the scheduler which ready task runs first. It is set from the task's urgency: shorter period (RM), shorter deadline (DM) or earliest absolute deadline (EDF).

The key property: the priority of a real-time task **must not degrade over time**. A general-purpose OS lowers the priority of CPU-heavy tasks and raises I/O-bound ones (aging); a real-time OS must keep the priority the designer set, or the schedulability analysis no longer holds.

**Model answer check:** describes priority correctly but misses the main point, that a real-time priority must not degrade (change) over time.
:::

## Q1 (h) Stability and redundancy
How do you manage system stability and redundancy in a real-time system? **(2 marks)**

::: answer
**Stability** (the system stays predictable under load and faults):

- schedulability analysis so the worst-case load fits ($U$ under the bound);
- overload handling: admission control, and shedding soft tasks first so critical tasks keep their deadlines;
- watchdog timers that reset or switch over a hung unit;
- in control loops, a fixed sampling period with low jitter so the controller stays stable.

**Redundancy:** hardware (TMR, standby spares, redundant sensors), software (N-version programming, recovery blocks), information (CRC, ECC) and time (retry, re-transmission).

**Model answer check:** correct.
:::

## Q1 (i) Type of real time
What type of real-time system does preemptive, priority-based scheduling support? **(2 marks)**

::: answer
**Soft real time.** A pre-emptive, priority-based scheduler makes sure the most urgent ready task always runs first, but on its own it **guarantees only soft real-time** behaviour: nothing stops the tasks from overloading the CPU.

**Hard real time** needs more: a schedulability test or admission control so that every deadline is guaranteed, bounded interrupt and dispatch latency, and resource protocols such as PCP. Pre-emptive priority scheduling is necessary for hard real time, but not sufficient.

**Model answer check:** "RTOS (FreeRTOS, VxWorks, QNX)" names operating systems, not a *type* of real-time system. The expected answer is **soft** real time (with the note on hard real time above).
:::

## Q1 (j) EDF with phases and D < T
| Task | Starting time (ms) | Execution time (ms) | Period (ms) | Deadline (ms) |
|---|---|---|---|---|
| Task 1 | 20 | 25 | 150 | 100 |
| Task 2 | 40 | 10 | 50 | 30 |
| Task 3 | 60 | 50 | 200 | 150 |

Determine whether the task set is schedulable on a uniprocessor using EDF. Show all intermediate steps. **(3 marks)**

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

**Model answer check:** the conclusion and the $\sum C/D = 0.917$ working are right. Add the necessary condition $U = 0.617 \le 1$, say that $\sum C/D \le 1$ is a *sufficient* test for $D < T$, and round 0.9166 to 0.917.
:::

## Q2 Reliable design
(a) What steps would you take to design a real-time system with high reliability requirements? **(6 marks)** (b) Discuss issues in a real-time system scenario. **(4 marks)**

::: answer
**(a)**

1. **Specify the requirements:** functions, timing constraints (deadlines, periods, jitter), the required reliability (e.g. failure rate) and the safe states, if any.
2. **Analyse hazards and failure modes** (FMEA, fault trees) to find which faults matter most.
3. **Choose deterministic hardware and an RTOS:** reliable, derated components; bounded interrupt latency; static memory allocation.
4. **Schedule for the worst case:** worst-case execution times, RM/EDF tests, PCP for shared resources, and spare capacity.
5. **Build in fault tolerance:** hardware redundancy (TMR, standby), software diversity (N-version, recovery blocks), watchdog timers, CRC/ECC, fail-safe or degraded modes.
6. **Verify and validate:** reviews, unit, integration and timing tests, stress and fault-injection tests, and simulation (hardware-in-the-loop) before deployment.
7. **Monitor in service:** logging, health checks and safe update procedures.

**(b)** Main issues:

- **Meeting deadlines under worst-case load** and transient overload.
- **Recovering from failures** of hardware, software and communication.
- **Resource sharing:** race conditions, priority inversion, deadlock.
- **Distributed architectures:** network delay and jitter, clock synchronisation, asynchronous communication.
- **Interrupt latency and timing jitter.**
- **Limited resources:** memory, power and processing in embedded hardware.

**Model answer check:** correct; (b) is a little short on explanation for 4 marks.
:::

## Q3 Networks and QoS
(a) Describe the types of network in real-time communication. **(4 marks)** (b) Explain five service quality parameters expected of the underlying network. **(6 marks)**

::: answer
**(a)**

- **Controller area network (CAN):** a short bus (typically under 50 m) inside a machine or vehicle that connects sensors, actuators and controllers. Messages win access by **priority arbitration**, so delay is bounded: suited to **hard** real-time traffic. *Example:* engine, brake and airbag units in a car.
- **Local area network (LAN):** connects computers in one building or plant. Ordinary Ethernet is not deterministic, so real-time LANs use modified protocols (token-based, time-triggered or switched industrial Ethernet such as PROFINET and EtherCAT). *Example:* PLCs and SCADA stations in one factory.
- **Internet / wide area network:** covers cities or countries; delay varies with traffic and routing, so there is **no hard guarantee**. Used for **soft** real-time work such as remote monitoring and supervision. *Example:* a utility monitoring substations from a control centre.

**(b)**

- **Delay (latency):** time for a message to travel from source to destination; must be bounded and short.
- **Delay jitter:** the variation in delay between messages of one session; high jitter makes periodic control or audio irregular.
- **Bandwidth (throughput):** data rate the connection is guaranteed; must cover the peak needs of the application.
- **Loss rate:** the fraction of packets lost or corrupted, $\text{loss rate} = \dfrac{\text{packets lost}}{\text{packets sent}}$; must be very low.
- **Blocking probability:** the chance that a new connection request is refused because resources are short.
- **Mean opinion score (MOS):** for voice and video, user-rated quality on a 1 (bad) to 5 (excellent) scale.

Any five, each with a line of explanation, earn the marks.

**Model answer check:** (a) lists fieldbus, industrial Ethernet, wireless and WAN: acceptable, though the notes classify networks as CAN, LAN and Internet. (b) names the parameters but gives no explanation, which a 6-mark question needs.
:::

## Q4 Deadlocks
(c) What do you mean by deadlock? **(2 marks)** (d) What are the four necessary conditions for deadlock? **(2 marks)** (e) Explain the deadlock detection algorithm for single-instance and multiple-instance resource types. **(6 marks)**

::: answer
**(c)** A **deadlock** is a state in which a set of tasks wait for ever, because each holds a resource and waits for a resource held by another task in the set. *Example:* P1 holds R1 and waits for R2, while P2 holds R2 and waits for R1.

**(d)** All four must hold at once (Coffman conditions):

1. **Mutual exclusion:** a resource is used by one task at a time.
2. **Hold and wait:** a task holds resources while waiting for more.
3. **No pre-emption:** a resource is released only voluntarily.
4. **Circular wait:** a closed chain of tasks, each waiting for the next.

**(e) Single instance of each resource: wait-for graph.**

1. Build the resource-allocation graph, then remove the resource nodes: draw $P_i \to P_j$ when $P_i$ waits for a resource held by $P_j$.
2. Search the graph for a cycle (depth-first search, $O(n^2)$).
3. **A cycle means deadlock**, and the tasks on it are deadlocked. No cycle, no deadlock.

<figure class="fig"><svg viewBox="0 0 600 270" role="img" aria-label="Wait-for graph (Example 1). Removing the resources from the allocation graph leaves P1 → P2 → P3 → P4 → P1: a closed cycle, so the four processes are deadlocked."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="140.0" y="18.0" text-anchor="middle" class="d-t b">Resource allocation graph</text><circle cx="60" cy="60" r="20" class="d-box a"/><text x="60.0" y="65.0" text-anchor="middle" class="d-t s">P1</text><circle cx="220" cy="60" r="20" class="d-box a"/><text x="220.0" y="65.0" text-anchor="middle" class="d-t s">P2</text><circle cx="220" cy="200" r="20" class="d-box a"/><text x="220.0" y="205.0" text-anchor="middle" class="d-t s">P3</text><circle cx="60" cy="200" r="20" class="d-box a"/><text x="60.0" y="205.0" text-anchor="middle" class="d-t s">P4</text><rect x="123" y="30" width="34" height="30" rx="4" class="d-box b"/><text x="140.0" y="50.0" text-anchor="middle" class="d-t s">R1</text><rect x="218" y="115" width="34" height="30" rx="4" class="d-box b"/><text x="235.0" y="135.0" text-anchor="middle" class="d-t s">R4</text><rect x="123" y="200" width="34" height="30" rx="4" class="d-box b"/><text x="140.0" y="220.0" text-anchor="middle" class="d-t s">R3</text><rect x="28" y="115" width="34" height="30" rx="4" class="d-box b"/><text x="45.0" y="135.0" text-anchor="middle" class="d-t s">R2</text><line x1="81.6" y1="55.9" x2="118.4" y2="49.1" class="d-ax" marker-end="url(#ah)"/><line x1="161.6" y1="49.1" x2="198.4" y2="55.9" class="d-ax" marker-end="url(#ah)"/><line x1="224.6" y1="81.5" x2="230.4" y2="108.5" class="d-ax" marker-end="url(#ah)"/><line x1="230.4" y1="151.5" x2="224.6" y2="178.5" class="d-ax" marker-end="url(#ah)"/><line x1="198.4" y1="204.1" x2="161.6" y2="210.9" class="d-ax" marker-end="url(#ah)"/><line x1="118.4" y1="210.9" x2="81.6" y2="204.1" class="d-ax" marker-end="url(#ah)"/><line x1="55.4" y1="178.5" x2="49.6" y2="151.5" class="d-ax" marker-end="url(#ah)"/><line x1="49.6" y1="108.5" x2="55.4" y2="81.5" class="d-ax" marker-end="url(#ah)"/><text x="140.0" y="258.0" text-anchor="middle" class="d-t s m">P → R: requests · R → P: holds</text><line x1="300.0" y1="130.0" x2="340.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="470.0" y="18.0" text-anchor="middle" class="d-t b">Wait-for graph</text><line x1="422.0" y1="60.0" x2="516.0" y2="60.0" class="d-r w" marker-end="url(#ah)"/><line x1="540.0" y1="82.0" x2="540.0" y2="176.0" class="d-r w" marker-end="url(#ah)"/><line x1="518.0" y1="200.0" x2="424.0" y2="200.0" class="d-r w" marker-end="url(#ah)"/><line x1="400.0" y1="178.0" x2="400.0" y2="84.0" class="d-r w" marker-end="url(#ah)"/><circle cx="400" cy="60" r="20" class="d-box a"/><text x="400.0" y="65.0" text-anchor="middle" class="d-t s">P1</text><circle cx="540" cy="60" r="20" class="d-box a"/><text x="540.0" y="65.0" text-anchor="middle" class="d-t s">P2</text><circle cx="540" cy="200" r="20" class="d-box a"/><text x="540.0" y="205.0" text-anchor="middle" class="d-t s">P3</text><circle cx="400" cy="200" r="20" class="d-box a"/><text x="400.0" y="205.0" text-anchor="middle" class="d-t s">P4</text><text x="470.0" y="135.0" text-anchor="middle" class="d-t s r">cycle ⇒</text><text x="470.0" y="152.0" text-anchor="middle" class="d-t s r">deadlock</text></svg><figcaption>Wait-for graph (Example 1). Removing the resources from the allocation graph leaves P1 → P2 → P3 → P4 → P1: a closed cycle, so the four processes are deadlocked.</figcaption></figure>

**Several instances of each resource: matrix algorithm.** For $n$ tasks and $m$ resource types keep *Available* ($m$), *Allocation* ($n \times m$) and *Request* ($n \times m$, what each task is waiting for now).

1. *Work* = *Available*; *Finish[i]* = true if task $i$ holds nothing, else false.
2. Find a task with *Finish[i]* = false and *Request[i]* ≤ *Work*. If none, go to step 4.
3. Assume it finishes: *Work* = *Work* + *Allocation[i]*, *Finish[i]* = true; go to step 2.
4. Any task with *Finish[i]* = false is **deadlocked**.

A wait-for graph cannot be used here, because a cycle no longer proves deadlock when there are several instances.

**Model answer check:** correct, and it rightly uses the *Request* matrix (the Banker's algorithm, which uses *Need*, is for **avoidance**, not detection).
:::

## Q5 Fault tolerance and thread safety
(a) Explain why hardware fault tolerance is easy to achieve compared to software fault tolerance. **(4 marks)** (b) Explain how you can achieve thread safety when developing a real-time application. **(3 marks)** (c) Explain the main techniques available to achieve hardware fault tolerance. **(3 marks)**

::: answer
**(a)**

- **Hardware faults are mostly random and independent.** Components wear out or fail at random, so a duplicate unit almost never fails at the same moment. Adding identical spares (redundancy) therefore works.
- **Software faults are design faults.** A bug is present in every copy of the program, so running identical copies gives no protection: all copies fail together on the same input. Tolerating software faults needs *different* versions (design diversity), which is expensive, and even independently written versions tend to share mistakes (correlated faults).
- **Hardware faults are easier to detect:** parity, ECC, watchdogs and self-tests catch them; a software fault may appear only under rare input and timing conditions.
- **Hardware is simpler and well modelled** (failure rates are known), while software is very complex, so its reliability is hard to predict.

**(b)** Code is **thread-safe** when it works correctly while several tasks run it or share its data at the same time.

- Protect shared data with a **mutex** (with priority inheritance or ceiling, to avoid unbounded priority inversion); keep critical sections short.
- Use **semaphores or message queues** to pass data between tasks instead of sharing variables.
- Use **atomic operations** or briefly disable interrupts for very small updates shared with an ISR.
- Write **re-entrant** functions: local variables only, no static buffers (e.g. `strtok_r` instead of `strtok`).
- Lock resources in a **fixed global order** to avoid deadlock.

**(c)**

- **Built-in self-test (BIST):** the system tests its own memory, processor and I/O at start-up and periodically, and switches to a spare when a fault is found.
- **Triple modular redundancy (TMR):** three identical units work on the same input and a **voter** takes the majority output, so one faulty unit is masked. The voter itself must be very reliable.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="10" y="95" width="80" height="46" rx="10" class="d-box"/><text x="50.0" y="123.0" text-anchor="middle" class="d-t b">Input</text><rect x="170" y="20" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="48.0" text-anchor="middle" class="d-t b">Module 1</text><line x1="90.0" y1="118.0" x2="168.0" y2="43.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="43.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="98" width="130" height="46" rx="10" class="d-box b"/><text x="235.0" y="118.0" text-anchor="middle" class="d-t b">Module 2</text><text x="235.0" y="134.0" text-anchor="middle" class="d-t b">(faulty)</text><line x1="90.0" y1="118.0" x2="168.0" y2="121.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="121.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="176" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="204.0" text-anchor="middle" class="d-t b">Module 3</text><line x1="90.0" y1="118.0" x2="168.0" y2="199.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="199.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="400" y="88" width="90" height="60" rx="10" class="d-box c"/><text x="445.0" y="115.0" text-anchor="middle" class="d-t b">Majority</text><text x="445.0" y="131.0" text-anchor="middle" class="d-t b">voter</text><line x1="490.0" y1="118.0" x2="520.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="522" y="95" width="70" height="46" rx="10" class="d-box"/><text x="557.0" y="123.0" text-anchor="middle" class="d-t b">Output</text></svg><figcaption>Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted.</figcaption></figure>

- **Standby sparing (dual redundancy):** a spare unit takes over when the active one fails (hot standby runs in step; cold standby is switched on when needed).
- **Information redundancy:** error-detecting and correcting codes (parity, CRC, ECC memory).
- **Watchdog timers:** the software must reset the timer regularly; if it hangs, the timer expires and resets the system or switches to a backup.

**Model answer check:** correct.
:::
