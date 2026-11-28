# Stability in the z-plane

*Lecture 3 · EEU 08101 Control Engineering Digital Analysis*

## Where the unit circle comes from

How do we move from the s-plane, where "stable" means the left half-plane, to the z-plane? Through the mapping

$$\begin{gathered}z = e^{sT}, \\ s = \sigma + j\omega \\ \Rightarrow z = e^{\sigma T}e^{j\omega T}, \\ |z| = e^{\sigma T}\end{gathered}$$

- **Stability boundary** ($\sigma = 0$, the $j\omega$ axis): $|z| = e^0 = 1$, which traces the **unit circle**.
- **Stable region** ($\sigma < 0$): $|z| < 1$, the **inside** of the circle.
- **Unstable region** ($\sigma > 0$): $|z| > 1$, the **outside**.

<figure class="fig"><svg viewBox="0 0 610 285" role="img" aria-label="The left half of the s-plane maps to the inside of the unit circle in the z-plane; the imaginary axis maps to the circle."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="30" y="30" width="120" height="220" class="d-box c"/><line x1="20" y1="140" x2="270" y2="140" class="d-ax"  marker-end="url(#ah)"/><line x1="150" y1="255" x2="150" y2="20" class="d-ax"  marker-end="url(#ah)"/><text x="270" y="158" text-anchor="end" class="d-t s">σ</text><text x="158" y="32" text-anchor="start" class="d-t s">jω</text><line x1="150" y1="30" x2="150" y2="250" class="d-r w" /><text x="90" y="70" text-anchor="middle" class="d-t s c">stable</text><text x="90" y="88" text-anchor="middle" class="d-t s m">(σ < 0)</text><text x="212" y="70" text-anchor="middle" class="d-t s r">unstable</text><text x="160" y="240" text-anchor="start" class="d-t s r">jω axis</text><text x="150" y="270" text-anchor="middle" class="d-t b">s-plane</text><line x1="300" y1="140" x2="360" y2="140" class="d-a w"  marker-end="url(#ah)"/><text x="330" y="126" text-anchor="middle" class="d-t s a">z = e</text><text x="350" y="118" text-anchor="start" class="d-t s a">sT</text><circle cx="470" cy="140" r="90" class="d-box c"/><circle cx="470" cy="140" r="90" class="d-r w" /><line x1="350" y1="140" x2="595" y2="140" class="d-ax"  marker-end="url(#ah)"/><line x1="470" y1="255" x2="470" y2="20" class="d-ax"  marker-end="url(#ah)"/><text x="595" y="158" text-anchor="end" class="d-t s">Re z</text><text x="478" y="32" text-anchor="start" class="d-t s">Im z</text><text x="425" y="95" text-anchor="middle" class="d-t s c">stable</text><text x="425" y="113" text-anchor="middle" class="d-t s m">|z| < 1</text><text x="545" y="55" text-anchor="start" class="d-t s r">|z| = 1</text><text x="474" y="158" text-anchor="start" class="d-t s m">1</text><text x="564" y="158" text-anchor="start" class="d-t s m">1</text><text x="470" y="270" text-anchor="middle" class="d-t b">z-plane</text></svg><figcaption>z = e<sup>sT</sup> with s = σ + jω gives |z| = e<sup>σT</sup>. The left half of the s-plane (σ < 0) maps inside the unit circle, the jω axis onto the circle |z| = 1, and the right half outside it.</figcaption></figure>

## The stability condition

A discrete-time LTI system is **stable** if all the poles of its transfer function lie **inside the unit circle**:

$$|z_p| < 1 \quad\text{for every pole}$$

**Why.** A pole at $z = a$ contributes a mode $a^k$ to the response:

- if $|a| < 1$, the mode **decays**, which is the definition of stability;
- if $|a| > 1$, it **grows** without bound;
- if $|a| = 1$, it neither grows nor decays: marginal behaviour.

