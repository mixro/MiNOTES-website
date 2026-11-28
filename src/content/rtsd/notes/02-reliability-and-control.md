# Reliability, control and architectures

*Outcome 1 · CSEU 08104 Real Time System Design*

This chapter covers how real-time systems stay safe and reliable, the computer control strategies used in automatic systems, and how control is organised across one or many computers.

## Safety and the fail-safe state

A **fail-safe state** is a state that, if entered when the system fails, causes **no damage**. One way to reach it is to have another part of the system take over the operations of the failed part. Traditional non-real-time systems usually have one or more fail-safe states: a word processor can simply stop.

**Safety-critical systems have no fail-safe state.** A safety-critical system is one whose failure can cause severe damage. An aircraft's flight controller cannot just "stop safely" in mid-air. For such systems, **safety has to be guaranteed through very high reliability**.

- A **safe** system does no damage when it fails. A document editor, for example, is safe but may be unreliable: it can crash often without causing harm.
- A **reliable** system runs for long periods without failing.

## How to achieve high reliability

| Technique | What it is | How it works | Example |
|---|---|---|---|
| **1. Error avoidance** | Prevent errors from happening at all | Careful design, coding standards, quality components, best practice | Surge protectors; strict input validation |
| **2. Error detection and removal** | Find errors and correct them before they cause failure | Parity, checksums, error-correcting codes, testing and maintenance | Memory that corrects bit flips with ECC |
| **3. Fault tolerance** | Keep working when parts fail | Redundant processors, disks or supplies, with failover | RAID disk arrays |
| **4. Built-in self-test (BIST)** | The system tests its own health | Diagnostics at start-up and during operation | An MCU checking RAM and CPU before running |

### Hardware fault tolerance

