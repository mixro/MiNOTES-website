# Converter designs (group assignments)

*Group presentations · EEU 08102 Electric Drives*

Assignment 1 asked each group to design, simulate and present one of the five converter types (see the Introduction chapter). This chapter collects the design work from the **AC voltage regulator**, **inverter** and **cyclo-converter** groups, checks the numbers, and adds the standard formulas you need for the exam. The DOL starter assignment is in the chapter on starting induction motors, and choppers are in the chapter on DC–DC converters.

| Converter | Conversion | Assignment rating | Group design point | Simulated in |
|---|---|---|---|---|
| AC voltage regulator | AC → AC, same frequency | 15 A | 240 V, 15 A, 3.6 kW resistive load | Proteus 8 |
| Inverter | DC → AC | 10 A | 48 V DC → 230 V, 2.3 kW | MATLAB/Simulink |
| Cyclo-converter | AC → AC, lower frequency | 10 A | 230 V 50 Hz → 13.33 Hz, R-L load | MATLAB |

## 1. AC voltage regulator

An **AC voltage regulator** controls the **RMS value** of the AC voltage applied to a load **without changing the frequency**.

- **Input:** fixed AC voltage. **Output:** variable AC voltage. **Frequency:** unchanged (50 Hz).
- It is used where **power control** is needed rather than frequency control: heaters, lamp dimmers, soft starting and speed control of fans.

**Why not a series resistor?** A rheostat drops the unwanted voltage as heat, so losses are huge and efficiency is low. A power semiconductor (SCR or TRIAC) instead switches the supply on for only part of each half cycle, so very little power is lost.

### Principle: phase-angle control

In every half cycle the thyristor is fired after a **delay angle $\alpha$** and conducts until the current falls to zero.

- **Earlier firing** (small $\alpha$) → higher RMS output voltage.
- **Later firing** (large $\alpha$) → lower RMS output voltage.

For a **resistive load** fed from $V_s$ (rms):

$$V_o = V_s\sqrt{\frac{1}{\pi}\left(\pi - \alpha + \frac{\sin 2\alpha}{2}\right)}, \qquad P_o = \frac{V_o^2}{R}$$

At $\alpha = 0$ the full supply appears across the load, and at $\alpha = \pi$ the output is zero.

**R-L load.** The current lags the voltage, so it keeps flowing past the voltage zero (commutation is delayed). Control is only possible for $\phi \le \alpha \le \pi$, where $\phi = \tan^{-1}(\omega L/R)$ is the load angle. Firing earlier than $\phi$ gives no further increase in output.

### Components

| Component | Role |
|---|---|
| **SCR / TRIAC** | The controlled switch that sets the conduction angle. A TRIAC (one device, conducts both ways) suits low power; two SCRs in inverse-parallel suit high power. |
| **DIAC** (e.g. DB3) | Breaks over at about 30 V and gives a **sharp, symmetrical trigger pulse** to the TRIAC gate in both half cycles, which keeps firing stable. |
| **R** | Limits the gate current. |
| **VR** (potentiometer) | Changes the charging time of C, so it **sets the firing angle $\alpha$**. |
| **C** | Charges through VR and provides the **time delay** before the DIAC breaks over. |
| **Load** | R (heater, lamp) or R-L (motor winding). |

The **RC firing circuit** is the heart of the design: turning VR changes how fast C reaches the DIAC breakover voltage, and so changes $\alpha$.

### Group design

> **Load.** $R_{load} = \dfrac{V_s}{I_{load}} = \dfrac{240}{15} = 16\ \Omega$, $\quad P = V_s I_{load} = 240 \times 15 = 3600$ W ≈ **3.6 kW** at full conduction (a heater or industrial lamp load).
>
> **Timing capacitor.** $C_1 = 100$ nF, chosen so that it can charge within one half cycle (10 ms at 50 Hz):
> $X_C = \dfrac{1}{2\pi f C} = \dfrac{1}{2\pi \times 50 \times 100 \times 10^{-9}} \approx 31.8\ \text{k}\Omega$
>
> With the pot at its maximum, $R_2 C_1 = 270\ \text{k}\Omega \times 100\ \text{nF} = 27$ ms, longer than the 10 ms half cycle, so the firing can be pushed late enough to give a low output.
>
> **Final values:** TRIAC BTA12-600B, DIAC DB3, $R_1 = 600\ \Omega$, $R_2 = 270$ kΩ (pot), $R_3 = 330\ \Omega$, $C_1 = 100$ nF, supply 240 V 50 Hz.
>
> **Simulation.** In Proteus the load current, read on a series AC ammeter, changed with the firing angle, and the output showed the expected chopped (phase-controlled) sine wave.

