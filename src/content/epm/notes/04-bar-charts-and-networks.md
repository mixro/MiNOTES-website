# Bar charts and networks

*Chapter 3 · EEU 08106 Engineering Project Management*

Project management means planning, organising, coordinating, monitoring and controlling many **interrelated, time-bound activities**. The project manager needs tools that both produce the best initial plan and show **at once the effect of any deviation**, so corrective action can be taken. These techniques fall into two groups: **bar charts** and **networks**.

## 1. Bar charts

### Gantt chart

Developed by **Henry L. Gantt** (1861–1919) around **1917** for scheduling and reporting progress. The project is broken into identifiable, controllable units called **tasks**; each task is a horizontal **bar** against a **time scale**, usually tied to a calendar (land preparation starting on 1 June, lasting 5 days, ends on 5 June).

- The **length** of the bar is the time the task needs; its **width means nothing**.

<figure class="fig"><svg viewBox="0 0 600 245" role="img" aria-label="Gantt (bar) chart: bar length is the task duration, bar width means nothing. The circle turns it into a milestone chart: ploughing, part of land preparation, ends on day 3."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="120.0" y="38.0" text-anchor="end" class="d-t s">Task A</text><rect x="130" y="24" width="210" height="20" rx="5" class="d-box a"/><text x="348.0" y="39.0" text-anchor="start" class="d-t s m">Land preparation</text><text x="120.0" y="78.0" text-anchor="end" class="d-t s">Task B</text><rect x="214" y="64" width="168" height="20" rx="5" class="d-box"/><text x="390.0" y="79.0" text-anchor="start" class="d-t s m">Procure inputs</text><text x="120.0" y="118.0" text-anchor="end" class="d-t s">Task C</text><rect x="340" y="104" width="168" height="20" rx="5" class="d-box"/><text x="120.0" y="158.0" text-anchor="end" class="d-t s">Task D</text><rect x="424" y="144" width="126" height="20" rx="5" class="d-box"/><circle cx="256" cy="34" r="7" class="d-box b"/><text x="256.0" y="14.0" text-anchor="middle" class="d-t s b">Milestone: ploughing done (day 3)</text><line x1="130.0" y1="190.0" x2="562.0" y2="190.0" class="d-ax" marker-end="url(#ah)"/><line x1="130.0" y1="190.0" x2="130.0" y2="195.0" class="d-ax"/><line x1="172.0" y1="190.0" x2="172.0" y2="195.0" class="d-ax"/><text x="172.0" y="212.0" text-anchor="middle" class="d-t s m">1</text><line x1="214.0" y1="190.0" x2="214.0" y2="195.0" class="d-ax"/><text x="214.0" y="212.0" text-anchor="middle" class="d-t s m">2</text><line x1="256.0" y1="190.0" x2="256.0" y2="195.0" class="d-ax"/><text x="256.0" y="212.0" text-anchor="middle" class="d-t s m">3</text><line x1="298.0" y1="190.0" x2="298.0" y2="195.0" class="d-ax"/><text x="298.0" y="212.0" text-anchor="middle" class="d-t s m">4</text><line x1="340.0" y1="190.0" x2="340.0" y2="195.0" class="d-ax"/><text x="340.0" y="212.0" text-anchor="middle" class="d-t s m">5</text><line x1="382.0" y1="190.0" x2="382.0" y2="195.0" class="d-ax"/><text x="382.0" y="212.0" text-anchor="middle" class="d-t s m">6</text><line x1="424.0" y1="190.0" x2="424.0" y2="195.0" class="d-ax"/><text x="424.0" y="212.0" text-anchor="middle" class="d-t s m">7</text><line x1="466.0" y1="190.0" x2="466.0" y2="195.0" class="d-ax"/><text x="466.0" y="212.0" text-anchor="middle" class="d-t s m">8</text><line x1="508.0" y1="190.0" x2="508.0" y2="195.0" class="d-ax"/><text x="508.0" y="212.0" text-anchor="middle" class="d-t s m">9</text><line x1="550.0" y1="190.0" x2="550.0" y2="195.0" class="d-ax"/><text x="550.0" y="212.0" text-anchor="middle" class="d-t s m">10</text><text x="340.0" y="234.0" text-anchor="middle" class="d-t s">Time (days)</text></svg><figcaption>Gantt (bar) chart: bar length is the task duration, bar width means nothing. The circle turns it into a milestone chart: ploughing, part of land preparation, ends on day 3.</figcaption></figure>

