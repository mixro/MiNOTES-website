# Review: state-space methods

*Background from Control Engineering Analogue Design · summary notes, with the discrete form used in Lecture 4*

State space is how MIMO digital controllers are designed (Chapter 8). This chapter reviews the continuous form, then shows how it is sampled.

## Definitions

- **State:** the smallest set of variables (the **state variables**) that, together with the input, fully describes the system and its future response.
- **State variables:** that minimal set of variables, which determines the dynamics of a linear system.
- **State vector** $x(t)$: the $n$ state variables written as one vector.

**Advantages of the state-variable approach:**

- it simplifies the mathematical representation of large systems;
- it handles time-domain responses, including those of non-linear systems;
- MIMO systems are represented and analysed as easily as SISO ones;
- it includes the effect of all the initial conditions;
- the matrix equations suit simulation on a digital computer.

## The state equations

$$\begin{gathered}\dot x(t) = Ax(t) + Bu(t) \\ \text{(state equation)}\end{gathered}$$

$$\begin{gathered}y(t) = Cx(t) + Du(t) \\ \text{(output equation)}\end{gathered}$$

| Matrix | Name |
|---|---|
| $A$ | State (system) matrix |
| $B$ | Input matrix |
| $C$ | Output matrix |
| $D$ | Direct transmission matrix |

For $n$ states and $m$ inputs, each state equation is $\dot x_i = a_{i1}x_1 + \cdots + a_{in}x_n + b_{i1}u_1 + \cdots + b_{im}u_m$.

**Transfer function from the state model:**

$$H(s) = \frac{Y(s)}{U(s)} = C(sI - A)^{-1}B + D$$

## Example 1: parallel RLC driven by a current source

*A current source $u(t)$ feeds a capacitor $C$, in parallel with an inductor $L$ in series with a resistor $R$. Choose $x_1 = v_C$ and $x_2 = i_L$.*

- **KCL at the top node:** $u = C\dfrac{dv_C}{dt} + i_L$, so $\dot x_1 = \dfrac{1}{C}u - \dfrac{1}{C}x_2$.
- **KVL round the L–R branch:** $v_C = L\dfrac{di_L}{dt} + Ri_L$, so $\dot x_2 = \dfrac1Lx_1 - \dfrac RLx_2$.

$$\begin{bmatrix}\dot x_1\\\dot x_2\end{bmatrix} = \begin{bmatrix}0 & -\frac1C\\\frac1L & -\frac RL\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix} + \begin{bmatrix}\frac1C\\0\end{bmatrix}u$$

**Output.** If the output is the capacitor voltage, $y = [1\;\;0]x$. If it is the voltage across $R$, as drawn in the summary, then $y = Ri_L = [0\;\;R]x$.

## Example 2: series L feeding R parallel C

*A voltage source $v(t)$ drives an inductor $L$ in series with $R$ and $C$ in parallel. The output is the voltage across $R$ (= $v_C$). Choose $x_1 = v_C$ and $x_2 = i_L$.*

- **KCL:** $i_L = \dfrac{v_C}{R} + C\dfrac{dv_C}{dt}$, so $\dot x_1 = -\dfrac{1}{RC}x_1 + \dfrac1Cx_2$.
- **KVL:** $v = L\dfrac{di_L}{dt} + v_C$, so $\dot x_2 = -\dfrac1Lx_1 + \dfrac1Lv$.

$$\begin{gathered}\begin{aligned}\dot x &= \begin{bmatrix}-\frac{1}{RC} & \frac1C\\-\frac1L & 0\end{bmatrix}x \\ &\quad + \begin{bmatrix}0\\\frac1L\end{bmatrix}v,\end{aligned} \\ y = \begin{bmatrix}1 & 0\end{bmatrix}x\end{gathered}$$

## Example 3: from the state model to the transfer function

$$\begin{gathered}A = \begin{bmatrix}0 & 1\\-2 & -3\end{bmatrix}, \\ B = \begin{bmatrix}0\\5\end{bmatrix}, \\ C = \begin{bmatrix}1 & 0\end{bmatrix}, \\ D = 0\end{gathered}$$

$$\small \begin{gathered}sI - A = \begin{bmatrix}s & -1\\2 & s + 3\end{bmatrix}, \\ \det(sI - A) = s(s + 3) + 2 = s^2 + 3s + 2\end{gathered}$$

