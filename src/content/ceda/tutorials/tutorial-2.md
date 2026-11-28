**Tutorial Questions II** for EEU 08101, with worked answers. Every numerical answer was checked by computer. Where the sheet is ambiguous or leaves a value out, the answer says what was assumed. Try each question before opening its answer.

## Q1 Differential and difference state equations
What is the difference between a differential state equation and a difference equation? Explain how to convert a given differential state equation to a difference equation.

::: answer
- A **differential state equation**, $\dot x(t) = Ax(t) + Bu(t)$, describes a continuous-time system: the rate of change of the state at every instant.
- A **difference equation**, $x[k + 1] = \Phi x[k] + \Gamma u[k]$, describes a discrete-time system: the next sample of the state from the present one.

**Conversion (exact, with a ZOH).** If $u$ is held constant over each period $T$, integrating over one period gives

$$\Phi = e^{AT}, \qquad \Gamma = \left(\int_0^Te^{A\tau}\,d\tau\right)B$$

and $y[k] = Cx[k] + Du[k]$ is unchanged.

**Approximate (Euler).** Replace $\dot x$ by $\dfrac{x[k + 1] - x[k]}{T}$ to get $\Phi \approx I + AT$ and $\Gamma \approx BT$. This is accurate only when $T$ is small compared with the system's time constants.
:::

## Q2 z-transform of the unit step
Determine the z-transform of a unit step function.

::: answer
$$\begin{aligned}U(z) &= \sum_{k=0}^{\infty}z^{-k} \\ &= 1 + z^{-1} + z^{-2} + \cdots \\ &= \frac{1}{1 - z^{-1}} \\ &= \frac{z}{z - 1}\end{aligned}$$

The geometric series converges for $|z^{-1}| < 1$, so the ROC is $|z| > 1$.
:::

## Q3 From a Laplace transform
Find the z-transform of the function whose Laplace transform is $\dfrac{1}{s(s + 1)}$.

::: answer
Partial fractions: $\dfrac{1}{s(s + 1)} = \dfrac1s - \dfrac{1}{s + 1}$, so $x(t) = 1 - e^{-t}$ and

$$\begin{aligned}X(z) &= \frac{z}{z - 1} - \frac{z}{z - e^{-T}} \\ &= \frac{z(1 - e^{-T})}{(z - 1)(z - e^{-T})}\end{aligned}$$
:::

## Q4 The same transform by residues
Using the residue method, find $F(z)$ for the function whose Laplace transform is $\dfrac{1}{s(s + 1)}$.

::: answer
$$F(z) = \sum_{\text{poles of } F(s)}\text{Res}\left[F(s)\,\frac{z}{z - e^{sT}}\right]$$

- At $s = 0$: $\dfrac{1}{s + 1}\cdot\dfrac{z}{z - e^{sT}}\Big|_{s=0} = \dfrac{z}{z - 1}$.
- At $s = -1$: $\dfrac1s\cdot\dfrac{z}{z - e^{sT}}\Big|_{s=-1} = -\dfrac{z}{z - e^{-T}}$.

$$\begin{aligned}F(z) &= \frac{z}{z - 1} - \frac{z}{z - e^{-T}} \\ &= \frac{z(1 - e^{-T})}{(z - 1)(z - e^{-T})}\end{aligned}$$

This matches Q3.
:::

## Q5 A repeated pole
Obtain the z-transform of $X(s) = \dfrac{s}{(s + 1)^2(s + 2)}$.

::: answer
Write $X(s) = \dfrac{A}{s + 1} + \dfrac{B}{(s + 1)^2} + \dfrac{C}{s + 2}$:

- $C = \dfrac{s}{(s + 1)^2}\Big|_{s=-2} = -2$;
- $B = \dfrac{s}{s + 2}\Big|_{s=-1} = -1$;
- $A = \dfrac{d}{ds}\dfrac{s}{s + 2}\Big|_{s=-1} = \dfrac{2}{(s + 2)^2}\Big|_{s=-1} = 2$.

So $x(t) = 2e^{-t} - te^{-t} - 2e^{-2t}$. Using $te^{-at} \to \dfrac{Tze^{-aT}}{(z - e^{-aT})^2}$:

