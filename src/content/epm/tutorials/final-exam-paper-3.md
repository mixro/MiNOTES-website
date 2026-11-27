Final exam, **Paper 3**. **Section A:** answer all 10 questions, 2 marks each. **Section B:** answer any four, 10 marks each. The original paper is in **Past papers**.

> **Note on the paper.** Questions A1 and A2 of this paper are printed at the bottom of the Paper 2 page, before the "Paper 3" heading. They are placed here where they belong.

Answers follow the course notes; questions that go **beyond the notes** are marked *Beyond the notes* and get the standard textbook answer.

## A1 (2 marks)
Define Benefit–Cost Ratio (BCR).

::: answer
The **benefit–cost ratio** (also called the **profitability index**, PI) is the ratio of the **total present value of the returns** ($B$) to the **total present value of the investments** ($C$):

$$BCR = \frac{B}{C}$$

A project is viable if $BCR > 1$ (equivalently $NPV > 0$); **the higher the ratio, the better** the return.
:::

## A2 (2 marks)
List four project selection methods.

::: answer
½ mark each, from the financial analysis in the notes:

1. **Pay-back period**
2. **Return on investment (ROI)**
3. **Net present value (NPV)**
4. **Benefit–cost ratio / profitability index**
5. **Internal rate of return (IRR)**

(Non-financial methods such as weighted scoring models and social cost–benefit analysis are also accepted.)
:::

## A3 (2 marks)
State the difference between a milestone and a deliverable.

::: answer
| Milestone | Deliverable |
|---|---|
| A **point in time** (an event) marking the completion of a phase or key task | A **tangible output** produced by the project (a report, design, installed system) |
| **Zero duration**, uses no resources | Takes work, time and resources to produce |
| Used to **monitor progress** | Handed to the client or used by the next phase |
| e.g. "Feasibility approved" | e.g. the feasibility report, the DPR |

A milestone is often the moment a deliverable is completed or accepted.
:::

## A4 (2 marks)
Define "Critical Path".

::: answer
The **critical path** is the **longest path** through the project network, linking the **critical activities** (those with **zero float/slack**) from start to finish. Its length is the **shortest possible duration** of the project, so any delay to an activity on it delays the whole project.
:::

## A5 (2 marks)
State the purpose of project scheduling.

::: answer
Scheduling turns the network into a **programme of work**: it fixes **when each activity starts and finishes** (between its EST and LST), so that:

- the project is completed **on time**;
- **resources** (labour, equipment, money) are planned and used efficiently;
- work is **coordinated** between teams and suppliers; and
- there is a **baseline to monitor and control** progress against.
:::

## A6 (2 marks)
List items included in a contractor's labour rates.

::: answer
*Beyond the notes.* Any four, ½ mark each:

- basic **wages**
- **overtime** and allowances (travel, subsistence, site allowance)
- **statutory charges**: social security, workers' compensation insurance, levies
- **paid leave**, public holidays, sick pay
- **small tools**, protective clothing (PPE)
- **training**, and supervision (if not in overheads)
- non-productive time (allowance for productivity)
:::

## A7 (2 marks)
What is a bid security?

::: answer
*Beyond the notes.* A **bid security** (bid bond, tender guarantee) is a guarantee, usually a **bank guarantee or bond of about 1–5% of the bid price**, submitted **with the bid**. It protects the client if the bidder **withdraws its bid during the validity period** or, after being selected, **refuses to sign the contract or provide the performance bond**. It is returned to unsuccessful bidders after award.
:::

## A8 (2 marks)
Define "Letter of Intent" in contracts.

::: answer
*Beyond the notes.* A **letter of intent** is a letter from the client to the selected bidder stating that the client **intends to award** the contract, before the formal contract is signed. It may allow **limited early work** or ordering of long-lead items, usually with a cost limit. It is generally **not a binding contract** for the whole work. (In the CTB procurement cycle, step 9 is the **letter of acceptance**, which does bind the client.)
:::

## A9 (2 marks)
Give two benefits of open competitive bidding.

::: answer
One mark each:

1. **Competition** among many bidders gives the **best (lowest) price** and value for money.
2. **Transparency and fairness**: any qualified firm can bid, tenders are opened publicly, reducing favouritism and corruption.
3. (Also) Access to a **wider range of suppliers**, new technology and ideas.
:::

