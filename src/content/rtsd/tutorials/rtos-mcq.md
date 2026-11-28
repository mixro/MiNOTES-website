**Multiple-choice practice** on RTOS, scheduling and interrupts, from the "Real time questions and answers" handout, with repeated questions removed. Several 2025 exam questions (rate $1/p$, the P1/P2 priorities, the two parts of interrupt software, the priority of a real-time task) come straight from this bank, so it is worth knowing well. Try each question before opening the answer.

> **Errors in the handout's answer key**, corrected below:
> - **B8** (safety-critical system): the key says "does not affect much"; the answer is **(c) causes major and serious problems**.
> - **C6** (how the scheduler admits a process): the key says "busy wait polling"; the answer is **(b) admission control algorithm**.
> - **C7** (a set RM cannot schedule): the key says "cannot be scheduled by any other algorithm"; the answer is **(a) they can be scheduled by EDF** (when $U \le 1$).
> - **C14 and C16** (P1, P2) give opposite-looking answers ("can be scheduled" and "cannot"). Both are right only once you name the algorithm: EDF yes, RM no.
>
> The written questions at the end (W1–W4) correct four more mistakes in the handout's longer answers.

## A1 Dispatch latency
The time the scheduling dispatcher needs to stop one process and start another is: (a) process latency (b) dispatch latency (c) execution latency (d) interrupt latency

::: answer
**(b) dispatch latency.**
:::

## A2 Rate monotonic priority
In rate monotonic scheduling: (a) a shorter-duration job has higher priority (b) a longer-duration job has higher priority (c) priority does not depend on the job's duration (d) none

::: answer
**(a).** More precisely, the task with the shorter **period** (higher rate) gets the higher priority.
:::

## A3 Priority inversion
The problem of priority inversion can be solved by: (a) priority inheritance protocol (b) priority inversion protocol (c) both (d) none

::: answer
**(a) priority inheritance protocol** (the priority ceiling protocol also solves it).
:::

## A4 RTOS
In a real-time operating system: (a) all processes have the same priority (b) a task must be serviced by its deadline (c) process scheduling can be done only once (d) a kernel is not required

::: answer
**(b) a task must be serviced by its deadline.**
:::

## A5 VxWorks
VxWorks is centred around: (a) the wind microkernel (b) the Linux kernel (c) the Unix kernel (d) none

::: answer
**(a) the wind microkernel.**
:::

## A6 Interrupt latency in an RTOS
For a real-time operating system, interrupt latency should be: (a) minimal (b) maximum (c) zero (d) dependent on the scheduling

::: answer
**(a) minimal**, and bounded. It cannot be zero.
:::

## A7 Jitter
A hard real-time OS has ___ jitter than a soft real-time OS: (a) less (b) more (c) equal (d) none

::: answer
**(a) less.**
:::

## A8 Examples of RTOS
Which is a real-time operating system? (a) RTLinux (b) VxWorks (c) Windows CE (d) all of these

::: answer
**(d) all of these.**
:::

## A9 Context switch time
The time to switch from the context of one thread to another is called: (a) thread fly-back time (b) jitter (c) context switch time (d) none

::: answer
**(c) context switch time.**
:::

## A10 Proportional share
In which scheduling is a fixed amount of CPU time allocated to each process? (a) EDF (b) proportional share (c) equal share (d) none

::: answer
**(b) proportional share scheduling.**
:::

## B1 Memory
The amount of memory in a real-time system is generally: (a) less than in PCs (b) more than in PCs (c) the same (d) none

::: answer
**(a) less than in PCs.**
:::

## B2 Interrupt latency
Interrupt latency is the time: (a) from an event to the arrival of an interrupt (b) from an event to the servicing of the interrupt (c) from the arrival of an interrupt to the start of the ISR (d) none

::: answer
**(c) from the arrival of the interrupt to the start of the ISR.** Option (b) is *event latency* (see B16).
:::

## B3 Dispatch latency
The most effective way to keep dispatch latency low is to: (a) provide non-pre-emptive kernels (b) provide pre-emptive kernels (c) make it user-programmed (d) run fewer processes

::: answer
**(b) provide pre-emptive kernels.**
:::