$$\begin{aligned}X(z) &= \frac{2z}{z - e^{-T}} - \frac{Tze^{-T}}{(z - e^{-T})^2} \\ &\quad - \frac{2z}{z - e^{-2T}}\end{aligned}$$

Check: $x(0) = 2 - 0 - 2 = 0$, and $\lim_{z\to\infty}X(z) = 2 - 0 - 2 = 0$ ✓.
:::

## Q6 Pulse transfer function with a hold-like block
A sampler (period $T$) drives $\dfrac{1 - e^{-Ts}}{s + 3}$ followed by $\dfrac{10}{s(s + 5)}$. Find the overall pulse transfer function, and hence $G_D(z)$ when $T = 0.2$ s.

::: answer
The two blocks have no sampler between them, so they are combined before transforming:

$$G_D(s) = (1 - e^{-Ts})\,\frac{10}{s(s + 3)(s + 5)}$$

$$\small G_D(z) = (1 - z^{-1})\,\mathcal{Z}\left\{\frac{10}{s(s + 3)(s + 5)}\right\}$$

Partial fractions: $\dfrac{10}{s(s + 3)(s + 5)} = \dfrac{2/3}{s} - \dfrac{5/3}{s + 3} + \dfrac{1}{s + 5}$. So

$$\begin{aligned}G_D(z) &= \frac23 - \frac53\cdot\frac{z - 1}{z - e^{-3T}} \\ &\quad + \frac{z - 1}{z - e^{-5T}}\end{aligned}$$

With $T = 0.2$ s, $e^{-0.6} = 0.5488$ and $e^{-1} = 0.3679$:

$$G_D(z) = \frac{0.1199z + 0.0703}{(z - 0.5488)(z - 0.3679)}$$

Check: $G_D(1) = 0.1902/0.2853 = 0.667$, equal to the DC gain $10/15$ ✓.
:::

## Q7 Range of K with an ideal sampler
Unity feedback; the error is sampled with $T = 1/4$ s and drives $\dfrac{K}{s(s + 4)}$ directly (no hold). Find the characteristic equation and the range of $K$ that makes the system unstable.

::: answer
With no hold, $G(z) = \mathcal{Z}\left\{\dfrac{K}{s(s + 4)}\right\} = \dfrac K4\cdot\dfrac{z(1 - e^{-4T})}{(z - 1)(z - e^{-4T})}$.

With $T = 0.25$, $e^{-1} = 0.3679$, so $G(z) = \dfrac{0.1580Kz}{(z - 1)(z - 0.3679)}$.

**Characteristic equation:**

$$\small z^2 + (0.1580K - 1.3679)z + 0.3679 = 0$$

**Jury:**

- $|a_0| = 0.3679 < 1$ ✓;
- $D(1) = 0.1580K > 0$, so $K > 0$;
- $D(-1) = 2.7358 - 0.1580K > 0$, so $K < 17.3$.

The loop is stable for $0 < K < 17.3$ and **unstable for $K > 17.3$** (and for $K < 0$). At $K = 17.3$ a pole reaches $z = -1$.
:::

## Q8 Flexibility of digital systems
Explain why digital systems are more flexible than analog systems.

::: answer
- The control law is **software**: changing gains, or even the whole algorithm, needs no new hardware.
- One processor can run **several loops** by time-sharing, and can add logic, supervision and data logging.
- Coefficients are numbers in memory, so they **do not drift** with temperature or age, and the result is repeatable.
- **Non-linear, adaptive and optimal** laws (look-up tables, gain scheduling, MPC) that are hard to build from op-amps are easy in code.
- Settings can be stored, copied and changed remotely through a network.
:::

## Q9 Jury test, third order
Use the Jury test on $z^3 - 2.2z^2 + 1.21z + 0.338 = 0$.

::: answer
Here $a_3 = 1$, $a_2 = -2.2$, $a_1 = 1.21$, $a_0 = 0.338$.

- $D(1) = 1 - 2.2 + 1.21 + 0.338 = 0.348 > 0$ ✓.
- $(-1)^3D(-1) = -(-1 - 2.2 - 1.21 + 0.338) = 4.072 > 0$ ✓.
- $|a_0| = 0.338 < a_3 = 1$ ✓.
- Second row of the table: $b_0 = a_0^2 - a_3^2 = -0.886$ and $b_2 = a_0a_2 - a_3a_1 = -1.954$. The condition $|b_0| > |b_2|$ fails, since $0.886 < 1.954$.

