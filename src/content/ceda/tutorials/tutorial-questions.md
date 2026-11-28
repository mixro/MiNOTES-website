**The 44 tutorial questions** from the handwritten notes, with the answers re-checked. Where the notes' answer had an error, the answer box says so. Try each question before opening its answer.

## Q1 Physical meaning of the z-transform
Explain the physical meaning of the z-transform in discrete-time system analysis.

::: answer
The z-transform represents a discrete-time signal as a weighted sum of the basis sequences $z^{-k}$, $X(z) = \sum x(k)z^{-k}$. It turns a time-domain sequence into a function of a complex variable.

Physically, $z^{-1}$ is a one-sample delay. The transform turns the behaviour described by difference equations into algebra, which makes stability (pole positions), transient response and frequency response (on the unit circle, $z = e^{j\omega T}$) easy to analyse.
:::

## Q2 One-sided and two-sided transforms
Distinguish between the one-sided and two-sided z-transforms and state their applications.

::: answer
| Two-sided (bilateral) | One-sided (unilateral) |
|---|---|
| $X(z) = \sum_{k=-\infty}^{\infty}x(k)z^{-k}$ | $X(z) = \sum_{k=0}^{\infty}x(k)z^{-k}$ |
| Signals defined for all $k$, negative and positive | Only present and future values, $k \ge 0$ |
| General signal and system analysis, frequency-domain properties, stability and causality | Solving difference equations with initial conditions in digital control; causal systems |
:::

## Q3 Region of convergence
Define the region of convergence (ROC) and explain its importance.

::: answer
The ROC is the set of values of $z$ for which the z-transform series converges.

**It matters because:**

- **Stability:** a system is stable if its ROC includes the unit circle $|z| = 1$.
- **Causality:** an ROC outside the outermost pole means a causal (right-sided) signal; an ROC inside the innermost pole means an anti-causal one.
- **Uniqueness:** the ROC decides which sequence an algebraic $X(z)$ stands for.
:::

## Q4 Poles and zeros
Explain how the pole and zero locations affect the behaviour of a discrete-time system.

::: answer
**Poles** determine stability and the natural modes. A pole at $z = a$ gives a mode $a^k$:

- inside the unit circle it decays (stable);
- outside it grows (unstable);
- a simple pole on the circle gives a constant or a sustained oscillation (marginal).

**Zeros** shape the response and the frequency response, but do **not** decide stability:

- a zero on the unit circle at angle $\theta$ completely blocks the frequency with $\omega T = \theta$;
- zeros near the circle strongly attenuate nearby frequencies;
- a zero outside the circle makes the system non-minimum phase.

Cancelling an unstable pole with a zero is risky physically, because the cancellation is never exact.

*Correction:* the notes say "zeros inside the unit circle: system is stable" and "zeros outside have minimal effect". Stability depends only on the poles. Zeros outside the circle do have an effect: they give a non-minimum-phase response, for example an initial undershoot.
:::

## Q5 z-transform and Laplace transform
Compare the z-transform and the Laplace transform in terms of signal type, domain of analysis and stability.

::: answer
| | z-transform | Laplace transform |
|---|---|---|
| Signal type | Sampled (discrete-time) | Continuous-time |
| Domain of analysis | z-plane | s-plane, $s = \sigma + j\omega$ |
| Stability | Poles inside the unit circle | Poles in the left half-plane |
:::

## Q6 Methods of inversion
Explain three methods used to find the inverse z-transform.

::: answer
1. **Power series (long division):** expand $X(z) = x(0) + x(1)z^{-1} + x(2)z^{-2} + \cdots$. The coefficients are the samples. This suits simple rational functions and small $k$.
2. **Partial fractions:** split $X(z)/z$ into simple terms from the table, e.g. $\dfrac{A}{1 - pz^{-1}} \to Ap^ku(k)$.
3. **Residues:** $x(k) = \dfrac{1}{2\pi j}\oint X(z)z^{k - 1}\,dz$, the sum of the residues at the poles inside the contour. This suits complex or repeated poles.
:::

## Q7 When to use power series
Under what conditions is power-series expansion preferred?

::: answer
- Simple rational functions, where the denominator divides easily into the numerator.
- Only a few samples needed (small $k$).
- Right-sided (causal) signals.
- No closed form needed: the method copes with complex or repeated poles, because it never factors the denominator.
:::

## Q8 Why partial fractions
Why is partial-fraction expansion important?

::: answer
It breaks a complicated $X(z)$ into simple fractions whose inverse transforms are in the standard table. That gives a closed-form $x(k)$, which shows each mode ($a^k$, $ka^k$, damped sinusoids) separately.
:::

