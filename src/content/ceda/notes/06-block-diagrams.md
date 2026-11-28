# Block diagrams of sampled-data systems

*Lecture 3 · EEU 08101 Control Engineering Digital Analysis*

## Where the samplers sit

The first step in digital modelling is to see **where the samplers are**, because that decides which transforms can be multiplied.

<figure class="fig"><svg viewBox="0 0 640 215" role="img" aria-label="Three configurations: continuous, sampled input, and sampled input and output."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="30" y="45" text-anchor="middle" class="d-t b">R</text><line x1="42" y1="40" x2="120" y2="40" class="d-ax" /><line x1="120" y1="40" x2="160" y2="40" class="d-ax"  marker-end="url(#ah)"/><rect x="160" y="18" width="90" height="44" rx="10" class="d-box b"/><text x="205.0" y="45.0" text-anchor="middle" class="d-t b">G(s)</text><line x1="250" y1="40" x2="300" y2="40" class="d-ax" /><line x1="300" y1="40" x2="380" y2="40" class="d-ax"  marker-end="url(#ah)"/><text x="390" y="45" text-anchor="start" class="d-t b">C</text><text x="440" y="45" text-anchor="start" class="d-t s m">(a) continuous</text><text x="30" y="115" text-anchor="middle" class="d-t b">R</text><line x1="42" y1="110" x2="71.0" y2="110" class="d-ax" /><circle cx="71.0" cy="110" r="3.5" class="d-dot"/><line x1="71.0" y1="110" x2="90.0" y2="98" class="d-ax w" /><circle cx="91.0" cy="110" r="3.5" class="d-dot"/><line x1="91.0" y1="110" x2="120" y2="110" class="d-ax" /><text x="130" y="98" text-anchor="middle" class="d-t s m">R*</text><line x1="120" y1="110" x2="160" y2="110" class="d-ax"  marker-end="url(#ah)"/><rect x="160" y="88" width="90" height="44" rx="10" class="d-box b"/><text x="205.0" y="115.0" text-anchor="middle" class="d-t b">G(s)</text><line x1="250" y1="110" x2="300" y2="110" class="d-ax" /><line x1="300" y1="110" x2="380" y2="110" class="d-ax"  marker-end="url(#ah)"/><text x="390" y="115" text-anchor="start" class="d-t b">C</text><text x="440" y="115" text-anchor="start" class="d-t s m">(b) sampled input</text><text x="30" y="185" text-anchor="middle" class="d-t b">R</text><line x1="42" y1="180" x2="71.0" y2="180" class="d-ax" /><circle cx="71.0" cy="180" r="3.5" class="d-dot"/><line x1="71.0" y1="180" x2="90.0" y2="168" class="d-ax w" /><circle cx="91.0" cy="180" r="3.5" class="d-dot"/><line x1="91.0" y1="180" x2="120" y2="180" class="d-ax" /><text x="130" y="168" text-anchor="middle" class="d-t s m">R*</text><line x1="120" y1="180" x2="160" y2="180" class="d-ax"  marker-end="url(#ah)"/><rect x="160" y="158" width="90" height="44" rx="10" class="d-box b"/><text x="205.0" y="185.0" text-anchor="middle" class="d-t b">G(s)</text><line x1="250" y1="180" x2="300" y2="180" class="d-ax" /><line x1="300" y1="180" x2="330.0" y2="180" class="d-ax" /><circle cx="330.0" cy="180" r="3.5" class="d-dot"/><line x1="330.0" y1="180" x2="349.0" y2="168" class="d-ax w" /><circle cx="350.0" cy="180" r="3.5" class="d-dot"/><line x1="350.0" y1="180" x2="380" y2="180" class="d-ax" /><text x="390" y="185" text-anchor="start" class="d-t b">C*</text><text x="440" y="185" text-anchor="start" class="d-t s m">(c) sampled input and output</text></svg><figcaption>Where the samplers sit. (a) Ordinary analogue system. (b) Only the input is sampled: G(s) sees a train of impulses R*. (c) Input and output are both sampled, as in a microprocessor-based controller, where every internal signal is a sequence of numbers. In (c) C(z) = G(z)R(z).</figcaption></figure>