- **Built-in self-test (BIST):** the system **tests itself automatically at regular intervals** (memory, processor, other hardware) without external equipment. When it finds a fault, it can switch to a backup component.
- **Triple modular redundancy (TMR):** the critical module is replicated **three times**. All three get the same input, and a **majority voter** selects the output. One faulty module is outvoted. TMR is used in spacecraft and nuclear systems.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="10" y="95" width="80" height="46" rx="10" class="d-box"/><text x="50.0" y="123.0" text-anchor="middle" class="d-t b">Input</text><rect x="170" y="20" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="48.0" text-anchor="middle" class="d-t b">Module 1</text><line x1="90.0" y1="118.0" x2="168.0" y2="43.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="43.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="98" width="130" height="46" rx="10" class="d-box b"/><text x="235.0" y="118.0" text-anchor="middle" class="d-t b">Module 2</text><text x="235.0" y="134.0" text-anchor="middle" class="d-t b">(faulty)</text><line x1="90.0" y1="118.0" x2="168.0" y2="121.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="121.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="170" y="176" width="130" height="46" rx="10" class="d-box a"/><text x="235.0" y="204.0" text-anchor="middle" class="d-t b">Module 3</text><line x1="90.0" y1="118.0" x2="168.0" y2="199.0" class="d-ax" marker-end="url(#ah)"/><line x1="300.0" y1="199.0" x2="398.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="400" y="88" width="90" height="60" rx="10" class="d-box c"/><text x="445.0" y="115.0" text-anchor="middle" class="d-t b">Majority</text><text x="445.0" y="131.0" text-anchor="middle" class="d-t b">voter</text><line x1="490.0" y1="118.0" x2="520.0" y2="118.0" class="d-ax" marker-end="url(#ah)"/><rect x="522" y="95" width="70" height="46" rx="10" class="d-box"/><text x="557.0" y="123.0" text-anchor="middle" class="d-t b">Output</text></svg><figcaption>Triple modular redundancy (TMR). Three identical modules get the same input; the voter outputs the majority value, so one faulty module (here module 2) is outvoted.</figcaption></figure>

### Software fault tolerance

- **N-version programming:** several **independent versions** of the same module are written by different teams from the same specification. They all run on the same input, and a **vote** decides the output.
- **Recovery blocks:** a **primary** module runs and its result goes through an **acceptance test**. If the test fails, an **alternate** module is tried, and so on until a result passes or every alternate has failed.
- **Checkpointing and rollback recovery:** the system state is saved periodically, and after a fault the system **rolls back** to the last good checkpoint and re-executes.

### Why software fault tolerance is harder than hardware fault tolerance

Hardware redundancy works because copies of a component **fail independently**: physical faults are random.

Software faults are **design faults**. Different versions of a program show **statistically correlated failures**, because they tend to fail on the same difficult inputs for the same reasons. Running copies of the same program gives no protection at all.

Redundancy in software also costs time: rerunning an alternate or voting is only possible for tasks with **large deadlines**.

### Built-in software for fault tolerance

Two advantages of built-in software:

1. **Early fault detection:** watchdog timers, self-tests and error checks find faults before they cause failure.
2. **Automatic recovery:** the software can restart a task, reset the system or switch to a backup module, so operation continues safely.

## Computer control concepts

| Strategy | How it works | Used for |
|---|---|---|
| **Sequential control** | Runs predefined steps in a fixed order, moving on when a condition or timer is met. Simple and reliable, but cannot handle continuously changing processes. | Assembly lines, washing machines, traffic lights |
| **Direct digital control (DDC)** | A computer or MCU reads the field inputs directly, runs the control algorithm and drives the actuators | Building automation, HVAC, industrial processes |
| **PID control** | Feedback on the error between setpoint and measurement, using proportional, integral and derivative terms | Temperature, speed and pressure loops |
| **Adaptive control** | Adjusts its own parameters as the plant or environment changes | Robots, autopilots, chemical reactors |
| **Supervisory control** | A higher level monitors and coordinates lower-level controllers by sending **setpoints**; it does not drive actuators directly | Power plants, water treatment, large plants |

The PID law, for reference *(beyond the notes)*: $u(t) = K_p e(t) + K_i \int e\,dt + K_d \frac{de}{dt}$. In a real-time system it runs as a **periodic task**, and the sampling period must be kept with low jitter.

## Classifying real-time systems for automatic control

The control architecture describes how **decision-making authority** and **computing resources** are spread across the system.

<figure class="fig"><svg viewBox="0 0 600 215" role="img" aria-label="Control architectures. Centralized: one controller reads every sensor (S) and drives every actuator (A). Hierarchical: levels from supervision down to fast local control. Distributed: autonomous nodes cooperate over a network with no single master."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="100.0" y="18.0" text-anchor="middle" class="d-t b">Centralized</text><rect x="55" y="90" width="90" height="40" rx="10" class="d-box a"/><text x="100.0" y="115.0" text-anchor="middle" class="d-t b">Controller</text><circle cx="20" cy="40" r="15" class="d-box c"/><text x="20.0" y="45.0" text-anchor="middle" class="d-t s">S</text><line x1="20.0" y1="55.0" x2="72.0" y2="88.0" class="d-ax" marker-end="url(#ah)"/><circle cx="100" cy="40" r="15" class="d-box c"/><text x="100.0" y="45.0" text-anchor="middle" class="d-t s">S</text><line x1="100.0" y1="55.0" x2="100.0" y2="88.0" class="d-ax" marker-end="url(#ah)"/><circle cx="180" cy="40" r="15" class="d-box c"/><text x="180.0" y="45.0" text-anchor="middle" class="d-t s">S</text><line x1="180.0" y1="55.0" x2="128.0" y2="88.0" class="d-ax" marker-end="url(#ah)"/><circle cx="20" cy="185" r="15" class="d-box b"/><text x="20.0" y="190.0" text-anchor="middle" class="d-t s">A</text><line x1="72.0" y1="132.0" x2="20.0" y2="169.0" class="d-ax" marker-end="url(#ah)"/><circle cx="100" cy="185" r="15" class="d-box b"/><text x="100.0" y="190.0" text-anchor="middle" class="d-t s">A</text><line x1="100.0" y1="132.0" x2="100.0" y2="169.0" class="d-ax" marker-end="url(#ah)"/><circle cx="180" cy="185" r="15" class="d-box b"/><text x="180.0" y="190.0" text-anchor="middle" class="d-t s">A</text><line x1="128.0" y1="132.0" x2="180.0" y2="169.0" class="d-ax" marker-end="url(#ah)"/><text x="305.0" y="18.0" text-anchor="middle" class="d-t b">Hierarchical</text><rect x="260" y="32" width="90" height="32" rx="10" class="d-box a"/><text x="305.0" y="53.0" text-anchor="middle" class="d-t s">Supervisor</text><rect x="215" y="92" width="80" height="32" rx="10" class="d-box"/><text x="255.0" y="113.0" text-anchor="middle" class="d-t s">Coordinator</text><line x1="305.0" y1="64.0" x2="255.0" y2="90.0" class="d-ax" marker-end="url(#ah)"/><rect x="211" y="152" width="42" height="28" rx="10" class="d-box c"/><text x="232.0" y="171.0" text-anchor="middle" class="d-t s">Local</text><line x1="255.0" y1="124.0" x2="232.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><rect x="257" y="152" width="42" height="28" rx="10" class="d-box c"/><text x="278.0" y="171.0" text-anchor="middle" class="d-t s">Local</text><line x1="255.0" y1="124.0" x2="278.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><rect x="315" y="92" width="80" height="32" rx="10" class="d-box"/><text x="355.0" y="113.0" text-anchor="middle" class="d-t s">Coordinator</text><line x1="305.0" y1="64.0" x2="355.0" y2="90.0" class="d-ax" marker-end="url(#ah)"/><rect x="311" y="152" width="42" height="28" rx="10" class="d-box c"/><text x="332.0" y="171.0" text-anchor="middle" class="d-t s">Local</text><line x1="355.0" y1="124.0" x2="332.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><rect x="357" y="152" width="42" height="28" rx="10" class="d-box c"/><text x="378.0" y="171.0" text-anchor="middle" class="d-t s">Local</text><line x1="355.0" y1="124.0" x2="378.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><text x="305.0" y="205.0" text-anchor="middle" class="d-t s m">upper: planning · lower: fast control</text><text x="505.0" y="18.0" text-anchor="middle" class="d-t b">Distributed</text><line x1="460.0" y1="60.0" x2="550.0" y2="60.0" class="d-mut"/><line x1="460.0" y1="60.0" x2="585.0" y2="135.0" class="d-mut"/><line x1="460.0" y1="60.0" x2="505.0" y2="185.0" class="d-mut"/><line x1="460.0" y1="60.0" x2="425.0" y2="135.0" class="d-mut"/><line x1="550.0" y1="60.0" x2="585.0" y2="135.0" class="d-mut"/><line x1="550.0" y1="60.0" x2="505.0" y2="185.0" class="d-mut"/><line x1="550.0" y1="60.0" x2="425.0" y2="135.0" class="d-mut"/><line x1="585.0" y1="135.0" x2="505.0" y2="185.0" class="d-mut"/><line x1="585.0" y1="135.0" x2="425.0" y2="135.0" class="d-mut"/><line x1="505.0" y1="185.0" x2="425.0" y2="135.0" class="d-mut"/><circle cx="460" cy="60" r="19" class="d-box a"/><text x="460.0" y="65.0" text-anchor="middle" class="d-t s">N1</text><circle cx="550" cy="60" r="19" class="d-box a"/><text x="550.0" y="65.0" text-anchor="middle" class="d-t s">N2</text><circle cx="585" cy="135" r="19" class="d-box a"/><text x="585.0" y="140.0" text-anchor="middle" class="d-t s">N3</text><circle cx="505" cy="185" r="19" class="d-box a"/><text x="505.0" y="190.0" text-anchor="middle" class="d-t s">N4</text><circle cx="425" cy="135" r="19" class="d-box a"/><text x="425.0" y="140.0" text-anchor="middle" class="d-t s">N5</text></svg><figcaption>Control architectures. Centralized: one controller reads every sensor (S) and drives every actuator (A). Hierarchical: levels from supervision down to fast local control. Distributed: autonomous nodes cooperate over a network with no single master.</figcaption></figure>

### Centralized control

One central controller does all the processing, decides everything and drives every actuator. All sensors and actuators connect directly to it. Because every task shares one CPU, **blocking and priorities must be managed carefully**.

- **Characteristics:** a single controller and centralized scheduling, directly connected I/O, a simple architecture and predictable timing for small systems. It has a single point of failure and limited scalability.
- **Examples:** automatic doors, a basic infusion pump, a simple traffic light controller, small automation cells.
- **Advantages:** simple design; easy to implement and maintain; low hardware cost.
- **Disadvantages:** a **single point of failure**; limited scalability; performance falls as the load grows.

### Hierarchical systems

Controllers are arranged in a **tree of levels**, and each level reports to the one above it:

- **Lower level:** the fastest, most critical real-time work, such as sensors, actuators and local loops (e.g. stabilising voltage and frequency in a microgrid).
- **Middle level:** coordination of local controllers, removing steady-state errors, synchronising subsystems, alarms.
- **Upper level:** global optimisation, long-term scheduling, user interface, data logging, networking.

Strict deadlines are handled at the bottom and supervision at the top. Faults are better isolated, and the information flow is clear.

- **Examples:** mechanical ventilators, modern cars, patient monitors, air traffic control, factory automation cells.
- **Advantages:** better scalability; fault isolation; specialised control at each level; good coordination.
- **Disadvantages:** more complex and harder to design; **communication delays between levels**; higher hardware cost.

### Distributed systems

Many **autonomous nodes** cooperate over a network toward a shared goal, with **no single master** and no shared memory. They work by message passing, time synchronization, distributed decision algorithms, load balancing, and fault detection and recovery.

- **Examples:** the Internet, banking and ATM networks, reservation systems, e-commerce platforms, ICU patient monitoring networks.
- **Advantages:** high reliability and **no single point of failure**; local processing gives fast response; easy to scale; the load is shared.
- **Disadvantages:** complex design and debugging; **network delays can threaten deadlines**; higher initial cost; needs coordination algorithms.

A **real-time distributed control system (DCS)** is a distributed system in which each node controls part of the plant within its deadlines, and the nodes exchange data over a deterministic network such as CAN or a real-time Ethernet. Large process plants and power stations use one.

| | Centralized | Hierarchical | Distributed |
|---|---|---|---|
| Decision making | One controller | By level | Shared among peers |
| Single point of failure | Yes | Partly (upper levels) | No |
| Scalability | Low | Good | High |
| Timing risk | CPU overload | Delay between levels | Network delay |
| Typical size | Small | Medium to large | Large |
