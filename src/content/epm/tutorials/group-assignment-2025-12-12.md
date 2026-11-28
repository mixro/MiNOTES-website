**In-class group assignment**, Friday 12 December 2025 (BENG22-EE-1), handed in at the end of the class. The question sheet is in **Past papers**.

## Q1
Propose how the effective use of project management software can help an organisation manage its projects throughout each stage of the project life cycle.

::: answer
Following the four life-cycle phases in the notes (with monitoring and control running through execution):

| Phase | How the software helps |
|---|---|
| **Conceptualisation / initiation** | Stores the project charter, concept note and feasibility documents in one place; records stakeholders; templates and past project data support estimates and selection (NPV, IRR spreadsheets). |
| **Planning** | Builds the **WBS** and task list; links tasks (FS, SS, FF) and draws the **Gantt chart and network**; calculates the **critical path** and floats automatically; assigns resources and **levels** them; produces the budget and saves a **baseline**. |
| **Execution** | Shared dashboards and messaging for **communication with stakeholders**; team members update progress (% complete); resources and costs are tracked against the plan; **change requests** are logged and their effect on the finish date seen at once. |
| **Monitoring and control** | **Tracking Gantt** shows slippage against the baseline; reports on schedule and cost **variance** (e.g. earned value) and key performance indicators; quick "what-if" rescheduling when delays occur. |
| **Termination (closure)** | Confirms all tasks and deliverables are complete; releases resources; archives documents and **lessons learned**; actual data improves future estimates. |

Overall benefits: faster and more accurate scheduling, one source of truth, better communication, early warning of problems, and better decisions. (MS Project is covered in the *Microsoft Project basics* chapter.)
:::

## Q2
(a) Analyse the Discounted Cash Flow (DCF) technique for appraising large investment decisions.
(b) A car manufacturer plans an assembly facility in the Coast Region costing TShs 127 960 000 000. Forecast net income: Year 1: 28.0 bn; Year 2: 29.0 bn; Year 3: 31.0 bn; Year 4: 32.5 bn; Year 5: 29.6 bn; discount factors at 5%: 0.952, 0.907, 0.864, 0.823, 0.784. (i) Calculate the payback time to the nearest month. (ii) Calculate the NPV at 5% and comment on the project's attractiveness.

::: answer
**(a) DCF technique.** DCF recognises the **time value of money**: a shilling today is worth more than a shilling in future, because it can earn a return. Discounting is the **reverse of compounding**: each future cash flow is converted to its **present value**,

$$PV = \frac{C_n}{(1+d)^n}$$

and the present values of investments ($C$) and returns ($B$) are compared through three measures: **NPV** $= B - C$ (accept if > 0), **benefit–cost ratio** $B/C$ (accept if > 1), and **IRR** (the rate where NPV = 0; accept if above the cost of capital).

| Advantages | Disadvantages |
|---|---|
| Accounts for the **timing** of cash flows (unlike pay-back and ROI) | Needs a **discount rate**, which is hard to choose |
| Considers **all** cash flows over the project life | Depends on **long-term forecasts** that may be wrong |
| Gives an objective basis to **compare and rank** large projects | More complex to calculate and explain |
| Shows the **increase in value** (NPV) for the investors | IRR may mislead for unusual cash flows; NPV ignores project size |

**(b)(i) Pay-back** (TShs bn)

| Year | Net income | Cumulative |
|---|---|---|
| 1 | 28.0 | 28.0 |
| 2 | 29.0 | 57.0 |
| 3 | 31.0 | 88.0 |
| 4 | 32.5 | 120.5 |
| 5 | 29.6 | 150.1 |

After 4 years, $127.96 - 120.5 = 7.46$ bn is still to recover. In year 5 this takes $7.46/29.6 = 0.252$ years $= 0.252 \times 12 \approx 3$ months.

**Pay-back ≈ 4 years 3 months.**

**(b)(ii) NPV at 5%**

| Year | Net income (bn) | Factor | PV (bn) |
|---|---|---|---|
| 1 | 28.0 | 0.952 | 26.656 |
| 2 | 29.0 | 0.907 | 26.303 |
| 3 | 31.0 | 0.864 | 26.784 |
| 4 | 32.5 | 0.823 | 26.748 |
| 5 | 29.6 | 0.784 | 23.206 |
| | | **B** | **129.697** |

$$NPV = 129.697 - 127.960 = \mathbf{+1.737}$$

**NPV ≈ +TShs 1.737 bn** (about TShs 1 737 million).

**Comment:** the NPV is **positive**, so at 5% the project is acceptable and adds value. But it is **only marginally attractive**: the NPV is about 1.4% of the investment, the BCR is $129.7/128.0 = 1.01$, and the investment is recovered only in year 5 (the last forecast year). A small fall in income, a cost overrun or a higher discount rate would make the NPV negative, so a **sensitivity analysis** and the non-financial benefits (jobs, foreign-exchange savings, regional development) should support the decision.
:::