**Limitations of the bar chart**

- Hard to handle a **large number of tasks** (complex projects).
- Does **not show the interrelationships** between tasks, so you cannot see how an overrun in one task affects project completion.

### Milestone chart

An improvement on the Gantt chart. A **milestone** (a circle on the bar) marks the **completion of a specific phase** of a task, i.e. an **event**. For example, land preparation = ploughing + levelling; a milestone on day 3 says ploughing must be finished by then.

The chart shows the **sequence of milestones within one task** (milestone 2 of task A cannot be reached before milestone 1), but **not between different tasks**.

**Weaknesses**

- Does not show **interdependence between tasks**.
- Does not show **critical activities**.
- Ignores **uncertainty** in completing tasks.
- **Cumbersome** for large projects.

## 2. Networks: PERT and CPM

A **network** extends the milestone chart to show the relationships **between all milestones** in the whole project. The two best-known techniques were developed almost simultaneously in **1956–1958**:

| | PERT | CPM |
|---|---|---|
| Full name | **Programme Evaluation and Review Technique** | **Critical Path Method** |
| Developed by / for | **US Navy**, for R&D scheduling of the **Polaris missile** programme | **E. I. du Pont de Nemours & Co.**, for construction projects |
| Activity times | **Probabilistic** (three estimates) | **Deterministic** (one estimate) |
| Emphasis | Scheduling and monitoring | Optimising resource allocation (time–cost) |

Today the two are used almost interchangeably and the differences are mostly historical.

### Network notations

<figure class="fig"><svg viewBox="0 0 600 245" role="img" aria-label="The two network notations. In AOA the arrow is the activity and the circle is an event; in AON the box is the activity and the arrow only shows the order. Most software uses AON."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="20.0" y="24.0" text-anchor="start" class="d-t b">Activity on Arrow (AOA)</text><circle cx="60" cy="80" r="24" class="d-box"/><text x="60.0" y="85.0" text-anchor="middle" class="d-t b">1</text><circle cx="300" cy="80" r="24" class="d-box"/><text x="300.0" y="85.0" text-anchor="middle" class="d-t b">2</text><circle cx="540" cy="80" r="24" class="d-box"/><text x="540.0" y="85.0" text-anchor="middle" class="d-t b">3</text><line x1="84.0" y1="80.0" x2="274.0" y2="80.0" class="d-ax" marker-end="url(#ah)"/><text x="179.0" y="70.0" text-anchor="middle" class="d-t s a">Land preparation</text><line x1="324.0" y1="80.0" x2="514.0" y2="80.0" class="d-ax" marker-end="url(#ah)"/><text x="419.0" y="70.0" text-anchor="middle" class="d-t s a">Procurement of input</text><text x="20.0" y="150.0" text-anchor="start" class="d-t b">Activity on Node (AON)</text><rect x="30" y="175" width="170" height="50" rx="10" class="d-box a"/><text x="115.0" y="205.0" text-anchor="middle" class="d-t s">Land preparation</text><rect x="380" y="175" width="190" height="50" rx="10" class="d-box a"/><text x="475.0" y="205.0" text-anchor="middle" class="d-t s">Procurement of input</text><line x1="200.0" y1="200.0" x2="378.0" y2="200.0" class="d-ax" marker-end="url(#ah)"/></svg><figcaption>The two network notations. In AOA the arrow is the activity and the circle is an event; in AON the box is the activity and the arrow only shows the order. Most software uses AON.</figcaption></figure>

- **Activity on Arrow (AOA):** the **arrow** is the work; the **circle** is an **event** (the start or completion of an activity). Usually associated with PERT, and used in these notes.
- **Activity on Node (AON):** the **box** (node) is the task; the arrow only shows the **sequence**. Used by most project management software.

### PERT terminology

| Term | Meaning |
|---|---|
| **Activity** | A recognisable work item that needs **time and resources**. |
| **Dummy activity** | Shows a precedence relationship only; needs **no time and no resources**. Drawn dashed. |
| **Event** | An **instantaneous point in time**: the start or completion of an activity. |
| **Burst event** | An event from which **more than one activity** starts. |
| **Merge event** | An event reached only when **more than one activity** is complete. |
| **Critical activity** | An activity on the critical path, with **zero slack/float**. |
| **Critical path** | The **longest** path through the network. Its length is the **shortest possible project duration**. |
| **Expected time $T_E$** | The weighted average of the optimistic, most likely and pessimistic times. |
| **Earliest start time (EST)** | The earliest time an event can occur, and so the earliest time an activity leaving it can start. |
| **Latest start time (LST)** | The latest time an event can occur, or an activity can start, **without delaying project completion**. |
| **Slack** | Spare time available between finishing one activity and starting the next. |