**The system is unstable.** Check: $D(z) = (z + 0.2)(z^2 - 2.4z + 1.69)$, with roots $-0.2$ and $1.2 \pm j0.5$. The complex pair has $|z| = 1.3$, outside the unit circle.
:::

## Q10 Sampled exponential through a ZOH
$x(t) = e^{-2t}$ is sampled and applied to $G(s) = \dfrac{1 - e^{-sT}}{s}\cdot\dfrac{1}{s + 1}$. Find $y(kT)$.

::: answer
$$\begin{gathered}X(z) = \frac{z}{z - e^{-2T}}, \\ G(z) = \frac{1 - e^{-T}}{z - e^{-T}}\end{gathered}$$

$$Y(z) = \frac{(1 - e^{-T})\,z}{(z - e^{-2T})(z - e^{-T})}$$

Partial fractions of $Y(z)/z$ give

$$\begin{aligned}y(kT) &= e^{T}\left(e^{-kT} - e^{-2kT}\right) \\ &= e^{-(k-1)T} - e^{-(2k-1)T}\end{aligned}$$

Check with $T = 0.5$ s: $y = 0,\ 0.393,\ 0.383,\ 0.286,\ \ldots$, the same as a step-by-step simulation. The output starts at 0 (the hold has not yet acted), rises and then decays with the input.
:::

## Q11 Solving a difference equation
Solve $2x(k) - 2x(k - 1) + x(k - 2) = u(k)$, where $x(k) = 0$ for $k < 0$ and $u(k) = 1$ for $k \ge 0$ (0 for $k < 0$).

::: answer
*The sheet's "= 0, U(k)" is read as a unit-step right-hand side.*

$$X(z)\left(2 - 2z^{-1} + z^{-2}\right) = \frac{z}{z - 1}$$

$$X(z) = \frac{z^3}{(z - 1)(2z^2 - 2z + 1)}$$

The quadratic has roots $0.5 \pm j0.5 = 0.707\angle\pm45°$. Partial fractions:

$$X(z) = \frac{z}{z - 1} - \frac12\cdot\frac{z(z - 1)}{z^2 - z + 0.5}$$

With $r = 0.7071$ and $\theta = \pi/4$, $\dfrac{z(z - 0.5)}{z^2 - z + 0.5} \to r^k\cos k\theta$ and $\dfrac{0.5z}{z^2 - z + 0.5} \to r^k\sin k\theta$. So

$$\small x(k) = 1 - \tfrac12(0.7071)^k\left[\cos\tfrac{k\pi}{4} - \sin\tfrac{k\pi}{4}\right]$$

$x(k) = 0.5,\ 1,\ 1.25,\ 1.25,\ 1.125,\ 1,\ 0.9375,\ \ldots \to 1$, which matches direct recursion.
:::

## Q12 Roots inside the unit circle?
Which polynomials have all their roots inside the unit circle?
(a) $0.5z^5 + 0.25z^4 + 0.25z^3 + 0.5z^2 + 0.5z + 1$
(b) $z^4 + 0.5z^3 + 0.5z^2 + 0.25z + 0.25$
(c) $z^4 - 1.5z^3 + z^2 - 0.5z + 0.25$

::: answer
- **(a) No.** The first Jury condition already fails: $|a_0| = 1 > a_5 = 0.5$. In fact all five roots are outside ($|z|$ = 1.08 to 1.20).
- **(b) Yes.** All four roots have $|z| = 0.707$.
- **(c) Yes.** The roots have $|z| = 0.852$ (pair) and $0.587$ (pair).

So (b) and (c) are stable characteristic polynomials.
:::

## Q13 Jury test, fourth order
Is the system $H(z) = \dfrac{B(z)}{z^4 - 1.2z^3 + 0.07z^2 + 0.3z - 0.08}$ stable?

::: answer
- $D(1) = 1 - 1.2 + 0.07 + 0.3 - 0.08 = 0.09 > 0$ ✓.
- $(-1)^4D(-1) = 1 + 1.2 + 0.07 - 0.3 - 0.08 = 1.89 > 0$ ✓.
- $|a_0| = 0.08 < 1$ ✓.
- The remaining Jury rows also pass: $|b_0| = 0.9936 > |b_3| = 0.204$ and $|c_0| = 0.946 > |c_2| = 0.315$.

