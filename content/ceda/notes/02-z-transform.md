# The z-transform

> Starter notes. Replace with your own.

The z-transform plays the same role for sequences that the Laplace transform plays for continuous signals:

$$X(z) = \sum_{k=0}^{\infty} x(k)\, z^{-k}$$

The link between the planes is $z = e^{sT}$.

## Common transform pairs

| $x(k)$ | $X(z)$ |
|---|---|
| Unit impulse $\delta(k)$ | $1$ |
| Unit step $1(k)$ | $\dfrac{z}{z-1}$ |
| Ramp $kT$ | $\dfrac{Tz}{(z-1)^2}$ |
| $a^k$ | $\dfrac{z}{z-a}$ |
| $e^{-akT}$ | $\dfrac{z}{z-e^{-aT}}$ |

## Key properties

- **Linearity**: $\mathcal{Z}\{a x + b y\} = aX(z) + bY(z)$
- **Time shift (delay)**: $\mathcal{Z}\{x(k-n)\} = z^{-n} X(z)$
- **Final value theorem**: $\lim_{k\to\infty} x(k) = \lim_{z\to 1} (z-1)X(z)$, if the limit exists.
- **Initial value theorem**: $x(0) = \lim_{z\to\infty} X(z)$

## Difference equations

A pulse transfer function maps directly to a difference equation that runs on the controller. For example

$$\frac{Y(z)}{U(z)} = \frac{0.5}{z - 0.8} \;\Rightarrow\; y(k) = 0.8\,y(k-1) + 0.5\,u(k-1)$$

## Inverse z-transform methods

1. Long division (power series).
2. Partial fractions of $X(z)/z$, then use the table.
3. The residue (inversion integral) method.