## A10 (2 marks)
State the purpose of specifications in tender documents.

::: answer
Specifications **describe exactly what is to be supplied or built**: the design, performance and functional requirements, materials, standards and workmanship. They:

- tell bidders **what to price**, so bids are comparable;
- set the **quality standard** the contractor must meet; and
- give the **acceptance criteria** for inspection and testing.
:::

## B1 (10 marks)
A company considers a substation project: USD 550 000 initial investment, inflows of USD 160k, 180k, 200k and 190k in years 1 to 4. Discount rate 10%. Find the NPV and make a decision.

::: answer
| Year | Inflow (USD) | Discount factor $1/1.1^n$ | PV (USD) |
|---|---|---|---|
| 1 | 160 000 | 0.9091 | 145 455 |
| 2 | 180 000 | 0.8264 | 148 760 |
| 3 | 200 000 | 0.7513 | 150 263 |
| 4 | 190 000 | 0.6830 | 129 773 |
| | | **B** | **574 250** |

$$NPV = 574\,250 - 550\,000 = \mathbf{+USD\ 24\,250}$$

$BCR = 574\,250/550\,000 = 1.04$. (IRR: NPV is +11 633 at 11% and −543 at 12%, so $IRR \approx 11.95\%$.)

**Decision: accept.** The NPV is positive, so the project earns more than the 10% required return. The margin is small (IRR only about 2 points above the discount rate), so the result is sensitive to cost overruns or lower inflows; a sensitivity analysis is advisable.

*Marks: PVs 5, NPV 3, decision 2.*
:::

## B2 (10 marks)
Project network: activities A (2 w), B (4 w, after A), C (3 w, after A), D (2 w, after B), E (5 w, after C), F (3 w, after D and E). Draw the network, find the critical path and the total duration.

::: answer
<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Paper 3 network (weeks). Critical path A–C–E–F = 13 weeks; B and D share 2 weeks of float."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="69.0" y1="130.0" x2="144.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="106.5" y="120.0" text-anchor="middle" class="d-t s a">A = 2</text><line x1="190.1" y1="116.9" x2="278.2" y2="59.2" class="d-ax" marker-end="url(#ah)"/><text x="226.0" y="80.5" text-anchor="middle" class="d-t s a">B = 4</text><line x1="190.1" y1="143.1" x2="278.2" y2="200.8" class="d-a w" marker-end="url(#ah)"/><text x="226.0" y="189.5" text-anchor="middle" class="d-t s a">C = 3</text><line x1="320.1" y1="58.1" x2="408.2" y2="115.8" class="d-ax" marker-end="url(#ah)"/><text x="372.4" y="79.4" text-anchor="middle" class="d-t s a">D = 2</text><line x1="320.1" y1="201.9" x2="408.2" y2="144.2" class="d-a w" marker-end="url(#ah)"/><text x="372.4" y="190.6" text-anchor="middle" class="d-t s a">E = 5</text><line x1="454.0" y1="130.0" x2="534.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="494.0" y="120.0" text-anchor="middle" class="d-t s a">F = 3</text><circle cx="45" cy="130" r="24" class="d-box a"/><line x1="45.0" y1="106.0" x2="45.0" y2="154.0" class="d-ax"/><line x1="45.0" y1="130.0" x2="69.0" y2="130.0" class="d-ax"/><text x="34.0" y="135.0" text-anchor="middle" class="d-t b">1</text><text x="56.0" y="124.0" text-anchor="middle" class="d-t s">0</text><text x="56.0" y="146.0" text-anchor="middle" class="d-t s r">0</text><circle cx="170" cy="130" r="24" class="d-box a"/><line x1="170.0" y1="106.0" x2="170.0" y2="154.0" class="d-ax"/><line x1="170.0" y1="130.0" x2="194.0" y2="130.0" class="d-ax"/><text x="159.0" y="135.0" text-anchor="middle" class="d-t b">2</text><text x="181.0" y="124.0" text-anchor="middle" class="d-t s">2</text><text x="181.0" y="146.0" text-anchor="middle" class="d-t s r">2</text><circle cx="300" cy="45" r="24" class="d-box"/><line x1="300.0" y1="21.0" x2="300.0" y2="69.0" class="d-ax"/><line x1="300.0" y1="45.0" x2="324.0" y2="45.0" class="d-ax"/><text x="289.0" y="50.0" text-anchor="middle" class="d-t b">3</text><text x="311.0" y="39.0" text-anchor="middle" class="d-t s">6</text><text x="311.0" y="61.0" text-anchor="middle" class="d-t s r">8</text><circle cx="300" cy="215" r="24" class="d-box a"/><line x1="300.0" y1="191.0" x2="300.0" y2="239.0" class="d-ax"/><line x1="300.0" y1="215.0" x2="324.0" y2="215.0" class="d-ax"/><text x="289.0" y="220.0" text-anchor="middle" class="d-t b">4</text><text x="311.0" y="209.0" text-anchor="middle" class="d-t s">5</text><text x="311.0" y="231.0" text-anchor="middle" class="d-t s r">5</text><circle cx="430" cy="130" r="24" class="d-box a"/><line x1="430.0" y1="106.0" x2="430.0" y2="154.0" class="d-ax"/><line x1="430.0" y1="130.0" x2="454.0" y2="130.0" class="d-ax"/><text x="419.0" y="135.0" text-anchor="middle" class="d-t b">5</text><text x="441.0" y="124.0" text-anchor="middle" class="d-t s">10</text><text x="441.0" y="146.0" text-anchor="middle" class="d-t s r">10</text><circle cx="560" cy="130" r="24" class="d-box a"/><line x1="560.0" y1="106.0" x2="560.0" y2="154.0" class="d-ax"/><line x1="560.0" y1="130.0" x2="584.0" y2="130.0" class="d-ax"/><text x="549.0" y="135.0" text-anchor="middle" class="d-t b">6</text><text x="571.0" y="124.0" text-anchor="middle" class="d-t s">13</text><text x="571.0" y="146.0" text-anchor="middle" class="d-t s r">13</text><text x="300.0" y="285.0" text-anchor="middle" class="d-t s m">Each event: number | earliest time (top) | latest time (bottom, red). Blue = critical path.</text></svg><figcaption>Paper 3 network (weeks). Critical path A–C–E–F = 13 weeks; B and D share 2 weeks of float.</figcaption></figure>

