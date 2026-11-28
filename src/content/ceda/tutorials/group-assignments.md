**The group assignments** set six groups a topic each, with at least five tutorial questions per topic. The sheet asks everyone to learn every group's work, so here are worked answers to all 30 questions. Each answer is short, and the chapter links lead to the full treatment.

## G1.1 Discrete-time control
**Group 1: introduction.** Define discrete-time (digital) control engineering.

::: answer
Digital control engineering is the analysis and design of feedback systems in which a **digital computer** acts as the controller. The plant is usually continuous, but the controller sees it only through **samples** taken every $T$ seconds (via an ADC), computes the control signal with a **difference equation**, and returns it through a DAC and hold. Signals are therefore discrete in time and quantised in amplitude. The main tools are the z-transform, pulse transfer functions and stability in the z-plane. (Chapter 1.)
:::

## G1.2 Why sample?
Explain why digital controllers require sampling.

::: answer
A computer can only store and process **numbers**, one at a time, in finite time. It cannot handle a continuous signal, which has a value at every instant. So the measured signal is sampled at regular instants and quantised by the ADC, giving a sequence the program can process. The sampling period must be short enough to capture the plant's dynamics (Nyquist, and in practice 10 or more samples per closed-loop time constant or cycle). (Chapter 2.)
:::

## G1.3 Continuous and discrete control
Differentiate continuous and discrete control systems.

::: answer
| Continuous (analogue) | Discrete (digital) |
|---|---|
| Signals defined at every instant | Signals defined at sampling instants |
| Differential equations, Laplace, $G(s)$ | Difference equations, z-transform, $G(z)$ |
| Stable if poles are in the left half s-plane | Stable if poles are inside the unit circle |
| Op-amps, RC networks | Microprocessor, ADC, DAC and program |
| Fixed by hardware, drifts with age | Reprogrammable, repeatable |
| No sampling delay or aliasing | ZOH delay, aliasing, quantisation |
:::

## G1.4 The basic loop
Draw a basic digital control loop diagram.

::: answer
Reference $r(t)$ → summing junction → **ADC** (sampler and quantiser, period $T$) → **digital controller** $D(z)$ → **DAC with ZOH** → **plant** $G_p(s)$ → output $y(t)$, with a **sensor** $H(s)$ feeding $y$ back to the junction. In many systems the reference is digital and the sensor output is sampled instead, so the subtraction happens inside the computer. See the figure in Chapter 1.
:::

## G1.5 Applications
Give three applications of digital control.

::: answer
- **Motor drives and robotics:** speed and position loops in inverters, servo drives and robot arms.
- **Process control:** temperature, pressure, level and flow loops in PLCs and DCS systems.
- **Automotive and aerospace:** engine management, ABS, cruise control, autopilots and flight control.

Others: power-system protection and excitation control, and HVAC and building automation.
:::

## G2.1 Constructing a block diagram
**Group 2: block diagrams.** Construct a digital control block diagram.

::: answer
Draw the blocks in signal order and mark every sampler:

1. the reference $R(z)$ and the error $E(z) = R(z) - Y(z)$ formed in software (or sample a continuous error);
2. the controller $D(z)$;
3. the hold $\dfrac{1 - e^{-sT}}{s}$ and the plant $G_p(s)$, combined into $G(z) = (1 - z^{-1})\,\mathcal{Z}\{G_p(s)/s\}$;
4. the feedback path, with a phantom sampler at the output so that $Y(z)$ is defined.

The result is $\dfrac{Y(z)}{R(z)} = \dfrac{D(z)G(z)}{1 + D(z)G(z)}$ for unity feedback. (Chapter 6, and Tutorial II Q27.)
:::

## G2.2 Role of the sampler
Explain the role of the sampler in a block diagram.

