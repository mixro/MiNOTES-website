Final exam, **Paper 4**. **Section A:** answer all 10 questions, 2 marks each. **Section B:** answer any four, 10 marks each. The original paper is in **Past papers**.

> **Note on the paper.** Questions A1 to A6 of this paper are printed at the bottom of the Paper 3 page, before the "Paper 4" heading. They are placed here where they belong.

Answers follow the course notes; questions that go **beyond the notes** are marked *Beyond the notes* and get the standard textbook answer.

## A1 (2 marks)
Define Payback Period.

::: answer
The **pay-back period** is the **time needed to recover the initial investment** from the project's net annual returns (income − expenditure). With uniform returns:

$$\text{Pay-back} = \frac{\text{Investment}}{\text{Annual net return}}$$

With uneven returns, add the annual returns until they equal the investment. *Example from the notes:* Rs 20 000 fish pond returning Rs 5 000 a year → 4 years.
:::

## A2 (2 marks)
Give four disadvantages of using IRR.

::: answer
½ mark each. Points 1 and 2 come from the notes; the rest are standard.

1. It must be found **by trial and error (iteration)**, which is tedious by hand.
2. It is a **percentage**, so it ignores the **size** of the project: a small project can have a higher IRR but a much smaller NPV.
3. Projects with **non-conventional cash flows** (sign changes, e.g. a large decommissioning cost) can have **several IRRs or none**.
4. It assumes the inflows are **reinvested at the IRR itself**, which is often unrealistic.
5. It can **rank mutually exclusive projects wrongly** compared with NPV.
:::

## A3 (2 marks)
State the difference between fixed and variable costs in projects.

::: answer
*Beyond the notes.*

| Fixed costs | Variable costs |
|---|---|
| **Do not change** with the amount of work done (over the relevant range) | **Change in proportion** to the amount of work or output |
| Site office rent, management salaries, insurance, equipment hire per month, design fees | Materials (cable, panels), direct labour paid per unit, fuel, consumables |
:::

## A4 (2 marks)
Define "Project Scope".

::: answer
**Project scope** is the **total work** that must be done to deliver the project's product, service or result **with the specified features and functions**, and nothing more. It is defined in the scope statement and the WBS, and sets the **specifications** the project must meet. Scope is one side of the **quality triangle** (scope, time, cost): enlarging the scope needs more time and money.
:::

## A5 (2 marks)
State the purpose of a milestone chart.

::: answer
A milestone chart improves on the Gantt chart by marking **milestones** (circles on the bars) at the **completion of specific phases** of each task. Its purpose is to make **progress easier to monitor** within a task (e.g. ploughing finished by day 3 within land preparation) and to show the **sequence of milestones within a task**.

(Its limits: it does not show interdependence **between** tasks, critical activities or uncertainty.)
:::

## A6 (2 marks)
Give four items that make up a contractor's material rates.

::: answer
*Beyond the notes.* ½ mark each:

1. **Purchase (supplier) price** of the material
2. **Transport and delivery** to site
3. **Handling, unloading and storage** on site
4. **Waste and breakage allowance** (e.g. offcuts of cable)
5. **Taxes and import duties**
:::

## A7 (2 marks)
What is a retention bond?

::: answer
*Beyond the notes.* Normally the client **retains a percentage** (typically **5–10%**) of each interim payment until the work is complete and the **defects liability period** has ended, as security for the contractor fixing defects. A **retention bond** is a **guarantee from a bank or insurer** given **in place of that cash retention**, so the contractor receives the full payments while the client is still protected. It is released at the end of the defects liability period.
:::

## A8 (2 marks)
Define "Invitation to Tender (ITT)".

::: answer
An **ITT** is the **formal** method of bid solicitation, used for **higher-value** purchases. The tender documents describe **in significant detail, through specifications**, what is to be supplied. The ITT is sent to **any interested party**, who may submit a **formal tender**, and the **tenders are opened publicly**.
:::

## A9 (2 marks)
Give two advantages of selective bidding.

::: answer
*Selective tendering is listed in the notes; its advantages are standard.* One mark each:

1. Only **prequalified, competent** contractors bid, so the risk of poor performance or failure is lower.
2. **Less time and cost** to evaluate fewer bids, and less wasted effort for bidders.
3. (Also) **Competition is kept**, so prices remain competitive while quality is assured.
:::

## A10 (2 marks)
State the purpose of technical specifications in tender documents.

::: answer
Technical specifications define the **design, performance and functional requirements** of the work: materials, equipment ratings, standards to comply with, workmanship, and tests. Their purpose is to:

- tell bidders **exactly what to supply and price**, so bids are comparable;
- set the **quality** the contractor must achieve; and
- provide the **acceptance criteria** for inspection, testing and commissioning.
:::

## B1 (10 marks)
An electrical project needs a USD 450 000 investment, with inflows of USD 140k, 160k, 180k and 200k in years 1 to 4. Discount rate 11%. Calculate the NPV and decide whether to accept or reject.

::: answer
| Year | Inflow (USD) | Discount factor $1/1.11^n$ | PV (USD) |
|---|---|---|---|
| 1 | 140 000 | 0.9009 | 126 126 |
| 2 | 160 000 | 0.8116 | 129 860 |
| 3 | 180 000 | 0.7312 | 131 614 |
| 4 | 200 000 | 0.6587 | 131 746 |
| | | **B** | **519 346** |

$$NPV = 519\,346 - 450\,000 = \mathbf{+USD\ 69\,346}$$

$BCR = 519\,346/450\,000 = 1.15$. (IRR: NPV is +5 657 at 17% and −3 735 at 18%, so $IRR \approx 17.6\%$.)

**Decision: accept.** The NPV is positive and the IRR (about 17.6%) is well above the 11% discount rate. (Pay-back is about 2.8 years.)

*Marks: PVs 5, NPV 3, decision 2.*
:::

## B2 (10 marks)
Project network: activities A (3 w), B (4 w, after A), C (2 w, after A), D (3 w, after B), E (4 w, after C), F (2 w, after D and E). Draw the network diagram, find the critical path and the project duration.

