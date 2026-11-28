# Digital control systems

*Lecture 1 · EEU 08101 Control Engineering Digital Analysis*

**What this module covers:**

- the idea of a discrete-time (digital) control system;
- sampling, quantisation and coding;
- modelling with difference equations and the z-transform;
- block diagrams of sampled-data systems;
- stability in the z-plane;
- the design of digital controllers.

The prerequisite is *Analogue Analysis and Design*. Chapters 9 and 10 summarise the parts of it that this module builds on.

## What a digital control system is

A **digital (discrete-time) control system** is a feedback control system in which the signals are **measured, processed and generated at discrete instants of time**.

1. An **analog-to-digital converter (ADC)** turns the continuous signals into numbers.
2. A **digital controller** (a microprocessor, DSP or PLC) processes the numbers.
3. A **digital-to-analog converter (DAC)** turns the controller's output back into an analog signal for the plant.

*Analogy:* a digital camera takes snapshots at a fixed rate (frames per second). In the same way, a digital controller samples the system variables at fixed intervals and computes a control action from each sample.

**Examples:**

- the speed control of a motor with a digital PID controller;
- industrial process control with programmable logic controllers (PLCs).

The terms *sampled-data system*, *discrete-time system* and *digital control system* are used loosely, often interchangeably. All of them mean a system in which some signal is sampled or digital.

## Structure

<figure class="fig"><svg viewBox="0 0 610 235" role="img" aria-label="Digital control system: the error is sampled by an ADC, processed by a digital controller and returned to the plant through a DAC."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="28" y="85" text-anchor="middle" class="d-t b">r</text><line x1="38" y1="80" x2="64" y2="80" class="d-ax"  marker-end="url(#ah)"/><circle cx="78" cy="80" r="14" class="d-box"/><line x1="68.2" y1="70.2" x2="87.8" y2="89.8" class="d-ax" /><line x1="68.2" y1="89.8" x2="87.8" y2="70.2" class="d-ax" /><text x="66" y="64" text-anchor="middle" class="d-t s">+</text><text x="70" y="110" text-anchor="middle" class="d-t s">−</text><line x1="92" y1="80" x2="112" y2="80" class="d-ax"  marker-end="url(#ah)"/><rect x="112" y="56" width="70" height="48" rx="10" class="d-box c"/><text x="147.0" y="85.0" text-anchor="middle" class="d-t b">ADC</text><line x1="182" y1="80" x2="206" y2="80" class="d-ax"  marker-end="url(#ah)"/><rect x="206" y="56" width="120" height="48" rx="10" class="d-box a"/><text x="266.0" y="85.0" text-anchor="middle" class="d-t b">Controller</text><line x1="326" y1="80" x2="350" y2="80" class="d-ax"  marker-end="url(#ah)"/><rect x="350" y="56" width="70" height="48" rx="10" class="d-box c"/><text x="385.0" y="85.0" text-anchor="middle" class="d-t b">DAC</text><line x1="420" y1="80" x2="444" y2="80" class="d-ax"  marker-end="url(#ah)"/><rect x="444" y="56" width="90" height="48" rx="10" class="d-box b"/><text x="489.0" y="85.0" text-anchor="middle" class="d-t b">Plant</text><line x1="534" y1="80" x2="575" y2="80" class="d-ax" /><line x1="575" y1="80" x2="596" y2="80" class="d-ax"  marker-end="url(#ah)"/><text x="588" y="70" text-anchor="middle" class="d-t b">y</text><circle cx="560" cy="80" r="3.5" class="d-dot"/><line x1="560" y1="80" x2="560" y2="170" class="d-ax" /><line x1="560" y1="170" x2="78" y2="170" class="d-ax" /><line x1="78" y1="170" x2="78" y2="94" class="d-ax"  marker-end="url(#ah)"/><rect x="270" y="148" width="110" height="44" rx="10" class="d-box"/><text x="325.0" y="175.0" text-anchor="middle" class="d-t b">Sensor</text><text x="196" y="46" text-anchor="middle" class="d-t s m">e(kT)</text><text x="338" y="46" text-anchor="middle" class="d-t s m">u(kT)</text><text x="432" y="46" text-anchor="middle" class="d-t s m">u(t)</text><text x="160" y="222" text-anchor="middle" class="d-t s a">digital (numbers at t = kT)</text><line x1="112" y1="210" x2="420" y2="210" class="d-a" /><text x="500" y="222" text-anchor="middle" class="d-t s r">continuous</text><line x1="444" y1="210" x2="560" y2="210" class="d-r" /></svg><figcaption>Structure of a digital control system. The ADC turns the measured error into numbers at the sampling instants t = kT, the controller computes u(kT), and the DAC (with its hold) gives the plant a continuous signal again.</figcaption></figure>

| Block | Job |
|---|---|
| **ADC** | Converts the physical (measured) signal into digital form |
| **Digital controller** | Implements the control law, e.g. a digital PID |
| **DAC** | Converts the controller output back into an analog signal |
| **Plant** | The physical system being controlled, e.g. a motor |

All the numbers enter and leave the computer at the same fixed **sampling period** $T$. So the reference and the controller signals are sequences $r(kT)$, $e(kT)$, $u(kT)$, while the plant input $u(t)$ and output $y(t)$ are continuous functions of time.

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| **Lower cost:** the control law is software, not analog components | **Limited by the sampling frequency:** changes faster than the sampling can follow are missed |
| **Flexibility:** the controller is changed by reprogramming, not rewiring | **Needs an ADC and a DAC** |
| | **Computational delay:** the time to compute $u(kT)$ can degrade performance |

## Inside the ADC

The ADC performs three processes in turn:

1. **Sampling:** it reads the signal at the instants $t = kT$.
2. **Quantisation:** it rounds each sample to the nearest of a finite set of levels.
3. **Encoding:** it writes each level as a binary word.

The next chapter treats each of them.

## The discrete-time system

The digital controller is a **discrete-time system**: its signals can change value only at the sampling instants. In this module the systems are **linear time-invariant (LTI)**:

- **Linear:** superposition and homogeneity hold. If $e_1 \to x_1$ and $e_2 \to x_2$, then $a_1e_1 + a_2e_2 \to a_1x_1 + a_2x_2$.
- **Time-invariant:** the parameters do not change with time, so a delayed input gives the same output, delayed.

An LTI discrete-time system is described by a **difference equation**, the discrete counterpart of a differential equation:

$$\small \begin{aligned}x(k) &= b_ne(k) + b_{n-1}e(k - 1) \\ &\quad + \cdots + b_0e(k - n) \\ &\quad - a_{n-1}x(k - 1) - \cdots - a_0x(k - n)\end{aligned}$$

Here $e(k)$ is the input sequence and $x(k)$ the output sequence. $x(k)$ is short for $x(kT)$; the $T$ is usually dropped. The output now depends on the present and past inputs and on past outputs. The z-transform (Chapter 3) turns such an equation into an algebraic transfer function, just as the Laplace transform does for differential equations.

*Example:* $y(k) = 0.5y(k - 1) + x(k)$ is a first-order system. Each output is half the previous one plus the new input.