::: answer
The sampler marks where a signal becomes a sequence. It decides **which blocks can be transformed separately**: blocks separated by a sampler give $G_1(z)G_2(z)$, while blocks with no sampler between them must be combined first, $G_1G_2(z)$. A pulse transfer function exists only when the input reaches the system through a sampler. Moving a sampler changes the answer, so samplers cannot be shifted freely the way blocks are in an analogue diagram. (Chapter 6.)
:::

## G2.3 Continuous plant to discrete model
Convert a continuous plant to a discrete-time model.

::: answer
Use the ZOH equivalent $G(z) = (1 - z^{-1})\,\mathcal{Z}\left\{\dfrac{G(s)}{s}\right\}$.

*Example:* $G(s) = \dfrac{1}{s + 1}$ with $T = 0.1$ s. $\dfrac{1}{s(s + 1)} = \dfrac1s - \dfrac{1}{s + 1}$, so

$$G(z) = 1 - \frac{z - 1}{z - e^{-0.1}} = \frac{0.0952}{z - 0.9048}$$

As a difference equation: $y(k) = 0.9048y(k - 1) + 0.0952u(k - 1)$. (Chapter 5.)
:::

## G2.4 The ZOH block
Define the ZOH and draw its block symbol.

::: answer
A zero-order hold keeps each sample constant for one sampling period, turning the sample sequence into a staircase. It models the DAC. Its transfer function is

$$G_h(s) = \frac{1 - e^{-sT}}{s}$$

It is drawn as a box labelled "ZOH" (or with this transfer function) directly after the sampler. It behaves roughly like a delay of $T/2$ and a low-pass filter with nulls at multiples of $\omega_s$. (Chapter 5.)
:::

## G2.5 Disturbances
Describe how disturbances enter a digital control loop.

::: answer
- **Load disturbances** act on the plant input or inside the plant (a load torque on a motor). They are continuous and are not sampled before they act.
- **Output disturbances** add to the plant output.
- **Measurement noise** enters at the sensor and is sampled with the output. Above $f_s/2$ it aliases, so it needs an anti-aliasing filter.
- **Quantisation** in the ADC and DAC adds small noise.

For an output disturbance $d$ with unity feedback, $Y(z) = \dfrac{DG}{1 + DG}R(z) + \dfrac{1}{1 + DG}D_d(z)$, so high loop gain suppresses it. A disturbance entering before the plant with no sampler gives a term $GD_d(z)$ that cannot be split into $G(z)D_d(z)$.
:::

## G3.1 Writing a difference equation
**Group 3: SISO modelling.** Write a difference equation for a given system.

::: answer
*Example:* the ZOH model of $\dfrac{1}{s + 1}$ at $T = 0.1$ s, $\dfrac{Y(z)}{U(z)} = \dfrac{0.0952}{z - 0.9048}$. Cross-multiply and divide by $z$:

$$\begin{aligned}y(k) &= 0.9048y(k - 1) \\ &\quad + 0.0952u(k - 1)\end{aligned}$$

In general, $\dfrac{Y(z)}{U(z)} = \dfrac{b_0 + b_1z^{-1} + \cdots}{1 + a_1z^{-1} + \cdots}$ gives $y(k) = -a_1y(k - 1) - \cdots + b_0u(k) + b_1u(k - 1) + \cdots$. (Chapter 3.)
:::

## G3.2 SISO or MIMO?
Identify whether a system is SISO or MIMO.

::: answer
Count the manipulated inputs and the controlled outputs. **SISO:** one of each (motor voltage → speed). **MIMO:** more than one (a boiler with fuel and feedwater inputs controlling pressure and level). A MIMO system is MIMO because the channels interact: each input affects several outputs. It is described by a transfer-function matrix or by a state model whose $B$ has several columns and whose $C$ has several rows.
:::

## G3.3 Transforming a difference equation
Perform the z-transform of a difference equation.

::: answer
Use linearity and the shift property $\mathcal{Z}\{x(k - n)\} = z^{-n}X(z)$ (zero initial conditions).

*Example:* $y(k) = 0.5y(k - 1) + x(k)$:

$$\begin{gathered}Y(z) = 0.5z^{-1}Y(z) + X(z) \\ \Rightarrow \frac{Y(z)}{X(z)} = \frac{z}{z - 0.5}\end{gathered}$$

With non-zero initial conditions, use the shift-left form $\mathcal{Z}\{x(k + 1)\} = zX(z) - zx(0)$. (Chapter 3.)
:::

## G3.4 Response by z-transform
Solve for the system response using the z-transform.

::: answer
Continue the example with a unit-step input:

$$\begin{aligned}Y(z) &= \frac{z}{z - 0.5}\cdot\frac{z}{z - 1} \\ &= \frac{2z}{z - 1} - \frac{z}{z - 0.5}\end{aligned}$$

$$\begin{aligned}y(k) &= 2 - (0.5)^k \\ &= 1,\ 1.5,\ 1.75,\ \ldots \to 2\end{aligned}$$

The final-value theorem confirms $\lim_{z\to1}(z - 1)Y(z) = 2$. (Practice problem P3.)
:::

## G3.5 Causality
Explain causality in discrete-time systems.

::: answer
A system is **causal** if its output at sample $k$ depends only on present and past inputs, never on future ones. Real-time controllers must be causal. Tests:

- the impulse response satisfies $h(k) = 0$ for $k < 0$;
- the transfer function is **proper**: the degree of the numerator in $z$ is no higher than that of the denominator (so the ROC is outside the outermost pole).

$G(z) = z^2/(z - 0.5)$ is not causal: it needs $u(k + 1)$.
:::

## G4.1 Stability from poles
**Group 4: SISO analysis.** Check stability using pole locations.

::: answer
Find the roots of the characteristic equation and compare $|z|$ with 1.

*Example:* $G(z) = \dfrac{z}{z^2 - 1.2z + 0.32}$ has poles at 0.8 and 0.4, both inside the unit circle: **stable**. A pole at $z = 1.05$ would make it unstable; a single pole at $|z| = 1$, marginally stable. (Chapter 7.)
:::

## G4.2 Region of convergence
Explain the region of convergence of the z-transform.

::: answer
The ROC is the set of $z$ for which $\sum x(k)z^{-k}$ converges. For a causal (right-sided) sequence it is the region **outside the outermost pole**, $|z| > r_{max}$. The same $X(z)$ with a different ROC is a different sequence, so the ROC makes the inverse unique. A causal system is stable when its ROC includes the unit circle, i.e. all poles are inside it. (Chapters 3 and 4.)
:::

## G4.3 Plotting poles
Plot the poles of a sample SISO system.

::: answer
*Example:* $G(z) = \dfrac{z + 0.5}{z^2 - z + 0.5}$. The zero is at $-0.5$ (○). The poles are the roots of $z^2 - z + 0.5$: $z = 0.5 \pm j0.5$ (×), with $|z| = 0.707$ and angle $\pm45°$.

Both poles are inside the unit circle, so the system is stable. Their angle of 45° means an oscillation of 8 samples per cycle, decaying by a factor 0.707 per sample.
:::

## G4.4 Steady-state error
Determine the steady-state error of a digital system.

::: answer
Use the error constants (Chapter 11): $K_p = \lim_{z\to1}G(z)$, $K_v = \frac1T\lim_{z\to1}(z - 1)G(z)$.

*Example:* ZOH and $\dfrac{10}{s(s + 1)}$ in unity feedback. The loop is type 1, so $K_p = \infty$ and the step error is 0. $K_v = 10$, so the ramp error is $1/10 = 0.1$. Check stability first: at $T = 0.1$ s the loop is stable.
:::

## G4.5 Analysing a response
Analyse a system response using the z-transform.

::: answer
*Example:* unity feedback with $G(z) = \dfrac{0.3935}{z - 0.6065}$ (ZOH, $\frac{1}{s + 1}$, $T = 0.5$ s).

$$T(z) = \frac{0.3935}{z - 0.2130}$$

