Tutorial I covers the whole course: drive basics, AC drive control, heating and duty, starting, and three calculations. The answers are written from the module notes. Where a topic goes beyond the notes, the answer says so.

## Question 1
Define drive and electric drive.

::: answer
- A **drive** is a system that provides **controlled motion** to a load using a prime mover: the system used to get the required motion and control it smoothly.
- An **electric drive** is a drive that uses an **electric motor** as its prime mover for motion control.
:::

## Question 2
List some examples of prime movers.

::: answer
Electric motors, diesel and petrol engines, steam and gas turbines, hydraulic motors and pneumatic cylinders.
:::

## Question 3
List some advantages of electric drives.

::: answer
1. Speed and torque are easy to control over a wide range, for example a VFD on a pump.
2. Starting and braking are efficient, with simple control gear. Regenerative braking saves energy.
3. High efficiency, low losses and good overload capacity.
4. Long life, low noise and low maintenance.
5. They can operate in all four quadrants of the speed–torque plane.
6. They run on electricity, which is easy to transmit and handle, and they are clean.
7. PLCs and microcontrollers make accurate automatic control easy.
:::

## Question 4
Give some examples of electric drives.

::: answer
Fans, ventilators, compressors and pumps; hoists and cranes; conveyors in factories and mines; lifts and escalators; electric trains, trams and locomotives; electric vehicles; rolling mills and paper machines.
:::

## Question 5
What are the types of electric drives?

::: answer
- By supply: **DC drives** and **AC drives**.
- By number of machines: **group**, **individual** and **multi-motor** drives.
:::

## Question 6
What is a multi-motor electric drive? Give some examples.

::: answer
A drive with **several motors**, each driving **one working part** of a single machine independently.

Examples: rolling mills, paper-making machines, metal-cutting machine tools, cranes (separate hoist, traverse and travel motors), electric locomotives.
:::

## Question 7
Give an expression for the losses occurring in a machine.

::: answer
$$\text{Total losses} = \text{copper} + \text{core (iron)} + \text{mechanical} + \text{stray losses}$$

Grouped by how they change with load:

$$W = W_c + x^2W_v$$

where $W_c$ is the constant loss, $W_v$ the copper loss at full load, and $x$ the load as a fraction of rated load.
:::

## Question 8
Mention the most commonly used electrical machines for speed control applications.

::: answer
- **DC motors:** separately excited, shunt, series and compound.
- **Induction motors:** squirrel-cage and slip-ring (wound-rotor).
- **Synchronous motors**, including reluctance motors.
- **Special motors:** brushless DC and stepper motors.
:::

## Question 9
What is the function of modulators?

::: answer
The power modulator (power converter) sits between the source and the motor. It:

1. **converts** the electrical energy into the form the motor needs (AC to DC, DC to AC, DC to DC, or a change of frequency)
2. **controls the flow of power** to the motor, to give the speed–torque characteristic the load needs
3. **limits the current** during transients (starting, braking, reversing) to avoid voltage dips and overloads
4. **selects the mode** of operation: motoring or braking
:::

## Question 10
Types of power modulators.

::: answer
Power converters:

| Converter | Conversion |
|---|---|
| Controlled rectifier | AC → DC |
| AC voltage controller (regulator) | AC → AC, same frequency |
| Chopper (buck, boost, buck-boost) | DC → DC |
| Inverter | DC → AC |
| Cyclo-converter | AC → AC, new frequency |

Variable impedances (resistors in the armature or rotor circuit) and switching circuits (contactors for starting, reversing and braking) are also used as modulators.
:::

## Question 11
Draw and explain conventional electric drives (variable speed).

::: answer
The classic variable-speed drive is the **Ward-Leonard system**:

**AC motor → DC generator (with field control) → DC motor (fixed field) → load**

- A constant-speed AC motor drives a DC generator.
- The generator's armature feeds the DC motor's armature directly.
- Varying the **generator field current** varies the generator voltage, and so the motor speed, smoothly from zero up to base speed. Reversing the generator field reverses the motor.
- Above base speed, the **motor field** is weakened.

