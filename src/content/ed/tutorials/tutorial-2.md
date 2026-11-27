Tutorial II is about **motor starters**. Each question asks you to choose a starter and draw its main (power) and control circuits. The answers below choose the starter and give your reasons. They list every device in the main and control circuits and describe the switching sequence, so you can draw the diagrams from them.

**Symbols used:** Q = fused isolator or MCCB, F1 = thermal overload relay, F2 = control fuse, S0 = stop button (NC), S1/S2 = start buttons (NO), KM = contactor, KT = time-delay relay (timer), H = indicator lamp. Lamp colours follow IEC 60073: **green** = running, **amber** = transition or warning, **red** = fault (trip).

See *Starting induction motors* for the DOL, star–delta and auto-transformer basics.

## Question 1
A 25 hp slip-ring induction motor drives a printing machine at Habari newspaper factory. The motor must provide:
- forward and reverse rotation
- a three-step starting sequence
- a coloured indicator for each major operation

Propose the right type of starter, and draw well-labelled main and control circuit diagrams.

::: answer
**Starter:** an **automatic reversing rotor-resistance starter**, with three rotor resistance steps cut out by timers. This suits a slip-ring motor: it limits the starting current while giving high starting torque, and reversing contactors give both directions.

**Main circuit**

- L1, L2, L3 → **Q** (fused isolator) → **KM1** (forward) *or* **KM2** (reverse, two lines swapped) → **F1** (overload) → stator.
- Rotor slip rings → resistor bank **R1, R2, R3** per phase, star-connected. **KM3, KM4, KM5** short out one step each.

**Control circuit** (L → N)

1. F2 → F1 (NC) → S0 stop (NC).
2. **Forward branch:** S1 (NO), with KM1 holding contact in parallel → KM2 (NC interlock) → **KM1** coil. Lamp **H1** (green, "forward").
3. **Reverse branch:** S2 (NO), with KM2 holding contact in parallel → KM1 (NC interlock) → **KM2** coil. Lamp **H2** (green, "reverse").
4. A KM1 or KM2 NO contact starts timer **KT1**. KT1 closes **KM3** (step 1 out), which starts **KT2** → **KM4** (step 2 out) → **KT3** → **KM5** (rotor shorted, full speed). Lamp **H3** (amber) is on while starting, through KM5 NC.
5. F1 NO contact → lamp **H4** (red, "overload").

**Sequence:** press S1 (or S2) → motor starts with all resistance in → after $t_1$, $t_2$ and $t_3$ the steps are cut out → full speed. The mechanical and electrical **interlock** (KM1/KM2 NC contacts) stops both directions closing together. To reverse: press S0 first, then the other start button.
:::

## Question 2
A 25 kW two-speed induction motor drives the knife of a paper-cutting machine at Business Times newspaper factory. Requirements:
- i. for knife setting and adjustment, the motor must run at low and high speed
- ii. for paper cutting, up and down movement is required

Propose the right starter, and draw the main and control circuits with the switching sequence.

::: answer
**Starter:** a **two-speed (Dahlander, pole-changing) reversing starter**. One tapped winding gives **low speed in delta** (more poles) and **high speed in double star** (fewer poles). Two reversing contactors give the **up and down** movement.

**Main circuit**

- L1–L3 → **Q** → **KM1** (up / forward) or **KM2** (down / reverse) → then:
  - **KM3 (low):** to terminals 1U, 1V, 1W (delta), with **F1L** (low-speed overload).
  - **KM4 (high):** to 2U, 2V, 2W, with **F1H** (high-speed overload), and **KM5 (star point)** shorting 1U, 1V, 1W together to make the double star.

**Control circuit**

1. F2 control fuse → F1L and F1H (NC, in series) → S0 (NC).
2. **Direction:** S-UP → KM1 (holding) and S-DOWN → KM2 (holding), each interlocked by the other's NC contact.
3. **Speed:** S-LOW → KM3, interlocked by KM4 NC. S-HIGH → KM5, then KM4 through KM5 NO, both interlocked by KM3 NC.
4. Speed contactors only work once a direction contactor is in (KM1 or KM2 NO in series).
5. Lamps: up (green), down (green), low speed (white), high speed (blue), overload (red).