The pole at 0.213 gives a fast, non-oscillating response. The step response is $y(k) = 0.5\left[1 - (0.213)^k\right]$: $0,\ 0.394,\ 0.478,\ 0.495,\ \ldots \to 0.5$. The 50% steady-state error is that of proportional control on a type-0 plant. (Practice problem P7.)
:::

## G5.1 MIMO state equations
**Group 5: MIMO and state space.** Write state-space equations for a MIMO system.

::: answer
Two first-order loops with two inputs and two outputs, $\dot x_1 = -x_1 + u_1$ and $\dot x_2 = -2x_2 + 0.5x_1 + u_2$, outputs $y_1 = x_1$ and $y_2 = x_2$:

$$\begin{gathered}\begin{aligned}\dot x &= \begin{bmatrix}-1 & 0\\0.5 & -2\end{bmatrix}x \\ &\quad + \begin{bmatrix}1 & 0\\0 & 1\end{bmatrix}u,\end{aligned} \\ y = \begin{bmatrix}1 & 0\\0 & 1\end{bmatrix}x\end{gathered}$$

The off-diagonal 0.5 couples the channels: $u_1$ affects both outputs. (Chapter 10.)
:::

## G5.2 Discretising a MIMO model
Discretise a continuous-time MIMO system.

::: answer
Use $\Phi = e^{AT}$ and $\Gamma = \int_0^Te^{A\tau}d\tau\,B$, exactly as for SISO.

*Example (uncoupled, for hand working):* $A = \begin{bmatrix}-1 & 0\\0 & -2\end{bmatrix}$, $B = I$, $T = 0.1$ s.

$$\begin{aligned}\Phi &= \begin{bmatrix}e^{-0.1} & 0\\0 & e^{-0.2}\end{bmatrix} \\ &= \begin{bmatrix}0.9048 & 0\\0 & 0.8187\end{bmatrix}\end{aligned}$$

$$\begin{aligned}\Gamma &= \begin{bmatrix}1 - e^{-0.1} & 0\\0 & \tfrac12(1 - e^{-0.2})\end{bmatrix} \\ &= \begin{bmatrix}0.0952 & 0\\0 & 0.0906\end{bmatrix}\end{aligned}$$

For a coupled $A$, compute $e^{AT}$ by series, eigenvalues, or software.
:::

## G5.3 Controllability and observability
Explain controllability and observability.

::: answer
- **Controllable:** the inputs can move the state from any value to any other in finite time. Test: $[\Gamma\;\;\Phi\Gamma\;\cdots\;\Phi^{n-1}\Gamma]$ has rank $n$.
- **Observable:** the initial state can be found from the outputs. Test: $[C;\;C\Phi;\;\cdots;\;C\Phi^{n-1}]$ has rank $n$.

The double integrator is controllable, observable from position, but not observable from velocity alone. Pole placement needs controllability; an observer needs observability. (Chapter 10.)
:::

## G5.4 Inputs and outputs
Identify the inputs and outputs in a MIMO system.

::: answer
**Inputs** are the variables the controller can manipulate (valve openings, voltages, heater power). **Outputs** are the measured or controlled variables (level, temperature, speed). **Disturbances** are inputs no one controls (load, ambient temperature). In the model, the inputs are the columns of $B$ (and of the transfer matrix $G(z)$) and the outputs are the rows of $C$.

*Example:* a heated tank. Inputs: inflow valve and heater power. Outputs: level and temperature. Disturbances: outflow demand and inlet temperature.
:::

## G5.5 Solving the state update
Solve a discrete-time state update equation.

::: answer
Iterate $x[k + 1] = \Phi x[k] + \Gamma u[k]$, or use $x[k] = \Phi^kx[0] + \sum_{j=0}^{k-1}\Phi^{k-1-j}\Gamma u[j]$.

*Example:* the double integrator at $T = 0.1$ s, $\Phi = \begin{bmatrix}1 & 0.1\\0 & 1\end{bmatrix}$, $\Gamma = \begin{bmatrix}0.005\\0.1\end{bmatrix}$, $x[0] = 0$, $u = 1$:

- $x[1] = \Gamma = [0.005\;\;0.1]^T$;
- $x[2] = \Phi x[1] + \Gamma = [0.02\;\;0.2]^T$;
- $x[3] = [0.045\;\;0.3]^T$.

The position is $(kT)^2/2$, exactly the continuous response to a unit step of acceleration.
:::

## G6.1 Digital PID algorithm
**Group 6: digital controllers.** Write a digital PID algorithm.

::: answer
Velocity (incremental) form, run once every $T$ seconds:

1. read $y[k]$ and compute $e[k] = r[k] - y[k]$;
2. $u[k] = u[k - 1] + K_p(e[k] - e[k - 1]) + K_iTe[k] + \dfrac{K_d}{T}(e[k] - 2e[k - 1] + e[k - 2])$;
3. limit $u[k]$ to the actuator range, and send it to the DAC;
4. shift the stored values: $e[k - 2] \leftarrow e[k - 1]$, $e[k - 1] \leftarrow e[k]$, $u[k - 1] \leftarrow u[k]$.

(Chapter 8, and practice problem P11.)
:::

## G6.2 Effect of the sampling time
Explain the effect of sampling time on controller performance.

::: answer
- **Too large $T$:** more phase lag (the ZOH delay is about $T/2$), lower stability margins, poorer disturbance rejection, and aliasing of fast signals. A loop can become unstable: $K/[s(s + 1)]$ with $K = 2$ is stable at $T = 1$ s and unstable at $T = 2$ s.
- **Too small $T$:** heavier computation, a noisy derivative term ($\frac{K_d}{T}\Delta e$ amplifies noise), and poles crowded near $z = 1$, which need more numerical precision.
- **Rule of thumb:** 10 to 30 samples per closed-loop rise time, or $f_s$ about 10 to 20 times the closed-loop bandwidth.
:::

## G6.3 Deadbeat and MPC
Compare deadbeat and model predictive control.

::: answer
**Deadbeat** puts all the closed-loop poles at $z = 0$, so the error reaches zero in a finite number of samples. It is simple, but uses very large control moves and is sensitive to model errors. **MPC** optimises the control moves over a moving prediction horizon at every sample, and handles input and output constraints explicitly, at the cost of solving an optimisation each sample. See the comparison table in Chapter 8.
:::

## G6.4 PID parameters
Identify the parameters of a digital PID controller.

::: answer
| Parameter | Role |
|---|---|
| $K_p$ | Proportional gain: reacts to the present error; higher gives speed but less damping |
| $K_i$ (or $K_p/T_i$) | Integral gain: removes the steady-state error; too high causes overshoot |
| $K_d$ (or $K_pT_d$) | Derivative gain: adds damping and anticipation; amplifies noise |
| $T$ | Sampling period: sets how well the discrete form approximates the continuous one |

Practical extras: output limits, anti-windup on the integral, and a filter on the derivative.
:::

## G6.5 A discrete control law
Develop a discrete control law for a SISO system.

::: answer
*Example:* plant $\dfrac{1}{s + 1}$ with ZOH at $T = 0.1$ s, $G(z) = \dfrac{0.0952}{z - 0.9048}$. Ask for the closed-loop pole at $z = 0.5$ with zero steady-state step error, using a PI law $D(z) = K\dfrac{z - 0.9048}{z - 1}$ (its zero cancels the plant pole).

The open loop is $\dfrac{0.0952K}{z - 1}$, so the closed loop is $\dfrac{0.0952K}{z - 1 + 0.0952K}$. Setting the pole to 0.5 gives $K = 5.25$:

$$\begin{aligned}u(k) &= u(k - 1) + 5.25e(k) \\ &\quad - 4.75e(k - 1)\end{aligned}$$

The integrator (pole at $z = 1$) removes the step error. With $K = 10.5$ the pole moves to 0, which is the deadbeat law of Chapter 8.
:::
