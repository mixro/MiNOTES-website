**Worked rectifier problems** from the Lecture 1 slides and the class notes, solved again and checked. Where the notes or slides give a different answer, the answer box says so. Try each question before opening its answer.

## Q1 Single-phase half-wave, resistive
A diode half-wave rectifier feeds a 10 Ω resistor from a 230 V, 50 Hz supply. Find the average and rms load voltage, the average and rms current, the power and the peak inverse voltage of the diode.

::: answer
$V_m = \sqrt2 \times 230 = 325.3$ V; $I_m = 32.53$ A.

- $V_{dc} = V_m/\pi = 103.5$ V; $I_{dc} = 10.35$ A.
- $V_{rms} = V_m/2 = 162.6$ V; $I_{rms} = 16.26$ A.
- $P = I_{rms}^2R = 2645$ W.
- $PIV = V_m = 325.3$ V.

*(Practice question added for these notes.)*
:::

## Q2 Three-phase diode bridge
A three-phase bridge rectifier has a purely resistive load and delivers $I_{dc} = 60$ A at $V_{dc} = 280.7$ V; the source frequency is 50 Hz. Determine (a) the efficiency, (b) the peak inverse voltage of each diode, (c) the average and peak current through a diode.

::: answer
$R = 280.7/60 = 4.678\ \Omega$; $P_{dc} = 16\,842$ W.

**(a)** $V_m = V_{dc}/1.654 = 169.7$ V (peak phase voltage); $V_{rms} = 1.6554V_m = 280.9$ V; $P_{ac} = V_{rms}^2/R = 16\,870$ W; $\eta = 99.83\%$.

**(b)** $PIV = \sqrt3V_m = 293.9$ V.

**(c)** $I_d = I_{dc}/3 = 20$ A $= 0.3183I_m$, so $I_m = 62.83$ A.

The slides label the parts of the solution (e) and (f); they answer (a) to (c).
:::

## Q3 Half-wave controlled, resistive
A half-wave phase-controlled rectifier with a 20 Ω resistive load has a 240 V rms source and operates with α = 40°. Find (a) the peak load voltage, (b) the peak load current, (c) the average load voltage, (d) the average load current, (e) the rms load current, (f) the power to the load.

::: answer
(a) 339.4 V; (b) 16.97 A; (c) $\frac{339.4}{2\pi}(1 + \cos40°) = 95.4$ V; (d) 4.77 A; (e) $\frac{16.97}{2}\left(1 - \frac{40}{180} + \frac{\sin80°}{2\pi}\right)^{1/2} = 8.20$ A; (f) $8.20^2 \times 20 = 1345$ W.

All match the slides.
:::

## Q4 Full-wave controlled, resistive
A full-wave phase-controlled rectifier with a 20 Ω resistive load has a 240 V rms, 50 Hz source and operates with α = 40°. Find (a) the peak load voltage, (b) the peak load current, (c) the average load voltage, (d) the average load current, (e) the rms load current, (f) the power.

::: answer
(a) 339.4 V; (b) 16.97 A; (c) $\frac{339.4}{\pi}(1 + \cos40°) = 190.8$ V; (d) 9.54 A; (e) $\frac{16.97}{\sqrt2}(0.9346)^{1/2} = 11.6$ A; (f) 2690 W.

The numbers on the slides are right, but the formulas written beside them are the half-wave ones ($V_m/2\pi$, $I_m/2$); the full-wave values $V_m/\pi$ and $I_m/\sqrt2$ are what is actually used.
:::

## Q5 Full-wave controlled, highly inductive
A full-wave phase-controlled rectifier with an inductive load has a resistive part of 20 Ω, a 240 V rms, 50 Hz source and α = 40°. Assume continuous load current. Find (a) the peak load voltage, (b) the average load voltage, (c) the average load current, (d) the peak load current, (e) the rms load current, (f) the power, (g) the average current in each SCR.

::: answer
(a) 339.4 V; (b) $\frac{2}{\pi}(339.4)\cos40° = 165.5$ V; (c) 8.28 A; (d), (e) with a large inductance the current is nearly constant, so both are 8.28 A; (f) $8.28^2 \times 20 = 1370$ W; (g) $8.28/2 = 4.14$ A (rms 5.85 A).

One slide version drops $V_m$ from the line for (b).
:::

## Q6 Full converter with an RL load
The fully controlled single-phase full-wave converter has a 240 V rms, 50 Hz source and a 10 Ω, 50 mH series load. The delay angle is 45°. Determine (i) the average output voltage and current, and the thyristor mean current, (ii) the rms load voltage and current, the thyristor rms current and the load ripple factors, (iii) the power absorbed by the load and the supply power factor. If the delay angle is increased to 75°, determine (iv) the load current in the time domain, (v) the current extinction angle, (vi) the load average current and voltage, (vii) the load rms voltage and current, the ripple factors and the power, (viii) the supply power factor.

::: answer
$\phi = \tan^{-1}(15.71/10) = 57.5°$ (1.00 rad); $Z = 18.62\ \Omega$. At 45° the current is continuous ($\alpha < \phi$); at 75° it is discontinuous.

**α = 45°**

- (i) $V_o = 152.8$ V, $I_o = 15.28$ A, thyristor mean 7.64 A.
- (ii) $V_{rms} = 240$ V. Harmonic analysis (rms): $V_2 = 161.1$ V, $I_2 = 4.89$ A; $V_4 = 59.4$ V, $I_4 = 0.93$ A; $V_6 = 37.6$ V, $I_6 = 0.40$ A. $I_{rms} = 16.08$ A; thyristor rms 11.37 A; $RF_i = 0.33$; $FF_v = 1.571$, $RF_v = 1.21$.
- (iii) $P = 2585$ W; $pf = 0.67$.

