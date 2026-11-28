# Review: analogue compensator design

*Background from Control Engineering Analogue Design · summary notes*

Digital lead, lag and PID controllers (Chapter 8) are usually designed in the s-plane first and then discretised (Chapter 5). This chapter reviews the analogue design methods they build on, with every worked example re-checked.

## Compensation

The control system is designed to perform specific tasks, set out as **performance specifications**:

- in the **time domain**: maximum overshoot, settling time, rise time, damping ratio;
- in the **frequency domain**: phase margin, gain margin, resonant peak, bandwidth.

**Compensation** is redesigning the control system, by changing its structure or adding devices, so that the overall behaviour meets these specifications. A **compensator** is the device or component added to do this. There are two main design methods: **root locus** and **frequency response**.

**Steps.** First try **adjusting the gain**. Raising the gain improves the steady state but worsens stability, and can even cause instability. When gain alone cannot meet all the specifications, add a compensator.

**Where the compensator goes:**

- **Series (cascade):** the compensator is in series with the plant in the forward path. The signal flows from a low energy level to a high one, so the compensator handles little power.
- **Parallel (feedback):** the compensator is in an internal feedback path round part of the plant. The signal flows from a high energy level to a low one.
- **Series–parallel:** a combination of the two.

Compensating networks can be electrical, mechanical, hydraulic, pneumatic or a combination. The common electrical ones are the **lag**, **lead** and **lag–lead** networks.

## Compensating networks

**Lag network.** $R_1$ in series; $R_2$ and $C$ in series across the output. By the voltage divider,

$$\begin{gathered}\begin{aligned}G_c(s) &= \frac{R_2 + \frac{1}{sC}}{R_1 + R_2 + \frac{1}{sC}} \\ &= \frac{1 + \tau s}{1 + \beta\tau s},\end{aligned} \\ \tau = R_2C, \\ \beta = \frac{R_1 + R_2}{R_2} > 1\end{gathered}$$

It has a zero at $-1/\tau$ and a pole at $-1/(\beta\tau)$. **The pole is nearer the origin**, so the network gives a phase lag. The DC gain is 1 and the high-frequency gain is $1/\beta$.

**Lead network.** $R_1$ in parallel with $C$, in series; $R_2$ across the output:

$$\begin{gathered}\begin{aligned}G_c(s) &= \frac{R_2}{\dfrac{R_1}{1 + sCR_1} + R_2} \\ &= \beta\,\frac{1 + \tau s}{1 + \beta\tau s},\end{aligned} \\ \tau = R_1C, \\ \beta = \frac{R_2}{R_1 + R_2} < 1\end{gathered}$$

Equivalently, $G_c = \dfrac{s + 1/\tau}{s + 1/(\beta\tau)}$. **The zero is nearer the origin**, so the network gives a phase lead.

**Lag–lead network.** $R_1$ in parallel with $C_1$, in series; $R_2$ in series with $C_2$ across the output:

$$\small G_c(s) = \frac{(1 + R_1C_1s)(1 + R_2C_2s)}{(1 + R_1C_1s)(1 + R_2C_2s) + R_1C_2s}$$

The lead part acts at high frequencies and the lag part at low frequencies.

| | Lag | Lead | Lag–lead |
|---|---|---|---|
| Pole–zero | Pole nearer the origin | Zero nearer the origin | One of each section |
| Main gain | Steady-state accuracy | Transient response, phase margin | Both |
| Bandwidth | Reduced | Increased | |
| Gain crossover frequency | Moves lower | Moves higher | |
| Speed | Slower (longer rise and settling times) | Faster (shorter rise and settling times) | Fast and accurate |
| High-frequency noise | Attenuated | Amplified | |
| Drawbacks | Slower response | More noise, a higher gain needed; no steady-state improvement | More complex |

**Why does a lead speed the system up?** It adds phase near the crossover, so the gain crossover (and hence the bandwidth) can move to a higher frequency, which makes the system respond faster.

## Root-locus design of a lead compensator

**Procedure:**