**Switching sequence**

| Operation | Contactors closed |
|---|---|
| Up, low speed | KM1 + KM3 |
| Up, high speed | KM1 + KM5 + KM4 |
| Down, low speed | KM2 + KM3 |
| Down, high speed | KM2 + KM5 + KM4 |

Low and high speed must never close together, and nor must up and down.
:::

## Question 3
A 220 V, 2500 rpm DC shunt motor with armature resistance 0.4 Ω drives a crusher. Requirements:
- a. three step resistors limit the starting current
- b. dynamic braking gives quick, smooth stopping
- c. constant-torque drive of the crusher
- d. the motor must be safe

Tasks:
- i. Draw the main and control circuits of an automatic DC motor starter, including speed control.
- ii. Show the device(s) responsible for each major function: starting, speed control and braking.
- iii. Draw the torque–speed characteristic and mark where the motor works.

::: answer
This question appears in the exam marking scheme.

**(i) Main circuit**

- DC supply (+) → **F1** main fuse → **M1** main contactor → armature, in series with **R1, R2, R3**. These are shorted in turn by **D1, D2, D3**.
- **M2** braking contactor connects the armature across a **braking resistor** when M1 opens.
- Shunt field across the supply through the **field regulator $R_{fc}$**, which gives speed control.
- **F2** thermal overload relay in the armature line.

**Control circuit:** F3 → F2 (NC) → S1 stop (NC) → S2 start (NO), with M1 holding contact → **M1** coil. Timers **T1 → T2 → T3** energise **D1 → D2 → D3** in turn. **M2** is energised through an M1 NC contact, so braking starts as soon as M1 drops out.

**(ii) Responsible devices**

| Function | Device |
|---|---|
| Short-circuit protection | F1 main fuse, F3 control fuse |
| Overload protection | F2 thermal overload relay |
| Starting (current limiting) | R1, R2, R3 with accelerating contactors D1, D2, D3, timed by T1, T2, T3 |
| Switching on and off | M1 main contactor, S1 and S2 |
| Speed control | $R_{fc}$ field regulator |
| Dynamic braking | M2 braking contactor and braking resistor |

**Starting current check:** without resistors, $I = 220/0.4 = 550$ A. The steps limit this to about 1.5 to 2 times rated current.

**(iii) Torque–speed curve:** torque is **constant** up to base speed (armature voltage control, power rising). Above base speed (field weakening with $R_{fc}$), **power is constant** and torque falls to $\omega_{max}$. The marking scheme shades the **field-control, constant-power region** from $\omega_{base}$ to $\omega_{max}$ as the working area. A constant-torque crusher works in the constant-torque region up to base speed, so mark that as well and say which you mean.
:::

## Question 4
A crane at Twiga cement factory lifts cement cargo and travels from one end of the factory to the other and back. It uses a slip-ring induction motor. The AC starter must:
- a. provide speed control and current limiting, with at least three steps
- b. include safety devices for protection
- c. give indicating signals for each major operation
- d. connect the motor windings in star when starting and running

Tasks:
- i. Name the starter and draw the main and control circuits.
- ii. Show the device(s) responsible for: a) short-circuit fault, b) overloading due to bearing misalignment, c) making and breaking of motor operation, d) limiting initial current inrush.
- iii. From the control circuit, show the device(s) for the three major functions of a contactor's auxiliary contacts.

::: answer
**(i) Starter:** an **automatic reversing rotor-resistance starter** (forward and reverse for travel), with at least **three rotor resistance steps** that also allow **speed control**. The stator stays **star-connected**.

**Main circuit:** L1–L3 → **Q** (MCCB/fused isolator) → **KM1** forward / **KM2** reverse → **F1** overload → star-connected stator. Rotor → resistor bank R1, R2, R3, stepped out by **KM3, KM4, KM5**.

