Final examination, Bachelor of Electrical Engineering. **Time: 3 hours. Total: 60 marks.** **Section A:** answer all 10 questions, 2 marks each. **Section B:** answer any four, 10 marks each. The question paper is in **Past papers**.

Many questions are the same as in exam Papers 2 to 4. Answers follow the notes; anything **beyond the notes** is marked and given the standard textbook answer.

## A1 (2 marks)
Define Net Present Value (NPV) and state its decision rule.

::: answer
**NPV** is the difference between the **present value of the returns** ($B$) and the **present value of the investments** ($C$), all discounted at the required rate $d$:

$$NPV = B - C = \sum_n \frac{\text{Net cash flow}_n}{(1+d)^n}$$

**Decision rule:** accept if $NPV > 0$; reject if $NPV < 0$ (indifferent at 0). Between projects, **the higher the NPV, the better**.
:::

## A2 (2 marks)
List four project selection methods used in engineering projects.

::: answer
½ mark each: **pay-back period**, **return on investment (ROI)**, **net present value (NPV)**, **benefit–cost ratio / profitability index**, **internal rate of return (IRR)**. (Scoring models and social cost–benefit analysis are also accepted.)
:::

## A3 (2 marks)
State the difference between CAPEX and OPEX.

::: answer
*Beyond the notes.*

| CAPEX (capital expenditure) | OPEX (operating expenditure) |
|---|---|
| One-off spending to **acquire or build long-term assets** | **Recurring** spending to **run and maintain** the asset |
| e.g. transformers, switchgear, buildings, installation | e.g. electricity, salaries, maintenance, spares, insurance |
| Capitalised and **depreciated** over the asset life | Charged as an **expense** in the year incurred |

In the notes' terms, CAPEX is the **investment** ($C$) and OPEX is part of the annual **expenditure** subtracted from income to get the net return.
:::

## A4 (2 marks)
Define a Work Breakdown Structure (WBS).

::: answer
A **WBS** is a **hierarchical breakdown of the total project scope** into smaller, manageable parts: project → sub-projects or deliverables → work packages → activities. Each lowest-level item is **quantifiable, measurable, costable and discrete**, so it can be estimated, scheduled, assigned and controlled. (The notes describe this as splitting a project into sub-projects and activities, e.g. a watershed project into agriculture, soil and water conservation and afforestation.)
:::

## A5 (2 marks)
What is the purpose of a Gantt Chart?

::: answer
A Gantt (bar) chart **schedules and reports progress**: each task is a horizontal bar on a **time scale**, showing **when it starts and finishes**; the bar length is the task duration. It gives a simple, visual plan for monitoring progress. (Limits: it does not show interdependencies between tasks and is hard to use for large projects.)
:::

## A6 (2 marks)
List four components that make up a contractor's rate.

::: answer
*Beyond the notes.* ½ mark each: **labour**, **materials**, **plant and equipment**, **overheads** (site and head office), **profit**, (and **contingency/risk**).
:::

## A7 (2 marks)
Define bid bond in tendering procedures.

::: answer
*Beyond the notes.* A **bid bond** (bid security) is a guarantee, usually from a bank or insurer, of about **1–5% of the bid price**, submitted **with the tender**. The client can claim it if the bidder **withdraws during the bid validity period** or, once selected, **fails to sign the contract or provide the performance bond**. It is returned to unsuccessful bidders.
:::

## A8 (2 marks)
What is a purchase order?

::: answer
*Beyond the notes.* A **purchase order (PO)** is a **formal, numbered document issued by the buyer** to a supplier, authorising the purchase of stated goods or services at agreed **quantities, prices, delivery dates and terms**. Once the supplier accepts it, it becomes a **binding contract**.
:::

## A9 (2 marks)
State two advantages of competitive bidding.

::: answer
1. **Best price and value for money** through competition.
2. **Transparency and fairness**: open to all qualified firms, public opening, less room for favouritism or corruption.

(Also: a wider choice of suppliers and technologies.)
:::

## A10 (2 marks)
What is the purpose of a tender document?

