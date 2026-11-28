**Question bank, part 2: theory.** The communication, fault-tolerance, synchronisation, introduction, design and testing questions from the class's handwritten revision answers ("Final RTS"), plus the Test 1 questions. Short questions on the same topic are grouped. Questions the handwritten set left blank are answered here too.

> **Summary of the check of the handwritten answers.**
> - **Fail-safe state (C7):** described as "another system takes over for the failed one". That is fault tolerance (redundancy). A fail-safe state is a *safe stopping state*, such as all traffic lights red.
> - **Deadlock detection for multiple instances (S2):** described as the Banker's algorithm. The Banker's algorithm is for deadlock **avoidance**; detection uses the *Request* matrix.
> - **Semaphores (S3):** "binary is common in hard real time, counting in soft real time" is not a rule; both are used in both.
> - **Memory deallocation (I5):** lists automatic deallocation (garbage collection) without warning that it is unpredictable; real-time code uses static allocation and fixed-size memory pools.
> - Left blank in the handwritten set and answered here: R5, C5, S6, S7, I4 (file system).

## R1 Real-time vs non-real-time communication
Compare the requirements of real-time communication systems with those of non-real-time ones. What are the most significant differences?

::: answer
| Feature | Real-time communication | Non-real-time communication |
|---|---|---|
| Timing | Each message must arrive within a **deadline** | Delivery time is not critical |
| Latency and jitter | Low and **bounded** | Higher, variable latency is acceptable |
| Determinism | Delivery time must be **predictable** | Best effort; average performance matters |
| Reliability | Loss or delay can cause **system failure** | Lost data can simply be re-sent later |
| Typical protocols | CAN, TTP, FlexRay, TSN, real-time Ethernet | TCP/IP over ordinary Ethernet, Wi-Fi |

**Most significant difference:** a real-time network must **guarantee** a bounded delay (QoS) for each message, while a non-real-time network only tries to maximise average throughput.

**Check:** correct.
:::

## R2 Types of network
Describe the types of network in real-time communication.

::: answer
- **Controller area network (CAN):** a short bus (typically under 50 m) inside a machine or vehicle that connects sensors, actuators and controllers. Messages win access by **priority arbitration**, so delay is bounded: suited to **hard** real-time traffic. *Example:* engine, brake and airbag units in a car.
- **Local area network (LAN):** connects computers in one building or plant. Ordinary Ethernet is not deterministic, so real-time LANs use modified protocols (token-based, time-triggered or switched industrial Ethernet such as PROFINET and EtherCAT). *Example:* PLCs and SCADA stations in one factory.
- **Internet / wide area network:** covers cities or countries; delay varies with traffic and routing, so there is **no hard guarantee**. Used for **soft** real-time work such as remote monitoring and supervision. *Example:* a utility monitoring substations from a control centre.

**Check:** correct, with good examples.
:::

## R3 QoS parameters
Real-time applications need guarantees on the service quality of the underlying network. Describe five QoS parameters.

::: answer
- **Delay (latency):** time for a message to travel from source to destination; must be bounded and short.
- **Delay jitter:** the variation in delay between messages of one session; high jitter makes periodic control or audio irregular.
- **Bandwidth (throughput):** data rate the connection is guaranteed; must cover the peak needs of the application.
- **Loss rate:** the fraction of packets lost or corrupted, $\text{loss rate} = \dfrac{\text{packets lost}}{\text{packets sent}}$; must be very low.
- **Blocking probability:** the chance that a new connection request is refused because resources are short.
- **Mean opinion score (MOS):** for voice and video, user-rated quality on a 1 (bad) to 5 (excellent) scale.

Any five, each with a line of explanation, earn the marks.

**Check:** correct (latency, jitter, bandwidth, loss rate, packet loss, MOS). "Loss rate" and "packet loss" are the same parameter, so use **blocking probability** as the fifth.
:::

## R4 Hard vs soft communication
What is the difference between hard and soft real-time communication supported by a network?

::: answer
- **Hard real-time communication:** the network gives an **absolute (deterministic) guarantee** that every message is delivered within its deadline, with bounded delay and jitter. A late message counts as a failure. *Example:* brake and engine messages on a CAN bus.
- **Soft real-time communication:** the network gives **no absolute guarantee**, only good average (statistical) QoS. Occasional late or lost packets lower quality but do not cause failure. *Example:* video streaming or VoIP over the Internet.

**Check:** correct.
:::

## R5 End-to-end protocols
Why are end-to-end protocols needed at the interface between the computer system and the controlled object?

::: answer
A network acknowledgement only proves that a **message arrived** at the actuator's node. It does not prove that the **intended physical effect** happened: the valve may be stuck, the motor driver may have failed, or the command may have been corrupted after the network.

An **end-to-end protocol** closes the loop through the **controlled object**: after sending "open valve", the computer checks an independent sensor (flow meter, limit switch, motor speed) within a deadline. If the expected effect does not appear in time, the error is detected and the system reacts (retry, switch to a spare, go to a safe state). This catches faults in every component between the computer and the process, not just in the network.

**Check:** left blank in the handwritten set.
:::

## C1 Hardware vs software fault tolerance
Explain why hardware fault tolerance is easy to achieve compared to software fault tolerance.

::: answer
- **Hardware faults are mostly random and independent.** Components wear out or fail at random, so a duplicate unit almost never fails at the same moment. Adding identical spares (redundancy) therefore works.
- **Software faults are design faults.** A bug is present in every copy of the program, so running identical copies gives no protection: all copies fail together on the same input. Tolerating software faults needs *different* versions (design diversity), which is expensive, and even independently written versions tend to share mistakes (correlated faults).
- **Hardware faults are easier to detect:** parity, ECC, watchdogs and self-tests catch them; a software fault may appear only under rare input and timing conditions.
- **Hardware is simpler and well modelled** (failure rates are known), while software is very complex, so its reliability is hard to predict.

**Check:** correct (redundancy, predictable behaviour, independent failures, detection, complexity).
:::

## C2 Hardware fault-tolerance techniques
Explain the main techniques available to achieve hardware fault tolerance.

