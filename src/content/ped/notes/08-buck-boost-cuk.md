# Buck-boost, Ćuk and full-bridge converters

*Lecture 2 · EEU 08104 Power Electronics Design*

## Buck-boost converter

The buck-boost converter takes an input DC voltage and produces a regulated output that can be **lower** (buck) or **higher** (boost) than the input. The output polarity is **inverted**.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Buck-boost converter: switch S, inductor L to ground, reversed diode D to the output; output polarity is inverted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="60" x2="60" y2="118.0" class="d-ax" /><line x1="60" y1="162.0" x2="60" y2="220" class="d-ax" /><circle cx="60" cy="140.0" r="22" class="d-box"/><text x="60" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="60" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="28" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="60" y1="60" x2="100" y2="60" class="d-ax" /><line x1="100" y1="60" x2="112" y2="60" class="d-ax" /><circle cx="112" cy="60" r="3.5" class="d-dot"/><line x1="112" y1="60" x2="158" y2="44" class="d-ax w" /><circle cx="158" cy="60" r="3.5" class="d-dot"/><line x1="158" y1="60" x2="170" y2="60" class="d-ax" /><text x="135.0" y="36" text-anchor="middle" class="d-t s">S</text><line x1="170" y1="60" x2="230" y2="60" class="d-ax" /><circle cx="230" cy="60" r="3.5" class="d-dot"/><path d="M230 60 v10 a17.5 17.5 0 0 1 0 35.0 a17.5 17.5 0 0 1 0 35.0 a17.5 17.5 0 0 1 0 35.0 a17.5 17.5 0 0 1 0 35.0 v10" class="d-a"/><text x="261.5" y="145.0" text-anchor="start" class="d-t s">L</text><line x1="330" y1="60" x2="270.0" y2="60" class="d-ax" /><line x1="290.0" y1="60" x2="230" y2="60" class="d-ax" /><path d="M290.0 48 L290.0 72 L270.0 60 Z" class="d-box b"/><line x1="270.0" y1="48" x2="270.0" y2="72" class="d-ax w" /><text x="280.0" y="42" text-anchor="middle" class="d-t s">D</text><line x1="330" y1="60" x2="400" y2="60" class="d-ax" /><circle cx="400" cy="60" r="3.5" class="d-dot"/><line x1="400" y1="60" x2="400" y2="134.0" class="d-ax" /><line x1="400" y1="146.0" x2="400" y2="220" class="d-ax" /><line x1="384" y1="134.0" x2="416" y2="134.0" class="d-ax w" /><line x1="384" y1="146.0" x2="416" y2="146.0" class="d-ax w" /><text x="422" y="145.0" text-anchor="start" class="d-t s">C</text><line x1="400" y1="60" x2="500" y2="60" class="d-ax" /><line x1="500" y1="60" x2="500" y2="115.0" class="d-ax" /><line x1="500" y1="165.0" x2="500" y2="220" class="d-ax" /><polyline class="d-ax" points="500.0,115.0 508.0,119.2 492.0,127.5 508.0,135.8 492.0,144.2 508.0,152.5 492.0,160.8 500.0,165.0"/><text x="516" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="60" y1="220" x2="500" y2="220" class="d-ax" /><circle cx="230" cy="220" r="3.5" class="d-dot"/><circle cx="400" cy="220" r="3.5" class="d-dot"/><text x="540" y="85" text-anchor="middle" class="d-t s">−</text><text x="540" y="205" text-anchor="middle" class="d-t s">+</text><text x="548" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text></svg><figcaption>Buck-boost converter. The output is <b>inverted</b> (note the polarity) and can be lower or higher than E: |V<sub>o</sub>| = δE/(1 − δ).</figcaption></figure>

**Switch on** ($0 < t < \delta T$): the source is across the inductor, $E = v_L = L\dfrac{di}{dt}$:

$$I_{max} - I_{min} = \frac{E}{L}\delta T \quad (1)$$

The diode is off and the capacitor feeds the load.

**Switch off:** the inductor discharges into the output through the diode, $v_L = -V_c$:

$$I_{min} - I_{max} = -\frac{V_c}{L}(1 - \delta)T \quad (2)$$

