# Types and classification of drives

*Lecture 2 · EEU 08102 Electric Drives*

## About this module

| | |
|---|---|
| Module | EEU 08102 Electric Drives, 12 credits |
| Assessment | Continuous assessment 40%, end examination 60% |
| Learning context | Tutorials and laboratory work, with modelling and simulation in MATLAB |

**Sub-enabling outcomes**

- Describe motor dimensioning through torque and power.
- Identify characteristics of typical process (production) equipment.
- Describe a simple thermal model of AC machines.
- Identify different methods of motor selection.
- Model motor selection methods for different applications.
- Formulate case studies on motor selection for different process equipment.

**Required references:** M. El-Sharkawi, *Fundamentals of Electric Drives* (2018); I. Boldea and S. A. Nasar, *Electric Drives* (2016).

## Parts of every machine

Every machine in a modern factory or transport system has three parts:

1. a **prime mover**, the motor or engine (the drive)
2. a **transmission system**, such as belts or gears
3. the **working machine** itself

> An **electric drive** is machine equipment designed to **convert electrical energy into mechanical energy** and to provide **electrical control** of that process.

## DC drives and AC drives

- **DC drive:** the speed of a DC motor is controlled by a power converter, and the motor is coupled to the load.
- **AC drive:** the speed of an AC motor is controlled by a power converter (source → converter → AC motor → load). Its main purpose is to vary motor speed.

| DC drives | AC drives |
|---|---|
| Power and control circuits are simple and cheap | Power and control circuits are complex |
| Need frequent maintenance | Need little maintenance |
| The commutator makes the motor bulky, costly and heavy | Motors are cheaper and lighter, especially squirrel-cage induction motors |
| Fast response and a wide, smooth speed range | Speed range is wide with solid-state control, but stepped and limited with conventional methods |
| Speed and power ratings are limited by commutation | Speed and design ratings have higher upper limits |

### Motor characteristics

- **DC motors:** regular maintenance, heavy, expensive, limited speed. But **easy control**, because torque and flux are **decoupled**.
- **AC motors:** little maintenance, light, cheap, high speed. But torque and flux are **coupled**, because the angle between rotor and stator flux varies.

## A short history

| Period | What happened |
|---|---|
| Before 1950 | AC motors for **fixed speed**; DC motors for **variable speed** |
| 1950s, semiconductors arrive | Variable-frequency sources let AC motors run at variable speed, but only in medium-performance jobs (fans, blowers, compressors) using **scalar control**. High-performance jobs (traction, lifts, servos) stayed with DC |
| 1980s, vector control | AC motors take over high-performance applications too. Control is complex, but falling semiconductor and processor costs make AC the favourite |

## Types of drive systems

Electric drives are one of several kinds of drive system on the market:

1. **Electrical drives**
2. **Hydraulic drives**
3. **Electromechanical drives**
4. **Mechanical drives**
5. **Pneumatic drives**

## Classification by means of control

| Control | How it works |
|---|---|
| **Manual** | As simple as a room fan: a switch and a resistance (regulator) to set the required speed |
| **Semi-automatic** | A manual device gives a command (start, brake, reverse, change speed), and an automatic device then runs the drive through a **preset sequence** in response |
| **Automatic** | The control gear runs the drive with **no manual devices** at all |

## Classification of electric drives

### 1. Group drive (line-shaft drive)

One motor drives a **line shaft**, and a group of machines takes power from it through pulleys and belts or gears. Used in simple metal working, some household appliances, the textile industry and paper mills.

**Advantages**

- One large motor replaces several small ones.
- Because loads are diverse, the single motor can be rated lower and runs near full load, giving **better efficiency and power factor**.

**Disadvantages**

- Not flexible: adding a machine is difficult.
- If the main motor fails, **every machine stops**.
- Noisy and less safe.
- Belts and pulleys waste a lot of energy, so **power loss is high** and the drive's **efficiency is low**.
- The **whole system shuts down** whenever the motor needs servicing or repair.

### 2. Individual drive

Each machine has **its own motor**, which also drives the machine's moving parts. Examples: single-spindle drilling machines, lathes.

- **Advantages:** machines can be placed anywhere; production continues reliably; one motor fault does not stop the whole plant.
- **Disadvantage:** high initial cost.

### 3. Multi-motor drive

Several individual drives, each moving **one working part** of a machine. Examples: metal-cutting machine tools, paper-making machines, rolling mills, cranes.

> **Crane example:** three motors, one each for hoisting (vertical), traverse (side) and travel (forward) motion. Each works separately and the operator coordinates them.