> **Worked check.** With the same 16 Ω load at $\alpha = 90°$: $V_o = 240\sqrt{\tfrac{1}{\pi}\left(\tfrac{\pi}{2} + 0\right)} = 240/\sqrt2 = 169.7$ V, $\quad P_o = 169.7^2/16 = 1.8$ kW, exactly half of full power.

> **Correction: TRIAC rating.** The **BTA12-600B is rated 12 A rms**, which is **below the 15 A** design current. A **BTA16-600B (16 A)** is the minimum and a **BTA24/BTA25** gives a sensible margin, on a heatsink. The 600 V rating is fine for a 240 V supply (peak 339 V).

## 2. Inverter

An **inverter** converts **DC into AC** (a DC-to-AC converter). Inverters may be **single-phase** or **three-phase**, and each can be built as a **half-bridge** (two switches, output $\pm V_{DC}/2$) or a **full-bridge** (four switches, output $\pm V_{DC}$).

### The five stages of a full-bridge single-phase inverter

1. **DC input stage.** Supplies the DC to be inverted (12, 24, 48 or 60 V), usually from **batteries**, but also from a rectifier or chopper.
2. **Gate signal generation (PWM).** The control stage that decides when each MOSFET/IGBT turns on and off. Sine PWM (**SPWM**) compares a **sinusoidal reference** with a **triangular carrier**; the result is a series of pulses whose widths vary sinusoidally. It can be generated by a microcontroller (Arduino, STM32), a 555 timer, op-amp or RC oscillators, or a transistor astable multivibrator.
3. **Switching stage.** The heart of the inverter: the bridge rapidly reverses the direction of current through the load. **MOSFETs and IGBTs** are used for their high switching speed and efficiency.
4. **Transformer stage.** Steps the low AC voltage (e.g. 12 V) up to the appliance voltage (230 V). Toroidal or control transformers are common.
5. **Filtering and output.** An **LC low-pass filter** removes the switching-frequency content so the load sees a near-sinusoidal 50 Hz voltage.

### Key PWM parameters

| Parameter | Meaning | Typical value |
|---|---|---|
| **Switching frequency $f_{sw}$** | Frequency of the carrier, so of the switching | 5 to 20 kHz |
| **Duty cycle / modulation index** | Fraction of each period a switch is on; with SPWM it varies through the cycle and sets the output amplitude | $m_a = V_{ref}/V_{carrier} \le 1$ for linear control |
| **Dead time** | Short delay between turning one switch of a leg off and the other on, so the two never conduct together and **short the DC supply** (shoot-through) | 0.5 to 2 µs (MOSFET), 2 to 5 µs (IGBT) |

### Group design: LC output filter

> **Output current.** $P = 2300$ W at 230 V: $\ I_{rms} = \dfrac{2300}{230} = 10$ A, $\quad I_{peak} = \sqrt2 \times 10 = 14.14$ A
>
> **Inductor.** Allow a ripple of 20% of peak: $\Delta I_L = 0.2 \times 14.14 = 2.828$ A. With $V_{DC} = 48$ V and $f_{sw} = 10$ kHz,
> $L = \dfrac{V_{DC}}{4 f_{sw} \Delta I_L} = \dfrac{48}{4 \times 10\,000 \times 2.828} = 0.424$ mH
>
> **Cut-off frequency.** It must sit well above the 50 Hz fundamental and well below the switching frequency: $f_g \ll f_c \le f_{sw}/10$. The group chose $f_c = 300$ Hz.
>
> **Capacitor.** $f_c = \dfrac{1}{2\pi\sqrt{LC}} \Rightarrow C = \dfrac{1}{(2\pi f_c)^2 L} = \dfrac{1}{(2\pi \times 300)^2 \times 0.424 \times 10^{-3}} \approx$ **663 µF**
>
> **Simulation.** In Simulink the SPWM comparison, the pulse train, the unfiltered bridge output and the filtered sinusoidal voltage and current were all shown.

> **Correction: filter capacitor.** The slide gives $C = 100.7$ µF, which does not follow from $L = 0.424$ mH and $f_c = 300$ Hz. With 100.7 µF the cut-off would be $1/(2\pi\sqrt{0.424\,\text{mH} \times 100.7\,\mu\text{F}}) \approx 770$ Hz. Either use **≈ 663 µF** for 300 Hz, or keep 100.7 µF and state $f_c \approx 770$ Hz (still below $f_{sw}/10 = 1$ kHz). Note also that the 48 V and 10 A figures belong to different sides of the step-up transformer: on the 48 V side the current is about $230/48 \approx 4.8$ times larger, so state which side the filter is on.

## 3. Cyclo-converter

A **cyclo-converter** converts AC power at one frequency **directly** to AC at another frequency, **without an intermediate DC link**. Single-phase units are simpler and used at lower power; three-phase units are used in high-power industrial drives.

### Construction