**Features:** smooth speed control in all four quadrants, with natural regenerative braking. **But** it needs three machines of full rating, so it is large, costly, noisy, has low efficiency and needs a lot of maintenance. Power-electronic drives have replaced it.
:::

## Question 12
Draw modern electric drives (with power electronic converters).

::: answer
**Supply → power electronic converter → motor → load**, with **sensors** feeding speed, current and position back to a **controller** that sets the converter's switching. The converter is a controlled rectifier or chopper for a DC motor, and an inverter (VFD) for an AC motor.

This is the block diagram in the chapter *Introduction to electric drives*. Compared with the Ward-Leonard set, a modern drive is smaller, more efficient, faster to respond and almost maintenance-free.
:::

## Question 13
Mention ten factors influencing the choice of the type of load and drive motor.

::: answer
1. Nature of the electric supply: AC or DC, voltage, frequency.
2. Nature of the drive: individual, group or multi-motor.
3. Speed–torque characteristics the load needs.
4. Speed range and speed regulation required.
5. Starting, braking and reversing requirements.
6. Duty cycle and rating: continuous, short-time or intermittent.
7. Overload capacity.
8. Environment: dust, moisture, fire risk (sets the enclosure).
9. Space and weight limits.
10. Capital and running cost, efficiency and maintenance.
:::

## Question 14
What is the main drawback of the VSI induction motor drive?

::: answer
*Beyond the notes.* In a voltage source inverter (VSI) drive, the DC link is fed by a **diode rectifier**, so power **cannot flow back to the supply**. Regenerative braking needs an extra converter or a braking resistor.

A six-step VSI also has a high **harmonic content**. This causes extra losses and **torque pulsations at low speed**. PWM inverters reduce the harmonics.
:::

## Question 15
Explain the current source inverter (CSI) control of an induction motor drive.

::: answer
*Beyond the notes.*

- A **controlled rectifier** and a large **DC-link inductor** form a **current source**. The inverter's thyristors switch this constant current between the motor phases.
- The rectifier's firing angle sets the current, and so the torque. The inverter's switching frequency sets the speed.
- **Advantages:** inherent short-circuit protection, and simple **regeneration**: the rectifier simply moves into inverting mode ($\alpha > 90°$).
- **Disadvantages:** it must run in **closed loop**; the inductor is large and heavy; there are current spikes and torque pulsations at low speed; and it suits only a single motor.
:::

## Question 16
Explain slip energy recovery of an induction motor drive.

::: answer
In rotor resistance control, the slip power $sP_g$ is wasted as heat. **Slip energy recovery** feeds it back instead.

**Static Kramer drive:** the rotor output is rectified by a diode bridge, smoothed by an inductor, and returned to the supply through a **line-commutated inverter** and transformer. The inverter's firing angle sets a counter-voltage in the DC link, which sets the slip and so the speed. Speed control is below synchronous speed only.

**Static Scherbius drive:** the rotor is fed by a cycloconverter or back-to-back converters, so power can flow both ways. This gives speeds above and below synchronous.

Efficiency is high because the slip power is recovered rather than burnt. See *AC drives* (slip power recovery).
:::

## Question 17
Where is this method used?

::: answer
Large slip-ring motors driving **pumps, fans, blowers and compressors** that need only a limited speed range below synchronous speed. It is also used in wind-turbine generators (doubly-fed) and in large rolling-mill and cement-kiln drives.
:::

## Question 18
Explain static rotor resistance control of an induction motor drive.

::: answer
- The rotor of a slip-ring motor is connected to a **three-phase diode bridge**. Its DC output feeds a fixed resistor $R$ shunted by a **chopper** (with a smoothing inductor).
- The chopper's duty ratio $k$ sets the **effective resistance** $R_e = R(1-k)$.
- Raising $R_e$ moves maximum torque to a higher slip, so the speed falls for a given load torque.
- In closed loop, the controller adjusts $k$ to hold the set speed.

The chapter *AC drives* has a full worked example (slip power control with a chopper).
:::

## Question 19
Limitations of static rotor resistance control.

::: answer
- Works only for **slip-ring** (wound-rotor) motors.
- Speed can only be reduced **below synchronous speed**.
- **Low efficiency** at low speed, because the slip power is burnt in $R$.
- Speed regulation is poor in open loop.
- The rotor current is non-sinusoidal, causing harmonics and extra losses.
:::

