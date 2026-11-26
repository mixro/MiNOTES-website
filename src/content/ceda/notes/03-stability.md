# Stability of discrete systems

> Starter notes. Replace with your own.

Because $z = e^{sT}$, the left half of the s-plane maps to the **inside of the unit circle**.

| s-plane | z-plane | Meaning |
|---|---|---|
| $\sigma < 0$ | $\lvert z \rvert < 1$ | Stable |
| $\sigma = 0$ | $\lvert z \rvert = 1$ | Marginally stable |
| $\sigma > 0$ | $\lvert z \rvert > 1$ | Unstable |

A discrete closed-loop system is **stable when every pole of its characteristic equation lies strictly inside the unit circle**.

## Jury stability test

For $P(z) = a_n z^n + \dots + a_1 z + a_0$ with $a_n > 0$, the necessary conditions are:

1. $P(1) > 0$
2. $(-1)^n P(-1) > 0$
3. $\lvert a_0 \rvert < a_n$

For a second-order system these three are also sufficient.

### Example

$P(z) = z^2 - z + 0.5$

- $P(1) = 0.5 > 0$ ✓
- $P(-1) = 2.5 > 0$ ✓
- $\lvert 0.5 \rvert < 1$ ✓

So the system is stable.

## Bilinear transformation

Substituting $z = \dfrac{1+w}{1-w}$ maps the unit circle to the imaginary axis, so the **Routh–Hurwitz** test can be applied in the $w$-plane.
