**In-class group assignment**, Friday 20 February 2026. Ten questions, each with two short parts (a, b) and an applied part (c). All answers come from the notes. The question sheet is in **Past papers**.

## Q1 Gantt chart
(a) Who developed the Gantt chart, and what is its primary purpose? (b) What does the length of a horizontal bar represent? (c) For the "DIT Annual Engineering Week", tasks are A Secure venues (10 days), B Invite speakers (15 days) and C Promote event (20 days), all starting on day 1. Sketch a simple Gantt chart.

::: answer
**(a)** **Henry L. Gantt** (1861–1919), around **1917**. Its purpose is **scheduling and reporting the progress** of a project: each task is shown against a time scale with its start and finish.

**(b)** The **duration of the task** (the time it needs). The width of the bar has no meaning.

**(c)**

<figure class="fig"><svg viewBox="0 0 620 235" role="img" aria-label="Gantt chart for DIT Engineering Week, all tasks starting on day 1 (0 on the scale). The circles A1 (main hall booked) and A2 (lab spaces confirmed) turn it into a milestone chart; the dates shown are examples."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="130.0" y="48.0" text-anchor="end" class="d-t s">A  Secure venues</text><rect x="140" y="34" width="220" height="22" rx="5" class="d-box a"/><text x="130.0" y="94.0" text-anchor="end" class="d-t s">B  Invite speakers</text><rect x="140" y="80" width="330" height="22" rx="5" class="d-box a"/><text x="130.0" y="140.0" text-anchor="end" class="d-t s">C  Promote event</text><rect x="140" y="126" width="440" height="22" rx="5" class="d-box a"/><circle cx="250" cy="45" r="8" class="d-box b"/><text x="250.0" y="22.0" text-anchor="middle" class="d-t s b">A1</text><circle cx="360" cy="45" r="8" class="d-box b"/><text x="360.0" y="22.0" text-anchor="middle" class="d-t s b">A2</text><line x1="140.0" y1="180.0" x2="594.0" y2="180.0" class="d-ax" marker-end="url(#ah)"/><line x1="140.0" y1="180.0" x2="140.0" y2="185.0" class="d-ax"/><text x="140.0" y="202.0" text-anchor="middle" class="d-t s m">0</text><line x1="250.0" y1="180.0" x2="250.0" y2="185.0" class="d-ax"/><text x="250.0" y="202.0" text-anchor="middle" class="d-t s m">5</text><line x1="360.0" y1="180.0" x2="360.0" y2="185.0" class="d-ax"/><text x="360.0" y="202.0" text-anchor="middle" class="d-t s m">10</text><line x1="470.0" y1="180.0" x2="470.0" y2="185.0" class="d-ax"/><text x="470.0" y="202.0" text-anchor="middle" class="d-t s m">15</text><line x1="580.0" y1="180.0" x2="580.0" y2="185.0" class="d-ax"/><text x="580.0" y="202.0" text-anchor="middle" class="d-t s m">20</text><text x="360.0" y="224.0" text-anchor="middle" class="d-t s">Days</text></svg><figcaption>Gantt chart for DIT Engineering Week, all tasks starting on day 1 (0 on the scale). The circles A1 (main hall booked) and A2 (lab spaces confirmed) turn it into a milestone chart; the dates shown are examples.</figcaption></figure>

The three bars all start at day 0 (the start of day 1) and end on days 10, 15 and 20; the event lasts **20 days**. (Ignore the circles until Question 2.)
:::

## Q2 Milestone chart
(a) What key improvement does a milestone chart offer over a simple Gantt chart? (b) How is a milestone shown? (c) For task A you identify milestones A1 (main hall booked) and A2 (all lab spaces confirmed). How would you add them to the Gantt chart?

::: answer
**(a)** It breaks a task into **phases** and marks the **completion of each phase** (an event), so **progress within a task can be monitored**, not just its start and finish.

**(b)** As a **circle** (a symbol) on the task's bar at the date the phase should be complete.

**(c)** Place a circle labelled **A1** on bar A at the date the main hall should be booked (e.g. day 5), and a circle **A2** at the date all labs should be confirmed (at or before day 10, the end of A), as in the figure above. A1 must be reached before A2, showing the sequence within task A.
:::

## Q3 Limitations
(a) List two limitations of the bar (Gantt) chart. (b) List two weaknesses of the milestone chart. (c) Task C (promote event) cannot start until B (invite speakers) is finished, because the promotional material needs the speakers' names. Which major limitation of the Gantt chart does this reveal?

::: answer
**(a)** It does **not show interrelationships** between tasks (so you cannot see how an overrun affects completion); it is **hard to handle a large number of tasks** (complex projects).

**(b)** Any two: it does not show **interdependence between tasks**; it does not show **critical activities**; it ignores **uncertainty**; it is **cumbersome** for large projects.

**(c)** It reveals that the Gantt chart **cannot show dependencies between tasks**. The chart shows C starting on day 1, but it really depends on B, so C must start on day 16 and finish on day 35. The chart gave a wrong 20-day duration and gave no warning; a **network** (with B → C) would show this.
:::

## Q4 Networks
(a) What is the main advantage of network diagrams over bar and milestone charts? (b) What are the two best-known techniques for network analysis? (c) What was the key difference in how PERT and CPM originally treated activity time estimates?

::: answer
**(a)** A network shows the **interrelationships between all activities and milestones** in the whole project, so the **critical path**, the **floats** and the effect of any delay on completion can be found.