## Question 20
Advantages of static rotor resistance control.

::: answer
- **Smooth, stepless** speed control with no moving contacts.
- **High starting torque** with low starting current.
- Fast response and easy closed-loop control.
- The extra heat is dissipated **outside** the motor, in the external resistor.
- Simple and cheap: a diode bridge, a chopper and a resistor.
:::

## Question 21
Disadvantages of the rotor resistance control method.

::: answer
- Poor efficiency: slip power $sP_g$ is wasted as heat.
- Speed changes with load (poor regulation) unless closed-loop control is used.
- Only speeds below synchronous are possible.
- Bulky resistors are needed, and the motor must be a costlier slip-ring type.
:::

## Question 22
Application of static rotor resistance control.

::: answer
Drives that need speed control mostly at low speed for short periods, or that run near full speed most of the time: **cranes, hoists and lifts**, intermittent-load **pumps and fans**, and traction-type loads.
:::

## Question 23
Explain four methods used in reducing energy loss in motors during transient operation.

::: answer
1. **Reduce the inertia** of the moving parts. Energy lost in starting and braking is proportional to the stored kinetic energy $\tfrac12J\omega^2$. Use a lighter rotor, or two smaller motors instead of one big one.
2. **Start with a gradually rising supply voltage** (for DC motors). The armature current stays near rated, and no energy is burnt in starting resistors.
3. **Start with a gradually rising supply frequency** (induction motors on a VFD). Slip stays small, so rotor copper loss during starting is much lower.
4. **Use pole-changing motors:** start at the low speed (more poles), then switch to high speed. Starting energy loss is roughly halved.

**Regenerative braking**, which returns kinetic energy to the supply, also cuts transient losses.
:::

## Question 24
List types of electric drives:
- (i) according to mode of operation
- (ii) according to means of control
- (iii) according to number of machines
- (iv) according to dynamics and transients

::: answer
| Basis | Types |
|---|---|
| Mode of operation | Continuous duty, short-time duty, intermittent duty |
| Means of control | Manual, semi-automatic, automatic |
| Number of machines | Individual, group, multi-motor |
| Dynamics and transients | Drives with an uncontrolled transient period, and drives with a controlled transient period |
:::

## Question 25
Classify electric drives based on the means of control.

::: answer
- **Manual:** a switch and a regulator set the speed, like a room fan.
- **Semi-automatic:** a manual device gives a command (start, brake, reverse, change speed), and an automatic device then runs the drive through a preset sequence.
- **Automatic:** control gear runs the drive with no manual devices, using sensors such as limit, float, pressure and proximity switches.
:::

## Question 26
What are the types of drive systems?

::: answer
Electrical drives, mechanical drives, electromechanical drives, hydraulic drives and pneumatic drives.
:::

## Question 27
How does heating occur in motor drives?

::: answer
The motor's **losses** (copper loss in the windings, iron loss in the core, friction and windage) are turned into **heat**.

Part of this heat raises the motor's temperature, and the rest is dissipated to the surroundings. Treating the motor as a homogeneous body:

$$C\frac{d\theta}{dt} + D\theta = P_1 \quad\Rightarrow\quad \theta = \theta_{ss}\left(1 - e^{-t/\tau}\right) + \theta_1e^{-t/\tau}$$

The temperature rises exponentially until heat dissipated equals heat produced, at $\theta_{ss} = P_1/D$. The **insulation class** limits how high this may go.
:::

## Question 28
What are the classes of duties?

::: answer
| Class | Duty |
|---|---|
| S1 | Continuous duty |
| S2 | Short-time duty |
| S3 | Intermittent periodic duty |
| S4 | Intermittent periodic duty with starting |
| S5 | Intermittent periodic duty with starting and braking |
| S6 | Continuous duty with intermittent periodic loading |
| S7 | Continuous duty with starting and braking |
| S8 | Continuous duty with periodic speed changes |
:::

## Question 29
List some applications for which continuous duty is required.

::: answer
Pumps, fans and blowers, compressors, conveyors, paper-making machines, textile machines and centrifugal machines.
:::