## Review questions with answers

1. **Define a drive and an electric drive.** A drive is a system that provides controlled motion to a load using a prime mover. An electric drive is a drive that uses an electric motor as the prime mover for motion control.
2. **Examples of prime movers:** electric motors, diesel engines, steam turbines, gas turbines, hydraulic motors.
3. **Advantages of electric drives:** wide and smooth speed control; high efficiency and reliability; easy starting, braking and reversal; low maintenance cost; clean, environmentally friendly operation.
4. **Examples of electric drives:** driving fans, ventilators, compressors and pumps; lifting goods with hoists and cranes; moving conveyors in factories, mines and warehouses; running excavators, escalators, electric locomotives, trains, cars, trolley buses, lifts and drum winders; electric vehicles.
5. **Types of electric drives:** individual, group and multi-motor drives.
6. **Multi-motor drive:** uses more than one motor to drive different parts of a single machine independently. Examples: rolling mills, paper mills, cranes, hoists, electric locomotives.
7. **Losses in a machine:**

$$\text{Total losses} = \text{copper losses} + \text{core (iron) losses} + \text{mechanical losses} + \text{stray losses}$$

Grouping them into constant and variable losses:

$$W = W_c + x^2 W_v$$

where $W_c$ is the **constant loss** (core and mechanical), $W_v$ the **variable (copper) loss at full load**, and $x$ the load as a fraction of rated load ($x = 1$ at full load, $x = 0.5$ at half load).

### More questions from class

8. **What types of drive system are there?** Electrical, mechanical, electromechanical, hydraulic and pneumatic drives.
9. **List the basic elements of an electric drive.** Power source, power converter (modulator), motor, sensing unit and control unit.
10. **What does the power modulator do?** It modulates the power flow from the source to the load through the motor, and converts DC to AC or AC to DC as needed.
11. **Classify electric drives by means of control.** Manual, semi-automatic and automatic.
12. **Mention the main types of motor used in electric drives.** DC motors (shunt, series, compound), AC motors (induction, synchronous), and special motors (brushless DC, stepper).
13. **Name three fundamental elements of an electric drive.** The electric motor, the transmission system and the electrical control.
14. **What causes the unavoidable power losses in an electric motor?** Core loss from the alternating magnetisation of the iron core, and the resistance of the windings.
15. **Differentiate a group drive from a multi-motor drive.** A group drive uses **one motor** for **many machines** through a line shaft. A multi-motor drive uses **many motors** for the parts of **one machine**.
16. **What is the main function of an electric drive?** To impart motion to the working machine.
17. **Give two functions of the controller.** To implement the control strategy governing the load and motor characteristics, and to match the motor to the load.
18. **Why use variable-speed drives?** Energy savings of 50% or more, velocity and position control, and fewer mechanical transients.
19. **What is the main purpose of a drive?** To meet a specific mechanical load requirement.
20. **Advantages and disadvantages of a group drive?** See the group drive section above.
21. **What is an individual drive?** Each machine is driven by its own motor, which also moves the machine's parts. Examples: single-spindle drilling machines, lathes.
22. **What is a multi-motor drive?** Several drives, each moving one working part of the driven mechanism. Examples: metal-cutting machine tools, paper-making machines, rolling mills, traction drives, travelling cranes.
23. **Advantages of DC drives?** Simple, inexpensive power and control circuits; fast response and a wide, smooth speed range.
24. **Disadvantages of DC drives?** Frequent maintenance; the commutator makes the motor bulky, costly and heavy; speed and power ratings are limited by commutation.
25. **Advantages of a squirrel-cage induction motor over a DC motor?** Simple construction, less maintenance, low cost and high efficiency.
26. **Which drive gives fast, accurate control over a wide speed range?** A DC motor drive.
27. **What is a drive in terms of (a) its elements and (b) torque and speed?** (a) A prime mover with its control system and transmission system. (b) The relationship between the motor's torque and speed.
28. **Four factors in choosing an electric drive?** Process requirements, environmental aspects, maintenance and training of personnel, and the need for low energy consumption.
29. **Why does a single-phase induction motor not self-start?** Its stator winding produces a **pulsating** field, not a rotating one, so the net torque at standstill is zero.
30. **What functions does an electric drive perform?** It converts electrical energy into mechanical energy using a motor, controls the motor speed as the load requires, and starts and stops the motor.
31. **Why are multi-motor drives significant in industry?** Each task is run by its own motor, which improves efficiency and control. Examples: cranes, lathes, lifts, elevators.
