**Worked inverter problems** from the Lecture 3 slides and the class notes, plus the slide assignments, all checked.

## Q1 Half-bridge inverter, resistive load
The single-phase half-bridge inverter has a resistive load R = 2.4 Ω and a DC input V = 48 V. Determine (a) the rms output voltage at the fundamental frequency $V_1$, (b) the output power $P_o$, (c) the average and peak current of each transistor, (d) the rms harmonic voltage $V_h$.

::: answer
(a) $V_1 = \frac{2V}{\sqrt2\pi} = 0.45 \times 48 = 21.6$ V.

(b) $V_{rms} = V/2 = 24$ V; $P_o = 24^2/2.4 = 240$ W.

(c) $I_p = \frac{V/2}{R} = 10$ A; each transistor conducts for half the period, so $I_{avg} = 5$ A.

(d) $V_h = \sqrt{24^2 - 21.6^2} = 0.2176 \times 48 = 10.45$ V.

*Extra:* $THD = 10.45/21.6 = 48\%$; fundamental power $21.6^2/2.4 = 194$ W.
:::

## Q2 Full-bridge inverter with an RLC load
The single-phase full-bridge inverter has an RLC load with R = 10 Ω, L = 31.5 mH and C = 112 µF, $f_o = 60$ Hz and $V_d = 220$ V. (a) Express the instantaneous load current as a Fourier series. (b) Calculate (i) the rms load current at the fundamental frequency, (ii) the rms harmonic load current up to the 9th harmonic, (iii) the power absorbed by the load and the fundamental power, (iv) the average DC supply current, (v) the rms and peak current of each transistor.

::: answer
$X_L = 11.87n\ \Omega$; $X_C = 23.68/n\ \Omega$; $V_{n,max} = \frac{4 \times 220}{n\pi} = \frac{280.1}{n}$ V.

$Z_1 = 15.47\ \Omega$, $Z_3 = 29.48\ \Omega$, $Z_5 = 55.55\ \Omega$, $Z_7 = 80.37\ \Omega$, $Z_9 = 104.7\ \Omega$.

(a) $i(t) = 18.1\sin(377t + 49.7°) + 3.17\sin(3 \times 377t - 70.2°) + 1.01\sin(5 \times 377t - 79.6°) + 0.50\sin(7 \times 377t - 82.9°) + 0.30\sin(9 \times 377t - 84.5°)$ A. The fundamental **leads** because the load is capacitive at 60 Hz ($X_C > X_L$).

(b)(i) $18.1/\sqrt2 = 12.8$ A.

(ii) $I_m = \sqrt{18.1^2 + 3.17^2 + 1.01^2 + 0.5^2 + 0.3^2} = 18.41$ A; $I_h = \sqrt{18.41^2 - 18.1^2}/\sqrt2 = 2.38$ A.

(iii) $I_o = 13.02$ A; $P_o = 1695$ W; $P_{o1} = 1638$ W.

(iv) $I_d = 1695/220 = 7.7$ A.

(v) rms $= 13.02/\sqrt2 = 9.2$ A. Peak: the slides use $I_m = 18.41$ A, but the actual peak of the five-term waveform is about **21.0 A**.

**Errors.** The slide's "Given" line says 50 Hz (60 Hz is used); $X_L$ is labelled $X_C$; and $I_h$ is printed without its square root. The class notes follow the printed formula and get $I_h = 7.48$ A, which is wrong.
:::

## Q3 Fourier series of the third pole voltage
*(Slide assignment.)* Write the Fourier expression for $v_{CO}$ of the six-step inverter.

::: answer
$$v_{CO} = \frac{2V_d}{\pi}\sum_{n = 1,3,5,\ldots}\frac1n\sin n\left(\omega t - \frac{4\pi}{3}\right)$$

It is $v_{AO}$ delayed by 240° (or advanced by 120°).
:::

## Q4 Six-step inverter numbers
A six-step inverter runs from $V_d = 600$ V into a balanced star load. Find the rms line voltage, its fundamental, the rms phase voltage and its fundamental.

::: answer
- $V_L = 0.8165 \times 600 = 489.9$ V;
- $V_{L1} = 0.7797 \times 600 = 467.8$ V;
- $V_{ph} = 0.4714 \times 600 = 282.8$ V;
- $V_{ph1} = 0.45 \times 600 = 270.1$ V ($= 467.8/\sqrt3$).

*(Practice question added for these notes.)*
:::

## Q5 Phase voltages of the six-step inverter
*(Slide assignment.)* Sketch $v_{BN}$ and $v_{CN}$ for a balanced resistive star load.

::: answer
Use the six intervals (switch numbers in firing order):

| Interval | On | $v_{AN}$ | $v_{BN}$ | $v_{CN}$ |
|---|---|---|---|---|
| 0–60° | 5, 6, 1 | $+\frac13$ | $-\frac23$ | $+\frac13$ |
| 60–120° | 6, 1, 2 | $+\frac23$ | $-\frac13$ | $-\frac13$ |
| 120–180° | 1, 2, 3 | $+\frac13$ | $+\frac13$ | $-\frac23$ |
| 180–240° | 2, 3, 4 | $-\frac13$ | $+\frac23$ | $-\frac13$ |
| 240–300° | 3, 4, 5 | $-\frac23$ | $+\frac13$ | $+\frac13$ |
| 300–360° | 4, 5, 6 | $-\frac13$ | $-\frac13$ | $+\frac23$ |

(values in units of $V_d$). $v_{BN}$ is $v_{AN}$ delayed by 120°, and $v_{CN}$ by 240°; the three always add to zero.
:::

## Q6 Single-pulse PWM
A single-phase full bridge with $V_d = 220$ V uses single-pulse PWM with a pulse width of 120°. Find the rms output voltage, the rms fundamental, and the third-harmonic content.

::: answer
- $V_o = V_d\sqrt{\delta/\pi} = 220\sqrt{2/3} = 179.6$ V.
- $V_{1} = \frac{4V_d}{\sqrt2\pi}\sin\frac{\delta}{2} = 198.1 \times 0.866 = 171.5$ V.
- $V_3 \propto \sin(3 \times 60°) = 0$: a 120° pulse removes the third harmonic completely.

*(Practice question added for these notes.)*
:::

## Q7 Multiple-pulse PWM
A multiple-pulse PWM inverter has a carrier at 900 Hz and an output at 50 Hz, $V_d = 200$ V. How many pulses are there per half cycle? If each pulse is 12° wide, what is the rms output?

::: answer
$P = \frac{f_c}{2f_o} = \frac{900}{100} = 9$ pulses per half cycle.

$V_o = V_d\sqrt{\frac{P\delta}{\pi}} = 200\sqrt{\frac{9 \times 12°}{180°}} = 200\sqrt{0.6} = 154.9$ V. (Maximum pulse width is $180°/9 = 20°$, giving $V_o = V_d$.)

*(Practice question added for these notes.)*
:::

## Q8 Bipolar vs unipolar SPWM
Compare bipolar and unipolar sinusoidal PWM for a full-bridge inverter.

::: answer
| | Bipolar | Unipolar |
|---|---|---|
| Switching of the two legs | Simultaneous (S1 with S2, S3 with S4) | Independent: leg A from $A_r$ vs $A_c$, leg B from $-A_r$ vs $A_c$ |
| Output levels | $+V_d$ and $-V_d$ only | $+V_d$, 0 in one half cycle; 0, $-V_d$ in the other |
| Harmonics | Around the carrier frequency | Around twice the carrier frequency, so easier to filter |
| Control | Simpler (one comparison) | Two comparisons |
:::
