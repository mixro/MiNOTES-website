**Practice problems** covering the whole module, with worked answers. They were added for these notes, and every answer was checked numerically. Try each one before opening its answer.

## P1 Aliasing
A sensor signal contains a 50 Hz component and a 400 Hz noise component. It is sampled at 600 Hz with no anti-aliasing filter. Which frequencies appear in the samples?

::: answer
The Nyquist frequency is 300 Hz.

- 50 Hz is below it and appears correctly.
- 400 Hz is above it and folds back to $|400 - 600| = 200$ Hz.

So the samples show 50 Hz and a **false 200 Hz component**, which cannot be removed afterwards. An analog low-pass filter with its cut-off below 300 Hz must remove the 400 Hz noise *before* the ADC.
:::

## P2 ADC resolution
A 10-bit ADC covers 0 to 5 V. Find the step size, the maximum quantisation error and the resolution.

::: answer
$\Delta = \dfrac{5 - 0}{2^{10}} = \dfrac{5}{1024} = 4.88$ mV.

The maximum error is $\pm\Delta/2 = \pm2.44$ mV. The resolution is $\dfrac{1}{1024} \times 100\% = 0.098\%$.
:::

## P3 Solve a difference equation
$y(k) = 0.5y(k - 1) + x(k)$ with $y(-1) = 0$ and a unit-step input. Find $y(k)$, and check the final value with the final-value theorem.

::: answer
$Y(z) = G(z)X(z) = \dfrac{z}{z - 0.5}\cdot\dfrac{z}{z - 1} = \dfrac{z^2}{(z - 1)(z - 0.5)}$.

This is the function of Tutorial Q28, so $y(k) = 2 - (0.5)^k$: 1, 1.5, 1.75, …

**Final value:** $\lim_{z\to1}(z - 1)Y(z) = \dfrac{1}{1 - 0.5} = 2$ ✓. The theorem applies, because $(z - 1)Y(z)$ has its only pole at 0.5, inside the circle.
:::

## P4 Transform of k(0.5)ᵏ
Find the z-transform of $x(k) = k(0.5)^k$ for $k \ge 0$.

::: answer
From the table, $ka^k \leftrightarrow \dfrac{az}{(z - a)^2}$, so

$$X(z) = \frac{0.5z}{(z - 0.5)^2}$$

with ROC $|z| > 0.5$. (Check by series: $0 + 0.5z^{-1} + 2(0.25)z^{-2} + \cdots = 0.5z^{-1} + 0.5z^{-2} + 0.375z^{-3} + \cdots$, which matches long division.)
:::

## P5 Initial and final values
For $X(z) = \dfrac{z^2}{(z - 1)(z - 0.6)}$, find $x(0)$ and $x(\infty)$ without inverting.

::: answer
- **Initial value:** $x(0) = \lim_{z\to\infty}X(z) = 1$.
- **Final value:** $x(\infty) = \lim_{z\to1}(z - 1)X(z) = \dfrac{1}{1 - 0.6} = 2.5$.

(The full inverse is $x(k) = 2.5 - 1.5(0.6)^k$: 1 at $k = 0$, rising to 2.5.)
:::

## P6 ZOH equivalent
Find the ZOH equivalent of $G(s) = \dfrac{2}{s + 3}$ with $T = 0.1$ s.

::: answer
Using $\dfrac{K}{s + a} \to \dfrac{K}{a}\cdot\dfrac{1 - e^{-aT}}{z - e^{-aT}}$ with $e^{-0.3} = 0.7408$:

$$G(z) = \frac23\cdot\frac{0.2592}{z - 0.7408} = \frac{0.1728}{z - 0.7408}$$

DC check: $G(1) = 0.1728/0.2592 = 0.667 = G(0) = 2/3$ ✓.
:::

## P7 Closed loop with a sampled plant
Unity feedback, a ZOH and the plant $G(s) = \dfrac{1}{s + 1}$, sampled at $T = 0.5$ s. Find the closed-loop transfer function and the steady-state output for a unit step.

::: answer
The ZOH equivalent is $G(z) = \dfrac{1 - e^{-0.5}}{z - e^{-0.5}} = \dfrac{0.3935}{z - 0.6065}$. Then

$$\begin{aligned}T(z) &= \frac{G}{1 + G} \\ &= \frac{0.3935}{z - 0.6065 + 0.3935} \\ &= \frac{0.3935}{z - 0.2130}\end{aligned}$$

The closed-loop pole at 0.213 is stable. Steady-state output: $T(1) = \dfrac{0.3935}{0.787} = 0.5$, the same as the analog loop's $\dfrac{K}{1 + K}$ with $K = 1$. Proportional control of a type-0 plant leaves a 50% error.
:::