## Q9 The ROC and uniqueness
Explain how the ROC affects the uniqueness of the inverse z-transform.

::: answer
The same algebraic $X(z)$ can stand for different sequences, and the ROC fixes which one:

- **causal (right-sided):** the ROC is outside the outermost pole;
- **anti-causal (left-sided):** the ROC is inside the innermost pole;
- **two-sided:** the ROC is a ring between poles.

*Example:* $z/(z - a)$ is $a^ku(k)$ for $|z| > |a|$, but $-a^ku(-k - 1)$ for $|z| < |a|$.
:::

## Q10 Block-diagram reduction
Explain the importance of block-diagram reduction in digital control systems.

::: answer
It simplifies a complex control system into a single transfer function or a minimal structure. It:

- gives the overall transfer function;
- simplifies complex systems;
- reduces the computation;
- is essential for controller design and stability analysis.
:::

## Q11 Reduction rules
State the rules for reducing cascade, parallel and feedback blocks.

::: answer
- **Cascade:** $G(z) = G_1(z)G_2(z)$. In a sampled-data system this needs a sampler between the blocks; otherwise use $G_1G_2(z) = \mathcal{Z}\{G_1(s)G_2(s)\}$.
- **Parallel:** $G(z) = G_1(z) \pm G_2(z)$, with the signs of the summing junction.
- **Feedback:** $T(z) = \dfrac{G(z)}{1 \pm G(z)H(z)}$, with $+$ for negative feedback.
:::

## Q12 Effect of sampling on the rules
Explain how sampling affects the block-diagram reduction rules.

::: answer
Sampling makes every signal and block discrete, so everything is expressed in $z$. The cascade, parallel and feedback rules still apply. **But where the samplers are now matters:** blocks with no sampler between them must be multiplied in $s$ before transforming ($GH(z) \ne G(z)H(z)$), and computational delays ($z^{-1}$) must be included, especially in feedback loops. Ignoring them gives wrong results.

In short, sampling does not change the rules; it adds discrete-time effects and delays that change the reduced system.
:::

## Q13 Zero-order hold
Define the zero-order hold (ZOH) and explain its purpose.

::: answer
A ZOH converts a discrete-time signal into a continuous-time one by **holding each sampled value constant for one sampling interval**, until the next sample is available. Its purpose is to interface the digital controller with the continuous plant; it is how a DAC behaves. Its transfer function is $G_{h0}(s) = (1 - e^{-sT})/s$.
:::

## Q14 ZOH and high frequencies
Explain the effect of the ZOH on high-frequency signals.

::: answer
The ZOH behaves like a **low-pass filter**: its gain falls with frequency (it has a $\sin x/x$ shape), so high-frequency components are attenuated. It also adds phase lag that grows with frequency, which reduces the stability margins.
:::

## Q15 The ZOH delay
Describe the delay introduced by the ZOH and its effect on stability.

::: answer
Holding each sample for a whole period makes the staircase lag the samples by about **half a sampling period, $T/2$**, on average. This delay slows the response and reduces the phase margin (by about $\omega_cT/2$ radians at the crossover frequency $\omega_c$). It can therefore destabilise a loop that is stable in continuous time.
:::

## Q16 BIBO stability
State the condition for BIBO stability of a discrete-time system.

::: answer
A discrete-time LTI system is BIBO stable if and only if all the poles of its transfer function lie inside the unit circle, $|p| < 1$. Equivalently, the impulse response is absolutely summable:

$$\sum_{k=-\infty}^{\infty}|h(k)| < \infty$$

This ensures that any bounded input produces a bounded output.
:::

## Q17 Continuous and discrete stability
Compare the stability conditions for continuous-time and discrete-time systems.

::: answer
- **Continuous time:** an LTI system is stable if all the poles of its transfer function lie in the left half of the s-plane.
- **Discrete time:** it is stable if all the poles lie inside the unit circle in the z-plane.

The two agree through $z = e^{sT}$, which maps the left half-plane inside the circle.
:::

## Q18 Why the unit circle
Explain why the poles must lie inside the unit circle for stability.

::: answer
A pole at $z = a$ produces a mode proportional to $a^k$:

- if $|a| < 1$, it decays;
- if $|a| > 1$, it grows without bound;
- if $|a| = 1$, it never decays (marginal behaviour).

Only $|a| < 1$ gives a mode that dies away, which is what stability means.
:::

## Q19 Marginal stability
Explain marginal stability with an example.

::: answer
Marginal stability occurs when poles lie on the unit circle but are not repeated, so the response neither grows nor decays.