From (1) and (2), $E\delta = V_c(1 - \delta)$:

$$\boxed{V_c = \frac{\delta}{1 - \delta}E}, \qquad \delta = \frac{V_o}{V_{in} + V_o}$$

- $\delta < 0.5$: the output is **lower** than the input (buck).
- $\delta > 0.5$: the output is **higher** (boost).

**Currents.** The source only supplies current while the switch is on, so the input power is $P_{in} = \delta I_LE$ where $I_L = (I_{max} + I_{min})/2$. Setting it equal to $V_c^2/R$:

$$I_{max} + I_{min} = \frac{2\delta E}{R(1 - \delta)^2}$$

$$I_{max} = \frac{\delta E}{R(1 - \delta)^2} + \frac{E\delta T}{2L}, \qquad I_{min} = \frac{\delta E}{R(1 - \delta)^2} - \frac{E\delta T}{2L}$$

Equivalently, $I_L = \dfrac{I_o}{1 - \delta}$, $\Delta I_L = \dfrac{V_{in}\delta T}{L}$, and $I_{L,max/min} = I_L \pm \Delta I_L/2$.

**Critical inductance:** $L_c = \dfrac{RT}{2}(1 - \delta)^2$.

**Output ripple:** $\dfrac{\Delta V_o}{V_o} = \dfrac{\delta}{RCf}$ (the capacitor alone feeds the load while the switch is on, as in the boost converter).

**Switch, diode and capacitor currents:** switch average $I_s = \delta I_L$; diode average $I_D = (1 - \delta)I_L = I_o$;

$$I_{C,rms} = \sqrt{\delta I_o^2 + (1 - \delta)\left[(I_L - I_o)^2 + \frac{\Delta I_L^2}{12}\right]}$$

**Discontinuous conduction** (with $K = TR\delta^2/4L$):

$$\frac{V_c}{E} = \sqrt{2K} = \delta\sqrt{\frac{RT}{2L}}, \qquad \delta_2 = \delta\left(1 + \frac{1}{\sqrt{2K}}\right)$$

### Worked example: buck-boost chopper

*A buck-boost chopper supplies 100 W at 50 V to a resistive load from a 35 V source, with T = 200 µs and L = 700 µH. Find (a) δ, (b) $I_{min}$ and $I_{max}$, (c) the average switch current, (d) the average diode current, (e) the rms capacitor current, (f) the minimum inductance for continuous current.*

**(a)** $\delta = \dfrac{50}{50 + 35} = 0.588$.

**(b)** $I_o = 100/50 = 2$ A; $I_L = \dfrac{2}{1 - 0.588} = 4.86$ A; $\Delta I_L = \dfrac{35 \times 0.588 \times 200\ \mu s}{700\ \mu H} = 5.88$ A. So $I_{min} = 4.86 - 2.94 = 1.92$ A and $I_{max} = 4.86 + 2.94 = 7.80$ A.

**(c)** $I_s = 0.588 \times 4.86 = 2.86$ A (check: $100\ \text{W}/35\ \text{V} = 2.86$ A).

**(d)** $I_D = (1 - 0.588) \times 4.86 = 2.0$ A $= I_o$.

**(e)** $I_{C,rms} = \sqrt{0.588(2^2) + 0.412\left[(4.86 - 2)^2 + \dfrac{5.88^2}{12}\right]} = 2.63$ A.

**(f)** $R = 50^2/100 = 25\ \Omega$; $L_c = \dfrac{25 \times 200\ \mu s}{2}(0.412)^2 = 424\ \mu$H. The 700 µH used is above this.

> **Corrections to the lecture slides and class notes.** The slides spell the converter "bust-boost" in one heading. In the class notes' derivation the power balance is written $(I_{max} + I_{min})E/2$, which treats the inductor current as the source current; for the buck-boost the source only conducts for $\delta T$, so the sum is $2\delta E/R(1 - \delta)^2$, not $2\delta^2E/R(1 - \delta)^2$, and the boxed $I_{max}$ should read $\dfrac{\delta E}{R(1 - \delta)^2} + \dfrac{E\delta T}{2L}$. The worked example uses $I_L = I_o/(1 - \delta)$ and is right.