## Q3
(a) Compare and contrast PERT with CPM.
(b) The software project below runs a 5-day working week, with all tasks starting as soon as possible. (i) Determine the critical path. (ii) Calculate the planned duration in weeks. (iii) Identify the non-critical tasks and the float (free slack) on each.

| Task | Description | Days | Predecessors |
|---|---|---|---|
| A | Requirement analysis | 5 | none |
| B | Systems design | 15 | A |
| C | Programming | 25 | B |
| D | Telecoms | 15 | B |
| E | Hardware installation | 30 | B |
| F | Integration | 10 | C, D |
| G | System testing | 10 | E, F |
| H | Training and support | 5 | G |
| I | Handover and go-live | 5 | H |

::: answer
**(a)**

| | PERT | CPM |
|---|---|---|
| Name | Programme Evaluation and Review Technique | Critical Path Method |
| Origin | US Navy, Polaris missile R&D (1956–58) | E. I. du Pont, construction (1956–58) |
| Time estimates | **Probabilistic**: $T_E = (T_O + 4T_M + T_P)/6$ | **Deterministic**: one estimate |
| Suited to | New, uncertain work (R&D) | Repetitive, well-known work (construction) |
| Emphasis | Scheduling and **monitoring** events | **Time–cost trade-off**, resource allocation (crashing) |
| Notation | Usually activity-on-arrow, event oriented | Activity oriented (AOA or AON) |

**Similarities:** both draw the project as a **network**, use forward and backward passes, find the **critical path** and **floats**, and are used for planning and control. Today the terms are used almost interchangeably.

**(b)**