<figure class="fig"><svg viewBox="0 0 620 310" role="img" aria-label="Impulse-response modes for poles at different positions in the z-plane."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="20" y="20" width="186" height="136" rx="10" class="d-box"/><line x1="34" y1="102" x2="196" y2="102" class="d-mut" /><line x1="40" y1="102" x2="40" y2="68.0" class="d-a" /><circle cx="40" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="53" y1="102" x2="53" y2="81.6" class="d-a" /><circle cx="53" cy="81.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="66" y1="102" x2="66" y2="89.76" class="d-a" /><circle cx="66" cy="89.8" r="3" class="d-fill" style="fill:var(--link)"/><line x1="79" y1="102" x2="79" y2="94.656" class="d-a" /><circle cx="79" cy="94.7" r="3" class="d-fill" style="fill:var(--link)"/><line x1="92" y1="102" x2="92" y2="97.5936" class="d-a" /><circle cx="92" cy="97.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="105" y1="102" x2="105" y2="99.35616" class="d-a" /><circle cx="105" cy="99.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="118" y1="102" x2="118" y2="100.413696" class="d-a" /><circle cx="118" cy="100.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="131" y1="102" x2="131" y2="101.0482176" class="d-a" /><circle cx="131" cy="101.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="144" y1="102" x2="144" y2="101.42893056" class="d-a" /><circle cx="144" cy="101.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="157" y1="102" x2="157" y2="101.657358336" class="d-a" /><circle cx="157" cy="101.7" r="3" class="d-fill" style="fill:var(--link)"/><line x1="170" y1="102" x2="170" y2="101.7944150016" class="d-a" /><circle cx="170" cy="101.8" r="3" class="d-fill" style="fill:var(--link)"/><line x1="183" y1="102" x2="183" y2="101.87664900096" class="d-a" /><circle cx="183" cy="101.9" r="3" class="d-fill" style="fill:var(--link)"/><text x="113" y="40" text-anchor="middle" class="d-t s b">z = 0.6</text><text x="113" y="148" text-anchor="middle" class="d-t s m">decays</text><rect x="220" y="20" width="186" height="136" rx="10" class="d-box"/><line x1="234" y1="102" x2="396" y2="102" class="d-mut" /><line x1="240" y1="102" x2="240" y2="68.0" class="d-a" /><circle cx="240" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="253" y1="102" x2="253" y2="122.4" class="d-a" /><circle cx="253" cy="122.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="266" y1="102" x2="266" y2="89.76" class="d-a" /><circle cx="266" cy="89.8" r="3" class="d-fill" style="fill:var(--link)"/><line x1="279" y1="102" x2="279" y2="109.344" class="d-a" /><circle cx="279" cy="109.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="292" y1="102" x2="292" y2="97.5936" class="d-a" /><circle cx="292" cy="97.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="305" y1="102" x2="305" y2="104.64384" class="d-a" /><circle cx="305" cy="104.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="318" y1="102" x2="318" y2="100.413696" class="d-a" /><circle cx="318" cy="100.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="331" y1="102" x2="331" y2="102.9517824" class="d-a" /><circle cx="331" cy="103.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="344" y1="102" x2="344" y2="101.42893056" class="d-a" /><circle cx="344" cy="101.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="357" y1="102" x2="357" y2="102.342641664" class="d-a" /><circle cx="357" cy="102.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="370" y1="102" x2="370" y2="101.7944150016" class="d-a" /><circle cx="370" cy="101.8" r="3" class="d-fill" style="fill:var(--link)"/><line x1="383" y1="102" x2="383" y2="102.12335099904" class="d-a" /><circle cx="383" cy="102.1" r="3" class="d-fill" style="fill:var(--link)"/><text x="313" y="40" text-anchor="middle" class="d-t s b">z = −0.6</text><text x="313" y="148" text-anchor="middle" class="d-t s m">decays, alternating sign</text><rect x="420" y="20" width="186" height="136" rx="10" class="d-box"/><line x1="434" y1="102" x2="596" y2="102" class="d-mut" /><line x1="440" y1="102" x2="440" y2="68.0" class="d-a" /><circle cx="440" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="453" y1="102" x2="453" y2="68.0" class="d-a" /><circle cx="453" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="466" y1="102" x2="466" y2="68.0" class="d-a" /><circle cx="466" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="479" y1="102" x2="479" y2="68.0" class="d-a" /><circle cx="479" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="492" y1="102" x2="492" y2="68.0" class="d-a" /><circle cx="492" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="505" y1="102" x2="505" y2="68.0" class="d-a" /><circle cx="505" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="518" y1="102" x2="518" y2="68.0" class="d-a" /><circle cx="518" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="531" y1="102" x2="531" y2="68.0" class="d-a" /><circle cx="531" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="544" y1="102" x2="544" y2="68.0" class="d-a" /><circle cx="544" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="557" y1="102" x2="557" y2="68.0" class="d-a" /><circle cx="557" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="570" y1="102" x2="570" y2="68.0" class="d-a" /><circle cx="570" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="583" y1="102" x2="583" y2="68.0" class="d-a" /><circle cx="583" cy="68.0" r="3" class="d-fill" style="fill:var(--link)"/><text x="513" y="40" text-anchor="middle" class="d-t s b">z = 1</text><text x="513" y="148" text-anchor="middle" class="d-t s m">constant (marginal)</text><rect x="20" y="170" width="186" height="136" rx="10" class="d-box"/><line x1="34" y1="252" x2="196" y2="252" class="d-mut" /><line x1="40" y1="252" x2="40" y2="244.69193042770135" class="d-a" /><circle cx="40" cy="244.7" r="3" class="d-fill" style="fill:var(--link)"/><line x1="53" y1="252" x2="53" y2="243.59571999185655" class="d-a" /><circle cx="53" cy="243.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="66" y1="252" x2="66" y2="242.33507799063506" class="d-a" /><circle cx="66" cy="242.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="79" y1="252" x2="79" y2="240.8853396892303" class="d-a" /><circle cx="79" cy="240.9" r="3" class="d-fill" style="fill:var(--link)"/><line x1="92" y1="252" x2="92" y2="239.21814064261486" class="d-a" /><circle cx="92" cy="239.2" r="3" class="d-fill" style="fill:var(--link)"/><line x1="105" y1="252" x2="105" y2="237.30086173900708" class="d-a" /><circle cx="105" cy="237.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="118" y1="252" x2="118" y2="235.09599099985815" class="d-a" /><circle cx="118" cy="235.1" r="3" class="d-fill" style="fill:var(--link)"/><line x1="131" y1="252" x2="131" y2="232.56038964983685" class="d-a" /><circle cx="131" cy="232.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="144" y1="252" x2="144" y2="229.6444480973124" class="d-a" /><circle cx="144" cy="229.6" r="3" class="d-fill" style="fill:var(--link)"/><line x1="157" y1="252" x2="157" y2="226.29111531190927" class="d-a" /><circle cx="157" cy="226.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="170" y1="252" x2="170" y2="222.43478260869566" class="d-a" /><circle cx="170" cy="222.4" r="3" class="d-fill" style="fill:var(--link)"/><line x1="183" y1="252" x2="183" y2="218.0" class="d-a" /><circle cx="183" cy="218.0" r="3" class="d-fill" style="fill:var(--link)"/><text x="113" y="190" text-anchor="middle" class="d-t s b">z = 1.15</text><text x="113" y="298" text-anchor="middle" class="d-t s m">grows (unstable)</text><rect x="220" y="170" width="186" height="136" rx="10" class="d-box"/><line x1="234" y1="252" x2="396" y2="252" class="d-mut" /><line x1="240" y1="252" x2="240" y2="218.0" class="d-a" /><circle cx="240" cy="218.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="253" y1="252" x2="253" y2="232.7666955517259" class="d-a" /><circle cx="253" cy="232.8" r="3" class="d-fill" style="fill:var(--link)"/><line x1="266" y1="252" x2="266" y2="252.0" class="d-a" /><circle cx="266" cy="252.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="279" y1="252" x2="279" y2="264.3093148468954" class="d-a" /><circle cx="279" cy="264.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="292" y1="252" x2="292" y2="265.9264" class="d-a" /><circle cx="292" cy="265.9" r="3" class="d-fill" style="fill:var(--link)"/><line x1="305" y1="252" x2="305" y2="259.8779615020131" class="d-a" /><circle cx="305" cy="259.9" r="3" class="d-fill" style="fill:var(--link)"/><line x1="318" y1="252" x2="318" y2="252.0" class="d-a" /><circle cx="318" cy="252.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="331" y1="252" x2="331" y2="246.95810463871163" class="d-a" /><circle cx="331" cy="247.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="344" y1="252" x2="344" y2="246.29574656" class="d-a" /><circle cx="344" cy="246.3" r="3" class="d-fill" style="fill:var(--link)"/><line x1="357" y1="252" x2="357" y2="248.77318696877543" class="d-a" /><circle cx="357" cy="248.8" r="3" class="d-fill" style="fill:var(--link)"/><line x1="370" y1="252" x2="370" y2="252.0" class="d-a" /><circle cx="370" cy="252.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="383" y1="252" x2="383" y2="254.06516033998372" class="d-a" /><circle cx="383" cy="254.1" r="3" class="d-fill" style="fill:var(--link)"/><text x="313" y="190" text-anchor="middle" class="d-t s b">z = 0.8∠±45°</text><text x="313" y="298" text-anchor="middle" class="d-t s m">decaying oscillation</text><rect x="420" y="170" width="186" height="136" rx="10" class="d-box"/><line x1="434" y1="252" x2="596" y2="252" class="d-mut" /><line x1="440" y1="252" x2="440" y2="218.0" class="d-a" /><circle cx="440" cy="218.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="453" y1="252" x2="453" y2="227.9583694396574" class="d-a" /><circle cx="453" cy="228.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="466" y1="252" x2="466" y2="252.0" class="d-a" /><circle cx="466" cy="252.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="479" y1="252" x2="479" y2="276.0416305603426" class="d-a" /><circle cx="479" cy="276.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="492" y1="252" x2="492" y2="286.0" class="d-a" /><circle cx="492" cy="286.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="505" y1="252" x2="505" y2="276.04163056034264" class="d-a" /><circle cx="505" cy="276.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="518" y1="252" x2="518" y2="252.00000000000003" class="d-a" /><circle cx="518" cy="252.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="531" y1="252" x2="531" y2="227.95836943965742" class="d-a" /><circle cx="531" cy="228.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="544" y1="252" x2="544" y2="218.0" class="d-a" /><circle cx="544" cy="218.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="557" y1="252" x2="557" y2="227.95836943965736" class="d-a" /><circle cx="557" cy="228.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="570" y1="252" x2="570" y2="251.99999999999997" class="d-a" /><circle cx="570" cy="252.0" r="3" class="d-fill" style="fill:var(--link)"/><line x1="583" y1="252" x2="583" y2="276.0416305603426" class="d-a" /><circle cx="583" cy="276.0" r="3" class="d-fill" style="fill:var(--link)"/><text x="513" y="190" text-anchor="middle" class="d-t s b">z = 1∠±45°</text><text x="513" y="298" text-anchor="middle" class="d-t s m">sustained oscillation</text></svg><figcaption>What a pole at z = a contributes to the response: a mode a<sup>k</sup>. Inside the unit circle it dies away (a negative real pole makes it alternate); on the circle it neither grows nor decays; outside it grows without bound. Complex poles give oscillating modes.</figcaption></figure>

