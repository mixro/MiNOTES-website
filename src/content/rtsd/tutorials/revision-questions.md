**Revision questions** from the end of the lecture notes, with full answers. Where the notes only say "refer from notes", the answer has been written out. Two questions (29 and 31) lost their task tables in the source, so a stand-in task set is used and marked.

## Q1
With a suitable example, explain the difference between the traditional notion of time and real time.

::: answer
- **Real time** is **absolute, quantitative** time, measured by a clock: "the valve must close within 50 ms of the alarm".
- The **traditional (logical) notion of time** used in ordinary software is **qualitative**: it only fixes the **order of events** ("after A, then B") and says nothing about how long it takes.

*Example:* library software says "after a *query book* command, the details of matching books are displayed". Only the order matters; a reply in 2 s or 5 s is still correct. In an anti-lock brake controller, "release the brake **within 5 ms** of wheel lock" is real time: a correct reply after 20 ms is a failure.
:::

## Q2
Explain the important differences between hard, firm and soft real-time systems.

::: answer
| | Hard | Firm | Soft |
|---|---|---|---|
| Missed deadline | **System failure**, possibly catastrophic | Result **useless, discarded**; system continues | Quality **degrades gradually** |
| Value after deadline | Negative (damage) | Zero | Decreasing |
| Penalty vs reward | Penalty orders of magnitude larger | Same order | Small |
| Constraint stated as | Absolute bound | Absolute bound | **Average** response time |
| Examples | Airbag, pacemaker, reactor shutdown, avionics | Video conferencing frames, stock prices, online exam | Web browsing, streaming, reservations |
:::

## Q3
List the different types of timing constraints that can occur in a real-time system.

::: answer
Two classes, **performance constraints** and **behavioural constraints**. Each can be one of three types:

1. **Delay constraint:** at least a minimum time must pass between two events.
2. **Deadline constraint:** at most a maximum time may pass between two events.
3. **Duration constraint:** an event must last for a given minimum or maximum time.
:::

## Q4
What is the difference between a performance constraint and a behavioural constraint?

::: answer
- A **performance constraint** is imposed on the **system's response**: it makes sure the **computer performs satisfactorily**. *Example:* the alarm must sound within 1 s of high pressure.
- A **behavioural constraint** is imposed on the **stimuli from the environment**: it makes sure the **environment is well behaved**. *Example:* the operator must not press the button more than once every 200 ms.
:::

## Q5
It is difficult to achieve software fault tolerance compared with hardware fault tolerance. Why?

::: answer
Hardware fault tolerance uses **redundancy**, and it works because physical faults are **random and independent**: two copies rarely fail together.

Software faults are **design faults**. Different versions of a component show **statistically correlated failures**: they tend to fail on the same inputs for the same reasons, so redundancy helps much less. Running extra versions or alternates also takes time, so it can only be used for tasks with **large deadlines**.
:::

## Q6
What is a fail-safe state? Since safety-critical systems do not have one, how is safety guaranteed?

::: answer
A **fail-safe state** is a state that, if entered when the system fails, causes **no damage**. A traffic light can go to flashing red; a word processor can stop. Ordinary systems have one or more.

A **safety-critical** system (aircraft flight control, a pacemaker) has no such state: its failure itself causes severe damage. Safety must therefore come from **very high reliability**:

- error avoidance;
- error detection;
- **fault tolerance** (TMR, N-version, recovery blocks);
- BIST and watchdogs;
- rigorous verification.
:::

## Q7
Give an example of an extremely safe but unreliable system.

::: answer
**Document-processing software.** It may be buggy and crash often (unreliable), but a crash causes **no significant damage or financial loss** (safe).
:::

## Q8
Differentiate between periodic, aperiodic and sporadic tasks.

::: answer
| | Periodic | Aperiodic | Sporadic |
|---|---|---|---|
| Arrival | Fixed period | Irregular, unknown | Irregular, but with a **minimum inter-arrival time** |
| Driven by | Time | Events | Events |
| Deadline | Usually hard | Usually soft | Usually hard |
| Example | Sample temperature every 1 s | Respond to an operator request | Emergency stop button |
:::

