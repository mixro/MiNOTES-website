**Worked problems** on the calculations in Outcomes 2 and 3: schedulability tests, cyclic frame size, round robin, the Banker's algorithm, deadlock detection and DAQ timing. These are practice problems built on the methods in the notes. Try each one before opening the answer.

## P1 Rate monotonic test and response time
Three tasks: T1 = (C = 1, T = 4), T2 = (2, 6), T3 = (3, 12), with $D = T$. (a) Apply the Liu and Layland test. (b) If it is inconclusive, use response-time analysis to decide.

::: answer
**(a)**
$$U = \frac{1}{4} + \frac{2}{6} + \frac{3}{12} = 0.250 + 0.333 + 0.250 = 0.833$$
The bound for $n = 3$ is $3(2^{1/3} - 1) = 0.780$. Since $0.833 > 0.780$, the test is **inconclusive**: it is sufficient only, so failing it does not prove the set unschedulable.

**(b)** Priorities: T1 > T2 > T3. Iterate $R_i = C_i + \sum_{hp} \lceil R_i / T_j \rceil C_j$:

- **T1:** $R = 1 \le 4$ ✓
- **T2:** $R = 2 \to 2 + \lceil 2/4 \rceil 1 = 3 \to 2 + \lceil 3/4 \rceil 1 = 3$. $3 \le 6$ ✓
- **T3:** $R = 3 \to 3 + 1 + 2 = 6 \to 3 + \lceil 6/4 \rceil 1 + \lceil 6/6 \rceil 2 = 7 \to 3 + 2 + 4 = 9 \to 3 + 3 + 4 = 10 \to 3 + 3 + 4 = 10$. $10 \le 12$ ✓

All response times are within their deadlines, so the set **is schedulable under RM**. Under EDF it is also schedulable, because $U = 0.833 \le 1$.
:::

## P2 Cyclic frame size
T1 = (e = 1, p = 4), T2 = (2, 6), T3 = (2, 12), with $d = p$. Find every feasible frame size and recommend one.

::: answer
- **Constraint 1:** $f \ge 2$.
- **Constraint 2:** $M = \operatorname{lcm}(4, 6, 12) = 12$, so $f \in \{2, 3, 4, 6, 12\}$.
- **Constraint 3:** $2f - \gcd(f, p_i) \le d_i$:

| $f$ | T1 ($p = 4$) | T2 ($p = 6$) | T3 ($p = 12$) | Feasible |
|---|---|---|---|---|
| 2 | $4 - 2 = 2$ ✓ | $4 - 2 = 2$ ✓ | $4 - 2 = 2$ ✓ | **Yes** |
| 3 | $6 - 1 = 5 > 4$ ✗ | | | No |
| 4 | $8 - 4 = 4$ ✓ | $8 - 2 = 6$ ✓ | $8 - 4 = 4$ ✓ | **Yes** |
| 6 | $12 - 2 = 10 > 4$ ✗ | | | No |
| 12 | $24 - 4 = 20 > 4$ ✗ | | | No |

**Frames 2 and 4 are feasible.** $f = 4$ needs only 3 timer interrupts per major cycle instead of 6, so the overhead is lower. The total demand per cycle, $3(1) + 2(2) + 1(2) = 9$ out of 12 units, fits easily. Choose **f = 4** unless your course rule says to take the smallest frame.
:::

## P3 Round robin
P1 (burst 6, arrival 0), P2 (3, 1), P3 (4, 2); quantum 3 ms. Draw the order and find the average turnaround and waiting times.

::: answer
**Order:** P1 0–3 (3 left); queue P2, P3, P1. P2 3–6 (done); P3 6–9 (1 left); P1 9–12 (done); P3 12–13 (done).

| Process | Completion | Turnaround (C − A) | Waiting (TAT − burst) |
|---|---|---|---|
| P1 | 12 | 12 | 6 |
| P2 | 6 | 5 | 2 |
| P3 | 13 | 11 | 7 |
| **Average** | | **9.33 ms** | **5.0 ms** |
:::

## P4 Banker's algorithm: requests
Use the five-process example in the chapter *Synchronisation, deadlock and priority inversion*, where Available = (3, 3, 2). (a) P1 requests (1, 0, 2). Grant it? (b) After that, P4 requests (3, 3, 0). (c) Instead, P0 requests (0, 2, 0).

::: answer
**(a)** Request (1, 0, 2) ≤ Need of P1 (1, 2, 2) ✓, and ≤ Available (3, 3, 2) ✓. Pretend to allocate: Available becomes (2, 3, 0), P1's Allocation (3, 0, 2) and its Need (0, 2, 0).

Safety check from Work = (2, 3, 0):

- P1 (0 2 0): Work becomes (5, 3, 2).
- P3 (0 1 1): Work becomes (7, 4, 3).
- P4 (4 3 1): Work becomes (7, 4, 5).
- P0 (7 4 3): Work becomes (7, 5, 5).
- P2 (6 0 0): Work becomes (10, 5, 7).

The state is safe with sequence ⟨P1, P3, P4, P0, P2⟩, so **grant the request**.

**(b)** Available is now (2, 3, 0). The request (3, 3, 0) needs 3 of A, but only 2 are free, so **P4 must wait**.

**(c)** Request (0, 2, 0) ≤ Need (7, 4, 3) ✓, and ≤ Available (2, 3, 0) ✓. Pretend: Available becomes (2, 1, 0). No process has Need ≤ (2, 1, 0):

- P1 needs B = 2;
- P3 needs C = 1;
- P4, P0 and P2 need A ≥ 4.

The state is **unsafe**, so **deny the request**: roll back and make P0 wait.
:::

## P5 Deadlock detection
P1 holds R1 and waits for R2. P2 holds R2 and waits for R3. P3 holds R3. Each resource has one instance. (a) Is there deadlock? (b) P3 now requests R1. What happens?

::: answer
**(a)** Wait-for graph: P1 → P2 (P1 wants R2, held by P2) and P2 → P3 (P2 wants R3, held by P3). P3 waits for nothing. **There is no cycle, so no deadlock.** P3 will finish and release R3, then P2, then P1.

**(b)** Add P3 → P1 (P3 wants R1, held by P1). Now P1 → P2 → P3 → P1 is a **cycle**: with single-instance resources this is **deadlock**. All four Coffman conditions hold.

**Recovery:** abort one process (e.g. the one with the least work done), or pre-empt a resource and roll that process back. **Prevention:** acquire locks in a fixed global order, e.g. R1 before R2 before R3, which breaks circular wait.
:::

## P6 DAQ sampling and latency
A DAQ system multiplexes 8 analog channels into one ADC. The highest signal frequency is 1 kHz. Each conversion takes 10 µs and processing all 8 samples takes 70 µs. (a) Find the minimum sampling rate per channel. (b) With 5 kHz per channel, check the timing and find the CPU load of the acquisition.

::: answer
**(a)** Nyquist: $f_s \ge 2 f_{max} = 2 \times 1 = 2$ kHz per channel.

**(b)** At 5 kHz the sampling period is $T_s = 1/5000 = 200$ µs. In each period:

- conversions: $8 \times 10 = 80$ µs;
- processing: 70 µs;
- **total: 150 µs ≤ 200 µs** ✓.

The work finishes before the next sample is due, with a 50 µs margin for jitter and interrupts. The CPU load is $150/200 = 75\%$, leaving 25% for other tasks. If a control task also needs 30% of the CPU, the total would be 105% and the system would fail; you would then need a faster ADC, **DMA**, or a lower sampling rate (≥ 2 kHz).
:::
