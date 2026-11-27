# Starting induction motors

*Class notes · EEU 08102 Electric Drives*

A three-phase induction motor is **self-starting** in theory. Its three stator windings, fed from a three-phase supply, create a **rotating magnetic field** that pulls the rotor round.

So a starter is **not** there to create starting torque. It is used to:

1. **reduce the heavy starting current** and stop the motor overheating
2. provide **overload and no-voltage protection**

Common methods:

1. Direct-on-line (DOL) starter
2. Star–delta starter
3. Auto-transformer starter
4. Rotor impedance (rotor resistance) starter
5. Power-electronic (soft) starter

## 1. Direct-on-line (DOL) starter

- The **simplest and cheapest** starter, usually used for **squirrel-cage** motors.
- It connects the motor terminals **directly to the full supply voltage**.
- Starting current is very large, normally **6 to 8 times rated current**.
- Starting torque is about **0.75 to 2 times full-load torque**.
- Used only for motors rated **below about 5 kW**.
- It contains protection for both the **motor and the operator**.

**Circuit**

| Power circuit | Control circuit |
|---|---|
| Supply L1, L2, L3 → fuses F1 → main contactor K1M → thermal overload relay F2 → motor | L1 → fuse → overload contact F2 (NC) → stop button S2 (NC) → start button S1 (NO), with a K1M **holding contact** in parallel → K1M coil |

Pressing S1 energises K1M, which closes the main contacts and its own holding contact, so the motor keeps running when S1 is released. Pressing S2, or an overload tripping F2, drops the coil out.

### Effects of DOL starting on voltage, torque and current

*From the Group 16 assignment on DOL starters.*

| Quantity | What happens | Consequences |
|---|---|---|
| **Voltage** | The motor gets the full line voltage at once | Large inrush current and **voltage dips** on the supply, which affect other equipment on the same circuit |
| **Torque** | Starting torque is high, because $T \propto V^2$ | **Good:** quick start, and it overcomes heavy starting loads such as pumps, compressors and conveyors. **Bad:** sudden jerks put **mechanical stress** on shafts, bearings, couplings, belts and gears |
| **Current** | About **6 to 8 times full-load current** at the instant of starting | Voltage drop in the supply network, and **thermal stress** on the windings |

The current is so high because there is **no back EMF** at standstill. The slip is 1, so the rotor frequency equals the supply frequency, and the only limit is the motor's small leakage impedance.

## 2. Star–delta starter

The windings are connected in **star** to start and switched to **delta** to run.