## Q9
Describe the features of a real-time operating system.

::: answer
1. **Deterministic behaviour:** bounded worst-case response.
2. **Priority-based scheduling.**
3. **Pre-emptive multitasking.**
4. **Fast interrupt handling:** low interrupt latency.
5. **Low, predictable context-switch time.**
6. **Inter-task communication and synchronization:** semaphores, mutexes, queues, event flags.
7. **Priority inversion handling:** inheritance or ceiling protocol.
8. **Efficient resource management**, with no starvation.
9. **Small, configurable kernel** with a small memory footprint.
10. **High reliability and stability** for continuous operation.
:::

## Q10
Explain the scheduling point of a task scheduling algorithm. How are scheduling points determined in (i) clock-driven, (ii) event-driven and (iii) hybrid schedulers?

::: answer
The **scheduling points** are the instants on the timeline at which the scheduler decides **which task runs next**.

1. **Clock-driven:** at the **interrupts of a periodic timer** (the start of each frame).
2. **Event-driven:** when **events** occur, such as a task release, a task completion or an external interrupt.
3. **Hybrid:** at both clock interrupts and event occurrences.
:::

## Q11
(a) Why is it important to understand how interrupts work when writing real-time applications? (b) Define context switching in an RTOS.

::: answer
**(a)** Real-time programs must service interrupts from devices, and you often write or adapt the **device driver**. The design of the interrupts (priorities, ISR length, when interrupts are disabled, top and bottom halves) decides the **interrupt latency** and adds to every task's response time. A long ISR, or one that tries to wait on a semaphore, can make deadlines impossible to meet. Synchronization calls must not be used inside an ISR.

**(b)** **Context switching** is **saving** the state of the running task and **restoring** the state of the next one, so the first task can later resume where it stopped. It saves the registers, program counter, coprocessor registers, page register and memory-mapped I/O images, usually on a stack or in the TCB. It must be **fast and predictable**.
:::

## Q12
Differentiate a binary semaphore from a counting semaphore in a real-time system.

::: answer
| Binary semaphore | Counting semaphore |
|---|---|
| Values 0 and 1 only (a lock) | Values 0 to N |
| Only **one** task may use the shared resource at a time | For **several identical** resources (N instances) |
| Very common in **hard** real-time systems, guarding critical sections | Useful in resource sharing and **soft** real-time systems |
| *Example:* one UART | *Example:* a pool of 5 buffers or printers |
:::

## Q13
(a) What is deadlock? (b) State the four necessary conditions. (c) Explain deadlock detection for single-instance and multiple-instance resources.

::: answer
**(a)** A set of processes is **permanently blocked** because each waits for a resource held by another (P1 holds R1 and wants R2; P2 holds R2 and wants R1).

**(b)**

1. **Mutual exclusion**
2. **Hold and wait**
3. **No pre-emption**
4. **Circular wait**

All four must hold together.

**(c)**

- **Single instance: wait-for graph.** Remove the resource nodes from the resource allocation graph and draw Pi → Pj when Pi waits for a resource held by Pj. **A cycle means deadlock.**
- **Multiple instances: Banker's-style algorithm.** It uses the matrices Available, Allocation and Request (or Need). Repeatedly find a process whose request is ≤ Work, assume it finishes, and add its allocation to Work. Any processes that can never finish are **deadlocked**; if all can finish, the state is safe.
:::

## Q14
How are deadlock, unbounded priority inversion and chain blocking prevented using PCP? (2 marks)

::: answer
- **Deadlock:** under PCP, while a task holds resources, no other task can hold a resource it may ever need. When a task is granted one resource, all its required resources are free, so **circular wait cannot occur**.
- **Unbounded priority inversion:** a low-priority task blocking a high one **inherits the high priority**, so **intermediate tasks cannot pre-empt it**.
- **Chain blocking:** a task suffers **at most one inversion** (one blocking critical section) during its execution.
:::

## Q15
Explain priority inversion in real-time scheduling.

