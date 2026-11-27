These are the **solutions and marking schemes** for a test and a final exam (paper EET 06208). The file has the answers only, not the question papers, so each question below is **worded from its answer**. Marks are shown where the scheme gives them. The original scan is in **Past papers**.

Two of the long questions are the same as Tutorial II questions 3 and 8.

## Test · Q1 (2 marks)
What happens if a machine runs for a long time at a temperature higher than specified?

::: answer
The windings suffer **thermal breakdown of the insulating materials**.
:::

## Test · Q2 (2 marks)
Sketch the heating curve of a motor starting from its initial temperature, and give its equation.

::: answer
An exponential rise towards the final value $\theta_m$:

$$\theta = \theta_m\left(1 - e^{-t/\tau_d}\right)$$

where $\theta$ is the temperature rise (°C), $\theta_m$ the maximum (final) temperature rise, $\tau_d$ the heating time constant (s), and $t$ the time (s). The curve reaches 63.2% of $\theta_m$ at $t = \tau_d$.
:::

## Test · Q3 (2 marks)
Give four types of enclosure commonly used for electric motors, and where each is used.

::: answer
Any four, ½ mark each:

| Enclosure | Use |
|---|---|
| Open type | Closed rooms where only authorised people have access |
| Screen protected | Has openings for cooling air, covered by screens |
| Drip proof | Protected against dripping water |
| Splash proof | Protected against splashing and falling liquid |
| Totally enclosed | Protected against dust |
| Totally enclosed fan cooled (TEFC) | Dusty places such as cement plants |
| Pipe ventilated | Very dusty surroundings; clean air piped in |
| Flame proof | Areas with a fire or explosion risk |
:::

## Test · Q4 (2 marks)
Draw a block diagram showing the elements of an electric drive.

::: answer
**Main supply → controller → power converter → motor → load.**

- The **controller** takes the reference input (torque, speed or position).
- **Feedback** goes back to the controller from the motor (torque, speed, position) and from the load (pressure, torque, temperature).
- The supply also feeds the controller.
:::

## Test · Q5 (2 marks)
What do these terms mean in motor selection: (a) short-time rating, (b) intermittent rating?

::: answer
- **(a) Short-time rating:** the motor runs at constant load for a **short period**, followed by a **long rest**, long enough to cool back to its initial temperature.
- **(b) Intermittent rating:** the motor runs at constant load for a **fixed time**, then rests, and the cycle **repeats**.
:::

## Test · Q6 (2 marks)
Give two requirements that must be satisfied when selecting a motor for a driving purpose.

::: answer
Any two:

1. The motor's rating should match the **mechanical work** needed by the driven machine.
2. It must drive the load satisfactorily under both **steady-state and transient** conditions.
3. It must **withstand short-time overloads**.
:::

## Test · Q7 (2 marks)
Why is a motor's rating called a continuous rating?

::: answer
Because the motor delivers that power **continuously over an extended period** without exceeding its permitted temperature.
:::

## Test · Q8 (2 marks)
What is the difference between manual and automatic control?

::: answer
- **Manual control** uses **pilot devices** that a person operates: push buttons, rotary knobs, foot switches, control wheels.
- **Automatic control** uses **sensing devices**: float switches, pressure switches, limit switches, proximity detectors and photoelectric detectors, connected through suitable electronic or electric circuits.
:::

## Test · Q9 (2 marks)
Give four types of power converter used for speed control of electric motors.

::: answer
Controlled rectifiers, inverters, choppers and cyclo-converters (½ mark each).
:::

## Test · Q10 (2 marks)
Sketch the torque–speed characteristics showing constant speed, constant torque, constant power and soft speed characteristics.

::: answer
On axes of speed $\omega$ (vertical) and torque $T$ (horizontal):

- **Constant speed:** a horizontal line (synchronous motor).
- **Soft speed:** a line drooping steeply as torque rises (series motor).
- **Constant torque:** a vertical line (torque fixed whatever the speed).
- **Constant power (HP):** a hyperbola, $T\omega$ = constant.
:::

## Test · Q11 (12 marks)
A cylindrical motor is 75 cm in diameter and 120 cm long. It has mass 450 kg, specific heat 700 J/kg·°C, output 15 hp, heat-transfer coefficient 12 W/m²·°C, and efficiency 90%. Find (a) the final temperature rise and the heating time constant, and (b) the output that gives the same temperature rise if the heat-transfer coefficient becomes 20 W/m²·°C.