**Stable.** Check: $D(z) = (z - 0.8)(z - 0.5)(z - 0.4)(z + 0.5)$, all roots inside the circle.
:::

## Q14 Range of sampling period
Unity feedback, sampler, ZOH and $\dfrac{1}{s(s + 1)}$. What values of $T$ give a stable system?

::: answer
From Chapter 5, $G(z) = \dfrac{(T - 1 + E)z + (1 - E - TE)}{(z - 1)(z - E)}$ with $E = e^{-T}$. The characteristic equation simplifies to

$$z^2 + (T - 2)z + (1 - TE) = 0$$

- $D(1) = T(1 - E) > 0$ for all $T > 0$ ✓.
- $|a_0| = |1 - Te^{-T}| < 1$ for all $T > 0$ ✓ (since $0 < Te^{-T} \le 0.37$).
- $D(-1) = 4 - T - Te^{-T} > 0$, i.e. $T(1 + e^{-T}) < 4$.

Solving $T(1 + e^{-T}) = 4$ gives $T = 3.92$ s. **Stable for $0 < T < 3.92$ s.**
:::

## Q15 State-space terms
Define: state variables, state vector, state space, state-space equation, state.

::: answer
- **State:** the smallest set of information about the system at time $t_0$ which, with the input from $t_0$ on, determines the future behaviour.
- **State variables:** the variables $x_1, \ldots, x_n$ that make up that minimal set.
- **State vector:** the $n$ state variables written as a column vector $x$.
- **State space:** the $n$-dimensional space whose axes are the state variables. Any state is a point in it, and the response is a trajectory.
- **State-space equations:** $\dot x = Ax + Bu$ and $y = Cx + Du$ (or $x[k + 1] = \Phi x[k] + \Gamma u[k]$ in discrete time).
:::

## Q16 PI controller limits
ZOH and $G(s) = \dfrac{1}{s + 1}$, a PI controller $D(z)$ and $T = 0.1$ s. Find the limiting values of $K_p$ for a stable loop with steady-state error below 0.01 for a unit ramp.