**Forward pass:** event 1 = 0; event 2 = 2; event 3 = 2 + 4 = 6; event 4 = 2 + 3 = 5; event 5 = max(6 + 2, 5 + 5) = **10**; event 6 = 10 + 3 = **13**.

**Backward pass:** event 6 = 13; event 5 = 10; event 3 = 10 − 2 = 8; event 4 = 10 − 5 = 5; event 2 = min(8 − 4, 5 − 3) = 2; event 1 = 0.

| Path | Length (weeks) |
|---|---|
| A–B–D–F | 2 + 4 + 2 + 3 = 11 |
| **A–C–E–F** | 2 + 3 + 5 + 3 = **13** |

**Critical path: A–C–E–F (events 1–2–4–5–6). Project duration = 13 weeks.**

Floats: B has total float $8 - 2 - 4 = 2$ weeks and D has $10 - 6 - 2 = 2$ weeks (shared).
:::

## B3 (10 marks)
Explain the steps to prepare project deliverables and a budget, and explain budget monitoring.

::: answer
*Partly beyond the notes.*

**Preparing the deliverables**

1. Define the **project objectives and scope** (from the feasibility study, appraisal and DPR).
2. Break the scope into a **work breakdown structure**: deliverables, then work packages, then activities.
3. For each deliverable, state its **description, acceptance criteria, owner and due date** (milestone).
4. Sequence the activities and **schedule** them (network, critical path).

**Preparing the budget**

1. **Estimate the cost of each activity** (labour, materials, equipment, subcontracts).
2. Add **indirect costs**, **contingency** and **escalation**.
3. Roll up into the **total budget** and a **time-phased** budget (cash-flow plan).
4. **Approve** it as the **cost baseline**.

**Budget monitoring** (the project control cycle in the notes):

1. Fix the **review period** (e.g. fortnightly).
2. Collect **actual costs** and **progress** (work done).
3. **Compare** actual with planned cost for the work done; find **variances**.
4. Forecast the **cost at completion**.
5. Take **corrective action** (re-plan, reallocate resources, control scope changes) and **report** to management.
6. Update the budget and schedule when changes are approved.
:::

## B4 (10 marks)
Explain contractor's rates (labour, material, equipment, overhead, profit) and the steps of bid evaluation.

::: answer
*Contractor's rates are beyond the notes.*