**Control circuit:** as in Question 1. F2 → F1 → S0 → forward/reverse branches with holding contacts and interlocks → timers KT1, KT2, KT3 → KM3, KM4, KM5. For speed control, a selector switch can hold some steps in, giving lower speeds. **Limit switches** at each end of the track stop travel. Lamps: forward (green), reverse (green), accelerating (amber), overload (red).

**(ii) Responsible devices**

| Condition | Device |
|---|---|
| a) Short-circuit fault | Fuses / MCCB **Q**, control fuse **F2** |
| b) Overloading (e.g. bearing misalignment) | Thermal overload relay **F1** |
| c) Making and breaking motor operation | Main contactors **KM1, KM2**, with buttons S0, S1, S2 |
| d) Limiting initial current inrush | **Rotor resistances R1–R3**, cut out by KM3–KM5 |

**(iii) Functions of auxiliary contacts**

1. **Holding (self-latching):** the NO contact of KM1 across S1 keeps the coil energised after S1 is released.
2. **Interlocking:** the NC contact of KM1 in the KM2 branch, and vice versa, stops forward and reverse closing together.
3. **Signalling and sequencing:** NO contacts light the indicator lamps and start the next timer or contactor.
:::

## Question 5
A three-phase AC hoist motor on a crane in a steel rolling mill is started with a rotor resistance circuit. The circuit must meet these requirements:
- i. contactors operated from two positions with push buttons
- ii. overload protection
- iii. pilot lamps showing when each contactor is ON
- iv. switching from step one to step four automatically, through time relays
- v. contactor coil voltage of 415 V, 50 Hz

Draw the main and control circuits.

::: answer
**Main circuit:** L1–L3 → **Q** → **KM1** main contactor → **F1** overload → stator. Rotor → four resistance steps, shorted in turn by **KM2, KM3, KM4, KM5**.

**Control circuit** (fed **line-to-line, L1–L2 = 415 V**, so the 415 V coils need no neutral):

1. F2 control fuse → F1 overload (NC).
2. **Two-position control:** stop buttons **S0a** (local) and **S0b** (remote) **in series**. Start buttons **S1a** and **S1b** **in parallel**, with the KM1 holding contact across them.
3. **KM1** coil, then a KM1 NO contact energises timer **KT1** → **KM2** (step 1 out) → **KT2** → **KM3** → **KT3** → **KM4** → **KT4** → **KM5** (rotor shorted).
4. A pilot lamp in parallel with each contactor coil, H1 to H5, shows it is ON. A red lamp on the F1 NO contact shows an overload trip.

Stops in series and starts in parallel is the rule for control from more than one position: any stop button can stop the motor, and any start button can start it.
:::

## Question 6
A 30 hp pole-change two-speed induction motor drives a printing machine at MWANANCHI newspaper factory. It must provide:
- a. low and high-speed operation
- b. forward and reverse operation
- c. a signal for each major action, with an appropriate coloured indicator

Propose the starter and draw the main and control circuits with the switching sequence.

::: answer
**Starter:** a **two-speed (Dahlander) reversing starter**, the same arrangement as Question 2.

- **Direction:** KM1 forward, KM2 reverse, electrically and mechanically interlocked.
- **Speed:** KM3 low speed (delta). KM4 high speed with KM5 star point (double star). Interlocked against KM3.
- **Protection:** Q (MCCB), separate overload relays for the low- and high-speed windings, control fuse.

| Operation | Contactors | Indicator |
|---|---|---|
| Forward, low | KM1 + KM3 | Green "FWD" + white "LOW" |
| Forward, high | KM1 + KM5 + KM4 | Green "FWD" + blue "HIGH" |
| Reverse, low | KM2 + KM3 | Green "REV" + white "LOW" |
| Reverse, high | KM2 + KM5 + KM4 | Green "REV" + blue "HIGH" |
| Overload trip | (all open) | Red "TRIP" |

Good practice: start in **low speed** and change to high speed after a short delay (a timer or a second button), to limit current and mechanical shock. Always stop before reversing.
:::