<figure class="fig"><svg viewBox="0 0 660 300" role="img" aria-label="Activity-on-node network for the software project. Critical path A–B–C–F–G–H–I = 75 working days (15 weeks). D has 10 days of float, E has 5."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="76.0" y1="139.0" x2="98.0" y2="139.0" class="d-a" marker-end="url(#ah)"/><line x1="166.0" y1="139.0" x2="198.0" y2="49.0" class="d-a" marker-end="url(#ah)"/><line x1="166.0" y1="139.0" x2="198.0" y2="139.0" class="d-ax" marker-end="url(#ah)"/><line x1="166.0" y1="139.0" x2="288.0" y2="229.0" class="d-ax" marker-end="url(#ah)"/><line x1="266.0" y1="49.0" x2="298.0" y2="89.0" class="d-a" marker-end="url(#ah)"/><line x1="266.0" y1="139.0" x2="298.0" y2="89.0" class="d-ax" marker-end="url(#ah)"/><line x1="356.0" y1="229.0" x2="398.0" y2="139.0" class="d-ax" marker-end="url(#ah)"/><line x1="366.0" y1="89.0" x2="398.0" y2="139.0" class="d-a" marker-end="url(#ah)"/><line x1="466.0" y1="139.0" x2="488.0" y2="139.0" class="d-a" marker-end="url(#ah)"/><line x1="556.0" y1="139.0" x2="578.0" y2="139.0" class="d-a" marker-end="url(#ah)"/><rect x="10" y="110" width="66" height="58" rx="6" class="d-box a"/><line x1="10.0" y1="128.0" x2="76.0" y2="128.0" class="d-ax"/><line x1="10.0" y1="150.0" x2="76.0" y2="150.0" class="d-ax"/><text x="21.0" y="124.0" text-anchor="middle" class="d-t s">0</text><text x="43.0" y="124.0" text-anchor="middle" class="d-t s">5</text><text x="65.0" y="124.0" text-anchor="middle" class="d-t s">5</text><text x="21.0" y="163.0" text-anchor="middle" class="d-t s r">0</text><text x="43.0" y="163.0" text-anchor="middle" class="d-t s m">0</text><text x="65.0" y="163.0" text-anchor="middle" class="d-t s r">5</text><text x="43.0" y="144.0" text-anchor="middle" class="d-t b">A</text><rect x="100" y="110" width="66" height="58" rx="6" class="d-box a"/><line x1="100.0" y1="128.0" x2="166.0" y2="128.0" class="d-ax"/><line x1="100.0" y1="150.0" x2="166.0" y2="150.0" class="d-ax"/><text x="111.0" y="124.0" text-anchor="middle" class="d-t s">5</text><text x="133.0" y="124.0" text-anchor="middle" class="d-t s">15</text><text x="155.0" y="124.0" text-anchor="middle" class="d-t s">20</text><text x="111.0" y="163.0" text-anchor="middle" class="d-t s r">5</text><text x="133.0" y="163.0" text-anchor="middle" class="d-t s m">0</text><text x="155.0" y="163.0" text-anchor="middle" class="d-t s r">20</text><text x="133.0" y="144.0" text-anchor="middle" class="d-t b">B</text><rect x="200" y="20" width="66" height="58" rx="6" class="d-box a"/><line x1="200.0" y1="38.0" x2="266.0" y2="38.0" class="d-ax"/><line x1="200.0" y1="60.0" x2="266.0" y2="60.0" class="d-ax"/><text x="211.0" y="34.0" text-anchor="middle" class="d-t s">20</text><text x="233.0" y="34.0" text-anchor="middle" class="d-t s">25</text><text x="255.0" y="34.0" text-anchor="middle" class="d-t s">45</text><text x="211.0" y="73.0" text-anchor="middle" class="d-t s r">20</text><text x="233.0" y="73.0" text-anchor="middle" class="d-t s m">0</text><text x="255.0" y="73.0" text-anchor="middle" class="d-t s r">45</text><text x="233.0" y="54.0" text-anchor="middle" class="d-t b">C</text><rect x="200" y="110" width="66" height="58" rx="6" class="d-box"/><line x1="200.0" y1="128.0" x2="266.0" y2="128.0" class="d-ax"/><line x1="200.0" y1="150.0" x2="266.0" y2="150.0" class="d-ax"/><text x="211.0" y="124.0" text-anchor="middle" class="d-t s">20</text><text x="233.0" y="124.0" text-anchor="middle" class="d-t s">15</text><text x="255.0" y="124.0" text-anchor="middle" class="d-t s">35</text><text x="211.0" y="163.0" text-anchor="middle" class="d-t s r">30</text><text x="233.0" y="163.0" text-anchor="middle" class="d-t s m">10</text><text x="255.0" y="163.0" text-anchor="middle" class="d-t s r">45</text><text x="233.0" y="144.0" text-anchor="middle" class="d-t b">D</text><rect x="290" y="200" width="66" height="58" rx="6" class="d-box"/><line x1="290.0" y1="218.0" x2="356.0" y2="218.0" class="d-ax"/><line x1="290.0" y1="240.0" x2="356.0" y2="240.0" class="d-ax"/><text x="301.0" y="214.0" text-anchor="middle" class="d-t s">20</text><text x="323.0" y="214.0" text-anchor="middle" class="d-t s">30</text><text x="345.0" y="214.0" text-anchor="middle" class="d-t s">50</text><text x="301.0" y="253.0" text-anchor="middle" class="d-t s r">25</text><text x="323.0" y="253.0" text-anchor="middle" class="d-t s m">5</text><text x="345.0" y="253.0" text-anchor="middle" class="d-t s r">55</text><text x="323.0" y="234.0" text-anchor="middle" class="d-t b">E</text><rect x="300" y="60" width="66" height="58" rx="6" class="d-box a"/><line x1="300.0" y1="78.0" x2="366.0" y2="78.0" class="d-ax"/><line x1="300.0" y1="100.0" x2="366.0" y2="100.0" class="d-ax"/><text x="311.0" y="74.0" text-anchor="middle" class="d-t s">45</text><text x="333.0" y="74.0" text-anchor="middle" class="d-t s">10</text><text x="355.0" y="74.0" text-anchor="middle" class="d-t s">55</text><text x="311.0" y="113.0" text-anchor="middle" class="d-t s r">45</text><text x="333.0" y="113.0" text-anchor="middle" class="d-t s m">0</text><text x="355.0" y="113.0" text-anchor="middle" class="d-t s r">55</text><text x="333.0" y="94.0" text-anchor="middle" class="d-t b">F</text><rect x="400" y="110" width="66" height="58" rx="6" class="d-box a"/><line x1="400.0" y1="128.0" x2="466.0" y2="128.0" class="d-ax"/><line x1="400.0" y1="150.0" x2="466.0" y2="150.0" class="d-ax"/><text x="411.0" y="124.0" text-anchor="middle" class="d-t s">55</text><text x="433.0" y="124.0" text-anchor="middle" class="d-t s">10</text><text x="455.0" y="124.0" text-anchor="middle" class="d-t s">65</text><text x="411.0" y="163.0" text-anchor="middle" class="d-t s r">55</text><text x="433.0" y="163.0" text-anchor="middle" class="d-t s m">0</text><text x="455.0" y="163.0" text-anchor="middle" class="d-t s r">65</text><text x="433.0" y="144.0" text-anchor="middle" class="d-t b">G</text><rect x="490" y="110" width="66" height="58" rx="6" class="d-box a"/><line x1="490.0" y1="128.0" x2="556.0" y2="128.0" class="d-ax"/><line x1="490.0" y1="150.0" x2="556.0" y2="150.0" class="d-ax"/><text x="501.0" y="124.0" text-anchor="middle" class="d-t s">65</text><text x="523.0" y="124.0" text-anchor="middle" class="d-t s">5</text><text x="545.0" y="124.0" text-anchor="middle" class="d-t s">70</text><text x="501.0" y="163.0" text-anchor="middle" class="d-t s r">65</text><text x="523.0" y="163.0" text-anchor="middle" class="d-t s m">0</text><text x="545.0" y="163.0" text-anchor="middle" class="d-t s r">70</text><text x="523.0" y="144.0" text-anchor="middle" class="d-t b">H</text><rect x="580" y="110" width="66" height="58" rx="6" class="d-box a"/><line x1="580.0" y1="128.0" x2="646.0" y2="128.0" class="d-ax"/><line x1="580.0" y1="150.0" x2="646.0" y2="150.0" class="d-ax"/><text x="591.0" y="124.0" text-anchor="middle" class="d-t s">70</text><text x="613.0" y="124.0" text-anchor="middle" class="d-t s">5</text><text x="635.0" y="124.0" text-anchor="middle" class="d-t s">75</text><text x="591.0" y="163.0" text-anchor="middle" class="d-t s r">70</text><text x="613.0" y="163.0" text-anchor="middle" class="d-t s m">0</text><text x="635.0" y="163.0" text-anchor="middle" class="d-t s r">75</text><text x="613.0" y="144.0" text-anchor="middle" class="d-t b">I</text><rect x="20" y="236" width="66" height="58" rx="6" class="d-box"/><line x1="20.0" y1="254.0" x2="86.0" y2="254.0" class="d-ax"/><line x1="20.0" y1="276.0" x2="86.0" y2="276.0" class="d-ax"/><text x="31.0" y="250.0" text-anchor="middle" class="d-t s">ES</text><text x="53.0" y="250.0" text-anchor="middle" class="d-t s">d</text><text x="75.0" y="250.0" text-anchor="middle" class="d-t s">EF</text><text x="53.0" y="270.0" text-anchor="middle" class="d-t s b">Task</text><text x="31.0" y="290.0" text-anchor="middle" class="d-t s r">LS</text><text x="53.0" y="290.0" text-anchor="middle" class="d-t s m">TF</text><text x="75.0" y="290.0" text-anchor="middle" class="d-t s r">LF</text><text x="96.0" y="270.0" text-anchor="start" class="d-t s m">Key (working days)</text></svg><figcaption>Activity-on-node network for the software project. Critical path A–B–C–F–G–H–I = 75 working days (15 weeks). D has 10 days of float, E has 5.</figcaption></figure>