::: answer
The tender document **tells bidders exactly what the client wants and how to bid**: it contains the invitation, instructions to bidders, terms of reference or specifications, bill of quantities and contract conditions. This makes all bids **comparable**, lets the client **evaluate them fairly**, and forms the basis of the **contract**.
:::

## Q1 (10 marks)
A new electrical substation needs an initial investment of USD 500 000, with inflows of USD 150 000, 180 000, 200 000 and 170 000 in years 1 to 4. Discount rate 10%. (a) Calculate the NPV (6 marks). (b) Advise whether to accept (2 marks). (c) State two limitations of NPV (2 marks).

::: answer
**(a)**

| Year | Inflow (USD) | Discount factor $1/1.1^n$ | PV (USD) |
|---|---|---|---|
| 1 | 150 000 | 0.9091 | 136 364 |
| 2 | 180 000 | 0.8264 | 148 760 |
| 3 | 200 000 | 0.7513 | 150 263 |
| 4 | 170 000 | 0.6830 | 116 112 |
| | | **B** | **551 499** |

$$NPV = 551\,499 - 500\,000 = \mathbf{+USD\ 51\,499}$$

**(b) Accept.** The NPV is positive, so the project returns more than the 10% required. ($BCR = 1.10$; the IRR is about 14.5%: NPV is +5 731 at 14% and −4 758 at 15%.)

**(c)** Any two:

- It depends on choosing the **right discount rate**, which is hard to estimate.
- It gives an **absolute amount**, not a rate, so it favours **large projects** and is hard to compare across projects of different size.
- It relies on **forecast cash flows**, which are uncertain.
- It does not show **how quickly** the money is recovered (liquidity).
:::

## Q2 (10 marks)
Activities: A 2 weeks (no predecessor), B 4 (A), C 3 (A), D 2 (B), E 5 (C), F 3 (D and E). (a) Draw the network (4 marks). (b) Determine the critical path (3 marks). (c) Calculate the project duration (3 marks).

::: answer
**(a)**