*Examples:*

- $H(z) = \dfrac{1}{1 - z^{-1}}$ has one pole at $z = 1$. Its impulse response is a constant (the unit step).
- A pair of poles at $z = e^{\pm j\omega}$ gives a sustained oscillation of constant amplitude.

*Correction:* the ROC of $1/(1 - z^{-1})$ is $|z| > 1$, i.e. $|z^{-1}| < 1$, not "$|z^{-1}| > 1$".
:::

## Q20 The bilinear transformation
Define the bilinear transformation and state its importance.

::: answer
The bilinear (Tustin) transformation maps the continuous-time s-domain to the discrete-time z-domain through

$$s = \frac2T\cdot\frac{1 - z^{-1}}{1 + z^{-1}}$$

where $T$ is the sampling period. **Why it matters:**

- it preserves stability, because every pole in the left half s-plane maps inside the unit circle;
- it gives a reliable way to discretise controllers such as PID;
- it allows digital filters to be designed from analog prototypes.

It is a non-linear mapping of frequency, which causes the warping in Q21.
:::

## Q21 Frequency warping
Explain frequency warping.

::: answer
Frequency warping is the non-linear distortion of the frequency axis that occurs when a continuous-time system is converted to discrete time with the bilinear transformation. The whole analog axis $0 \le \omega_a < \infty$ is squeezed onto $0 \le \omega_d < \pi/T$, by

$$\omega_a = \frac2T\tan\frac{\omega_dT}{2}$$

**Pre-warping** the critical frequency (a cut-off or crossover) with this formula makes the digital design match the analog one at that frequency.
:::

## Q22 Impulse invariance and bilinear
Compare impulse invariance and the bilinear transformation.

::: answer
| Impulse invariance | Bilinear transformation |
|---|---|
| Matches the sampled impulse response, preserving time-domain behaviour | Maps the whole $j\Omega$ axis onto the unit circle, so there is no aliasing |
| Can cause aliasing | Introduces frequency warping |
:::

## Q23 Why the bilinear transformation preserves stability
Explain why the bilinear transformation preserves stability.

::: answer
It maps the left half s-plane ($\text{Re}\,s < 0$) into the interior of the unit circle $|z| < 1$, and the $j\omega$ axis onto the circle. So stable analog poles map to stable discrete poles, and no unstable pole can map inside the circle. Q37 gives the proof.
:::

## Q24 Transform of 2ᵏ
Find the z-transform of $x(k) = 2^ku(k)$.

::: answer
$$\begin{aligned}X(z) &= \sum_{k=0}^\infty 2^kz^{-k} \\ &= 1 + 2z^{-1} + 4z^{-2} + \cdots \\ &= \frac{1}{1 - 2z^{-1}} \\ &= \frac{z}{z - 2}\end{aligned}$$

The ROC is $|2z^{-1}| < 1$, i.e. $|z| > 2$.
:::

## Q25 Transform of 0.5ᵏ
Determine the z-transform and ROC of $x(k) = (0.5)^ku(k)$.

::: answer
$$\begin{aligned}X(z) &= \sum_{k=0}^\infty(0.5z^{-1})^k \\ &= \frac{1}{1 - 0.5z^{-1}} \\ &= \frac{z}{z - 0.5}\end{aligned}$$

The ROC is $|0.5z^{-1}| < 1$, i.e. $|z| > 0.5$.
:::

## Q26 A combination of impulses
Compute the z-transform of $x(k) = \delta(k) + 3\delta(k - 1) - \delta(k - 2)$.

::: answer
By linearity and the right-shift property $\mathcal{Z}\{x(k - n)\} = z^{-n}X(z)$, with $\mathcal{Z}\{\delta(k)\} = 1$:

$$X(z) = 1 + 3z^{-1} - z^{-2} = \frac{z^2 + 3z - 1}{z^2}$$

*Correction:* the notes write $\mathcal{Z}\{\delta(k)\}$ as "$\delta(z)$" and present $X(z)/\delta(z)$ as a transfer function. $\mathcal{Z}\{\delta(k)\}$ is simply 1.
:::

## Q27 Inverse of z/(z − 0.6)
Find the inverse z-transform of $X(z) = \dfrac{z}{z - 0.6}$.

::: answer
From the pair $\dfrac{z}{z - a} \leftrightarrow a^k$: $x(k) = (0.6)^ku(k)$.
:::

## Q28 Inverse by partial fractions
Determine $x(k)$ for $X(z) = \dfrac{z^2}{(z - 1)(z - 0.5)}$.