| Pole location | System |
|---|---|
| All poles $\lvert z\rvert < 1$ | **Stable:** transients decay |
| Any pole $\lvert z\rvert > 1$ | **Unstable:** transients grow |
| Simple (non-repeated) poles on $\lvert z\rvert = 1$ | **Marginally stable:** a constant or a sustained oscillation |
| Repeated poles on $\lvert z\rvert = 1$ | **Unstable:** the response grows (linearly for a double pole) |

**BIBO stability.** A system is bounded-input bounded-output stable if and only if every bounded input gives a bounded output. For an LTI system this holds exactly when the impulse response is absolutely summable,

$$\sum_{k=-\infty}^{\infty}|h(k)| < \infty$$

which for a causal rational $H(z)$ means all its poles are inside the unit circle. Equivalently, the ROC includes the unit circle.

**Marginal stability, by example.** $H(z) = \dfrac{1}{1 - z^{-1}} = \dfrac{z}{z - 1}$ (ROC $|z| > 1$) has a single pole at $z = 1$. Its impulse response is the unit step: it never decays and never grows. A simple pair of poles at $z = e^{\pm j\theta}$ gives a sustained oscillation of constant amplitude. These are marginally stable, and **not** BIBO stable: a step input to $z/(z - 1)$ gives a ramp.