1. From the specifications ($\zeta$, $\omega_n$) find the desired dominant pole $s_d = -\zeta\omega_n \pm j\omega_n\sqrt{1 - \zeta^2}$.
2. Find the angle of the uncompensated $G(s)$ at $s_d$.
3. **Angle deficiency** $\phi$ = the angle the compensator must add, so that the total angle at $s_d$ is ±180°.
4. Place the zero and the pole so that the zero's angle minus the pole's angle at $s_d$ equals $\phi$ (for example by the bisector method, or by fixing the zero).
5. Find the gain from the magnitude condition $|G_c(s_d)G(s_d)| = 1$.
6. Write the compensated open loop and check the closed loop.

### Example 1

*$G(s) = \dfrac{10}{s(s + 1)}$. Design a lead compensator for $\zeta = 0.5$ and $\omega_n = 3$ rad/s.*

1. $s_d = -1.5 \pm j2.598$ (the angle from the origin is $\cos^{-1}0.5 = 60°$).
2. $\angle G(s_d) = -120° - 100.89° = -220.89°$, which is the same as $+139.11°$.
3. Deficiency $\phi = 180° - 139.11° = 40.89°$.
4. The **bisector method** gives a zero at $-1.943$ and a pole at $-4.646$. The angles at $s_d$ are 80.32° and 39.55°; their difference is 40.77°, close enough to 40.89°.
5. $K_c = 1/|G_c(s_d)G(s_d)| = 1.229$.

$$G_c(s) = 1.229\,\frac{s + 1.943}{s + 4.646}$$

Check: the closed-loop poles are $-1.50 \pm j2.60$ and $-2.66$. ✓

The summary instead places the pole at −3.8 (with the zero at −1.9, $K_c = 1.047$). That pair adds only 32.8°, not 40.9°, so the closed-loop poles land at $-1.23 \pm j2.65$, not at the specified point.

### Example 2 (tutorial)

*$G(s) = \dfrac{K}{s(s + 2)}$. Place the dominant closed-loop poles at $s = -3 \pm j4$ with a lead compensator, and find the overshoot.*

1. $\omega_n = |s_d| = 5$ and $\zeta = 3/5 = 0.6$.
2. $\angle G(s_d) = -126.87° - 104.04° = -230.91°$, i.e. $+129.09°$.
3. Deficiency $\phi = 180° - 129.09° = 50.91°$.
4. Put the zero at $-4$. Its angle at $s_d$ is $\tan^{-1}(4/1) = 75.96°$. The pole must then contribute $75.96° - 50.91° = 25.05°$, so it sits at $-3 - 4/\tan25.05° = -11.56$.
5. Magnitude condition: $KK_c = 47.2$.

$$G_c(s)G(s) = \frac{47.2(s + 4)}{s(s + 2)(s + 11.56)}$$

The closed-loop poles are $-3 \pm j4$ ✓ and $-7.56$.

**Overshoot:** $M_p = e^{-\pi\zeta/\sqrt{1 - \zeta^2}} = e^{-\pi(0.6)/0.8} = 0.0948$, i.e. **9.48%**. That is for the dominant pair; the third pole and the zero change it slightly.

The summary places the pole at $-6$ (with the zero at $-4$, $KK_c = 25$). That pair adds only 22.8°, so the closed-loop poles are $-1.67 \pm j4.32$, not $-3 \pm j4$. The pole must be at about $-11.6$ for the angle condition to hold.

## Root-locus design of a lag compensator

*$G(s) = \dfrac{K}{s(s + 2)(s + 8)}$. Design a lag compensator so that the overshoot is at most 16% and the steady-state error to a unit ramp is at most 0.125.*

**The uncompensated root locus:**

- Poles at 0, −2 and −8; $n - m = 3$.
- Asymptotes at ±60° and 180°, from the centroid $(0 - 2 - 8)/3 = -3.33$.
- Breakaway: $-K = s^3 + 10s^2 + 16s$, and $dK/ds = 0$ gives $3s^2 + 20s + 16 = 0$, so $s = -0.93$ (with $K = 7.04$). The other root, −5.74, gives a negative $K$ and is not on the locus.
- Imaginary-axis crossing: with $s = j\omega$, $-j\omega^3 - 10\omega^2 + 16j\omega + K = 0$, so $\omega = \pm4$ rad/s at $K = 160$.

