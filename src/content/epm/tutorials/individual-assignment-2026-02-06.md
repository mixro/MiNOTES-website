**Individual assignment**, February 2026 (submitted 2 February 2026; file dated 6 February). Only the handwritten answers were provided, not the question sheet, so the questions below are **reconstructed from those answers**. Check the wording against the original sheet.

## Q1
Case study: a three-year project run with a traditional, rigid approach (with experts involved) suffered **frequent scope changes**, **stakeholder disagreements** and **schedule delays**. (i) As project manager, identify the likely causes of these problems. (ii) Was the original project management approach suitable? (iii) Recommend a better approach.

::: answer
**(i) Likely causes**

| Problem | Main causes |
|---|---|
| **Frequent scope changes** | Poor initial requirements gathering; stakeholders not aligned on objectives; **no formal change control**, so scope creep was not managed |
| **Stakeholder disagreements** | No clear communication plan or **stakeholder engagement** strategy; unclear roles and decision rights |
| **Schedule delays** | **Unrealistic timelines** and poor estimates; weak **risk management**; poor resource allocation; scope changes not re-planned |

Summarised root causes: unrealistic planning and scheduling, inadequate risk management, limited communication, and weak project governance.

**(ii) Suitability of the original approach:** *partly suitable but largely inadequate.*

- *Suitable:* a three-year framework was reasonable; involving experts was appropriate; using a project approach (not routine operations) was right.
- *Not suitable:* the **planning phase was weak** (scope and schedule not properly defined); **stakeholder management** was inadequate; **risk management** was poor; the approach was **too rigid** to absorb the changes that occurred.

**(iii) Recommended approach**

- A **more flexible (adaptive/iterative) approach** where requirements are uncertain: plan in stages, deliver in increments, review and **re-prioritise scope** at each stage, involve stakeholders throughout.
- **Strengthen the classical control tools:** a proper WBS, a **network (CPM/PERT)** and **Gantt chart** with a baseline, regular progress reviews, and a **formal change control** procedure.
- A **stakeholder management and communication plan** (who needs what information, when; how disagreements are resolved).
- A **risk register** with owners and contingency.
- **Clear governance and accountability**: a steering committee, defined roles, decision rights and reporting.
:::

## Q2
For the project below (durations in weeks): (i) draw the network diagram (activity-on-node); (ii) find the total duration; (iii) calculate the total float of each activity; (iv) identify the critical path.

| Activity | A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Duration | 7 | 9 | 10 | 8 | 5 | 8 | 5 | 8 | 9 | 8 | 18 |
| Predecessors | none | D | A, B | A | B, C, D | none | C, E | E | F | F, G, H | I, J |

::: answer
**(i) Network** (activity on node)

