**Individual Assignment #1**, issued 26 November 2025, due Wednesday 3 December 2025 at 15:00. The question sheet is in **Past papers**.

The assignment is based on three reference books: **A.** *Project Management for Engineering, Business, and Technology* (4th ed.), J. M. Nicholas and H. Steyn; **B.** *Project Management: A Systems Approach to Planning, Scheduling, and Controlling* (8th ed.), H. Kerzner; **C.** *The Handbook of Project-based Management*, J. R. Turner.

## Q1–Q2
Obtain the books listed above (and any other relevant material), read each one, and prepare individual notes on "Project Management".

::: answer
These are reading tasks, so there is no single answer. Good notes cover what the course notes cover, using the books to go deeper:

- **What a project is** (temporary, unique, progressively elaborated) and how it differs from operations; the **triple constraint** of scope, time and cost.
- The **project life cycle** and the systems view (Kerzner): a project as a system of interrelated parts and stakeholders.
- **Organisation**: functional, matrix and projectized structures; the role of the project manager and team.
- **Planning tools**: WBS, Gantt charts, networks (CPM/PERT), resource levelling, time–cost trade-off.
- **Cost and control**: budgeting, earned value, progress reporting, change control.
- **Risk, quality, procurement and contracts**, and **project closure**.
- **Strategic and organisational change** through projects (Turner).

Organise the notes by these headings and cite each book.
:::

## Q3
From what you have obtained, explain how the books relate to Engineering Project Management.

::: answer
- They provide the **theory behind the course topics**: the definitions and characteristics of projects, the life cycle and the quality triangle (Chapter 1); formulation, feasibility and appraisal (Chapter 2); bar charts, networks, CPM/PERT, resources and crashing (Chapter 3); and procurement and contracts (Chapter 4).
- **Nicholas and Steyn** apply them to **engineering and technology projects**: system development, technical risk and testing.
- **Kerzner** gives the **systems approach** to planning, scheduling and controlling large, multidisciplinary engineering projects, including cost control and earned value.
- **Turner** shows how projects deliver **organisational and strategic change**, linking an engineering project to the business case behind it.
- Together they show that engineering project management is the **application of these general methods** to technical work (substations, mini-grids, plant installation) under constraints of time, cost, quality, safety and resources.
:::

## Q4
With clearly labelled illustrations, explain: (a) Basic Networks (b) the Arrow Diagram Method (ADM) (c) the Node Network Method (d) the Critical Path Method (CPM) (e) the Work Breakdown Structure (WBS) (f) the Precedence Diagram Method (PDM).

::: answer
**(a) Basic networks.** A network is a diagram of all the project's **activities and events** in their **logical order**. It extends the milestone chart by showing **interrelationships between all milestones**, so the effect of a delay on project completion can be seen. Elements: **activity** (uses time and resources), **event** (an instant: start or finish of activities), **dummy** (logic only). See the network figures in the *Bar charts and networks* chapter.

**(b) Arrow Diagram Method (ADM) = Activity on Arrow (AOA).** The **arrow is the activity** and the **circle (node) is an event**. Each activity is identified by its tail and head event numbers (A = 1–2). **Dummy activities** (dashed, zero time) may be needed to show logic. It is associated with **PERT**.