- **(a) Continuous:** a traditional analog system; $G(s)$ responds to $r(t)$ all the time.
- **(b) Sampled input:** only the input is sampled, and $G(s)$ sees a train of impulses $r^*(t)$.
- **(c) Sampled input and output:** typical digital control. This is how a microprocessor-based controller is modelled, since all its internal signals are sequences of numbers, not continuous voltages. Here $C(z) = G(z)R(z)$.

## Rules of digital block-diagram reduction

The key rule:

> **If two blocks are in the same continuous path, with no sampler between them, multiply them in the s-domain first, then take the z-transform.**

Write $G_1G_2(z) = \mathcal{Z}\{G_1(s)G_2(s)\}$. In general this is **not** equal to $G_1(z)G_2(z)$.

| Configuration | Result |
|---|---|
| (a) Cascade **with** a sampler between the blocks | $C(z) = R(z)\,G_1(z)\,G_2(z)$ |
| (b) Cascade **without** a sampler between them | $C(z) = R(z)\,G_1G_2(z)$ |
| (c) Feedback loop, sampler in the forward path only | $T(z) = \dfrac{G(z)}{1 + GH(z)}$ |
| (d) Feedback loop, samplers in both the forward and the feedback paths | $T(z) = \dfrac{G(z)}{1 + G(z)H(z)}$ |

**A quick check of rule (b).** Take $G_1 = \dfrac1s$ and $G_2 = \dfrac{1}{s + 1}$ with $T = 1$.

- $G_1(z)G_2(z) = \dfrac{z}{z - 1}\cdot\dfrac{z}{z - 0.368}$.
- $G_1G_2(z) = \mathcal{Z}\left\{\dfrac1s - \dfrac{1}{s + 1}\right\} = \dfrac{0.632z}{(z - 1)(z - 0.368)}$.

The two are clearly different.

## Phantom (fictitious) samplers

Two operations help to reduce a diagram:

1. **A phantom sampler can be placed at the output of any block with a sampled input**, provided it does not change the signal sent to any other block. This is allowed because the output of a sampled-data system is found only at the sampling instants anyway.
2. **Phantom samplers can be placed on the inputs of a summing junction whose output is sampled.** The sampled sum equals the sum of the sampled inputs, as long as all the samplers are synchronised.

## Worked example: sampler in the forward path

<figure class="fig"><svg viewBox="0 0 620 190" role="img" aria-label="Closed loop with one sampler in the forward path; it reduces to G(z) over 1 plus GH(z)."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="26" y="75" text-anchor="middle" class="d-t b">R</text><line x1="36" y1="70" x2="70" y2="70" class="d-ax"  marker-end="url(#ah)"/><circle cx="84" cy="70" r="14" class="d-box"/><line x1="74.2" y1="60.2" x2="93.8" y2="79.8" class="d-ax" /><line x1="74.2" y1="79.8" x2="93.8" y2="60.2" class="d-ax" /><text x="72" y="54" text-anchor="middle" class="d-t s">+</text><text x="76" y="100" text-anchor="middle" class="d-t s">−</text><line x1="98" y1="70" x2="129.0" y2="70" class="d-ax" /><circle cx="129.0" cy="70" r="3.5" class="d-dot"/><line x1="129.0" y1="70" x2="148.0" y2="58" class="d-ax w" /><circle cx="149.0" cy="70" r="3.5" class="d-dot"/><line x1="149.0" y1="70" x2="180" y2="70" class="d-ax" /><text x="139.0" y="92" text-anchor="middle" class="d-t s m">S1</text><line x1="180" y1="70" x2="210" y2="70" class="d-ax"  marker-end="url(#ah)"/><rect x="210" y="48" width="90" height="44" rx="10" class="d-box b"/><text x="255.0" y="75.0" text-anchor="middle" class="d-t b">G(s)</text><line x1="300" y1="70" x2="380" y2="70" class="d-ax" /><circle cx="350" cy="70" r="3.5" class="d-dot"/><line x1="380" y1="70" x2="410" y2="70" class="d-ax"  marker-end="url(#ah)"/><text x="418" y="75" text-anchor="start" class="d-t b">C</text><line x1="350" y1="70" x2="350" y2="150" class="d-ax" /><line x1="350" y1="150" x2="300" y2="150" class="d-ax"  marker-end="url(#ah)"/><rect x="210" y="128" width="90" height="44" rx="10" class="d-box"/><text x="255.0" y="155.0" text-anchor="middle" class="d-t b">H(s)</text><line x1="210" y1="150" x2="84" y2="150" class="d-ax" /><line x1="84" y1="150" x2="84" y2="84" class="d-ax"  marker-end="url(#ah)"/><text x="490" y="60" text-anchor="middle" class="d-t s m">reduces to</text><rect x="450" y="80" width="150" height="64" rx="10" class="d-box a"/><text x="525.0" y="117.0" text-anchor="middle" class="d-t b"></text><text x="525" y="106" text-anchor="middle" class="d-t b">G(z)</text><line x1="470" y1="114" x2="580" y2="114" class="d-ax" /><text x="525" y="134" text-anchor="middle" class="d-t b">1 + GH(z)</text></svg><figcaption>Sampler only in the forward path. G(s) and H(s) are in the same continuous path round the loop, so they are multiplied before transforming: C(z)/R(z) = G(z)/[1 + GH(z)], where GH(z) = Z{G(s)H(s)}, which is not G(z)H(z).</figcaption></figure>