<figure class="fig"><svg viewBox="0 0 740 330" role="img" aria-label="Activity-on-node network for the 11-activity project (weeks). Box: ES | duration | EF on top, LS | total float | LF below. Critical path A–D–B–C–E–H–J–K = 73 weeks."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="76.0" y1="104.0" x2="98.0" y2="104.0" class="d-a" marker-end="url(#ah)"/><line x1="166.0" y1="104.0" x2="188.0" y2="104.0" class="d-a" marker-end="url(#ah)"/><path d="M 43.0 75 Q 174.0 -23.879999999999995 305.0 73" class="d-ax" marker-end="url(#ah)"/><line x1="256.0" y1="104.0" x2="278.0" y2="104.0" class="d-a" marker-end="url(#ah)"/><path d="M 223.0 75 Q 309.0 -2.280000000000001 395.0 73" class="d-ax" marker-end="url(#ah)"/><line x1="346.0" y1="104.0" x2="368.0" y2="104.0" class="d-a" marker-end="url(#ah)"/><path d="M 133.0 75 Q 264.0 -23.879999999999995 395.0 73" class="d-ax" marker-end="url(#ah)"/><line x1="436.0" y1="104.0" x2="458.0" y2="104.0" class="d-a" marker-end="url(#ah)"/><line x1="346.0" y1="104.0" x2="458.0" y2="194.0" class="d-ax" marker-end="url(#ah)"/><line x1="436.0" y1="104.0" x2="458.0" y2="194.0" class="d-ax" marker-end="url(#ah)"/><line x1="76.0" y1="284.0" x2="558.0" y2="149.0" class="d-ax" marker-end="url(#ah)"/><line x1="526.0" y1="194.0" x2="558.0" y2="149.0" class="d-ax" marker-end="url(#ah)"/><line x1="526.0" y1="104.0" x2="558.0" y2="149.0" class="d-a" marker-end="url(#ah)"/><line x1="346.0" y1="284.0" x2="658.0" y2="149.0" class="d-ax" marker-end="url(#ah)"/><line x1="626.0" y1="149.0" x2="658.0" y2="149.0" class="d-a" marker-end="url(#ah)"/><path d="M 43.0 255 Q 174.0 156.12 305.0 253" class="d-ax" marker-end="url(#ah)"/><rect x="10" y="75" width="66" height="58" rx="6" class="d-box a"/><line x1="10.0" y1="93.0" x2="76.0" y2="93.0" class="d-ax"/><line x1="10.0" y1="115.0" x2="76.0" y2="115.0" class="d-ax"/><text x="21.0" y="89.0" text-anchor="middle" class="d-t s">0</text><text x="43.0" y="89.0" text-anchor="middle" class="d-t s">7</text><text x="65.0" y="89.0" text-anchor="middle" class="d-t s">7</text><text x="21.0" y="128.0" text-anchor="middle" class="d-t s r">0</text><text x="43.0" y="128.0" text-anchor="middle" class="d-t s m">0</text><text x="65.0" y="128.0" text-anchor="middle" class="d-t s r">7</text><text x="43.0" y="109.0" text-anchor="middle" class="d-t b">A</text><rect x="100" y="75" width="66" height="58" rx="6" class="d-box a"/><line x1="100.0" y1="93.0" x2="166.0" y2="93.0" class="d-ax"/><line x1="100.0" y1="115.0" x2="166.0" y2="115.0" class="d-ax"/><text x="111.0" y="89.0" text-anchor="middle" class="d-t s">7</text><text x="133.0" y="89.0" text-anchor="middle" class="d-t s">8</text><text x="155.0" y="89.0" text-anchor="middle" class="d-t s">15</text><text x="111.0" y="128.0" text-anchor="middle" class="d-t s r">7</text><text x="133.0" y="128.0" text-anchor="middle" class="d-t s m">0</text><text x="155.0" y="128.0" text-anchor="middle" class="d-t s r">15</text><text x="133.0" y="109.0" text-anchor="middle" class="d-t b">D</text><rect x="190" y="75" width="66" height="58" rx="6" class="d-box a"/><line x1="190.0" y1="93.0" x2="256.0" y2="93.0" class="d-ax"/><line x1="190.0" y1="115.0" x2="256.0" y2="115.0" class="d-ax"/><text x="201.0" y="89.0" text-anchor="middle" class="d-t s">15</text><text x="223.0" y="89.0" text-anchor="middle" class="d-t s">9</text><text x="245.0" y="89.0" text-anchor="middle" class="d-t s">24</text><text x="201.0" y="128.0" text-anchor="middle" class="d-t s r">15</text><text x="223.0" y="128.0" text-anchor="middle" class="d-t s m">0</text><text x="245.0" y="128.0" text-anchor="middle" class="d-t s r">24</text><text x="223.0" y="109.0" text-anchor="middle" class="d-t b">B</text><rect x="280" y="75" width="66" height="58" rx="6" class="d-box a"/><line x1="280.0" y1="93.0" x2="346.0" y2="93.0" class="d-ax"/><line x1="280.0" y1="115.0" x2="346.0" y2="115.0" class="d-ax"/><text x="291.0" y="89.0" text-anchor="middle" class="d-t s">24</text><text x="313.0" y="89.0" text-anchor="middle" class="d-t s">10</text><text x="335.0" y="89.0" text-anchor="middle" class="d-t s">34</text><text x="291.0" y="128.0" text-anchor="middle" class="d-t s r">24</text><text x="313.0" y="128.0" text-anchor="middle" class="d-t s m">0</text><text x="335.0" y="128.0" text-anchor="middle" class="d-t s r">34</text><text x="313.0" y="109.0" text-anchor="middle" class="d-t b">C</text><rect x="370" y="75" width="66" height="58" rx="6" class="d-box a"/><line x1="370.0" y1="93.0" x2="436.0" y2="93.0" class="d-ax"/><line x1="370.0" y1="115.0" x2="436.0" y2="115.0" class="d-ax"/><text x="381.0" y="89.0" text-anchor="middle" class="d-t s">34</text><text x="403.0" y="89.0" text-anchor="middle" class="d-t s">5</text><text x="425.0" y="89.0" text-anchor="middle" class="d-t s">39</text><text x="381.0" y="128.0" text-anchor="middle" class="d-t s r">34</text><text x="403.0" y="128.0" text-anchor="middle" class="d-t s m">0</text><text x="425.0" y="128.0" text-anchor="middle" class="d-t s r">39</text><text x="403.0" y="109.0" text-anchor="middle" class="d-t b">E</text><rect x="460" y="75" width="66" height="58" rx="6" class="d-box a"/><line x1="460.0" y1="93.0" x2="526.0" y2="93.0" class="d-ax"/><line x1="460.0" y1="115.0" x2="526.0" y2="115.0" class="d-ax"/><text x="471.0" y="89.0" text-anchor="middle" class="d-t s">39</text><text x="493.0" y="89.0" text-anchor="middle" class="d-t s">8</text><text x="515.0" y="89.0" text-anchor="middle" class="d-t s">47</text><text x="471.0" y="128.0" text-anchor="middle" class="d-t s r">39</text><text x="493.0" y="128.0" text-anchor="middle" class="d-t s m">0</text><text x="515.0" y="128.0" text-anchor="middle" class="d-t s r">47</text><text x="493.0" y="109.0" text-anchor="middle" class="d-t b">H</text><rect x="460" y="165" width="66" height="58" rx="6" class="d-box"/><line x1="460.0" y1="183.0" x2="526.0" y2="183.0" class="d-ax"/><line x1="460.0" y1="205.0" x2="526.0" y2="205.0" class="d-ax"/><text x="471.0" y="179.0" text-anchor="middle" class="d-t s">39</text><text x="493.0" y="179.0" text-anchor="middle" class="d-t s">5</text><text x="515.0" y="179.0" text-anchor="middle" class="d-t s">44</text><text x="471.0" y="218.0" text-anchor="middle" class="d-t s r">42</text><text x="493.0" y="218.0" text-anchor="middle" class="d-t s m">3</text><text x="515.0" y="218.0" text-anchor="middle" class="d-t s r">47</text><text x="493.0" y="199.0" text-anchor="middle" class="d-t b">G</text><rect x="560" y="120" width="66" height="58" rx="6" class="d-box a"/><line x1="560.0" y1="138.0" x2="626.0" y2="138.0" class="d-ax"/><line x1="560.0" y1="160.0" x2="626.0" y2="160.0" class="d-ax"/><text x="571.0" y="134.0" text-anchor="middle" class="d-t s">47</text><text x="593.0" y="134.0" text-anchor="middle" class="d-t s">8</text><text x="615.0" y="134.0" text-anchor="middle" class="d-t s">55</text><text x="571.0" y="173.0" text-anchor="middle" class="d-t s r">47</text><text x="593.0" y="173.0" text-anchor="middle" class="d-t s m">0</text><text x="615.0" y="173.0" text-anchor="middle" class="d-t s r">55</text><text x="593.0" y="154.0" text-anchor="middle" class="d-t b">J</text><rect x="660" y="120" width="66" height="58" rx="6" class="d-box a"/><line x1="660.0" y1="138.0" x2="726.0" y2="138.0" class="d-ax"/><line x1="660.0" y1="160.0" x2="726.0" y2="160.0" class="d-ax"/><text x="671.0" y="134.0" text-anchor="middle" class="d-t s">55</text><text x="693.0" y="134.0" text-anchor="middle" class="d-t s">18</text><text x="715.0" y="134.0" text-anchor="middle" class="d-t s">73</text><text x="671.0" y="173.0" text-anchor="middle" class="d-t s r">55</text><text x="693.0" y="173.0" text-anchor="middle" class="d-t s m">0</text><text x="715.0" y="173.0" text-anchor="middle" class="d-t s r">73</text><text x="693.0" y="154.0" text-anchor="middle" class="d-t b">K</text><rect x="10" y="255" width="66" height="58" rx="6" class="d-box"/><line x1="10.0" y1="273.0" x2="76.0" y2="273.0" class="d-ax"/><line x1="10.0" y1="295.0" x2="76.0" y2="295.0" class="d-ax"/><text x="21.0" y="269.0" text-anchor="middle" class="d-t s">0</text><text x="43.0" y="269.0" text-anchor="middle" class="d-t s">8</text><text x="65.0" y="269.0" text-anchor="middle" class="d-t s">8</text><text x="21.0" y="308.0" text-anchor="middle" class="d-t s r">38</text><text x="43.0" y="308.0" text-anchor="middle" class="d-t s m">38</text><text x="65.0" y="308.0" text-anchor="middle" class="d-t s r">46</text><text x="43.0" y="289.0" text-anchor="middle" class="d-t b">F</text><rect x="280" y="255" width="66" height="58" rx="6" class="d-box"/><line x1="280.0" y1="273.0" x2="346.0" y2="273.0" class="d-ax"/><line x1="280.0" y1="295.0" x2="346.0" y2="295.0" class="d-ax"/><text x="291.0" y="269.0" text-anchor="middle" class="d-t s">8</text><text x="313.0" y="269.0" text-anchor="middle" class="d-t s">9</text><text x="335.0" y="269.0" text-anchor="middle" class="d-t s">17</text><text x="291.0" y="308.0" text-anchor="middle" class="d-t s r">46</text><text x="313.0" y="308.0" text-anchor="middle" class="d-t s m">38</text><text x="335.0" y="308.0" text-anchor="middle" class="d-t s r">55</text><text x="313.0" y="289.0" text-anchor="middle" class="d-t b">I</text></svg><figcaption>Activity-on-node network for the 11-activity project (weeks). Box: ES | duration | EF on top, LS | total float | LF below. Critical path A–D–B–C–E–H–J–K = 73 weeks.</figcaption></figure>