## Question 30
Why are the losses at starting not a factor of consideration in a continuous duty motor?

::: answer
A continuous-duty motor is started **rarely** and then runs for a long time. The extra heat produced during the short starting period is tiny compared with the heat produced over the long run, so it hardly affects the final temperature.
:::

## Question 31
Define heating time constant and cooling time constant.

::: answer
- **Heating time constant** $\tau = C/D$: the time for the temperature rise to reach **63.2%** of its final value. It is also the time to reach the final value if the initial rate of rise were kept up.
- **Cooling time constant** $\tau' = C/D'$: the time for the temperature rise to fall to **36.8%** of its initial value when the motor cools. It is usually longer than $\tau$, because ventilation is poorer at rest.
:::

## Question 32
What are the various functions performed by an electric drive?

::: answer
It converts electrical energy into mechanical energy, controls the speed and torque as the load requires, and starts, brakes, reverses and stops the machine. It also protects the motor and the load.
:::

## Question 33
Define four-quadrant operation.

::: answer
The operation of a drive in all four quadrants of the speed–torque plane:

| Quadrant | Speed | Torque | Mode |
|---|---|---|---|
| I | + | + | Forward motoring |
| II | + | − | Forward braking |
| III | − | − | Reverse motoring |
| IV | − | + | Reverse braking |

A hoist is the standard example.
:::

## Question 34
Why does a single-phase induction motor not self-start?

::: answer
A single stator winding produces a **pulsating** magnetic field, not a rotating one. It can be split into two equal fields rotating in opposite directions, whose torques cancel at standstill. The **net starting torque is zero**, so an auxiliary winding or capacitor is needed to start it.
:::

## Question 35
Explain how a DC shunt motor can be started by smooth variation of the applied voltage.

::: answer
- Keep the **field at full strength** and apply the armature voltage from a variable source: a Ward-Leonard generator, a controlled rectifier or a chopper.
- Start at **low voltage**. With the motor at rest, the current is $V/R_a$, so a small $V$ keeps it within limits.
- **Raise the voltage gradually.** As the speed and back EMF rise, the current stays roughly constant, so the motor accelerates at constant torque.
- No starting resistors are needed, so there is **no resistor loss**, and starting is smooth.
:::

## Question 36
Explain how an induction motor can be started by smooth variation of the supply frequency.

::: answer
- Feed the motor from a **variable-frequency inverter (VFD)** and start at a **low frequency**, with voltage in proportion ($V/f$ constant).
- At low frequency the synchronous speed is low, so the **slip is small**. Starting current is therefore low, while flux, and so torque, is near rated.
- **Raise frequency and voltage together.** The motor follows the rising synchronous speed with small slip all the way to full speed.
- Result: low starting current, high starting torque and low starting losses.
:::

## Question 37
Practical: implement a four-quadrant single-phase rectifier DC drive with circulating current.

::: answer
**Circuit:** two single-phase **full converters** connected back to back (a **dual converter**) across the armature, with **reactors** between them to limit the circulating current. The field is fed separately.

- Converter 1 gives positive armature current (quadrants I and IV). Converter 2 gives negative current (quadrants II and III).
- **Circulating-current mode:** both converters are fired at once, with $\alpha_1 + \alpha_2 = 180°$, so their average voltages are equal. One acts as a rectifier and the other as an inverter.
- A circulating current flows between them through the reactors. Both always conduct, so the **current reverses smoothly and quickly**, with no dead time.
- **Test plan:** run forward (α₁ < 90°), brake regeneratively (α₁ > 90°), reverse, and record speed, armature voltage and current in each quadrant.
:::

## Question 38
A 400 V, 15 kW DC shunt motor takes 42 A and runs at 1200 rpm. The shunt field resistance is 200 Ω. Load torque varies as the square of the speed. Neglect iron and friction losses and armature reaction. Calculate:
- a) the resistance to be connected in series with the armature to reduce the speed to 1000 rpm
- b) the voltage to be applied to the armature for 1000 rpm, if control is by the Ward-Leonard method

::: answer
**Find $R_a$.** $I_f = 400/200 = 2$ A, so $I_a = 42 - 2 = 40$ A.