## P8 Range of gain by the Jury test
Unity feedback with $G(z) = \dfrac{K}{(z - 1)(z - 0.5)}$. Find the range of $K$ for stability.

::: answer
The characteristic equation is $z^2 - 1.5z + 0.5 + K = 0$. Jury conditions:

- $|a_0| < a_2$: $|0.5 + K| < 1$, so $-1.5 < K < 0.5$;
- $D(1) = 1 - 1.5 + 0.5 + K = K > 0$;
- $D(-1) = 1 + 1.5 + 0.5 + K = 3 + K > 0$.

So the loop is stable for **$0 < K < 0.5$**. At $K = 0.5$ the poles are $0.75 \pm j0.661$, with $|z| = 1$, on the unit circle.
:::

## P9 Bilinear test of a third-order system
Use the bilinear transformation and Routh–Hurwitz to test $D(z) = z^3 - 1.2z^2 + 0.5z - 0.1$.

::: answer
Substitute $z = \dfrac{s + 1}{s - 1}$ and multiply by $(s - 1)^3$:

$$\begin{aligned}&(s + 1)^3 - 1.2(s + 1)^2(s - 1) \\ &\quad + 0.5(s + 1)(s - 1)^2 - 0.1(s - 1)^3 \\ &= 0.2s^3 + 1.6s^2 + 3.4s + 2.8\end{aligned}$$

All the coefficients are positive. For a cubic, Routh also needs $a_2a_1 > a_3a_0$: $1.6 \times 3.4 = 5.44 > 0.2 \times 2.8 = 0.56$ ✓. So $D(s)$ is stable, and therefore **$D(z)$ is stable**.

Check: the roots of $D(z)$ are 0.682 and $0.259 \pm j0.282$ ($|z| = 0.383$), all inside the circle.
:::

## P10 Lead or lag?
Classify $C(z) = 2\dfrac{z - 0.9}{z - 0.5}$ and find its DC gain.

::: answer
The zero (0.9) is nearer $z = 1$ than the pole (0.5), so it is a **lead** compensator: it adds phase and speeds up the response.

DC gain $= C(1) = 2 \times \dfrac{0.1}{0.5} = 0.4$. A lead lowers the low-frequency gain relative to its high-frequency gain, the opposite of a lag.
:::

## P11 Velocity-form PID by hand
A velocity-form PID has $K_p = 1$, $K_i = 2$, $K_d = 0.05$ and $T = 0.1$ s, with $u[-1] = e[-1] = e[-2] = 0$. The errors are $e[0] = 1$, $e[1] = 0.8$ and $e[2] = 0.5$. Find $u[0]$, $u[1]$ and $u[2]$.

::: answer
$K_iT = 0.2$ and $K_d/T = 0.5$, with $u[k] = u[k - 1] + K_p(e[k] - e[k - 1]) + K_iTe[k] + \frac{K_d}{T}(e[k] - 2e[k - 1] + e[k - 2])$.

- $u[0] = 0 + 1(1 - 0) + 0.2(1) + 0.5(1 - 0 + 0) = 1.7$.
- $u[1] = 1.7 + (0.8 - 1) + 0.2(0.8) + 0.5(0.8 - 2 + 0) = 1.7 - 0.2 + 0.16 - 0.6 = 1.06$.
- $u[2] = 1.06 + (0.5 - 0.8) + 0.2(0.5) + 0.5(0.5 - 1.6 + 1) = 1.06 - 0.3 + 0.1 - 0.05 = 0.81$.
:::

## P12 Sampling too slowly destabilises
For the loop $\dfrac{K}{s(s + 1)}$ with a ZOH and $K = 2$, is the digital loop stable at $T = 1$ s? At $T = 2$ s?

::: answer
The characteristic equation is $z^2 + (Kb_1 - 1 - E)z + (E + Kb_0) = 0$, with $E = e^{-T}$, $b_1 = T - 1 + E$ and $b_0 = 1 - E - TE$. The binding Jury condition is $E + Kb_0 < 1$, i.e. $K < (1 - E)/b_0$.

- **$T = 1$:** $E = 0.368$ and $b_0 = 0.264$, so $K_{max} = 0.632/0.264 = 2.39$. $K = 2$ is **stable**.
- **$T = 2$:** $E = 0.135$ and $b_0 = 0.594$, so $K_{max} = 0.865/0.594 = 1.46$. $K = 2$ is **unstable**.

The analog loop is stable for any $K$. The slower sampling alone destroys stability.
:::