| Part | Role |
|---|---|
| **Converter bridges** | Two anti-parallel thyristor converters: the **positive (P) group** carries the positive half of the output current and the **negative (N) group** the negative half. |
| **Firing circuit** | Sets the firing angles of the thyristors and the order in which the groups conduct, which fixes the output frequency and voltage. |
| **Transformer** | Steps the voltage up or down and isolates input from output (a centre-tapped transformer for the mid-point type). |
| **Filters** | Reduce harmonics and smooth the output. |
| **Snubbers** | RC networks that suppress voltage spikes and protect the thyristors during switching. |

### Classification

- **By phases:** single-phase to single-phase, three-phase to single-phase, three-phase to three-phase.
- **By output frequency:**
  - **Step-down** ($f_o < f_s$): mid-point type and bridge type. This is the practical, line-commutated cyclo-converter.
  - **Step-up** ($f_o > f_s$): mid-point type and bridge type. These need **forced commutation**, so they are rarely used.

**How a step-down cyclo-converter works.** The P group conducts for a whole number of input half cycles to build the positive output half cycle, then the N group does the same for the negative half. If each output half cycle spans $n$ input half cycles, then $f_o = f_s/n$: 25 Hz for $n = 2$, 16.67 Hz for $n = 3$, 12.5 Hz for $n = 4$. Varying $\alpha$ within the half cycle shapes the output closer to a sine and sets its amplitude.

> **Rule of thumb.** For a reasonable waveform the output frequency is limited to about **one third of the input frequency** (≈ 16 Hz from 50 Hz), which is why cyclo-converters suit **large, slow** machines.

### Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Direct AC–AC conversion in one stage, no DC link | Output frequency limited to a fraction of the input frequency |
| Natural (line) commutation, so simple thyristors can be used | **Many thyristors** (36 for a 3-phase bridge) and complex control |
| Power can flow both ways, so regeneration is possible | **Low and lagging input power factor**, worse at low output voltage |
| Smooth operation at low speed, good dynamic response | **Harmonics** in both input and output currents; filtering needed |

**Applications:** large, low-speed AC drives such as **cement and ball mills**, **mine winders**, **rolling mills**, **ship propulsion**, induction heating, and variable-speed constant-frequency (VSCF) aircraft supplies.

### Group design: single-phase 10 A cyclo-converter

> **Data.** $V_s = 230$ V rms, $f_s = 50$ Hz, $f_o = 13.333$ Hz, R-L load with $R = 5\ \Omega$, $L = 63$ mH, $I_o = 10$ A.
>
> **Load impedance.** $X_L = 2\pi f_o L = 2\pi \times 13.333 \times 0.063 = 5.28\ \Omega$, $\quad Z = \sqrt{5^2 + 5.28^2} = 7.27\ \Omega$
>
> **Output voltage.** $V_o = I_o Z = 10 \times 7.27 = 72.7$ V
>
> **Rating.** $S = V_s I_s = 230 \times 10 = 2.3$ kVA (taking $I_s = I_o$)
>
> **Converter and thyristor currents.** Each group carries half the cycle: $I_{C,rms} = I_P = I_N = \dfrac{I_o}{\sqrt2} = 7.07$ A, and each of the two thyristors in a group: $I_{TH,rms} = \dfrac{I_{C,rms}}{\sqrt2} = 5.0$ A
>
> **Firing angle.** Each group behaves like a phase-controlled full converter, $V_o = \dfrac{2V_m}{\pi}\cos\alpha$ with $V_m = \sqrt2 \times 230 = 325$ V:
> $\cos\alpha = \dfrac{72.7\,\pi}{2 \times 325} = 0.351 \Rightarrow \alpha \approx$ **69.4°**

> **Corrections to the group slides.**
> - **Firing angle.** The slide uses $2V_s/\pi$ with the **rms** voltage (230 V) instead of the **peak** $V_m = \sqrt2 V_s$, which gives 60.2°; with the peak it is **69.4°**. It then halves this to 30.1° "for a P and N channel ratio of 2"; there is **no basis** for that step, since each group has its own firing angle. (Strictly, 72.7 V is an rms value while $2V_m\cos\alpha/\pi$ is a mean value, so this is an approximation; using the rms phase-control formula of section 1 instead gives $\alpha \approx 133°$. State which method you use.)
> - **Output frequency.** "P conducts for one full input cycle, N for the next, one output cycle = 40 ms" describes **25 Hz**, not 13.333 Hz (whose period is 75 ms, i.e. 3.75 input cycles, not a whole number). With the simple scheme choose $f_o = 50/n$: 25, 16.67 or 12.5 Hz.
> - **Thyristor current.** $7.07/\sqrt2 = 5.0$ A, not 5.1 A.
> - **Harmonics.** The slides call cyclo-converter output both "low harmonic" and "harmonic rich". The output is rich in harmonics and the input power factor is poor; only a three-phase cyclo-converter at low output frequency gives a nearly sinusoidal output.