## Ćuk converter

The Ćuk converter steps a voltage up or down, like the buck-boost converter, and also inverts it, but with **very low ripple** at both input and output, because both have an inductor in series.

<figure class="fig"><svg viewBox="0 0 610 250" role="img" aria-label="Cuk converter: L1, switch S, series capacitor C1, diode D, L2, C2 and load; output inverted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="50" y1="60" x2="50" y2="118.0" class="d-ax" /><line x1="50" y1="162.0" x2="50" y2="220" class="d-ax" /><circle cx="50" cy="140.0" r="22" class="d-box"/><text x="50" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="50" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="18" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="50" y1="60" x2="70" y2="60" class="d-ax" /><path d="M70 60 h10 a10.0 10.0 0 0 1 20.0 0 a10.0 10.0 0 0 1 20.0 0 a10.0 10.0 0 0 1 20.0 0 a10.0 10.0 0 0 1 20.0 0 h10" class="d-a" /><text x="120.0" y="40.0" text-anchor="middle" class="d-t s">L<tspan dy="4" font-size="9">1</tspan></text><line x1="170" y1="60" x2="200" y2="60" class="d-ax" /><circle cx="200" cy="60" r="3.5" class="d-dot"/><line x1="200" y1="60" x2="200" y2="124.0" class="d-ax" /><circle cx="200" cy="124.0" r="3.5" class="d-dot"/><line x1="200" y1="156.0" x2="218" y2="128.0" class="d-ax w" /><circle cx="200" cy="156.0" r="3.5" class="d-dot"/><line x1="200" y1="156.0" x2="200" y2="220" class="d-ax" /><text x="186" y="145.0" text-anchor="end" class="d-t s">S</text><line x1="200" y1="60" x2="230" y2="60" class="d-ax" /><line x1="230" y1="60" x2="250" y2="60" class="d-ax" /><line x1="250" y1="44" x2="250" y2="76" class="d-ax w" /><line x1="262" y1="44" x2="262" y2="76" class="d-ax w" /><text x="256" y="36" text-anchor="middle" class="d-t s">C<tspan dy="4" font-size="9">1</tspan></text><line x1="262" y1="60" x2="300" y2="60" class="d-ax" /><circle cx="300" cy="60" r="3.5" class="d-dot"/><line x1="300" y1="60" x2="300" y2="130.0" class="d-ax" /><line x1="300" y1="150.0" x2="300" y2="220" class="d-ax" /><path d="M288 130.0 L312 130.0 L300 150.0 Z" class="d-box b"/><line x1="288" y1="150.0" x2="312" y2="150.0" class="d-ax w" /><text x="280" y="145.0" text-anchor="end" class="d-t s">D</text><path d="M300 60 h10 a10.0 10.0 0 0 1 20.0 0 a10.0 10.0 0 0 1 20.0 0 a10.0 10.0 0 0 1 20.0 0 a10.0 10.0 0 0 1 20.0 0 h10" class="d-a" /><text x="350.0" y="40.0" text-anchor="middle" class="d-t s">L<tspan dy="4" font-size="9">2</tspan></text><line x1="400" y1="60" x2="440" y2="60" class="d-ax" /><circle cx="440" cy="60" r="3.5" class="d-dot"/><line x1="440" y1="60" x2="440" y2="134.0" class="d-ax" /><line x1="440" y1="146.0" x2="440" y2="220" class="d-ax" /><line x1="424" y1="134.0" x2="456" y2="134.0" class="d-ax w" /><line x1="424" y1="146.0" x2="456" y2="146.0" class="d-ax w" /><text x="462" y="145.0" text-anchor="start" class="d-t s">C<tspan dy="4" font-size="9">2</tspan></text><line x1="440" y1="60" x2="530" y2="60" class="d-ax" /><line x1="530" y1="60" x2="530" y2="115.0" class="d-ax" /><line x1="530" y1="165.0" x2="530" y2="220" class="d-ax" /><polyline class="d-ax" points="530.0,115.0 538.0,119.2 522.0,127.5 538.0,135.8 522.0,144.2 538.0,152.5 522.0,160.8 530.0,165.0"/><text x="546" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="50" y1="220" x2="530" y2="220" class="d-ax" /><circle cx="200" cy="220" r="3.5" class="d-dot"/><circle cx="300" cy="220" r="3.5" class="d-dot"/><circle cx="440" cy="220" r="3.5" class="d-dot"/><text x="565" y="85" text-anchor="middle" class="d-t s">−</text><text x="565" y="205" text-anchor="middle" class="d-t s">+</text><text x="572" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text></svg><figcaption>Ćuk converter. Energy moves from input to output through the series capacitor C<sub>1</sub>. Both the input and the output have an inductor, so both currents are smooth. V<sub>o</sub> = −δE/(1 − δ).</figcaption></figure>

