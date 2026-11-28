# Sampler, zero-order hold and pulse transfer functions

*Lectures 2 and 3 · EEU 08101 Control Engineering Digital Analysis*

## From continuous to digital and back

- **Transition:** a continuous signal $c(t)$ is sampled to become a sequence $c(kT)$.
- **The sampler** is modelled as multiplication by an **impulse train**. The sampled signal $c^*(t) = \sum_k c(kT)\delta(t - kT)$ has the transform $C(z)$.
- **Reconstruction:** a **zero-order hold (ZOH)** keeps each value constant until the next sample, turning the pulses into a **staircase**.

In digital control we care about what happens *between* the samples as well as at them. That is why the ZOH matters: the plant is continuous and keeps responding between samples.

## The zero-order hold

A **ZOH** converts a discrete-time signal into a continuous-time one by **holding each sample constant for one sampling interval**, until the next sample is available. It is how a DAC behaves, and its purpose is to interface the digital controller with the continuous plant.

<figure class="fig"><svg viewBox="0 0 610 225" role="img" aria-label="Zero-order hold output: each sample is held constant for one sampling period, giving a staircase."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="50" y1="170" x2="600" y2="170" class="d-ax"  marker-end="url(#ah)"/><line x1="50" y1="170" x2="50" y2="20" class="d-ax"  marker-end="url(#ah)"/><text x="600" y="188" text-anchor="end" class="d-t s">t</text><text x="58" y="26" text-anchor="start" class="d-t b">x</text><line x1="50" y1="150.0" x2="102" y2="150.0" class="d-a w" /><line x1="102" y1="150.0" x2="102" y2="115.0" class="d-a w" /><circle cx="50" cy="150.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="50" y1="170" x2="50" y2="150.0" class="d-mut" /><line x1="102" y1="115.0" x2="154" y2="115.0" class="d-a w" /><line x1="154" y1="115.0" x2="154" y2="80.0" class="d-a w" /><circle cx="102" cy="115.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="102" y1="170" x2="102" y2="115.0" class="d-mut" /><text x="102" y="190" text-anchor="middle" class="d-t s m">T</text><line x1="154" y1="80.0" x2="206" y2="80.0" class="d-a w" /><line x1="206" y1="80.0" x2="206" y2="59.999999999999986" class="d-a w" /><circle cx="154" cy="80.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="154" y1="170" x2="154" y2="80.0" class="d-mut" /><text x="154" y="190" text-anchor="middle" class="d-t s m">2T</text><line x1="206" y1="59.999999999999986" x2="258" y2="59.999999999999986" class="d-a w" /><line x1="258" y1="59.999999999999986" x2="258" y2="35.0" class="d-a w" /><circle cx="206" cy="60.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="206" y1="170" x2="206" y2="59.999999999999986" class="d-mut" /><text x="206" y="190" text-anchor="middle" class="d-t s m">3T</text><line x1="258" y1="35.0" x2="310" y2="35.0" class="d-a w" /><line x1="310" y1="35.0" x2="310" y2="40.0" class="d-a w" /><circle cx="258" cy="35.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="258" y1="170" x2="258" y2="35.0" class="d-mut" /><text x="258" y="190" text-anchor="middle" class="d-t s m">4T</text><line x1="310" y1="40.0" x2="362" y2="40.0" class="d-a w" /><line x1="362" y1="40.0" x2="362" y2="65.0" class="d-a w" /><circle cx="310" cy="40.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="310" y1="170" x2="310" y2="40.0" class="d-mut" /><text x="310" y="190" text-anchor="middle" class="d-t s m">5T</text><line x1="362" y1="65.0" x2="414" y2="65.0" class="d-a w" /><line x1="414" y1="65.0" x2="414" y2="90.0" class="d-a w" /><circle cx="362" cy="65.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="362" y1="170" x2="362" y2="65.0" class="d-mut" /><text x="362" y="190" text-anchor="middle" class="d-t s m">6T</text><line x1="414" y1="90.0" x2="466" y2="90.0" class="d-a w" /><line x1="466" y1="90.0" x2="466" y2="100.0" class="d-a w" /><circle cx="414" cy="90.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="414" y1="170" x2="414" y2="90.0" class="d-mut" /><text x="414" y="190" text-anchor="middle" class="d-t s m">7T</text><line x1="466" y1="100.0" x2="518" y2="100.0" class="d-a w" /><line x1="518" y1="100.0" x2="518" y2="95.0" class="d-a w" /><circle cx="466" cy="100.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="466" y1="170" x2="466" y2="100.0" class="d-mut" /><text x="466" y="190" text-anchor="middle" class="d-t s m">8T</text><line x1="518" y1="95.0" x2="570" y2="95.0" class="d-a w" /><circle cx="518" cy="95.0" r="4.5" class="d-fill" style="fill:var(--red)"/><line x1="518" y1="170" x2="518" y2="95.0" class="d-mut" /><text x="518" y="190" text-anchor="middle" class="d-t s m">9T</text><text x="570" y="214" text-anchor="end" class="d-t s m">samples x(kT) (red), ZOH output (staircase)</text></svg><figcaption>Zero-order hold. Each sample x(kT) is held constant until the next one arrives, so the plant sees a staircase. On average the staircase lags the samples by about half a period, T/2.</figcaption></figure>