<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Paper 3 network (weeks). Critical path A–C–E–F = 13 weeks; B and D share 2 weeks of float."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="69.0" y1="130.0" x2="144.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="106.5" y="120.0" text-anchor="middle" class="d-t s a">A = 2</text><line x1="190.1" y1="116.9" x2="278.2" y2="59.2" class="d-ax" marker-end="url(#ah)"/><text x="226.0" y="80.5" text-anchor="middle" class="d-t s a">B = 4</text><line x1="190.1" y1="143.1" x2="278.2" y2="200.8" class="d-a w" marker-end="url(#ah)"/><text x="226.0" y="189.5" text-anchor="middle" class="d-t s a">C = 3</text><line x1="320.1" y1="58.1" x2="408.2" y2="115.8" class="d-ax" marker-end="url(#ah)"/><text x="372.4" y="79.4" text-anchor="middle" class="d-t s a">D = 2</text><line x1="320.1" y1="201.9" x2="408.2" y2="144.2" class="d-a w" marker-end="url(#ah)"/><text x="372.4" y="190.6" text-anchor="middle" class="d-t s a">E = 5</text><line x1="454.0" y1="130.0" x2="534.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="494.0" y="120.0" text-anchor="middle" class="d-t s a">F = 3</text><circle cx="45" cy="130" r="24" class="d-box a"/><line x1="45.0" y1="106.0" x2="45.0" y2="154.0" class="d-ax"/><line x1="45.0" y1="130.0" x2="69.0" y2="130.0" class="d-ax"/><text x="34.0" y="135.0" text-anchor="middle" class="d-t b">1</text><text x="56.0" y="124.0" text-anchor="middle" class="d-t s">0</text><text x="56.0" y="146.0" text-anchor="middle" class="d-t s r">0</text><circle cx="170" cy="130" r="24" class="d-box a"/><line x1="170.0" y1="106.0" x2="170.0" y2="154.0" class="d-ax"/><line x1="170.0" y1="130.0" x2="194.0" y2="130.0" class="d-ax"/><text x="159.0" y="135.0" text-anchor="middle" class="d-t b">2</text><text x="181.0" y="124.0" text-anchor="middle" class="d-t s">2</text><text x="181.0" y="146.0" text-anchor="middle" class="d-t s r">2</text><circle cx="300" cy="45" r="24" class="d-box"/><line x1="300.0" y1="21.0" x2="300.0" y2="69.0" class="d-ax"/><line x1="300.0" y1="45.0" x2="324.0" y2="45.0" class="d-ax"/><text x="289.0" y="50.0" text-anchor="middle" class="d-t b">3</text><text x="311.0" y="39.0" text-anchor="middle" class="d-t s">6</text><text x="311.0" y="61.0" text-anchor="middle" class="d-t s r">8</text><circle cx="300" cy="215" r="24" class="d-box a"/><line x1="300.0" y1="191.0" x2="300.0" y2="239.0" class="d-ax"/><line x1="300.0" y1="215.0" x2="324.0" y2="215.0" class="d-ax"/><text x="289.0" y="220.0" text-anchor="middle" class="d-t b">4</text><text x="311.0" y="209.0" text-anchor="middle" class="d-t s">5</text><text x="311.0" y="231.0" text-anchor="middle" class="d-t s r">5</text><circle cx="430" cy="130" r="24" class="d-box a"/><line x1="430.0" y1="106.0" x2="430.0" y2="154.0" class="d-ax"/><line x1="430.0" y1="130.0" x2="454.0" y2="130.0" class="d-ax"/><text x="419.0" y="135.0" text-anchor="middle" class="d-t b">5</text><text x="441.0" y="124.0" text-anchor="middle" class="d-t s">10</text><text x="441.0" y="146.0" text-anchor="middle" class="d-t s r">10</text><circle cx="560" cy="130" r="24" class="d-box a"/><line x1="560.0" y1="106.0" x2="560.0" y2="154.0" class="d-ax"/><line x1="560.0" y1="130.0" x2="584.0" y2="130.0" class="d-ax"/><text x="549.0" y="135.0" text-anchor="middle" class="d-t b">6</text><text x="571.0" y="124.0" text-anchor="middle" class="d-t s">13</text><text x="571.0" y="146.0" text-anchor="middle" class="d-t s r">13</text><text x="300.0" y="285.0" text-anchor="middle" class="d-t s m">Each event: number | earliest time (top) | latest time (bottom, red). Blue = critical path.</text></svg><figcaption>Paper 3 network (weeks). Critical path A–C–E–F = 13 weeks; B and D share 2 weeks of float.</figcaption></figure>

**Forward pass:** 1 = 0; 2 = 2; 3 = 2 + 4 = 6; 4 = 2 + 3 = 5; 5 = max(6 + 2, 5 + 5) = 10; 6 = 10 + 3 = 13.
**Backward pass:** 6 = 13; 5 = 10; 3 = 8; 4 = 5; 2 = min(8 − 4, 5 − 3) = 2; 1 = 0.

**(b)** Paths: A–B–D–F = 2 + 4 + 2 + 3 = 11; **A–C–E–F = 2 + 3 + 5 + 3 = 13**. Critical path **A–C–E–F**. (B and D share 2 weeks of float.)

**(c)** Project duration = **13 weeks**.
:::

## Q3 (10 marks)
(a) Explain the steps involved in developing a project budget (5 marks). (b) Discuss the importance of project deliverables in engineering projects (5 marks).

::: answer
*Partly beyond the notes.*

**(a) Steps**

1. Define the **scope** and build the **WBS** (deliverables → work packages → activities).
2. **Schedule** the activities (network and critical path) to place costs in time.
3. **Estimate direct costs** of each activity: labour, materials, equipment, subcontracts.
4. Add **indirect costs and overheads** (supervision, site facilities, insurance).
5. Add **contingency** (risk) and **escalation** (inflation).
6. **Aggregate** into the total budget and a **time-phased** cash-flow plan.
7. **Approve** it as the **cost baseline** for monitoring and control.

**(b) Importance of deliverables**

