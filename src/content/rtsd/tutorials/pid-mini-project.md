**Group mini-project: real-time motor speed control with a PID controller** (simulated in Node-RED). The project closes a speed loop: setpoint → PID → PWM → motor → speed feedback. These questions walk through the real-time design behind it, with a fully worked discrete PID example. Names and registration numbers from the report are left out.

> **Review of the submitted report.**
> - The PID equation in Section 5 is printed **twice**, and the discrete form used in Node-RED is never written out (see P3).
> - The **sampling period $T_s$** and the gains $K_p$, $K_i$, $K_d$ are never given numbers, and the results section reports "acceptable" rise time and overshoot without values. Give the numbers and a step-response plot.
> - The first reference is misspelt "gata, K."; it is **Ogata, K.** (2010), *Modern Control Engineering*. The module code on the cover reads CSET 08104; the module is **CSEU 08104**.
> - Calling the Node-RED loop *soft* real-time is right (P5), but the report should say why.

## P1 Closed-loop structure
Draw the closed-loop structure of the speed-control system and explain why an open-loop drive is not enough.

::: answer
**Loop:** setpoint $r$ (desired speed) → error $e = r - y$ → **PID controller** → control signal $u$ (PWM duty cycle) → **driver + motor** → speed $y$ → **speed sensor** (encoder or tachogenerator) → back to the error junction.

In the Node-RED simulation the same blocks appear as: a **clock** (inject node firing every $T_s$) → **PID function node** → **motor-model function node** → **dashboard** chart, with the model's speed fed back to the PID node.

**Why closed loop:** an open-loop drive sets a fixed duty cycle and hopes the speed is right. Load torque changes, supply voltage changes and motor wear all change the speed, and nothing corrects them. Feedback measures the actual speed and adjusts $u$ until the error is removed.
:::

## P2 The three terms
Explain the effect of the proportional, integral and derivative terms.

::: answer
$$u(t) = K_p e(t) + K_i \int_0^t e(\tau)\, d\tau + K_d \frac{de(t)}{dt}$$

| Term | Reacts to | Raising the gain |
|---|---|---|
| **P** ($K_p e$) | the **present** error | faster response, smaller (but not zero) steady-state error, more overshoot |
| **I** ($K_i \int e$) | the **accumulated past** error | removes steady-state error; too much gives overshoot, oscillation and windup |
| **D** ($K_d\, de/dt$) | the **rate of change** (trend) of error | damps overshoot and improves stability; amplifies sensor noise |

For speed loops, a **PI** controller ($K_d = 0$) is common, because the speed signal is noisy and the motor is close to a first-order system.
:::

## P3 Discrete PID with sampling period Ts
The controller runs every $T_s$ seconds. Write the discrete (positional) PID law and state what the real-time task must do each period.

::: answer
Replace the integral by a running sum and the derivative by a difference, with $e_k = r_k - y_k$:
$$I_k = I_{k-1} + K_i T_s e_k$$
$$u_k = K_p e_k + I_k + K_d \frac{e_k - e_{k-1}}{T_s}$$

**Every period the control task must:**

1. read the speed $y_k$ (encoder count over the period);
2. compute $e_k$, $I_k$ and $u_k$;
3. **limit** $u_k$ to the actuator range (0–100% duty) and apply anti-windup (P6);
4. write the new PWM duty;
5. store $e_k$ and $I_k$ for the next period.

This is a **periodic task** with period $T_s$ and, normally, deadline $D = T_s$. Reading the input and writing the output at fixed instants keeps the jitter low; varying sampling instants act like noise on the derivative and integral terms.
:::

## P4 Worked example
A motor reaches a steady speed of 20 rpm per 1% PWM duty, with a time constant $\tau = 0.5$ s. Model it in discrete time as
$$y_{k+1} = y_k + \frac{T_s}{\tau}\,(20 u_k - y_k)$$
A PI controller ($K_p = 0.05$ %/rpm, $K_i = 0.5$ %/(rpm·s), $K_d = 0$) runs with $T_s = 0.1$ s. The duty is limited to 0–100%, and the integral is frozen while the output is saturated. Starting from rest, the setpoint steps to 1000 rpm. (a) Compute the first five control periods. (b) Find the steady-state duty and comment on the response.

::: answer
Here $T_s / \tau = 0.2$ and $K_i T_s = 0.05$.

**(a)**