**(b)** **PERT** (Programme Evaluation and Review Technique) and **CPM** (Critical Path Method), both developed in 1956–58.

**(c)** **CPM** treats activity times as **deterministic** (one estimate); **PERT** treats them as **probabilistic**, using three estimates combined as $T_E = (T_O + 4T_M + T_P)/6$.
:::

## Q5 Notations
(a) What are the two notations used in network diagrams? (b) In Activity-on-Arrow, what do the arrow and the circle represent? (c) What is the purpose of a dashed "dummy" activity, and what are its time and resource requirements?

::: answer
**(a)** **Activity-on-Arrow (AOA)** and **Activity-on-Node (AON)**.

**(b)** The **arrow is the activity** (the work); the **circle (node) is an event**: the start of one activity or the completion of another.

**(c)** A dummy shows a **logical (precedence) relationship only**, e.g. that D needs both A and C while B needs only A, or keeps two activities from sharing the same head and tail events. It needs **zero time and zero resources (cost)**.
:::

## Q6 Financial measures
(a) What is the Benefit–Cost Ratio also known as, and what does a ratio greater than 1 mean? (b) What does the IRR represent? (c) A project has a B–C ratio of 1.2, an IRR of 15% against a required 12%, and a positive NPV. What can you conclude?

::: answer
**(a)** The **Profitability Index (PI)**. $B/C > 1$ means the present value of the returns **exceeds** the present value of the investments: the project is profitable.

**(b)** The **discount rate at which NPV = 0** (present value of returns = present value of investments): the project's own rate of return.

**(c)** All three measures agree: **NPV > 0**, **B/C = 1.2 > 1**, and **IRR 15% > 12%**. The project is **financially viable** and should be accepted on financial grounds: it returns 1.2 shillings in present value for every shilling invested and earns 3 points more than required. (Non-financial factors and risk are still to be checked.)
:::

## Q7 Economic benefits
(a) Beyond financial returns, name two economic benefits analysed in a feasibility study. (b) What do the "Management Aspects" of a feasibility study cover? (c) The mango project will create 100 seasonal jobs and save foreign exchange by reducing juice imports. Classify these as financial or economic benefits.

::: answer
**(a)** Any two: **employment generation**; **economic development of the project area**; **foreign-exchange savings** (import substitution) or **earnings** (exports).

**(b)** Background of the **promoters**, management philosophy, **organisation and staffing** for implementation and operation, decentralisation and delegation, **systems and procedures**, the method of execution, and **accountability**.

**(c)** Both are **economic benefits**. The 100 jobs and the foreign-exchange savings benefit the **economy and society**, not the company's own cash flows; they do not appear in the company's financial return (NPV, IRR). They count in economic appraisal and social cost–benefit analysis.
:::

## Q8 Feasibility, appraisal, DPR
(a) What is the key difference between the focus of a Feasibility Study Report and an Appraisal Note? (b) What is the final output of project formulation, the blueprint for implementation? (c) After a positive appraisal, the mango company prepares a document with detailed design drawings, machinery specifications and itemised cost estimates. Name it and its primary function.

::: answer
**(a)** The **feasibility report** is prepared (often by the promoters) to **show whether the project is viable**: market, technical, financial, economic, risk and management aspects. The **appraisal note** results from a **critical, independent examination** of the whole proposal, going beyond the feasibility report, to support the **investment decision**.

**(b)** The **Detailed Project Report (DPR)**.

**(c)** The **Detailed Project Report (DPR)**. Its function is to be the **blueprint for implementation**: it gives all the details (designs, specifications, detailed costs) needed to execute the project.
:::

## Q9 Implementation time frame
(a) Why is the time frame for implementation important in financial appraisal? (b) How can delays affect viability? (c) The mango project was planned for 12 months but will now take 18. Explain the negative financial impact, even if the construction cost stays the same.

::: answer
**(a)** The time frame determines **pre-operative expenses** and **cost escalation**, and when the returns start, so it directly affects **profitability and viability**.

**(b)** Delays raise costs (escalation, interest during construction, overheads) and **postpone the returns**, so their present value falls; the NPV and IRR fall and the pay-back period lengthens. A marginal project can become unviable.

**(c)** Even with the same construction cost:

- Revenue starts **6 months later**, so every future inflow is **discounted more**, lowering the NPV and IRR.
- **Interest during construction** on loans runs for 6 more months, with no income to pay it.
- **Pre-operative expenses** (staff, site overheads, insurance) continue for longer.
- The pay-back period becomes longer; market opportunities (a mango season) may be lost.
:::

## Q10 Social cost–benefit analysis
(a) What is SCBA and its main objective? (b) Name the two main approaches. (c) A coal-fired power plant gives cheap electricity (social benefit) but causes air pollution and health problems (social cost). What is the fundamental challenge for SCBA?

::: answer
**(a)** **Social cost–benefit analysis** evaluates a project **from society's point of view**: its social costs and benefits, which often differ from its monetary costs and revenues. The objective is to decide whether the project **improves the welfare of society** as a whole (economic rate of return).

**(b)** The **UNIDO method** (values at economic, or shadow, prices) and the **Little–Mirrlees (L–M) approach** (classifies inputs and outputs into traded goods, non-traded goods and labour).

**(c)** **Valuing the non-market effects in money terms** so they can be compared: putting a monetary value on pollution, illness and lives (and on the wider benefit of cheap power), choosing shadow prices, and weighing benefits to some groups against costs to others. These values are uncertain and partly ethical judgements, so the decision depends heavily on assumptions.
:::