**(ii) Forward pass** (ES = largest EF of the predecessors):

- A 0–7; D 7–15; B 15–24; C max(7, 24) = 24–34; E max(24, 34, 15) = 34–39
- G max(34, 39) = 39–44; H 39–47; F 0–8; I 8–17
- J max(8, 44, 47) = 47–55; K max(17, 55) = 55–73

**Total duration = 73 weeks.**

**(iii) Backward pass and floats** (LF = smallest LS of the successors; TF = LS − ES)

| Activity | Dur. | ES | EF | LS | LF | Total float | Free float |
|---|---|---|---|---|---|---|---|
| A | 7 | 0 | 7 | 0 | 7 | 0 | 0 |
| B | 9 | 15 | 24 | 15 | 24 | 0 | 0 |
| C | 10 | 24 | 34 | 24 | 34 | 0 | 0 |
| D | 8 | 7 | 15 | 7 | 15 | 0 | 0 |
| E | 5 | 34 | 39 | 34 | 39 | 0 | 0 |
| F | 8 | 0 | 8 | 38 | 46 | **38** | 0 |
| G | 5 | 39 | 44 | 42 | 47 | **3** | 3 |
| H | 8 | 39 | 47 | 39 | 47 | 0 | 0 |
| I | 9 | 8 | 17 | 46 | 55 | **38** | 38 |
| J | 8 | 47 | 55 | 47 | 55 | 0 | 0 |
| K | 18 | 55 | 73 | 55 | 73 | 0 | 0 |

F and I share their 38 weeks of float along the chain F–I.

**(iv) Critical path: A → D → B → C → E → H → J → K**, $7 + 8 + 9 + 10 + 5 + 8 + 8 + 18 =$ **73 weeks**.

> These results agree with the handwritten answer (duration 73 weeks; floats G = 3, F = 38, I = 38; the same critical path).
:::