**Gain for the damping.** 16% overshoot needs $\zeta = 0.504 \approx 0.5$. The $\zeta = 0.5$ line (60°) meets the locus at $s_d = -0.80 \pm j1.39$, where $K = |s_d||s_d + 2||s_d + 8| = 21.5$.

**Error constant.** $K_v = \lim_{s\to0}sG(s) = K/16 = 1.344$. The ramp error needs $K_v = 1/0.125 = 8$.

**The lag compensator.** It must raise $K_v$ by a factor of $8/1.344 = 5.95$. Allow about 20% extra: $\beta = 1.2 \times 5.95 = 7.14$. Place the zero close to the origin, at $-0.2$, and the pole at $-0.2/7.14 = -0.028$:

$$\begin{gathered}G_c(s) = \frac{s + 0.2}{s + 0.028}, \\ K_v = \frac{21.5 \times 0.2}{16 \times 0.028} = 9.6, \\ e_{ss} = 0.104 \le 0.125 \;✓\end{gathered}$$

The dominant poles move slightly, to $-0.70 \pm j1.32$ ($\zeta \approx 0.47$). That gives about 19% overshoot by the second-order formula, slightly above the target. A zero nearer the origin (at $-0.05$, with the pole at $-0.007$) keeps $\zeta = 0.495$. This is the usual lag trade-off: the closer the pole–zero pair is to the origin, the less it disturbs the transient, but the slower its long tail.

The summary reads $K = 20$ from its sketch, giving $K_v = 1.25$, a factor of 6.4 and $\beta = 7.64$, with the zero at −0.2 and the pole at −0.026, so $K_v = 9.615$ and $e_{ss} = 0.104$. The method and the result are essentially the same; the exact $K$ at $\zeta = 0.5$ is 21.5.

## Frequency-domain design of PID and PD controllers

For $G_c(s) = K_p + K_ds + K_i/s$ at a chosen frequency $\omega$, require $G_c(j\omega)G(j\omega) = 1\angle(-180° + PM)$. With $A_0 = |G(j\omega)|$ and the controller angle $\theta = -180° + PM - \angle G(j\omega)$:

$$K_p = \frac{\cos\theta}{A_0}, \qquad K_d\omega - \frac{K_i}{\omega} = \frac{\sin\theta}{A_0}$$

$K_i$ comes from the steady-state error requirement.

### PID example

*Unity feedback, $G(s) = \dfrac{100}{(s + 1)(s + 2)(s + 10)}$. Design a PID controller for a phase margin of 45° at 4 rad/s and a unit-ramp steady-state error of 0.1.*

1. $|G(j4)| = \dfrac{100}{\sqrt{17}\sqrt{20}\sqrt{116}} = 0.5035$.
2. $\angle G(j4) = -(75.96° + 63.43° + 21.80°) = -161.20°$, so the uncompensated phase margin is 18.8°.
3. The controller must add $\theta = 45° - 18.8° = 26.2°$.
4. Ramp error: $K_v = \lim sG_cG = \dfrac{100K_i}{20} = 5K_i = 1/0.1 = 10$, so $K_i = 2$.
5. $K_p = \dfrac{\cos26.2°}{0.5035} = 1.782$; $K_d = \dfrac{\sin26.2°}{4 \times 0.5035} + \dfrac{2}{16} = 0.344$.

$$\begin{aligned}G_c(s) &= 1.782 + 0.344s + \frac2s \\ &= \frac{0.344s^2 + 1.782s + 2}{s}\end{aligned}$$

Check: at 4 rad/s the open-loop gain is 1.000 and the phase margin 45.0°. ✓ (The summary, rounding θ to 26°, gets $K_p = 1.786$ and $K_d = 0.344$.) The compensated open loop is

$$G_cG = \frac{100(0.344s^2 + 1.782s + 2)}{s(s + 1)(s + 2)(s + 10)}$$

