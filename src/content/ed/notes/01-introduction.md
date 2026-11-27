# Introduction to electric drives

*Lecture 1 · EEU 08102 Electric Drives*

## Background

Motion control is needed in a huge number of industrial and domestic applications. A system that produces the required motion and controls it smoothly is called a **drive**.

A drive needs a **prime mover** to supply the mechanical energy. Prime movers include:

- electric motors
- diesel or petrol engines
- gas or steam turbines
- hydraulic motors and pneumatic cylinders

> A drive that uses an **electric motor** as its prime mover is called an **electric drive**.

## Concept of an electric drive

We usually think a motor's speed is set only by the supply voltage and frequency. With a drive, the speed of the machine can instead be **controlled precisely**, and the motion can be optimised for the job.

- A drive system combines one or more **electric motors** with a **control system** that controls the rotation of the motor shaft.
- Today most of this control is done in **software**, which makes it accurate and easy to use.
- Electric drives are everywhere: factories, transport systems, textile mills, fans, pumps, robots and household appliances.

In simple words, the systems that control the motion of electrical machines are called **electric drives**.

## Advantages of electric drives

1. Steady-state and dynamic performance can be shaped to suit the load over a **wide range of speed and torque**.
2. **Efficient starting and braking** with simple control gear.
3. Fast, high-power devices (SCRs, power MOSFETs, IGBTs) make efficient **power converters** simple to design.
4. Cheap computing hardware, **PLCs and microcontrollers** easily perform the control functions.
5. Electric motors have **high efficiency, low losses** and good **overload capability**.
6. **Long life, low noise** and **low maintenance**.
7. They can operate in **all four quadrants** of the speed–torque plane.
8. **Electric braking** gives smooth deceleration and longer equipment life; **regenerative braking** saves energy.
9. They run on **electrical energy**, which is easy to transmit, store and handle.

## Parts of an electric drive

<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Parts of an electric drive: the control unit compares the command with feedback from the load and drives the power converter."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="10" y="40" width="110" height="56" rx="10" class="d-box"/><text x="65.0" y="73.0" text-anchor="middle" class="d-t b">Power source</text><rect x="160" y="40" width="140" height="56" rx="10" class="d-box a"/><text x="230.0" y="73.0" text-anchor="middle" class="d-t b">Power converter</text><rect x="340" y="40" width="100" height="56" rx="10" class="d-box b"/><text x="390.0" y="73.0" text-anchor="middle" class="d-t b">Motor</text><rect x="480" y="40" width="100" height="56" rx="10" class="d-box"/><text x="530.0" y="73.0" text-anchor="middle" class="d-t b">Load</text><line x1="120" y1="68" x2="158" y2="68" class="d-ax" marker-end="url(#ah)"/><line x1="300" y1="68" x2="338" y2="68" class="d-ax" marker-end="url(#ah)"/><line x1="440" y1="68" x2="478" y2="68" class="d-ax" marker-end="url(#ah)"/><rect x="160" y="170" width="140" height="52" rx="10" class="d-box c"/><text x="230.0" y="201.0" text-anchor="middle" class="d-t b">Control unit</text><rect x="340" y="170" width="140" height="52" rx="10" class="d-box"/><text x="410.0" y="201.0" text-anchor="middle" class="d-t b">Sensing unit</text><line x1="530" y1="96" x2="530" y2="196" class="d-ax"/><line x1="530" y1="196" x2="482" y2="196" class="d-ax" marker-end="url(#ah)"/><line x1="340" y1="196" x2="302" y2="196" class="d-ax" marker-end="url(#ah)"/><line x1="230" y1="170" x2="230" y2="98" class="d-ax" marker-end="url(#ah)"/><line x1="230" y1="270" x2="230" y2="224" class="d-ax" marker-end="url(#ah)"/><text x="230" y="290" text-anchor="middle" class="d-t s">Input command (reference)</text></svg><figcaption>Parts of an electric drive: the control unit compares the command with feedback from the load and drives the power converter.</figcaption></figure>

### Load

Any machine that does a task, such as a pump, fan or machine tool. Load requirements are usually given as **speed and torque demands**.

### Power converter

Performs one or more of these functions:

- **Converts** electrical energy from the source into a form suited to the motor, for example AC to DC for a DC motor, or DC to AC for an induction motor.
- **Controls the flow of power** to the motor to give the speed–torque characteristic the load needs.
- During **transients** (starting, braking, speed reversal) it **limits the current** to safe levels, avoiding voltage dips and overloads.
- **Selects the mode** of operation: motoring or braking.

### Control unit and sensing unit

- The **control unit** controls the power converter using the **input command** and a **feedback signal** taken continuously from the load, so the load gets the desired performance.
- The **sensing unit** measures quantities such as speed, voltage and current, so the motor also stays within its **safe operating limits**.

### Electric motors

| Family | Examples |
|---|---|
| DC motors | Shunt, series, compound, separately excited |
| AC motors | Squirrel-cage and slip-ring induction motors, synchronous motors |
| Special motors | Brushless DC motors, stepper motors |

## Assignment 1 (10 marks)

Converters can be divided into five types by function:

| Converter | Conversion | Rating for the assignment |
|---|---|---|
| Rectifier (DC power supply) | AC → DC | 5 A |
| AC voltage regulator | AC → AC | 15 A |
| Chopper (buck, boost or buck-boost) | DC → DC | 3 A |
| Inverter | DC → AC | 10 A |
| Cyclo-converter | AC → AC (frequency change) | 10 A |

**Task:** in groups of five, build one converter, test it, and present it in class (one student presents for the group).
