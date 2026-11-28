# Synchronisation, deadlock and priority inversion

*Outcome 3 · CSEU 08104 Real Time System Design*

When tasks share resources such as memory, files, printers or devices, the RTOS must stop them from **corrupting shared data** (race conditions), **waiting on each other forever** (deadlock), or **delaying urgent tasks** (priority inversion).

## Semaphores

A **semaphore** is an integer variable that controls access to a shared resource by concurrent processes. It has two fields: a non-negative value **S.V** and a queue of waiting processes **S.L**. It is used through two **atomic** operations:

1. **wait (P, down):** decrement the value; if the resource is not available, the process **blocks**.
2. **signal (V, up):** increment the value; if processes are waiting, wake one of them.

```c
wait(S):   S.V = S.V - 1;
           if (S.V < 0) { add caller to S.L; block(); }
signal(S): S.V = S.V + 1;
           if (S.V <= 0) { remove P from S.L; wakeup(P); }
```

### Types

| | Binary semaphore | Counting semaphore |
|---|---|---|
| Values | 0 or 1 (like a lock) | 0 to N |
| Use | One task at a time in a critical section | A pool of N identical resources |
| Example | A single shared buffer or UART | A pool of 5 printers |
| Typical use | Common in hard real-time systems | Resource sharing, soft real-time |

### Features

- **Mutual exclusion:** one process at a time in the critical section.
- **Synchronization:** it enforces the order of execution (producer–consumer).
- **Resource management:** it limits access to a finite set of resources.
- **Reader–writer problem:** many readers may read, but a writer needs exclusive access.
- **Deadlock avoidance:** it helps by controlling the order of allocation.

**Advantages:** efficient mutual exclusion; machine independent (implemented in the kernel); flexible resource management. A blocking semaphore does **not busy-wait**: the waiting process sleeps in S.L.

**Disadvantages:** **priority inversion**; **deadlock**, if processes wait on each other's semaphores in a cycle; easy to misuse (a missing signal locks the system); a simple spin-lock implementation **busy-waits** and wastes CPU time.

> **Note on the source.** One line in the notes says "due to busy waiting there is no wastage of process time". That contradicts the disadvantages list. The correct statement: a **blocking** semaphore avoids busy waiting; a **spinning** one wastes CPU time.

## Deadlock

A **deadlock** is a situation in which a set of processes is permanently stuck, because each one waits for a resource held by another. A process uses a resource in three steps: **request → use → release**. Deadlock arises when processes **hold** some resources while **waiting** for others.

*Examples:*

- P1 holds R1 and requests R2, while P2 holds R2 and requests R1.
- Two tape drives: P0 and P1 each hold one and each need the other.
- Semaphores A and B both start at 1. P0 does wait(A), then P1 does wait(B). If P0 now does wait(B) and P1 does wait(A), both block forever.

### Four necessary conditions (Coffman)

Deadlock can occur only if **all four** hold at the same time:

1. **Mutual exclusion:** a resource can be used by only one process at a time.
2. **Hold and wait:** a process holds at least one resource while waiting for others.
3. **No pre-emption:** a resource cannot be taken away; it must be released voluntarily.
4. **Circular wait:** P1 waits for P2, P2 for P3, …, Pn for P1.

Breaking any one condition prevents deadlock. For example, a fixed global order for acquiring locks removes circular wait.

## Deadlock detection

A **detection algorithm** checks the state of resource usage periodically, finds deadlocks, and then recovers. Detection is less restrictive than prevention. Its data structures, for $n$ processes and $m$ resource types:

- **Available:** a vector of length $m$, the free instances of each type.
- **Allocation:** an $n \times m$ matrix of what each process holds.
- **Request:** an $n \times m$ matrix of what each process is asking for now.

### Single instance per resource: wait-for graph

A **resource allocation graph (RAG)** has process and resource nodes. A **request edge** P → R means P waits for R; an **assignment edge** R → P means P holds R. To form the **wait-for graph (WFG)**, remove the resource nodes and join the processes directly: **Pi → Pj if Pi waits for a resource held by Pj**.