| Path | Days |
|---|---|
| **A–B–C–F–G–H–I** | 5 + 15 + 25 + 10 + 10 + 5 + 5 = **75** |
| A–B–D–F–G–H–I | 5 + 15 + 15 + 10 + 10 + 5 + 5 = 65 |
| A–B–E–G–H–I | 5 + 15 + 30 + 10 + 5 + 5 = 70 |

**(i) Critical path: A–B–C–F–G–H–I.**

**(ii) Duration** = 75 working days ÷ 5 days per week = **15 weeks**.

**(iii) Non-critical tasks**

| Task | ES | EF | Successor's ES | Free float | Total float |
|---|---|---|---|---|---|
| D Telecoms | 20 | 35 | F: 45 | **10 days (2 weeks)** | 10 days |
| E Hardware installation | 20 | 50 | G: 55 | **5 days (1 week)** | 5 days |
:::

## Q4
Construct the network: A is first; B starts when A is complete; C follows B; D starts at the same time as B; E follows all other jobs. Number the nodes from one, add the EST and LFT for each node (durations A 2, B 5, C 3, D 2, E 6 days), and find the critical path. Title the diagram and add a key.

::: answer
<figure class="fig"><svg viewBox="0 0 650 240" role="img" aria-label="Project network for Question 4. Critical path A–B–C–E (events 1–2–3–4–5), 16 days; D has 6 days of float."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="72.0" y1="150.0" x2="166.0" y2="150.0" class="d-a w" marker-end="url(#ah)"/><text x="119.0" y="141.0" text-anchor="middle" class="d-t s a">A 2</text><line x1="208.5" y1="138.1" x2="309.8" y2="73.0" class="d-a w" marker-end="url(#ah)"/><text x="251.6" y="98.8" text-anchor="middle" class="d-t s a">B 5</text><line x1="348.5" y1="71.9" x2="449.8" y2="137.0" class="d-a w" marker-end="url(#ah)"/><text x="406.7" y="97.7" text-anchor="middle" class="d-t s a">C 3</text><line x1="212.0" y1="150.0" x2="446.0" y2="150.0" class="d-ax" marker-end="url(#ah)"/><text x="329.0" y="171.0" text-anchor="middle" class="d-t s a">D 2</text><line x1="492.0" y1="150.0" x2="576.0" y2="150.0" class="d-a w" marker-end="url(#ah)"/><text x="534.0" y="141.0" text-anchor="middle" class="d-t s a">E 6</text><circle cx="50" cy="150" r="22" class="d-box a"/><line x1="50.0" y1="128.0" x2="50.0" y2="172.0" class="d-ax"/><line x1="50.0" y1="150.0" x2="72.0" y2="150.0" class="d-ax"/><text x="39.0" y="155.0" text-anchor="middle" class="d-t b">1</text><text x="61.0" y="144.0" text-anchor="middle" class="d-t s">0</text><text x="61.0" y="166.0" text-anchor="middle" class="d-t s r">0</text><circle cx="190" cy="150" r="22" class="d-box a"/><line x1="190.0" y1="128.0" x2="190.0" y2="172.0" class="d-ax"/><line x1="190.0" y1="150.0" x2="212.0" y2="150.0" class="d-ax"/><text x="179.0" y="155.0" text-anchor="middle" class="d-t b">2</text><text x="201.0" y="144.0" text-anchor="middle" class="d-t s">2</text><text x="201.0" y="166.0" text-anchor="middle" class="d-t s r">2</text><circle cx="330" cy="60" r="22" class="d-box a"/><line x1="330.0" y1="38.0" x2="330.0" y2="82.0" class="d-ax"/><line x1="330.0" y1="60.0" x2="352.0" y2="60.0" class="d-ax"/><text x="319.0" y="65.0" text-anchor="middle" class="d-t b">3</text><text x="341.0" y="54.0" text-anchor="middle" class="d-t s">7</text><text x="341.0" y="76.0" text-anchor="middle" class="d-t s r">7</text><circle cx="470" cy="150" r="22" class="d-box a"/><line x1="470.0" y1="128.0" x2="470.0" y2="172.0" class="d-ax"/><line x1="470.0" y1="150.0" x2="492.0" y2="150.0" class="d-ax"/><text x="459.0" y="155.0" text-anchor="middle" class="d-t b">4</text><text x="481.0" y="144.0" text-anchor="middle" class="d-t s">10</text><text x="481.0" y="166.0" text-anchor="middle" class="d-t s r">10</text><circle cx="600" cy="150" r="22" class="d-box a"/><line x1="600.0" y1="128.0" x2="600.0" y2="172.0" class="d-ax"/><line x1="600.0" y1="150.0" x2="622.0" y2="150.0" class="d-ax"/><text x="589.0" y="155.0" text-anchor="middle" class="d-t b">5</text><text x="611.0" y="144.0" text-anchor="middle" class="d-t s">16</text><text x="611.0" y="166.0" text-anchor="middle" class="d-t s r">16</text><text x="325.0" y="230.0" text-anchor="middle" class="d-t s m">Event: number | earliest time E (top) | latest time L (bottom, red). Blue = critical.</text></svg><figcaption>Project network for Question 4. Critical path A–B–C–E (events 1–2–3–4–5), 16 days; D has 6 days of float.</figcaption></figure>

