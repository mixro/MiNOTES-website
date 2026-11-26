# RTOS and synchronisation

> Starter notes. Replace with your own.

A **real-time operating system (RTOS)** provides deterministic task switching, timers and communication between tasks. Examples include FreeRTOS, Zephyr and VxWorks.

## Task states

Ready → Running → Blocked (waiting for an event or resource) → Ready. A task can also be Suspended.

## Sharing resources

When tasks share data, a **critical section** must be protected:

- **Mutex**: a lock owned by one task at a time.
- **Binary semaphore**: often used to signal events from an interrupt.
- **Counting semaphore**: controls access to $N$ identical resources.

## Priority inversion

A high-priority task waits for a resource held by a low-priority task, while a medium-priority task pre-empts the low one. The high-priority task is then delayed by a task of lower priority.

> The Mars Pathfinder lander (1997) kept resetting because of priority inversion. Enabling priority inheritance fixed it.

### Solutions

- **Priority inheritance**: the task holding the lock temporarily takes the priority of the highest task waiting for it.
- **Priority ceiling protocol**: each resource has a ceiling equal to the highest priority of any task that uses it. This also prevents deadlock.

## Deadlock conditions

All four must hold: mutual exclusion, hold and wait, no pre-emption, and circular wait. Break any one to prevent deadlock.