**Zeros do not decide stability.** Zeros shape the response and the frequency response, and a zero on the unit circle at angle $\theta$ completely blocks the frequency with $\omega T = \theta$. A zero outside the unit circle makes the system *non-minimum phase*, which harms the transient response but does not make it unstable. Cancelling an unstable pole with a zero is never acceptable in practice, because the cancellation is never exact.

## Examples

**Example 1.** $G(z) = \dfrac{z}{z^2 + 1.2z + 0.32}$. The characteristic equation $z^2 + 1.2z + 0.32 = (z + 0.4)(z + 0.8) = 0$ gives poles at $z = -0.4$ and $z = -0.8$. Both have $|z| < 1$, so the system is **stable**. (The poles are negative, so the response alternates in sign as it decays.)

**Example 2.** $z^2 - 0.6z + 0.09 = (z - 0.3)^2 = 0$ gives a double pole at $z = 0.3$, inside the circle: **stable**. A repeated pole is only a problem on or outside the circle.

**Example 3.** A digital controller has poles at $z = 0.6$ and $z = 1.05$. The pole at 1.05 is outside the unit circle, so it is **unstable**. In practice the controller output grows without bound, as $1.05^k$ (it doubles about every 14 samples), and drives the plant into oscillation or divergence, until an actuator saturates. The design must be corrected to bring every pole inside the circle.

