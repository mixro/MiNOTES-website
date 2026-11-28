# Introduction to power electronics

*Lecture 1 · EEU 08104 Power Electronics Design*

## What power electronics is

The objective of power electronics is **to control the transfer of electrical power from a source to a load**.

- **Definition:** power electronics is the application of **solid-state electronics** to the control and conversion of electric power.
- Put another way, it is the art of converting electrical energy from one form to another in an **efficient, clean, compact and robust** way, to meet the needs of the load.

The control takes different forms:

- Often the **nature** of the power must change between source and load. *Example:* changing the frequency of an AC source to the frequency a motor needs.
- Sometimes only the **amount** of power delivered must change, without changing its form.

## The power electronic system

<figure class="fig"><svg viewBox="0 0 600 250" role="img" aria-label="Power electronic system: power processor between source and load, driven by a controller."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="20" y="50" width="120" height="56" rx="10" class="d-box"/><text x="80.0" y="83.0" text-anchor="middle" class="d-t b">Power input</text><rect x="220" y="50" width="150" height="56" rx="10" class="d-box a"/><text x="295.0" y="83.0" text-anchor="middle" class="d-t b">Power processor</text><rect x="460" y="50" width="110" height="56" rx="10" class="d-box b"/><text x="515.0" y="83.0" text-anchor="middle" class="d-t b">Load</text><line x1="140" y1="78" x2="218" y2="78" class="d-ax"  marker-end="url(#ah)"/><line x1="370" y1="78" x2="458" y2="78" class="d-ax"  marker-end="url(#ah)"/><text x="179" y="70" text-anchor="middle" class="d-t s">v<tspan dy="4" font-size="10">i</tspan><tspan dy="-4">, i</tspan><tspan dy="4" font-size="10">i</tspan></text><text x="414" y="70" text-anchor="middle" class="d-t s">v<tspan dy="4" font-size="10">o</tspan><tspan dy="-4">, i</tspan><tspan dy="4" font-size="10">o</tspan></text><rect x="220" y="180" width="150" height="52" rx="10" class="d-box c"/><text x="295.0" y="211.0" text-anchor="middle" class="d-t b">Controller</text><line x1="295" y1="180" x2="295" y2="108" class="d-ax"  marker-end="url(#ah)"/><text x="303" y="150" text-anchor="start" class="d-t s m">control signal</text><line x1="515" y1="106" x2="515" y2="206" class="d-ax" /><line x1="515" y1="206" x2="372" y2="206" class="d-ax"  marker-end="url(#ah)"/><text x="522" y="160" text-anchor="start" class="d-t s m">measurement</text><line x1="100" y1="206" x2="218" y2="206" class="d-ax"  marker-end="url(#ah)"/><text x="100" y="196" text-anchor="start" class="d-t s m">reference</text></svg><figcaption>A power electronic system. The controller compares the measured output with the reference and switches the devices in the power processor.</figcaption></figure>

- The **power processor** sits between the input and the load. Its semiconductor devices work as **switches**, either fully on or fully off.
- The **controller** compares the measured output with the reference and decides when each switch turns on and off. This is done with various **switching techniques**, in open or closed loop.
- Because the switches are either on (almost no voltage) or off (almost no current), very little power is lost in them. This is why converters can be highly efficient.

## Types of conversion

| Conversion | Topology | Examples | Applications |
|---|---|---|---|
| **AC–DC** | Rectifiers | Diode bridge, phase-controlled bridge, PWM rectifier | Battery chargers, DC motor drives, HVDC transmission |
| **DC–AC** | Inverters | Voltage-source and current-source inverters, multilevel inverters | Solar power systems, UPS, EV and AC motor drives |
| **DC–DC** | Choppers | Buck, boost, buck-boost, Ćuk | Switched-mode power supplies, EVs, solar MPPT |
| **AC–AC** | AC voltage controllers, cycloconverters | Phase-controlled AC switches | Light dimmers, heater and fan control |

- **AC–DC:** the AC line voltage is rectified to a unidirectional source, for example for variable-speed DC motor drives.
- **DC–DC:** a DC source of one magnitude is converted to another, larger or smaller, for example a battery feeding telecommunications equipment.
- **DC–AC:** a DC source is switched to produce an alternating voltage, for example for variable-speed AC drives.
- **AC–AC:** the input is switched on and off once in each half cycle to give a phase-controlled output of the same fundamental frequency but lower voltage.

## Course outline

1. **Rectifiers:** single-phase and three-phase diode rectifiers, then controlled (thyristor) rectifiers.
2. **DC–DC converters:** buck, boost, buck-boost, Ćuk and the full-bridge converter.
3. **Inverters:** single-phase and three-phase, and PWM voltage control.

**Assessment:** coursework 40%, final exam 60%. The module has 9 credits: 2 hours of lectures, 1 hour of tutorial and 1 hour of lab per week (45 hours).

**Textbooks:** M. H. Rashid, *Power Electronics: Circuits, Devices and Applications*; Mohan, Undeland and Robbins, *Power Electronics: Converters, Applications and Design*; M. J. Fisher, *Power Electronics*. **References:** C. W. Lander, *Power Electronics*. The class notes also take several worked examples from *Power Electronics: Circuit Analysis and Design*.

## Rectifiers in one paragraph

A **rectifier** converts an AC signal into a **unidirectional** signal using semiconductor devices.

- **Diode rectifiers** give a **fixed** output voltage.
- To get a **controlled** output voltage, **thyristors** (or transistors) replace the diodes. The output voltage is varied by changing the **delay (firing) angle** $\alpha$ of the devices. These are **phase-controlled rectifiers**, also called AC–DC converters.
- Both kinds come as **single-phase** and **three-phase** converters.
