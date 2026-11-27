# Introduction to real-time systems

> Starter notes. Replace this file with your own lecture notes for CSEU 08104.

A **real-time system** is one whose correctness depends not only on the logical result but also on **the time at which the result is produced**. A correct answer delivered late can be as bad as a wrong answer.

## Types of deadline

| Type | If the deadline is missed | Example |
|---|---|---|
| Hard | System failure, possibly dangerous | Airbag controller, ABS brakes |
| Firm | The late result is useless but no damage is done | Video frame decoding |
| Soft | Quality degrades gradually | Audio streaming, UI updates |

## Key timing terms

- **Release time** $r_i$: when a task becomes ready to run.
- **Execution time** $C_i$: CPU time the task needs (worst case is the WCET).
- **Period** $T_i$: interval between releases of a periodic task.
- **Deadline** $D_i$: latest finishing time, often $D_i = T_i$.
- **Response time** $R_i$: time from release to completion.

A task meets its deadline when $R_i \le D_i$.

## Characteristics of real-time systems

1. **Predictability** matters more than average speed.
2. Systems are usually **embedded** and react to sensors and actuators.
3. They are often **concurrent**: many tasks share one processor.
4. They must be **reliable** and frequently safety critical.

## Task types

- **Periodic**: released at fixed intervals (sampling a sensor every 10 ms).
- **Aperiodic**: released at irregular times with soft deadlines (a key press).
- **Sporadic**: irregular but with a known minimum gap and a hard deadline (an emergency stop).
