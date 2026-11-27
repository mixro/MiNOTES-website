Final exam, **Paper 2** (Bachelor of Electrical Engineering). **Section A:** answer all 10 questions, 2 marks each. **Section B:** answer any four, 10 marks each. The original paper is in **Past papers**.

Answers follow the course notes. Where a question goes **beyond the notes** (costs, budgets, bonds, contractor's rates, tender writing), the answer is marked *Beyond the notes* and gives the standard textbook answer.

## A1 (2 marks)
Define Internal Rate of Return (IRR) and its significance.

::: answer
**IRR** is the **discount rate at which the net present value of a project is zero**, i.e. the present value of the returns ($B$) equals the present value of the investments ($C$): $B - C = 0$. It is found by trial: compute the NPV at different rates until it is close to zero.

**Significance:** it is the project's own rate of return, so it can be compared directly with the cost of capital (accept if IRR > cost of capital), and it lets projects of different sizes be ranked: **the higher the IRR, the better**. Industrial projects are judged mainly on IRR.
:::

## A2 (2 marks)
State four advantages of using the Payback Period method.

::: answer
½ mark each:

1. **Simplest** method: easy to calculate and to understand.
2. Good for a **quick first screening** of projects.
3. Shows how fast the **investment is recovered**, so it favours **liquidity** (useful when cash is tight).
4. Gives a rough measure of **risk**: the shorter the pay-back, the less exposure to later uncertainty (technology change, market change).

(Its drawbacks, from the notes: it ignores returns after pay-back and the time value of money.)
:::

## A3 (2 marks)
Differentiate between direct and indirect project costs.

::: answer
*Beyond the notes.*

| Direct costs | Indirect costs |
|---|---|
| Can be **traced to a specific activity** or work package | **Shared** by the whole project; cannot be traced to one activity |
| Labour on the task, materials, equipment used on the task, subcontracts | Site supervision and management, site offices, insurance, utilities, security, head-office overheads |
| Usually **rise when an activity is crashed** | Usually **fall when the project is shortened** (they are time-related) |
:::

## A4 (2 marks)
Explain the term "Project Milestone".

::: answer
A **milestone** is a **significant event** in a project: the **completion of a specific phase** of a task or of a key deliverable. It has **zero duration** (it is a point in time). In a milestone chart it is shown as a circle on the task bar; e.g. "ploughing complete on day 3" within the land-preparation task. Milestones are used to **monitor progress** against the plan.
:::

## A5 (2 marks)
What is the main purpose of a Responsibility Assignment Matrix (RAM)?

::: answer
*Beyond the notes.* A RAM is a table that maps **work packages or activities (rows)** against **people or organisations (columns)**, to show **who is responsible for what**. The common form is the **RACI** chart: **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed. It makes sure every task has an owner and avoids gaps and overlaps in responsibility.
:::

## A6 (2 marks)
Name four items included in a contractor's overhead costs.

::: answer
*Beyond the notes.* Any four, ½ mark each:

- **Site overheads:** site supervision (site engineer, foreman), site office and stores, temporary services (water, power, telephone), security, site transport.
- **Head-office overheads:** office rent, management and administrative salaries, accounting, estimating and tendering costs.
- **Insurance** (contractor's all-risk, third party, workers' compensation).
- **Bonds and guarantees** (bid, performance, advance payment).
- **Finance charges** (interest on working capital).
:::

## A7 (2 marks)
What is a performance bond?

::: answer
*Beyond the notes.* A **guarantee from a bank or insurer**, provided by the contractor after award, that the contractor will **perform the contract** as agreed. If the contractor defaults, the client can claim the bond amount, typically **5–10% of the contract price**, to cover the cost of completing the work. It is released when the work is satisfactorily completed.
:::

## A8 (2 marks)
Define "Request for Quotation (RFQ)".

::: answer
An **RFQ** is an **informal** solicitation in which the sponsor sends a **short (one-page) document describing the required goods** and listing the **terms and conditions**. Suppliers reply with a **quotation giving price and delivery**. It is often done by fax or telephone, and is used to **survey the market for the best price without legal obligation**, for low-value, clearly specified purchases.
:::

## A9 (2 marks)
State two disadvantages of single-source bidding.

::: answer
One mark each:

1. **No competition**, so there is no assurance of the **best price**; the supplier can overcharge.
2. **Less transparency** and a higher risk of **favouritism or corruption**.
3. (Also) Dependence on **one supplier**: if it fails, there is no fallback, and the client has little leverage on quality or delivery.
:::

## A10 (2 marks)
Why is clarity important in tender documents?

::: answer
Clear tender documents:

- make **all bidders price the same scope**, so bids can be **compared fairly**;
- reduce **queries, qualifications and errors** in bids;
- avoid **variations, claims and disputes** during the contract (ambiguity is usually interpreted against the party who wrote it);
- give the client what it actually needs (correct **specifications and bill of quantities**).
:::

## B1 (10 marks)
NPV and IRR: a company evaluates a transformer project. Investment USD 400 000; inflows Year 1: USD 120k, Year 2: USD 150k, Year 3: USD 180k. Discount rate 12%. Calculate the NPV and IRR, and decide on the project.

::: answer
**Present values at 12%** ($PV = C_n/(1+d)^n$):

| Year | Inflow (USD ) | Discount factor $1/1.12^n$ | PV (USD ) |
|---|---|---|---|
| 1 | 120 000 | 0.8929 | 107 143 |
| 2 | 150 000 | 0.7972 | 119 579 |
| 3 | 180 000 | 0.7118 | 128 120 |
| | | **B** | **354 842** |

$$NPV = B - C = 354\,842 - 400\,000 = \mathbf{-USD 45\,158}$$

($BCR = 354\,842/400\,000 = 0.89 < 1$.)

**IRR by trial.** The NPV is negative at 12%, so try lower rates:

- at 5%: $NPV = +5\,831$
- at 6%: $NPV = -2\,162$

$$IRR \approx 5 + \frac{5\,831}{5\,831 + 2\,162}(6 - 5) \approx \mathbf{5.7\%}$$

**Decision: reject.** The NPV is negative and the IRR (5.7%) is well below the required 12%. (The undiscounted pay-back is about 2.7 years, which hides the problem; the inflows total only USD 450 000 against USD 400 000 invested.)

*Marks: PVs 4, NPV 2, IRR 3, decision 1.*
:::

## B2 (10 marks)
Project network: activities A (3 w), B (5 w, after A), C (2 w, after A), D (4 w, after B), E (3 w, after C), F (2 w, after D and E). Draw the network, find the critical path and the total duration.

::: answer
<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Paper 2 network (weeks). Critical path A–B–D–F = 14 weeks; C and E share 4 weeks of float."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="69.0" y1="130.0" x2="144.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="106.5" y="120.0" text-anchor="middle" class="d-t s a">A = 3</text><line x1="190.1" y1="116.9" x2="278.2" y2="59.2" class="d-a w" marker-end="url(#ah)"/><text x="226.0" y="80.5" text-anchor="middle" class="d-t s a">B = 5</text><line x1="190.1" y1="143.1" x2="278.2" y2="200.8" class="d-ax" marker-end="url(#ah)"/><text x="226.0" y="189.5" text-anchor="middle" class="d-t s a">C = 2</text><line x1="320.1" y1="58.1" x2="408.2" y2="115.8" class="d-a w" marker-end="url(#ah)"/><text x="372.4" y="79.4" text-anchor="middle" class="d-t s a">D = 4</text><line x1="320.1" y1="201.9" x2="408.2" y2="144.2" class="d-ax" marker-end="url(#ah)"/><text x="372.4" y="190.6" text-anchor="middle" class="d-t s a">E = 3</text><line x1="454.0" y1="130.0" x2="534.0" y2="130.0" class="d-a w" marker-end="url(#ah)"/><text x="494.0" y="120.0" text-anchor="middle" class="d-t s a">F = 2</text><circle cx="45" cy="130" r="24" class="d-box a"/><line x1="45.0" y1="106.0" x2="45.0" y2="154.0" class="d-ax"/><line x1="45.0" y1="130.0" x2="69.0" y2="130.0" class="d-ax"/><text x="34.0" y="135.0" text-anchor="middle" class="d-t b">1</text><text x="56.0" y="124.0" text-anchor="middle" class="d-t s">0</text><text x="56.0" y="146.0" text-anchor="middle" class="d-t s r">0</text><circle cx="170" cy="130" r="24" class="d-box a"/><line x1="170.0" y1="106.0" x2="170.0" y2="154.0" class="d-ax"/><line x1="170.0" y1="130.0" x2="194.0" y2="130.0" class="d-ax"/><text x="159.0" y="135.0" text-anchor="middle" class="d-t b">2</text><text x="181.0" y="124.0" text-anchor="middle" class="d-t s">3</text><text x="181.0" y="146.0" text-anchor="middle" class="d-t s r">3</text><circle cx="300" cy="45" r="24" class="d-box a"/><line x1="300.0" y1="21.0" x2="300.0" y2="69.0" class="d-ax"/><line x1="300.0" y1="45.0" x2="324.0" y2="45.0" class="d-ax"/><text x="289.0" y="50.0" text-anchor="middle" class="d-t b">3</text><text x="311.0" y="39.0" text-anchor="middle" class="d-t s">8</text><text x="311.0" y="61.0" text-anchor="middle" class="d-t s r">8</text><circle cx="300" cy="215" r="24" class="d-box"/><line x1="300.0" y1="191.0" x2="300.0" y2="239.0" class="d-ax"/><line x1="300.0" y1="215.0" x2="324.0" y2="215.0" class="d-ax"/><text x="289.0" y="220.0" text-anchor="middle" class="d-t b">4</text><text x="311.0" y="209.0" text-anchor="middle" class="d-t s">5</text><text x="311.0" y="231.0" text-anchor="middle" class="d-t s r">9</text><circle cx="430" cy="130" r="24" class="d-box a"/><line x1="430.0" y1="106.0" x2="430.0" y2="154.0" class="d-ax"/><line x1="430.0" y1="130.0" x2="454.0" y2="130.0" class="d-ax"/><text x="419.0" y="135.0" text-anchor="middle" class="d-t b">5</text><text x="441.0" y="124.0" text-anchor="middle" class="d-t s">12</text><text x="441.0" y="146.0" text-anchor="middle" class="d-t s r">12</text><circle cx="560" cy="130" r="24" class="d-box a"/><line x1="560.0" y1="106.0" x2="560.0" y2="154.0" class="d-ax"/><line x1="560.0" y1="130.0" x2="584.0" y2="130.0" class="d-ax"/><text x="549.0" y="135.0" text-anchor="middle" class="d-t b">6</text><text x="571.0" y="124.0" text-anchor="middle" class="d-t s">14</text><text x="571.0" y="146.0" text-anchor="middle" class="d-t s r">14</text><text x="300.0" y="285.0" text-anchor="middle" class="d-t s m">Each event: number | earliest time (top) | latest time (bottom, red). Blue = critical path.</text></svg><figcaption>Paper 2 network (weeks). Critical path A–B–D–F = 14 weeks; C and E share 4 weeks of float.</figcaption></figure>

**Forward pass (earliest times):** event 1 = 0; event 2 = 3; event 3 = 3 + 5 = 8; event 4 = 3 + 2 = 5; event 5 = max(8 + 4, 5 + 3) = **12**; event 6 = 12 + 2 = **14**.

**Backward pass (latest times):** event 6 = 14; event 5 = 12; event 3 = 12 − 4 = 8; event 4 = 12 − 3 = 9; event 2 = min(8 − 5, 9 − 2) = 3; event 1 = 0.

| Path | Length (weeks) |
|---|---|
| **A–B–D–F** | 3 + 5 + 4 + 2 = **14** |
| A–C–E–F | 3 + 2 + 3 + 2 = 10 |

**Critical path: A–B–D–F (events 1–2–3–5–6). Project duration = 14 weeks.**

Floats: C has total float $9 - 3 - 2 = 4$ weeks and E has $12 - 5 - 3 = 4$ weeks (shared along C–E).

*Marks: network 4, forward and backward pass 3, critical path and duration 3.*
:::

## B3 (10 marks)
Explain the steps in developing a project budget and the importance of monitoring costs.

::: answer
*Partly beyond the notes* (the notes cover cost estimates in the feasibility study, the DPR and project control).

**Steps in developing a project budget**

1. **Define the scope** and break it into a **work breakdown structure** (WBS) of work packages and activities.
2. **Schedule** the activities (network, critical path) so costs can be placed in time.
3. **Estimate the cost of each activity**: labour, materials, equipment, subcontracts (direct costs).
4. Add **indirect costs and overheads** (supervision, site facilities, insurance).
5. Add **contingency** for risk and **escalation** for inflation.
6. **Aggregate** the estimates into the total budget and a **time-phased budget** (cash-flow curve, usually S-shaped).
7. **Review and approve** the budget, and save it as the **cost baseline**.

**Importance of monitoring costs**

- Detects **cost overruns early**, while corrective action is still possible (the notes stress that most public projects suffer large time and cost overruns).
- Compares **actual against planned** spending at each review period (the project control cycle: measure, compare, correct).
- Keeps **cash flow** within the funds available.
- Shows the cost effect of **changes and delays**, and supports **time–cost decisions** such as crashing.
- Provides information for **reporting to management** and for **future estimates**.
:::

## B4 (10 marks)
Explain the components of a contractor's rate and outline competitive bidding evaluation.

::: answer
*Contractor's rates are beyond the notes; bid evaluation is in the Procurement chapter.*

**Components of a contractor's (unit) rate**

| Component | Includes |
|---|---|
| **Labour** | Basic wages plus allowances, overtime, statutory charges (social security, insurance), leave, tools; adjusted for productivity |
| **Materials** | Supplier price, transport and delivery, handling and storage, waste allowance, taxes and duties |
| **Plant and equipment** | Hire or ownership cost, fuel, operator, maintenance, mobilisation |
| **Overheads** | Site overheads (supervision, site office, utilities) and head-office overheads |
| **Profit** | The contractor's margin (a percentage) |
| **Risk / contingency** | Allowance for uncertain items |

**Competitive bid evaluation**

1. **Receive and open** bids (publicly for an ITT) at the stated time.
2. **Screening:** check compliance (complete forms, bid security, signatures, eligibility); reject non-responsive bids.
3. **Technical evaluation** against weighted criteria (understanding of need, technical approach, capability, experience, staffing, management approach, past performance), done with the client's engineers.
4. **Financial evaluation:** check arithmetic, compare prices, delivery and discounts on a **summary (bid comparison) form**, consider **life-cycle cost**.
5. Combine scores in a **weighted evaluation matrix** and rank the bidders.
6. **Recommend** the best evaluated bidder, negotiate if needed, and **award** (letter of acceptance, then contract).
:::

## B5 (10 marks)
Compare a Cost Plus contract with a Time and Materials contract, and explain how a purchase order is prepared.

::: answer
| | Cost plus (fixed fee, % fee, incentive fee) | Time and materials (T&M) |
|---|---|---|
| Payment | **Actual costs reimbursed plus a fee** (fixed, a percentage, or an incentive) | **Hours worked at an agreed hourly rate**, plus **materials at cost** plus a % fee |
| When used | Scope uncertain, accurate pricing impossible, high performance risk | Small or short jobs, staff augmentation, scope not definable |
| Client control | High (books are **audited**) | Moderate |
| Risk | Mostly on the **client** | **Least risk on the contractor**; **most expensive** for the client |
| Link to results | Incentive versions tie the fee to cost or performance | Paid for hours **whether or not the task is achieved** |
| Type | Cost reimbursable | **Hybrid** of cost-reimbursable and fixed price (fixed hourly rates) |

**Preparing a purchase order** *(beyond the notes)*:

1. Receive an approved **purchase requisition** (what is needed, quantity, when, budget code).
2. **Select the supplier** (from quotations or tender evaluation).
3. Write the **PO**: PO number and date; buyer and supplier details; item descriptions and **specifications**; quantities, **unit prices** and total; delivery address and **date**; payment terms; terms and conditions; signature of an authorised officer.
4. **Approve and issue** the PO to the supplier; the supplier's acceptance forms the contract.
5. **Follow up** delivery, **receive and inspect** the goods (goods received note), match **PO, delivery note and invoice** (three-way match), then pay.
:::

## B6 (10 marks)
Prepare a tender for installing solar panels: explain its sections and the importance of technical writing.

::: answer
*The bid package is in the Procurement chapter; the rest is beyond the notes.*

**Sections of a tender (bid) document for a solar PV installation**

1. **Invitation to Tender:** project title (e.g. supply and installation of a 50 kWp grid-tied solar PV system), client, closing date and time, place of submission, **bid security** required.
2. **Instructions / general information to bidders:** eligibility, site visit, clarification procedure, bid format, validity period, evaluation method and criteria.
3. **Terms of reference / scope of works:** survey and design, supply of panels, inverters, mounting structures, cabling and protection, installation, testing and commissioning, training, documentation, warranty and maintenance.
4. **Technical specifications:** e.g. module type and efficiency, inverter rating and certification, mounting (wind load), cable sizes, earthing and lightning protection, applicable standards (IEC 61215, IEC 62109, local wiring regulations), performance guarantees.
5. **Bill of quantities / price schedule:** itemised quantities for bidders to price.
6. **Conditions of contract:** contract type, payment terms, completion period, **performance bond**, retention, liquidated damages, defects liability, warranty.
7. **Forms:** bid form, bid security form, schedules of experience and key staff, declarations.
8. **Drawings:** site layout, roof plan, single-line diagram.

**Importance of technical writing**

- Specifications must be **clear, precise and unambiguous**, so every bidder prices the same thing and bids can be compared fairly.
- It prevents **misunderstanding, variations, claims and disputes** later.
- It sets measurable **quality and acceptance criteria** for testing and commissioning.
- Good writing makes the document **professional, complete and legally sound**.
:::