::: answer
$$\begin{aligned}\frac{X(z)}{z} &= \frac{z}{(z - 1)(z - 0.5)} \\ &= \frac{A}{z - 1} + \frac{B}{z - 0.5}\end{aligned}$$

From $z = A(z - 0.5) + B(z - 1)$: at $z = 1$, $A = 2$; at $z = 0.5$, $B = -1$. So

$$\begin{gathered}X(z) = \frac{2z}{z - 1} - \frac{z}{z - 0.5} \\ \Rightarrow x(k) = \left[2 - (0.5)^k\right]u(k)\end{gathered}$$

Check: 1, 1.5, 1.75, … ✓
:::

## Q29 Power series
Use power-series expansion to find the inverse z-transform of $X(z) = \dfrac{1}{1 - 0.4z^{-1}}$.

::: answer
Long division gives $X(z) = 1 + 0.4z^{-1} + 0.16z^{-2} + 0.064z^{-3} + \cdots$. So $x(k) = 1, 0.4, 0.16, 0.064, \ldots = (0.4)^k$.
:::

## Q30 Reduce a feedback system
Reduce the system with $G_1(z) = \dfrac{z}{z - 0.2}$ and $G_2(z) = \dfrac{1}{z - 0.5}$ in cascade, and negative feedback $H(z) = 0.4$.

::: answer
$$\begin{aligned}\frac{Y(z)}{R(z)} &= \frac{G_1G_2}{1 + G_1G_2H} \\ &= \frac{z}{(z - 0.2)(z - 0.5) + 0.4z} \\ &= \frac{z}{z^2 - 0.3z + 0.1}\end{aligned}$$

The poles are $0.15 \pm j0.278$, with $|z| = 0.316$: stable.
:::

## Q31 Unity feedback
Determine the closed-loop transfer function of a unity-feedback system with $G(z) = \dfrac{z}{z - 0.8}$.

::: answer
$$\begin{aligned}\frac{C(z)}{R(z)} &= \frac{G}{1 + G} \\ &= \frac{z}{(z - 0.8) + z} \\ &= \frac{z}{2z - 0.8} \\ &= \frac{0.5z}{z - 0.4}\end{aligned}$$
:::

## Q32 ZOH equivalent
Derive the ZOH equivalent of $G(s) = \dfrac{1}{s + 2}$ with $T = 0.2$ s.

::: answer
$$\begin{gathered}G(z) = (1 - z^{-1})\,\mathcal{Z}\left\{\frac{1}{s(s + 2)}\right\}, \\ \frac{1}{s(s + 2)} = \frac{0.5}{s} - \frac{0.5}{s + 2}\end{gathered}$$

$$\begin{aligned}G(z) &= \frac{z - 1}{z}\left[\frac{0.5z}{z - 1} - \frac{0.5z}{z - e^{-0.4}}\right] \\ &= 0.5 - \frac{0.5(z - 1)}{z - 0.670} \\ &= \frac{0.5(1 - 0.670)}{z - 0.670} \\ &= \frac{0.165}{z - 0.670}\end{aligned}$$
:::

## Q33 The staircase
Explain mathematically how the ZOH produces a staircase signal.

::: answer
$$\begin{aligned}x_h(t) = \sum_{k=0}^{\infty}x(k)\big[&u(t - kT) \\ &- u(t - (k + 1)T)\big]\end{aligned}$$

Each bracket is a rectangular pulse of width $T$ starting at $kT$, scaled to the height $x(k)$. Adding the pulses gives a staircase that is constant on each interval $[kT, (k + 1)T)$. (The notes write the bracket without its closing parenthesis; the meaning is the same.)
:::

## Q34 Stability of a second-order system
Determine the stability of $G(z) = \dfrac{z}{z^2 + 1.2z + 0.32}$.

::: answer
$z^2 + 1.2z + 0.32 = (z + 0.4)(z + 0.8) = 0$, so the poles are $z = -0.4$ and $z = -0.8$. Both are inside the unit circle, so the system is **stable**.

*Correction:* the notes factor it as $z^2 - 0.4z - 0.8z + 0.32$ and give poles at +0.4 and +0.8. That polynomial would be $z^2 - 1.2z + 0.32$. The conclusion, stable, is the same.
:::

## Q35 A repeated pole
Assess the stability of $z^2 - 0.6z + 0.09 = 0$.

::: answer
$(z - 0.3)^2 = 0$ gives a double pole at $z = 0.3$, inside the unit circle: **stable**.
:::

## Q36 Bilinear conversion
Convert $G(s) = \dfrac{1}{s + 1}$ into the z-domain with the bilinear transformation, $T = 0.1$ s.

