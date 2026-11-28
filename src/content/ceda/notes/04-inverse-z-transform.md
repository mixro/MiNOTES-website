# The inverse z-transform

*Lecture 2 · EEU 08101 Control Engineering Digital Analysis*

The inverse z-transform recovers the sequence $x(k)$ from $X(z)$. We need it to:

- predict the time-domain behaviour of a signal or system;
- simulate discrete systems (digital control, signal processing);
- analyse the transient and steady-state response.

Because the z-transform comes from samples, its inverse gives **only the values at the sampling instants**. For example, $z/(z - 1)$ is the transform of the unit step, but equally of *any* function that equals 1 at $t = 0, T, 2T, \ldots$. What happens between samples is not recorded.

There are three methods:

1. **Power series** (long division);
2. **Partial fractions**;
3. **Residues** (the inversion integral).

## 1. Power series (long division)

Divide the denominator into the numerator to get a series in $z^{-1}$:

$$X(z) = x(0) + x(1)z^{-1} + x(2)z^{-2} + \cdots$$

The coefficients **are** the samples.

**When to use it:**

- the function is a simple rational one;
- only the first few samples are needed (small $k$);
- the signal is causal (right-sided);
- there are no complex or repeated poles to deal with.

It does not give a closed form, but it is ideal for plotting or for checking the first samples of another method.

**Example 1.** $E(z) = \dfrac{23z^3 + 13z^2 - 15z}{z^3 - z^2 + z + 3}$.

$$\begin{aligned}
&23z^3 + 13z^2 - 15z \\ &\quad - 23(z^3 - z^2 + z + 3) \\ &\qquad = 36z^2 - 38z - 69 \\[4pt]
&36z^2 - 38z - 69 \\ &\quad - 36z^{-1}(z^3 - z^2 + z + 3) \\ &\qquad = -2z - 105 - 108z^{-1} \\[4pt]
&-2z - 105 - 108z^{-1} \\ &\quad - (-2z^{-2})(z^3 - z^2 + z + 3) \\ &\qquad = -107 - 106z^{-1} + 6z^{-2}
\end{aligned}$$

So $E(z) = 23 + 36z^{-1} - 2z^{-2} - 107z^{-3} - \cdots$, and $e(0) = 23$, $e(1) = 36$, $e(2) = -2$, $e(3) = -107$.

**Example 2.** $X(z) = \dfrac{1}{1 - 0.4z^{-1}}$. Dividing: $1 + 0.4z^{-1} + 0.16z^{-2} + 0.064z^{-3} + \cdots$, so $x(k) = 0.4^k$. This agrees with the table pair $z/(z - a) \to a^k$.

## 2. Partial fractions

Split $X(z)$ into simple terms found in the table, then invert each term.

The key pair, from expanding $\dfrac{z}{z - a} = \dfrac{1}{1 - az^{-1}} = 1 + az^{-1} + a^2z^{-2} + \cdots$, is

$$\boxed{\frac{z}{z - a} \;\longleftrightarrow\; a^k}$$

Almost every table entry has a $z$ in the numerator. So **expand $X(z)/z$, not $X(z)$**, then multiply back by $z$.

**Steps:**

1. Write $X(z)$ as a rational function $N(z)/D(z)$ and factor $D(z)$.
2. Divide by $z$.
3. Expand $X(z)/z$ in partial fractions.
4. Multiply by $z$ and invert each term from the table.
5. Combine the terms to get $x(k)$.

### Real poles

**Example 3.** $E(z) = \dfrac{0.5z}{(z - 0.5)(z - 0.7)}$.

$$\begin{aligned}\frac{E(z)}{z} &= \frac{0.5}{(z - 0.5)(z - 0.7)} \\ &= \frac{A}{z - 0.5} + \frac{B}{z - 0.7}\end{aligned}$$

- Cover-up at $z = 0.5$: $A = \dfrac{0.5}{0.5 - 0.7} = -2.5$.
- At $z = 0.7$: $B = \dfrac{0.5}{0.7 - 0.5} = 2.5$.

$$\begin{gathered}E(z) = \frac{-2.5z}{z - 0.5} + \frac{2.5z}{z - 0.7} \\ \Rightarrow \boxed{e(k) = 2.5(0.7)^k - 2.5(0.5)^k}\end{gathered}$$

Check by long division: 0, 0.5, 0.6, 0.545, … ✓

**Example 4.** $X(z) = \dfrac{z^2}{(z - 1)(z - 0.5)}$.