**(c) Node network method = Activity on Node (AON).** Each **activity is a box (node)**; the **arrows only show sequence**. No dummies are needed. Each box usually shows ES, duration, EF, LS, float, LF. Most **software** (e.g. MS Project's Network Diagram) uses AON.

**(d) Critical Path Method (CPM).** Developed by **E. I. du Pont** (1956–58) for construction; uses **one deterministic duration** per activity. Steps: list activities, define precedence, estimate durations, draw the network, then do a **forward pass** (earliest times, take the maximum at merges) and a **backward pass** (latest times, take the minimum at bursts). Activities with **zero float** form the **critical path**, the longest path, which sets the shortest project duration. CPM also supports **time–cost trade-off (crashing)**.

**(e) Work Breakdown Structure (WBS).** *Mostly beyond the notes.* A **hierarchical, tree-shaped breakdown** of the whole scope: level 0 the project, level 1 major deliverables or sub-projects, level 2 work packages, then activities. Example for a substation: Project → civil works, electrical installation, protection and control, testing and commissioning → foundations, transformer erection, cabling, relay settings… Rule: the WBS contains **100% of the work** and nothing more. It is the basis for estimating, scheduling, budgeting and assigning responsibility.

**(f) Precedence Diagram Method (PDM).** *Beyond the notes.* An **activity-on-node** method that allows **four types of dependency**, each with an optional **lag or lead**:

| Link | Meaning |
|---|---|
| Finish-to-Start (FS) | B starts after A finishes (the usual case) |
| Start-to-Start (SS) | B starts after A starts (e.g. building starts once the first bricks are made) |
| Finish-to-Finish (FF) | B finishes when A finishes |
| Start-to-Finish (SF) | B cannot finish until A starts (rare) |

It models overlapping work without splitting activities and is the method used by scheduling software.
:::

## Q5
Using Tables 1 and 2: (i) construct a network diagram; (ii) number the nodes, starting at one; (iii) add the EST and LFT for each node; (iv) calculate the free and total floats and identify the critical path.

**Table 1 (logic):** A precedes B, C and D; B precedes E; C precedes G; D and E precede F; F and H precede K; G precedes H and J; J precedes L; K and L precede M.

**Table 2 (durations, days):**

| A | B | C | D | E | F | G | H | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 | 6 | 10 | 11 | 9 | 6 | 8 | 5 | 4 | 6 | 4 | 3 |

::: answer
The same network is Question 6 of the in-class group assignment of 12 December 2025.

**(i)–(iii) Network, node numbers, EST and LFT**

<figure class="fig"><svg viewBox="0 0 740 340" role="img" aria-label="Activity-on-arrow network for the 12-activity project, nodes numbered 1 to 10. Critical path A–C–G–H–K–M (events 1–2–4–6–7–9–10), 34 days."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="58.0" y1="180.0" x2="106.0" y2="180.0" class="d-a w" marker-end="url(#ah)"/><text x="82.0" y="171.0" text-anchor="middle" class="d-t s a">A 2</text><line x1="146.6" y1="194.5" x2="231.9" y2="269.2" class="d-ax" marker-end="url(#ah)"/><text x="178.7" y="248.9" text-anchor="middle" class="d-t s a">B 6</text><line x1="146.9" y1="165.9" x2="231.6" y2="95.4" class="d-a w" marker-end="url(#ah)"/><text x="180.3" y="124.9" text-anchor="middle" class="d-t s a">C 10</text><line x1="150.3" y1="188.5" x2="357.9" y2="275.7" class="d-ax" marker-end="url(#ah)"/><text x="258.7" y="226.0" text-anchor="middle" class="d-t s a">D 11</text><line x1="272.0" y1="285.0" x2="356.0" y2="285.0" class="d-ax" marker-end="url(#ah)"/><text x="314.0" y="306.0" text-anchor="middle" class="d-t s a">E 9</text><line x1="272.0" y1="80.0" x2="356.0" y2="80.0" class="d-a w" marker-end="url(#ah)"/><text x="314.0" y="71.0" text-anchor="middle" class="d-t s a">G 8</text><line x1="398.4" y1="273.0" x2="489.9" y2="213.1" class="d-ax" marker-end="url(#ah)"/><text x="452.9" y="261.4" text-anchor="middle" class="d-t s a">F 6</text><line x1="396.2" y1="94.9" x2="492.4" y2="183.7" class="d-a w" marker-end="url(#ah)"/><text x="434.8" y="154.6" text-anchor="middle" class="d-t s a">H 5</text><line x1="401.0" y1="73.5" x2="487.1" y2="47.1" class="d-ax" marker-end="url(#ah)"/><text x="439.9" y="51.9" text-anchor="middle" class="d-t s a">J 4</text><line x1="530.9" y1="193.0" x2="607.2" y2="167.6" class="d-a w" marker-end="url(#ah)"/><text x="573.5" y="198.6" text-anchor="middle" class="d-t s a">K 6</text><line x1="525.6" y1="55.6" x2="613.0" y2="143.0" class="d-ax" marker-end="url(#ah)"/><text x="579.2" y="94.4" text-anchor="middle" class="d-t s a">L 4</text><line x1="652.0" y1="160.0" x2="688.0" y2="160.0" class="d-a w" marker-end="url(#ah)"/><text x="670.0" y="151.0" text-anchor="middle" class="d-t s a">M 3</text><circle cx="36" cy="180" r="22" class="d-box a"/><line x1="36.0" y1="158.0" x2="36.0" y2="202.0" class="d-ax"/><line x1="36.0" y1="180.0" x2="58.0" y2="180.0" class="d-ax"/><text x="25.0" y="185.0" text-anchor="middle" class="d-t b">1</text><text x="47.0" y="174.0" text-anchor="middle" class="d-t s">0</text><text x="47.0" y="196.0" text-anchor="middle" class="d-t s r">0</text><circle cx="130" cy="180" r="22" class="d-box a"/><line x1="130.0" y1="158.0" x2="130.0" y2="202.0" class="d-ax"/><line x1="130.0" y1="180.0" x2="152.0" y2="180.0" class="d-ax"/><text x="119.0" y="185.0" text-anchor="middle" class="d-t b">2</text><text x="141.0" y="174.0" text-anchor="middle" class="d-t s">2</text><text x="141.0" y="196.0" text-anchor="middle" class="d-t s r">2</text><circle cx="250" cy="285" r="22" class="d-box"/><line x1="250.0" y1="263.0" x2="250.0" y2="307.0" class="d-ax"/><line x1="250.0" y1="285.0" x2="272.0" y2="285.0" class="d-ax"/><text x="239.0" y="290.0" text-anchor="middle" class="d-t b">3</text><text x="261.0" y="279.0" text-anchor="middle" class="d-t s">8</text><text x="261.0" y="301.0" text-anchor="middle" class="d-t s r">10</text><circle cx="250" cy="80" r="22" class="d-box a"/><line x1="250.0" y1="58.0" x2="250.0" y2="102.0" class="d-ax"/><line x1="250.0" y1="80.0" x2="272.0" y2="80.0" class="d-ax"/><text x="239.0" y="85.0" text-anchor="middle" class="d-t b">4</text><text x="261.0" y="74.0" text-anchor="middle" class="d-t s">12</text><text x="261.0" y="96.0" text-anchor="middle" class="d-t s r">12</text><circle cx="380" cy="285" r="22" class="d-box"/><line x1="380.0" y1="263.0" x2="380.0" y2="307.0" class="d-ax"/><line x1="380.0" y1="285.0" x2="402.0" y2="285.0" class="d-ax"/><text x="369.0" y="290.0" text-anchor="middle" class="d-t b">5</text><text x="391.0" y="279.0" text-anchor="middle" class="d-t s">17</text><text x="391.0" y="301.0" text-anchor="middle" class="d-t s r">19</text><circle cx="380" cy="80" r="22" class="d-box a"/><line x1="380.0" y1="58.0" x2="380.0" y2="102.0" class="d-ax"/><line x1="380.0" y1="80.0" x2="402.0" y2="80.0" class="d-ax"/><text x="369.0" y="85.0" text-anchor="middle" class="d-t b">6</text><text x="391.0" y="74.0" text-anchor="middle" class="d-t s">20</text><text x="391.0" y="96.0" text-anchor="middle" class="d-t s r">20</text><circle cx="510" cy="200" r="22" class="d-box a"/><line x1="510.0" y1="178.0" x2="510.0" y2="222.0" class="d-ax"/><line x1="510.0" y1="200.0" x2="532.0" y2="200.0" class="d-ax"/><text x="499.0" y="205.0" text-anchor="middle" class="d-t b">7</text><text x="521.0" y="194.0" text-anchor="middle" class="d-t s">25</text><text x="521.0" y="216.0" text-anchor="middle" class="d-t s r">25</text><circle cx="510" cy="40" r="22" class="d-box"/><line x1="510.0" y1="18.0" x2="510.0" y2="62.0" class="d-ax"/><line x1="510.0" y1="40.0" x2="532.0" y2="40.0" class="d-ax"/><text x="499.0" y="45.0" text-anchor="middle" class="d-t b">8</text><text x="521.0" y="34.0" text-anchor="middle" class="d-t s">24</text><text x="521.0" y="56.0" text-anchor="middle" class="d-t s r">27</text><circle cx="630" cy="160" r="22" class="d-box a"/><line x1="630.0" y1="138.0" x2="630.0" y2="182.0" class="d-ax"/><line x1="630.0" y1="160.0" x2="652.0" y2="160.0" class="d-ax"/><text x="619.0" y="165.0" text-anchor="middle" class="d-t b">9</text><text x="641.0" y="154.0" text-anchor="middle" class="d-t s">31</text><text x="641.0" y="176.0" text-anchor="middle" class="d-t s r">31</text><circle cx="712" cy="160" r="22" class="d-box a"/><line x1="712.0" y1="138.0" x2="712.0" y2="182.0" class="d-ax"/><line x1="712.0" y1="160.0" x2="734.0" y2="160.0" class="d-ax"/><text x="701.0" y="165.0" text-anchor="middle" class="d-t b">10</text><text x="723.0" y="154.0" text-anchor="middle" class="d-t s">34</text><text x="723.0" y="176.0" text-anchor="middle" class="d-t s r">34</text><text x="370.0" y="330.0" text-anchor="middle" class="d-t s m">Event: number | earliest time E (top) | latest time L (bottom, red). Blue = critical.</text></svg><figcaption>Activity-on-arrow network for the 12-activity project, nodes numbered 1 to 10. Critical path A–C–G–H–K–M (events 1–2–4–6–7–9–10), 34 days.</figcaption></figure>

Nodes are numbered with Fulkerson's rule (each head number higher than its tail). No dummies are needed.

| Node | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| EST | 0 | 2 | 8 | 12 | 17 | 20 | 25 | 24 | 31 | 34 |
| LFT | 0 | 2 | 10 | 12 | 19 | 20 | 25 | 27 | 31 | 34 |

Forward pass at merges: node 5 = max(2 + 11, 8 + 9) = 17; node 7 = max(17 + 6, 20 + 5) = 25; node 9 = max(25 + 6, 24 + 4) = 31.
Backward pass at bursts: node 6 = min(25 − 5, 27 − 4) = 20; node 2 = min(10 − 6, 12 − 10, 19 − 11) = 2.

**(iv) Floats** ($TF = L_j - E_i - t$, $FF = E_j - E_i - t$)

| Activity | $i \to j$ | $t$ | TF | FF |
|---|---|---|---|---|
| A | 1 → 2 | 2 | 0 | 0 |
| B | 2 → 3 | 6 | 10 − 2 − 6 = **2** | 8 − 2 − 6 = 0 |
| C | 2 → 4 | 10 | 0 | 0 |
| D | 2 → 5 | 11 | 19 − 2 − 11 = **6** | 17 − 2 − 11 = **4** |
| E | 3 → 5 | 9 | 19 − 8 − 9 = **2** | 17 − 8 − 9 = 0 |
| F | 5 → 7 | 6 | 25 − 17 − 6 = **2** | 25 − 17 − 6 = **2** |
| G | 4 → 6 | 8 | 0 | 0 |
| H | 6 → 7 | 5 | 0 | 0 |
| J | 6 → 8 | 4 | 27 − 20 − 4 = **3** | 24 − 20 − 4 = 0 |
| K | 7 → 9 | 6 | 0 | 0 |
| L | 8 → 9 | 4 | 31 − 24 − 4 = **3** | 31 − 24 − 4 = **3** |
| M | 9 → 10 | 3 | 0 | 0 |

**Critical path: A–C–G–H–K–M** (nodes 1–2–4–6–7–9–10), $2 + 10 + 8 + 5 + 6 + 3 =$ **34 days**.

Note that B–E–F share 2 days of float and J–L share 3: the float appears as free float only on the last activity of each chain.
:::
