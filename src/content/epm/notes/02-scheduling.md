# Scheduling with CPM and PERT

> Starter notes. Replace with your own.

## Critical path method (CPM)

1. List the activities, their durations and predecessors.
2. Draw the network (activity on node).
3. **Forward pass**: earliest start (ES) and earliest finish $EF = ES + d$.
4. **Backward pass**: latest finish (LF) and latest start $LS = LF - d$.
5. **Total float** $= LS - ES = LF - EF$.
6. The **critical path** is the longest path through the network. Its activities have zero float.

### Worked example

| Activity | Predecessor | Duration (days) |
|---|---|---|
| A | – | 3 |
| B | A | 4 |
| C | A | 2 |
| D | B, C | 5 |

- Path A–B–D: $3 + 4 + 5 = 12$ days
- Path A–C–D: $3 + 2 + 5 = 10$ days

The critical path is **A–B–D** (12 days). Activity C has $12 - 10 = 2$ days of float.

## PERT (three-point estimates)

For uncertain durations use optimistic $a$, most likely $m$ and pessimistic $b$:

$$t_e = \frac{a + 4m + b}{6}, \qquad \sigma = \frac{b - a}{6}$$

The project variance is the sum of the variances along the critical path. The probability of finishing by time $T$ uses

$$Z = \frac{T - T_e}{\sigma_{path}}$$

## Gantt charts

A Gantt chart shows activities as bars against a calendar. It is easy to read, but it does not show dependencies as clearly as a network.

## Crashing

Shortening the project by adding resources to critical activities. Crash the activity with the **lowest cost slope** first:

$$\text{Cost slope} = \frac{\text{Crash cost} - \text{Normal cost}}{\text{Normal time} - \text{Crash time}}$$
