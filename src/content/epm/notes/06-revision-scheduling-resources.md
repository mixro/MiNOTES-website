# Network revision, scheduling and resources

*Chapter 3 · EEU 08106 Engineering Project Management*

The first network gives two things: an **estimate of the project duration** and the **critical path**. Before work starts, the network is revised into a practical plan, turned into a schedule, and checked against the resources available.

## 1. Network revision

**Network revision** turns the initial network into a **valid, practical network** that meets the project's requirements and can be used to control the work. It has two purposes:

1. improve the **quality of the information**: the relationships and durations of activities; and
2. make sure the final network **meets the project objectives**, which are stated in terms of **time, cost, resources and performance**.

### Reviewing the relationships

Some relationships may have been drawn wrongly. Activities that seem to need doing **in series** can sometimes be done **in parallel**. Often only **part** of an activity really holds up the next one; split it, and draw the rest in parallel. If that activity is on the critical path, the project gets shorter.

### Reviewing the durations

Re-examine durations in the light of the critical path: analyse work in more detail, confirm delivery times with suppliers. **Rough estimates are acceptable for activities with plenty of float.** Some durations depend almost entirely on the quality required (R&D, design work); for non-critical ones, use the idea of **available time**.

A quick check: work out the **percentage of even-numbered durations**. Estimators are biased towards even numbers, so the share is rarely as low as the 50% you would expect.

### Meeting the project objectives

Objectives in one factor can conflict with another (the shortest time is rarely the lowest cost), so they must be stated **with priorities**.

| Objective | How the network is revised |
|---|---|
| **Time** | If the duration is too long, examine **critical activities first**: change relationships, then cut durations by moving resources from non-critical work, more labour or machines, overtime or extra shifts. |
| **Cost** | The network shows the **pattern of spending** over time; compare it with the money available and modify the plan if needed. Some activities can be sped up or slowed down by spending more or less, so the network can find the duration with the **minimum total cost**. |
| **Resources** | The first network ignores resources. If they are limited, independent activities may have to be done **one after another** (e.g. several fitting jobs but only one fitter). If they have enough float, the end date holds; if not, hire another fitter or accept a later finish. Critical activities can get extra resources; activities with float can take longer with fewer. |
| **Performance** | Faster methods may be less satisfactory; less time for development and testing may affect the final specification. Check that the specification can still be met. |

**The final network.** There are usually several ways to revise the plan, each with different effects. Many changes are made before a final plan is agreed, and detailed **work schedules** are drawn up from it.

## 2. Activity scheduling

**Scheduling** turns the final network into a **programme of work**. Critical activities have only one possible start time; every other activity can start anywhere between its **EST and LST**. The start times can be chosen in five ways.

| Approach | Advantages | Disadvantages |
|---|---|---|
| **1. All at earliest start** | Keeps the **float in reserve** for later delays. Start times are read straight off the network. | Spends money too early: equipment sits idle waiting for installation; staff are hired before there is work. |
| **2. All at latest start** | Best for cash flow: money is spent **as late as possible**. | Throws all float away, so **every activity becomes critical**. The project is very sensitive to delays and is unlikely to finish on time. Schedulers dare not use it. |
| **3. Distributing the float** | A compromise: each activity in a chain gets a share of the float as a contingency, since most times will vary from the estimate. | Float given away early may be needed later for a major delay. By **Parkinson's law**, *"work expands to fill the time available"*, so allocated float gets used up whether needed or not. |
| **4. Arbitrary start times** | Leaves the choice (between EST and LST) to the person doing the activity. | Causes confusion: nobody knows when others will finish, so nobody can plan. Float is gradually used up, leaving later activities critical. |
| **5. Considering resource availability** | Fits the work to the resources actually available; activities that could run in parallel may be done in series, using float. | Needs a resource analysis. |

> In practice, **only the resource-based approach** can be used to set the start times of all activities in a project.

## 3. Resource analysis and smoothing

In some projects (e.g. R&D) **time is all-important** and cost and resources come second. In most projects, resources are limited, and success depends on using them effectively.

**Resource analysis:** assign to each activity the units of resource it normally uses. From a schedule with all activities at their earliest start, draw a **resource histogram**: total units needed in each time period. Compare it with what is available.

> **Example: establishing a mango orchard**
>
> | Activity | Code | Preceding | Duration (days) | Workers per day |
> |---|---|---|---|---|
> | Land preparation | A | none | 3 | 4 |
> | Digging pits | B | A | 5 | 4 |
> | Purchase saplings | C | A | 3 | 2 |
> | Application of FYM (manure) | D | B | 3 | 3 |
> | Transplant saplings | E | C, D | 4 | 4 |
>
> **Critical path** A–B–D–E: $3 + 5 + 3 + 4 =$ **15 days**.
> C can start on day 3 and must finish by day 11 (when E starts): **total float of C** $= 11 - 3 - 3 =$ **5 days**.

