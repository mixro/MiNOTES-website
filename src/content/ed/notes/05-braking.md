# Braking

*Lecture 5 · EEU 08102 Electric Drives*

## Why braking is needed

Drives often have to **stop quickly** or **reverse**. Fast, accurate stopping and reversing improve **productivity** and **product quality**. The braking torque can be supplied **mechanically** or **electrically**.

A drive works in three modes, forward and reverse:

- **Steady state** (motoring): motor torque equals load torque.
- **Starting** and **braking**: the *transient* modes.

Braking is needed in two cases:

1. **Bringing the drive to rest** (deceleration) from forward (quadrant I) or reverse (quadrant III) motoring. The brake absorbs the **kinetic energy** of the moving parts.
2. **Lowering a load**, when the load helps the motion (a loaded hoist going down). The brake absorbs **potential energy** as well as kinetic energy.

## Mechanical vs electrical braking

| Mechanical braking | Electrical braking |
|---|---|
| Needs frequent maintenance (shoes, linings) | Very little maintenance |
| Wears out | No wear |
| Energy is wasted as heat and friction | Energy can be turned into electricity and **reused or returned** to the supply |
| Braking may not be smooth | Smooth braking without snatching |
| Needs shoes, linings and a drum | May need equipment rated higher than the motor |
| **Can hold** the load at any position | **Cannot produce a holding torque** |

In practice mechanical braking often **supplements** electrical braking for safe, reliable operation. During electrical braking the motor works as a **generator** and develops a torque that **opposes** rotation.

### Four-quadrant control

- Four-quadrant operation is possible with **one full converter** plus changeover contactors that reverse the armature or field, switching the firing angle between $0° \le \alpha \le 90°$ and $90° \le \alpha \le 180°$.
- **Dual converters** are preferred for their better performance.
- Closed-loop speed control normally uses two loops: an **inner current loop** and an **outer speed loop**.

## Types of electrical braking

### 1. Regenerative braking

The motor works as a **generator while still connected to the supply**. Mechanical energy becomes electrical energy; part of it is **returned to the supply** and the rest is lost as heat in the windings and bearings.

Conditions:

- The source and motor circuit must be able to **carry current in either direction**.
- The converter must **not be a semi-converter**.

In regenerative braking $|E_b| > |V|$ and the armature current is **negative**: power flows back to the supply.

> **Homework:** why can regenerative braking not take place in a DC series motor?
>
> **Answer:** when the current reverses during generation, the **series field reverses too** and weakens the flux. The motor cannot keep up the generated EMF needed to feed power back to the supply.

### 2. Dynamic (rheostatic) braking

The motor is disconnected from the supply and its armature is connected across a **resistor**. Mechanical energy is converted into electrical energy and **dissipated as heat** in the resistance.

### 3. Plugging (reverse-voltage braking)

The supply is **reversed**, so the motor tries to turn the other way. It is very fast but **highly inefficient**: the generated power **and** extra power from the supply are both wasted in the braking resistance.

## DC shunt motor relations

For a motor fed from a single-phase full converter with firing angle $\alpha$:

$$E_a(\alpha) = \frac{2E_m}{\pi}\cos\alpha = I_aR_a + E_b, \qquad E_b = K_a\phi\,\omega$$


From the speed equation:

$$N \propto \frac{E_b}{\phi}, \qquad E_b = V - I_a R_a \quad\Rightarrow\quad N \propto \frac{V - I_a R_a}{\phi}$$

For a shunt motor $\phi$ is constant, so $N \propto V - I_a R_a$: speed **falls slightly and linearly** as armature current rises.

Torque is proportional to flux times armature current:

$$T \propto \phi I_a \quad\Rightarrow\quad T \propto I_a \ \text{(shunt motor)}$$

The **shaft torque** is a little below the total developed torque because of rotational losses.

## Worked example (class work)

> A **210 V, 1200 rpm, 10 A** separately excited DC motor is fed by a **single-phase fully controlled converter** from a **230 V, 50 Hz** supply. The armature current is continuous and ripple-free above 25% of rated torque. $R_a = 1.5\ \Omega$.
>
> (a) Find the firing angle for rated torque at 800 rpm.
> (b) Find the firing angle for rated braking torque at −1200 rpm.
> (c) Find the motor speed at rated torque with $\alpha = 165°$ (regenerative braking).

**Setup**

- Converter output: $V_a = \dfrac{2V_m}{\pi}\cos\alpha$, with $V_m = \sqrt{2}\times 230 = 325.3$ V, so $V_a = 207.1\cos\alpha$.
- At rated conditions: $E = 210 - 10(1.5) = 195$ V at 1200 rpm, so $K = \dfrac{195}{1200} = 0.1625$ V/rpm.
- Rated torque means $I_a = 10$ A, so $I_aR_a = 15$ V.

**(a)** At 800 rpm: $E = 0.1625 \times 800 = 130$ V, so $V_a = 130 + 15 = 145$ V.

$$\cos\alpha = \frac{145}{207.1} = 0.700 \quad\Rightarrow\quad \alpha \approx 45.6°$$

**(b)** At −1200 rpm: $E = -195$ V. The converter current stays positive, so $V_a = -195 + 15 = -180$ V.

$$\cos\alpha = \frac{-180}{207.1} = -0.869 \quad\Rightarrow\quad \alpha \approx 150.4°$$

**(c)** With $\alpha = 165°$: $V_a = 207.1\cos 165° = -200.0$ V, so $E = V_a - I_aR_a = -215$ V.

$$N = \frac{-215}{0.1625} \approx -1323\ \text{rpm}$$

The speed is negative while torque is positive, so the motor is **regenerating with reversed speed** (it is lowering an active load and returning power to the AC supply).
