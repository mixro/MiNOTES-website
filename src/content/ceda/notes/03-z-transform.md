# The z-transform

*Lecture 2 · EEU 08101 Control Engineering Digital Analysis*

Digital systems work with sampled signals, so their performance changes when the sampling rate changes. To model them we need a mathematical description of sampling and holding. The **z-transform** provides it. It is the discrete-time equivalent of the Laplace transform: it turns difference equations into algebra, and from it we can read off stability, causality and the response.

## Definition

For a sequence $\{x(k)\}$, $k = 0, 1, 2, \ldots$, the (one-sided) z-transform is

$$\begin{aligned}X(z) &= \mathcal{Z}\{x(k)\} \\ &= \sum_{k=0}^{\infty}x(k)z^{-k} \\ &= x(0) + x(1)z^{-1} + x(2)z^{-2} + \cdots\end{aligned}$$

- $x(k)$ is the discrete signal, $k$ an integer, $z$ a complex variable and $X(z)$ the z-domain representation.
- The coefficient of $z^{-k}$ is the value of the signal at sample $k$. So $z^{-1}$ means "one sample later", a **unit delay**.
- $z$ is linked to the Laplace variable by $z = e^{sT}$.

**Region of convergence (ROC).** The series is infinite, so $X(z)$ exists only for those $z$ where it converges. That set of $z$ is the ROC.

**One-sided and two-sided.**

| | Two-sided (bilateral) | One-sided (unilateral) |
|---|---|---|
| Definition | $X(z) = \sum_{k=-\infty}^{\infty}x(k)z^{-k}$ | $X(z) = \sum_{k=0}^{\infty}x(k)z^{-k}$ |
| Signals | All $k$, negative and positive | Present and future values only, $k \ge 0$ |
| Used for | General signal analysis, frequency-domain properties, stability and causality | Solving difference equations with initial conditions; causal systems (digital control) |

**The geometric series** gives almost every closed form:

$$\begin{gathered}\frac{1}{1 - x} = 1 + x + x^2 + x^3 + \cdots, \\ |x| < 1\end{gathered}$$

## Standard sequences

**Unit impulse.** $\delta(k) = 1$ for $k = 0$ and 0 otherwise:

$$\mathcal{Z}\{\delta(k)\} = 1 + 0z^{-1} + 0z^{-2} + \cdots = 1$$

**Delayed impulse.** If the single non-zero value is at $k = 3$: $\mathcal{Z}\{\delta(k - 3)\} = z^{-3}$. In general, $\mathcal{Z}\{\delta(k - m)\} = z^{-m}$ (the class activity).

**Unit step.** $u(k) = 1$ for $k = 0, 1, 2, \ldots$ and 0 for $k < 0$:

$$\begin{gathered}\begin{aligned}\mathcal{Z}\{u(k)\} &= 1 + z^{-1} + z^{-2} + \cdots \\ &= \frac{1}{1 - z^{-1}} \\ &= \frac{z}{z - 1},\end{aligned} \\ |z^{-1}| < 1 \text{, i.e. } |z| > 1\end{gathered}$$

The ROC is everything **outside** the unit circle in the Argand diagram.

**Geometric (exponential) sequence.** $x(k) = a^k$ for $k \ge 0$ (and 0 for $k < 0$):

$$\begin{gathered}\begin{aligned}\mathcal{Z}\{a^k\} &= \sum_{k=0}^{\infty}(az^{-1})^k \\ &= \frac{1}{1 - az^{-1}} \\ &= \frac{z}{z - a},\end{aligned} \\ |z| > |a|\end{gathered}$$

- With $a = 2$: $\mathcal{Z}\{2^k\} = \dfrac{z}{z - 2}$, with ROC $|z| > 2$.
- With $a = 0.5$: $\mathcal{Z}\{0.5^k\} = \dfrac{z}{z - 0.5}$, with ROC $|z| > 0.5$.

**Sampled exponential.** $e(t) = e^{-at}$ sampled gives $e(k) = e^{-akT} = (e^{-aT})^k$, so

$$\mathcal{Z}\{e^{-akT}\} = \frac{z}{z - e^{-aT}}, \qquad |z| > e^{-aT}$$

**Sampled unit ramp.** $f(kT) = kT$, so $F(z) = T(z^{-1} + 2z^{-2} + 3z^{-3} + \cdots)$. Multiply by $z$ and subtract:

$$\begin{gathered}\begin{aligned}zF(z) - F(z) &= T(1 + z^{-1} + z^{-2} + \cdots) \\ &= \frac{Tz}{z - 1}\end{aligned} \\ \Rightarrow F(z) = \frac{Tz}{(z - 1)^2}\end{gathered}$$

## Table of transforms

| $f(t)$ | $F(s)$ | $F(z)$ (sampled every $T$) |
|---|---|---|
| $\delta(t)$ | 1 | 1 |
| $u(t)$, step | $\dfrac1s$ | $\dfrac{z}{z - 1}$ |
| $t$, ramp | $\dfrac{1}{s^2}$ | $\dfrac{Tz}{(z - 1)^2}$ |
| $e^{-at}$ | $\dfrac{1}{s + a}$ | $\dfrac{z}{z - e^{-aT}}$ |
| $\sin\omega t$ | $\dfrac{\omega}{s^2 + \omega^2}$ | $\dfrac{z\sin\omega T}{z^2 - 2z\cos\omega T + 1}$ |
| $\cos\omega t$ | $\dfrac{s}{s^2 + \omega^2}$ | $\dfrac{z(z - \cos\omega T)}{z^2 - 2z\cos\omega T + 1}$ |

The same pairs in terms of the sequence index $k$:

| Sequence | z-transform | Sequence | z-transform |
|---|---|---|---|
| $\delta(k)$ | 1 | $\delta(k - n)$ | $z^{-n}$ |
| 1 | $\dfrac{z}{z - 1}$ | $k$ | $\dfrac{z}{(z - 1)^2}$ |
| $a^k$ | $\dfrac{z}{z - a}$ | $ka^k$ | $\dfrac{az}{(z - a)^2}$ |
| $\sin ak$ | $\dfrac{z\sin a}{z^2 - 2z\cos a + 1}$ | $\cos ak$ | $\dfrac{z(z - \cos a)}{z^2 - 2z\cos a + 1}$ |

## Properties

| Property | Sequence | z-transform |
|---|---|---|
| Linearity | $a_1e_1(k) + a_2e_2(k)$ | $a_1E_1(z) + a_2E_2(z)$ |
| Shift right (delay) | $e(k - n)u(k - n)$ | $z^{-n}E(z)$ |
| Shift left (advance) | $e(k + n)$ | $z^n\left[E(z) - \sum_{k=0}^{n-1}e(k)z^{-k}\right]$ |
| Multiplication by $a^k$ | $a^ke(k)$ | $E(a^{-1}z) = E(z/a)$ |
| Complex translation | $e^{-ak}e(k)$ | $E(ze^{a})$ |
| Convolution | $\sum_{j}e_1(j)e_2(k - j)$ | $E_1(z)E_2(z)$ |
| Initial value | $e(0)$ | $\lim_{z\to\infty}E(z)$ |
| Final value | $e(\infty)$ | $\lim_{z\to1}(z - 1)E(z)$ |

The final-value theorem holds only if the final value exists, i.e. all poles of $(z - 1)E(z)$ are inside the unit circle.

**Shifting, by example.** With $e(k) = 2, 1.6, 1.3, 1.1, 1.0, \ldots$:

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $e(k)$ | 2 | 1.6 | 1.3 | 1.1 | 1.0 |
| $e(k - 2)$, shifted right | 0 | 0 | 2 | 1.6 | 1.3 |
| $e(k + 2)$, shifted left | 1.3 | 1.1 | 1.0 | … | … |

- One place right: $\mathcal{Z}\{r(k - 1)\} = z^{-1}R(z)$.
- One place left: $\mathcal{Z}\{r(k + 1)\} = zR(z) - zr(0)$.
- The subtracted terms in the left shift are the samples pushed off the start, because the one-sided transform counts only $k \ge 0$.

**Multiplication by $a^k$, derived.**

$$\begin{aligned}\mathcal{Z}\{a^kx(k)\} &= \sum_{k=0}^\infty x(k)a^kz^{-k} \\ &= \sum_{k=0}^\infty x(k)(a^{-1}z)^{-k} \\ &= X(a^{-1}z)\end{aligned}$$

**Worked example: a combination of impulses.** Find $X(z)$ for $x(k) = \delta(k) + 3\delta(k - 1) - \delta(k - 2)$. By linearity and the shift property,

$$X(z) = 1 + 3z^{-1} - z^{-2} = \frac{z^2 + 3z - 1}{z^2}$$

## Transfer functions and difference equations

Take the z-transform of a difference equation (zero initial conditions) and every $x(k - n)$ becomes $z^{-n}X(z)$. The ratio of output to input is the **pulse (discrete) transfer function**:

$$\begin{aligned}G(z) &= \frac{Y(z)}{U(z)} \\ &= \frac{b_0 + b_1z^{-1} + b_2z^{-2} + \cdots}{1 + a_1z^{-1} + a_2z^{-2} + \cdots}\end{aligned}$$

- **Poles** (the roots of the denominator) decide **stability** and the modes of the response.
- **Zeros** shape the response, and the frequency response in particular.

**Example.** $y(k) = 0.5y(k - 1) + x(k)$. Transforming:

$$\begin{gathered}Y(z) = 0.5z^{-1}Y(z) + X(z) \\ \Rightarrow G(z) = \frac{1}{1 - 0.5z^{-1}} = \frac{z}{z - 0.5}\end{gathered}$$

There is one pole, at $z = 0.5$. It is inside the unit circle, so the system is **stable**. Its impulse response is $0.5^k$.

## Laplace and z compared

| | Laplace transform | z-transform |
|---|---|---|
| Signal | Continuous-time | Sampled (discrete-time) |
| Model | Differential equation | Difference equation |
| Domain | s-plane, $s = \sigma + j\omega$ | z-plane |
| Stable if poles are | In the left half-plane | Inside the unit circle |

**Where the z-transform is used in digital control:**

- analysing stability, transient and steady-state response;
- designing digital controllers (PID, lead-lag, etc.);
- working out a system's behaviour from its transfer function;
- discretising analog models.

**Physical meaning.** The z-transform represents a sequence as a weighted sum of the basis sequences $z^{-k}$. It turns the dynamics described by difference equations into algebra. That makes stability, transient response and frequency response (on the unit circle, $z = e^{j\omega T}$) easy to analyse. It is the bridge between continuous and digital control.

> **Corrections to the notes and slides.**
> - The unit-step series converges for $|z^{-1}| < 1$, i.e. $|z| > 1$. The slides and notes print "$|z^{-1}| > 1$", but their own sentence ("z must lie outside the unit circle") gives the right region.
> - For the geometric sequence the notes write "$x(k) = 0$ for $n = 0, 1, 2$". It is zero for $k < 0$ and $a^k$ for $k \ge 0$.
> - In the impulse example the notes write $\mathcal{Z}\{\delta(k)\}$ as "$\delta(z)$" and divide by it. $\mathcal{Z}\{\delta(k)\} = 1$, so $X(z) = 1 + 3z^{-1} - z^{-2}$ directly.