::: answer
<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Paper 4 network (weeks). Critical path A–B–D–F = 12 weeks; C and E share 1 week of float."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="69.0" y1="130.0" x2="144.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="106.5" y="120.0" text-anchor="middle" class="d-t s a">A = 3</text><line x1="190.1" y1="116.9" x2="278.2" y2="59.2" class="d-a w" marker-end="url(#ah)"/><text x="226.0" y="80.5" text-anchor="middle" class="d-t s a">B = 4</text><line x1="190.1" y1="143.1" x2="278.2" y2="200.8" class="d-ax" marker-end="url(#ah)"/><text x="226.0" y="189.5" text-anchor="middle" class="d-t s a">C = 2</text><line x1="320.1" y1="58.1" x2="408.2" y2="115.8" class="d-a w" marker-end="url(#ah)"/><text x="372.4" y="79.4" text-anchor="middle" class="d-t s a">D = 3</text><line x1="320.1" y1="201.9" x2="408.2" y2="144.2" class="d-ax" marker-end="url(#ah)"/><text x="372.4" y="190.6" text-anchor="middle" class="d-t s a">E = 4</text><line x1="454.0" y1="130.0" x2="534.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="494.0" y="120.0" text-anchor="middle" class="d-t s a">F = 2</text><circle cx="45" cy="130" r="24" class="d-box a"/><line x1="45.0" y1="106.0" x2="45.0" y2="154.0" class="d-ax"/><line x1="45.0" y1="130.0" x2="69.0" y2="130.0" class="d-ax"/><text x="34.0" y="135.0" text-anchor="middle" class="d-t b">1</text><text x="56.0" y="124.0" text-anchor="middle" class="d-t s">0</text><text x="56.0" y="146.0" text-anchor="middle" class="d-t s r">0</text><circle cx="170" cy="130" r="24" class="d-box a"/><line x1="170.0" y1="106.0" x2="170.0" y2="154.0" class="d-ax"/><line x1="170.0" y1="130.0" x2="194.0" y2="130.0" class="d-ax"/><text x="159.0" y="135.0" text-anchor="middle" class="d-t b">2</text><text x="181.0" y="124.0" text-anchor="middle" class="d-t s">3</text><text x="181.0" y="146.0" text-anchor="middle" class="d-t s r">3</text><circle cx="300" cy="45" r="24" class="d-box a"/><line x1="300.0" y1="21.0" x2="300.0" y2="69.0" class="d-ax"/><line x1="300.0" y1="45.0" x2="324.0" y2="45.0" class="d-ax"/><text x="289.0" y="50.0" text-anchor="middle" class="d-t b">3</text><text x="311.0" y="39.0" text-anchor="middle" class="d-t s">7</text><text x="311.0" y="61.0" text-anchor="middle" class="d-t s r">7</text><circle cx="300" cy="215" r="24" class="d-box"/><line x1="300.0" y1="191.0" x2="300.0" y2="239.0" class="d-ax"/><line x1="300.0" y1="215.0" x2="324.0" y2="215.0" class="d-ax"/><text x="289.0" y="220.0" text-anchor="middle" class="d-t b">4</text><text x="311.0" y="209.0" text-anchor="middle" class="d-t s">5</text><text x="311.0" y="231.0" text-anchor="middle" class="d-t s r">6</text><circle cx="430" cy="130" r="24" class="d-box a"/><line x1="430.0" y1="106.0" x2="430.0" y2="154.0" class="d-ax"/><line x1="430.0" y1="130.0" x2="454.0" y2="130.0" class="d-ax"/><text x="419.0" y="135.0" text-anchor="middle" class="d-t b">5</text><text x="441.0" y="124.0" text-anchor="middle" class="d-t s">10</text><text x="441.0" y="146.0" text-anchor="middle" class="d-t s r">10</text><circle cx="560" cy="130" r="24" class="d-box a"/><line x1="560.0" y1="106.0" x2="560.0" y2="154.0" class="d-ax"/><line x1="560.0" y1="130.0" x2="584.0" y2="130.0" class="d-ax"/><text x="549.0" y="135.0" text-anchor="middle" class="d-t b">6</text><text x="571.0" y="124.0" text-anchor="middle" class="d-t s">12</text><text x="571.0" y="146.0" text-anchor="middle" class="d-t s r">12</text><text x="300.0" y="285.0" text-anchor="middle" class="d-t s m">Each event: number | earliest time (top) | latest time (bottom, red). Blue = critical path.</text></svg><figcaption>Paper 4 network (weeks). Critical path A–B–D–F = 12 weeks; C and E share 1 week of float.</figcaption></figure>

**Forward pass:** event 1 = 0; event 2 = 3; event 3 = 3 + 4 = 7; event 4 = 3 + 2 = 5; event 5 = max(7 + 3, 5 + 4) = **10**; event 6 = 10 + 2 = **12**.

**Backward pass:** event 6 = 12; event 5 = 10; event 3 = 10 − 3 = 7; event 4 = 10 − 4 = 6; event 2 = min(7 − 4, 6 − 2) = 3; event 1 = 0.

| Path | Length (weeks) |
|---|---|
| **A–B–D–F** | 3 + 4 + 3 + 2 = **12** |
| A–C–E–F | 3 + 2 + 4 + 2 = 11 |

**Critical path: A–B–D–F (events 1–2–3–5–6). Project duration = 12 weeks.**

Floats: C has total float $6 - 3 - 2 = 1$ week and E has $10 - 5 - 4 = 1$ week (shared). The non-critical path is only 1 week shorter, so a small delay on C or E would make it critical too.
:::

## B3 (10 marks)
Give the budget preparation steps and the significance of deliverables.

::: answer
*Partly beyond the notes.*

**Budget preparation steps**

1. Define the **scope and deliverables**; build the **work breakdown structure**.
2. **Schedule** the activities (network, critical path).
3. **Estimate** each activity's direct costs: labour, materials, equipment, subcontracts.
4. Add **indirect costs** (supervision, site facilities, insurance) and **overheads**.
5. Add **contingency** (risk) and **escalation** (inflation).
6. **Aggregate** into the total budget and phase it in time (**cash-flow** plan).
7. **Review, approve** and set it as the **cost baseline** for control.

**Significance of deliverables**