**α = 75°**

- (iv) $i(\omega t) = 18.23[\sin(\omega t - 1.004) - 0.300e^{-(\omega t - 1.309)/1.571}]$ A.
- (v) $\beta = 4.094$ rad $= 234.6°$.
- (vi) $V_o = \frac{\sqrt2 \times 240}{\pi}(\cos75° - \cos234.6°) = 90.6$ V; $I_o = 9.06$ A.
- (vii) $V_{rms} = 216.8$ V; $I_{rms} = 10.64$ A; $FF_i = 1.175$, $RF_i = 0.62$; $FF_v = 2.39$, $RF_v = 2.18$; $P = 1132$ W.
- (viii) $pf = 1132/(240 \times 10.64) = 0.44$.

**Errors in the class notes.** The notes use the slide formula for the harmonic voltages, which is 4 times too small for peak values. So at 45° they get $I_{rms} = 15.3$ A, thyristor rms 10.8 A, $P = 2344$ W and $pf = 0.64$. At 75° their extinction angle and averages are right, but they get $I_{rms} = 13.55$ A, $P = 1836$ W and $pf = 0.56$. See *Full converter with RL and back-EMF loads* for the full working.
:::

## Q7 Full converter with a back EMF
The fully controlled full-wave converter has a 240 V rms, 50 Hz source and a 10 Ω, 50 mH, 50 V EMF opposing series load. The delay angle is 45°. Determine (i) the average output voltage and current, (ii) the rms load voltage and the rms voltage across the R–L part, (iii) the power absorbed by the 50 V EMF, (iv) the rms load current and the power in the resistive part, (v) the load efficiency (share of energy into the EMF) and the power factor, (vi) the load voltage and current form and ripple factors.

::: answer
The minimum current is about 0.19 A, so conduction is (just) continuous.

- (i) $V_o = 152.8$ V; $I_o = (152.8 - 50)/10 = 10.28$ A.
- (ii) $V_{rms} = 240$ V; $V_{RL,rms} = \sqrt{240^2 - 2(50)(152.8) + 50^2} = 211.7$ V.
- (iii) $P_E = 10.28 \times 50 = 514$ W.
- (iv) The R–L harmonics are the same as in Q6: $I_{rms} = \sqrt{10.28^2 + 24.96} = 11.43$ A; $P_R = 1307$ W.
- (v) $\eta = 514/1821 = 28.2\%$; $pf = 1821/(240 \times 11.43) = 0.66$.
- (vi) $FF_i = 1.11$, $RF_i = 0.49$; $FF_v = 1.571$, $RF_v = 1.21$.

**Errors in the class notes:** $V_{RL,rms}$ is given as $\sqrt{240^2 - 50^2} = 234.7$ V (the $-2EV_o$ term is missing); and, through the harmonic formula, $I_{rms} = 10.36$ A, $P_R = 1073$ W, $\eta = 32.4\%$, $pf = 0.64$ and $FF_i = 1.011$.
:::

## Q8 Three-phase controlled rectifier
The full-wave three-phase controlled rectifier has a three-phase 415 V, 50 Hz source (240 V phase) and provides a 100 A constant-current load. Determine (i) the average and rms thyristor current, (ii) the rms and fundamental line current, (iii) the apparent fundamental power $S_1$. If 25 kW is delivered to the DC load, calculate (iv) the supply power factor, (v) the DC output voltage, the load resistance and the delay angle, (vi) the real and reactive AC supply power, (vii) the delay-angle range if the AC supply varies by ±5%, with 25 kW and 100 A DC.

::: answer
(i) 33.3 A, 57.7 A. (ii) $\sqrt{2/3} \times 100 = 81.6$ A; $\frac{\sqrt6}{\pi} \times 100 = 78.0$ A. (iii) $\sqrt3 \times 415 \times 78 = 56.1$ kVA. (iv) $\frac{25\,000}{\sqrt3 \times 415 \times 81.6} = 0.426$. (v) 250 V; 2.5 Ω; $\alpha = \cos^{-1}\frac{250}{2.34 \times 239.6} = 63.5°$. (vi) $P = 25$ kW; $Q = 50$ kVAr. (vii) $62.0° \le \alpha \le 64.9°$.

All the example's results check out; the notes round the lower angle to 61.9°.
:::

## Q9 Ripple factor of the full converter
For a single-phase full converter with continuous current, find the voltage form factor and ripple factor at α = 0°, 30° and 60°.

::: answer
$FF_v = \dfrac{\pi}{2\sqrt2\cos\alpha}$, $RF_v = \sqrt{FF_v^2 - 1}$.

| α | $FF_v$ | $RF_v$ |
|---|---|---|
| 0° | 1.111 | 0.483 |
| 30° | 1.283 | 0.803 |
| 60° | 2.221 | 1.984 |

The ripple factor rises without limit as α → 90°. The slides' "maximum 1.11 at π/2" is the form factor at α = 0, not a maximum ripple factor.
:::

## Q10 Second harmonic of the output
For the converter of Q6 at α = 45°, compute the rms value of the second-harmonic output voltage, and the second-harmonic current.

::: answer
$$V_2 = \frac{2 \times 240}{\pi}\left[1 + \frac19 - \frac{2\cos90°}{3}\right]^{1/2} = 152.8 \times 1.054 = 161.1\ \text{V rms}$$

$Z_2 = \sqrt{10^2 + (2 \times 15.71)^2} = 32.97\ \Omega$, so $I_2 = 4.89$ A rms. (With the slides' factor $\sqrt2V/2\pi$ one gets 57 V, too small; a Fourier analysis of the waveform gives a 227.8 V peak, i.e. 161.1 V rms.)
:::