<figure class="fig"><svg viewBox="0 0 600 315" role="img" aria-label="Star-delta starting: windings connected in star at start (phase voltage VL over root 3), then switched to delta for running."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="150" y1="150" x2="150.0" y2="60.0" class="d-a w" /><circle cx="150.0" cy="60.0" r="3.5" class="d-dot"/><text x="150.0" y="48.0" text-anchor="middle" class="d-t s">L1</text><line x1="150" y1="150" x2="227.94228634059948" y2="195.0" class="d-a w" /><circle cx="227.94228634059948" cy="195.0" r="3.5" class="d-dot"/><text x="245.94228634059948" y="217.0" text-anchor="middle" class="d-t s">L2</text><line x1="150" y1="150" x2="72.05771365940052" y2="195.0" class="d-a w" /><circle cx="72.05771365940052" cy="195.0" r="3.5" class="d-dot"/><text x="54.05771365940052" y="217.0" text-anchor="middle" class="d-t s">L3</text><circle cx="150" cy="150" r="3.5" class="d-dot"/><text x="150" y="280" text-anchor="middle" class="d-t b">Star at start</text><text x="150" y="300" text-anchor="middle" class="d-t s m">phase voltage = V<tspan dy="4" font-size="10">L</tspan><tspan dy="-4">/√3</tspan></text><line x1="450.0" y1="60.0" x2="527.9422863405995" y2="195.0" class="d-c w" /><line x1="527.9422863405995" y1="195.0" x2="372.0577136594005" y2="195.0" class="d-c w" /><line x1="372.0577136594005" y1="195.0" x2="450.0" y2="60.0" class="d-c w" /><circle cx="450.0" cy="60.0" r="3.5" class="d-dot"/><text x="450.0" y="48.0" text-anchor="middle" class="d-t s">L1</text><circle cx="527.9422863405995" cy="195.0" r="3.5" class="d-dot"/><text x="545.9422863405995" y="217.0" text-anchor="middle" class="d-t s">L2</text><circle cx="372.0577136594005" cy="195.0" r="3.5" class="d-dot"/><text x="354.0577136594005" y="217.0" text-anchor="middle" class="d-t s">L3</text><text x="450" y="280" text-anchor="middle" class="d-t b">Delta when running</text><text x="450" y="300" text-anchor="middle" class="d-t s m">phase voltage = V<tspan dy="4" font-size="10">L</tspan></text><line x1="255" y1="150" x2="345" y2="150" class="d-ax"  marker-end="url(#ah)"/><text x="300" y="140" text-anchor="middle" class="d-t s m">near full speed</text></svg><figcaption>Star–delta starting. In star each winding gets V<sub>L</sub>/√3, so starting line current and starting torque both fall to <b>one third</b> of their direct-on-line values.</figcaption></figure>

- In star, each phase gets $V_L/\sqrt3$ instead of $V_L$.
- The line current drawn at starting falls to **one third** of the direct-on-line (delta) value, and so does the starting torque.
- The motor must be designed to **run in delta**.

It uses three contactors and an overload relay:

| Device | Role |
|---|---|
| K2M | Main contactor |
| K3M | Delta contactor |
| K1M | Star contactor |
| F2 | Thermal overload relay |

$$I_{st,\,Y\Delta} = \frac{1}{3}\,I_{st,\,DOL}$$

## 3. Auto-transformer starter

- Works on the same principle as star–delta, but the voltage is reduced by an **auto-transformer** with a chosen tapping $x$.
- More **expensive and complicated**.
- Suitable for **both star- and delta-connected** motors.
- Star–delta can only reduce the voltage by $1/\sqrt3$; an auto-transformer can use any tapping.

With tapping $x$, the motor current falls to $x\,I_{sc}$ and the **line current** to $x^2 I_{sc}$:

$$I_{st,\,line} = x^2\,I_{sc}, \qquad T_{st} \propto x^2$$

## 4. Rotor resistance starter (slip-ring motors)

External resistance is added to the rotor circuit at starting. This **limits the current and raises the starting torque**. The resistance is cut out step by step as the motor speeds up.

## 5. Stator resistance starter

Resistors in series with the stator reduce the voltage across the windings to a fraction $K$ of normal. Then

$$\frac{T_{st}}{T_{FL}} = K^2\left(\frac{I_{sc}}{I_{FL}}\right)^2 s_{FL}$$

## Sizing a starter

The class examples size each part from the **full-load current**:

$$I_{FL} = \frac{P_o}{\sqrt3\,V_L\,\text{pf}\,\eta}$$

| Item | Rule used in class |
|---|---|
| Cable | $1.25 \times I_{FL}$ (125% safety factor), then pick the next standard size |
| Circuit breaker (MCCB) | $1.5 \times I_{FL}$ |
| Thermal overload relay | Setting range $0.8\,I_{FL}$ to $1.2\,I_{FL}$ (often set near $1.15\,I_{FL}$) |
| Main contactor in a star–delta starter | Carries phase current, $I_{FL}/\sqrt3$ |
| Contactor category | AC-3 (squirrel-cage motors) |
| Cable voltage drop | Below 5% of the supply voltage |

## Worked examples