## B4 Pre-emptive priority scheduling
Pre-emptive, priority-based scheduling guarantees: (a) hard real-time functionality (b) soft real-time functionality (c) memory protection (d) none

::: answer
**(b) soft real-time functionality.** It always runs the most urgent ready task, but hard real time also needs guaranteed deadlines (admission control, schedulability analysis). This is the 2025 exam's Q1 (i).
:::

## B5 Kernels
Real-time systems must have: (a) pre-emptive kernels (b) non-pre-emptive kernels (c) either (d) neither

::: answer
**(a) pre-emptive kernels.**
:::

## B6 Results
In a real-time system the computer results: (a) must be produced within a specific deadline (b) may be produced at any time (c) may be correct (d) all

::: answer
**(a) must be produced within a specific deadline.**
:::

## B7 Solving priority inversion
Priority inversion is solved by: (a) priority inheritance protocol (b) two-phase lock protocol (c) time protocol (d) all

::: answer
**(a) priority inheritance protocol.**
:::

## B8 Safety-critical systems
In a safety-critical system, incorrect operation: (a) does not affect much (b) causes minor problems (c) causes major and serious problems (d) none

::: answer
**(c) causes major and serious problems** (injury, loss of life, major damage). That is what "safety-critical" means.

*The handout's key gives (a), which is wrong.*
:::

## B9 Properties
Properties of real-time (embedded) systems include: (a) single purpose (b) inexpensively mass-produced (c) small size (d) all

::: answer
**(d) all of these.**
:::

## B10 Real addressing
The technique in which the CPU generates physical addresses directly is: (a) relocation register (b) real addressing (c) virtual addressing (d) none

::: answer
**(b) real addressing.**
:::

## B11 Interrupt latency goal
Real-time systems need to ___ the interrupt latency: (a) minimise (b) maximise (c) not bother about (d) none

::: answer
**(a) minimise.**
:::

## B12 Safety-critical and hard real time
Antilock brakes, flight management systems and pacemakers are examples of: (a) safety-critical systems (b) hard real-time systems (c) soft real-time systems (d) safety-critical and hard real-time systems

::: answer
**(d) safety-critical and hard real-time systems.**
:::

## B13 Memory management units
Memory management units: (a) increase cost (b) increase power consumption (c) increase the time to complete an operation (d) all

::: answer
**(d) all of these**, which is why many small real-time systems leave them out.
:::

## B14 Hard real time guarantee
In a ___ real-time system, critical tasks are guaranteed to complete within their deadlines: (a) soft (b) hard (c) critical (d) none

::: answer
**(b) hard.**
:::

## B15 Real addressing drawback
The disadvantage of real addressing mode is: (a) cost (b) time overhead (c) no memory protection between processes (d) restricted memory access

::: answer
**(c) absence of memory protection between processes.**
:::

## B16 Event latency
Event latency is: (a) the time for an event to occur from system start (b) the time from the event until the system stops (c) the time from the event until it crashes (d) the time from when an event occurs until it is serviced

::: answer
**(d).**
:::

## B17 Priority of a real-time task
The priority of a real-time task: (a) must degrade over time (b) must not degrade over time (c) may degrade over time (d) none

::: answer
**(b) must not degrade over time.** A general-purpose OS ages priorities; a real-time OS must keep the priority the designer set. This is the 2025 exam's Q1 (g).
:::

## C1 EDF utilisation
In practice EDF cannot reach 100% CPU utilisation because of: (a) the cost of context switching (b) interrupt handling (c) power consumption (d) all

::: answer
**(a) the cost of context switching** (overheads such as context switches and interrupt handling use some of the time).
:::

## C2 RM assumptions
Rate monotonic scheduling assumes that: (a) the processing time of a periodic process is the same for each CPU burst (b) it is different for each burst (c) all periods are the same (d) none

::: answer
**(a)** the same processing time for each burst.
:::

## C3 Process model
For real-time scheduling, the processes are considered: (a) infinitely long (b) periodic (c) heavyweight (d) lightweight

::: answer
**(b) periodic.**
:::

## C4 EDF priorities
EDF assigns priorities according to: (a) periods (b) deadlines (c) burst times (d) none

