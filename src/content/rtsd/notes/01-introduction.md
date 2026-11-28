# Real-time system concepts

*Outcome 1 · CSEU 08104 Real Time System Design*

A **real-time system** is a system whose correctness depends not only on the **logical result** of the computation but also on **the time at which the result is produced**. A correct answer delivered late can be as bad as a wrong answer.

A real-time system:

- runs **time-bounded tasks**;
- has a **specific response time** for each input;
- executes instructions at **regular intervals**;
- consists of a **controlling system**, a **controlled system** and the **environment**.

**Non-real-time tasks** have no time bound at all, for example a background report.

## Real-time versus embedded systems

An **embedded system** is an electronic system designed to perform a **dedicated function within a larger system**. It interacts with the real world and involves physical devices, but it **does not necessarily have a time bound**.

| | Real-time system | Embedded system |
|---|---|---|
| Emphasis | **Timing**: results must meet deadlines | **Dedicated function** inside a larger product |
| Time bound | Always | Not necessarily |
| Example | Airbag controller | Microwave oven controller |

Most real-time systems are embedded, but not every embedded system is real-time.

## Applications

1. Automated assembly plants
2. Chemical plant control
3. Cellular (mobile) systems
4. Video conferencing
5. Satellite guidance systems
6. Traffic control
7. Internet of Things (IoT)

## Types of real-time system

