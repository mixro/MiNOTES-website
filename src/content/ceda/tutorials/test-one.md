**Test 1, Paper D** (20 multiple-choice questions, 40 minutes). Choose the most correct answer, then open the answer box. The answers were worked out independently and checked against the course notes.

## Q1 Too large a sampling period
If the sampling period $T$ is increased excessively, a digital control system may become unstable because:

- **A.** ADC resolution decreases
- **B.** z-plane poles move outside the unit circle
- **C.** Quantisation noise increases
- **D.** The ZOH stops working

::: answer
**B.** A long $T$ adds phase lag (the ZOH acts like a delay of about $T/2$) and moves the closed-loop poles outward. Example: $K/[s(s+1)]$ with $K = 2$ is stable at $T = 1$ s but unstable at $T = 2$ s (Chapter 7).
:::

## Q2 Inter-sample behaviour
A digital controller samples a plant output every $T$ seconds. Which best explains why behaviour between samples must still be considered?

- **A.** Because ADC resolution is finite
- **B.** Because the z-transform ignores inter-sample behaviour
- **C.** Because the zero-order hold affects continuous plant dynamics
- **D.** Because sampling eliminates continuous dynamics

::: answer
**C.** The plant is continuous: it keeps responding to the held (staircase) input between samples, so the hold shapes what the plant does. B is a true statement about the z-transform, but it is the reason the problem exists, not why the behaviour matters. D is false.
:::

## Q3 Aliasing
In a digital control loop, aliasing is most likely to occur when:

- **A.** Quantisation levels are too high
- **B.** The sampling frequency is below twice the highest signal frequency
- **C.** A ZOH is used at the output
- **D.** Poles lie outside the unit circle

::: answer
**B.** This is the Nyquist condition $f_s \ge 2f_{max}$ (Chapter 2).
:::

## Q4 Sampling far above Nyquist
A signal is sampled much faster than the Nyquist rate. The main disadvantage is:

- **A.** Aliasing
- **B.** Increased computational burden
- **C.** Instability
- **D.** Loss of information

::: answer
**B.** Fast sampling gives no aliasing and no loss of information, but more samples per second to store and process (and coefficients close to 1, which need more numerical precision).
:::

## Q5 Quantisation error
Which block in a digital control system introduces quantisation error?

- **A.** Sampler
- **B.** ADC
- **C.** DAC
- **D.** Plant

::: answer
**B.** The ADC rounds each sample to one of $2^n$ levels, an error of up to $\pm\Delta/2$. The sampler only takes values at instants; it does not round them.
:::

## Q6 Why use the z-transform
The z-transform is preferred over time-domain difference equations because it:

- **A.** Eliminates sampling effects
- **B.** Converts discrete equations into algebraic form
- **C.** Removes system non-linearity
- **D.** Guarantees stability

::: answer
**B.** Delays become powers of $z^{-1}$, so a difference equation becomes an algebraic equation in $z$.
:::

## Q7 A single pole at 0.68
Given $G(z) = z/(z - 0.68)$, the system is:

- **A.** Unstable
- **B.** Marginally stable
- **C.** Stable
- **D.** Oscillatory

::: answer
**C.** The only pole is at $z = 0.68$, inside the unit circle. The impulse response $0.68^k$ decays without oscillating (the pole is on the positive real axis).
:::

## Q8 A pole at z = 1
A discrete-time pole exactly at $z = 1$ indicates that the system is:

- **A.** Asymptotically stable
- **B.** Stable
- **C.** Marginally stable
- **D.** Unstable

::: answer
**C.** A simple pole on the unit circle gives a response that neither decays nor grows (here a constant, an integrator). A repeated pole there would be unstable.
:::

## Q9 The staircase
The staircase waveform at the output of a DAC is modelled mathematically by:

- **A.** An ideal sampler
- **B.** A quantiser
- **C.** A zero-order hold
- **D.** An encoder

::: answer
**C.** The ZOH holds each sample for one period: $G_h(s) = (1 - e^{-sT})/s$.
:::

## Q10 The 1/s term
When converting $G(s)$ to $G(z)$ with a ZOH, the term $1/s$ represents:

- **A.** Sampling delay
- **B.** Integration of the impulse input
- **C.** Quantisation
- **D.** Encoder behaviour

::: answer
**B.** The hold integrates each impulse sample into a step ($1/s$) and subtracts a delayed step ($e^{-sT}/s$), giving one pulse of width $T$.
:::