## 3. Steps of network analysis

1. Prepare the **list of activities**.
2. Define the **interrelationships** among the activities.
3. **Estimate** the activity durations.
4. Assemble the activities into a **flow diagram**.
5. **Draw the network**.
6. **Analyse** the network: compute EST and LST, and identify the critical events, critical path and critical activities.

We follow one example throughout: **providing lift irrigation on a farm**. Assumptions: the project is approved and starts with site selection; water comes from a newly dug well; field channels are laid after digging; the pump specification is fixed from groundwater data before digging; the pump is not bought until the site is selected; the pump is installed after the well is dug.

### Step 1: list the activities

An **activity** is the lowest level of resource-consuming, time-bound work, with a specified start and end. It must be **quantifiable, measurable, costable and discrete**. Each gets a letter code (use alphanumeric codes beyond 26). Keep the number to the minimum needed for management; large projects are split into **sub-projects** (e.g. a watershed project into agriculture, soil and water conservation, afforestation) and then into activities.

### Step 2: define the interrelationships

- **Preceding activity:** the immediate predecessor, which must be finished before the activity starts.
- **Succeeding activity:** the one that starts immediately after it.

PERT normally lists the **preceding** activities.

| Activity | Code | Preceding |
|---|---|---|
| Site selection | A | none |
| Digging well | B | A |
| Laying field channels | C | B |
| Procurement of pump | D | A |
| Installation of pump | E | B, D |
| Test run | F | C, E |

> **Correction.** The notes say "only the **terminating** activities will not have any preceding activity, and all other activities must appear at least once as a preceding activity." It is the other way round: the **starting** activities (here A) have no predecessor, and every activity **except the terminating ones** (here F) must appear at least once as a predecessor.

### Step 3: estimate the durations

CPM uses **one** time estimate. PERT uses **three**:

- **Optimistic time $T_O$:** minimum time, if everything goes well.
- **Most likely time $T_M$:** the modal time under normal conditions.
- **Pessimistic time $T_P$:** maximum time, if everything goes wrong.

$$T_E = \frac{T_O + 4T_M + T_P}{6}$$

The estimates come from past experience of similar activities or from people with relevant experience.

> **Example.** Site selection: $T_O = 4$, $T_M = 6$, $T_P = 14$ days.
> $T_E = \dfrac{4 + 4(6) + 14}{6} = \dfrac{42}{6} =$ **7 days**

| Activity | Preceding | $T_O$ | $T_M$ | $T_P$ | $T_E$ (days) |
|---|---|---|---|---|---|
| A Site selection | none | 4 | 6 | 14 | 7 |
| B Digging well | A | 2 | 3 | 4 | 3 |
| C Laying field channels | B | 7 | 16 | 19 | 15 |
| D Procurement of pump | A | 4 | 7 | 10 | 7 |
| E Installation of pump | B, D | 3 | 4 | 11 | **5** (notes: 3) |
| F Test run | C, E | 1 | 2 | 3 | 2 |

> **Correction.** For E, $T_E = (3 + 4 \times 4 + 11)/6 = 30/6 =$ **5 days**, not 3. The rest of the worked example uses 3 days. With 5 days the critical path and the 27-day duration do **not** change (path A–D–E–F becomes 21 days and A–B–E–F 17 days), only E's and D's floats shrink by 2 days.

### Step 4: flow diagram and path lengths

A flow chart puts each activity and its duration in a box, linked by predecessor relationships. It does not give start and finish times or slacks, but you can find the critical path by **adding up every path** (using the durations of the worked example):

| Path | Length (days) |
|---|---|
| A–B–E–F | 7 + 3 + 3 + 2 = 15 |
| **A–B–C–F** | 7 + 3 + 15 + 2 = **27** ← longest = **critical path** |
| A–D–E–F | 7 + 7 + 3 + 2 = 19 |

### Step 5: draw the network