**Mathematically**, the output is a sum of rectangular pulses of width $T$ and height $x(k)$:

$$\begin{aligned}x_h(t) = \sum_{k=0}^{\infty}x(k)\big[&u(t - kT) \\ &- u(t - (k + 1)T)\big]\end{aligned}$$

where $u(t)$ is the unit step. Each bracket is a pulse that switches on at $kT$ and off at $(k + 1)T$, so the sum is a staircase, constant on each interval $[kT, (k + 1)T)$.

**Its transfer function.** The response of a ZOH to a unit impulse is a single pulse of height 1 and width $T$, $u(t) - u(t - T)$, so

$$G_{h0}(s) = \frac{1 - e^{-sT}}{s}$$

- The $\dfrac1s$ term represents **integration**: holding a constant value is the integral of the impulse.
- The $(1 - e^{-sT})$ term subtracts the same step one period later. It becomes $(1 - z^{-1})$ in the z-domain.

**Why the ZOH matters:**

- actuators cannot change instantly;
- it models what real systems actually see;
- it is used in practically every digital control system.

**Effects of the ZOH:**

- **It acts as a low-pass filter.** High-frequency components are attenuated, which also smooths the staircase.
- **It adds a delay of about $T/2$.** On average the staircase lags the samples by half a period. This phase lag reduces the phase margin and slows the response, so it can push a loop towards instability.
- **The sampling time sets the accuracy.** A small $T$ updates the DAC often, so the staircase follows the true signal closely. A large $T$ holds each value too long, which gives a coarse staircase, more delay, the loss of high-frequency information and worse control performance.

## The pulse transfer function

The **pulse transfer function** relates the sampled output to the sampled input: $G(z) = C(z)/R(z)$. For a plant $G(s)$ driven through a ZOH:

$$\boxed{\begin{aligned}G(z) &= \mathcal{Z}\left\{\frac{1 - e^{-sT}}{s}G(s)\right\} \\ &= (1 - z^{-1})\,\mathcal{Z}\left\{\frac{G(s)}{s}\right\}\end{aligned}}$$

**Procedure:**

1. Start with $G(s)$.
2. Divide by $s$.
3. Take the z-transform of $G(s)/s$ (partial fractions, then the table).
4. Multiply by $(1 - z^{-1}) = \dfrac{z - 1}{z}$.

*Meaning of $(1 - z^{-1})$:* $G(s)/s$ is the plant's **step** response. The ZOH pulse is a step minus a step delayed by $T$, so the factor converts the step response into the response to one held sample.

### Example 1: first-order lag with a ZOH

For $G(s) = \dfrac{1}{s + a}$: $\dfrac{1}{s(s + a)} = \dfrac{1}{a}\left[\dfrac1s - \dfrac{1}{s + a}\right]$, so

$$\begin{aligned}G(z) &= \frac{z - 1}{z}\cdot\frac1a\left[\frac{z}{z - 1} - \frac{z}{z - e^{-aT}}\right] \\ &= \frac1a\left[1 - \frac{z - 1}{z - e^{-aT}}\right] \\ &= \frac{1}{a}\cdot\frac{1 - e^{-aT}}{z - e^{-aT}}\end{aligned}$$

This is the discrete equivalent of a first-order lag, with its pole at $e^{-aT}$. Its DC gain is $G(1) = 1/a$, the same as $G(0)$ for the continuous plant, as it must be.

Without a hold (impulse sampling only), the transform of $1/(s + a)$ is just $\dfrac{z}{z - e^{-aT}}$. That is a different function, which shows the hold changes the model.

### Example 2: $G(s) = \dfrac{1}{s + 2}$, $T = 0.5$ s

1. $G(z) = \dfrac{z - 1}{z}\mathcal{Z}\left\{\dfrac{1}{s(s + 2)}\right\}$.
2. Partial fractions: $\dfrac{1}{s(s + 2)} = \dfrac{0.5}{s} - \dfrac{0.5}{s + 2}$.
3. Transform: $\dfrac{0.5z}{z - 1} - \dfrac{0.5z}{z - e^{-2(0.5)}} = \dfrac{0.5z}{z - 1} - \dfrac{0.5z}{z - 0.368}$.
4. Combine:

$$\begin{aligned}G(z) &= 0.5\left[1 - \frac{z - 1}{z - 0.368}\right] \\ &= \frac{0.5 \times 0.632}{z - 0.368} \\ &= \frac{0.316}{z - 0.368}\end{aligned}$$

### Example 3: the same plant, $T = 0.2$ s

Now $e^{-2T} = e^{-0.4} = 0.670$:

$$\begin{aligned}G(z) &= 0.5\left[1 - \frac{z - 1}{z - 0.670}\right] \\ &= \frac{0.5(1 - 0.670)}{z - 0.670} \\ &= \frac{0.165}{z - 0.670}\end{aligned}$$