## Q11 Mapping a pole
A stable continuous pole at $s = -0.5a$ maps to the z-plane at:

- **A.** $z = 0.5aTE$
- **B.** $z = -0.5aT$
- **C.** $z = e^{-0.5aT}$
- **D.** $z = 1 - 0.5aT$

::: answer
**C.** Poles map by $z = e^{sT}$. (Option D, $1 - 0.5aT$, is only the first-order Euler approximation.)
:::

## Q12 The unit circle
The unit circle $|z| = 1$ corresponds to which s-plane boundary?

- **A.** Left half-plane
- **B.** Right half-plane
- **C.** The imaginary axis
- **D.** The real axis

::: answer
**C.** $s = j\omega$ gives $z = e^{j\omega T}$, which has magnitude 1.
:::

## Q13 Repeated poles on the circle
A digital system has two repeated poles on the unit circle. The response will be:

- **A.** Decaying
- **B.** Bounded oscillatory
- **C.** Growing without bound
- **D.** Critically damped

::: answer
**C.** A repeated pole on the circle gives terms like $k\cdot1^k$ or $k\cos k\theta$, which grow without limit: unstable. A single pole there would be bounded (marginal).
:::

## Q14 Routh in the z-plane
Why can the classical Routh–Hurwitz criterion not be applied directly in the z-plane?

- **A.** Polynomials are not used
- **B.** The stability boundary is circular
- **C.** The z-transform is non-linear
- **D.** The sampling time is unknown

::: answer
**B.** Routh tests for roots left of the imaginary axis. In the z-plane the boundary is the unit circle, so the bilinear transformation is needed first.
:::

## Q15 Purpose of the bilinear transformation
The main purpose of the bilinear transformation is to:

- **A.** Convert discrete signals to continuous signals
- **B.** Map the unit circle to the imaginary axis
- **C.** Simplify block diagrams
- **D.** Eliminate ZOH effects

::: answer
**B.** $z = (s + 1)/(s - 1)$ maps $|z| = 1$ onto $\text{Re}(s) = 0$ and the inside onto the left half-plane.
:::

## Q16 After the bilinear transformation
After applying the bilinear transformation, stability can be tested using:

- **A.** The Jury test
- **B.** The Nyquist criterion
- **C.** The root locus
- **D.** The Routh–Hurwitz criterion

::: answer
**D.** That is the point of the transformation. The Jury test works on the original $D(z)$ and needs no transformation.
:::

## Q17 Blocks without a sampler
In block-diagram reduction of sampled-data systems, two continuous blocks with no sampler between them must be:

- **A.** Converted separately to the z-domain
- **B.** Added together in the z-domain
- **C.** Multiplied in the s-domain before the z-transform
- **D.** Ignored

::: answer
**C.** Use $G_1G_2(z) = \mathcal{Z}\{G_1(s)G_2(s)\}$, which is not $G_1(z)G_2(z)$ (Chapter 6).
:::

## Q18 Continuous and digital stability
Which correctly describes the relationship between continuous and digital stability?

- **A.** A stable s-plane system implies an unstable z-plane system
- **B.** A stable z-plane system implies an unstable s-plane system
- **C.** Stability depends on the sampling time
- **D.** The stability regions are identical

::: answer
**C.** A plant stable in continuous time can become unstable when sampled too slowly (question 1). The regions differ: left half-plane against inside of the unit circle.
:::

## Q19 Phantom samplers
A digital control system uses phantom (fictitious) samplers during analysis mainly to:

- **A.** Improve hardware accuracy
- **B.** Simplify block-diagram reduction
- **C.** Increase the sampling frequency
- **D.** Reduce quantisation error

::: answer
**B.** A phantom sampler at the output lets the output be written as $C(z)$, so the diagram can be reduced. It does not exist in the hardware.
:::

## Q20 Bilinear versus ZOH
Which statement best distinguishes the bilinear transformation from the ZOH?

- **A.** Both are hardware implementations
- **B.** Both are used for discretisation
- **C.** The bilinear transformation is for stability analysis; the ZOH models physical sampling
- **D.** The ZOH maps the z-plane to the s-plane

::: answer
**C.** This is the course's distinction (Chapter 7). Strictly, both can be used to discretise (Tustin's method is bilinear), so B is partly true, but C is the most correct.
:::
