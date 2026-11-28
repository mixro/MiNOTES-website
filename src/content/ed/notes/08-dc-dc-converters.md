# DC–DC converters (choppers)

*Class notes · EEU 08102 Electric Drives*

A **DC–DC converter** converts power **directly from DC to DC**. It is also called a **chopper**, and it is the converter behind chopper-fed DC drives, battery vehicles and the DC link of many AC drives.

## Where choppers fit

By function, power converters fall into five types:

| Converter | Conversion |
|---|---|
| Rectifier (DC power supply) | AC → DC |
| AC voltage regulator | AC → AC (same frequency) |
| **Chopper** | **DC → DC**: buck, boost, buck-boost, Ćuk |
| Inverter | DC → AC |
| Cyclo-converter | AC → AC (frequency change) |

**Duty cycle.** If the switching period is $T = 1/f$ and the switch is closed for $\delta T$, then $\delta$ is the **duty cycle** and the switch is open for $(1-\delta)T$.

**Two operating modes**

- **Continuous conduction mode (CCM):** the inductance is large enough that the inductor current **never falls to zero**.
- **Discontinuous conduction mode (DCM):** the inductor current is **zero for part of each cycle**.

## 1. Buck converter

The buck converter gives an output voltage **lower than the input**.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Buck converter: switch S, freewheeling diode D, inductor L, capacitor C and load R."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="70" y1="60" x2="70" y2="118.0" class="d-ax" /><line x1="70" y1="162.0" x2="70" y2="220" class="d-ax" /><circle cx="70" cy="140.0" r="22" class="d-box"/><text x="70" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="70" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="38" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="70" y1="60" x2="110" y2="60" class="d-ax" /><line x1="110" y1="60" x2="122" y2="60" class="d-ax" /><circle cx="122" cy="60" r="3.5" class="d-dot"/><line x1="122" y1="60" x2="168" y2="44" class="d-ax w" /><circle cx="168" cy="60" r="3.5" class="d-dot"/><line x1="168" y1="60" x2="180" y2="60" class="d-ax" /><text x="145.0" y="36" text-anchor="middle" class="d-t s">S</text><line x1="180" y1="60" x2="220" y2="60" class="d-ax" /><circle cx="220" cy="60" r="3.5" class="d-dot"/><line x1="220" y1="60" x2="220" y2="130.0" class="d-ax" /><line x1="220" y1="150.0" x2="220" y2="220" class="d-ax" /><path d="M208 150.0 L232 150.0 L220 130.0 Z" class="d-box b"/><line x1="208" y1="130.0" x2="232" y2="130.0" class="d-ax w" /><text x="200" y="145.0" text-anchor="end" class="d-t s">D</text><path d="M220 60 h10 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 h10" class="d-a" /><text x="275.0" y="38.75" text-anchor="middle" class="d-t s">L</text><line x1="330" y1="60" x2="400" y2="60" class="d-ax" /><circle cx="400" cy="60" r="3.5" class="d-dot"/><line x1="400" y1="60" x2="400" y2="134.0" class="d-ax" /><line x1="400" y1="146.0" x2="400" y2="220" class="d-ax" /><line x1="384" y1="134.0" x2="416" y2="134.0" class="d-ax w" /><line x1="384" y1="146.0" x2="416" y2="146.0" class="d-ax w" /><text x="422" y="145.0" text-anchor="start" class="d-t s">C</text><line x1="400" y1="60" x2="500" y2="60" class="d-ax" /><line x1="500" y1="60" x2="500" y2="115.0" class="d-ax" /><line x1="500" y1="165.0" x2="500" y2="220" class="d-ax" /><polyline class="d-ax" points="500.0,115.0 508.0,119.2 492.0,127.5 508.0,135.8 492.0,144.2 508.0,152.5 492.0,160.8 500.0,165.0"/><text x="516" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="70" y1="220" x2="500" y2="220" class="d-ax" /><circle cx="220" cy="220" r="3.5" class="d-dot"/><circle cx="400" cy="220" r="3.5" class="d-dot"/><text x="540" y="85" text-anchor="middle" class="d-t s">+</text><text x="540" y="205" text-anchor="middle" class="d-t s">−</text><text x="548" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text><line x1="240" y1="90" x2="300" y2="90" class="d-ax"  marker-end="url(#ah)"/><text x="270" y="108" text-anchor="middle" class="d-t s m">i<tspan dy="4" font-size="10">L</tspan></text></svg><figcaption>Buck (step-down) converter. When S is closed the source drives current through L to the load; when S opens, the diode D carries the inductor current.</figcaption></figure>

The inductor and capacitor **smooth** the output, so the voltage has only a small ripple. Assume $C$ is large enough that the capacitor voltage $V_c$ (the output voltage) is constant.

### Derivation (continuous conduction)

**Switch closed** ($0 < t < \delta T$): the source drives the inductor,

$$E = L\frac{di}{dt} + V_c \quad\Rightarrow\quad \frac{di}{dt} = \frac{E - V_c}{L}, \qquad i(t) = \frac{E - V_c}{L}\,t + I_{min}$$

The current rises from $I_{min}$ to $I_{max}$ with a constant slope. At $t = \delta T$:

$$I_{max} - I_{min} = \frac{E - V_c}{L}\,\delta T \tag{1}$$

**Switch open** (for $(1-\delta)T$): the diode freewheels,

$$0 = L\frac{di}{dt} + V_c \quad\Rightarrow\quad \frac{di}{dt} = -\frac{V_c}{L}, \qquad i(t) = -\frac{V_c}{L}\,t + I_{max}$$

$$I_{min} - I_{max} = -\frac{V_c}{L}(1-\delta)T$$

<figure class="fig"><svg viewBox="0 0 600 270" role="img" aria-label="Inductor current in continuous conduction: rises from Imin to Imax during δT, falls back during (1−δ)T."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="210" x2="570" y2="210" class="d-ax"  marker-end="url(#ah)"/><line x1="60" y1="210" x2="60" y2="30" class="d-ax"  marker-end="url(#ah)"/><text x="52" y="40" text-anchor="end" class="d-t b">i<tspan dy="4" font-size="10">L</tspan></text><text x="570" y="230" text-anchor="end" class="d-t s">t</text><polyline class="d-a w" points="60,140 280,60 540,140"/><line x1="60" y1="60" x2="280" y2="60" class="d-mut" /><line x1="60" y1="140" x2="540" y2="140" class="d-mut" /><line x1="280" y1="60" x2="280" y2="210" class="d-mut" /><line x1="540" y1="140" x2="540" y2="210" class="d-mut" /><text x="52" y="65" text-anchor="end" class="d-t s">I<tspan dy="4" font-size="10">max</tspan></text><text x="52" y="145" text-anchor="end" class="d-t s">I<tspan dy="4" font-size="10">min</tspan></text><line x1="64" y1="232" x2="276" y2="232" class="d-ax"  marker-start="url(#ah)" marker-end="url(#ah)"/><text x="170.0" y="250" text-anchor="middle" class="d-t s">δT  (S closed)</text><line x1="284" y1="232" x2="536" y2="232" class="d-ax"  marker-start="url(#ah)" marker-end="url(#ah)"/><text x="410.0" y="250" text-anchor="middle" class="d-t s">(1 − δ)T  (S open)</text><text x="200" y="128" text-anchor="middle" class="d-t s a">slope (E − V<tspan dy="4" font-size="10">c</tspan><tspan dy="-4">)/L</tspan></text><text x="440" y="90" text-anchor="middle" class="d-t s r">slope −V<tspan dy="4" font-size="10">c</tspan><tspan dy="-4">/L</tspan></text></svg><figcaption>Inductor current in continuous conduction. It rises with slope (E − V<sub>c</sub>)/L while the switch is closed and falls with slope −V<sub>c</sub>/L while it is open.</figcaption></figure>

**Output voltage.** The rise and the fall must be equal in steady state:

$$\frac{E - V_c}{L}\,\delta T = \frac{V_c}{L}(1-\delta)T \quad\Rightarrow\quad (E - V_c)\,\delta = V_c(1-\delta)$$

$$\boxed{V_c = \delta E} \tag{2}$$

> The chopper's output depends **only on the fraction of time the switch is closed**, and it is always **less than the input voltage**.

### Circuit currents

The inductor current splits into the capacitor and the load, $i_L = i_c + i_o$. The **average capacitor current is zero**, so

$$I_{L,av} = \frac{I_{max} + I_{min}}{2} = I_o = \frac{V_c}{R} \quad\Rightarrow\quad I_{max} + I_{min} = \frac{2V_c}{R} \tag{3}$$

Solving (1), (2) and (3) together:

$$I_{max} = \delta E\left[\frac{1}{R} + \frac{(1-\delta)T}{2L}\right], \qquad I_{min} = \delta E\left[\frac{1}{R} - \frac{(1-\delta)T}{2L}\right] \tag{4}$$

**Critical inductance.** Setting $I_{min} = 0$ gives the smallest inductance that keeps conduction continuous:

$$L_{crit} = \frac{(1-\delta)\,TR}{2} = \frac{(1-\delta)R}{2f}$$

**Output voltage ripple** (CCM):

$$\frac{\Delta V_o}{V_o} = \frac{1 - \delta}{8LCf^2}$$

**Power.** The average source current is $I_{s,av} = \delta\,\dfrac{I_{max} + I_{min}}{2}$, so $P = E\,I_{s,av}$. With no ripple on $V_c$ this equals $V_c^2/R$.

### Discontinuous conduction (results)

If $L < L_{crit}$, define $k = \dfrac{\delta^2 RT}{4L}$. Then

$$\frac{V_c}{E} = k\left[-1 + \sqrt{1 + \frac{2}{k}}\right], \qquad \delta_2 = \frac{\delta}{2}\left[-1 + \sqrt{1 + \frac{2}{k}}\right], \qquad \frac{I_{max}R}{E} = \frac{4k}{\delta}\left[1 + k - k\sqrt{1 + \frac{2}{k}}\right]$$

where $\delta_2 T$ is the time the diode conducts. In DCM the output depends on the load, not just on $\delta$.

### Worked examples

> **Example 1.** A buck chopper switching at **10 kHz** supplies **100 W at 12 V** to a load from a **20 V** source. Find (a) the inductance for continuous inductor current and (b) $I_{max} - I_{min}$.
>
> $I_o = 100/12 = 8.33$ A, $R = 12/8.33 = 1.44\ \Omega$, $\delta = 12/20 = 0.6$, $T = 1/10\,000 = 0.0001$ s.
>
> (a) $L = \dfrac{TR}{2}(1-\delta) = \dfrac{0.0001 \times 1.44}{2}(1 - 0.6) = 2.88 \times 10^{-5}$ H $= 28.8\ \mu$H
>
> (b) $I_{max} - I_{min} = \dfrac{E - V_c}{L}\,\delta T = \dfrac{20 - 12}{2.88\times10^{-5}}(0.6)(0.0001) = 16.67$ A

> **Example 2** (Hart, *Power Electronics*, Ex. 4.2). $V_{in} = 20$ V, $V_o = 15$ V, $I_o = 5$ A, $f = 50$ kHz. Find (a) $D$, (b) $L_{crit}$, (c) $I_{max}$ and $I_{min}$ for $L = 100L_{crit}$, (d) average input and output power, (e) the output ripple for $C = 0.47\ \mu$F.
>
> (a) $D = V_o/V_{in} = 15/20 = 0.75$
>
> (b) $R = 15/5 = 3\ \Omega$, $T = 1/50\,000 = 20\ \mu$s, $L_{crit} = \dfrac{1-0.75}{2}(20\ \mu\text{s})(3) = 7.5\ \mu$H
>
> (c) With $L = 750\ \mu$H: $I_{L,min} = (0.75)(20)\left[\dfrac13 - \dfrac{(0.25)(2\times10^{-5})}{2(750\times10^{-6})}\right] = 4.95$ A and $I_{L,max} = 5.05$ A
>
> (d) $P_{in} = P_o = V_oI_o = 15 \times 5 = 75$ W
>
> (e) $\dfrac{\Delta V_o}{V_o} = \dfrac{1 - 0.75}{8(750\ \mu\text{H})(0.47\ \mu\text{F})(50\times10^3)^2} = 0.035 = 3.5\%$

> **Example 3** (Hart, Ex. 4.3). Design a buck converter in CCM with $\Delta V_o/V_o = 0.5\%$, $V_{in} = 20$ V, $P_o = 12$ W, $f = 30$ kHz and $D = 0.4$.
>
> $V_o = DV_{in} = 8$ V, $I_o = 12/8 = 1.5$ A, $R = 8/1.5 = 5.33\ \Omega$
>
> $L_{crit} = \dfrac{1 - 0.4}{2}\cdot\dfrac{1}{30\times10^3}\cdot 5.33 = 53.3\ \mu$H. Choose $L = 600\ \mu$H.
>
> $I_{L,max} = (0.4)(20)\left[\dfrac{1}{5.33} + \dfrac{0.6}{2(600\ \mu\text{H})(30\times10^3)}\right] = 1.63$ A, $\quad I_{L,min} = 1.37$ A
>
> $C = \dfrac{1 - D}{8Lf^2(\Delta V_o/V_o)} = \dfrac{0.6}{8(600\ \mu\text{H})(30\times10^3)^2(0.005)} = 27.78\ \mu$F

> **Example 4.** A buck converter supplies **12 V** to a **6 Ω** load from a **30 V** source at **5 kHz**, with continuous inductor current. Find (a) $\delta$, (b) the minimum $L$, (c) $I_{min}$ and $I_{max}$ if $L = 1.5$ mH, (d) the power to the load.
>
> (a) $\delta = 12/30 = 0.4$
>
> (b) $L = \dfrac{TR}{2}(1-\delta) = \dfrac{(1/5000)(6)(0.6)}{2} = 3.6\times10^{-4}$ H $= 0.36$ mH
>
> (c) $I_{min} = (0.4)(30)\left[\dfrac16 - \dfrac{0.6 \times 2\times10^{-4}}{2(1.5\times10^{-3})}\right] = 1.52$ A, $\quad I_{max} = 2.48$ A
>
> (d) Average inductor (load) current $= (2.48 + 1.52)/2 = 2.0$ A; average source current $= \delta \times 2.0 = 0.8$ A, so $P = 30 \times 0.8 = 24$ W. Check: $V_c^2/R = 12^2/6 = 24$ W.

> **Example 5.** A buck chopper must give **15 V to 25 V** into loads of **4 Ω to 10 Ω** in any combination, from $E = 40$ V at $f = 8$ kHz. Find (a) the range of $\delta$ and (b) the $L$ that keeps the current continuous under every condition.
>
> (a) $15 = 40\delta \Rightarrow \delta = 0.375$; $25 = 40\delta \Rightarrow \delta = 0.625$. So $0.375 \le \delta \le 0.625$.
>
> (b) $L_c = (1-\delta)R/2f$ is largest at the **smallest** $\delta$ and **largest** $R$: $L_c = \dfrac{(1 - 0.375)(10)}{2 \times 8000} = 391\ \mu$H

## 2. Boost converter

The boost converter gives an output voltage **higher than the input**.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Boost converter: inductor L in series with the source, switch S to ground, diode D to the output capacitor and load."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="60" x2="60" y2="118.0" class="d-ax" /><line x1="60" y1="162.0" x2="60" y2="220" class="d-ax" /><circle cx="60" cy="140.0" r="22" class="d-box"/><text x="60" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="60" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="28" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="60" y1="60" x2="90" y2="60" class="d-ax" /><path d="M90 60 h10 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 h10" class="d-a" /><text x="145.0" y="38.75" text-anchor="middle" class="d-t s">L</text><line x1="200" y1="60" x2="230" y2="60" class="d-ax" /><circle cx="230" cy="60" r="3.5" class="d-dot"/><line x1="230" y1="60" x2="230" y2="124.0" class="d-ax" /><circle cx="230" cy="124.0" r="3.5" class="d-dot"/><line x1="230" y1="156.0" x2="248" y2="128.0" class="d-ax w" /><circle cx="230" cy="156.0" r="3.5" class="d-dot"/><line x1="230" y1="156.0" x2="230" y2="220" class="d-ax" /><text x="216" y="145.0" text-anchor="end" class="d-t s">S</text><line x1="230" y1="60" x2="270.0" y2="60" class="d-ax" /><line x1="290.0" y1="60" x2="330" y2="60" class="d-ax" /><path d="M270.0 48 L270.0 72 L290.0 60 Z" class="d-box b"/><line x1="290.0" y1="48" x2="290.0" y2="72" class="d-ax w" /><text x="280.0" y="42" text-anchor="middle" class="d-t s">D</text><line x1="330" y1="60" x2="400" y2="60" class="d-ax" /><circle cx="400" cy="60" r="3.5" class="d-dot"/><line x1="400" y1="60" x2="400" y2="134.0" class="d-ax" /><line x1="400" y1="146.0" x2="400" y2="220" class="d-ax" /><line x1="384" y1="134.0" x2="416" y2="134.0" class="d-ax w" /><line x1="384" y1="146.0" x2="416" y2="146.0" class="d-ax w" /><text x="422" y="145.0" text-anchor="start" class="d-t s">C</text><line x1="400" y1="60" x2="500" y2="60" class="d-ax" /><line x1="500" y1="60" x2="500" y2="115.0" class="d-ax" /><line x1="500" y1="165.0" x2="500" y2="220" class="d-ax" /><polyline class="d-ax" points="500.0,115.0 508.0,119.2 492.0,127.5 508.0,135.8 492.0,144.2 508.0,152.5 492.0,160.8 500.0,165.0"/><text x="516" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="60" y1="220" x2="500" y2="220" class="d-ax" /><circle cx="230" cy="220" r="3.5" class="d-dot"/><circle cx="400" cy="220" r="3.5" class="d-dot"/><text x="540" y="85" text-anchor="middle" class="d-t s">+</text><text x="540" y="205" text-anchor="middle" class="d-t s">−</text><text x="548" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text></svg><figcaption>Boost (step-up) converter. Closing S stores energy in L; when S opens, L and the source together push current through D, so V<sub>o</sub> = E/(1 − δ) is higher than E.</figcaption></figure>

| Quantity | Expression |
|---|---|
| Output voltage | $V_o = \dfrac{E}{1-\delta}$, so $\delta = 1 - \dfrac{V_{in}}{V_o}$ |
| Average inductor current | $I_L = \dfrac{I_o}{1-\delta}$ |
| Inductor current ripple | $\Delta I_L = \dfrac{E\,\delta T}{L}$ |
| Peak and minimum current | $I_{L,max} = I_L + \dfrac{\Delta I_L}{2}$, $\quad I_{L,min} = I_L - \dfrac{\Delta I_L}{2}$ |
| Average diode current | $I_D = I_o$ |
| RMS capacitor current | $I_C \approx I_o\sqrt{\dfrac{\delta}{1-\delta}}$ |
| Critical inductance | $L_c = \dfrac{RT}{2}\,\delta(1-\delta)^2$ |
| Output ripple | $\dfrac{\Delta V_o}{V_o} = \dfrac{\delta}{RCf}$ |

> **Example 6.** A boost chopper supplies **150 V** to a **25 Ω** load from a **40 V** source, with $L = 200\ \mu$H and $T = 200\ \mu$s.
>
> (a) $\delta = 1 - 40/150 = 0.733$
>
> (b) $I_o = 150/25 = 6$ A, $I_L = \dfrac{6}{1 - 0.733} = 22.5$ A, $\Delta I_L = \dfrac{40 \times 0.733 \times 200\times10^{-6}}{200\times10^{-6}} = 29.32$ A, so $I_{L,min} = 22.5 - 14.66 = 7.83$ A
>
> (c) $I_{L,max} = 22.5 + 14.66 = 37.17$ A
>
> (d) $I_D = I_o = 6$ A
>
> (e) The inductor ripple is large here, so include it: $I_{C,rms} = \sqrt{\delta I_o^2 + (1 - \delta)\left[(I_L - I_o)^2 + \dfrac{\Delta I_L^2}{12}\right]} = 10.87$ A. The small-ripple shortcut $6\sqrt{0.733/0.267} = 9.94$ A underestimates it.
>
> (f) $L_c = \dfrac{25 \times 0.0002}{2}(0.733)(1 - 0.733)^2 = 1.30\times10^{-4}$ H $= 130\ \mu$H

> **Example 7** (Hart, p. 203). Design a boost converter with $P_o = 27$ W, $V_o = 40$ V, $V_{in} = 28$ V, $\Delta V_o/V_o = 2\%$ and $f_s = 35$ kHz.
>
> $D = 1 - 28/40 = 0.3$, $R = V_o^2/P = 40^2/27 = 59.25\ \Omega$, $T = 1/35\,000 = 2.857\times10^{-5}$ s
>
> $L_c = \dfrac{(59.25)(2.857\times10^{-5})}{2}(0.3)(0.7)^2 = 1.24\times10^{-4}$ H. Choose $L = 200\ \mu$H $> L_c$ for CCM.
>
> $C = \dfrac{D}{R f(\Delta V_o/V_o)} = \dfrac{0.3}{(59.25)(35\times10^3)(0.02)} = 7.23\ \mu$F

## 3. Buck-boost converter

The buck-boost converter gives an **inverted** output that can be **lower or higher** than the input.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Buck-boost converter: switch S, inductor L to ground, reversed diode D to the output; output polarity is inverted."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="60" x2="60" y2="118.0" class="d-ax" /><line x1="60" y1="162.0" x2="60" y2="220" class="d-ax" /><circle cx="60" cy="140.0" r="22" class="d-box"/><text x="60" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="60" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="28" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="60" y1="60" x2="100" y2="60" class="d-ax" /><line x1="100" y1="60" x2="112" y2="60" class="d-ax" /><circle cx="112" cy="60" r="3.5" class="d-dot"/><line x1="112" y1="60" x2="158" y2="44" class="d-ax w" /><circle cx="158" cy="60" r="3.5" class="d-dot"/><line x1="158" y1="60" x2="170" y2="60" class="d-ax" /><text x="135.0" y="36" text-anchor="middle" class="d-t s">S</text><line x1="170" y1="60" x2="230" y2="60" class="d-ax" /><circle cx="230" cy="60" r="3.5" class="d-dot"/><path d="M230 60 v10 a17.5 17.5 0 0 1 0 35.0 a17.5 17.5 0 0 1 0 35.0 a17.5 17.5 0 0 1 0 35.0 a17.5 17.5 0 0 1 0 35.0 v10" class="d-a"/><text x="261.5" y="145.0" text-anchor="start" class="d-t s">L</text><line x1="330" y1="60" x2="270.0" y2="60" class="d-ax" /><line x1="290.0" y1="60" x2="230" y2="60" class="d-ax" /><path d="M290.0 48 L290.0 72 L270.0 60 Z" class="d-box b"/><line x1="270.0" y1="48" x2="270.0" y2="72" class="d-ax w" /><text x="280.0" y="42" text-anchor="middle" class="d-t s">D</text><line x1="330" y1="60" x2="400" y2="60" class="d-ax" /><circle cx="400" cy="60" r="3.5" class="d-dot"/><line x1="400" y1="60" x2="400" y2="134.0" class="d-ax" /><line x1="400" y1="146.0" x2="400" y2="220" class="d-ax" /><line x1="384" y1="134.0" x2="416" y2="134.0" class="d-ax w" /><line x1="384" y1="146.0" x2="416" y2="146.0" class="d-ax w" /><text x="422" y="145.0" text-anchor="start" class="d-t s">C</text><line x1="400" y1="60" x2="500" y2="60" class="d-ax" /><line x1="500" y1="60" x2="500" y2="115.0" class="d-ax" /><line x1="500" y1="165.0" x2="500" y2="220" class="d-ax" /><polyline class="d-ax" points="500.0,115.0 508.0,119.2 492.0,127.5 508.0,135.8 492.0,144.2 508.0,152.5 492.0,160.8 500.0,165.0"/><text x="516" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="60" y1="220" x2="500" y2="220" class="d-ax" /><circle cx="230" cy="220" r="3.5" class="d-dot"/><circle cx="400" cy="220" r="3.5" class="d-dot"/><text x="540" y="85" text-anchor="middle" class="d-t s">−</text><text x="540" y="205" text-anchor="middle" class="d-t s">+</text><text x="548" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text></svg><figcaption>Buck-boost converter. The output is <b>inverted</b> (note the polarity) and can be lower or higher than E: |V<sub>o</sub>| = δE/(1 − δ).</figcaption></figure>

| Quantity | Expression |
|---|---|
| Output voltage | $\lvert V_o\rvert = \dfrac{\delta E}{1-\delta}$, so $\delta = \dfrac{V_o}{V_o + V_{in}}$ |
| Average inductor current | $I_L = \dfrac{I_o}{1-\delta}$ |
| Inductor current ripple | $\Delta I_L = \dfrac{E\,\delta T}{L}$ |
| Average switch current (flows during ON time) | $I_S = \delta I_L$ |
| Average diode current (flows during OFF time) | $I_D = (1-\delta)I_L$ |
| RMS capacitor current | $I_{C,rms} = \sqrt{\delta I_o^2 + (1-\delta)\left[(I_L - I_o)^2 + \dfrac{\Delta I_L^2}{12}\right]}$ |

> **Example 8.** A buck-boost chopper supplies **100 W at 50 V** to a resistive load from a **35 V** source, with $T = 200\ \mu$s and $L = 700\ \mu$H.
>
> (a) $\delta = \dfrac{50}{50 + 35} = 0.588$
>
> (b) $I_o = 100/50 = 2$ A, $I_L = \dfrac{2}{1 - 0.588} = 4.85$ A, $\Delta I_L = \dfrac{35(0.588)(200\times10^{-6})}{700\times10^{-6}} = 5.88$ A, so $I_{L,min} = 4.85 - 2.94 = 1.92$ A and $I_{L,max} = 7.8$ A
>
> (c) $I_S = 0.588 \times 4.85 = 2.85$ A
>
> (d) $I_D = (1 - 0.588)(4.85) = 1.99 \approx 2$ A
>
> (e) $I_{C,rms} = \sqrt{0.588(2^2) + 0.412\left[(4.85 - 2)^2 + \dfrac{5.88^2}{12}\right]} = 2.63$ A

> **Test question.** A buck-boost converter with input **22 V to 28 V** must give **−24 V at 5 A** to power industrial PLC systems, at 90% efficiency. The inductor ripple ratio is 35% and the output ripple 100 mV, with $f = 20$ kHz. Find the inductance.
>
> Design for the **worst case**, the lowest input voltage: $D = \dfrac{24}{24 + 22} = 0.5217$
>
> $I_L = \dfrac{I_o}{1 - D} = \dfrac{5}{1 - 0.5217} = 10.46$ A, $\quad \Delta I_L = 0.35 \times 10.46 = 3.661$ A
>
> $L = \dfrac{V_{in}D}{\Delta I_L\,f} = \dfrac{22 \times 0.5217}{3.661 \times 20\,000} = 156.86\ \mu$H

## Inverter question

> A single-phase **half-bridge inverter** has a resistive load $R = 2.4\ \Omega$ and DC input $V = 48$ V. Find the rms output voltage at the fundamental frequency, $V_1$.
>
> The class notes leave this one for revision. **Answer (added):** the output is a square wave of $\pm V/2$, so $V_1 = \dfrac{4(V/2)}{\pi\sqrt2} = 0.45V = 0.45 \times 48 = 21.6$ V.

> **Corrections to the class notes.** The discontinuous-mode expressions for $\delta_2$ and $I_{max}$ use $+2/k$ inside the root. Example 4's source current is $\delta(I_{max}+I_{min})/2$. In Example 6 the formula written for the capacitor current is the small-ripple one (giving 9.94 A); the answer 10.87 A is right because it includes the large inductor ripple.
