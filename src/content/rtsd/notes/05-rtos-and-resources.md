# RTOS and resource management

*Outcome 3 · CSEU 08104 Real Time System Design*

## Resource management

**Resource management** means allocating the computer's limited resources, such as CPU time, memory, I/O devices, disk and network bandwidth, among the processes that need them **without conflicts such as deadlock**.

**Key terms:**

- **Resource:** anything that can be allocated, statically or dynamically: CPU time, memory, disk space, bandwidth.
- **Resource allocation:** assigning available resources to processes.
- **Process:** a program in execution, with its own memory space, execution state and resources.
- **Scheduling:** deciding which process gets a resource at a given time.
- **Deadlock:** processes wait forever for resources held by each other.
- **Semaphore:** an integer variable used, under mutual exclusion, to synchronise cooperating processes and **prevent race conditions**.
- **Mutual exclusion:** stopping two processes from using the same resource at the same time.
- **Memory management:** handling operations between main memory and disk during execution.

**What the OS does in resource management:**

| Function | Meaning |
|---|---|
| Resource **scheduling** | Decides which process gets the CPU, memory and other resources, and when |
| Resource **monitoring** | Tracks which process uses what; acts if one hogs resources |
| Resource **protection** | Blocks unauthorised access |
| Resource **sharing** | Lets processes share memory and I/O fairly and efficiently |
| **Deadlock prevention** | Makes sure no process holds resources forever (e.g. by pre-emption) |
| Resource **accounting** | Records usage for allocation and statistics |
| **Performance optimisation** | Load balancing and memory management |

## Real-time operating system (RTOS)

An **RTOS** is an operating system that supports real-time applications by giving **logically correct results within the specified deadlines**. Examples include FreeRTOS, VxWorks, QNX and Zephyr *(beyond the notes)*.

**Characteristics:**

1. Scalability
2. Maintainability
3. **Compactness:** a small footprint
4. Reliability
5. Performance
6. **Predictability**

### Features of an RTOS

1. **Deterministic behaviour:** it always responds within a known maximum time (the worst case is guaranteed).
2. **Priority-based scheduling:** the highest-priority ready task always runs.
3. **Pre-emptive multitasking:** a higher-priority task can stop a lower one at once.
4. **Fast interrupt handling:** minimal **interrupt latency**.
5. **Low, predictable context-switch time.**
6. **Inter-task communication and synchronization:** semaphores, mutexes, message queues and event flags.
7. **Priority inversion handling:** priority inheritance or priority ceiling.
8. **Efficient resource management:** no starvation; resources are released on time.
9. **Small, configurable kernel:** only the needed features are included, so little memory is used.
10. **High reliability and stability:** it runs continuously and recovers quickly.

It also occupies **little memory**, consumes **few resources** and has **highly predictable response times**. When a task is interrupted, the kernel **saves its state** and then decides which task to run next.

## Interrupts

Real-time programs often have to service interrupts from special-purpose devices, and the engineer may write or adapt the **device driver**. Interrupts decide how quickly the system reacts to events: interrupt latency and ISR length add directly to every task's response time. That is why you must understand how they work when writing real-time applications.

- **Hardware interrupt:** an **electrical signal** from a peripheral that makes the CPU run an **interrupt service routine (ISR)**.
- **Software interrupt:** triggered by **executing a machine instruction**; it also passes control to another code module.

**Synchronization primitives cannot be used in an ISR**, because an ISR must never wait indefinitely for a resource.

In an RTOS the interrupt handling is often **split into two parts**:

1. **ISR (top half):** short and fast; it does only the urgent work, such as reading the device and clearing the flag.
2. **Deferred service routine (bottom half):** a task that does the non-urgent processing later, at normal priority.

### Why interrupt latency happens

- The CPU is already running another ISR or a **critical section**.
- Interrupts are **temporarily disabled**.
- The CPU takes time to **save the context** before the ISR starts.

## Context switching

**Context switching** is saving enough of a task's state to resume it later, and loading the state of the next task. The context is normally saved on a **stack**. Context-switch time adds to the response time, so it must be **minimised**. The rule: **save the minimum needed to restore the task safely**:

- the general registers;
- the **program counter**;
- the coprocessor registers (if present);
- the memory page register;
- images of memory-mapped I/O locations.