> **Example 1. Maximum motor size for a limited supply.** A 3-phase cage motor is to be installed where the line current from a **400 V** supply must not exceed **120 A**. Starting current is **6 times** full-load current. Find the largest full-load kVA when the motor is (i) direct-on-line, (ii) on an auto-transformer with a 60% tapping, (iii) on a star–delta starter.
>
> (i) DOL: $120 = 6I_{FL} \Rightarrow I_{FL} = 20$ A; $S = \sqrt3 \times 400 \times 20 = 13.86$ kVA
>
> (ii) Auto-transformer: $120 = (0.6)^2(6I_{FL}) \Rightarrow I_{FL} = 55.55$ A; $S = \sqrt3 \times 400 \times 55.55 = 38.49$ kVA
>
> (iii) Star–delta: $120 = \tfrac13(6I_{FL}) = 2I_{FL} \Rightarrow I_{FL} = 60$ A; $S = \sqrt3 \times 400 \times 60 = 41.56$ kVA

> **Example 2. Sizing a star–delta starter.** A **15 kW, 400 V, 50 Hz, 4-pole**, delta-connected cage motor runs continuously with $\eta = 88\%$ and pf $= 0.8$. Find (i) the starting current with a star–delta starter (DOL starting factor 5), (ii) full-load torque at 4% slip, (iii) the switching devices, (iv) cables, (v) protective devices.
>
> $I_{FL} = \dfrac{15\,000}{\sqrt3 \times 400 \times 0.8 \times 0.88} = 30.75$ A, $\quad I_{DOL} = 5 \times 30.75 = 153.77$ A
>
> (i) $I_{Y\Delta} = \tfrac13 \times 153.77 = 51.25$ A
>
> (ii) $N_s = 120 \times 50/4 = 1500$ rpm, $N = 1500(1 - 0.04) = 1440$ rpm, $\omega = 2\pi(1440)/60 = 150.8$ rad/s, $T_{FL} = 15\,000/150.8 = 99.47$ N·m
>
> (iii) Main contactor: $30.75/\sqrt3 = 17.8$ A → **AC-3, 18 A, 400 V, 15 kW**
>
> (iv) Cable: $1.25 \times 30.75 = 38.44$ A → **6 mm²**
>
> (v) Circuit breaker: $1.5 \times 30.75 = 46.1$ A → **50 A, 400 V**. Overload relay: $0.8 \times 30.75 = 24.6$ A to $1.2 \times 30.75 = 36.9$ A → a **24 to 40 A** relay

> **Example 3. Sizing an auto-transformer starter.** A **25 hp, 400 V, 50 Hz** motor has $\eta = 90\%$ and pf $= 0.85$. It starts on an auto-transformer with a **65%** tapping (DOL factor 6). Find the starting current and size the contactors, protection and cables.
>
> $I_{FL} = \dfrac{25 \times 746}{\sqrt3 \times 400 \times 0.85 \times 0.9} = 35.17$ A, $\quad I_{DOL} = 6 \times 35.17 = 211.04$ A
>
> **Starting (line) current:** $K^2 I_{DOL} = (0.65)^2 \times 211.04 = 89.17$ A
>
> | Item | Current | Selected |
> |---|---|---|
> | Starter contactor (motor current $K\,I_{DOL}$) | $0.65 \times 211.04 = 137.18$ A | AC-3, 150 A, 400 V |
> | Run contactor ($1.25\,I_{FL}$) | $43.97$ A | AC-3, 50 A, 400 V |
> | Main contactor (line current $K^2 I_{DOL}$) | $89.17$ A | AC-3, 100 A, 400 V |
> | MCCB ($1.5\,I_{FL}$) | $52.76$ A | 55 A, 400 V |
> | Overload relay ($0.8$ to $1.2\,I_{FL}$) | $28.14$ to $42.21$ A | 28 to 45 A |
> | Cable to main contactor | $89.17$ A | 16 mm² |
> | Cable through run contactor | $43.97$ A | 10 mm² |
> | Cable through starter contactor | $137.18$ A | 25 mm² |