Input $= 400 \times 42 = 16\,800$ W. Neglecting iron and friction losses, losses $= 16\,800 - 15\,000 = 1800$ W. Field loss $= 400 \times 2 = 800$ W, so armature loss $= 1000$ W:

$$R_a = \frac{1000}{40^2} = 0.625\ \Omega, \qquad E_1 = 400 - 40(0.625) = 375\ \text{V}$$

**New current.** With constant field, $T \propto I_a$ and $T \propto N^2$:

$$I_{a2} = 40\left(\frac{1000}{1200}\right)^2 = 27.78\ \text{A}, \qquad E_2 = 375 \times \frac{1000}{1200} = 312.5\ \text{V}$$

**(a)** $400 - 27.78(0.625 + R) = 312.5 \Rightarrow 0.625 + R = 3.15 \Rightarrow R = 2.525\ \Omega$

**(b)** Ward-Leonard: $V = E_2 + I_{a2}R_a = 312.5 + 27.78(0.625) = 329.9$ V
:::

## Question 39
A motor operates on a periodic duty cycle: clutched to its load for 10 min, then declutched and run on no load for 20 min. Minimum temperature rise is 40 °C. Heating and cooling time constants are equal, with a value of 10 min. When the load is declutched continuously, the temperature rise is 15 °C. Determine:
- i. the maximum temperature during the duty cycle
- ii. the temperature when the load is clutched continuously

::: answer
This is the class example in *Heating, cooling and motor rating*. The class solution uses $\tau = \tau' = 60$ min.

Heating for 10 min from 40 °C:

$$\theta_2 = \theta_{ss}\left(1 - e^{-10/60}\right) + 40e^{-10/60} = 0.1535\,\theta_{ss} + 33.86$$

Cooling for 20 min from $\theta_2$ towards 15 °C, back to 40 °C:

$$40 = 15\left(1 - e^{-20/60}\right) + \theta_2e^{-20/60} \quad\Rightarrow\quad \theta_2 = 49.9\ \text{°C}$$

**(i)** Maximum temperature rise $= 49.9$ °C

**(ii)** $49.9 = 0.1535\,\theta_{ss} + 33.86 \Rightarrow \theta_{ss} = 104.5$ °C

> With $\tau = 10$ min exactly as printed, the same steps give $\theta_2 \approx 200$ °C and $\theta_{ss} \approx 293$ °C. These are unrealistic, which is why the class used 60 min.
:::

## Question 40
A motor fitted with a flywheel supplies a load torque of 100 N·m for 10 s, followed by a light-load period of 200 N·m long enough for the flywheel to regain steady-state speed. The motor torque must be limited to 700 N·m. What should the flywheel's moment of inertia be? The motor's inertia is 10 kg·m², its no-load speed is 500 rpm, and its slip at 500 N·m is 5%. Assume a straight-line speed–torque characteristic.

::: answer
*The sheet prints the heavy load as 100 N·m. It must be 1000 N·m (a typo), because the heavy load has to exceed both the light load (200 N·m) and the 700 N·m limit.*

**Motor characteristic.** $\omega_0 = 2\pi(500)/60 = 52.36$ rad/s. Speed drop at 500 N·m $= 0.05 \times 52.36 = 2.618$ rad/s, so the slope is

$$\frac{\Delta\omega}{\Delta T} = \frac{2.618}{500} = 5.236\times10^{-3}\ \text{rad/s per N}\cdot\text{m}$$

**Motor torque during the heavy load**, starting from the light-load torque 200 N·m:

$$T_m = T_L - (T_L - T_0)e^{-t/\tau_m} \quad\Rightarrow\quad 700 = 1000 - 800e^{-10/\tau_m}$$

$$e^{-10/\tau_m} = 0.375 \quad\Rightarrow\quad \tau_m = \frac{10}{\ln(1/0.375)} = 10.2\ \text{s}$$

**Inertia.** The mechanical time constant is $\tau_m = J\dfrac{\Delta\omega}{\Delta T}$:

$$J = \frac{10.2}{5.236\times10^{-3}} = 1947\ \text{kg}\cdot\text{m}^2$$

Flywheel inertia $= 1947 - 10 = \mathbf{1937\ kg·m^2}$
:::