<figure class="fig"><svg viewBox="0 0 600 285" role="img" aria-label="Mango orchard manpower. Using C’s 5 days of float to move it from days 3–6 to days 8–11 smooths the demand (resource smoothing)."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="40.0" y1="200.0" x2="302.0" y2="200.0" class="d-ax" marker-end="url(#ah)"/><line x1="40.0" y1="200.0" x2="40.0" y2="35.0" class="d-ax" marker-end="url(#ah)"/><text x="302.0" y="222.0" text-anchor="end" class="d-t s"></text><text x="48.0" y="39.0" text-anchor="start" class="d-t s">Workers</text><text x="302.0" y="234.0" text-anchor="end" class="d-t s">Days</text><rect x="40" y="128" width="48" height="72" class="d-box a" rx="2"/><text x="64.0" y="122.0" text-anchor="middle" class="d-t s">4</text><rect x="88" y="92" width="48" height="108" class="d-box a" rx="2"/><text x="112.0" y="86.0" text-anchor="middle" class="d-t s">6</text><rect x="136" y="128" width="32" height="72" class="d-box a" rx="2"/><text x="152.0" y="122.0" text-anchor="middle" class="d-t s">4</text><rect x="168" y="146" width="48" height="54" class="d-box a" rx="2"/><text x="192.0" y="140.0" text-anchor="middle" class="d-t s">3</text><rect x="216" y="128" width="64" height="72" class="d-box a" rx="2"/><text x="248.0" y="122.0" text-anchor="middle" class="d-t s">4</text><text x="88.0" y="218.0" text-anchor="middle" class="d-t s m">3</text><text x="136.0" y="218.0" text-anchor="middle" class="d-t s m">6</text><text x="168.0" y="218.0" text-anchor="middle" class="d-t s m">8</text><text x="216.0" y="218.0" text-anchor="middle" class="d-t s m">11</text><text x="280.0" y="218.0" text-anchor="middle" class="d-t s m">15</text><text x="170.0" y="252.0" text-anchor="middle" class="d-t b">C at earliest start (days 3–6)</text><text x="170.0" y="270.0" text-anchor="middle" class="d-t s m">peak 6, low 3: range 3</text><line x1="330.0" y1="200.0" x2="592.0" y2="200.0" class="d-ax" marker-end="url(#ah)"/><line x1="330.0" y1="200.0" x2="330.0" y2="35.0" class="d-ax" marker-end="url(#ah)"/><text x="592.0" y="222.0" text-anchor="end" class="d-t s"></text><text x="338.0" y="39.0" text-anchor="start" class="d-t s">Workers</text><text x="592.0" y="234.0" text-anchor="end" class="d-t s">Days</text><rect x="330" y="128" width="48" height="72" class="d-box a" rx="2"/><text x="354.0" y="122.0" text-anchor="middle" class="d-t s">4</text><rect x="378" y="128" width="80" height="72" class="d-box a" rx="2"/><text x="418.0" y="122.0" text-anchor="middle" class="d-t s">4</text><rect x="458" y="110" width="48" height="90" class="d-box a" rx="2"/><text x="482.0" y="104.0" text-anchor="middle" class="d-t s">5</text><rect x="506" y="128" width="64" height="72" class="d-box a" rx="2"/><text x="538.0" y="122.0" text-anchor="middle" class="d-t s">4</text><text x="378.0" y="218.0" text-anchor="middle" class="d-t s m">3</text><text x="426.0" y="218.0" text-anchor="middle" class="d-t s m">6</text><text x="458.0" y="218.0" text-anchor="middle" class="d-t s m">8</text><text x="506.0" y="218.0" text-anchor="middle" class="d-t s m">11</text><text x="570.0" y="218.0" text-anchor="middle" class="d-t s m">15</text><text x="460.0" y="252.0" text-anchor="middle" class="d-t b">C moved to days 8–11</text><text x="460.0" y="270.0" text-anchor="middle" class="d-t s m">peak 5, low 4: range 1</text></svg><figcaption>Mango orchard manpower. Using C’s 5 days of float to move it from days 3–6 to days 8–11 smooths the demand (resource smoothing).</figcaption></figure>

> With every activity at its **earliest start**, the workforce goes 4 → **6** (days 3–6, B + C) → 4 → **3** (days 8–11, D alone) → 4. Peak 6, low 3, a swing of **3 workers**.
>
> **Smoothing:** use C's float and schedule it on **days 8–11**, alongside D. The demand becomes 4, 4, **5**, 4: a swing of only **1 worker**, with no change to the 15-day duration.

> **Correction.** The notes give the peak during days 3–6 as **7** workers and the swing as **4**. B needs 4 and C needs 2, so the peak is **6** and the swing (6 − 3) is **3**. The conclusion, that rescheduling C leaves a swing of only 1 worker, is right.

**Resource smoothing** spreads the resource load **evenly** over the project **without changing its duration**, by moving activities within their float. In agricultural projects it is limited, because field work depends on the weather, the cropping pattern and the crop, but it still applies to implements and to operations not tied to nature. In engineering projects it is widely used for crews, cranes and test equipment.
