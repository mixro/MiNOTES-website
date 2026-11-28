**Group work**, Thursday 22 January 2026. The task (from the last page of the course document) was to discuss the previous week's topic and hand in group notes. The full notes are in the chapters *Bar charts and networks* and *Network analysis*; this page is a compact model answer.

## Task
Discuss "Project management techniques: bar charts and networks": bar charts, the Gantt chart, the milestone chart, networks (PERT and CPM), Activity on Arrow (AoA) and Activity on Node (AoN). Prepare group notes.

::: answer
**Why techniques?** Project management means planning, organising, coordinating, monitoring and controlling many interrelated, time-bound activities. The manager needs tools that give the best initial plan and show at once the effect of any deviation. They fall into **bar charts** and **networks**.

**1. Bar chart / Gantt chart** (Henry L. Gantt, about 1917)
- Tasks on the vertical axis, **time** on the horizontal axis; each task is a **bar** whose **length is its duration** (the width means nothing), usually tied to a calendar.
- *Advantages:* simple, visual, easy to understand and update; good for small projects and progress reporting.
- *Limitations:* hard to use for **many tasks**; does **not show interrelationships**, so the effect of an overrun on completion is not visible.

**2. Milestone chart**
- A Gantt chart with **milestones** (circles) marking the **completion of phases** within a task (e.g. ploughing done on day 3 within land preparation).
- *Improvement:* progress within a task can be monitored; shows the sequence of milestones **within** a task.
- *Weaknesses:* no interdependence **between** tasks, no critical activities, ignores uncertainty, cumbersome for large projects.

**3. Networks: PERT and CPM** (1956–58)
- A network shows the relationships between **all** activities and events in the project.
- **PERT** (US Navy, Polaris): **probabilistic** times, $T_E = (T_O + 4T_M + T_P)/6$; emphasis on scheduling and monitoring.
- **CPM** (du Pont, construction): **deterministic** times; emphasis on time–cost trade-off and resources.
- Both find the **critical path** (the longest path, the shortest project duration) and the **floats**, by forward and backward passes.

**4. Notations**
- **Activity on Arrow (AoA):** the arrow is the activity, the circle is an event; **dummies** (dashed, zero time and cost) show extra logic. Rules: one arrow per activity, left to right, no two activities with the same head and tail events, no loops or danglers.
- **Activity on Node (AoN):** the box is the activity, the arrows only show the order; no dummies; used by software such as MS Project.

**Example (engineering):** installing an electrical panel. Site survey → procure panel and cables (in parallel with the civil plinth) → install → terminate → test → commission. A Gantt chart shows when each task happens; the network shows that procurement, not the plinth, is on the critical path.
:::