**Example 4.** A digital temperature controller samples every 0.5 s. Why use z-transform analysis?

- The controller only sees the temperature every 0.5 s, so the loop is a discrete-time system.
- The z-transform is built to handle sampled signals, the one-sample delays and digital feedback exactly.
- The stability condition is that all the poles of the closed-loop $T(z)$ lie inside the unit circle, $|z| < 1$, which guarantees a bounded output for a bounded input.

## A stable plant can become unstable when sampled

Even when the analog plant is stable, choosing a sampling period $T$ that is **too large** can push the z-poles outside the unit circle and make the digital loop unstable.

*Example:* the plant $\dfrac{K}{s(s + 1)}$ with a ZOH in a unity-feedback loop. Using the pulse transfer function from Chapter 5, the characteristic equation is

$$\begin{aligned}&z^2 - (1 + e^{-T})z + e^{-T} \\ &\quad + K\big[(T - 1 + e^{-T})z \\ &\qquad + (1 - e^{-T} - Te^{-T})\big] = 0\end{aligned}$$

The continuous loop is stable for every $K > 0$. The digital loop is stable only for $K$ below a limit that falls as $T$ grows. The limit comes from the Jury conditions below:

| $T$ (s) | 0.1 | 0.5 | 1 | 2 |
|---|---|---|---|---|
| Largest stable $K$ | 20.3 | 4.36 | 2.39 | 1.46 |

So a gain of $K = 2$ is stable when sampled at 1 s but unstable at 2 s. The sampler and hold add phase lag, roughly the $T/2$ delay of the ZOH.

## The Jury test (second order)

For a characteristic polynomial $D(z) = a_2z^2 + a_1z + a_0$ with $a_2 > 0$, both roots are inside the unit circle if and only if

$$\begin{gathered}D(1) > 0, \\ D(-1) > 0, \\ |a_0| < a_2\end{gathered}$$

*Check on $D(z) = z^2 - z + 0.2$:* $D(1) = 0.2 > 0$, $D(-1) = 2.2 > 0$ and $|0.2| < 1$, so it is stable. The roots are 0.724 and 0.276.

The Jury test extends to any order with a table, like Routh's for the s-plane. The bilinear method below lets you use Routh directly instead.

## Stability through the bilinear transformation

Routh–Hurwitz works for polynomials with a **left-half-plane** boundary, so it cannot be applied directly to a circular boundary. The idea:

1. turn the unit circle into a straight-line boundary;
2. map it onto an equivalent left half-plane;
3. keep the stability information.

The **bilinear transformation** does this:

$$z = \frac{s + 1}{s - 1} \qquad\Leftrightarrow\qquad s = \frac{z + 1}{z - 1}$$

It is the ratio of two linear expressions: the numerator and the denominator are both first order, hence "bilinear".

**Mapping properties:**

| z-plane | s-plane |
|---|---|
| Unit circle $\lvert z\rvert = 1$ | Imaginary axis |
| Inside the unit circle | Left half-plane |
| Outside the unit circle | Right half-plane |

*Why:* $|z| < 1$ means $|s + 1| < |s - 1|$. In words, $s$ is closer to −1 than to +1, which is exactly $\text{Re}(s) < 0$. On the circle, putting $z = e^{j\theta}$ into $s = \dfrac{z + 1}{z - 1}$ gives $s = -j\cot(\theta/2)$, which is purely imaginary, $\text{Re}(s) = 0$.

**Why use it:**

- it turns a digital stability problem into a continuous-time one;
- Routh–Hurwitz can then be used;
- no geometric pole plotting inside a circle is needed;
- stability is preserved: an unstable system never maps to a stable one.

**Procedure:**

1. Write the digital characteristic equation $D(z) = 0$.
2. Substitute $z = \dfrac{s + 1}{s - 1}$.
3. Clear the denominators to get a polynomial $D(s)$.
4. Apply Routh–Hurwitz. **If $D(s)$ is stable, $D(z)$ is stable.**

**Worked example.** $D(z) = z^2 - z + 0.2 = 0$.

$$\left(\frac{s + 1}{s - 1}\right)^2 - \frac{s + 1}{s - 1} + 0.2 = 0$$

Multiply by $(s - 1)^2$:

$$\small (s + 1)^2 - (s + 1)(s - 1) + 0.2(s - 1)^2 = 0$$

$$\begin{gathered}(s^2 + 2s + 1) - (s^2 - 1) \\ + 0.2(s^2 - 2s + 1) = 0 \\ \Rightarrow 0.2s^2 + 1.6s + 2.2 = 0\end{gathered}$$

For a second-order polynomial, Routh–Hurwitz just needs all the coefficients to be positive, and they are. So $D(s)$ has both roots in the left half-plane (at −1.76 and −6.24), and $D(z)$ has both roots inside the unit circle. This agrees with the Jury test above.

**Bilinear transformation and ZOH are not the same thing:**

| Bilinear transformation | Zero-order hold |
|---|---|
| A stability-analysis tool | A physical model of sampling |
| Maps z → s | Maps s → z |
| Mathematical | Hardware (the DAC) |
| Used to test stability | Used to discretise a plant |

(The Tustin rule of Chapter 5, $s = \frac2T\frac{z - 1}{z + 1}$, is the same kind of mapping, used the other way round to discretise. Both send the unit circle to the imaginary axis.)

## Summary

| Feature | Continuous (s) | Digital (z) |
|---|---|---|
| Stability region | Left half-plane | Inside the unit circle |
| Critical limit | $j\omega$ axis | $\lvert z\rvert = 1$ |
| Mapping | $s = \sigma + j\omega$ | $z = e^{sT}$ |
| Main tool | Routh–Hurwitz | Jury test, or bilinear plus Routh |

> **Corrections to the notes.**
> - The bilinear transformation is written once as "$z = (s + 1)/(s - 2)$", and the worked example's first line repeats it. It is $z = (s + 1)/(s - 1)$, the inverse of $s = (z + 1)/(z - 1)$. The rest of the example uses the right form.
> - In Example 1 the notes split $z^2 + 1.2z + 0.32$ as $z^2 - 0.4z - 0.8z + 0.32$ and give poles at +0.4 and +0.8. The middle term is $+1.2z$, so the factors are $(z + 0.4)(z + 0.8)$ and the poles are at **−0.4 and −0.8**. The conclusion, stable, is unchanged.
> - The tutorial answer "zeros inside the unit circle: system is stable" is not right: zeros never decide stability; only the poles do.
> - For $H(z) = 1/(1 - z^{-1})$ the ROC is $|z| > 1$, i.e. $|z^{-1}| < 1$, not "$|z^{-1}| > 1$".