::: answer
A **lower-priority task holds a non-pre-emptable resource** that a **higher-priority task needs**. The higher-priority task must wait until the resource is released, so in effect it runs below the lower task: **simple priority inversion**.

If a **medium-priority** task then pre-empts the low task, the high task waits for an unrelated task as well, and the inversion becomes **unbounded**. The cures are priority inheritance and the priority ceiling protocol.
:::

## Q16
What types of priority inversion can a task suffer under PCP?

::: answer
1. **Direct inversion:** a higher-priority task waits for a lower one to release a resource it needs.
2. **Inheritance-related inversion:** when a low task inherits a high priority, **intermediate tasks that don't need the resource** must wait.
3. **Avoidance-related inversion:** a task requests a **free** resource but is refused because its priority is not higher than the **current system ceiling (CSC)**. PCP accepts this to avoid deadlock.
:::

## Q17
Can PIP and PCP be considered greedy algorithms?

::: answer
- **PIP is greedy:** a request for a **free** resource is always granted at once.
- **PCP is not greedy:** it may **refuse a free resource** (when the requester's priority ≤ CSC) to prevent possible deadlock and chain blocking.
:::

## Q18
Can EDF be considered a dynamic priority scheduling algorithm?

::: answer
Strictly, EDF computes **no priority value**: it picks the job whose **deadline is nearest**. Yet the longer a job waits, the nearer its deadline gets and the more likely it is to be chosen. This acts as a **virtual priority that rises with time**, so EDF is treated as a **dynamic priority** algorithm. Different jobs of the same task get different effective priorities.
:::

## Q19
Using a cyclic scheduler, suggest a suitable frame size for three periodic tasks with periods 100, 80 and 150 ms, deadlines equal to the periods, and a largest execution time of 30 ms.

::: answer
*(The source table is missing; these values are the ones the worked solution uses.)*

- **Constraint 1:** $F \ge \max(e_i) = 30$.
- **Constraint 2:** $M = \operatorname{lcm}(100, 80, 150) = 1200$, so $F$ must divide 1200: $F \in \{30, 40, 48, 50, 60, 75, 80, 100, 120, 150, 200, 240, 300, 400, 600, 1200\}$.
- **Constraint 3:** $2F - \gcd(F, p_i) \le d_i$ for each task. Try $F = 30$:

| Task | $p_i = d_i$ | $2(30) - \gcd(30, p_i)$ | |
|---|---|---|---|
| T1 | 100 | $60 - 10 = 50 \le 100$ | ✓ |
| T2 | 80 | $60 - 10 = 50 \le 80$ | ✓ |
| T3 | 150 | $60 - 30 = 30 \le 150$ | ✓ |

**F = 30 ms is suitable.**

Two other frame sizes also pass:

- $F = 40$: $80 - 20 = 60$, $80 - 40 = 40$, $80 - 10 = 70$.
- $F = 48$: $96 - 4 = 92$, $96 - 16 = 80 \le 80$, $96 - 6 = 90$.

Every frame size from 50 up fails for T2. At 50, for example, $100 - 10 = 90 > 80$. Choose the **smallest feasible frame, 30 ms**.

> The notes' list of candidate frames (30, 40, 60, 100, …) leaves out 48, 50, 75, 80 and 240, which also divide 1200. This does not change the answer.
:::

## Q20
(a) What type of real-time system supports pre-emptive, priority-based scheduling? (b) How do you manage stability and redundancy? (c) What is the priority of a real-time task? (d) How is security ensured? (e) Why does interrupt latency happen? (f) Into how many parts can an interrupt split the software in an RTOS? (g) If a task's period is $p$, what is its rate? (h) P1 has period 50 and burst 25; P2 has period 80 and burst 35. What are their priorities?

::: answer
**(a)** **Hard real-time systems** (and every RTOS). A high-priority task pre-empts a lower one so it meets its deadline: nuclear plant control, aircraft control.

**(b)** **Stability** comes from deterministic scheduling (RM), limiting CPU utilisation, **watchdog timers**, and worst-case testing. **Redundancy** comes from backup hardware (duplicate processors, sensors, power), software redundancy, and a fault-tolerant design.

**(c)** A value that decides **which task runs first**. More urgent tasks, or tasks with shorter periods or deadlines, get higher priority so they meet their timing constraints.

**(d)** Authentication, access control, **encryption** of communication, **secure boot** and signed firmware updates, and **isolating** critical tasks from non-critical ones.

**(e)** The CPU is running another ISR or a critical section; interrupts are temporarily **disabled**; time is needed to **save the context**.

**(f)** **Two parts:** the **ISR (top half)**, fast and urgent, and the **deferred service routine (bottom half)**, which does the non-urgent processing.

**(g)** $\text{rate} = \dfrac{1}{p}$.

**(h)** Under **rate monotonic**, the shorter period gets the higher priority: **P1 is high and P2 is low**.

Note that $U = 25/50 + 35/80 = 0.9375$, which is above the two-task RM bound of 0.828. Drawing the schedule shows P2 completes only 25 of 35 units by $t = 80$ and **misses its deadline** under RM. EDF would schedule both, since $U < 1$.
:::

## Q21
(a) What steps would you take to design a real-time system with high reliability requirements? (b) Discuss the issues in a real-time system scenario.

::: answer
**(a)**

1. **Requirement analysis:** functions, deadlines and reliability targets; classify the tasks as hard, firm or soft.
2. **Error avoidance:** a simple, modular design; proven hardware and RTOS.
3. **Error detection and removal:** watchdogs, input validation, exception handling, BIST.
4. **Fault tolerance:** redundant processors, sensors and links; backup power; graceful degradation.
5. **Deterministic scheduling:** RM or EDF, analysed for the worst case.
6. **Reliable communication:** CAN, EtherCAT, PROFIBUS.
7. **Testing and validation:** stress, fault injection, WCET analysis.

**(b)** Take a chemical-plant controller as the scenario. Its issues fall into three groups:

- **Resource management:** scheduling the control loops and alarms so all deadlines are met; fault tolerance when a sensor fails; reclaiming unused CPU time; timely communication with the SCADA system.
- **Software:** clear requirements and specification; verifying the timing; choosing a real-time language and RTOS; a real-time database for plant data.
- **Architecture:** the computing subsystem (a redundant controller), the communication subsystem (a deterministic fieldbus), and the I/O subsystem (isolated, fast ADCs and outputs).
:::

## Q22
(a) Why is hardware fault tolerance easier than software fault tolerance? (b) How do you achieve thread safety? (c) Explain the techniques for hardware fault tolerance.

::: answer
**(a)** Hardware tolerance relies on **physical duplication and monitoring** of components that fail independently. Software failures are correlated design faults that need complex design, testing and verification (see Q5).

**(b)**

- **Mutex** for mutual exclusion.
- **Semaphores** for limited resources.
- **Priority inheritance** against inversion.
- **Avoid shared data** (use message passing).
- **Atomic operations.**
- **Short critical sections, no nested locks.**

**(c)**

- **BIST:** the system **tests itself periodically** (memory, CPU) and switches to a backup if it finds a fault.
- **TMR:** three identical modules; a **majority voter** picks the output, so one faulty module is outvoted.
:::

## Q23
(a) Describe requirement engineering. (b) Differentiate a real-time system from an embedded system. (c) Describe a transducer, a microcontroller, an actuator and a data processor. (d) When can the SRS be changed? (e) Difference between requirement analysis and specification. (f) Two advantages of built-in software for fault tolerance. (g) Differentiate a statechart from an FSM. (h) State Little's law.

::: answer
**(a)** The process of **gathering and defining the services** the real-time system must provide, together with its timing and other constraints.

**(b)** A **real-time system** emphasises **timing constraints** (correctness depends on time). An **embedded system** emphasises a **dedicated function within a larger system** and need not have a time bound.

**(c)**

- **Transducer:** converts one form of energy into another, usually a physical quantity into an electrical signal (a thermocouple).
- **Microcontroller:** a single-chip computer with a CPU, memory and I/O; it processes sensor data and decides (a motor-drive MCU).
- **Actuator:** converts electrical signals into physical action (a steam valve actuator).
- **Data processor:** the unit that processes input data and runs the control algorithm, such as a CPU, DSP or PLC (a PLC controlling a turbine).

**(d)**

1. External interface requirements need adjusting.
2. Performance demands change.
3. Security factors arise.
4. Safety and quality factors arise.
5. The product's scope is widened.

**(e)** **Requirement analysis** finds out **what** the system must do: functions, timing, performance, reliability. The **specification** is the formal, detailed document of **how it will behave**. It is precise enough to check against the requirements, and independent of the implementation.

**(f)**

1. **Early fault detection:** watchdogs, self-tests and error checks find faults before they cause failure.
2. **Automatic recovery:** task restart, reset or switching to backup modules keeps the system running safely.

**(g)** An **FSM** is a flat set of states and transitions; it becomes huge for large systems. A **statechart** adds **hierarchy** (nested states), **concurrency** (orthogonal regions) and **history**, so complex reactive behaviour is modelled compactly.

**(h)** The average number of tasks in a system equals the **arrival rate × the average time in the system**: $L = \lambda W$.
:::

## Q24
(a) Briefly describe a real-time distributed control system. (b) Describe three areas where the technical challenges of real-time applications lie.

::: answer
**(a)** A **distributed control system (DCS)** spreads control over several **autonomous controllers** (nodes), each controlling part of the plant within its deadlines. They exchange data over a **deterministic network** (CAN, real-time Ethernet) and are supervised from operator stations. There is no single point of failure and it scales well, but network delay must be bounded. *Examples:* refinery and power-station control.

**(b)**

1. **Resource management:** scheduling, fault tolerance, resource reclaiming, communication.
2. **Software:** requirements, specification and verification, real-time languages, real-time databases.
3. **Architecture:** the computing, communication and I/O subsystems.
:::

## Q25
(a) Describe four types of task classes in a real-time system. (b) Sketch and describe the basic model of a real-time system.

::: answer
**(a)**

1. **Periodic:** fixed period, time driven (sampling).
2. **Aperiodic:** irregular arrivals, event driven, usually soft deadlines (operator commands).
3. **Sporadic:** irregular but with a minimum inter-arrival time and a hard deadline (an emergency stop).
4. **Non-real-time:** no time bound (logging, reports).

**(b)** Sensor → input conditioning → input interface (ADC) → **real-time computer** → output interface (DAC) → output conditioning → actuator → controlled system, with an **operator interface** to the computer. See the figure in *Real-time system concepts*.

- The sensor converts a physical quantity to an electrical signal.
- Conditioning amplifies, shifts, filters or converts the signal.
- The interfaces transfer data to and from the CPU (ADC and DAC, buffering, handshake).
- The computer decides within the deadline.
- The actuator acts on the environment.
:::

## Q26
(a) Describe the concept of an RTOS. (b) Explain four requirements of real-time image processing. (c) What are the main techniques for software fault tolerance, and what are their shortcomings?

::: answer
**(a)** An **RTOS** is an operating system that supports real-time applications by giving **logically correct results within their deadlines**. It provides:

- pre-emptive, priority-based scheduling;
- bounded interrupt latency and context-switch time;
- inter-task communication and synchronization (semaphores, queues);
- priority inversion control;
- a small, configurable kernel.

**(b)** *(beyond the notes)*

1. **High throughput** at the frame rate (30 fps gives 33 ms per frame).
2. **Low, bounded latency** from capture to decision.
3. **Large memory and bus bandwidth** for frame buffers.
4. **Parallel or dedicated hardware** (DSP, GPU, FPGA) with deterministic scheduling.

**(c)**

- **N-version programming:** independent versions vote. *Shortcomings:* expensive (N teams); correlated failures (common design errors); the voter is a single point of failure; it costs extra time.
- **Recovery blocks:** primary, acceptance test, then alternates. *Shortcomings:* a good acceptance test is hard to write; retries add time, so it is only possible with **large deadlines**; alternates may share faults.
- **Checkpointing and rollback:** *Shortcomings:* storage and time overhead; the rollback time may break deadlines.
:::

## Q27
(a) Mention four problems pipeline architecture poses for real-time system design. (b) Explain how each of these works: (i) air traffic control, (ii) networked multimedia, (iii) process control.

::: answer
**(a)** *(beyond the notes)*

1. **Variable instruction timing** from stalls, hazards and flushes.
2. **WCET is hard to bound** (worse with caches and branch prediction), so designs are pessimistic.
3. **Interrupt latency increases and varies** (the pipeline must drain).
4. **Costly context switches** (more state; cold pipeline and caches).

**(b)**

1. **Air traffic control:** radars and transponders are sampled periodically. Aircraft tracks are updated within each scan; conflict and collision checks run as periodic tasks with deadlines, and alerts go to controllers' displays. It is hierarchical and distributed (radar sites → control centres) with heavy redundancy, because it is safety-critical.
2. **Networked multimedia:** audio and video are captured, encoded and sent in packets (RTP over UDP). Each frame has a **firm** deadline: late frames are dropped. Receiver buffers absorb jitter, and QoS (bandwidth, delay, jitter, loss) determines quality. It is soft or firm real-time.
3. **Process control:** sensors (temperature, pressure, flow) are sampled periodically, and PID loops compute the actuator outputs (direct digital control). A supervisory level sets the setpoints. Alarms and emergency shutdown are **hard** deadlines. It usually runs as a hierarchical DCS.
:::

## Q28
(a) What is a software process model? (b) Propose the most suitable generic process model for: (i) anti-lock braking control, (ii) a virtual reality system to support software maintenance, (iii) a university accounting system replacing an existing one, (iv) an interactive travel planner that finds journeys with the lowest environmental impact.

::: answer
**(a)** A simplified, abstract description of the **activities and their order** in software development: specification, design and implementation, validation, and evolution. Examples are waterfall, incremental (agile), prototyping, reuse-based, V-model and spiral.

**(b)**

1. **Anti-lock braking:** **waterfall or V-model**, possibly with formal methods. It is **safety-critical hard real-time** with stable requirements, so it needs full analysis, design and verification before implementation, and certification.
2. **VR maintenance support:** **incremental with prototyping**. The requirements (especially the user interface) are unclear and must be explored.
3. **University accounting replacement:** **waterfall or reuse-based**. The requirements are known from the existing system, and commercial accounting components can be reused.
4. **Interactive travel planner:** **incremental or agile**. It is an interactive system whose requirements change with user feedback, so it is delivered in increments.
:::

## Q29
Determine whether a set of three periodic tasks is schedulable on a uniprocessor using EDF. Show all steps.

::: answer
*The task table is missing from the notes. This stand-in set is the classic one:* T1 = (C = 10, T = 20), T2 = (5, 50), T3 = (10, 35), with deadlines equal to the periods.

**Step 1: utilisation.**
$$U = \frac{10}{20} + \frac{5}{50} + \frac{10}{35} = 0.500 + 0.100 + 0.286 = 0.886$$

**Step 2: EDF test.** With $D_i = T_i$ on one processor, EDF is optimal: schedulable ⇔ $U \le 1$.

**Step 3:** $0.886 \le 1$, so the set **is schedulable under EDF**.

A simulation over the hyperperiod $\operatorname{lcm}(20, 50, 35) = 700$ confirms that no deadline is missed. (Under RM the bound for three tasks is 0.780, so the RM test would be inconclusive.)
:::

## Q30
(a) Explain three shortcomings of EDF in practical applications. (b) Describe the types of networks in real-time communication. (c) Describe five QoS parameters expected of the underlying network.

::: answer
**(a)**

1. **Transient overload:** EDF gives no guarantee about *which* task misses. The **domino effect** makes many tasks miss one after another, including critical ones.
2. **Resource sharing:** blocking on shared resources breaks the $U \le 1$ test; extra protocols are needed.
3. **Efficient implementation:** the ready queue must be kept sorted by absolute deadline, so the overhead is higher. Response times are also less predictable than with fixed priorities.

**(b)**

- **CAN:** under 50 m, inside a machine; priority arbitration; hard real-time.
- **Real-time LAN:** modified Ethernet or TSN in a plant (EtherCAT, PROFINET); deterministic.
- **Internet:** global, non-deterministic; used for soft real-time monitoring only.

**(c)** Any five of:

- **Bandwidth:** the maximum data rate.
- **Latency:** source-to-destination delay.
- **Jitter:** variation in delay.
- **Packet loss / loss rate:** the share of packets lost.
- **Blocking probability:** the chance a new connection is refused.
- **Mean opinion score:** voice quality on a 1–5 scale.
:::

## Q31
A task set of three tasks is to be scheduled under RMA. (i) Test whether it is schedulable and satisfies the RMA equation. (ii) If it does, draw the schedule.

::: answer
*The task table is missing from the notes. This stand-in set is used:* T1 = (C = 20, T = 100), T2 = (30, 150), T3 = (60, 200), with $D = T$.

**(i)**
$$U = \frac{20}{100} + \frac{30}{150} + \frac{60}{200} = 0.2 + 0.2 + 0.3 = 0.70$$
$$n(2^{1/n} - 1) = 3(2^{1/3} - 1) = 0.780$$
Since $0.70 \le 0.780$, **the RMA condition is satisfied** and the set is schedulable. The priorities are T1 > T2 > T3 (shortest period highest).

**(ii)**

<figure class="fig"><svg viewBox="0 0 600 194" role="img" aria-label="RMA schedule of T1 (20, 100), T2 (30, 150), T3 (60, 200) over the hyperperiod 600. T3 is pre-empted at t = 100 and finishes at 130, well before its deadline 200."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">T1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">T2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><text x="42.0" y="124.0" text-anchor="end" class="d-t b">T3</text><line x1="52.0" y1="136.0" x2="582.0" y2="136.0" class="d-mut"/><rect x="52.0" y="18" width="17.7" height="30" rx="4" class="d-box a"/><rect x="69.7" y="62" width="26.5" height="30" rx="4" class="d-box b"/><rect x="96.2" y="106" width="44.2" height="30" rx="4" class="d-box c"/><rect x="140.3" y="18" width="17.7" height="30" rx="4" class="d-box a"/><rect x="158.0" y="106" width="8.8" height="30" rx="4" class="d-box c"/><rect x="184.5" y="62" width="26.5" height="30" rx="4" class="d-box b"/><rect x="228.7" y="18" width="17.7" height="30" rx="4" class="d-box a"/><rect x="246.3" y="106" width="53.0" height="30" rx="4" class="d-box c"/><rect x="317.0" y="18" width="17.7" height="30" rx="4" class="d-box a"/><rect x="334.7" y="62" width="26.5" height="30" rx="4" class="d-box b"/><rect x="405.3" y="18" width="17.7" height="30" rx="4" class="d-box a"/><rect x="423.0" y="106" width="26.5" height="30" rx="4" class="d-box c"/><rect x="449.5" y="62" width="26.5" height="30" rx="4" class="d-box b"/><rect x="476.0" y="106" width="17.7" height="30" rx="4" class="d-box c"/><rect x="493.7" y="18" width="17.7" height="30" rx="4" class="d-box a"/><rect x="511.3" y="106" width="8.8" height="30" rx="4" class="d-box c"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="140.3" y1="50.0" x2="140.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="50.0" x2="228.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="50.0" x2="317.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="50.0" x2="405.3" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="493.7" y1="50.0" x2="493.7" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="50.0" x2="582.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="184.5" y1="94.0" x2="184.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="449.5" y1="94.0" x2="449.5" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="138.0" x2="52.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="228.7" y1="138.0" x2="228.7" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="405.3" y1="138.0" x2="405.3" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="138.0" x2="582.0" y2="100.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="590.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="150.0" x2="52.0" y2="155.0" class="d-ax"/><text x="52.0" y="170.0" text-anchor="middle" class="d-t s m">0</text><line x1="96.2" y1="150.0" x2="96.2" y2="155.0" class="d-ax"/><text x="96.2" y="170.0" text-anchor="middle" class="d-t s m">50</text><line x1="140.3" y1="150.0" x2="140.3" y2="155.0" class="d-ax"/><text x="140.3" y="170.0" text-anchor="middle" class="d-t s m">100</text><line x1="184.5" y1="150.0" x2="184.5" y2="155.0" class="d-ax"/><text x="184.5" y="170.0" text-anchor="middle" class="d-t s m">150</text><line x1="228.7" y1="150.0" x2="228.7" y2="155.0" class="d-ax"/><text x="228.7" y="170.0" text-anchor="middle" class="d-t s m">200</text><line x1="272.8" y1="150.0" x2="272.8" y2="155.0" class="d-ax"/><text x="272.8" y="170.0" text-anchor="middle" class="d-t s m">250</text><line x1="317.0" y1="150.0" x2="317.0" y2="155.0" class="d-ax"/><text x="317.0" y="170.0" text-anchor="middle" class="d-t s m">300</text><line x1="361.2" y1="150.0" x2="361.2" y2="155.0" class="d-ax"/><text x="361.2" y="170.0" text-anchor="middle" class="d-t s m">350</text><line x1="405.3" y1="150.0" x2="405.3" y2="155.0" class="d-ax"/><text x="405.3" y="170.0" text-anchor="middle" class="d-t s m">400</text><line x1="449.5" y1="150.0" x2="449.5" y2="155.0" class="d-ax"/><text x="449.5" y="170.0" text-anchor="middle" class="d-t s m">450</text><line x1="493.7" y1="150.0" x2="493.7" y2="155.0" class="d-ax"/><text x="493.7" y="170.0" text-anchor="middle" class="d-t s m">500</text><line x1="537.8" y1="150.0" x2="537.8" y2="155.0" class="d-ax"/><text x="537.8" y="170.0" text-anchor="middle" class="d-t s m">550</text><line x1="582.0" y1="150.0" x2="582.0" y2="155.0" class="d-ax"/><text x="582.0" y="170.0" text-anchor="middle" class="d-t s m">600</text><text x="590.0" y="188.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>RMA schedule of T1 (20, 100), T2 (30, 150), T3 (60, 200) over the hyperperiod 600. T3 is pre-empted at t = 100 and finishes at 130, well before its deadline 200.</figcaption></figure>

T1 runs 0–20, T2 20–50 and T3 50–100. At 100, T1 pre-empts T3 (100–120), and T3 finishes at 130, before its deadline of 200. The pattern continues over the hyperperiod $\operatorname{lcm}(100, 150, 200) = 600$ with no misses.
:::

## Q32
(a) What is a cyclic scheduler? (b) Select an appropriate frame size for T1 = (1, 4), T2 = (1, 5), T3 = (1, 20), T4 = (2, 20).

::: answer
**(a)** A **static, clock-driven** scheduler. A schedule table built offline is repeated every **major cycle** (the hyperperiod), which is split into equal **frames**. One periodic timer interrupt starts each frame, and tasks are not pre-empted inside a frame. It is simple and deterministic, but inflexible.

**(b)** The sheet left $e_2$ blank; it is 1 in the original example.

- **Constraint 1:** $F \ge \max e_i = 2$.
- **Constraint 2:** $M = \operatorname{lcm}(4, 5, 20) = 20$, so $F \in \{2, 4, 5, 10, 20\}$.
- **Constraint 3:** $2F - \gcd(F, p_i) \le p_i$ for each task:
  - $F = 2$: T1 $4 - 2 = 2 \le 4$; T2 $4 - 1 = 3 \le 5$; T3, T4 $4 - 2 = 2 \le 20$. All pass ✓
  - $F = 4$: T2 $8 - 1 = 7 > 5$ ✗
  - $F = 5$: T1 $10 - 1 = 9 > 4$ ✗
  - $F = 10$: T1 $20 - 2 = 18 > 4$ ✗
  - $F = 20$: T1 $40 - 4 = 36 > 4$ ✗

**Only F = 2 is suitable.**
:::