::: answer
**(a)** Cooling surface: $A = \pi dl = \pi(0.75)(1.2) = 0.9\pi = 2.83$ m²

$P_o = 15 \times 746 = 11\,190$ W, $\quad P_{in} = P_o/\eta = 12\,433$ W, $\quad$ losses $W = 1243$ W

$$\theta_m = \frac{W}{A\lambda} = \frac{1243}{0.9\pi \times 12} = 36.65\ \text{°C}$$

$$\tau_d = \frac{Gs}{A\lambda} = \frac{450 \times 700}{0.9\pi \times 12} = 9284\ \text{s} = 2.58\ \text{h}$$

**(b)** With $\lambda = 20$ and the same $\theta_m$: $W = A\lambda\theta_m = 0.9\pi \times 20 \times 36.65 = 2072.5$ W

$$\eta = \frac{P_o}{P_o + W} \Rightarrow 0.9(P_o + 2072.5) = P_o \Rightarrow P_o = 18\,653\ \text{W} = 25\ \text{hp}$$

*The scan writes η as "0.4" in part (b), but the working uses 0.9.*
:::

## Test · Q12 (12 marks)
(a) What is a torque transformer? (b) Draw a motor–load connection through a torque transformer and state the laws that govern it. (c) Give the general torque equation and the resultant mechanical constants.

::: answer
**(a)** A **gear system** whose **teeth ratio** acts like the **turns ratio** of an electrical transformer. It transmits mechanical power between the motor and the load.

**(b)** Motor (inertia $J_m$, torque $T_1$, speed $\omega_1$, gear teeth $N_1$, friction $B_1$) drives the load (inertia $J_2$, torque $T_2$, speed $\omega_2$, teeth $N_2$, friction $B_2$). The laws are:

1. **Power is the same on both sides:** $T_1\omega_1 = T_2\omega_2$
2. **Speed is inversely proportional to teeth number:** $\dfrac{\omega_1}{\omega_2} = \dfrac{N_2}{N_1}$

**(c)** Referred to the motor shaft:

$$J\frac{d\omega_1}{dt} + B\omega_1 = T_1 - \frac{N_1}{N_2}T_2$$

$$J = J_m + \left(\frac{N_1}{N_2}\right)^2J_2, \qquad B = B_1 + \left(\frac{N_1}{N_2}\right)^2B_2$$

*The scan squares the ratio on $T_2$ as well. Load torque refers through the ratio itself, $N_1/N_2$; only inertia and friction use the square.*
:::

## Test · Q13 (20 marks)
A 50 hp DC shunt motor drives a milling machine at 1500 rpm. Motor inertia is 600 kg·m² and load inertia 1200 kg·m². If the starting current is limited to twice full-load current, find the minimum starting time.

::: answer
$J_T = 600 + 1200 = 1800$ kg·m², $\quad \omega = 2\pi(1500)/60 = 157.08$ rad/s

$T_{FL} = P/\omega = 50 \times 746/157.08 = 237.5$ N·m

Torque is proportional to current, so $T_{st} = 2T_{FL} = 475$ N·m. With no load torque during starting:

$$\alpha = \frac{T}{J_T} = \frac{475}{1800} = 0.264\ \text{rad/s}^2, \qquad t = \frac{\omega}{\alpha} = \frac{157.08}{0.264} = 595\ \text{s}$$
:::

## Exam · Q1 (4 marks)
Give two important considerations when selecting a motor for a given class of duty.

::: answer
**Thermal capacity** and **overload capacity**.
:::

## Exam · Q2 (4 marks)
Sketch the four-quadrant torque–speed operating modes of an electric motor.

::: answer
- Quadrant I: **forward driving**, $+\omega$, $+T$.
- Quadrant II: **forward braking**, $+\omega$, $-T$.
- Quadrant III: **reverse driving**, $-\omega$, $-T$.
- Quadrant IV: **reverse braking**, $-\omega$, $+T$.
:::

## Exam · Q3 (4 marks)
Why must a motor be provided with a cooling system?

::: answer
To **limit the maximum temperature rise** to a permissible value. Without cooling, the motor cannot dissipate its heat to the external medium, and its temperature keeps rising.
:::