::: answer
*Assumed controller form (the course's, Chapter 8): $D(z) = K_p + \dfrac{K_iTz}{z - 1}$.*

**Plant:** $G(z) = \dfrac{1 - e^{-0.1}}{z - e^{-0.1}} = \dfrac{0.0952}{z - 0.9048}$.

**Ramp error.** $K_v = \dfrac1T\lim\limits_{z\to1}(z - 1)D(z)G(z) = \dfrac1T\cdot K_iT\cdot1 = K_i$. So $e_{ss} = 1/K_i < 0.01$ needs **$K_i > 100$**.

**Stability with $K_i = 100$** ($K_iT = 10$). The characteristic equation is

$$\begin{aligned}&z^2 + (0.0952K_p - 0.9528)z \\ &\quad + (0.9048 - 0.0952K_p) = 0\end{aligned}$$

- $D(1) = 0.952 > 0$ always ✓.
- $D(-1) = 2.858 - 0.1903K_p > 0$, so $K_p < 15.0$.
- $|0.9048 - 0.0952K_p| < 1$, so $-1.0 < K_p < 20.0$.

**Result: $-1.0 < K_p < 15.0$** (in practice $0 < K_p < 15$) together with $K_i \ge 100$. Raising $K_i$ further narrows the range.

*If the forward-rectangle form $D(z) = K_p + K_iT/(z - 1)$ is used instead, the same working gives $9.0 < K_p < 25.0$ for $K_i = 100$.* The class notes set up this form but stop before the final limits.
:::

## Q17 Bilinear transformation
What is the bilinear transformation?

::: answer
A mapping between the s- and z-planes in which both numerator and denominator are first order:

$$\begin{gathered}s = \frac2T\cdot\frac{z - 1}{z + 1} \\ \Leftrightarrow z = \frac{1 + sT/2}{1 - sT/2}\end{gathered}$$

(or $z = \dfrac{s + 1}{s - 1}$ for stability tests). It maps the left half s-plane onto the inside of the unit circle and the imaginary axis onto the circle. Uses: testing digital stability with Routh–Hurwitz, and discretising analogue controllers (Tustin's method) with no aliasing, at the cost of frequency warping.
:::

## Q18 State model from a difference equation
Construct the state model of $y(k + 2) = u(k) + 1.7y(k + 1) - 0.72y(k)$.

::: answer
Choose $x_1(k) = y(k)$ and $x_2(k) = y(k + 1)$. Then $x_1(k + 1) = x_2(k)$ and $x_2(k + 1) = -0.72x_1(k) + 1.7x_2(k) + u(k)$:

$$\begin{aligned}x(k + 1) &= \begin{bmatrix}0 & 1\\-0.72 & 1.7\end{bmatrix}x(k) \\ &\quad + \begin{bmatrix}0\\1\end{bmatrix}u(k)\end{aligned}$$

$$y(k) = \begin{bmatrix}1 & 0\end{bmatrix}x(k)$$

The eigenvalues are 0.8 and 0.9, both inside the circle, so the system is stable. Its transfer function is $\dfrac{1}{z^2 - 1.7z + 0.72}$.
:::

## Q19 Three routes to G(z)
For $G(s) = \dfrac{1}{s^2 + 5s + 6}$, find $G(z)$ (1) by the inverse Laplace transform, (2) from the z-transform tables for the partial fractions, and (3) from the tables for $G(s)$ directly.

::: answer
**Method 1.** $g(t) = \mathcal{L}^{-1}\left\{\dfrac{1}{(s + 2)(s + 3)}\right\} = e^{-2t} - e^{-3t}$, sampled at $t = kT$:

$$\begin{aligned}G(z) &= \sum_k\left(e^{-2kT} - e^{-3kT}\right)z^{-k} \\ &= \frac{z}{z - e^{-2T}} - \frac{z}{z - e^{-3T}}\end{aligned}$$

**Method 2.** $\dfrac{1}{(s + 2)(s + 3)} = \dfrac{1}{s + 2} - \dfrac{1}{s + 3}$, and each term is the table pair $\dfrac{1}{s + a} \to \dfrac{z}{z - e^{-aT}}$. Same result.

**Method 3.** The table entry $\dfrac{b - a}{(s + a)(s + b)} \to \dfrac{z(e^{-aT} - e^{-bT})}{(z - e^{-aT})(z - e^{-bT})}$ with $a = 2$, $b = 3$:

$$G(z) = \frac{z(e^{-2T} - e^{-3T})}{(z - e^{-2T})(z - e^{-3T})}$$

All three agree. (Note: $G(z)$ is **not** $\mathcal{Z}\left\{\frac{1}{s + 2}\right\}\cdot\mathcal{Z}\left\{\frac{1}{s + 3}\right\}$; transforms of products are not products of transforms.)
:::

## Q20 Inverse with complex poles
Find the inverse z-transform of $Y(z) = \dfrac{z^2 + z}{z^2 - 3z + 4}$.

::: answer
The poles are $1.5 \pm j1.323 = 2\angle\pm41.41°$. Writing $y(k) = r^k(\cos k\theta + c\sin k\theta)$ with $r = 2$, $\theta = 41.41°$ and matching $y(0) = 1$, $y(1) = 4$ gives $c = 5/\sqrt7 = 1.890$:

$$\begin{aligned}y(k) = 2^k\big[&\cos(0.7227k) \\ &+ 1.890\sin(0.7227k)\big]\end{aligned}$$

The sequence is $1,\ 4,\ 8,\ 8,\ -8,\ -56,\ -136,\ \ldots$ (by long division too). Since $|z| = 2 > 1$, it is a **growing oscillation**: the system is unstable.
:::

## Q21 Inverse with real poles
Find the inverse z-transform of $Y(z) = \dfrac{1}{(z - 1)(z - 2)}$.

::: answer
$$\begin{aligned}\frac{Y(z)}{z} &= \frac{1}{z(z - 1)(z - 2)} \\ &= \frac{0.5}{z} - \frac{1}{z - 1} + \frac{0.5}{z - 2}\end{aligned}$$

$$y(k) = 0.5\delta(k) - 1 + 0.5(2)^k$$

That is, $y(0) = 0$ and $y(k) = 2^{k-1} - 1$ for $k \ge 1$: $0,\ 0,\ 1,\ 3,\ 7,\ 15,\ \ldots$ (matches long division). It grows without bound because of the pole at 2.
:::

## Q22 Partial fractions, three poles
Find the inverse z-transform of $Y(z) = \dfrac{z^2 + z}{(z - 0.5)(z - 0.8)(z - 1)}$.

::: answer
$$\begin{aligned}\frac{Y(z)}{z} &= \frac{z + 1}{(z - 0.5)(z - 0.8)(z - 1)} \\ &= \frac{10}{z - 0.5} - \frac{30}{z - 0.8} + \frac{20}{z - 1}\end{aligned}$$

$$y(k) = 10(0.5)^k - 30(0.8)^k + 20$$

Check: $y(0) = 0$, $y(1) = 1$, $y(2) = 3.3$, $y(3) = 5.89$, …, rising to 20. These match long division.
:::

## Q23 Open loop with three samplers
$e(s)$ is sampled, passes through $G_1(s)$, is sampled again, passes through $G_2(s)$, and the output is sampled. Find the z-transform of the output.

::: answer
Each block sits between two samplers, so each can be transformed separately:

$$\begin{gathered}X(z) = G_1(z)E(z), \\ Y(z) = G_2(z)X(z)\end{gathered}$$

$$Y(z) = G_1(z)\,G_2(z)\,E(z)$$

(Without the middle sampler it would be $Y(z) = G_1G_2(z)E(z)$, with $G_1G_2(z) = \mathcal{Z}\{G_1(s)G_2(s)\}$.)
:::

## Q24 First-order plant with a ZOH
A sampler and ZOH drive $\dfrac{1}{s + 1}$. Find the sampled output for (i) a unit step and (ii) a unit ramp input.

::: answer
$G(z) = \dfrac{1 - e^{-T}}{z - e^{-T}}$.

**(i) Step:** $Y(z) = \dfrac{(1 - e^{-T})z}{(z - 1)(z - e^{-T})}$, so

$$y(kT) = 1 - e^{-kT}$$

This is exactly the continuous step response at the sampling instants, because the held step is the step itself.

**(ii) Ramp:** $U(z) = \dfrac{Tz}{(z - 1)^2}$. Then

$$y(kT) = T\left[k - \frac{1 - e^{-kT}}{1 - e^{-T}}\right]$$

In steady state the output follows the ramp with a constant lag of $T/(1 - e^{-T})$ (about $1 + T/2$ s for small $T$). Check with $T = 0.5$: $0,\ 0,\ 0.197,\ 0.513,\ 0.901,\ \ldots$, matching simulation.
:::

## Q25 Step response, T = 1 s
A sampler and ZOH drive $\dfrac{1}{s(s + 1)}$. Calculate and plot the step response with $T = 1$ s.

::: answer
With $E = e^{-1} = 0.3679$:

$$G(z) = \frac{0.3679z + 0.2642}{(z - 1)(z - 0.3679)}$$

and $Y(z) = G(z)\dfrac{z}{z - 1}$. Long division or recursion gives

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| $y(k)$ | 0 | 0.368 | 1.135 | 2.050 | 3.018 | 4.007 | 5.002 |

This is exactly $y(k) = k - 1 + e^{-k}$, the continuous response $t - 1 + e^{-t}$ at the samples. The plant contains an integrator and the loop is open, so the output grows like a ramp, lagging the input step's integral by 1 s.
:::

## Q26 Sampler only in the feedback path
$y = G(s)e$, $e = r - H(s)y^*$ (the output is sampled before $H$). Find the output.

::: answer
$Y(s) = G(s)R(s) - G(s)H(s)Y^*(s)$. Sample both sides:

$$Y(z) = GR(z) - GH(z)Y(z)$$

$$Y(z) = \frac{GR(z)}{1 + GH(z)}$$

$R$ enters $G$ without a sampler, so it cannot be separated: there is an output expression, but **no pulse transfer function** $Y(z)/R(z)$.
:::

## Q27 Computer control loop
Find the transfer function of a loop with A/D, digital controller $D(z)$, D/A, plant $G_p(s)$ and sensor $H(s)$.

::: answer
The A/D samples the error, and the D/A acts as a ZOH. Define

$$\begin{gathered}G(z) = (1 - z^{-1})\,\mathcal{Z}\left\{\frac{G_p(s)}{s}\right\}, \\ GH(z) = (1 - z^{-1})\,\mathcal{Z}\left\{\frac{G_p(s)H(s)}{s}\right\}\end{gathered}$$

Then $E(z) = R(z) - D(z)GH(z)E(z)$ and $Y(z) = D(z)G(z)E(z)$, so

$$\frac{Y(z)}{R(z)} = \frac{D(z)G(z)}{1 + D(z)GH(z)}$$

With a unity sensor this is $\dfrac{DG}{1 + DG}$.
:::

## Q28 Closed loop, first 10 samples
Unity feedback; the error is sampled with $T = 1$ s and drives $\dfrac{1}{s(s + 1)}$ directly. Find the step response for 10 samples.

::: answer
With no hold, $G(z) = \dfrac{(1 - e^{-1})z}{(z - 1)(z - e^{-1})} = \dfrac{0.6321z}{(z - 1)(z - 0.3679)}$ and

$$\frac{Y(z)}{R(z)} = \frac{0.6321z}{z^2 - 0.7358z + 0.3679}$$

The poles are $0.368 \pm j0.482$, $|z| = 0.607$: stable. The response:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $y(k)$ | 0 | 0.632 | 1.097 | 1.207 | 1.117 | 1.010 |

| $k$ | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|
| $y(k)$ | 0.964 | 0.970 | 0.991 | 1.005 | 1.007 |

It overshoots by about 21% at $k = 3$ and settles to 1 (type-1 loop, zero step error).
:::

## Q29 Three stability tests
Check the stability of $G(z) = \dfrac{1}{z^3 + 2.7z^2 + 1.5z + 0.2}$ using (a) Jury, (b) Routh–Hurwitz, (c) the root locus.

::: answer
**(a) Jury.** $D(1) = 5.4 > 0$ ✓, but $(-1)^3D(-1) = -(-1 + 2.7 - 1.5 + 0.2) = -0.4 < 0$ ✗. **Unstable.**

**(b) Routh.** Substituting $z = \dfrac{s + 1}{s - 1}$ and multiplying by $(s - 1)^3$ gives $5.4s^3 + 3.6s^2 - 0.6s - 0.4$. The coefficients already change sign, so it is unstable. In the Routh table the $s^1$ row is zero ($\frac{3.6(-0.6) - 5.4(-0.4)}{3.6} = 0$), so use the auxiliary polynomial $3.6s^2 - 0.4$ and its derivative $7.2s$. The first column is $5.4,\ 3.6,\ 7.2,\ -0.4$: **one sign change, so one pole outside the unit circle.** (The auxiliary roots $s = \pm\frac13$ correspond to $z = -2$ and $z = -0.5$.)

**(c) Root locus.** $D(z) = (z + 2)(z + 0.5)(z + 0.2)$, so the poles are $-2$, $-0.5$ and $-0.2$. Treat the constant term as a gain, $z^3 + 2.7z^2 + 1.5z + K$. At $K = 0$ the roots are $0$, $-0.783$ and $-1.917$, so one branch already starts outside the circle. Raising $K$ to 0.2 moves that root only to $-2$, still outside.

All three methods agree: **the system is unstable.**
:::

## Q30 s-plane, z-plane and w-plane
Explain the mapping from the s-plane to the z-plane, and from the z-plane to the w-plane. How are frequency points mapped?

::: answer
**s to z:** $z = e^{sT}$, so $|z| = e^{\sigma T}$ and $\angle z = \omega T$.

- The imaginary axis maps onto the unit circle; the left half-plane maps inside it.
- $\omega = 0$ goes to $z = 1$; $\omega = \omega_s/2$ (the Nyquist frequency) goes to $z = -1$.
- The mapping is many-to-one: every horizontal strip of height $\omega_s$ covers the whole z-plane again (this is aliasing).

**z to w:** $w = \dfrac2T\cdot\dfrac{z - 1}{z + 1}$ (the bilinear transformation).

- The unit circle maps back onto the imaginary axis of the w-plane, so stability and Bode/Routh methods work in $w$ as in $s$.
- A real frequency $\omega$ becomes a w-plane frequency $\nu = \dfrac2T\tan\dfrac{\omega T}{2}$ (frequency warping). For $\omega T \ll 1$, $\nu \approx \omega$; as $\omega \to \omega_s/2$, $\nu \to \infty$.
:::
