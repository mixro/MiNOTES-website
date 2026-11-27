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

## Classification of electric drives

### 1. Group drive (line-shaft drive)

One motor drives a **line shaft**, and a group of machines takes power from it through pulleys and belts or gears. Used in simple metal working and some household appliances.

**Advantages**

- One large motor replaces several small ones.
- Because loads are diverse, the single motor can be rated lower and runs near full load, giving **better efficiency and power factor**.

**Disadvantages**

- Not flexible: adding a machine is difficult.
- If the main motor fails, **every machine stops**.
- Noisy and less safe.
- Belts and pulleys waste a lot of energy, so **power loss is high**.

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
4. **Examples of electric drives:** electric traction (trains, trams), elevators and lifts, conveyor belt systems, electric vehicles, industrial pumps and fans.
5. **Types of electric drives:** individual, group and multi-motor drives.
6. **Multi-motor drive:** uses more than one motor to drive different parts of a single machine independently. Examples: rolling mills, paper mills, cranes, hoists, electric locomotives.
7. **Losses in a machine:**

$$\text{Total losses} = \text{copper losses} + \text{core (iron) losses} + \text{mechanical losses} + \text{stray losses}$$