## Exam · Q4 (4 marks)
What are the results of the high starting current drawn by a DC motor, and how can it be avoided?

::: answer
1. **Burning of the armature** from excessive heating.
2. **Damage to the commutator and brushes** from heavy sparking.
3. **Excessive voltage drop** in the supply line.

It is avoided by inserting a **variable resistance in series with the armature** (a starter).
:::

## Exam · Q5 (4 marks)
Draw the circuit of a three-phase thyristor converter drive that offers four-quadrant operation.

::: answer
A **three-phase dual converter DC drive**: two three-phase thyristor bridges connected **back to back** (antiparallel) across the armature ($R_a$, $L_a$). One bridge carries positive armature current and the other negative. The field $V_f$ is fed from a separate supply.
:::

## Exam · Q6 (4 marks)
Explain intermittent duty with a sketch.

::: answer
The motor runs at **constant load for a fixed time**, then rests, and the cycle repeats. Examples: cranes and hoists.

Sketch: power as rectangular pulses ($t_{on}$, $t_{off}$, repeating). Temperature rises during each $t_{on}$ and falls during each $t_{off}$, in a saw-tooth that settles below $\theta_m$.
:::

## Exam · Q7 (4 marks)
How can the electrical and mechanical stresses caused by a DOL starter be eliminated?

::: answer
By using **variable-speed drives with controlled acceleration**, such as soft starters or VFDs.
:::

## Exam · Q8 (4 marks)
What must be provided if the operator is at a distance from the power switching unit?

::: answer
A **remote control mechanism**: for example, remote stop and start buttons wired into the control circuit.
:::

## Exam · Q9 (4 marks)
Which coupling methods are used when the motor shaft runs at a different speed from the driven load?

::: answer
**Gear coupling** and **belt coupling**.
:::

## Exam · Q10 (4 marks)
What causes noise in mechanical energy transmission from the motor to the load?

::: answer
**Magnetic** noise, **windage**, **misalignment** and **mechanical defects**.
:::

## Exam · Q11 (10 marks)
A 125 hp DC shunt motor runs at 750 rpm, with starting current limited to 1.75 times full-load current. The rotating parts store 4500 J per hp. Find the starting time.

::: answer
Stored energy $= 4500 \times 125 = 562.5$ kJ, $\quad \omega = 2\pi(750)/60 = 78.54$ rad/s

$$J = \frac{2\,KE}{\omega^2} = \frac{2 \times 562\,500}{78.54^2} = 182.4\ \text{kg}\cdot\text{m}^2$$

$T_{FL} = \dfrac{125 \times 750}{78.54} = 1193.7$ N·m (the scheme uses 0.75 kW per hp)

$T_{st} = 1.75\,T_{FL} = 2088.9$ N·m. The accelerating torque, assuming full-load torque throughout, is $T_a = 2088.9 - 1193.7 = 895.2$ N·m.

$$\alpha = \frac{895.2}{182.4} = 4.91\ \text{rad/s}^2, \qquad t = \frac{78.54}{4.91} = 16\ \text{s}$$
:::

## Exam · Q12 (10 marks)
The milling-machine star–delta starter question: Tutorial II, Question 8.

::: answer
See **Tutorial II, Question 8**. The scheme's answer:

- **Star–delta**, because the rating is within the recommended range (7.5 to 55 kW) and the starting voltage is reduced by $1/\sqrt3$, which is 58%.
- **Main circuit:** fused isolator Q → main contactor M → overload F1 → motor, with the star (MY) and delta (MΔ) contactors on the winding ends.
- **Control circuit:** general and remote stops in series, and general and remote starts in parallel. A timer T changes star to delta, with interlocks and LY and LΔ lamps.
:::

## Exam · Q13 (10 marks)
The automatic DC motor starter question: Tutorial II, Question 3.

::: answer
See **Tutorial II, Question 3**. The scheme's key:

| Device | Role |
|---|---|
| F1 | Main fuse |
| F2 | Thermal overload relay |
| F3 | Control fuse |
| M1 | Main contactor |
| M2 | Braking contactor |
| S1, S2 | Stop and start buttons |
| T1, T2, T3 | Timers |
| D1, D2, D3 | Accelerating relays |
| R1, R2, R3 | Current-limiting resistors |
| $R_{fc}$ | Speed regulator (field) |
:::