A shorter sampling period moves the pole closer to $z = 1$ (the s-plane pole at −2 maps to $e^{-2T}$), and the gain per sample falls.

### Example 4: $G(s) = \dfrac{1}{s(s + 1)}$, $T = 0.1$ s (used in Chapter 8)

$\dfrac{1}{s^2(s + 1)} = \dfrac{1}{s^2} - \dfrac1s + \dfrac{1}{s + 1}$. Transforming and multiplying by $\dfrac{z - 1}{z}$ gives

$$\small \begin{aligned}G(z) &= \frac{(T - 1 + e^{-T})z + (1 - e^{-T} - Te^{-T})}{(z - 1)(z - e^{-T})} \\ &= \frac{0.004837z + 0.004679}{z^2 - 1.9048z + 0.9048}\end{aligned}$$

## Other ways to discretise

| Method | Rule | Notes |
|---|---|---|
| **ZOH equivalent** | $G(z) = (1 - z^{-1})\mathcal{Z}\{G(s)/s\}$ | Exact at the samples for a staircase input; the physical model of a DAC driving a plant |
| **Bilinear (Tustin)** | $s = \dfrac{2}{T}\cdot\dfrac{1 - z^{-1}}{1 + z^{-1}} = \dfrac2T\cdot\dfrac{z - 1}{z + 1}$ | Maps the whole left half-plane into the unit circle, so it preserves stability; frequency warping |
| **Matched pole-zero** | Map each pole and zero by $z = e^{sT}$ | Then match the DC gain |
| **Impulse invariance** | Sample the impulse response: $G(z) = \mathcal{Z}\{g(kT)\}$ | Preserves the impulse response at the samples, but can alias |

### The bilinear (Tustin) transformation

$$\begin{gathered}s = \frac{2}{T}\cdot\frac{1 - z^{-1}}{1 + z^{-1}} \\ \Leftrightarrow z = \frac{1 + sT/2}{1 - sT/2}\end{gathered}$$

It comes from the trapezoidal rule for integration. It matters because:

- it **preserves stability**: every pole in the left half s-plane maps inside the unit circle;
- it gives a reliable way to discretise controllers such as PID;
- it allows digital filters to be designed from analog prototypes.

**Example.** Convert $G(s) = \dfrac{1}{s + 1}$ with $T = 0.1$ s. Here $s = 20\dfrac{z - 1}{z + 1}$, so

$$\begin{aligned}G(z) &= \frac{1}{20\frac{z - 1}{z + 1} + 1} \\ &= \frac{z + 1}{20(z - 1) + z + 1} \\ &= \frac{z + 1}{21z - 19} \\ &= \frac{0.0476(z + 1)}{z - 0.9048}\end{aligned}$$

The pole at $19/21 = 0.9048$ is almost exactly $e^{-0.1} = 0.9048$, the true pole location.

**Why it preserves stability.** Put $s = \sigma + j\omega$ into $z = \dfrac{1 + sT/2}{1 - sT/2}$:

$$|z|^2 = \frac{\left(1 + \frac{\sigma T}{2}\right)^2 + \left(\frac{\omega T}{2}\right)^2}{\left(1 - \frac{\sigma T}{2}\right)^2 + \left(\frac{\omega T}{2}\right)^2}$$

If $\sigma < 0$, then $\left|1 + \frac{\sigma T}{2}\right| < 1 - \frac{\sigma T}{2}$, so the numerator is smaller than the denominator and $|z| < 1$. Every point of the left half s-plane maps inside the unit circle, and stable analog poles stay stable.

**Frequency warping.** The whole $j\omega$ axis, from 0 to ∞, is squeezed onto the unit circle, from $z = 1$ to $z = -1$. The frequency axis is therefore distorted non-linearly:

$$\omega_a = \frac{2}{T}\tan\frac{\omega_dT}{2}$$

where $\omega_a$ is the analog and $\omega_d$ the digital frequency. At low frequency the two agree; near the Nyquist frequency they differ greatly. **Pre-warping** the design frequency with this formula makes the digital filter match the analog one exactly at the critical frequency.

**Impulse invariance compared with bilinear:**

| Impulse invariance | Bilinear |
|---|---|
| Matches the sampled impulse response and preserves time-domain behaviour | Maps the entire $j\Omega$ axis onto the unit circle, so there is **no aliasing** |
| Can suffer **aliasing** | Introduces **frequency warping** |

> **Corrections to the notes and slides.** The ZOH equivalent of $1/(s + a)$ is given as $(1 - e^{-aT})/(z - e^{-aT})$. The factor $1/a$ is missing: it is $\dfrac{1}{a}\cdot\dfrac{1 - e^{-aT}}{z - e^{-aT}}$. The notes' own numerical example (Example 2, with $a = 2$) shows it: $0.5 \times 0.632 = 0.316$. In Example 3 the notes round $e^{-0.4}$ to 0.67 and give $0.165/(z - 0.67)$, which is right to that precision.