"D starts at the same time as B" means D also follows A. "E follows all other jobs" means E starts after C and D finish (the last ones), so C and D merge at node 4.

| Node | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| EST | 0 | 2 | 7 | 10 | 16 |
| LFT | 0 | 2 | 7 | 10 | 16 |

Node 4 = max(7 + 3, 2 + 2) = 10.

**Critical path: A–B–C–E** (nodes 1–2–3–4–5), **16 days**. D has total float $10 - 2 - 2 = 6$ days.
:::

## Q5
Draw the network: A starts the project; B and E start when A is complete; C follows B; F and G start when E is complete; D needs C and F complete and must finish before J; J also needs G. Durations (days): A 1, B 3, C 3, D 6, E 4, F 3, G 5, J 2. (i) Number the nodes. (ii) Add EST and LFT. (iii) Calculate free and total floats and identify the critical path.

::: answer
<figure class="fig"><svg viewBox="0 0 680 330" role="img" aria-label="Project network for Question 5. Critical path A–E–F–D–J (events 1–2–4–5–6–7), 16 days."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="62.0" y1="170.0" x2="126.0" y2="170.0" class="d-a w" marker-end="url(#ah)"/><text x="94.0" y="161.0" text-anchor="middle" class="d-t s a">A 1</text><line x1="166.2" y1="155.1" x2="252.3" y2="76.2" class="d-ax" marker-end="url(#ah)"/><text x="199.8" y="110.4" text-anchor="middle" class="d-t s a">B 3</text><line x1="167.6" y1="183.2" x2="250.8" y2="245.6" class="d-a w" marker-end="url(#ah)"/><text x="199.6" y="232.2" text-anchor="middle" class="d-t s a">E 4</text><line x1="286.8" y1="74.2" x2="381.7" y2="154.5" class="d-ax" marker-end="url(#ah)"/><text x="343.3" y="108.7" text-anchor="middle" class="d-t s a">C 3</text><line x1="288.1" y1="247.5" x2="380.3" y2="183.7" class="d-a w" marker-end="url(#ah)"/><text x="326.2" y="209.1" text-anchor="middle" class="d-t s a">F 3</text><line x1="422.0" y1="170.0" x2="506.0" y2="170.0" class="d-a w" marker-end="url(#ah)"/><text x="464.0" y="161.0" text-anchor="middle" class="d-t s a">D 6</text><line x1="290.8" y1="252.8" x2="507.3" y2="177.9" class="d-ax" marker-end="url(#ah)"/><text x="404.3" y="235.4" text-anchor="middle" class="d-t s a">G 5</text><line x1="552.0" y1="170.0" x2="616.0" y2="170.0" class="d-a w" marker-end="url(#ah)"/><text x="584.0" y="161.0" text-anchor="middle" class="d-t s a">J 2</text><circle cx="40" cy="170" r="22" class="d-box a"/><line x1="40.0" y1="148.0" x2="40.0" y2="192.0" class="d-ax"/><line x1="40.0" y1="170.0" x2="62.0" y2="170.0" class="d-ax"/><text x="29.0" y="175.0" text-anchor="middle" class="d-t b">1</text><text x="51.0" y="164.0" text-anchor="middle" class="d-t s">0</text><text x="51.0" y="186.0" text-anchor="middle" class="d-t s r">0</text><circle cx="150" cy="170" r="22" class="d-box a"/><line x1="150.0" y1="148.0" x2="150.0" y2="192.0" class="d-ax"/><line x1="150.0" y1="170.0" x2="172.0" y2="170.0" class="d-ax"/><text x="139.0" y="175.0" text-anchor="middle" class="d-t b">2</text><text x="161.0" y="164.0" text-anchor="middle" class="d-t s">1</text><text x="161.0" y="186.0" text-anchor="middle" class="d-t s r">1</text><circle cx="270" cy="60" r="22" class="d-box"/><line x1="270.0" y1="38.0" x2="270.0" y2="82.0" class="d-ax"/><line x1="270.0" y1="60.0" x2="292.0" y2="60.0" class="d-ax"/><text x="259.0" y="65.0" text-anchor="middle" class="d-t b">3</text><text x="281.0" y="54.0" text-anchor="middle" class="d-t s">4</text><text x="281.0" y="76.0" text-anchor="middle" class="d-t s r">5</text><circle cx="270" cy="260" r="22" class="d-box a"/><line x1="270.0" y1="238.0" x2="270.0" y2="282.0" class="d-ax"/><line x1="270.0" y1="260.0" x2="292.0" y2="260.0" class="d-ax"/><text x="259.0" y="265.0" text-anchor="middle" class="d-t b">4</text><text x="281.0" y="254.0" text-anchor="middle" class="d-t s">5</text><text x="281.0" y="276.0" text-anchor="middle" class="d-t s r">5</text><circle cx="400" cy="170" r="22" class="d-box a"/><line x1="400.0" y1="148.0" x2="400.0" y2="192.0" class="d-ax"/><line x1="400.0" y1="170.0" x2="422.0" y2="170.0" class="d-ax"/><text x="389.0" y="175.0" text-anchor="middle" class="d-t b">5</text><text x="411.0" y="164.0" text-anchor="middle" class="d-t s">8</text><text x="411.0" y="186.0" text-anchor="middle" class="d-t s r">8</text><circle cx="530" cy="170" r="22" class="d-box a"/><line x1="530.0" y1="148.0" x2="530.0" y2="192.0" class="d-ax"/><line x1="530.0" y1="170.0" x2="552.0" y2="170.0" class="d-ax"/><text x="519.0" y="175.0" text-anchor="middle" class="d-t b">6</text><text x="541.0" y="164.0" text-anchor="middle" class="d-t s">14</text><text x="541.0" y="186.0" text-anchor="middle" class="d-t s r">14</text><circle cx="640" cy="170" r="22" class="d-box a"/><line x1="640.0" y1="148.0" x2="640.0" y2="192.0" class="d-ax"/><line x1="640.0" y1="170.0" x2="662.0" y2="170.0" class="d-ax"/><text x="629.0" y="175.0" text-anchor="middle" class="d-t b">7</text><text x="651.0" y="164.0" text-anchor="middle" class="d-t s">16</text><text x="651.0" y="186.0" text-anchor="middle" class="d-t s r">16</text><text x="340.0" y="320.0" text-anchor="middle" class="d-t s m">Event: number | earliest time E (top) | latest time L (bottom, red). Blue = critical.</text></svg><figcaption>Project network for Question 5. Critical path A–E–F–D–J (events 1–2–4–5–6–7), 16 days.</figcaption></figure>