$$(sI - A)^{-1} = \frac{1}{s^2 + 3s + 2}\begin{bmatrix}s + 3 & 1\\-2 & s\end{bmatrix}$$

$$\begin{aligned}H(s) &= C(sI - A)^{-1}B \\ &= \frac{[\,s + 3\;\;\;1\,]\begin{bmatrix}0\\5\end{bmatrix}}{s^2 + 3s + 2} \\ &= \frac{5}{s^2 + 3s + 2} \\ &= \frac{5}{(s + 1)(s + 2)}\end{aligned}$$

The poles −1 and −2 are the eigenvalues of $A$.

## Example 4: phase-variable form from a transfer function

$$\frac{C(s)}{R(s)} = \frac{24}{s^3 + 9s^2 + 26s + 24}$$

Cross-multiply and invert: $\dddot c + 9\ddot c + 26\dot c + 24c = 24r$. Choose the **phase variables** $x_1 = c$, $x_2 = \dot c$, $x_3 = \ddot c$:

$$\begin{gathered}\dot x_1 = x_2, \\ \dot x_2 = x_3, \\ \dot x_3 = -24x_1 - 26x_2 - 9x_3 + 24r\end{gathered}$$

$$\begin{gathered}\begin{aligned}\begin{bmatrix}\dot x_1\\\dot x_2\\\dot x_3\end{bmatrix} &= \begin{bmatrix}0 & 1 & 0\\0 & 0 & 1\\-24 & -26 & -9\end{bmatrix}\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix} \\ &\quad + \begin{bmatrix}0\\0\\24\end{bmatrix}r,\end{aligned} \\ y = \begin{bmatrix}1 & 0 & 0\end{bmatrix}x\end{gathered}$$

The block diagram is three integrators in a chain, $\dot x_3 \to x_3 \to x_2 \to x_1$, with feedback gains 9, 26 and 24 to the input summing junction and an input gain of 24. The last row of $A$ holds the negated denominator coefficients, in reverse order.

## Sampling a state model

A plant $\dot x = Ax + Bu$ driven through a ZOH (so $u$ is constant over each period) becomes, at the sampling instants,

$$\begin{gathered}x[k + 1] = \Phi x[k] + \Gamma u[k], \\ \Phi = e^{AT}, \\ \Gamma = \int_0^Te^{A\tau}\,d\tau\,B\end{gathered}$$

with $y[k] = Cx[k]$.

- The discrete transfer function is $G(z) = C(zI - \Phi)^{-1}\Gamma$.
- The system is stable if every **eigenvalue of $\Phi$** is inside the unit circle. Each eigenvalue $\lambda$ of $A$ becomes $e^{\lambda T}$, the same $z = e^{sT}$ mapping as before.

*Example:* the double integrator $\ddot y = u$ has $A = \begin{bmatrix}0 & 1\\0 & 0\end{bmatrix}$ and $B = \begin{bmatrix}0\\1\end{bmatrix}$. Since $A^2 = 0$,

$$\begin{gathered}\begin{aligned}\Phi &= I + AT \\ &= \begin{bmatrix}1 & T\\0 & 1\end{bmatrix},\end{aligned} \\ \Gamma = \begin{bmatrix}T^2/2\\T\end{bmatrix}\end{gathered}$$

With $T = 0.1$ s this is the model used for the pole-placement example in Chapter 8.

> **Corrections to the summary.**
> - Example 3: the summary writes $\det(sI - A) = s(s - 3) + 2$ and $H(s) = \dfrac{5}{s(s - 3) + 2}$. The (2,2) entry of $sI - A$ is $s + 3$, so $H(s) = \dfrac{5}{s^2 + 3s + 2}$. The summary's version would have poles at $+1$ and $+2$, which is unstable and contradicts the eigenvalues of $A$.
> - Example 4: the summary's matrix has the first two rows as $[1\;0\;0]$ and $[0\;1\;0]$. In phase-variable form they are $[0\;1\;0]$ and $[0\;0\;1]$ (from $\dot x_1 = x_2$, $\dot x_2 = x_3$), as its own equations state.
> - Example 1: the summary sets the output to $v_C$ while the figure marks $V_o$ across $R$. Both output equations are given above.