::: answer
$s = \dfrac{2}{0.1}\cdot\dfrac{z - 1}{z + 1} = 20\dfrac{z - 1}{z + 1}$, so

$$\begin{aligned}G(z) &= \frac{1}{20\frac{z - 1}{z + 1} + 1} \\ &= \frac{z + 1}{21z - 19} \\ &= \frac{0.0476(z + 1)}{z - 0.9048}\end{aligned}$$

(The notes give 0.0477; $1/21 = 0.04762$.)
:::

## Q37 The left half-plane maps inside the circle
Show that the bilinear transformation maps the left half s-plane into the unit circle.

::: answer
From $s = \dfrac2T\dfrac{z - 1}{z + 1}$: $z = \dfrac{1 + sT/2}{1 - sT/2}$. With $s = \sigma + j\omega$:

$$|z|^2 = \frac{\left(1 + \frac{\sigma T}{2}\right)^2 + \left(\frac{\omega T}{2}\right)^2}{\left(1 - \frac{\sigma T}{2}\right)^2 + \left(\frac{\omega T}{2}\right)^2}$$

For $\sigma < 0$, $\left|1 + \frac{\sigma T}{2}\right| < 1 - \frac{\sigma T}{2}$, so the numerator is smaller than the denominator and $|z| < 1$. Every point of the left half-plane maps inside the unit circle. With $\sigma = 0$ the two are equal and $|z| = 1$.
:::

## Q38 A digital temperature controller
A digital temperature controller samples every 0.5 s. Explain why z-transform analysis is preferred, and state the stability condition.

::: answer
The controller sees the temperature only every 0.5 s, so the loop is a discrete-time system. The z-transform is designed to handle sampled signals, delays and digital feedback exactly.

**Stability condition:** all the poles of the closed-loop discrete transfer function must lie inside the unit circle, $|z| < 1$. This ensures a bounded output for a bounded input.
:::

## Q39 A decaying sequence
Given $X(z) = \dfrac{z}{z - 0.9}$, find the time-domain signal and comment on its behaviour.

::: answer
$x(k) = (0.9)^ku(k)$. It is a decaying exponential: since $0.9 < 1$, the terms shrink as $k$ grows. The signal is stable because the pole at $z = 0.9$ is inside the unit circle. Because 0.9 is close to 1 it decays slowly, to 10% after about 22 samples.
:::

## Q40 Reduction and stability in industry
Explain how block-diagram reduction simplifies stability analysis in industrial digital controllers.

::: answer
Combining the interconnected blocks (sensors, controllers, delays, actuators) into one equivalent z-domain transfer function turns a complex system into a simple mathematical form whose poles are easy to find. Stability is then checked once, by verifying that every pole is inside the unit circle, instead of analysing many blocks separately.
:::

## Q41 Sampling time and a DAC with ZOH
A DAC with a ZOH drives a continuous plant. Discuss the effect of the sampling time on accuracy.

::: answer
- **A small $T$** updates the DAC output often, so the staircase follows the true signal closely: higher accuracy, less distortion and a small $T/2$ delay.
- **A large $T$** holds each value too long, giving a coarse staircase, more delay and the loss of high-frequency information. This reduces accuracy, degrades control performance and can even destabilise the loop.
:::

## Q42 An unstable controller
A discrete controller has poles at $z = 0.6$ and $z = 1.05$. Comment on its stability and the practical implications.

::: answer
It is **unstable**, because the pole at 1.05 lies outside the unit circle.

**Practical implications:**

- the controller output grows without bound (as $1.05^k$, doubling about every 14 samples), leading to oscillation or divergence of the plant and to actuator saturation;
- the design must be corrected to bring every pole inside the circle.
:::

## Q43 Bilinear for PID
Explain why the bilinear transformation suits converting continuous PID controllers to digital form.

::: answer
It preserves stability: it maps the left half s-plane inside the unit circle, so a PID that stabilises the analog loop gives a stable digital controller. It also keeps the controller's frequency response close to the analog one up to well below the Nyquist frequency, and it can be pre-warped at the crossover frequency.
:::

## Q44 The three tools together
Discuss how the z-transform, block-diagram reduction and stability analysis are used together in a digital feedback system.

::: answer
1. The **z-transform** represents the sampled signals, the controller and the plant (with its ZOH) in the z-domain.
2. **Block-diagram reduction** combines these discrete blocks, respecting the sampler positions, into one closed-loop transfer function.
3. **Stability analysis** checks that every pole of the reduced transfer function is inside the unit circle, by root finding, the Jury test or the bilinear transformation with Routh. This ensures stable digital feedback.
:::