| Node | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| EST | 0 | 1 | 4 | 5 | 8 | 14 | 16 |
| LFT | 0 | 1 | 5 | 5 | 8 | 14 | 16 |

Merges: node 5 = max(4 + 3, 5 + 3) = 8; node 6 = max(8 + 6, 5 + 5) = 14. Bursts: node 4 = min(8 − 3, 14 − 5) = 5; node 2 = min(5 − 3, 5 − 4) = 1.

| Activity | $i \to j$ | $t$ | Total float $L_j - E_i - t$ | Free float $E_j - E_i - t$ |
|---|---|---|---|---|
| A | 1 → 2 | 1 | 0 | 0 |
| B | 2 → 3 | 3 | 5 − 1 − 3 = **1** | 4 − 1 − 3 = 0 |
| C | 3 → 5 | 3 | 8 − 4 − 3 = **1** | 8 − 4 − 3 = **1** |
| E | 2 → 4 | 4 | 0 | 0 |
| F | 4 → 5 | 3 | 0 | 0 |
| G | 4 → 6 | 5 | 14 − 5 − 5 = **4** | 14 − 5 − 5 = **4** |
| D | 5 → 6 | 6 | 0 | 0 |
| J | 6 → 7 | 2 | 0 | 0 |

**Critical path: A–E–F–D–J** (nodes 1–2–4–5–6–7), $1 + 4 + 3 + 6 + 2 =$ **16 days**.
:::

