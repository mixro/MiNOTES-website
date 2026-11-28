# DC–DC converters: the buck converter

*Lecture 2 · EEU 08104 Power Electronics Design*

A **DC–DC converter** converts power directly from DC to DC. It is also called a **chopper**, and can be thought of as the DC equivalent of an AC transformer with a continuously variable turns ratio: it can step a DC voltage down or up. The basic types are the **buck**, **boost**, **buck-boost** and **Ćuk** converters.

## Circuit and modes

A **buck converter** gives an output voltage **lower** than the input.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Buck converter: switch S, freewheeling diode D, inductor L, capacitor C and load R."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="70" y1="60" x2="70" y2="118.0" class="d-ax" /><line x1="70" y1="162.0" x2="70" y2="220" class="d-ax" /><circle cx="70" cy="140.0" r="22" class="d-box"/><text x="70" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="70" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="38" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="70" y1="60" x2="110" y2="60" class="d-ax" /><line x1="110" y1="60" x2="122" y2="60" class="d-ax" /><circle cx="122" cy="60" r="3.5" class="d-dot"/><line x1="122" y1="60" x2="168" y2="44" class="d-ax w" /><circle cx="168" cy="60" r="3.5" class="d-dot"/><line x1="168" y1="60" x2="180" y2="60" class="d-ax" /><text x="145.0" y="36" text-anchor="middle" class="d-t s">S</text><line x1="180" y1="60" x2="220" y2="60" class="d-ax" /><circle cx="220" cy="60" r="3.5" class="d-dot"/><line x1="220" y1="60" x2="220" y2="130.0" class="d-ax" /><line x1="220" y1="150.0" x2="220" y2="220" class="d-ax" /><path d="M208 150.0 L232 150.0 L220 130.0 Z" class="d-box b"/><line x1="208" y1="130.0" x2="232" y2="130.0" class="d-ax w" /><text x="200" y="145.0" text-anchor="end" class="d-t s">D</text><path d="M220 60 h10 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 h10" class="d-a" /><text x="275.0" y="38.75" text-anchor="middle" class="d-t s">L</text><line x1="330" y1="60" x2="400" y2="60" class="d-ax" /><circle cx="400" cy="60" r="3.5" class="d-dot"/><line x1="400" y1="60" x2="400" y2="134.0" class="d-ax" /><line x1="400" y1="146.0" x2="400" y2="220" class="d-ax" /><line x1="384" y1="134.0" x2="416" y2="134.0" class="d-ax w" /><line x1="384" y1="146.0" x2="416" y2="146.0" class="d-ax w" /><text x="422" y="145.0" text-anchor="start" class="d-t s">C</text><line x1="400" y1="60" x2="500" y2="60" class="d-ax" /><line x1="500" y1="60" x2="500" y2="115.0" class="d-ax" /><line x1="500" y1="165.0" x2="500" y2="220" class="d-ax" /><polyline class="d-ax" points="500.0,115.0 508.0,119.2 492.0,127.5 508.0,135.8 492.0,144.2 508.0,152.5 492.0,160.8 500.0,165.0"/><text x="516" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="70" y1="220" x2="500" y2="220" class="d-ax" /><circle cx="220" cy="220" r="3.5" class="d-dot"/><circle cx="400" cy="220" r="3.5" class="d-dot"/><text x="540" y="85" text-anchor="middle" class="d-t s">+</text><text x="540" y="205" text-anchor="middle" class="d-t s">−</text><text x="548" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text><line x1="240" y1="90" x2="300" y2="90" class="d-ax"  marker-end="url(#ah)"/><text x="270" y="108" text-anchor="middle" class="d-t s m">i<tspan dy="4" font-size="10">L</tspan></text></svg><figcaption>Buck (step-down) converter. When S is closed the source drives current through L to the load; when S opens, the diode D carries the inductor current.</figcaption></figure>

- The inductor and capacitor smooth the output, so the output voltage has only a limited ripple. How much filtering is needed depends on the load.
- **Continuous conduction mode (CCM):** the inductance is large enough that the inductor current **never becomes zero**.
- **Discontinuous conduction mode (DCM):** with a smaller inductor, the current is **zero for part of each cycle**.

**Notation.** $T$ is the switching period, $\delta$ the **duty cycle** (the fraction of $T$ the switch is closed) and $1 - \delta$ the fraction it is open. $V_c$ is the output (capacitor) voltage, assumed constant: $C$ is large enough that the ripple on $V_c$ is negligible.

## Continuous conduction

<figure class="fig"><svg viewBox="0 0 600 270" role="img" aria-label="Inductor current in continuous conduction: rises from Imin to Imax during δT, falls back during (1−δ)T."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="210" x2="570" y2="210" class="d-ax"  marker-end="url(#ah)"/><line x1="60" y1="210" x2="60" y2="30" class="d-ax"  marker-end="url(#ah)"/><text x="52" y="40" text-anchor="end" class="d-t b">i<tspan dy="4" font-size="10">L</tspan></text><text x="570" y="230" text-anchor="end" class="d-t s">t</text><polyline class="d-a w" points="60,140 280,60 540,140"/><line x1="60" y1="60" x2="280" y2="60" class="d-mut" /><line x1="60" y1="140" x2="540" y2="140" class="d-mut" /><line x1="280" y1="60" x2="280" y2="210" class="d-mut" /><line x1="540" y1="140" x2="540" y2="210" class="d-mut" /><text x="52" y="65" text-anchor="end" class="d-t s">I<tspan dy="4" font-size="10">max</tspan></text><text x="52" y="145" text-anchor="end" class="d-t s">I<tspan dy="4" font-size="10">min</tspan></text><line x1="64" y1="232" x2="276" y2="232" class="d-ax"  marker-start="url(#ah)" marker-end="url(#ah)"/><text x="170.0" y="250" text-anchor="middle" class="d-t s">δT  (S closed)</text><line x1="284" y1="232" x2="536" y2="232" class="d-ax"  marker-start="url(#ah)" marker-end="url(#ah)"/><text x="410.0" y="250" text-anchor="middle" class="d-t s">(1 − δ)T  (S open)</text><text x="200" y="128" text-anchor="middle" class="d-t s a">slope (E − V<tspan dy="4" font-size="10">c</tspan><tspan dy="-4">)/L</tspan></text><text x="440" y="90" text-anchor="middle" class="d-t s r">slope −V<tspan dy="4" font-size="10">c</tspan><tspan dy="-4">/L</tspan></text></svg><figcaption>Inductor current in continuous conduction. It rises with slope (E − V<sub>c</sub>)/L while the switch is closed and falls with slope −V<sub>c</sub>/L while it is open.</figcaption></figure>

**Switch closed** ($0 < t < \delta T$): $E = L\dfrac{di}{dt} + V_c$, so the current rises linearly:

$$i(t) = \frac{E - V_c}{L}t + I_{min}, \qquad I_{max} - I_{min} = \frac{E - V_c}{L}\delta T \quad (1)$$

**Switch open** ($\delta T < t < T$): the diode carries the current, $0 = L\dfrac{di}{dt} + V_c$, and the current falls:

$$I_{min} - I_{max} = -\frac{V_c}{L}(1 - \delta)T \quad (2)$$

Equating the rise and the fall: $(E - V_c)\delta = V_c(1 - \delta)$, so

$$\boxed{V_c = \delta E}$$

The output depends only on the fraction of time the switch is closed, and is always less than the input.

**Circuit currents.** The capacitor's average current is zero, so the average inductor current equals the load current: $\dfrac{I_{max} + I_{min}}{2} = I_o = \dfrac{V_c}{R}$ (3). Combining (1) and (3):

$$I_{max} = \delta E\left[\frac{1}{R} + \frac{(1 - \delta)T}{2L}\right], \qquad I_{min} = \delta E\left[\frac{1}{R} - \frac{(1 - \delta)T}{2L}\right]$$

**Minimum inductance for continuous current** (set $I_{min} = 0$):

$$L_{min} = \frac{(1 - \delta)RT}{2} = \frac{(1 - \delta)R}{2f}$$

**Ripple.** The peak-to-peak inductor ripple is $\Delta I_L = \dfrac{(E - V_c)\delta T}{L}$. The output-voltage ripple, with the capacitor absorbing the inductor ripple current, is

$$\frac{\Delta V_o}{V_o} = \frac{1 - \delta}{8LCf^2}$$

**Switch and diode currents** (small ripple): the switch carries the inductor current while closed and the diode while open, so

- switch: average $\delta I_o$, rms $\approx I_o\sqrt\delta$;
- diode: average $(1 - \delta)I_o$, rms $\approx I_o\sqrt{1 - \delta}$;
- average source current $I_s = \delta I_o$, so input power $EI_s = \delta EI_o = V_cI_o$, the output power (ideal converter).

**When is the output voltage highest?** The capacitor current is $i_C = i_L - I_o$. It is positive from the middle of the on-time ($\delta T/2$, where $i_L$ rises through $I_o$) to the middle of the off-time, where $i_L$ falls back through $I_o$:

$$t = \delta T + \frac{(1 - \delta)T}{2} = \frac{(1 + \delta)T}{2}$$

So the capacitor voltage peaks at $t = (1 + \delta)T/2$ and is lowest at $t = \delta T/2$.

## Discontinuous conduction

<figure class="fig"><svg viewBox="0 0 600 240" role="img" aria-label="Discontinuous inductor current: rises during delta T, falls to zero at delta2 T, then stays zero until T."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="210" x2="570" y2="210" class="d-ax"  marker-end="url(#ah)"/><line x1="60" y1="210" x2="60" y2="30" class="d-ax"  marker-end="url(#ah)"/><text x="52" y="40" text-anchor="end" class="d-t b">i<tspan dy="4" font-size="10">L</tspan></text><text x="570" y="230" text-anchor="end" class="d-t s">t</text><polyline class="d-a w" points="60.0,210.0 170.0,60.0 250.0,210.0 310.0,210.0"/><polyline class="d-a w" points="310.0,210.0 420.0,60.0 500.0,210.0 560.0,210.0"/><line x1="170" y1="60" x2="170" y2="210" class="d-mut" /><line x1="250" y1="60" x2="250" y2="210" class="d-mut" /><line x1="60" y1="60" x2="170" y2="60" class="d-mut" /><text x="52" y="65" text-anchor="end" class="d-t s">I<tspan dy="4" font-size="10">max</tspan></text><text x="170" y="230" text-anchor="middle" class="d-t s">δT</text><text x="250" y="230" text-anchor="middle" class="d-t s">δ<tspan dy="4" font-size="10">2</tspan><tspan dy="-4">T</tspan></text><text x="310" y="230" text-anchor="middle" class="d-t s">T</text><text x="280" y="198" text-anchor="middle" class="d-t s r">i = 0</text></svg><figcaption>Discontinuous conduction. The inductor current rises from zero during δT, falls to zero at δ<sub>2</sub>T, and stays at zero until the next period. δ<sub>2</sub> is a new unknown.</figcaption></figure>

The current rises from zero during $\delta T$ and falls to zero at $\delta_2T$. There are now three unknowns, $V_c$, $I_{max}$ and $\delta_2$:

$$I_{max} = \frac{E - V_c}{L}\delta T, \qquad I_{max} = \frac{V_c}{L}(\delta_2 - \delta)T$$

and the average power balance $\dfrac{I_{max}}{2}\,\delta E = \dfrac{V_c^2}{R}$ (the source supplies a triangle of current only while the switch is closed). With $K = \dfrac{TR\delta^2}{4L}$:

$$\frac{V_c}{E} = K\left[-1 + \sqrt{1 + \frac{2}{K}}\right], \qquad \delta_2 = \frac{\delta}{2}\left[1 + \sqrt{1 + \frac{2}{K}}\right], \qquad \frac{I_{max}R}{E} = \frac{4K}{\delta}\left[1 + K - K\sqrt{1 + \frac{2}{K}}\right]$$

In DCM the output voltage depends on the load ($K$ contains $R$), so it is no longer just $\delta E$.

## Worked example: inductance for continuous current

*A buck chopper operating at 10 kHz supplies 100 W at 12 V to a load from a 20 V source. Find (a) the inductance for continuous inductor current, (b) $I_{max} - I_{min}$.*

$I_o = 100/12 = 8.33$ A; $R = 12/8.33 = 1.44\ \Omega$; $\delta = 12/20 = 0.6$; $T = 1/10\,000 = 0.0001$ s.

**(a)** $L = \dfrac{TR}{2}(1 - \delta) = \dfrac{0.0001 \times 1.44}{2}(0.4) = 28.8\ \mu$H.

**(b)** $I_{max} - I_{min} = \dfrac{(20 - 12)(0.6)(0.0001)}{28.8 \times 10^{-6}} = 16.67$ A. At the critical inductance $I_{min} = 0$, so $I_{max} = 2I_o = 16.67$ A, as expected.

More examples, including the textbook design problems, are in the tutorial *DC–DC converter examples*.

> **Corrections to the lecture slides and class notes.** In the 10 kHz example the bracket is printed "$20 - 12(0.6)(0.0001)$"; it should be $(20 - 12)(0.6)(0.0001)$. In the class notes' DCM result for $I_{max}$, the root is written $\sqrt{1 - 2/K}$; it is $\sqrt{1 + 2/K}$, the same root as in the other two results.