- They turn objectives into **concrete, verifiable outputs** with acceptance criteria.
- They are the basis of the **WBS, estimates and budget**.
- Their completion marks **milestones** for **monitoring progress** and often triggers **payments**.
- They make **responsibility** clear and support **scope control**.
- Each life-cycle phase in the notes ends in deliverables: concept note, feasibility report, DPR, implementation plan, evaluation report.
:::

## Q4 (10 marks)
(a) Explain five components that make up a contractor's rate (5 marks). (b) Describe the procedure followed in evaluating bids (5 marks).

::: answer
**(a)** *Beyond the notes.* One mark each:

1. **Labour:** wages, overtime, allowances, statutory charges, leave, PPE, productivity allowance.
2. **Materials:** supplier price, transport, handling and storage, waste allowance, taxes and duties.
3. **Plant and equipment:** hire or ownership cost, fuel, operator, maintenance, mobilisation.
4. **Overheads:** site overheads (supervision, site office, utilities) and head-office overheads.
5. **Profit** (and **contingency** for risk): the contractor's margin, as a percentage.

**(b)** From the Procurement chapter:

1. **Open** the bids at the set time (publicly for an ITT) and record prices.
2. **Screen** for compliance: forms, bid security, eligibility; reject non-responsive bids.
3. **Technical evaluation** against weighted criteria and pass marks, with the client's engineers.
4. **Financial evaluation**: check arithmetic, compare prices, delivery and discounts on a summary form.
5. Combine in a **weighted evaluation matrix**, rank, and **recommend**; then negotiate and **award** (letter of acceptance, contract).
:::

## Q5 (10 marks)
(a) Explain the difference between a Lump Sum Contract and a Unit Price Contract (4 marks). (b) Describe the process of preparing a purchase order (6 marks).

::: answer
**(a)**

| Lump sum (fixed price) | Unit price |
|---|---|
| **One total price** for the whole defined work | **Rate per unit** for each item; paid on **measured quantities** |
| Needs a **complete design and scope** | Needs a **bill of quantities** with estimated quantities |
| **Contractor** carries the cost risk | **Client** carries the quantity risk |
| Final cost known at award; changes need price adjustments | Final cost known only after measurement; changes easy to absorb |

**(b)** *Beyond the notes.* One mark per step:

1. **Requisition:** the user raises an approved request (item, quantity, date, budget code).
2. **Sourcing:** get quotations or tenders and select the supplier.
3. **Draft the PO:** PO number and date, buyer and supplier details, descriptions and specifications, quantities, unit prices and total, delivery place and date, payment terms, terms and conditions.
4. **Approve and issue** it; the supplier **acknowledges** (contract formed).
5. **Follow up and receive:** expedite, receive and inspect, issue a goods received note.
6. **Match and pay:** three-way match (PO, delivery note, invoice), pay, close the PO.
:::

## Q6 (10 marks)
You are to prepare a tender document for installing electrical wiring in a commercial building. (a) List and explain the main sections of a tender document (6 marks). (b) Discuss the importance of clear technical writing in tender preparation (4 marks).

::: answer
**(a)** One mark per section:

1. **Invitation to Tender:** project title, client, closing date and place, bid security.
2. **Instructions to bidders:** eligibility (registered electrical contractor), site visit, clarifications, validity, **evaluation criteria**.
3. **Scope of works / terms of reference:** what must be done: distribution boards, final circuits, lighting and power, earthing, testing and certification, as-built drawings.
4. **Technical specifications:** cable types and sizes, containment, protective devices (MCBs, RCDs), standards and wiring regulations, test requirements.
5. **Bill of quantities / price schedule:** itemised quantities for bidders to price.
6. **Conditions of contract and forms:** contract type, payment, completion time, performance bond, retention, defects liability; bid form, experience and staff schedules. (Drawings are attached.)

**(b)**

- **Unambiguous** specifications make every bidder price the **same scope**, so bids are comparable and evaluation is fair.
- They prevent **misunderstanding, variations, claims and disputes**.
- They set measurable **quality, safety and acceptance criteria**.
- Clear documents are **professional and legally sound**, and reduce bidders' queries.
:::
