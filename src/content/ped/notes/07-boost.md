# The boost converter

*Lecture 2 · EEU 08104 Power Electronics Design*

A **boost converter** converts the input DC voltage to a **higher** output DC voltage.

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Boost converter: inductor L in series with the source, switch S to ground, diode D to the output capacitor and load."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="60" x2="60" y2="118.0" class="d-ax" /><line x1="60" y1="162.0" x2="60" y2="220" class="d-ax" /><circle cx="60" cy="140.0" r="22" class="d-box"/><text x="60" y="134.0" text-anchor="middle" class="d-t s">+</text><text x="60" y="154.0" text-anchor="middle" class="d-t s">−</text><text x="28" y="145.0" text-anchor="end" class="d-t b">E</text><line x1="60" y1="60" x2="90" y2="60" class="d-ax" /><path d="M90 60 h10 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 a11.25 11.25 0 0 1 22.5 0 h10" class="d-a" /><text x="145.0" y="38.75" text-anchor="middle" class="d-t s">L</text><line x1="200" y1="60" x2="230" y2="60" class="d-ax" /><circle cx="230" cy="60" r="3.5" class="d-dot"/><line x1="230" y1="60" x2="230" y2="124.0" class="d-ax" /><circle cx="230" cy="124.0" r="3.5" class="d-dot"/><line x1="230" y1="156.0" x2="248" y2="128.0" class="d-ax w" /><circle cx="230" cy="156.0" r="3.5" class="d-dot"/><line x1="230" y1="156.0" x2="230" y2="220" class="d-ax" /><text x="216" y="145.0" text-anchor="end" class="d-t s">S</text><line x1="230" y1="60" x2="270.0" y2="60" class="d-ax" /><line x1="290.0" y1="60" x2="330" y2="60" class="d-ax" /><path d="M270.0 48 L270.0 72 L290.0 60 Z" class="d-box b"/><line x1="290.0" y1="48" x2="290.0" y2="72" class="d-ax w" /><text x="280.0" y="42" text-anchor="middle" class="d-t s">D</text><line x1="330" y1="60" x2="400" y2="60" class="d-ax" /><circle cx="400" cy="60" r="3.5" class="d-dot"/><line x1="400" y1="60" x2="400" y2="134.0" class="d-ax" /><line x1="400" y1="146.0" x2="400" y2="220" class="d-ax" /><line x1="384" y1="134.0" x2="416" y2="134.0" class="d-ax w" /><line x1="384" y1="146.0" x2="416" y2="146.0" class="d-ax w" /><text x="422" y="145.0" text-anchor="start" class="d-t s">C</text><line x1="400" y1="60" x2="500" y2="60" class="d-ax" /><line x1="500" y1="60" x2="500" y2="115.0" class="d-ax" /><line x1="500" y1="165.0" x2="500" y2="220" class="d-ax" /><polyline class="d-ax" points="500.0,115.0 508.0,119.2 492.0,127.5 508.0,135.8 492.0,144.2 508.0,152.5 492.0,160.8 500.0,165.0"/><text x="516" y="145.0" text-anchor="start" class="d-t s">R</text><line x1="60" y1="220" x2="500" y2="220" class="d-ax" /><circle cx="230" cy="220" r="3.5" class="d-dot"/><circle cx="400" cy="220" r="3.5" class="d-dot"/><text x="540" y="85" text-anchor="middle" class="d-t s">+</text><text x="540" y="205" text-anchor="middle" class="d-t s">−</text><text x="548" y="145.0" text-anchor="start" class="d-t b">V<tspan dy="4" font-size="10">o</tspan></text></svg><figcaption>Boost (step-up) converter. Closing S stores energy in L; when S opens, L and the source together push current through D, so V<sub>o</sub> = E/(1 − δ) is higher than E.</figcaption></figure>

## Continuous conduction

**Switch on** ($0 < t < \delta T$): the source is across the inductor, $v_L = E = L\dfrac{di}{dt}$, so

$$i(t) = \frac{E}{L}t + I_{min}, \qquad I_{max} - I_{min} = \frac{E}{L}\delta T \quad (1)$$

The diode is reverse biased and the capacitor alone feeds the load.

**Switch off** ($\delta T < t < T$): the inductor current flows through the diode to the output. $E = v_L + V_c$, so $v_L = E - V_c$ (negative, since $V_c > E$):

$$I_{min} - I_{max} = \frac{E - V_c}{L}(1 - \delta)T \quad (2)$$

Adding (1) and (2): $E\delta = -(E - V_c)(1 - \delta)$, so $V_c(1 - \delta) = E$:

$$\boxed{V_c = \frac{E}{1 - \delta}}, \qquad \delta = 1 - \frac{E}{V_c}$$

As $\delta \to 1$ the ideal gain grows without limit; in practice losses limit it.

**Currents.** The inductor current is the source current, so the input power is $P = I_{av}E$ with $I_{av} = (I_{max} + I_{min})/2$. Equating it to $V_c^2/R$:

$$I_{max} + I_{min} = \frac{2V_c^2}{RE} = \frac{2E}{R(1 - \delta)^2}$$