::: answer
- **Built-in self-test (BIST):** the system tests its own memory, processor and I/O at start-up and periodically, and switches to a spare when a fault is found.
- **Triple modular redundancy (TMR):** three identical units work on the same input and a **voter** takes the majority output, so one faulty unit is masked. The voter itself must be very reliable.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="10" y="95" width="80" height="46" rx="10" class="d-box"/><text x="50.0" y="123.0" text-anchor="middle" class="d-t b">Input</text><rect x="170" y="20" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="48.0" text-anchor="middle" class="d-t b">Module 1</text><line x1="90.0" y1="118.0" x2="168.0" y2="43.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="43.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="98" width="130" height="46" rx="10" class="d-box b"/><text x="235.0" y="118.0" text-anchor="middle" class="d-t b">Module 2</text><text x="235.0" y="134.0" text-anchor="middle" class="d-t b">(faulty)</text><line x1="90.0" y1="118.0" x2="168.0" y2="121.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="121.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="176" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="204.0" text-anchor="middle" class="d-t b">Module 3</text><line x1="90.0" y1="118.0" x2="168.0" y2="199.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="199.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="400" y="88" width="90" height="60" rx="10" class="d-box c"/><text x="445.0" y="115.0" text-anchor="middle" class="d-t b">Majority</text><text x="445.0" y="131.0" text-anchor="middle" class="d-t b">voter</text><line x1="490.0" y1="118.0" x2="520.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="522" y="95" width="70" height="46" rx="10" class="d-box"/><text x="557.0" y="123.0" text-anchor="middle" class="d-t b">Output</text></svg><figcaption>Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted.</figcaption></figure>

- **Standby sparing (dual redundancy):** a spare unit takes over when the active one fails (hot standby runs in step; cold standby is switched on when needed).
- **Information redundancy:** error-detecting and correcting codes (parity, CRC, ECC memory).
- **Watchdog timers:** the software must reset the timer regularly; if it hangs, the timer expires and resets the system or switches to a backup.

**Check:** correct (BIST, TMR).
:::

## C3 Software fault tolerance
What are the main techniques for software fault tolerance, and what are their shortcomings?

::: answer
- **N-version programming:** $N \ge 3$ teams independently write versions from the same specification; all run on the same input and a **voter** picks the majority result.
- **Recovery blocks:** the **primary** version runs; its result is checked by an **acceptance test**. If the test fails, the system rolls back to a checkpoint and runs an **alternate** version, and so on, until one passes or all fail.

**Shortcomings:**

- **Correlated faults:** independent teams often make the same mistakes (or share a wrong specification), so versions fail together and the voter is outvoted.
- **High cost:** developing and maintaining $N$ versions multiplies the effort.
- **Acceptance tests are hard to write**, and an imperfect test lets wrong results through.
- **Timing overhead:** running several versions, or rolling back and retrying, uses CPU time and can make the task miss its deadline.

**Check:** correct.
:::

## C4 Thread safety
Explain how you can achieve thread safety when developing a real-time application.

::: answer
Code is **thread-safe** when it works correctly while several tasks run it or share its data at the same time.

- **Mutexes** around shared data, with priority inheritance or ceiling to avoid unbounded priority inversion; keep critical sections short.
- **Semaphores and message queues** to pass data between tasks instead of sharing variables.
- **Atomic operations**, or briefly disabling interrupts, for very small updates shared with an ISR.
- **Re-entrant functions:** only local variables, no static buffers.
- **Fixed lock order** for all tasks, to avoid deadlock.

**Check:** correct (mutex, semaphore); add re-entrancy and message queues for full marks.
:::

## C5 Stability and redundancy
How do you manage system stability and redundancy in a real-time system?

::: answer
**Stability:** schedulability analysis for the worst-case load, spare CPU capacity, overload handling (admission control, shed soft tasks first), watchdog timers, and low-jitter fixed sampling in control loops.

**Redundancy:** hardware (TMR, standby spares, redundant sensors and power supplies), software (N-version programming, recovery blocks), information (CRC, ECC) and time (retry, re-transmission). Redundant units should fail independently, e.g. separate power supplies and cable routes.

**Check:** left blank in the handwritten set.
:::

## C6 Security
How do you ensure security in a real-time system?

::: answer
- **Access control and authentication** of users, devices and messages.
- **Encryption and message authentication**, sized so the extra delay still meets the deadline.
- **Secure boot and signed firmware updates.**
- **Memory protection and partitioning** between tasks.
- **Intrusion detection and monitoring**, with a safe reaction to attacks.

**Check:** correct.
:::

## C7 Fail-safe state
What is a fail-safe state? Since safety-critical systems do not have a fail-safe state, how is safety guaranteed?

::: answer
- **Fail-safe state:** a state which, if the system enters it when it fails, causes **no damage**. On a fault the system simply goes there and stops. *Examples:* all traffic lights turn red; a railway signal shows red and the train stops; a lift stops and holds its brakes.
- **Safety-critical systems** have **no fail-safe state** (an aircraft in flight cannot just "stop"), so a failure can cause damage or loss of life. Their safety can only come from **very high reliability**: careful design and testing to avoid and remove faults, plus **fault tolerance** (redundant hardware such as TMR, diverse software, watchdogs) so that the system keeps working correctly even when a part fails.

**Check:** the definition given ("another system takes over and handles operations for the failed system") describes **fault tolerance**, not a fail-safe state. The second part (high reliability) is right.
:::

## C8 High reliability
How do you achieve high reliability in a real-time system?

::: answer
- **Fault (error) avoidance:** prevent faults during design: proven components, careful design rules, reviews, formal methods.
- **Fault removal:** find and remove faults before release: testing, inspection, verification.
- **Fault tolerance:** keep working correctly when faults occur: redundancy, voting, recovery blocks.
- **Fault recovery:** after a fault, restore normal operation: rollback to a checkpoint, restart, switch to a spare.

**Check:** correct.
:::

## S1 Deadlock and its conditions
(a) What do you mean by deadlock? (b) What are the four necessary conditions for deadlock?