> **Example 4. Designing a 5-step rotor resistance starter.** A 3-phase, 400 V, 50 Hz, 4-pole, star-connected **slip-ring** motor has a standstill rotor EMF of **120 V per phase**. Rotor resistance is **0.02 Ω** per phase (standstill reactance 0.1 Ω). Design a 5-step starter that limits the starting current to **100 A**.
>
> Total resistance: $R_T = E/I_{st} = 120/100 = 1.2\ \Omega$. External resistance: $R_{ext} = 1.2 - 0.02 = 1.18\ \Omega$. Equal steps: $1.18/5 = 0.236\ \Omega$.
>
> | Step | External resistance left in circuit |
> |---|---|
> | 1 | 1.180 Ω |
> | 2 | 0.944 Ω |
> | 3 | 0.708 Ω |
> | 4 | 0.472 Ω |
> | 5 | 0.236 Ω |
> | Run | 0 Ω |
>
> This is the simple equal-step method used in class. It neglects the rotor reactance. Textbooks often grade the steps geometrically so that the current swings between the same two limits on every step.

> **Example 5. Stator resistance starting torque.** A small induction motor has a short-circuit current of **5 times** full-load current and a full-load slip of **5%**. Find the starting torque if a stator resistance starter reduces the voltage to **60%**.
>
> $I_{st} = K I_{sc} = 0.6 \times 5I_{FL} = 3I_{FL}$
>
> $\dfrac{T_{st}}{T_{FL}} = K^2\left(\dfrac{I_{sc}}{I_{FL}}\right)^2 s_{FL} = (0.6)^2(5)^2(0.05) = 0.45$, so $T_{st} = 0.45\,T_{FL}$

> **Example 6. Sizing a DOL starter (Group 16 assignment).** A **7.5 kW, 400 V** motor has $\eta = 90\%$ and pf $= 0.85$. Size its overload relay, breaker, contactor and cable.
>
> $I_{FL} = \dfrac{7500}{\sqrt3 \times 400 \times 0.85 \times 0.9} = 14.15$ A
>
> | Item | Rule used by the group | Result | Selected |
> |---|---|---|---|
> | Overload relay | $1.15\,I_{FL}$ | 16.3 A | Relay with a range covering 16.3 A (e.g. 14 to 18 A) |
> | Contactor | $1.25\,I_{FL}$ | 17.7 A | AC-3, 18 A (e.g. Schneider LC1D18) |
> | Cable | $1.5\,I_{FL}$ | 21.2 A | 2.5 mm² copper |
> | Breaker | Must ride through the 6 to 8 × $I_{FL}$ inrush | 85 to 113 A inrush | See the note below |
>
> **Check the voltage drop** after choosing the cable. It should be **below 5%** of the supply voltage. The group's simple check is $V_d = I\,R\,L$, using the cable's resistance per metre and its length $L$. For a three-phase circuit, $V_d = \sqrt3\,I\,L\,(R\cos\phi + X\sin\phi)$ is more exact.
>
> **Note on the breaker.** The group sizes the breaker at 6 to 8 × $I_{FL}$. The inrush is the current the breaker must **not trip on**, not its rating. In practice you choose a **motor-protection breaker** (or a curve D MCB) rated about 1.25 to 1.5 × $I_{FL}$, here 20 A, whose magnetic trip sits above the inrush. The class rule ($1.5\,I_{FL} \approx 21$ A) gives the same answer.

> **Corrections to the class notes.** In Example 1 (i), $\sqrt3 \times 400 \times 20 = 13.86$ kVA, not 12.86 kVA. In Example 2 (v), 46.1 A comes from a factor of 1.5, not 1.25. In Example 3, the run contactor current works out to 43.97 A. In Example 5, the result 0.45 is the **torque** ratio $T_{st}/T_{FL}$, not a current ratio.