and with (1):

$$I_{max} = \frac{E}{R(1 - \delta)^2} + \frac{E\delta T}{2L}, \qquad I_{min} = \frac{E}{R(1 - \delta)^2} - \frac{E\delta T}{2L}$$

The average inductor current is $I_L = \dfrac{I_o}{1 - \delta}$, and the ripple $\Delta I_L = \dfrac{E\delta T}{L}$.

**Critical inductance** ($I_{min} = 0$):

$$L_c = \frac{RT}{2}\,\delta(1 - \delta)^2$$

**Output ripple.** While the switch is on, the capacitor alone supplies $I_o$ for $\delta T$:

$$\Delta V_o = \frac{I_o\delta}{fC}, \qquad \frac{\Delta V_o}{V_o} = \frac{\delta}{RCf}$$

**Diode and capacitor currents.** The diode carries the inductor current while the switch is off, so its average is $(1 - \delta)I_L = I_o$. The rms capacitor current is

$$I_{C,rms} = \sqrt{\delta I_o^2 + (1 - \delta)\left[(I_L - I_o)^2 + \frac{\Delta I_L^2}{12}\right]}$$

If the inductor ripple is small, this simplifies to $I_{C,rms} \approx I_o\sqrt{\dfrac{\delta}{1 - \delta}}$.

## Discontinuous conduction

With $K = \dfrac{TR\delta^2}{4L}$ as for the buck converter:

$$\frac{V_c}{E} = \frac{1}{2}\left(1 + \sqrt{1 + 8K}\right), \qquad \delta_2 = \frac{\delta}{4K}\left(1 + 4K + \sqrt{1 + 8K}\right), \qquad \frac{I_{max}R}{E} = \frac{4K}{\delta}$$

## Worked example: boost chopper, 150 V from 40 V

*A boost chopper supplies 150 V to a 25 Ω load from a 40 V source, with L = 200 µH and T = 200 µs. Find (a) δ, (b) $I_{min}$, (c) $I_{max}$, (d) the average diode current, (e) the rms capacitor current, (f) the critical inductance.*

**(a)** $\delta = 1 - \dfrac{40}{150} = 0.733$.

**(b, c)** $I_o = 150/25 = 6$ A; $I_L = \dfrac{6}{1 - 0.733} = 22.5$ A; $\Delta I_L = \dfrac{E\delta T}{L} = \dfrac{40 \times 0.733 \times 200\ \mu s}{200\ \mu H} = 29.33$ A.

$I_{min} = 22.5 - 29.33/2 = 7.83$ A; $I_{max} = 22.5 + 29.33/2 = 37.17$ A.

**(d)** $I_D = I_o = 6$ A.

**(e)** The ripple here is large (29 A on 22.5 A), so use the full formula:

$$I_{C,rms} = \sqrt{0.733(6^2) + 0.267\left[(22.5 - 6)^2 + \frac{29.33^2}{12}\right]} = 10.87\ \text{A}$$

The small-ripple shortcut $6\sqrt{0.733/0.267} = 9.95$ A underestimates it.

**(f)** $L_c = \dfrac{25 \times 0.0002}{2}(0.733)(1 - 0.733)^2 = 130\ \mu$H. The 200 µH used is above this, so the current is continuous.

## Worked example: boost converter design

*Design a boost converter with $P_o = 27$ W, $V_o = 40$ V, $V_{in} = 28$ V, $\Delta V_o/V_o = 2\%$ and $f = 35$ kHz.*

- $D = 1 - \dfrac{28}{40} = 0.3$.
- $R = \dfrac{V_o^2}{P} = \dfrac{40^2}{27} = 59.26\ \Omega$; $T = 1/35\,000 = 28.6\ \mu$s.
- $L_c = \dfrac{RT}{2}D(1 - D)^2 = \dfrac{59.26 \times 28.6\ \mu s}{2}(0.3)(0.7)^2 = 124\ \mu$H. Choose $L = 200\ \mu$H, comfortably above $L_c$ for CCM.
- $C = \dfrac{D}{R f (\Delta V_o/V_o)} = \dfrac{0.3}{59.26 \times 35\,000 \times 0.02} = 7.23\ \mu$F.

> **Corrections to the lecture slides and class notes.**
> - The slide deriving $I_{max}$ and $I_{min}$ drops a factor of 2 in one intermediate line; the final results above are right.
> - In the 150 V example, the formula written for the capacitor current is the small-ripple one, $I_o\sqrt{\delta/(1 - \delta)}$, which gives 9.95 A; the answer 10.87 A comes from the full formula, which is the right one here because the ripple is large. (The Electric Drives notes on this site quoted 9.94 A as a correction; with the ripple included, 10.87 A is correct.)
> - The class notes write the ripple as $\dfrac{\Delta V_o}{V_o} = \dfrac{I_oD}{fC}$, mixing two forms: either $\Delta V_o = \dfrac{I_oD}{fC}$ or $\dfrac{\Delta V_o}{V_o} = \dfrac{D}{RCf}$.