<figure class="fig"><svg viewBox="0 0 600 140" role="img" aria-label="Interrupt and context switch. The running task’s registers, program counter and stack pointer are saved in its task control block, the ISR runs, the scheduler picks the next task and its context is restored. This overhead must be small and bounded."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="6" y="30" width="76" height="56" rx="10" class="d-box c"/><text x="44.0" y="55.0" text-anchor="middle" class="d-t s">Task A</text><text x="44.0" y="71.0" text-anchor="middle" class="d-t s">running</text><rect x="90" y="30" width="76" height="56" rx="10" class="d-box b"/><text x="128.0" y="63.0" text-anchor="middle" class="d-t s">Interrupt</text><line x1="82.0" y1="58.0" x2="89.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="174" y="30" width="76" height="56" rx="10" class="d-box"/><text x="212.0" y="55.0" text-anchor="middle" class="d-t s">Save A’s</text><text x="212.0" y="71.0" text-anchor="middle" class="d-t s">context</text><line x1="166.0" y1="58.0" x2="173.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="258" y="30" width="76" height="56" rx="10" class="d-box b"/><text x="296.0" y="63.0" text-anchor="middle" class="d-t s">ISR</text><line x1="250.0" y1="58.0" x2="257.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="342" y="30" width="76" height="56" rx="10" class="d-box a"/><text x="380.0" y="55.0" text-anchor="middle" class="d-t s">Scheduler</text><text x="380.0" y="71.0" text-anchor="middle" class="d-t s">picks B</text><line x1="334.0" y1="58.0" x2="341.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="426" y="30" width="76" height="56" rx="10" class="d-box"/><text x="464.0" y="55.0" text-anchor="middle" class="d-t s">Restore B’s</text><text x="464.0" y="71.0" text-anchor="middle" class="d-t s">context</text><line x1="418.0" y1="58.0" x2="425.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><rect x="510" y="30" width="76" height="56" rx="10" class="d-box c"/><text x="548.0" y="55.0" text-anchor="middle" class="d-t s">Task B</text><text x="548.0" y="71.0" text-anchor="middle" class="d-t s">running</text><line x1="502.0" y1="58.0" x2="509.0" y2="58.0" class="d-ax" marker-end="url(#ah)"/><line x1="174.0" y1="110.0" x2="502.0" y2="110.0" class="d-r"/><text x="300.0" y="130.0" text-anchor="middle" class="d-t s r">overhead: interrupt latency + context switch time</text></svg><figcaption>Interrupt and context switch. The running task’s registers, program counter and stack pointer are saved in its task control block, the ISR runs, the scheduler picks the next task and its context is restored. This overhead must be small and bounded.</figcaption></figure>

## Task control block (TCB)

A **TCB** is the data structure the OS keeps for each task. It contains:

- the task ID or name and its **priority**;
- its **state**: ready, running, waiting or blocked;
- the **saved CPU registers** (its context), the stack pointer and memory information;
- **timing information**: period, deadline;
- pointers to the resources and semaphores it uses.

The scheduler uses TCBs to switch between tasks. When an interrupt pre-empts a task, its CPU state is saved in its TCB; later the scheduler restores the task from the TCB.

### Task states

- **Running:** executing now.
- **Ready:** wants to run.
- **Blocked:** waiting for an external event; not a candidate to run.
- **Idle:** runs when nothing else is running.
- **Inactive (dormant):** created but not yet activated.
- **Complete:** has executed its last statement.

## Kernel organisations

### Interrupt-only system

The CPU is mostly **idle** (the main program is a single **jump-to-self** instruction). Each event raises an interrupt, and the **ISR does the work**. Tasks are scheduled by hardware or software interrupts, and dispatching is done by the interrupt handlers. With several interrupt levels, the **interrupt controller** dispatches by priority. With one level, the handler reads the controller's vector to find out which device interrupted.

- It is very simple, with minimal overhead and fast response.
- It is **not suitable** for complex systems with many tasks or periodic processing.
- *Example:* a temperature sensor raises an alarm when a threshold is crossed; the CPU wakes only then.

### Pre-emptive priority system

A **higher-priority task pre-empts a lower-priority one** immediately. Priority reflects the **urgency or criticality** of the task.

*Example:* in a nuclear plant, a **core over-temperature** alert pre-empts intruder-alarm handling and routine monitoring.

Priorities can be **fixed** (less flexible) or **dynamic** (adjusted at run time). This organisation suits safety-critical, hard real-time applications.

### Hybrid system

A hybrid system combines **time-driven (cyclic)** scheduling for periodic tasks with **priority-based pre-emption** for urgent tasks.

*Example:* a motor-control task runs every 10 ms, but a safety task pre-empts it the moment a fault is detected.

It gives predictable periodic execution while urgent asynchronous events still get immediate service.

## Scheduling points

The **scheduling points** are the instants on the timeline at which the scheduler decides which task runs next:

- **Clock-driven scheduler:** at the **interrupts of a periodic timer**.
- **Event-driven scheduler:** when **events** occur, such as a task release, a task completion or an interrupt.
- **Hybrid scheduler:** at both clock interrupts and events.

## Thread safety

**Thread safety** means several threads can use shared resources without errors. The techniques are:

1. **Mutex:** one thread at a time in the critical section; this prevents race conditions.
2. **Semaphores:** control access to a limited number of resources (producer–consumer).
3. **Priority inheritance:** prevents priority inversion.
4. **Avoid shared data:** use message passing instead of shared memory.
5. **Atomic operations:** hardware instructions update small data in one step.
6. **Good task design:** keep critical sections **short**; avoid **nested locks**.

## Stability, redundancy and security

**Stability** comes from:

- deterministic scheduling (e.g. rate monotonic);
- **limiting CPU utilisation**;
- **watchdog timers** that reset a hung system;
- testing under worst-case conditions.

**Redundancy** comes from:

- backup hardware (processors, sensors, supplies);
- software redundancy;
- a fault-tolerant design.

**Security** comes from:

- authentication;
- access control;
- encrypting communication;
- **secure boot** and signed firmware updates;
- **isolating** critical tasks from non-critical ones.