| $k$ | $t$ (s) | $y_k$ (rpm) | $e_k$ | $P = 0.05 e_k$ | $I_k$ | $u$ before limit | $u_k$ (%) | $y_{k+1}$ (rpm) |
|---|---|---|---|---|---|---|---|---|
| 0 | 0.0 | 0 | 1000 | 50.0 | 50.0 | 100.0 | 100.0 | 400 |
| 1 | 0.1 | 400 | 600 | 30.0 | 50.0 (frozen; would be 80.0) | 110.0 | 100.0 | 720 |
| 2 | 0.2 | 720 | 280 | 14.0 | 64.0 | 78.0 | 78.0 | 888 |
| 3 | 0.3 | 888 | 112 | 5.6 | 69.6 | 75.2 | 75.2 | 1011 |
| 4 | 0.4 | 1011 | −11 | −0.6 | 69.0 | 68.5 | 68.5 | 1083 |

*Sample row ($k = 2$):* $I_2 = 50.0 + 0.05 \times 280 = 64.0$; $u_2 = 14.0 + 64.0 = 78.0\%$; $y_3 = 720 + 0.2(20 \times 78.0 - 720) = 720 + 0.2(840) = 888$ rpm.

At $k = 1$ the unlimited output (110%) is above 100%, so the integral is not updated: this is the anti-windup step.

**(b)** In steady state $y = 1000$ rpm needs $20u = 1000$, so $u = 50\%$. The error is then zero, so $P = 0$ and the integral alone holds $I = 50\%$: this is why the I term removes steady-state error.

Continuing the iteration, the speed peaks at about **1109 rpm at $t = 0.6$ s (11% overshoot)** and stays within 2% of 1000 rpm after about **1.1 s**. Lowering $K_i$ reduces the overshoot but slows the approach; adding a small $K_d$ damps it.
:::

## P5 Hard, firm or soft?
The report calls the system soft real-time. Is that right, and what would change on real hardware?

::: answer
**In the Node-RED simulation it is soft real-time.** Node-RED runs on Node.js on a general-purpose OS. Its inject-node timer is not guaranteed: garbage collection, other flows and the OS scheduler delay some periods, so the sampling has jitter and an occasional late period. That only degrades the plotted response; nothing is damaged.

**A real motor drive** is at least **firm**, and **hard** where the motor is safety-related (e.g. a conveyor with people nearby, or current limiting to protect the motor): a missed control update can let the speed or current run away. It would run on a microcontroller (or an RTOS) with:

- a **hardware timer interrupt** every $T_s$ (low jitter) and hardware PWM and encoder counters;
- the control task at **high priority**, with its worst-case execution time well below $T_s$;
- a **watchdog** and a safe state (PWM off, brake on) if the loop stops.
:::

## P6 Choosing Ts and handling saturation
(a) How should the sampling period be chosen? (b) What is integral windup and how is it prevented?

::: answer
**(a) Sampling period.** Sample fast compared with the plant: a common rule is $T_s \le \tau/10$ (or 10–20 samples per rise time). Here $\tau = 0.5$ s, so $T_s$ of 10–50 ms would suit a real drive; the 0.1 s in P4 is coarse but keeps the hand calculation short. Faster is not always better: each period costs CPU time ($U = C/T_s$ for the control task), and a very short $T_s$ makes the derivative term noisy.

**(b) Windup.** When the actuator is saturated (100% duty), the error stays large and the integral keeps growing. When the speed finally reaches the setpoint, the oversized integral holds the output high, causing a big overshoot and slow recovery.

**Prevention:**

- **Conditional integration (clamping):** freeze the integral while the output is saturated, as in P4.
- **Back-calculation:** feed the difference between the limited and unlimited output back to reduce the integral.
- **Limit the integral** to the actuator range.
:::

## P7 Testing the loop
Which tests and measurements should the project report include?

::: answer
**Step response** (setpoint step, e.g. 0 → 1000 rpm), measuring:

- **rise time** (10% to 90%),
- **percentage overshoot** $= (y_{peak} - y_{final}) / y_{final} \times 100\%$,
- **settling time** (within ±2% of the final value),
- **steady-state error**.

**Disturbance test:** step the load torque and measure the speed dip and recovery time.

**Timing test:** log the actual time of each controller run; report the period jitter and the worst-case execution time against $T_s$.

A tuning table (e.g. three sets of $K_p$, $K_i$, $K_d$ with their overshoot and settling time) shows the trade-offs in P2. *For the P4 values: rise time about 0.2 s, overshoot 11%, settling time 1.1 s, steady-state error 0.*
:::