::: answer
**(b) deadlines.**
:::

## C5 Proportional share admission
T = 100 shares are divided among A (50 shares), B (15) and C (20). A new process D asks for 30 shares. The admission controller will: (a) allocate 30 shares (b) deny entry to D (c) all (d) none

::: answer
**(b) deny entry.** Only $100 - (50 + 15 + 20) = 15$ shares are free, fewer than 30. (A gets 50%, B 15% and C 20% of the CPU.)
:::

## C6 Admitting a process
The scheduler admits a process using: (a) a two-phase locking protocol (b) an admission control algorithm (c) busy-wait polling (d) none

::: answer
**(b) an admission control algorithm**: a new process is admitted only if the system can still guarantee its (and everyone else's) deadlines or shares.

*The handout's key gives (c), which is wrong.*
:::

## C7 When RM fails
If a set of processes cannot be scheduled by RM, then: (a) they can be scheduled by EDF (b) they cannot be scheduled by EDF (c) they cannot be scheduled by any other algorithm (d) none

::: answer
**(a)** they can be scheduled by EDF (as long as $U \le 1$). EDF is optimal on one processor and can reach 100% utilisation, while RM may fail above about 69–83%. C14 and C16 show one such set.

*The handout's key gives (c), which is wrong.*
:::

## C8 Shares
T shares of time are allocated among all processes out of N shares in: (a) RM (b) proportional share (c) EDF (d) none

::: answer
**(b) proportional share.**
:::

## C9 RM priority
In RM scheduling a process with a shorter period gets: (a) higher priority (b) lower priority (c) both (d) none

::: answer
**(a) a higher priority.**
:::

## C10 Utilisation
P1 has period 50 and CPU burst 25; P2 has period 80 and burst 35. The total CPU utilisation is: (a) 0.90 (b) 0.74 (c) 0.94 (d) 0.80

::: answer
**(c) 0.94:** $25/50 + 35/80 = 0.500 + 0.4375 = 0.9375$.
:::

## C11 Static priority with pre-emption
The ___ algorithm schedules periodic tasks using a static priority policy with pre-emption: (a) EDF (b) rate monotonic (c) FCFS (d) priority

::: answer
**(b) rate monotonic.**
:::

## C12 Rate
If the period of a process is $p$, its rate is: (a) $p^2$ (b) $2p$ (c) $1/p$ (d) $p$

::: answer
**(c) $1/p$.**
:::

## C13 P1 and P2 priorities
For the same P1 (50, 25) and P2 (80, 35), the priorities of P1 and P2: (a) remain the same throughout (b) keep varying from time to time (c) may or may not change (d) none

::: answer
**(b) keep varying from time to time**, because the question assumes EDF (see C14): priorities follow the absolute deadlines. Under RM they would stay fixed (P1 higher), but RM cannot schedule this set.
:::

## C14 EDF for P1 and P2
Can P1 (50, 25) and P2 (80, 35) be scheduled with EDF without missing deadlines? (a) yes (b) no (c) maybe (d) none

::: answer
**(a) yes:** $U = 0.94 \le 1$, and EDF is optimal on one processor.
:::

## C15 RM for P1 and P2 (second pair)
P1 has period 50 and $t_1 = 20$; P2 has period 100 and $t_2 = 35$; P1 has the higher priority. Can they be scheduled with RM? (a) yes (b) no (c) maybe (d) none

::: answer
**(a) yes:** $U = 20/50 + 35/100 = 0.75 \le 2(2^{1/2} - 1) = 0.828$. Check: $R_2 = 35 \to 55 \to 75 \le 100$.
:::

## C16 Can P1 and P2 meet deadlines?
P1 (50, 25), P2 (80, 35). Can the processes be scheduled without missing deadlines? (a) yes (b) no (c) maybe (d) none

::: answer
The handout's key says **(b) no**, meaning under **RM**: $U = 0.94 > 0.828$, and $R_2 = 35 \to 60 \to 85 > 80$, so P2 misses its first deadline.

<figure class="fig"><svg viewBox="0 0 600 150" role="img" aria-label="P1 (25, 50) and P2 (35, 80) under rate monotonic. P2 has only 25 of its 35 units done by t = 80 and misses its deadline (✕), although U = 0.94 < 1."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="42.0" y="36.0" text-anchor="end" class="d-t b">P1</text><line x1="52.0" y1="48.0" x2="582.0" y2="48.0" class="d-mut"/><text x="42.0" y="80.0" text-anchor="end" class="d-t b">P2</text><line x1="52.0" y1="92.0" x2="582.0" y2="92.0" class="d-mut"/><rect x="52.0" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="134.8" y="62" width="82.8" height="30" rx="4" class="d-box b"/><rect x="217.6" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="300.4" y="62" width="82.8" height="30" rx="4" class="d-box b"/><rect x="383.2" y="18" width="82.8" height="30" rx="4" class="d-box a"/><rect x="466.1" y="62" width="66.2" height="30" rx="4" class="d-box b"/><rect x="548.9" y="18" width="33.1" height="30" rx="4" class="d-box a"/><line x1="52.0" y1="50.0" x2="52.0" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="217.6" y1="50.0" x2="217.6" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="383.2" y1="50.0" x2="383.2" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="548.9" y1="50.0" x2="548.9" y2="12.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="94.0" x2="52.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="317.0" y1="94.0" x2="317.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><line x1="582.0" y1="94.0" x2="582.0" y2="56.0" class="d-ax" marker-end="url(#ah)"/><text x="317.0" y="81.0" text-anchor="middle" class="d-t b r">✕</text><line x1="52.0" y1="106.0" x2="590.0" y2="106.0" class="d-ax" marker-end="url(#ah)"/><line x1="52.0" y1="106.0" x2="52.0" y2="111.0" class="d-ax"/><text x="52.0" y="126.0" text-anchor="middle" class="d-t s m">0</text><line x1="118.2" y1="106.0" x2="118.2" y2="111.0" class="d-ax"/><text x="118.2" y="126.0" text-anchor="middle" class="d-t s m">20</text><line x1="184.5" y1="106.0" x2="184.5" y2="111.0" class="d-ax"/><text x="184.5" y="126.0" text-anchor="middle" class="d-t s m">40</text><line x1="250.8" y1="106.0" x2="250.8" y2="111.0" class="d-ax"/><text x="250.8" y="126.0" text-anchor="middle" class="d-t s m">60</text><line x1="317.0" y1="106.0" x2="317.0" y2="111.0" class="d-ax"/><text x="317.0" y="126.0" text-anchor="middle" class="d-t s m">80</text><line x1="383.2" y1="106.0" x2="383.2" y2="111.0" class="d-ax"/><text x="383.2" y="126.0" text-anchor="middle" class="d-t s m">100</text><line x1="449.5" y1="106.0" x2="449.5" y2="111.0" class="d-ax"/><text x="449.5" y="126.0" text-anchor="middle" class="d-t s m">120</text><line x1="515.8" y1="106.0" x2="515.8" y2="111.0" class="d-ax"/><text x="515.8" y="126.0" text-anchor="middle" class="d-t s m">140</text><line x1="582.0" y1="106.0" x2="582.0" y2="111.0" class="d-ax"/><text x="582.0" y="126.0" text-anchor="middle" class="d-t s m">160</text><text x="590.0" y="144.0" text-anchor="end" class="d-t s m">t</text></svg><figcaption>P1 (25, 50) and P2 (35, 80) under rate monotonic. P2 has only 25 of its 35 units done by t = 80 and misses its deadline (✕), although U = 0.94 < 1.</figcaption></figure>

Under **EDF** the answer would be yes (C14). In an exam, state the algorithm you assume.
:::

## E1 Interrupt software split
Into how many parts does the interrupt split the software? (a) 2 (b) 3 (c) 4 (d) 5

::: answer
**(a) 2:** the **foreground** (ISRs, run in response to interrupts) and the **background** (the main program, transparent to the interrupt mechanism). This is the 2025 exam's Q1 (e).
:::

## E2 ISR
ISR stands for, and an interrupt diverts execution to: (a) interrupt standard routine (b) interrupt service routine (c) interrupt software routine (d) interrupt synchronous routine

::: answer
**(b) interrupt service routine.** An interrupt breaks the normal sequence of instructions and diverts execution to the ISR.
:::

## E3 Non-maskable interrupt
An interrupt request on an input pin that cannot be disabled by any means is a: (a) maskable interrupt (b) non-maskable interrupt (NMI) (c) both (d) none

::: answer
**(b) non-maskable interrupt.** INTR, by contrast, is maskable using the **interrupt flag**.
:::

## E4 Several interrupts at once
If several devices interrupt the CPU at once and it handles them properly, it has: (a) interrupt handling ability (b) interrupt processing ability (c) multiple interrupt processing ability (d) multiple interrupt executing ability

::: answer
**(c) multiple interrupt processing ability.** A programmable interrupt controller (PIC) helps by handling one or more requests at a time.
:::

## E5 Foreground and background
(i) Which part of the software is transparent to the interrupt mechanism? (ii) Which part performs tasks in response to interrupts? (a) background (b) foreground (c) both (d) lateral ground

::: answer
**(i) (a) background; (ii) (b) foreground.**
:::

## E6 Interrupt latency and timing
(i) The time taken to respond to an interrupt is called? (ii) What can be used to build time-driven systems? (iii) What is asynchronous to the program's operation?

::: answer
(i) **interrupt latency**; (ii) **interrupts** (from a timer); (iii) **interrupts**.
:::

## E7 Nested interrupts
While the main program runs, two or more interrupts occur, one during another. This is called: (a) multi-interrupt (b) nested interrupt (c) interrupt within interrupt (d) both (b) and (c)

::: answer
**(d)** nested interrupt, also called interrupt within interrupt.
:::

## W1 RTOS vs GPOS
How does a real-time operating system differ from a general-purpose operating system?

::: answer
- An **RTOS** is built for **determinism**: bounded, predictable response times so deadlines can be guaranteed. It uses fixed priorities that the OS never changes, a pre-emptive kernel, bounded interrupt latency and static memory.
- A **GPOS** (Windows, Linux, macOS) is built for **average throughput and fairness**; it adjusts priorities, uses virtual memory and paging, and gives no timing guarantee.

**Correction:** the handout says a GPOS uses *cooperative* multitasking. Modern GPOSs are **pre-emptive** too; the difference is that their scheduling and kernel are not designed to bound response times.
:::

## W2 Memory management in real time
How do you manage memory allocation and deallocation in real-time systems?

::: answer
Allocate **statically** (at compile time or start-up) for the worst case; if run-time allocation is needed, use **fixed-size memory pools** that allocate and free in constant time; lock memory so it is never paged out; avoid the general heap in time-critical tasks because of variable timing and fragmentation.

**Correction:** the handout recommends garbage collection (reference counting). Ordinary garbage collection is unpredictable and is normally **avoided**; only special real-time (incremental) collectors are acceptable, and static allocation remains the standard practice.
:::

## W3 Task classes
Explain the types of task classes in a real-time system.

::: answer
- **Periodic:** repeat at a fixed period (sample aircraft speed every 100 ms).
- **Aperiodic:** arrive at unpredictable times with no minimum gap (pilot command).
- **Sporadic:** arrive at unpredictable times but with a minimum gap, usually with hard deadlines (fault alarm).
- **Critical:** a missed deadline is catastrophic (life support, flight stability).
- **Non-critical:** deal with time-varying data and lose value if late, but a miss is not catastrophic; the goal is to maximise the fraction finished on time.

**Correction:** the handout says "five task classes" but describes only four: **sporadic** tasks are listed and never explained.
:::

## W4 Real-time communication
Explain real-time communication.

::: answer
In this module, **real-time communication** means a network that delivers each message within a **deadline**, with bounded delay and jitter. It can be **hard** (guaranteed, e.g. CAN in a car) or **soft** (best effort with good average QoS, e.g. VoIP), and is specified by QoS parameters: delay, jitter, bandwidth, loss rate and blocking probability.

**Correction:** the handout defines it as "live" telecoms (telephony, instant messaging, video calls). That is the everyday meaning; for exam answers use the deadline-based definition above.
:::
