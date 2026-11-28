**Worked DC–DC converter problems** from the Lecture 2 slides, the class notes and the textbook *Power Electronics: Circuit Analysis and Design* (Examples 4.2 and 4.3, Exercises 4.3 to 4.5), plus a buck-boost test question. All have been re-solved; differences from the notes are pointed out.

## Q1 Buck, inductance for continuous current
A buck chopper operating at 10 kHz supplies 100 W at 12 V to a load from a 20 V source. Find (a) the inductance for continuous inductor current, (b) $I_{max} - I_{min}$.

::: answer
$I_o = 8.33$ A, $R = 1.44\ \Omega$, $\delta = 0.6$, $T = 100\ \mu$s.

(a) $L = \frac{TR}{2}(1 - \delta) = 28.8\ \mu$H. (b) $\frac{(20 - 12)(0.6)(0.0001)}{28.8\ \mu H} = 16.67$ A.

The slide prints the bracket as "$20 - 12(0.6)$"; it is $(20 - 12)(0.6)$.
:::

## Q2 Buck converter, Example 1
A buck converter supplies 12 V to a 6 Ω resistive load from a 30 V source. The inductor current is continuous and the chopping frequency is 5 kHz. Find (a) the duty cycle, (b) the minimum inductance, (c) $I_{min}$ and $I_{max}$ if L = 1.5 mH, (d) the power to the load.

::: answer
(a) $\delta = 12/30 = 0.4$.

(b) $L = \frac{TR(1 - \delta)}{2} = \frac{(1/5000)(6)(0.6)}{2} = 360\ \mu$H.

(c) $I_{min} = \delta E\left[\frac1R - \frac{(1 - \delta)T}{2L}\right] = 12\left[\frac16 - \frac{0.6 \times 200\ \mu s}{3\ \text{mH}}\right] = 1.52$ A; $I_{max} = 12\left[\frac16 + 0.04\right] = 2.48$ A.

(d) Average source current $I_s = \delta\frac{I_{max} + I_{min}}{2} = 0.4 \times 2.0 = 0.8$ A, so $P = 30 \times 0.8 = 24$ W. Check: $V_c^2/R = 12^2/6 = 24$ W.

The class notes' working for (d) writes $I_s = (I_{max} + I_{min})/2$ but then uses 0.8 A, which already includes the factor $\delta$.
:::

## Q3 Buck chopper with a range of outputs, Example 2
A buck chopper must give outputs from 15 V to 25 V into loads from 4 Ω to 10 Ω, in any combination, from E = 40 V at f = 8 kHz. Find (a) the range of δ, (b) the inductance needed for continuous current under any condition.

::: answer
(a) $\delta_{min} = 15/40 = 0.375$; $\delta_{max} = 25/40 = 0.625$. So $0.375 \le \delta \le 0.625$.

(b) $L_c = \frac{(1 - \delta)RT}{2}$ is largest for the smallest δ and the largest R: $L = \frac{(1 - 0.375)(10)}{2 \times 8000} = 391\ \mu$H.

The slides give the answer to (a) as "δ = 0.375"; that is only the minimum, used in (b).
:::

## Q4 Boost chopper, Examples 3 and 4
A boost chopper supplies 150 V to a 25 Ω load from a 40 V source; L = 200 µH and T = 200 µs. Find (a) δ, (b) $I_{min}$, (c) $I_{max}$, (d) the average diode current, (e) the rms capacitor current, (f) the critical inductance.

::: answer
(a) $\delta = 1 - 40/150 = 0.733$. (b, c) $I_o = 6$ A; $I_L = 6/0.267 = 22.5$ A; $\Delta I_L = E\delta T/L = 29.33$ A; $I_{min} = 7.83$ A, $I_{max} = 37.17$ A. (d) $I_D = I_o = 6$ A.

(e) $I_{C,rms} = \sqrt{\delta I_o^2 + (1 - \delta)[(I_L - I_o)^2 + \Delta I_L^2/12]} = 10.87$ A. The notes write the small-ripple formula $I_o\sqrt{\delta/(1 - \delta)}$, which gives 9.95 A; their answer 10.87 A is the correct one, because the ripple is large.

(f) $L_c = \frac{RT}{2}\delta(1 - \delta)^2 = 130\ \mu$H.
:::