<figure class="fig"><svg viewBox="0 0 600 185" role="img" aria-label="Utility of a result against its response time. Hard: a late result means system failure. Firm: a late result is worthless and is discarded. Soft: the value falls gradually after the deadline."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="40.0" y1="150.0" x2="195.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="40.0" y1="150.0" x2="40.0" y2="30.0" class="d-ax" marker-end="url(#ah)"/><text x="195.0" y="172.0" text-anchor="end" class="d-t s">time</text><text x="48.0" y="34.0" text-anchor="start" class="d-t s">utility</text><line x1="115.0" y1="150.0" x2="115.0" y2="40.0" class="d-mut"/><text x="115.0" y="172.0" text-anchor="middle" class="d-t s m">deadline</text><text x="120.0" y="18.0" text-anchor="middle" class="d-t b">Hard</text><polyline class="d-r" points="40.0,60.0 115.0,60.0"/><polyline class="d-r dash" points="115.0,60.0 115.0,150.0"/><polyline class="d-r" points="115.0,150.0 190.0,150.0"/><text x="155.0" y="140.0" text-anchor="middle" class="d-t s r">failure</text><line x1="235.0" y1="150.0" x2="390.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="235.0" y1="150.0" x2="235.0" y2="30.0" class="d-ax" marker-end="url(#ah)"/><text x="390.0" y="172.0" text-anchor="end" class="d-t s">time</text><text x="243.0" y="34.0" text-anchor="start" class="d-t s">utility</text><line x1="310.0" y1="150.0" x2="310.0" y2="40.0" class="d-mut"/><text x="310.0" y="172.0" text-anchor="middle" class="d-t s m">deadline</text><text x="315.0" y="18.0" text-anchor="middle" class="d-t b">Firm</text><polyline class="d-b" points="235.0,60.0 310.0,60.0 310.0,149.0 385.0,149.0"/><text x="350.0" y="140.0" text-anchor="middle" class="d-t s m">useless</text><line x1="430.0" y1="150.0" x2="585.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><line x1="430.0" y1="150.0" x2="430.0" y2="30.0" class="d-ax" marker-end="url(#ah)"/><text x="585.0" y="172.0" text-anchor="end" class="d-t s">time</text><text x="438.0" y="34.0" text-anchor="start" class="d-t s">utility</text><line x1="505.0" y1="150.0" x2="505.0" y2="40.0" class="d-mut"/><text x="505.0" y="172.0" text-anchor="middle" class="d-t s m">deadline</text><text x="510.0" y="18.0" text-anchor="middle" class="d-t b">Soft</text><polyline class="d-c" points="430.0,60.0 505.0,60.0 512.5,81.4 520.0,97.4 527.5,109.5 535.0,118.6 542.5,125.4 550.0,130.5 557.5,134.4 565.0,137.3 572.5,139.4 580.0,141.1"/><text x="545.0" y="90.0" text-anchor="middle" class="d-t s m">degrades</text></svg><figcaption>Utility of a result against its response time. Hard: a late result means system failure. Firm: a late result is worthless and is discarded. Soft: the value falls gradually after the deadline.</figcaption></figure>

### Hard real-time

Missing a deadline is **completely unacceptable**: it counts as **system failure**.

- The timing requirements are extremely strict, and these systems are usually safety-critical.
- The task does **not** have to finish as fast as possible; it only has to finish **within its time bound**. That bound is typically a few microseconds to a few milliseconds.
- The penalty for missing a deadline is **orders of magnitude larger** than the reward for meeting it.
- *Examples:* airbag deployment, pacemaker, nuclear plant control, patient monitoring, spacecraft positioning, avionics, anti-missile systems.

### Firm real-time

A firm system lies **between hard and soft**. A late result is **useless and is discarded**, but the system does **not fail**.

- The utility of the result drops to **zero after the deadline**.
- Penalty and reward are of the **same order of magnitude**.
- *Examples:* video conferencing (a late frame is dropped), stock trading (late price data is useless), online exams (late answers are ignored), online transaction processing.

### Soft real-time

Deadlines matter, but an **occasional miss is tolerated**: performance **degrades gracefully**. Timing is expressed as an **average response time**, not an absolute bound.

- *Examples:* web browsing, video streaming, online games, airline reservation systems.

### Hard versus soft in industrial systems

| Feature | Hard real-time | Soft real-time |
|---|---|---|
| Definition | Deadline must never be missed; a miss is system failure | Occasional misses tolerated; system keeps running |
| Industrial examples | Reactor control, robot safety interlocks, chemical plant emergency shutdown | Process monitoring, HVAC control, assembly line scheduling |
| Effect of a miss | Catastrophic: accident, equipment damage, loss of life | Lower efficiency or quality, no total failure |
| Design focus | Predictability, reliability, fault tolerance, strict scheduling | Average performance and efficiency |
| Complexity and cost | Higher (redundancy, precise scheduling) | Lower, more flexible |
| Scheduling | Deterministic: rate monotonic, EDF | Priority-based or round robin; some misses allowed |

## Fundamental principles

These principles describe how a real-time system should be designed and operated to meet its goals:

1. **Timeliness:** tasks finish within their deadlines; late results may be useless or dangerous.
2. **Predictability:** behaviour is known in advance and repeatable for the same inputs.
3. **Reliability and fault tolerance:** the system keeps working when parts fail (redundancy, error detection).
4. **Resource management:** CPU, memory and I/O are allocated so every task can run on time.
5. **Determinism:** the same input gives the same output in a predictable time.
6. **Concurrency:** many tasks run together without conflicts or missed deadlines.
7. **Responsiveness:** the system reacts quickly to external events, in milliseconds or microseconds.

**Predictability** has a precise meaning: once a task is **admitted** into the system, its timing guarantee is never violated, provided the assumptions under which it was admitted still hold.

## Characteristics of real-time systems

| Characteristic | Meaning |
|---|---|
| **Time constraints** | Each result has a deadline. Example: a protection relay's late trip signal damages equipment even if the decision was right. |
| **New correctness criterion** | A logically correct result produced **after** the deadline counts as **incorrect**. |
| **Deterministic behaviour** | Response times are known in advance, so deadlines can be guaranteed. |
| **Embedded** | Most are built into the equipment they control (sensors → computer → actuators). |
| **Safety criticality** | Safety and reliability are bound together. A *safe* system does no damage when it fails; a *reliable* system runs for long periods without failing. |
| **Concurrency** | The system reads sensors, computes, updates displays and drives actuators at the same time. |
| **Distributed and feedback structure** | Parts are spread over several nodes and form control loops. |
| **Task criticality** | The cost of a task failing. It is **not** the same as priority: the more critical a task, the more reliable it must be made. |
| **Stability** | Under overload, the **most critical** deadlines are still met, even if less critical ones are missed (not "fairness"). |
| **Exception handling** | Systems run round the clock without operators, so a failure is detected and the system continues in a **gracefully degraded** mode instead of stopping abruptly. |
| **Reactive (event driven)** | Driven by stimuli from the environment. |
| **High cost of failure** | Failures can cost lives, equipment or money. |

## Basic model of a real-time system

<figure class="fig"><svg viewBox="0 0 600 280" role="img" aria-label="Basic model of a real-time system. The sensor measures the controlled system, the signal is conditioned and read through the input interface; the real-time computer decides, and the output interface and output conditioning drive the actuator. An operator interface lets people supervise."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="10" y="30" width="96" height="50" rx="10" class="d-box c"/><text x="58.0" y="60.0" text-anchor="middle" class="d-t b">Sensor</text><rect x="130" y="30" width="110" height="50" rx="10" class="d-box"/><text x="185.0" y="52.0" text-anchor="middle" class="d-t b">Input</text><text x="185.0" y="68.0" text-anchor="middle" class="d-t b">conditioning</text><rect x="264" y="30" width="96" height="50" rx="10" class="d-box"/><text x="312.0" y="52.0" text-anchor="middle" class="d-t b">Input</text><text x="312.0" y="68.0" text-anchor="middle" class="d-t b">interface</text><rect x="384" y="85" width="104" height="60" rx="10" class="d-box a"/><text x="436.0" y="112.0" text-anchor="middle" class="d-t b">Real-time</text><text x="436.0" y="128.0" text-anchor="middle" class="d-t b">computer</text><rect x="264" y="150" width="96" height="50" rx="10" class="d-box"/><text x="312.0" y="172.0" text-anchor="middle" class="d-t b">Output</text><text x="312.0" y="188.0" text-anchor="middle" class="d-t b">interface</text><rect x="130" y="150" width="110" height="50" rx="10" class="d-box"/><text x="185.0" y="172.0" text-anchor="middle" class="d-t b">Output</text><text x="185.0" y="188.0" text-anchor="middle" class="d-t b">conditioning</text><rect x="10" y="150" width="96" height="50" rx="10" class="d-box b"/><text x="58.0" y="180.0" text-anchor="middle" class="d-t b">Actuator</text><rect x="500" y="85" width="90" height="60" rx="10" class="d-box"/><text x="545.0" y="112.0" text-anchor="middle" class="d-t b">Operator</text><text x="545.0" y="128.0" text-anchor="middle" class="d-t b">(HCI)</text><line x1="106.0" y1="55.0" x2="128.0" y2="55.0" class="d-ax" marker-end="url(#ah)"/><line x1="240.0" y1="55.0" x2="262.0" y2="55.0" class="d-ax" marker-end="url(#ah)"/><line x1="360.0" y1="55.0" x2="430.0" y2="55.0" class="d-ax"/><line x1="430.0" y1="55.0" x2="430.0" y2="83.0" class="d-ax" marker-end="url(#ah)"/><line x1="430.0" y1="145.0" x2="430.0" y2="175.0" class="d-ax"/><line x1="430.0" y1="175.0" x2="362.0" y2="175.0" class="d-ax" marker-end="url(#ah)"/><line x1="264.0" y1="175.0" x2="242.0" y2="175.0" class="d-ax" marker-end="url(#ah)"/><line x1="130.0" y1="175.0" x2="108.0" y2="175.0" class="d-ax" marker-end="url(#ah)"/><line x1="488.0" y1="108.0" x2="498.0" y2="108.0" class="d-ax" marker-end="url(#ah)"/><line x1="500.0" y1="122.0" x2="490.0" y2="122.0" class="d-ax" marker-end="url(#ah)"/><rect x="4" y="226" width="236" height="40" rx="10" class="d-box"/><text x="122.0" y="251.0" text-anchor="middle" class="d-t s">Controlled system (plant, environment)</text><line x1="58.0" y1="200.0" x2="58.0" y2="224.0" class="d-ax" marker-end="url(#ah)"/><line x1="30.0" y1="226.0" x2="30.0" y2="82.0" class="d-mut2" marker-end="url(#ah)"/><text x="300.0" y="252.0" text-anchor="start" class="d-t s m">sensor → … → computer → … → actuator,</text><text x="300.0" y="268.0" text-anchor="start" class="d-t s m">all within a bounded time</text></svg><figcaption>Basic model of a real-time system. The sensor measures the controlled system, the signal is conditioned and read through the input interface; the real-time computer decides, and the output interface and output conditioning drive the actuator. An operator interface lets people supervise.</figcaption></figure>

- **Sensor:** converts a physical quantity into an electrical signal: a thermocouple (temperature), a photovoltaic cell (light), a pressure sensor.
- **Actuator:** takes the computer's output signal and produces a physical action: motion, heat, or a change in electrical, hydraulic or pneumatic state. *Examples:* a motor, a heater, a hydraulic or pneumatic actuator.
- **Signal conditioning:** raw signals rarely suit the computer or the actuator, so they are conditioned on the way in (**input conditioning**) and the way out (**output conditioning**). A photovoltaic cell gives millivolts, for example, which must be amplified.
  - **Voltage amplification** raises a weak sensor voltage (mV) to the input range (V).
  - **Voltage level shifting** moves a signal into the accepted range, e.g. a bipolar signal into 0–5 V, without changing its shape.
  - **Frequency range shifting and filtering** removes noise and interference, so only the useful band passes.
  - **Signal mode conversion** changes the signal's form: DC to AC or back, or analog to a pulse train whose width or frequency carries the value.
- **Interface units:** the **input interface** passes sensor data to the CPU in a form it understands, usually with an **ADC**. The **output interface** takes the value the CPU writes into its data register and converts it to analog with a **DAC**; it also handles **buffering and handshake** control.
- **Operator interface (HCI):** lets people supervise and give commands.

## Real-time tasks

| Task type | Description | Driven by | Example |
|---|---|---|---|
| **Periodic** | Repeats with a fixed period; its characteristics are known **a priori** | Time | Sampling a patient's temperature every second |
| **Aperiodic** | Jobs arrive at irregular, unknown times | Events | Responding to a change in the patient's condition |
| **Sporadic** | Irregular, but with a **known minimum inter-arrival time** (usually a hard deadline) | Events | An emergency stop button |
| **Non-real-time** | No time bound | | Logging statistics |

Each task $T_i$ is described by its timing parameters:

- **Release time** $r_i$: when it becomes ready.
- **Execution time** $C_i$: CPU time needed; the worst case is the **WCET**.
- **Period** $T_i$: interval between releases of a periodic task.
- **Deadline** $D_i$: latest finishing time, often $D_i = T_i$.

The **rate** of a periodic task is the inverse of its period, $1/T_i$.

### Timing constraints and events

**Timing constraints** are the time limits that keep real-time tasks bounded.

- **Classes:**
  - **Performance constraints** limit the **system's response**.
  - **Behavioural constraints** limit the **stimuli from the environment**, for example how often a button may be pressed.
- **Types** (each class can take any of these):
  1. **Delay constraint:** a minimum time must pass between two events.
  2. **Deadline constraint:** a maximum time is allowed between two events.
  3. **Duration constraint:** an event must last for a minimum or maximum time.

Two kinds of **events** occur: **stimulus events**, which come from the environment, and **response events**, which the system produces.

Task constraints may be on **deadlines**, on **resources** (shared resources must be accessed exclusively) or on **precedence** (one task must finish before another starts).

## Issues in real-time computing

1. **Resource management:** scheduling, fault tolerance, resource reclaiming, communication.
2. **Software:** requirements, specification and verification; real-time languages; real-time databases.
3. **Architecture:** the computing, communication and I/O subsystems.

A **real-time database** uses real-time processing for data whose state changes constantly. Like real-time systems, these databases come in **hard** and **soft** types.

## Common misconceptions

- "Real-time means **fast** computing." In fact it means **predictable** computing that meets deadlines.
- "Real-time programming is just assembly code, interrupts and device drivers."
- "Real-time systems work in a **static** environment."
- "All real-time design problems have already been solved elsewhere in computer science."