*Find the z-domain transfer function of the loop: R → summing junction → sampler S1 → G(s) → C, with H(s) in the feedback path.*

1. **Add phantom samplers.** Put S2 at the input R, S3 in the feedback path and S4 at the output C.
2. **Move S1 and G(s) to the right**, past the pick-off point, so that the loop has a sampled input and a sampled output. The feedback path then contains $G(s)H(s)$ between two samplers, with no sampler between $G$ and $H$.
3. **Write everything in the z-domain.** The forward path is $G(z)$ and the feedback path is $GH(z)$:

$$\begin{gathered}E(z) = R(z) - GH(z)E(z) \\ \Rightarrow E(z) = \frac{R(z)}{1 + GH(z)}, \\ C(z) = G(z)E(z)\end{gathered}$$

$$\boxed{\frac{C(z)}{R(z)} = \frac{G(z)}{1 + GH(z)}}$$

## Purely digital diagrams

When every block is already a z-transfer function (as in a controller written in software), the ordinary rules apply:

- **Cascade:** $G(z) = G_1(z)G_2(z)$.
- **Parallel:** $G(z) = G_1(z) \pm G_2(z)$, taking the signs at the summing junction into account.
- **Feedback:** $T(z) = \dfrac{G(z)}{1 \pm G(z)H(z)}$, with $+$ for negative feedback and $-$ for positive feedback.

Sampling does not change the rules themselves. It adds discrete-time effects, delays $z^{-1}$ and the sampler-placement rule above, and ignoring them gives wrong results.

**Example 1.** $G_1(z) = \dfrac{z}{z - 0.2}$ and $G_2(z) = \dfrac{1}{z - 0.5}$ in cascade, with negative feedback $H(z) = 0.4$.

$$\begin{aligned}\frac{Y(z)}{R(z)} &= \frac{G_1G_2}{1 + G_1G_2H} \\ &= \frac{\dfrac{z}{(z - 0.2)(z - 0.5)}}{1 + \dfrac{0.4z}{(z - 0.2)(z - 0.5)}} \\ &= \frac{z}{(z - 0.2)(z - 0.5) + 0.4z} \\ &= \frac{z}{z^2 - 0.3z + 0.1}\end{aligned}$$

The poles are $0.15 \pm j0.278$, with $|z| = 0.316$: stable.

**Example 2.** Unity feedback with $G(z) = \dfrac{z}{z - 0.8}$.

$$\begin{aligned}\frac{C(z)}{R(z)} &= \frac{G}{1 + G} \\ &= \frac{z}{z - 0.8 + z} \\ &= \frac{z}{2z - 0.8} \\ &= \frac{0.5z}{z - 0.4}\end{aligned}$$

Feedback has moved the pole from 0.8 to 0.4, so the response is faster.

## Why reduce the diagram?

Reduction:

- gives the **overall transfer function** of a complex system;
- simplifies the system, and the computation;
- is essential for controller design and stability analysis. In an industrial controller with sensors, controllers, delays and actuators, reducing everything to one $T(z)$ means the stability check is a single question: are all the poles of $T(z)$ inside the unit circle?

**How the three tools work together:**

1. The **z-transform** represents the sampled signals, controller and plant in the z-domain.
2. **Block-diagram reduction** combines them into one closed-loop transfer function.
3. **Stability analysis** checks that its poles are inside the unit circle.
