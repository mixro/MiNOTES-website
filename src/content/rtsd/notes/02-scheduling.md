# Task scheduling

> Starter notes. Replace with your own.

A **scheduler** decides which ready task runs next. For real-time systems we want a schedule that guarantees every deadline is met.

## Processor utilisation

For $n$ periodic tasks, the total utilisation is

$$U = \sum_{i=1}^{n} \frac{C_i}{T_i}$$

No algorithm can schedule a task set on one processor if $U > 1$.

## Rate monotonic scheduling (RMS)

- Fixed priorities: **the shorter the period, the higher the priority**.
- Optimal among fixed-priority algorithms when $D_i = T_i$.
- **Liu and Layland bound**: the set is schedulable if

$$U \le n\left(2^{1/n} - 1\right)$$

For $n = 3$ the bound is about $0.780$, and as $n \to \infty$ it approaches $\ln 2 \approx 0.693$. The test is *sufficient, not necessary*: a set above the bound may still be schedulable, so use response time analysis to be sure.

### Worked example

| Task | $C_i$ (ms) | $T_i$ (ms) | $C_i/T_i$ |
|---|---|---|---|
| T1 | 1 | 4 | 0.250 |
| T2 | 2 | 6 | 0.333 |
| T3 | 1 | 10 | 0.100 |

$U = 0.683 \le 0.780$, so the set is schedulable under RMS.

## Response time analysis

For fixed-priority tasks, iterate until the value stops changing:

$$R_i^{(k+1)} = C_i + \sum_{j \in hp(i)} \left\lceil \frac{R_i^{(k)}}{T_j} \right\rceil C_j$$

where $hp(i)$ is the set of tasks with higher priority than task $i$.

## Earliest deadline first (EDF)

- Dynamic priorities: the task with the **nearest absolute deadline** runs.
- Optimal on one processor: schedulable if and only if $U \le 1$ (with $D_i = T_i$).
- Harder to analyse under overload, since a missed deadline can cascade.