## Question 7
The firing circuit for the power converter of a three-phase DC drive with a separately excited motor has a firing angle in the range $0° \le \alpha \le 180°$.
- i. Draw the circuit diagram.
- ii. Give the output voltage equations for the armature and field circuits, and the power limits in different applications.

::: answer
**(i) Circuit:** a firing range of 0° to 180° means a **three-phase fully controlled (six-thyristor) bridge** feeding the **armature**, through a smoothing inductor. The **field** has its own converter: a three-phase or single-phase full converter (or a semi-converter), so the field can be weakened above base speed.

**(ii) Equations** ($V_m$ = peak phase voltage, $V_L$ = line voltage):

$$V_a = \frac{3\sqrt3\,V_m}{\pi}\cos\alpha_a = 1.35\,V_L\cos\alpha_a \qquad V_f = \frac{3\sqrt3\,V_m}{\pi}\cos\alpha_f$$

If the field uses a three-phase semi-converter: $V_f = \dfrac{3\sqrt3\,V_m}{2\pi}(1 + \cos\alpha_f)$.

- $0° < \alpha < 90°$: $V_a > 0$, **motoring** (quadrant I).
- $90° < \alpha < 180°$: $V_a < 0$. With the back EMF reversed by the load (an overhauling hoist), the drive **regenerates** (quadrant IV).

**Power limits:** single-phase converter drives are limited to about **15 kW**. Three-phase full-converter drives are used **above about 15 kW**, up to the **megawatt** range: rolling mills, paper machines, hoists and traction. They have lower ripple and a higher ripple frequency (6 × supply frequency). For four-quadrant operation, use a **three-phase dual converter**.
:::

## Question 8
A 35 kW induction motor drives a milling machine at Bakharesa Flour Mills Ltd. At starting, the motor gets 58% of full-load voltage; after 20 s it reaches full-load speed at full voltage. When disturbances occur in production, the direction may need to be reversed. The starter must:
- a. fulfil all major functions of an AC starter
- b. give coloured signals for starting, running and overloading
- c. switch the time-delay relay off once full-load speed is reached

Tasks:
- i. Name the AC starter and give two concrete reasons for your choice.
- ii. Draw the main and control circuits. (Changing the winding configuration is done at the motor terminals.)

::: answer
This question appears in the exam marking scheme.

**(i) Starter:** a **reversing star–delta starter**, because:

1. 58% is $1/\sqrt3$. Star connection gives each winding exactly $V_L/\sqrt3 = 0.58\,V_L$ at starting.
2. 35 kW is within the usual star–delta range (about **7.5 kW to 55 kW**), and the windings can be reconnected at the motor terminals.

**(ii) Main circuit:** L1–L3 → **Q** fused isolator → **KMF** forward / **KMR** reverse (two lines swapped, interlocked) → **F1** overload → motor U1, V1, W1. Motor U2, V2, W2 → **KMΔ** (to the supply lines, for delta) or **KMY** (shorting U2, V2, W2 together, for star).

**Control circuit:**

1. F2 → F1 (NC) → S0 stop.
2. S1 (forward) → KMF, and S2 (reverse) → KMR, each with a holding contact and the other's NC interlock.
3. A KMF or KMR NO contact energises timer **KT** (set to **20 s**) and **KMY** through **KT NC** and **KMΔ NC**.
4. After 20 s, KT changes over: KMY drops out, and **KMΔ** closes through **KT NO** and **KMY NC**.
5. A **KMΔ NC contact in series with the KT coil** switches the timer **off** once the motor is in delta, as requirement c asks.

**Signals:** amber lamp across KMY ("starting"), green lamp across KMΔ ("running"), red lamp on the F1 NO contact ("overload").

**Device key** (as in the marking scheme): Q fused isolator; M main contactor; MY star contactor; MΔ delta contactor; T timer; F1 overload relay; F2 control fuse; S1 stop; S2 start; LY star lamp; LΔ delta lamp.
:::