- They turn the objectives into **concrete, verifiable outputs**, so everyone knows what "done" means (acceptance criteria).
- They are the **basis for the WBS**, estimating and the budget: each cost is tied to a deliverable.
- Their completion marks **milestones**, used to **monitor progress** and often to trigger **payments**.
- They define **responsibility** (who delivers what) and support **scope control**, avoiding scope creep.
- The notes' life-cycle phases are each marked by deliverables: concept note, feasibility report, DPR, implementation plan, evaluation report.
:::

## B4 (10 marks)
Explain contractor's rates (labour, equipment, materials, overhead, contingency) and the bid evaluation procedure.

::: answer
*Contractor's rates are beyond the notes.*

| Component | What it covers |
|---|---|
| **Labour** | Wages, overtime, allowances, statutory charges, leave, PPE and small tools, productivity allowance |
| **Equipment** | Ownership or hire cost, fuel, operator, maintenance, transport and mobilisation |
| **Materials** | Supplier price, delivery, handling and storage, waste allowance, taxes and duties |
| **Overhead** | Site and head-office overheads, as a percentage |
| **Contingency** | Allowance for **risk and uncertainty** (unforeseen conditions, price rises), usually a percentage |
| (Profit) | The contractor's margin |

**Bid evaluation procedure** (Procurement chapter):

1. **Opening** of bids at the stated time (publicly for an ITT).
2. **Screening** for responsiveness: forms complete, bid security, eligibility.
3. **Technical evaluation** with weighted criteria and pass marks, involving the client's engineers.
4. **Financial evaluation**: arithmetic check, comparison of prices, delivery times and discounts on a summary form.
5. **Weighted evaluation matrix** to combine scores and rank bidders; demonstrations if needed.
6. **Recommendation**, negotiation and **award** (letter of acceptance → contract).
:::

## B5 (10 marks)
Explain Cost Plus vs Lump Sum contracts, and the purchase order process.

::: answer
| | Cost plus | Lump sum (fixed price) |
|---|---|---|
| Payment | **Actual costs reimbursed plus a fee** (fixed, % of cost, incentive or award) | **One agreed total price** for the defined work |
| When used | **Scope uncertain**, accurate pricing impossible, high performance risk | **Scope and design complete** and well defined |
| Risk | Mostly on the **client** (final cost uncertain) | Mostly on the **contractor** (must perform even at a loss) |
| Client control | **High**; contractor's books are audited | **Low** control over how the work is done |
| Contractor incentive to save | Low (none for cost plus % fee) | High (savings increase profit) |
| Changes | Easy to accommodate | Need equitable price adjustments |

**Purchase order process** *(beyond the notes)*: approved **requisition** → **source and select** supplier (quotations or tender) → **prepare the PO** (number, supplier, specifications, quantities, prices, delivery date and place, payment terms) → **authorise and issue**, supplier acknowledges → **expedite and receive**, inspect, goods received note → **three-way match** (PO, delivery note, invoice) → **pay** and close.
:::

## B6 (10 marks)
Tender document for installing a lighting system: main sections and the importance of technical writing.

::: answer
**Main sections** (bid package in the notes):

1. **Invitation to Tender:** title (supply and installation of the lighting system for building X), client, closing date, submission, bid security.
2. **Instructions to bidders:** eligibility, site visit, clarification process, validity, evaluation criteria.
3. **Scope of works:** lighting design (or design given), supply of luminaires, wiring, switches and controls, emergency lighting, testing and commissioning, as-built drawings, training, warranty.
4. **Technical specifications:** luminaire type (e.g. LED), efficacy (lm/W), colour temperature, IP rating, required **illuminance levels (lux)** per area, controls (sensors, dimming), cable sizes, protection, applicable standards and wiring regulations, test requirements.
5. **Bill of quantities / price schedule.**
6. **Conditions of contract:** completion time, payment, performance bond, retention, defects liability, penalties.
7. **Drawings:** lighting layout, circuit schedule, single-line diagram.
8. **Forms:** bid form, experience, key staff, declarations.

**Importance of technical writing**

- **Precise, unambiguous** specifications make all bidders price the same thing, so evaluation is fair.
- They avoid **variations, claims and disputes**.
- They set measurable **performance and acceptance criteria** (lux levels, tests).
- Clear, well-organised documents are **professional and legally sound**.
:::