## Q5 Buck-boost chopper, Examples 5 and 6
A buck-boost chopper supplies 100 W at 50 V to a resistive load from a 35 V source, with T = 200 µs and L = 700 µH. Find (a) δ, (b) $I_{min}$ and $I_{max}$, (c) the average switch current, (d) the average diode current, (e) the rms capacitor current, (f) the minimum inductance.

::: answer
(a) $\delta = 50/85 = 0.588$. (b) $I_L = 2/0.412 = 4.86$ A; $\Delta I_L = 5.88$ A; $I_{min} = 1.92$ A, $I_{max} = 7.80$ A. (c) $\delta I_L = 2.86$ A. (d) $(1 - \delta)I_L = 2.0$ A. (e) 2.63 A. (f) $L = \frac{RT}{2}(1 - \delta)^2 = \frac{25 \times 200\ \mu s}{2}(0.412)^2 = 424\ \mu$H.

All match the notes.
:::

## Q6 Textbook Example 4.2: buck converter analysis
A buck converter has $V_{in} = 20$ V, $V_o = 15$ V, $I_o = 5$ A and f = 50 kHz. Determine (a) D, (b) $L_{crit}$, (c) the maximum and minimum inductor current for $L = 100L_{crit}$, (d) the average input and output power, (e) the capacitor voltage ripple for C = 0.47 µF.

::: answer
(a) $D = 15/20 = 0.75$.

(b) $R = 15/5 = 3\ \Omega$; $T = 20\ \mu$s; $L_{crit} = \frac{(1 - D)TR}{2} = \frac{0.25 \times 20\ \mu s \times 3}{2} = 7.5\ \mu$H.

(c) $L = 750\ \mu$H: $I_{min} = DV_{in}\left[\frac1R - \frac{(1 - D)T}{2L}\right] = 15\left[\frac13 - 0.0033\right] = 4.95$ A; $I_{max} = 5.05$ A.

(d) $P_{in} = P_o = 15 \times 5 = 75$ W.

(e) $\frac{\Delta V_o}{V_o} = \frac{1 - D}{8LCf^2} = \frac{0.25}{8(0.75\ \text{mH})(0.47\ \mu\text{F})(50\,000)^2} = 0.035 = 3.5\%$.

The working line for (c) in the notes shows "2(100)" in the denominator, although the result (4.95 A) correctly uses $L = 100L_{crit} = 750\ \mu$H.
:::

## Q7 Textbook Example 4.3: buck converter design
Design a buck converter in CCM with $\Delta V_o/V_o = 0.5\%$, $V_{in} = 20$ V, $P_o = 12$ W, f = 30 kHz and D = 0.4: find L, C and R.

::: answer
- $V_o = DV_{in} = 8$ V; $I_o = 12/8 = 1.5$ A; $R = 8/1.5 = 5.33\ \Omega$.
- $L_{crit} = \frac{(1 - D)TR}{2} = \frac{0.6 \times 5.33}{2 \times 30\,000} = 53.3\ \mu$H. Choose L = 600 µH.
- $I_{max} = 8\left[\frac{1}{5.33} + \frac{0.6}{2 \times 600\ \mu H \times 30\,000}\right] = 1.63$ A; $I_{min} = 1.37$ A.
- $C = \frac{1 - D}{8Lf^2(\Delta V_o/V_o)} = \frac{0.6}{8(600\ \mu H)(30\,000)^2(0.005)} = 27.8\ \mu$F.
:::

## Q8 Textbook Exercise 4.3: redesign for 1% ripple
Redesign the converter of Q6 for an output ripple of at most 1% and an inductor current ripple of at most 10% of the average load current.

::: answer
- Inductor ripple: $\Delta I_L = \frac{(V_{in} - V_o)DT}{L} \le 0.1 \times 5 = 0.5$ A, so $L \ge \frac{5 \times 0.75 \times 20\ \mu s}{0.5} = 150\ \mu$H. Choose L = 0.15 mH.
- Capacitor: $C = \frac{1 - D}{8Lf^2(\Delta V_o/V_o)} = \frac{0.25}{8(0.15\ \text{mH})(50\,000)^2(0.01)} = 8.33\ \mu$F.
- R stays at 3 Ω (from the operating point).
:::

## Q9 Textbook Exercise 4.4: switch and diode currents
Find the average and rms currents of the transistor and the diode for the converter of Q8.

::: answer
With small ripple the switch and diode carry the inductor current gated by the duty ratio:

- transistor: average $DI_o = 0.75 \times 5 = 3.75$ A; rms $I_o\sqrt D = 4.33$ A;
- diode: average $(1 - D)I_o = 1.25$ A; rms $I_o\sqrt{1 - D} = 2.5$ A.
:::