The summary's version drops the factor $(s + 10)$.

### PD example

*Unity feedback, $G(s) = \dfrac{5}{s(s + 0.5)(s + 1)}$. Design a PD controller for a phase margin of 30° at 1.2 rad/s.*

1. $|G(j1.2)| = 2.05$ and $\angle G(j1.2) = -90° - 67.38° - 50.19° = -207.57°$.
2. The uncompensated phase margin is $-27.57°$, so the loop is unstable.
3. The controller must add $\theta = 30° - (-27.57°) = 57.57°$.
4. $K_p = \dfrac{\cos57.57°}{2.05} = 0.262$ and $K_d = \dfrac{\sin57.57°}{1.2 \times 2.05} = 0.343$.

$$G_c(s) = 0.262 + 0.343s$$

Check: the phase margin is 29.9° at 1.2 rad/s. ✓

**Could a PI controller do it?** The same formula gives $K_i = -\omega\sin\theta/A_0 = -0.494$. A negative integral gain is meaningless, which shows that a PI (which can only add phase lag) cannot supply the 57.6° of lead needed. A PD or lead is required. The summary lists this PI result without the comment.

## Root-locus design of a PID controller

For a desired closed-loop pole $s_d$ with $|s_d|$ and angle $\beta$, and $G(s_d) = |G|\angle\psi$, the conditions $1 + G_c(s_d)G(s_d) = 0$ give

$$\begin{gathered}\begin{aligned}K_p &= \frac{-\sin(\beta + \psi)}{|G||s_d|\sin\beta} \\ &\quad - \frac{2K_i\cos\beta}{|s_d|},\end{aligned} \\ K_d = \frac{\sin\psi}{|s_d||G|\sin\beta} + \frac{K_i}{|s_d|^2}\end{gathered}$$

### Example

*Unity feedback, $G(s) = \dfrac{100}{(s + 1)(s + 5)(s + 20)}$. Design a PID controller for a dominant closed-loop pole at $s = -4 + j1$ and a unit-ramp error of at most 0.05.*

1. $|s_d| = \sqrt{17} = 4.123$ and $\beta = 180° - \tan^{-1}(1/4) = 165.96°$.
2. $|G(s_d)| = \dfrac{100}{\sqrt{10}\sqrt2\sqrt{257}} = 1.394$.
3. **The angle of $G(s_d)$:** $s_d + 1 = -3 + j1$ is in the **second quadrant**, so its angle is $180° - 18.43° = 161.57°$. The other two factors are $s_d + 5 = 1 + j1$ (45°) and $s_d + 20 = 16 + j1$ (3.58°). So

$$\begin{aligned}\psi &= -(161.57° + 45° + 3.58°) \\ &= -210.14° \;(= +149.86°)\end{aligned}$$

4. Ramp error: $K_v = \dfrac{100K_i}{100} = K_i = 1/0.05 = 20$.
5. Substituting: $K_p = 11.47$ and $K_d = 1.536$.

$$G_c(s) = 11.47 + 1.536s + \frac{20}{s}$$

Check: the closed-loop poles are $-4 \pm j1$ ✓ and $-9 \pm j6.05$, so the specified pair is dominant.

The summary takes the angle of $-3 + j1$ as $-18.43°$ (the wrong quadrant) and gets $\psi = -30.14°$, and it stops before computing $K_p$ and $K_d$. $K_i = 20$ is right.

> **Corrections to the summary**, in brief:
> - lead Example 1: the pole is at −4.65, not −3.8;
> - lead Example 2: the pole is at −11.6, not −6;
> - lag example: K = 21.5 at ζ = 0.5, not 20;
> - PID frequency example: the open loop must keep $(s + 10)$;
> - the PI "note" gives a negative $K_i$, so a PI cannot do that job;
> - PID root-locus example: the angle of $-3 + j1$ is 161.57°, giving $K_p = 11.47$ and $K_d = 1.536$;
> - one list of lead effects says the lead "decreases the gain crossover frequency": it raises it, as the same list says two lines later.