## Q6
Construct the network for the 12-activity project (A precedes B, C, D; B precedes E; C precedes G; D and E precede F; F and H precede K; G precedes H and J; J precedes L; K and L precede M), with durations A 2, B 6, C 10, D 11, E 9, F 6, G 8, H 5, J 4, K 6, L 4, M 3 days. (i) Number the nodes. (ii) Add EST and LFT. (iii) Calculate free and total floats and identify the critical path.

::: answer
This is the same network as Question 5 of **Individual Assignment #1**; the full working is there.

<figure class="fig"><svg viewBox="0 0 740 340" role="img" aria-label="Activity-on-arrow network for the 12-activity project, nodes numbered 1 to 10. Critical path A–C–G–H–K–M (events 1–2–4–6–7–9–10), 34 days."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="58.0" y1="180.0" x2="106.0" y2="180.0" class="d-a w" marker-end="url(#ah)"/><text x="82.0" y="171.0" text-anchor="middle" class="d-t s a">A 2</text><line x1="146.6" y1="194.5" x2="231.9" y2="269.2" class="d-ax" marker-end="url(#ah)"/><text x="178.7" y="248.9" text-anchor="middle" class="d-t s a">B 6</text><line x1="146.9" y1="165.9" x2="231.6" y2="95.4" class="d-a w" marker-end="url(#ah)"/><text x="180.3" y="124.9" text-anchor="middle" class="d-t s a">C 10</text><line x1="150.3" y1="188.5" x2="357.9" y2="275.7" class="d-ax" marker-end="url(#ah)"/><text x="258.7" y="226.0" text-anchor="middle" class="d-t s a">D 11</text><line x1="272.0" y1="285.0" x2="356.0" y2="285.0" class="d-ax" marker-end="url(#ah)"/><text x="314.0" y="306.0" text-anchor="middle" class="d-t s a">E 9</text><line x1="272.0" y1="80.0" x2="356.0" y2="80.0" class="d-a w" marker-end="url(#ah)"/><text x="314.0" y="71.0" text-anchor="middle" class="d-t s a">G 8</text><line x1="398.4" y1="273.0" x2="489.9" y2="213.1" class="d-ax" marker-end="url(#ah)"/><text x="452.9" y="261.4" text-anchor="middle" class="d-t s a">F 6</text><line x1="396.2" y1="94.9" x2="492.4" y2="183.7" class="d-a w" marker-end="url(#ah)"/><text x="434.8" y="154.6" text-anchor="middle" class="d-t s a">H 5</text><line x1="401.0" y1="73.5" x2="487.1" y2="47.1" class="d-ax" marker-end="url(#ah)"/><text x="439.9" y="51.9" text-anchor="middle" class="d-t s a">J 4</text><line x1="530.9" y1="193.0" x2="607.2" y2="167.6" class="d-a w" marker-end="url(#ah)"/><text x="573.5" y="198.6" text-anchor="middle" class="d-t s a">K 6</text><line x1="525.6" y1="55.6" x2="613.0" y2="143.0" class="d-ax" marker-end="url(#ah)"/><text x="579.2" y="94.4" text-anchor="middle" class="d-t s a">L 4</text><line x1="652.0" y1="160.0" x2="688.0" y2="160.0" class="d-a w" marker-end="url(#ah)"/><text x="670.0" y="151.0" text-anchor="middle" class="d-t s a">M 3</text><circle cx="36" cy="180" r="22" class="d-box a"/><line x1="36.0" y1="158.0" x2="36.0" y2="202.0" class="d-ax"/><line x1="36.0" y1="180.0" x2="58.0" y2="180.0" class="d-ax"/><text x="25.0" y="185.0" text-anchor="middle" class="d-t b">1</text><text x="47.0" y="174.0" text-anchor="middle" class="d-t s">0</text><text x="47.0" y="196.0" text-anchor="middle" class="d-t s r">0</text><circle cx="130" cy="180" r="22" class="d-box a"/><line x1="130.0" y1="158.0" x2="130.0" y2="202.0" class="d-ax"/><line x1="130.0" y1="180.0" x2="152.0" y2="180.0" class="d-ax"/><text x="119.0" y="185.0" text-anchor="middle" class="d-t b">2</text><text x="141.0" y="174.0" text-anchor="middle" class="d-t s">2</text><text x="141.0" y="196.0" text-anchor="middle" class="d-t s r">2</text><circle cx="250" cy="285" r="22" class="d-box"/><line x1="250.0" y1="263.0" x2="250.0" y2="307.0" class="d-ax"/><line x1="250.0" y1="285.0" x2="272.0" y2="285.0" class="d-ax"/><text x="239.0" y="290.0" text-anchor="middle" class="d-t b">3</text><text x="261.0" y="279.0" text-anchor="middle" class="d-t s">8</text><text x="261.0" y="301.0" text-anchor="middle" class="d-t s r">10</text><circle cx="250" cy="80" r="22" class="d-box a"/><line x1="250.0" y1="58.0" x2="250.0" y2="102.0" class="d-ax"/><line x1="250.0" y1="80.0" x2="272.0" y2="80.0" class="d-ax"/><text x="239.0" y="85.0" text-anchor="middle" class="d-t b">4</text><text x="261.0" y="74.0" text-anchor="middle" class="d-t s">12</text><text x="261.0" y="96.0" text-anchor="middle" class="d-t s r">12</text><circle cx="380" cy="285" r="22" class="d-box"/><line x1="380.0" y1="263.0" x2="380.0" y2="307.0" class="d-ax"/><line x1="380.0" y1="285.0" x2="402.0" y2="285.0" class="d-ax"/><text x="369.0" y="290.0" text-anchor="middle" class="d-t b">5</text><text x="391.0" y="279.0" text-anchor="middle" class="d-t s">17</text><text x="391.0" y="301.0" text-anchor="middle" class="d-t s r">19</text><circle cx="380" cy="80" r="22" class="d-box a"/><line x1="380.0" y1="58.0" x2="380.0" y2="102.0" class="d-ax"/><line x1="380.0" y1="80.0" x2="402.0" y2="80.0" class="d-ax"/><text x="369.0" y="85.0" text-anchor="middle" class="d-t b">6</text><text x="391.0" y="74.0" text-anchor="middle" class="d-t s">20</text><text x="391.0" y="96.0" text-anchor="middle" class="d-t s r">20</text><circle cx="510" cy="200" r="22" class="d-box a"/><line x1="510.0" y1="178.0" x2="510.0" y2="222.0" class="d-ax"/><line x1="510.0" y1="200.0" x2="532.0" y2="200.0" class="d-ax"/><text x="499.0" y="205.0" text-anchor="middle" class="d-t b">7</text><text x="521.0" y="194.0" text-anchor="middle" class="d-t s">25</text><text x="521.0" y="216.0" text-anchor="middle" class="d-t s r">25</text><circle cx="510" cy="40" r="22" class="d-box"/><line x1="510.0" y1="18.0" x2="510.0" y2="62.0" class="d-ax"/><line x1="510.0" y1="40.0" x2="532.0" y2="40.0" class="d-ax"/><text x="499.0" y="45.0" text-anchor="middle" class="d-t b">8</text><text x="521.0" y="34.0" text-anchor="middle" class="d-t s">24</text><text x="521.0" y="56.0" text-anchor="middle" class="d-t s r">27</text><circle cx="630" cy="160" r="22" class="d-box a"/><line x1="630.0" y1="138.0" x2="630.0" y2="182.0" class="d-ax"/><line x1="630.0" y1="160.0" x2="652.0" y2="160.0" class="d-ax"/><text x="619.0" y="165.0" text-anchor="middle" class="d-t b">9</text><text x="641.0" y="154.0" text-anchor="middle" class="d-t s">31</text><text x="641.0" y="176.0" text-anchor="middle" class="d-t s r">31</text><circle cx="712" cy="160" r="22" class="d-box a"/><line x1="712.0" y1="138.0" x2="712.0" y2="182.0" class="d-ax"/><line x1="712.0" y1="160.0" x2="734.0" y2="160.0" class="d-ax"/><text x="701.0" y="165.0" text-anchor="middle" class="d-t b">10</text><text x="723.0" y="154.0" text-anchor="middle" class="d-t s">34</text><text x="723.0" y="176.0" text-anchor="middle" class="d-t s r">34</text><text x="370.0" y="330.0" text-anchor="middle" class="d-t s m">Event: number | earliest time E (top) | latest time L (bottom, red). Blue = critical.</text></svg><figcaption>Activity-on-arrow network for the 12-activity project, nodes numbered 1 to 10. Critical path A–C–G–H–K–M (events 1–2–4–6–7–9–10), 34 days.</figcaption></figure>

**Critical path: A–C–G–H–K–M = 34 days.** Total floats: B 2, D 6, E 2, F 2, J 3, L 3 days (all others 0). Free floats: D 4, F 2, L 3 days (all others 0).
:::