::: answer
**(a)** A **deadlock** is a state in which a set of tasks wait for ever, because each holds a resource and waits for a resource held by another task in the set. *Example:* P1 holds R1 and waits for R2; P2 holds R2 and waits for R1.

**(b)** Mutual exclusion; hold and wait; no pre-emption; circular wait. All four must hold at once, so breaking any one prevents deadlock (e.g. lock resources in a fixed order to break circular wait).

**Check:** correct.
:::

## S2 Deadlock detection
Explain the deadlock detection algorithm for single-instance and multiple-instance resource types.

::: answer
**Single instance: wait-for graph.** Remove the resource nodes from the allocation graph and draw $P_i \to P_j$ when $P_i$ waits for a resource that $P_j$ holds. **A cycle means deadlock.**

<figure class="fig"><svg viewBox="0 0 600 270" role="img" aria-label="Wait-for graph (Example 1). Removing the resources from the allocation graph leaves P1 → P2 → P3 → P4 → P1: a closed cycle, so the four processes are deadlocked."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="140.0" y="18.0" text-anchor="middle" class="d-t b">Resource allocation graph</text><circle cx="60" cy="60" r="20" class="d-box a"/><text x="60.0" y="65.0" text-anchor="middle" class="d-t s">P1</text><circle cx="220" cy="60" r="20" class="d-box a"/><text x="220.0" y="65.0" text-anchor="middle" class="d-t s">P2</text><circle cx="220" cy="200" r="20" class="d-box a"/><text x="220.0" y="205.0" text-anchor="middle" class="d-t s">P3</text><circle cx="60" cy="200" r="20" class="d-box a"/><text x="60.0" y="205.0" text-anchor="middle" class="d-t s">P4</text><rect x="123" y="30" width="34" height="30" rx="4" class="d-box b"/><text x="140.0" y="50.0" text-anchor="middle" class="d-t s">R1</text><rect x="218" y="115" width="34" height="30" rx="4" class="d-box b"/><text x="235.0" y="135.0" text-anchor="middle" class="d-t s">R4</text><rect x="123" y="200" width="34" height="30" rx="4" class="d-box b"/><text x="140.0" y="220.0" text-anchor="middle" class="d-t s">R3</text><rect x="28" y="115" width="34" height="30" rx="4" class="d-box b"/><text x="45.0" y="135.0" text-anchor="middle" class="d-t s">R2</text><line x1="81.6" y1="55.9" x2="118.4" y2="49.1" class="d-ax" marker-end="url(#ah)"/><line x1="161.6" y1="49.1" x2="198.4" y2="55.9" class="d-ax" marker-end="url(#ah)"/><line x1="224.6" y1="81.5" x2="230.4" y2="108.5" class="d-ax" marker-end="url(#ah)"/><line x1="230.4" y1="151.5" x2="224.6" y2="178.5" class="d-ax" marker-end="url(#ah)"/><line x1="198.4" y1="204.1" x2="161.6" y2="210.9" class="d-ax" marker-end="url(#ah)"/><line x1="118.4" y1="210.9" x2="81.6" y2="204.1" class="d-ax" marker-end="url(#ah)"/><line x1="55.4" y1="178.5" x2="49.6" y2="151.5" class="d-ax" marker-end="url(#ah)"/><line x1="49.6" y1="108.5" x2="55.4" y2="81.5" class="d-ax" marker-end="url(#ah)"/><text x="140.0" y="258.0" text-anchor="middle" class="d-t s m">P → R: requests · R → P: holds</text><line x1="300.0" y1="130.0" x2="340.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="470.0" y="18.0" text-anchor="middle" class="d-t b">Wait-for graph</text><line x1="422.0" y1="60.0" x2="516.0" y2="60.0" class="d-r w" marker-end="url(#ah)"/><line x1="540.0" y1="82.0" x2="540.0" y2="176.0" class="d-r w" marker-end="url(#ah)"/><line x1="518.0" y1="200.0" x2="424.0" y2="200.0" class="d-r w" marker-end="url(#ah)"/><line x1="400.0" y1="178.0" x2="400.0" y2="84.0" class="d-r w" marker-end="url(#ah)"/><circle cx="400" cy="60" r="20" class="d-box a"/><text x="400.0" y="65.0" text-anchor="middle" class="d-t s">P1</text><circle cx="540" cy="60" r="20" class="d-box a"/><text x="540.0" y="65.0" text-anchor="middle" class="d-t s">P2</text><circle cx="540" cy="200" r="20" class="d-box a"/><text x="540.0" y="205.0" text-anchor="middle" class="d-t s">P3</text><circle cx="400" cy="200" r="20" class="d-box a"/><text x="400.0" y="205.0" text-anchor="middle" class="d-t s">P4</text><text x="470.0" y="135.0" text-anchor="middle" class="d-t s r">cycle ⇒</text><text x="470.0" y="152.0" text-anchor="middle" class="d-t s r">deadlock</text></svg><figcaption>Wait-for graph (Example 1). Removing the resources from the allocation graph leaves P1 → P2 → P3 → P4 → P1: a closed cycle, so the four processes are deadlocked.</figcaption></figure>

**Multiple instances: matrix algorithm** with *Available*, *Allocation* and *Request* (what each task is waiting for now):

1. *Work* = *Available*; *Finish[i]* = false for every task holding resources.
2. Find a task with *Finish[i]* = false and *Request[i]* ≤ *Work*; if none, go to 4.
3. *Work* += *Allocation[i]*; *Finish[i]* = true; go to 2.
4. Tasks with *Finish[i]* still false are **deadlocked**.

**Check:** the single-instance part is correct. The multiple-instance part describes the **Banker's algorithm** (with *Max* and *Need*, granting a request only if the state stays safe). That is deadlock **avoidance**: it runs before a request is granted. Detection runs on the current state with the *Request* matrix, as above.
:::

## S3 Semaphores and priority
(a) Differentiate between binary and counting semaphores. (b) What is a semaphore? (c) What is priority in a real-time system?

::: answer
**(a)** A **binary** semaphore takes only 0 or 1 and guards one resource or signals one event. A **counting** semaphore takes values 0 to $N$ and guards a pool of $N$ identical resources or counts events.

**(b)** A **semaphore** is a kernel integer variable used to synchronise tasks. *wait (P)* decrements it and blocks the task if no unit is free; *signal (V)* increments it and wakes a waiting task. It provides mutual exclusion and event signalling.

**(c)** **Priority** is the number that tells the scheduler which ready task to run first. Tasks with tighter deadlines or shorter periods get higher priority, and in a real-time system a task's priority must not degrade over time.

**Check:** (a) "binary is very common in hard real time, counting is useful in soft real time" is not a real distinction; both are used in both. (b) and (c) are correct.
:::

## S4 PCP
How are deadlocks, unbounded priority inversion and chain blocking prevented using PCP?

::: answer
Under PCP each resource has a **ceiling** = the highest priority of any task that may use it. A task may lock a free resource only if its priority is **higher than the current system ceiling** (the highest ceiling of resources now locked by other tasks), and a task that blocks a higher-priority task **inherits** that task's priority.

- **Deadlock:** a task can only take a resource when none of the resources it might later need is held by another task, so no task can hold part of what another needs while waiting for the rest. The circular wait never forms.
- **Unbounded priority inversion:** the low-priority holder inherits the blocked task's priority, so medium-priority tasks cannot pre-empt it; the inversion lasts at most one critical section.
- **Chain blocking:** a task can be blocked **at most once**, for the length of one critical section of one lower-priority task, because once it starts it will find all its resources free.

**Check:** correct.
:::

## S5 Priority inversion and how to avoid it
(a) Explain priority inversion in the context of real-time scheduling. (b) Explain methods used to avoid priority inversion.

::: answer
**(a)** **Priority inversion** happens when a high-priority task H must wait for a lower-priority task L, because L holds a shared resource (a lock) that H needs. The inversion becomes **unbounded** when medium-priority tasks M, which do not need the resource, pre-empt L: H then waits for all of them as well.

<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Priority inversion. (a) L holds the lock; H blocks on it at t = 4, then M pre-empts L and runs for as long as it likes, so H waits for M: the inversion is unbounded. (b) With priority inheritance L runs at H’s priority until it releases the lock at t = 7, so M cannot cut in and H finishes at 10."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="60.0" y="16.0" text-anchor="start" class="d-t b">(a) Unbounded inversion</text><text x="50.0" y="42.0" text-anchor="end" class="d-t b">H</text><line x1="60.0" y1="52.0" x2="580.0" y2="52.0" class="d-mut"/><rect x="138" y="30" width="26" height="22" rx="4" class="d-box a"/><rect x="424" y="30" width="78" height="22" rx="4" class="d-box a"/><text x="463.0" y="46.0" text-anchor="middle" class="d-t s">CS</text><text x="50.0" y="76.0" text-anchor="end" class="d-t b">M</text><line x1="60.0" y1="86.0" x2="580.0" y2="86.0" class="d-mut"/><rect x="190" y="64" width="182" height="22" rx="4" class="d-box b"/><text x="281.0" y="80.0" text-anchor="middle" class="d-t s">M runs (no lock)</text><text x="50.0" y="110.0" text-anchor="end" class="d-t b">L</text><line x1="60.0" y1="120.0" x2="580.0" y2="120.0" class="d-mut"/><rect x="60" y="98" width="78" height="22" rx="4" class="d-box c"/><text x="99.0" y="114.0" text-anchor="middle" class="d-t s">CS</text><rect x="164" y="98" width="26" height="22" rx="4" class="d-box c"/><rect x="372" y="98" width="52" height="22" rx="4" class="d-box c"/><text x="398.0" y="114.0" text-anchor="middle" class="d-t s">CS</text><text x="294.0" y="46.0" text-anchor="middle" class="d-t s r">H blocked on the lock</text><text x="60.0" y="152.0" text-anchor="start" class="d-t b">(b) With priority inheritance</text><text x="50.0" y="178.0" text-anchor="end" class="d-t b">H</text><line x1="60.0" y1="188.0" x2="580.0" y2="188.0" class="d-mut"/><rect x="138" y="166" width="26" height="22" rx="4" class="d-box a"/><rect x="242" y="166" width="78" height="22" rx="4" class="d-box a"/><text x="281.0" y="182.0" text-anchor="middle" class="d-t s">CS</text><text x="50.0" y="212.0" text-anchor="end" class="d-t b">M</text><line x1="60.0" y1="222.0" x2="580.0" y2="222.0" class="d-mut"/><rect x="320" y="200" width="182" height="22" rx="4" class="d-box b"/><text x="411.0" y="216.0" text-anchor="middle" class="d-t s">M waits</text><text x="50.0" y="246.0" text-anchor="end" class="d-t b">L</text><line x1="60.0" y1="256.0" x2="580.0" y2="256.0" class="d-mut"/><rect x="60" y="234" width="78" height="22" rx="4" class="d-box c"/><text x="99.0" y="250.0" text-anchor="middle" class="d-t s">CS</text><rect x="164" y="234" width="78" height="22" rx="4" class="d-box a"/><text x="203.0" y="250.0" text-anchor="middle" class="d-t s">L at H prio</text><line x1="60.0" y1="270.0" x2="588.0" y2="270.0" class="d-ax" marker-end="url(#ah)"/><line x1="60.0" y1="270.0" x2="60.0" y2="275.0" class="d-ax"/><text x="60.0" y="290.0" text-anchor="middle" class="d-t s m">0</text><line x1="112.0" y1="270.0" x2="112.0" y2="275.0" class="d-ax"/><text x="112.0" y="290.0" text-anchor="middle" class="d-t s m">2</text><line x1="164.0" y1="270.0" x2="164.0" y2="275.0" class="d-ax"/><text x="164.0" y="290.0" text-anchor="middle" class="d-t s m">4</text><line x1="216.0" y1="270.0" x2="216.0" y2="275.0" class="d-ax"/><text x="216.0" y="290.0" text-anchor="middle" class="d-t s m">6</text><line x1="268.0" y1="270.0" x2="268.0" y2="275.0" class="d-ax"/><text x="268.0" y="290.0" text-anchor="middle" class="d-t s m">8</text><line x1="320.0" y1="270.0" x2="320.0" y2="275.0" class="d-ax"/><text x="320.0" y="290.0" text-anchor="middle" class="d-t s m">10</text><line x1="372.0" y1="270.0" x2="372.0" y2="275.0" class="d-ax"/><text x="372.0" y="290.0" text-anchor="middle" class="d-t s m">12</text><line x1="424.0" y1="270.0" x2="424.0" y2="275.0" class="d-ax"/><text x="424.0" y="290.0" text-anchor="middle" class="d-t s m">14</text><line x1="476.0" y1="270.0" x2="476.0" y2="275.0" class="d-ax"/><text x="476.0" y="290.0" text-anchor="middle" class="d-t s m">16</text><line x1="528.0" y1="270.0" x2="528.0" y2="275.0" class="d-ax"/><text x="528.0" y="290.0" text-anchor="middle" class="d-t s m">18</text><line x1="580.0" y1="270.0" x2="580.0" y2="275.0" class="d-ax"/><text x="580.0" y="290.0" text-anchor="middle" class="d-t s m">20</text></svg><figcaption>Priority inversion. (a) L holds the lock; H blocks on it at t = 4, then M pre-empts L and runs for as long as it likes, so H waits for M: the inversion is unbounded. (b) With priority inheritance L runs at H’s priority until it releases the lock at t = 7, so M cannot cut in and H finishes at 10.</figcaption></figure>

Fixes: **priority inheritance** (L temporarily runs at H's priority), the **priority ceiling protocol**, or keeping critical sections short and non-pre-emptible.

**(b)**

- **Priority inheritance protocol (PIP):** the low-priority holder temporarily runs at the priority of the highest task it blocks, and drops back when it releases the resource.
- **Priority ceiling protocol (PCP):** each resource has a ceiling (the highest priority of its users); a task may lock only when its priority is above the current system ceiling. Prevents deadlock and chain blocking too.
- **Immediate ceiling (highest locker):** the holder's priority is raised to the ceiling as soon as it locks.
- **Avoid blocking:** non-blocking (lock-free) data structures, message passing, or very short non-pre-emptible critical sections.

**Check:** correct.
:::

## S6 PIP and PCP as greedy algorithms
Can PIP and PCP be considered greedy algorithms?

::: answer
- **PIP is greedy:** a free resource is **always** granted at once to the task that asks. This can lead to deadlock and chain blocking.
- **PCP is not greedy:** a task may be **refused a free resource** if its priority is not above the current system ceiling. Giving up this immediate grant is what lets PCP avoid deadlock and chain blocking.

**Check:** left blank in the handwritten set.
:::

## S7 Types of priority inversion under PCP
What types of priority inversion can a task undergo because of a lower-priority task under PCP?

::: answer
1. **Direct inversion:** a high-priority task waits for a resource that a lower-priority task holds.
2. **Inheritance-related inversion:** the low-priority holder inherits a high priority, so medium-priority tasks that do not need the resource are kept waiting.
3. **Avoidance-related (ceiling) inversion:** a task asks for a **free** resource but is refused because its priority is not above the system ceiling set by a lower-priority task. This is the price PCP pays to avoid deadlock.

Each task suffers at most one such inversion, of at most one critical section.

**Check:** left blank in the handwritten set.
:::

## I1 Performance vs behavioural constraints
Differentiate between performance and behavioural constraints in a real-time system.

::: answer
| | Performance constraint | Behavioural constraint |
|---|---|---|
| Imposed on | the **computer system** (its response) | the **environment** (the stimuli it generates) |
| Ensures | the computer responds fast enough | the environment behaves well |
| Example | "the dial tone must sound within 2 s of lifting the handset" | "the next digit is dialled within 5 s of the previous one" |

Both kinds can be delay, deadline or duration constraints.

**Check:** correct.
:::

## I2 Hard, firm and soft real-time systems
Explain the important differences between hard, firm and soft real-time systems.

::: answer
<figure class="fig"><svg viewBox="0 0 600 185" role="img" aria-label="Utility of a result against its response time. Hard: a late result means system failure. Firm: a late result is worthless and is discarded. Soft: the value falls gradually after the deadline."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="40.0" y1="150.0" x2="195.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="40.0" y1="150.0" x2="40.0" y2="30.0" class="d-ax" marker-end="url(#ah)"/><text x="195.0" y="172.0" text-anchor="end" class="d-t s">time</text><text x="48.0" y="34.0" text-anchor="start" class="d-t s">utility</text><line x1="115.0" y1="150.0" x2="115.0" y2="40.0" class="d-mut"/><text x="115.0" y="172.0" text-anchor="middle" class="d-t s m">deadline</text><text x="120.0" y="18.0" text-anchor="middle" class="d-t b">Hard</text><polyline class="d-r" points="40.0,60.0 115.0,60.0"/><polyline class="d-r dash" points="115.0,60.0 115.0,150.0"/><polyline class="d-r" points="115.0,150.0 190.0,150.0"/><text x="155.0" y="140.0" text-anchor="middle" class="d-t s r">failure</text><line x1="235.0" y1="150.0" x2="390.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="235.0" y1="150.0" x2="235.0" y2="30.0" class="d-ax" marker-end="url(#ah)"/><text x="390.0" y="172.0" text-anchor="end" class="d-t s">time</text><text x="243.0" y="34.0" text-anchor="start" class="d-t s">utility</text><line x1="310.0" y1="150.0" x2="310.0" y2="40.0" class="d-mut"/><text x="310.0" y="172.0" text-anchor="middle" class="d-t s m">deadline</text><text x="315.0" y="18.0" text-anchor="middle" class="d-t b">Firm</text><polyline class="d-b" points="235.0,60.0 310.0,60.0 310.0,149.0 385.0,149.0"/><text x="350.0" y="140.0" text-anchor="middle" class="d-t s m">useless</text><line x1="430.0" y1="150.0" x2="585.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="430.0" y1="150.0" x2="430.0" y2="30.0" class="d-ax" marker-end="url(#ah)"/><text x="585.0" y="172.0" text-anchor="end" class="d-t s">time</text><text x="438.0" y="34.0" text-anchor="start" class="d-t s">utility</text><line x1="505.0" y1="150.0" x2="505.0" y2="40.0" class="d-mut"/><text x="505.0" y="172.0" text-anchor="middle" class="d-t s m">deadline</text><text x="510.0" y="18.0" text-anchor="middle" class="d-t b">Soft</text><polyline class="d-c" points="430.0,60.0 505.0,60.0 512.5,81.4 520.0,97.4 527.5,109.5 535.0,118.6 542.5,125.4 550.0,130.5 557.5,134.4 565.0,137.3 572.5,139.4 580.0,141.1"/><text x="545.0" y="90.0" text-anchor="middle" class="d-t s m">degrades</text></svg><figcaption>Utility of a result against its response time. Hard: a late result means system failure. Firm: a late result is worthless and is discarded. Soft: the value falls gradually after the deadline.</figcaption></figure>

- **Hard:** a missed deadline is a **system failure**, possibly catastrophic. *Examples:* airbag, pacemaker, flight control.
- **Firm:** a late result is **worthless** and is discarded, but the system keeps working. *Examples:* online exam that ignores late answers, a video frame that arrives too late to show.
- **Soft:** a late result is still useful, but its value **falls** with lateness; quality degrades. *Examples:* video streaming, online games, web services.

**Check:** correct, with matching utility sketches.
:::

## I3 Timing constraints
List the different types of timing constraints that can occur in a real-time system.

::: answer
Timing constraints are first split into **performance** constraints (on the computer) and **behavioural** constraints (on the environment). Each can be:

- **Delay constraint:** a minimum time between two events. *E.g.* the next digit is not accepted until 10 ms after the last.
- **Deadline constraint:** a maximum time between two events. *E.g.* the dial tone within 2 s of lifting the handset.
- **Duration constraint:** how long an event lasts. *E.g.* the ring tone lasts at least 2 s.

**Check:** correct.
:::

## I4 RTOS features and file system
(a) Describe five features of a real-time operating system. (b) Explain the requirements of a real-time file system and compare it with a traditional one.

::: answer
**(a)** - **Real-time priority levels** that the OS never changes (static priorities).
- **Fast task pre-emption:** a high-priority task that becomes ready runs almost at once.
- **Predictable and fast interrupt latency.**
- **Support for resource sharing** among real-time tasks (PIP/PCP mutexes).
- **Real-time memory management:** static allocation, memory locking, no unpredictable paging.
- **Support for asynchronous I/O**, so a task does not block on I/O.
- **High-resolution timers and clocks.**

**(b)** A real-time file system must give **predictable, bounded** read and write times.

- **Contiguous files:** the blocks of a file are stored next to each other, so reads have no seek jitter.
- **Pre-allocation:** space is reserved when the file is created, so a write never waits for (or fails on) block allocation.
- **Priority-aware I/O:** disk requests are served by priority or deadline, not first-come-first-served.

A **traditional** file system allocates blocks on demand wherever they are free and serves requests in arrival order. That gives good average throughput but unpredictable access times (jitter), and a write can even fail when the disk fills.

**Check:** (a) lists determinism, concurrency, responsiveness, reliability and timeliness. These are good *properties*, but the expected *features* are those above (static priorities, fast pre-emption, bounded interrupt latency, resource-sharing support, memory locking, asynchronous I/O, timers). (b) was left blank.
:::

## I5 Memory allocation
List the methods of memory allocation and deallocation, and say which suit real-time systems.

::: answer
**Allocation:**

- **Static:** memory fixed at compile or start-up time. Fully predictable: the **preferred** method for real-time tasks.
- **Stack:** local variables, allocated on function call and freed on return; predictable if the stack size is bounded.
- **Dynamic (heap):** `malloc`/`new` at run time. Timing varies and the heap fragments, so avoid it in time-critical code, or use **fixed-size memory pools** that allocate in constant time.

**Deallocation:**

- **Manual (explicit):** the program frees memory itself; predictable, but risks leaks and dangling pointers.
- **Automatic (garbage collection):** the runtime finds and frees unused memory. Ordinary garbage collectors pause the program for unpredictable times, so they are **unsuitable** for hard real time unless a real-time (incremental) collector is used.

**Check:** the lists are right, but it should say that dynamic allocation and garbage collection are unpredictable and avoided in hard real-time code.
:::

## I6 Latency, examples of RTOS and concurrency
(a) List methods of reducing latency. (b) Give examples of RTOSs. (c) Explain the concept of task concurrency and two methods to achieve it.

::: answer
**(a)** Pre-emptive priority scheduling; short ISRs with the heavy work deferred to a task; fast context switching; no dynamic memory allocation in critical paths; DMA and hardware timers for I/O; keeping interrupts disabled for as short a time as possible.

**(b)** FreeRTOS, VxWorks, QNX Neutrino, RTLinux / PREEMPT_RT Linux, Zephyr, µC/OS, RTEMS.

**(c)** **Concurrency** is the ability of a system to make progress on several tasks over the same period. On one CPU the tasks interleave; on several CPUs they run in parallel. Methods:

- **Multitasking:** separate tasks (processes) share CPU time under the scheduler.
- **Multithreading:** several threads run inside one process and share its memory.

Shared data must then be protected with mutexes or semaphores.

**Check:** correct.
:::

## T1 Task classes, RTOS vs GPOS and scheduling
(a) Classify real-time tasks by type. (b) How does an RTOS differ from a general-purpose OS? (c) Explain the difference between pre-emptive and non-pre-emptive scheduling.

::: answer
**(a)** Periodic (fixed period), aperiodic (random arrivals, no minimum gap), sporadic (random, with a minimum gap and usually a hard deadline). By importance: critical (a miss is catastrophic) and non-critical.

**(b)**

| RTOS | GPOS |
|---|---|
| Goal: **meet deadlines**; worst-case time is bounded | Goal: good **average** throughput and fairness |
| Static priorities the OS never changes | Priorities adjusted dynamically (aging) |
| Pre-emptive kernel, bounded interrupt latency | Kernel paths may not be pre-emptible |
| Static memory, no paging in critical tasks | Virtual memory and paging |
| Small footprint, often in ROM | Large, general services |

**(c)** **Pre-emptive:** a higher-priority task that becomes ready interrupts the running one at once; good response, but more context switches and shared-resource issues. **Non-pre-emptive:** the running task keeps the CPU until it finishes or blocks; simple and low overhead, but an urgent task may wait for a long, low-priority one.

**Check:** correct.
:::

## T2 Context switch, TCB and interrupt-only systems
(a) What is context switching? (b) What is a task control block? (c) What is an interrupt-only system?

::: answer
**(a)** **Context switching** saves the state (registers, program counter, stack pointer) of the running task in its TCB and loads the saved state of the next task, so a pre-empted task can later resume exactly where it stopped. It costs time, so an RTOS keeps it short and bounded.

<figure class="fig"><svg viewBox="0 0 600 140" role="img" aria-label="Interrupt and context switch. The running task’s registers, program counter and stack pointer are saved in its task control block, the ISR runs, the scheduler picks the next task and its context is restored. This overhead must be small and bounded."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="6" y="30" width="76" height="56" rx="10" class="d-box c"/><text x="44.0" y="55.0" text-anchor="middle" class="d-t s">Task A</text><text x="44.0" y="71.0" text-anchor="middle" class="d-t s">running</text><rect x="90" y="30" width="76" height="56" rx="10" class="d-box b"/><text x="128.0" y="63.0" text-anchor="middle" class="d-t s">Interrupt</text><line x1="82.0" y1="58.0" x2="89.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="174" y="30" width="76" height="56" rx="10" class="d-box"/><text x="212.0" y="55.0" text-anchor="middle" class="d-t s">Save A’s</text><text x="212.0" y="71.0" text-anchor="middle" class="d-t s">context</text><line x1="166.0" y1="58.0" x2="173.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="258" y="30" width="76" height="56" rx="10" class="d-box b"/><text x="296.0" y="63.0" text-anchor="middle" class="d-t s">ISR</text><line x1="250.0" y1="58.0" x2="257.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="342" y="30" width="76" height="56" rx="10" class="d-box a"/><text x="380.0" y="55.0" text-anchor="middle" class="d-t s">Scheduler</text><text x="380.0" y="71.0" text-anchor="middle" class="d-t s">picks B</text><line x1="334.0" y1="58.0" x2="341.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="426" y="30" width="76" height="56" rx="10" class="d-box"/><text x="464.0" y="55.0" text-anchor="middle" class="d-t s">Restore B’s</text><text x="464.0" y="71.0" text-anchor="middle" class="d-t s">context</text><line x1="418.0" y1="58.0" x2="425.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="510" y="30" width="76" height="56" rx="10" class="d-box c"/><text x="548.0" y="55.0" text-anchor="middle" class="d-t s">Task B</text><text x="548.0" y="71.0" text-anchor="middle" class="d-t s">running</text><line x1="502.0" y1="58.0" x2="509.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><line x1="174.0" y1="110.0" x2="502.0" y2="110.0" class="d-r"/><text x="300.0" y="130.0" text-anchor="middle" class="d-t s r">overhead: interrupt latency + context switch time</text></svg><figcaption>Interrupt and context switch. The running task’s registers, program counter and stack pointer are saved in its task control block, the ISR runs, the scheduler picks the next task and its context is restored. This overhead must be small and bounded.</figcaption></figure>

**(b)** A **task control block (TCB)** is the kernel's record of one task: task ID, state (ready, running, blocked), priority, saved context, stack pointer, and timing information such as period and deadline.

**(c)** An **interrupt-only (foreground) system** has no main loop doing work: the CPU sleeps or idles until an interrupt occurs, and all work is done in the interrupt service routines. It is simple and low-power, but long ISRs block other interrupts. A **foreground/background** system adds a background main loop for non-urgent work.

**Check:** correct.
:::

## D1 Real-time software development
(a) What are the main stages in developing real-time software? (b) How does it differ from traditional development? (c) Why is timing analysis important? (d) What is the role of the requirement specification?

::: answer
**(a)** Requirements analysis (functions and timing constraints) → system design (architecture, task set, scheduling, hardware/software split) → implementation → integration → testing and verification (functional and timing) → deployment and maintenance.

**(b)** Traditional software is judged on **functional correctness** only; real-time software must also be **temporally correct**: right result, at the right time. That adds worst-case execution-time analysis, schedulability analysis, and timing tests at every stage.

**(c)** Timing analysis (WCET and schedulability) shows **before deployment** that every task meets its deadline in the worst case. Testing alone cannot cover every timing combination.

**(d)** The specification states precisely what the system must do and **when**: functions, deadlines, periods, jitter limits, reliability, safety and resource limits. Design, implementation and tests are all checked against it.

**Check:** correct.
:::

## D2 Design considerations and determinism
(a) What are the key design considerations for real-time software? (b) How do you handle concurrency and task scheduling? (c) Explain the importance of deterministic behaviour.

::: answer
**(a)** Task decomposition and priorities; scheduling policy and schedulability; worst-case execution times; resource sharing (PCP); interrupt design; memory (static allocation); fault tolerance and safety; communication delays.

**(b)** Split the work into tasks; give priorities (RM, DM or EDF); check schedulability; protect shared data with mutexes or message queues; avoid deadlock with a fixed lock order or PCP.

**(c)** **Determinism** means the system always responds within a known, bounded time. Without it no deadline can be guaranteed, which is unacceptable in hard real-time systems. It comes from bounded algorithms, static memory, bounded interrupt latency and fixed priorities.

**Check:** correct.
:::

## D3 User interfaces
(a) Why is responsiveness critical in a real-time system interface? (b) What factors must be considered when developing a user interface for a real-time system? (c) How does a real-time UI differ from a standard one?

::: answer
**(a)** Operators act on what they see. A slow or stale display can make them take the wrong action, or miss an alarm, in a plant where seconds matter.

**(b)** Fast, bounded update of critical values; clear display of critical data and alarms with priority colours; simple, error-proof controls (confirm dangerous commands); fault indication; the UI must never block or slow the control tasks (run it at low priority).

**(c)** A real-time UI must show **current** data within a bounded time and react to events at once; in a standard UI, occasional delays are acceptable.

**Check:** correct.
:::

## D4 Events and databases
(a) How is event handling implemented in a real-time system? (b) What is an event-driven database, and how do real-time systems use databases? (c) What challenges arise when integrating them?

::: answer
**(a)** Events arrive as **interrupts** or messages; a short ISR records the event (in a queue or by signalling a semaphore) and a task of suitable priority handles it. Event queues keep events in order and stop bursts from being lost.

**(b)** An **event-driven (active) database** has **triggers**: rules that fire automatically when data changes (e.g. temperature above a limit raises an alarm). A real-time database also attaches **timing constraints** to transactions and treats data as valid only for a limited time. *Example:* position data valid for 200 ms.

**(c)** Meeting transaction deadlines; keeping data fresh (temporal validity); concurrency control without long blocking or priority inversion (plain two-phase locking is unsuitable); event overload; bounded database access time.

**Check:** correct.
:::

## D5 Embedded systems
(a) What are the common application areas of embedded systems? (b) How do you decide whether a system should be embedded? (c) What is the difference between general-purpose and embedded systems?

::: answer
**(a)** Automotive (engine control, ABS, airbags), consumer electronics (washing machines, smart TVs), industrial control (PLCs, robot arms), medical devices (pacemakers, infusion pumps), communications (routers), energy (smart meters, protection relays).

**(b)** Make it embedded when it performs a **dedicated** function, often with real-time constraints, and needs low cost, small size, low power and high reliability in volume.

**(c)** An **embedded** system is built into a larger device for one specific job, with fixed software and limited resources. A **general-purpose** computer runs many different user programs and has no fixed timing requirements.

**Check:** correct.
:::

## D6 Deployment
(a) What steps are involved in deploying a real-time system on a target? (b) Why is configuration important? (c) How do you make sure it works after deployment? (d) What challenges arise?

::: answer
**(a)** Build for the target hardware; load (flash) the software; configure parameters (priorities, periods, I/O addresses, network settings); connect and calibrate sensors and actuators; verify timing and functions on site (commissioning); hand over with documentation.

**(b)** Wrong settings (priority, sampling period, baud rate, I/O map) can break timing or make the system act on the wrong signals, even when the code is correct.

**(c)** Site acceptance tests in the real environment, environmental tests (temperature, vibration, EMC), continuous monitoring and logging, watchdogs, and controlled update procedures.

**(d)** Limited hardware (CPU, memory), harsh environments, unstable power, network delay, security risks, and the difficulty of updating systems that cannot be stopped.

**Check:** correct.
:::

## D7 Performance metrics
(a) What metrics are used to analyse real-time performance? (b) Why do response time and throughput matter? (c) How do you check that timing requirements are met? (d) State Little's law.

::: answer
**(a)** Response time (latency), worst-case response time, throughput, jitter, deadline miss ratio, CPU utilisation, memory use.

**(b)** **Response time** shows whether each task finishes before its deadline; **throughput** (jobs per unit time) shows whether the system keeps up with the arrival rate without queues growing.

**(c)** Compare the measured worst-case completion times with the deadlines over long runs and under maximum load, using timestamps, logic analysers or trace tools, and confirm with schedulability analysis.

**(d)** **Little's law:** $L = \lambda W$, where $L$ = average number of items in the system, $\lambda$ = average arrival rate and $W$ = average time an item spends in the system. *Example:* messages arrive at 200 per second and each spends 15 ms in the queue, so on average $L = 200 \times 0.015 = 3$ messages are waiting.

**Check:** correct.
:::

## D8 Testing
(a) What types of testing are used to evaluate real-time performance? (b) Why is simulation often used before deployment? (c) How does stress testing differ from functional testing? (d) How does testing improve reliability, and which tools are used?

::: answer
**(a)** Functional testing; timing (deadline) testing; stress and load testing; fault-injection testing; regression testing; hardware-in-the-loop testing.

**(b)** Simulation finds timing and logic errors safely and cheaply, can reproduce rare or dangerous conditions (faults, overload), and allows testing before the hardware exists.

**(c)** **Functional testing** checks correct outputs under normal conditions. **Stress testing** pushes the system beyond its normal load (event bursts, maximum rates, low memory) to check that deadlines are still met and that it fails safely.

**(d)** Testing finds bugs and timing violations before they reach operation. Tools: profilers and trace tools (CPU use, execution time), logic analysers and oscilloscopes, simulators, load generators, RTOS-aware debuggers.

**Check:** correct.
:::

## D9 Interrupts, requirements and state machines
(a) Why must you understand how interrupts work when writing real-time applications? (b) Distinguish system requirements analysis from specification, and say when a specification may change. (c) Differentiate a state chart from a finite-state machine.

::: answer
**(a)** Interrupts let the system react at once to external events, but they pre-empt tasks, add latency and can corrupt shared data. The designer must keep ISRs short, set interrupt priorities, protect shared data, and include ISR time in the timing analysis.

**(b)** **Requirements analysis** is the *process* of finding out what the system must do (talking to users, studying the process). The **specification** is the *document* that records those requirements precisely. It may change when the user's needs change, errors are found, technology or regulations change, or a feasibility problem appears.

**(c)** A **finite-state machine** is a flat model with a limited set of states and transitions; it grows very large for real systems. A **state chart** (Harel) extends it with **hierarchy** (states inside states), **concurrency** (parallel regions) and history, so large reactive systems stay readable.

**Check:** correct.
:::