**Rule:** with one instance of each resource, **a cycle in the WFG means deadlock**.

<figure class="fig"><svg viewBox="0 0 600 270" role="img" aria-label="Wait-for graph (Example 1). Removing the resources from the allocation graph leaves P1 → P2 → P3 → P4 → P1: a closed cycle, so the four processes are deadlocked."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="140.0" y="18.0" text-anchor="middle" class="d-t b">Resource allocation graph</text><circle cx="60" cy="60" r="20" class="d-box a"/><text x="60.0" y="65.0" text-anchor="middle" class="d-t s">P1</text><circle cx="220" cy="60" r="20" class="d-box a"/><text x="220.0" y="65.0" text-anchor="middle" class="d-t s">P2</text><circle cx="220" cy="200" r="20" class="d-box a"/><text x="220.0" y="205.0" text-anchor="middle" class="d-t s">P3</text><circle cx="60" cy="200" r="20" class="d-box a"/><text x="60.0" y="205.0" text-anchor="middle" class="d-t s">P4</text><rect x="123" y="30" width="34" height="30" rx="4" class="d-box b"/><text x="140.0" y="50.0" text-anchor="middle" class="d-t s">R1</text><rect x="218" y="115" width="34" height="30" rx="4" class="d-box b"/><text x="235.0" y="135.0" text-anchor="middle" class="d-t s">R4</text><rect x="123" y="200" width="34" height="30" rx="4" class="d-box b"/><text x="140.0" y="220.0" text-anchor="middle" class="d-t s">R3</text><rect x="28" y="115" width="34" height="30" rx="4" class="d-box b"/><text x="45.0" y="135.0" text-anchor="middle" class="d-t s">R2</text><line x1="81.6" y1="55.9" x2="118.4" y2="49.1" class="d-ax" marker-end="url(#ah)"/><line x1="161.6" y1="49.1" x2="198.4" y2="55.9" class="d-ax" marker-end="url(#ah)"/><line x1="224.6" y1="81.5" x2="230.4" y2="108.5" class="d-ax" marker-end="url(#ah)"/><line x1="230.4" y1="151.5" x2="224.6" y2="178.5" class="d-ax" marker-end="url(#ah)"/><line x1="198.4" y1="204.1" x2="161.6" y2="210.9" class="d-ax" marker-end="url(#ah)"/><line x1="118.4" y1="210.9" x2="81.6" y2="204.1" class="d-ax" marker-end="url(#ah)"/><line x1="55.4" y1="178.5" x2="49.6" y2="151.5" class="d-ax" marker-end="url(#ah)"/><line x1="49.6" y1="108.5" x2="55.4" y2="81.5" class="d-ax" marker-end="url(#ah)"/><text x="140.0" y="258.0" text-anchor="middle" class="d-t s m">P → R: requests · R → P: holds</text><line x1="300.0" y1="130.0" x2="340.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="470.0" y="18.0" text-anchor="middle" class="d-t b">Wait-for graph</text><line x1="422.0" y1="60.0" x2="516.0" y2="60.0" class="d-r w" marker-end="url(#ah)"/><line x1="540.0" y1="82.0" x2="540.0" y2="176.0" class="d-r w" marker-end="url(#ah)"/><line x1="518.0" y1="200.0" x2="424.0" y2="200.0" class="d-r w" marker-end="url(#ah)"/><line x1="400.0" y1="178.0" x2="400.0" y2="84.0" class="d-r w" marker-end="url(#ah)"/><circle cx="400" cy="60" r="20" class="d-box a"/><text x="400.0" y="65.0" text-anchor="middle" class="d-t s">P1</text><circle cx="540" cy="60" r="20" class="d-box a"/><text x="540.0" y="65.0" text-anchor="middle" class="d-t s">P2</text><circle cx="540" cy="200" r="20" class="d-box a"/><text x="540.0" y="205.0" text-anchor="middle" class="d-t s">P3</text><circle cx="400" cy="200" r="20" class="d-box a"/><text x="400.0" y="205.0" text-anchor="middle" class="d-t s">P4</text><text x="470.0" y="135.0" text-anchor="middle" class="d-t s r">cycle ⇒</text><text x="470.0" y="152.0" text-anchor="middle" class="d-t s r">deadlock</text></svg><figcaption>Wait-for graph (Example 1). Removing the resources from the allocation graph leaves P1 → P2 → P3 → P4 → P1: a closed cycle, so the four processes are deadlocked.</figcaption></figure>

**Steps:**

1. Start at P1, which waits for R1, held by P2: draw P1 → P2.
2. P2 waits for R4, held by P3: draw P2 → P3.
3. P3 waits for R3, held by P4: draw P3 → P4.
4. P4 waits for R2, held by P1: draw P4 → P1.

The path returns to P1, a closed loop, so the system is **deadlocked**.

In **Example 2** of the notes, P1 waits for P2 and P4, and P2 and P4 both wait for P3, which waits for nothing. No path comes back to its starting process, so there is **no deadlock**: the system is safe. A shape that only *looks* like a loop is not a cycle unless the arrows return to the start.

**Issues with WFG detection:**

- It is **costly** if run on every request (better to run it at intervals).
- It scales poorly and has update overhead.
- It can give **false deadlocks** if run too often (temporary waits), or **delayed detection** if run too rarely.
- Cycle detection in a changing graph is complex.
- A global WFG is hard to build in a distributed system.

### Multiple instances: Banker's algorithm

The **Banker's algorithm** is a deadlock **avoidance** algorithm for resources with several instances. It grants a request only if the system stays in a **safe state**, like a banker who lends only when every customer can still be repaid.

- **Data:** Available, Max, Allocation, and **Need = Max − Allocation**.
- **Safe state:** there is at least one order (a *safe sequence*) in which every process can get what it needs, finish and release its resources.
- **Unsafe state:** no such order is guaranteed. Deadlock is possible but not certain.

**Steps for a request:**

1. Check Request ≤ Need.
2. Check Request ≤ Available.
3. Pretend to allocate.
4. Run the safety check.
5. If the state is safe, grant the request; otherwise roll back and make the process wait.

**Worked example** *(beyond the notes; the classic textbook data)*. Five processes and three resource types (A, B, C), with Available = (3, 3, 2):

| Process | Allocation | Max | Need |
|---|---|---|---|
| P0 | 0 1 0 | 7 5 3 | 7 4 3 |
| P1 | 2 0 0 | 3 2 2 | 1 2 2 |
| P2 | 3 0 2 | 9 0 2 | 6 0 0 |
| P3 | 2 1 1 | 2 2 2 | 0 1 1 |
| P4 | 0 0 2 | 4 3 3 | 4 3 1 |

**Safety check:** start with Work = (3, 3, 2) and repeatedly pick a process with Need ≤ Work.

- P1: Need 1 2 2 ≤ 3 3 2, so Work becomes (5, 3, 2).
- P3: Need 0 1 1, so Work becomes (7, 4, 3).
- P4: Need 4 3 1, so Work becomes (7, 4, 5).
- P0: Need 7 4 3, so Work becomes (7, 5, 5).
- P2: Need 6 0 0, so Work becomes (10, 5, 7).

The safe sequence is **⟨P1, P3, P4, P0, P2⟩**, so the state is **safe**.

**Advantages of detection algorithms:**

- They improve stability.
- They make better use of resources.
- Some, like the WFG, are easy to implement.

**Disadvantages:**

- They have performance overhead.
- They are complex.
- They can give false positives or false negatives.

## Priority inversion

**Priority inversion** happens when a **low-priority task holds a resource** (a lock) that a **high-priority task needs**, so the high-priority task must wait for the low one.

**How it becomes unbounded:** L takes the lock, and then H requests it and blocks. A **medium-priority task M**, which does not need the lock, then becomes ready and **pre-empts L**. L cannot run to release the lock, so H waits for M. The priority order is turned upside down.

- **Bounded inversion:** H is delayed only for as long as L holds the lock (plus M's run time in the notes' example). The delay is **predictable**.
- **Unbounded inversion:** M (or many medium tasks) keeps L from running, so H's delay is **unpredictable and possibly indefinite**. A watchdog may then reset the system. This is the famous Mars Pathfinder fault of 1997 *(beyond the notes)*.

<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Priority inversion. (a) L holds the lock; H blocks on it at t = 4, then M pre-empts L and runs for as long as it likes, so H waits for M: the inversion is unbounded. (b) With priority inheritance L runs at H’s priority until it releases the lock at t = 7, so M cannot cut in and H finishes at 10."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="60.0" y="16.0" text-anchor="start" class="d-t b">(a) Unbounded inversion</text><text x="50.0" y="42.0" text-anchor="end" class="d-t b">H</text><line x1="60.0" y1="52.0" x2="580.0" y2="52.0" class="d-mut"/><rect x="138" y="30" width="26" height="22" rx="4" class="d-box a"/><rect x="424" y="30" width="78" height="22" rx="4" class="d-box a"/><text x="463.0" y="46.0" text-anchor="middle" class="d-t s">CS</text><text x="50.0" y="76.0" text-anchor="end" class="d-t b">M</text><line x1="60.0" y1="86.0" x2="580.0" y2="86.0" class="d-mut"/><rect x="190" y="64" width="182" height="22" rx="4" class="d-box b"/><text x="281.0" y="80.0" text-anchor="middle" class="d-t s">M runs (no lock)</text><text x="50.0" y="110.0" text-anchor="end" class="d-t b">L</text><line x1="60.0" y1="120.0" x2="580.0" y2="120.0" class="d-mut"/><rect x="60" y="98" width="78" height="22" rx="4" class="d-box c"/><text x="99.0" y="114.0" text-anchor="middle" class="d-t s">CS</text><rect x="164" y="98" width="26" height="22" rx="4" class="d-box c"/><rect x="372" y="98" width="52" height="22" rx="4" class="d-box c"/><text x="398.0" y="114.0" text-anchor="middle" class="d-t s">CS</text><text x="294.0" y="46.0" text-anchor="middle" class="d-t s r">H blocked on the lock</text><text x="60.0" y="152.0" text-anchor="start" class="d-t b">(b) With priority inheritance</text><text x="50.0" y="178.0" text-anchor="end" class="d-t b">H</text><line x1="60.0" y1="188.0" x2="580.0" y2="188.0" class="d-mut"/><rect x="138" y="166" width="26" height="22" rx="4" class="d-box a"/><rect x="242" y="166" width="78" height="22" rx="4" class="d-box a"/><text x="281.0" y="182.0" text-anchor="middle" class="d-t s">CS</text><text x="50.0" y="212.0" text-anchor="end" class="d-t b">M</text><line x1="60.0" y1="222.0" x2="580.0" y2="222.0" class="d-mut"/><rect x="320" y="200" width="182" height="22" rx="4" class="d-box b"/><text x="411.0" y="216.0" text-anchor="middle" class="d-t s">M waits</text><text x="50.0" y="246.0" text-anchor="end" class="d-t b">L</text><line x1="60.0" y1="256.0" x2="580.0" y2="256.0" class="d-mut"/><rect x="60" y="234" width="78" height="22" rx="4" class="d-box c"/><text x="99.0" y="250.0" text-anchor="middle" class="d-t s">CS</text><rect x="164" y="234" width="78" height="22" rx="4" class="d-box a"/><text x="203.0" y="250.0" text-anchor="middle" class="d-t s">L at H prio</text><line x1="60.0" y1="270.0" x2="588.0" y2="270.0" class="d-ax" marker-end="url(#ah)"/><line x1="60.0" y1="270.0" x2="60.0" y2="275.0" class="d-ax"/><text x="60.0" y="290.0" text-anchor="middle" class="d-t s m">0</text><line x1="112.0" y1="270.0" x2="112.0" y2="275.0" class="d-ax"/><text x="112.0" y="290.0" text-anchor="middle" class="d-t s m">2</text><line x1="164.0" y1="270.0" x2="164.0" y2="275.0" class="d-ax"/><text x="164.0" y="290.0" text-anchor="middle" class="d-t s m">4</text><line x1="216.0" y1="270.0" x2="216.0" y2="275.0" class="d-ax"/><text x="216.0" y="290.0" text-anchor="middle" class="d-t s m">6</text><line x1="268.0" y1="270.0" x2="268.0" y2="275.0" class="d-ax"/><text x="268.0" y="290.0" text-anchor="middle" class="d-t s m">8</text><line x1="320.0" y1="270.0" x2="320.0" y2="275.0" class="d-ax"/><text x="320.0" y="290.0" text-anchor="middle" class="d-t s m">10</text><line x1="372.0" y1="270.0" x2="372.0" y2="275.0" class="d-ax"/><text x="372.0" y="290.0" text-anchor="middle" class="d-t s m">12</text><line x1="424.0" y1="270.0" x2="424.0" y2="275.0" class="d-ax"/><text x="424.0" y="290.0" text-anchor="middle" class="d-t s m">14</text><line x1="476.0" y1="270.0" x2="476.0" y2="275.0" class="d-ax"/><text x="476.0" y="290.0" text-anchor="middle" class="d-t s m">16</text><line x1="528.0" y1="270.0" x2="528.0" y2="275.0" class="d-ax"/><text x="528.0" y="290.0" text-anchor="middle" class="d-t s m">18</text><line x1="580.0" y1="270.0" x2="580.0" y2="275.0" class="d-ax"/><text x="580.0" y="290.0" text-anchor="middle" class="d-t s m">20</text></svg><figcaption>Priority inversion. (a) L holds the lock; H blocks on it at t = 4, then M pre-empts L and runs for as long as it likes, so H waits for M: the inversion is unbounded. (b) With priority inheritance L runs at H’s priority until it releases the lock at t = 7, so M cannot cut in and H finishes at 10.</figcaption></figure>

### Solutions

- **Priority inheritance protocol (PIP):** while L holds a resource that H wants, **L inherits H's priority**, so M cannot pre-empt it. L finishes its critical section quickly and releases the lock.
- **Priority ceiling protocol (PCP):** each resource gets a **ceiling** equal to the highest priority of any task that may use it. A task may lock a resource only if its priority is **higher than the current system ceiling (CSC)**, the highest ceiling of all resources currently locked. PCP also includes inheritance.
- **Avoid blocking:** non-blocking algorithms; less sharing; message passing.

### How PCP prevents deadlock, unbounded inversion and chain blocking

- **Deadlock:** under PCP, while a task runs holding resources, no other task can hold a resource it may need. When a task is granted one resource, **all the resources it will need are free**, so circular wait cannot form.
- **Unbounded priority inversion:** a low-priority task that blocks a higher one **inherits its priority**, so intermediate tasks cannot pre-empt it.
- **Chain blocking:** a task can be blocked **at most once**, for at most one critical section, during its execution (it is *single blocking*).

### Types of inversion under PCP

1. **Direct inversion:** a higher-priority task waits for a lower one to release a resource it needs.
2. **Inheritance-related inversion:** when the lower task inherits a high priority, **intermediate tasks that do not need the resource** are held up.
3. **Avoidance-related inversion:** a task asks for a **free** resource but is refused because its priority is not above the CSC. This is the price PCP pays to avoid deadlock.

**Are PIP and PCP greedy?** PIP is **greedy**: a free resource is always granted. PCP is **not**: it may refuse a free resource to prevent a possible deadlock.