$$\begin{aligned}\frac{X(z)}{z} &= \frac{z}{(z - 1)(z - 0.5)} \\ &= \frac{2}{z - 1} - \frac{1}{z - 0.5}\end{aligned}$$

since $A = \frac{1}{0.5} = 2$ and $B = \frac{0.5}{-0.5} = -1$. So

$$x(k) = \left[2 - (0.5)^k\right]u(k)$$

which gives 1, 1.5, 1.75, 1.875, … and rises to 2.

**Direct table look-up.** $X(z) = \dfrac{z}{z - 0.6}$ gives $x(k) = 0.6^k$. $X(z) = \dfrac{z}{z - 0.9}$ gives $x(k) = 0.9^k$. That is a decaying exponential, stable because the pole at 0.9 is inside the unit circle, but it decays slowly because 0.9 is close to 1.

### Complex poles

The same procedure works, with complex coefficients that come in conjugate pairs.

**Example 5.** $F(z) = \dfrac{z^2}{z^2 - z + 0.5}$. The poles are $z = 0.5 \pm j0.5$.

$$\small \begin{aligned}\frac{F(z)}{z} &= \frac{z}{(z - 0.5 - j0.5)(z - 0.5 + j0.5)} \\ &= \frac{0.5 - j0.5}{z - (0.5 + j0.5)} + \frac{0.5 + j0.5}{z - (0.5 - j0.5)}\end{aligned}$$

Check the first residue: $\dfrac{0.5 + j0.5}{j1} = 0.5 - j0.5$. So

$$\begin{aligned}f(k) &= (0.5 - j0.5)(0.5 + j0.5)^k \\ &\quad + (0.5 + j0.5)(0.5 - j0.5)^k\end{aligned}$$

The two terms are conjugates, so $f(k)$ is real. In polar form $0.5 \pm j0.5 = 0.7071\angle\pm45°$, which gives

$$f(k) = (0.7071)^k\left[\cos\frac{k\pi}{4} + \sin\frac{k\pi}{4}\right]$$

The samples are 1, 1, 0.5, 0, −0.25, −0.25, −0.125, 0, …: a decaying oscillation, since $|z| = 0.707 < 1$.

**Example 6 (the lecture assignment).** $Y(z) = \dfrac{3.894z}{z^2 + 0.6065}$.

The poles are $z = \pm j\sqrt{0.6065} = \pm j0.7788$, i.e. $a = 0.7788$ at $\pm90°$. Use the pair

$$a^k\sin\omega k \;\longleftrightarrow\; \frac{az\sin\omega}{z^2 - 2az\cos\omega + a^2}$$

With $\omega = \pi/2$ this is $\dfrac{az}{z^2 + a^2}$. So

$$\begin{gathered}Y(z) = \frac{3.894}{a}\cdot\frac{az}{z^2 + a^2} \\ \begin{aligned}\Rightarrow y(k) &= \frac{3.894}{0.7788}(0.7788)^k\sin\frac{k\pi}{2} \\ &= 5(0.7788)^k\sin\frac{k\pi}{2}\end{aligned}\end{gathered}$$

The samples are 0, 3.894, 0, −2.362, 0, 1.432, … ($0.7788 = e^{-0.25}$, so $y(k) = 5e^{-0.25k}\sin(k\pi/2)$.)

## 3. Residues (inversion integral)

$$\begin{aligned}x(k) &= \frac{1}{2\pi j}\oint_C X(z)z^{k - 1}\,dz \\ &= \sum \text{residues of } X(z)z^{k - 1} \\ &\qquad \text{at the poles inside } C\end{aligned}$$

Here $C$ is a circle inside the ROC enclosing all the poles. This method suits signals with complex or repeated poles.

*For Example 3:* the residues of $\dfrac{0.5z^k}{(z - 0.5)(z - 0.7)}$ are $\dfrac{0.5(0.5)^k}{-0.2} = -2.5(0.5)^k$ and $\dfrac{0.5(0.7)^k}{0.2} = 2.5(0.7)^k$, the same as before.

## The ROC and uniqueness

The same algebraic $X(z)$ can belong to **different** sequences. The ROC decides which one:

- **Causal (right-sided):** the ROC is outside the outermost pole. $\dfrac{z}{z - a}$ with $|z| > |a|$ is $a^ku(k)$.
- **Anti-causal (left-sided):** the ROC is inside the innermost pole. $\dfrac{z}{z - a}$ with $|z| < |a|$ is $-a^ku(-k - 1)$.
- **Two-sided:** the ROC is a ring between poles.

A system is **stable** if its ROC contains the unit circle. In digital control the signals are causal, so the ROC is always the outside of a circle, and the one-sided transform is enough.