Activities are either **sequential** (one after another) or **concurrent** (in parallel). To draw a network you need to know which activities must finish before others start, which can run in parallel, and which follow immediately.

| Logic | Meaning |
|---|---|
| A → B | A must finish before B starts. |
| A and B both → C | A and B are concurrent; C cannot start until **both** are complete (merge event). |
| A → B and A → C | B and C are concurrent; neither can start until A is complete (burst event). |
| A, B → C, D | Neither C nor D can start until **both** A and B are complete; C and D then proceed independently. |
| A → B, and A, C → D | D needs both A and C, but B needs only A. This needs a **dummy** activity. |

#### Dummy activity

Crop 2 is to be raised on the same plot after harvesting crop 1:

| Activity | Code | Preceding |
|---|---|---|
| Harvest crop 1 | A | none |
| Sell crop 1 | B | A |
| Raise nursery of crop 2 | C | none |
| Transplant crop 2 | D | A, C |

<figure class="fig"><svg viewBox="0 0 600 240" role="img" aria-label="Dummy activity Z (dashed): transplanting crop 2 (D) needs both the harvest (A) and the nursery (C), but selling crop 1 (B) only needs the harvest. Z takes no time and no resources."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><circle cx="60" cy="60" r="24" class="d-box"/><text x="60.0" y="65.0" text-anchor="middle" class="d-t b">1</text><circle cx="250" cy="60" r="24" class="d-box"/><text x="250.0" y="65.0" text-anchor="middle" class="d-t b">2</text><circle cx="480" cy="60" r="24" class="d-box"/><text x="480.0" y="65.0" text-anchor="middle" class="d-t b">3</text><circle cx="60" cy="190" r="24" class="d-box"/><text x="60.0" y="195.0" text-anchor="middle" class="d-t b">4</text><circle cx="250" cy="190" r="24" class="d-box"/><text x="250.0" y="195.0" text-anchor="middle" class="d-t b">5</text><circle cx="480" cy="190" r="24" class="d-box"/><text x="480.0" y="195.0" text-anchor="middle" class="d-t b">6</text><line x1="84.0" y1="60.0" x2="224.0" y2="60.0" class="d-ax" marker-end="url(#ah)"/><text x="154.0" y="50.0" text-anchor="middle" class="d-t s a">A  Harvest crop 1</text><line x1="274.0" y1="60.0" x2="454.0" y2="60.0" class="d-ax" marker-end="url(#ah)"/><text x="364.0" y="50.0" text-anchor="middle" class="d-t s a">B  Sell crop 1</text><line x1="84.0" y1="190.0" x2="224.0" y2="190.0" class="d-ax" marker-end="url(#ah)"/><text x="154.0" y="209.0" text-anchor="middle" class="d-t s a">C  Nursery crop 2</text><line x1="274.0" y1="190.0" x2="454.0" y2="190.0" class="d-ax" marker-end="url(#ah)"/><text x="364.0" y="209.0" text-anchor="middle" class="d-t s a">D  Transplant crop 2</text><line x1="250.0" y1="84.0" x2="250.0" y2="164.0" class="d-ax dash" marker-end="url(#ah)"/><text x="298.0" y="129.0" text-anchor="middle" class="d-t s a">Z (dummy)</text></svg><figcaption>Dummy activity Z (dashed): transplanting crop 2 (D) needs both the harvest (A) and the nursery (C), but selling crop 1 (B) only needs the harvest. Z takes no time and no resources.</figcaption></figure>

The dummy Z carries the logic "D also waits for A". It has **zero time and zero cost**.

#### Rules for drawing the network

1. Each activity is represented by **one and only one arrow**.
2. All arrows run from **left to right**.
3. **Dotted (dashed)** arrows are dummy activities.
4. A **circle** is an event.
5. Every activity **starts and ends with an event**.
6. **No two activities** may have the same head and tail events (use a dummy to separate them).
7. Do not use a dummy **unless it is needed** to show the logic.
8. Avoid **loops** and **crossing arrows**; reposition instead.
9. Every activity, except the first and the last, must have at least one preceding and one succeeding activity.
10. Avoid **danglers** (activities that lead nowhere) and isolated activities.
11. Use **letters** for all activities (including dummies) and **numbers** for events.
12. Show each event as a circle with its **number**, **EST** and **LST**.

The lift irrigation network, with event times, is analysed in the next chapter.