| Rate component | What it covers |
|---|---|
| **Labour** | Wages, overtime, allowances, statutory charges (social security, insurance), leave, PPE and small tools, allowance for productivity |
| **Material** | Purchase price, transport, handling and storage, **waste allowance**, taxes and duties |
| **Equipment (plant)** | Hire or ownership cost (depreciation, interest), fuel and lubricants, operator, maintenance, mobilisation |
| **Overhead** | Site overheads (supervision, site office, utilities, security) and head-office overheads (management, administration), usually a percentage |
| **Profit** | The contractor's return, a percentage on cost |

Unit rate = (labour + material + equipment) × (1 + overhead %) × (1 + profit %).

**Steps of bid evaluation** (Procurement chapter):

1. **Bid opening** (public for an ITT) and recording of prices.
2. **Preliminary screening** for compliance: forms, bid security, signatures, eligibility; reject non-responsive bids.
3. **Technical evaluation** with weighted criteria and pass marks (schedule, experience, staffing, method statement, financial capacity, HSE policy).
4. **Financial evaluation**: correct arithmetic errors, compare prices, delivery and discounts on a bid comparison form.
5. **Weighted evaluation matrix**: combine scores and rank bidders (demonstrations if needed).
6. **Recommendation and award**: letter of acceptance, then contract signature.
:::

## B5 (10 marks)
Explain Lump Sum vs Unit Price contracts, and the purchase order process.

::: answer
*Unit price contracts are beyond the notes; lump sum = fixed price in the notes.*

| | Lump sum (fixed price) | Unit price (measure and value) |
|---|---|---|
| Price | **One total price** for the whole defined work | **Rate per unit** of each item (per metre of cable, per point); paid on **measured quantities** |
| Needs | **Complete design and scope** before tender | A **bill of quantities** with estimated quantities |
| Risk | **Contractor** carries the cost risk (must perform even at a loss) | **Quantity risk on the client**; price-per-unit risk on the contractor |
| Changes | Need **equitable adjustment** (variations) | Absorbed easily: quantities are re-measured |
| Final cost | Known at award | Known only after measurement |
| Use | Well-defined work (e.g. a standard substation) | Work where quantities are uncertain (earthworks, cabling, rewiring) |

**Purchase order process** *(beyond the notes)*:

1. **Requisition**: the user raises an approved request (item, quantity, date, budget).
2. **Sourcing**: obtain quotations or tenders and select the supplier.
3. **Prepare the PO**: number, date, supplier, item descriptions and specifications, quantities, unit prices, total, delivery date and place, payment terms, conditions.
4. **Authorise and send** the PO; the supplier **acknowledges** it.
5. **Expedite** and receive the goods; **inspect** and issue a goods received note.
6. **Three-way match** (PO, delivery note, invoice) and **pay**; close the PO.
:::

## B6 (10 marks)
Tender document for rewiring an office building: give the sections and the importance of clear writing.

::: answer
**Sections** (based on the bid package in the notes):

1. **Invitation to Tender:** title (rewiring of office building X), client, closing date, submission address, bid security.
2. **Instructions to bidders:** eligibility (registered electrical contractor), **mandatory site visit**, clarifications, bid validity, evaluation criteria.
3. **Scope of works / terms of reference:** survey of the existing installation, removal of old wiring, new distribution boards, final circuits (lighting, sockets), earthing, testing and certification, as-built drawings, working while the building is occupied (out-of-hours work, safety).
4. **Technical specifications:** cable types and sizes, conduit and trunking, protective devices (MCBs, RCDs), DB ratings, earthing, the applicable wiring regulations and standards, test requirements (insulation resistance, continuity, earth-fault loop impedance, RCD tests).
5. **Bill of quantities / price schedule:** points, metres of cable, DBs, to be priced by bidders.
6. **Conditions of contract:** contract type, completion time, payment, performance bond, retention, defects liability period, penalties.
7. **Drawings:** floor plans, existing and proposed layouts, single-line diagram.
8. **Forms:** bid form, experience, key staff, declarations.

**Importance of clear writing**

- All bidders understand and **price the same scope**, so bids are **comparable** and evaluation is fair.
- It avoids **ambiguity, variations, claims and disputes** during the contract.
- It sets clear **safety and quality requirements**, essential in an occupied building.
- It gives measurable **acceptance criteria** (tests and certificates).
:::