## Q10 Textbook Exercise 4.5: when is the output voltage highest?
Show that the capacitor (output) voltage of a buck converter in CCM peaks at $t = (1 + D)T/2$.

::: answer
The capacitor current is $i_C = i_L - I_o$, and $dv_C/dt = i_C/C$, so $v_C$ is at a maximum or minimum where $i_C = 0$, i.e. $i_L = I_o$.

- During the on-time $[0, DT]$, $i_L$ rises linearly and crosses $I_o$ at $t_1 = DT/2$.
- During the off-time $[DT, T]$ it falls and crosses $I_o$ at $t_2 = DT + \frac{(1 - D)T}{2} = \frac{(1 + D)T}{2}$.

Between $t_1$ and $t_2$, $i_C > 0$ and the voltage rises; after $t_2$ it falls. So the peak is at $t = (1 + D)T/2$.
:::

## Q11 Boost converter design (textbook)
Design a boost converter with $P_o = 27$ W, $V_o = 40$ V, $V_{in} = 28$ V, $\Delta V_o/V_o = 2\%$ and f = 35 kHz.

::: answer
$D = 0.3$; $R = 59.26\ \Omega$; $L_c = \frac{RT}{2}D(1 - D)^2 = 124\ \mu$H, so choose L = 200 µH; $C = \frac{D}{Rf(\Delta V_o/V_o)} = 7.23\ \mu$F.
:::

## Q12 Buck-boost converter for a PLC supply (test question)
A buck-boost converter with an input range of 22 V to 28 V must give −24 V at 5 A to power industrial PLC systems. It must run at 90% efficiency, with an inductor ripple ratio of 35% and an output ripple of 100 mV, at 20 kHz. Calculate the inductance required.

::: answer
**Class-notes solution (worst case at minimum input):** $D = \frac{24}{24 + 22} = 0.5217$; $I_L = \frac{5}{1 - 0.5217} = 10.45$ A; $\Delta I_L = 0.35 \times 10.45 = 3.66$ A; $L = \frac{V_{in}D}{\Delta I_Lf} = \frac{22 \times 0.5217}{3.66 \times 20\,000} = 157\ \mu$H.

**Check.** The ripple ratio $\Delta I_L/I_L$ is actually worst at the **maximum** input: $\Delta I_L$ grows with $V_{in}D = \frac{V_{in}V_o}{V_{in} + V_o}$ while $I_L$ falls. At 28 V: $D = 0.4615$, $I_L = 9.29$ A, $\Delta I_L = 3.25$ A, and $L = \frac{28 \times 0.4615}{3.25 \times 20\,000} = 199\ \mu$H. So **L ≈ 200 µH** keeps the ripple within 35% over the whole input range.

The 90% efficiency raises the inductor current: at 22 V, $I_L = \frac{P_o/\eta}{V_{in}D} = \frac{120/0.9}{22 \times 0.5217} = 11.6$ A, which sets the inductor's current rating. The output capacitor (not asked, but needed): $C = \frac{I_oD}{f\Delta V_o} = \frac{5 \times 0.5217}{20\,000 \times 0.1} = 1.3$ mF.
:::

## Q13 DCM of the buck converter
A buck converter has E = 20 V, R = 10 Ω, T = 50 µs, L = 20 µH and δ = 0.4. Is the current continuous? Find $V_c$ and $\delta_2$.

::: answer
$L_{min} = \frac{(1 - \delta)RT}{2} = \frac{0.6 \times 10 \times 50\ \mu s}{2} = 150\ \mu$H > 20 µH, so the current is **discontinuous**.

$K = \frac{TR\delta^2}{4L} = \frac{50\ \mu s \times 10 \times 0.16}{80\ \mu H} = 1.0$.

$V_c = EK\left[-1 + \sqrt{1 + 2/K}\right] = 20(1)(-1 + 1.732) = 14.6$ V (compare $\delta E = 8$ V in CCM).

$\delta_2 = \frac{\delta}{2}\left[1 + \sqrt3\right] = 0.546$; $I_{max} = \frac{E - V_c}{L}\delta T = \frac{5.36 \times 20\ \mu s}{20\ \mu H} = 5.36$ A.

Check by power: $\frac{I_{max}}{2}\delta E = 2.68 \times 8 = 21.4$ W $= V_c^2/R = 21.4$ W. *(Practice question added for these notes.)*
:::