**Switch on.**

- Loop 1: $v_{L1} = E$, so $i_{L1}$ rises: $I_{L1,max} = \dfrac{E}{L_1}\delta T + I_{L1,min}$.
- Loop 2: $C_1$ discharges through the switch into $L_2$ and the load: $v_{L2} = -V_{C1} - V_{C2}$, so $I_{L2,max} = \dfrac{-V_{C1} - V_{C2}}{L_2}\delta T + I_{L2,min}$.

**Switch off.**

- Loop 1: $E = v_{L1} + V_{C1}$, so $I_{L1,min} = \dfrac{E - V_{C1}}{L_1}(1 - \delta)T + I_{L1,max}$; $C_1$ is charged by the input.
- Loop 2: the diode conducts, $v_{L2} + V_{C2} = 0$, so $I_{L2,min} = \dfrac{-V_{C2}}{L_2}(1 - \delta)T + I_{L2,max}$.

Combining the loop-1 equations: $-E\delta = (E - V_{C1})(1 - \delta)$, so

$$V_{C1} = \frac{E}{1 - \delta}$$

Combining the loop-2 equations: $V_{C1}\delta = -V_{C2}$, so $V_{C1} = -V_{C2}/\delta$. Equating the two expressions for $V_{C1}$:

$$\boxed{V_o = V_{C2} = -\frac{\delta E}{1 - \delta}}$$

The voltage ratio is the same as for the buck-boost converter. $C_1$ must be rated for $E + |V_o|$.

**Assignment (from the slides): sketch $v_D$, the switch voltage, $v_{C1}$, $i_{L1}$, $i_{L2}$, $i_{C2}$ and $i_{C1}$.** In outline:

- The switch voltage is 0 while on and $V_{C1}$ while off; the diode voltage is $-V_{C1}$ while the switch is on and 0 while off.
- $i_{L1}$ and $i_{L2}$ are triangles that rise during $\delta T$ and fall during $(1 - \delta)T$.
- $i_{C1} = -i_{L2}$ while the switch is on and $+i_{L1}$ while it is off; its average is zero.
- $i_{C2} = i_{L2} - I_o$, a triangle about zero.

## Full-bridge DC–DC converter

Read about the full-bridge DC–DC converter and compare it with the others:

1. It can operate in **all four quadrants**.
2. So it can also be used as a **DC–AC inverter**.

Its current and voltage are **bidirectional and independent** of each other. The buck, boost, buck-boost and Ćuk converters are **unidirectional**: they operate in one direction only.

## Comparison

| Converter | $V_o/E$ (CCM) | Polarity | Critical inductance | Input current |
|---|---|---|---|---|
| Buck | $\delta$ | Same | $\dfrac{RT}{2}(1 - \delta)$ | Pulsed |
| Boost | $\dfrac{1}{1 - \delta}$ | Same | $\dfrac{RT}{2}\delta(1 - \delta)^2$ | Smooth (inductor) |
| Buck-boost | $\dfrac{\delta}{1 - \delta}$ | Inverted | $\dfrac{RT}{2}(1 - \delta)^2$ | Pulsed |
| Ćuk | $\dfrac{\delta}{1 - \delta}$ | Inverted | (two inductors) | Smooth |
| Full bridge | $2\delta - 1$ (bipolar) | Either | | Four quadrants |
