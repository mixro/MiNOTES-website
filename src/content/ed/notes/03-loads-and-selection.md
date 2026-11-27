# Loads and drive selection

*Lecture 4 · EEU 08102 Electric Drives*

## Factors influencing electric drives

Industrial loads need a wide range of speeds and can be driven by hydraulic, pneumatic or electric motors. Electric motors bring special features:

1. Their **speed–torque characteristics** can be matched to the load.
2. They have **overload capacity** and can be overloaded for short periods without shortening their life.
3. They start **without a warm-up period**.
4. They can work in **all four quadrants** of the speed–torque plane.
5. They have **good starting torque** and can start on load.
6. They are **easy to maintain**.

## Types of load torque

### Active load torques

Load torques that **can drive the motor** under equilibrium. They **keep their sign** when the direction of rotation changes.

- Examples: torque due to **gravity**, and torque due to **tension, compression or torsion** of an elastic body.
- An electric train climbing a hill feels an active gravity torque that opposes motion. Going downhill, the same torque helps it.

### Passive load torques

Load torques that **always oppose motion** and **change sign** when the motion reverses.

- Examples: **friction**, **cutting** forces.

## Classification of loads by duty

| Duty | What it means | Examples |
|---|---|---|
| Continuous constant | Same load for a long time | Paper machines, fans |
| Continuous variable | Load varies, but repeats over long periods | Lathes, conveyors, hoists, winches |
| Pulsating | Constant torque with pulsations on top | Reciprocating pumps and compressors, frame saws, textile looms, anything with a crankshaft |
| Impact | Peak loads at regular intervals; the motor uses a **flywheel** to equalise the load | Rolling mills |
| Short-time intermittent | Identical cycles of load and rest | Hoists, excavators, all cranes |
| Short-time | Constant load for a short time, then a long rest | Battery charging, household equipment |

## Selection factors for electric drives

- **Steady-state requirements:** shape of the speed–torque curve, speed regulation, speed range, efficiency, duty cycle, quadrants of operation, speed fluctuations.
- **Transient requirements:** acceleration and deceleration, starting, braking and reversing performance.
- **Source requirements:** type of source, voltage level and fluctuations, power factor, harmonics.
- **Other factors:** capital and running cost, maintenance, life, space and weight limits, environment and location, reliability.

## Speed–torque characteristics of loads

Load torque usually depends on speed. An empirical formula covers most loads:

$$T = C\,T_r\left(\frac{n}{n_r}\right)^{k}$$

where $C$ is a proportionality constant, $T_r$ is the load torque at rated speed $n_r$, $n$ is the operating speed, and $k$ shows how strongly torque depends on speed.

<figure class="fig"><svg viewBox="0 0 600 330" role="img" aria-label="Speed–torque characteristics of mechanical loads."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="300" x2="560" y2="300" class="d-ax" marker-end="url(#ah)"/><line x1="60" y1="300" x2="60" y2="30" class="d-ax" marker-end="url(#ah)"/><text x="560" y="322" text-anchor="end" class="d-t">Torque</text><text x="68" y="34" class="d-t">Speed</text><polyline class="d-b" points="250.0,40.0 250.0,300.0"/><text x="244" y="52" text-anchor="end" class="d-t s b">I  Constant T</text><polyline class="d-c" points="60.0,300.0 540.0,110.0"/><text x="540" y="140" text-anchor="end" class="d-t s c">II  T ∝ n</text><polyline class="d-a" points="60.0,300.0 60.2,295.2 60.7,290.4 61.6,285.6 62.8,280.8 64.4,276.0 66.3,271.2 68.6,266.4 71.3,261.6 74.3,256.8 77.6,252.0 81.3,247.2 85.3,242.4 89.7,237.6 94.5,232.8 99.6,228.0 105.1,223.2 110.9,218.4 117.0,213.6 123.5,208.8 130.4,204.0 137.6,199.2 145.2,194.4 153.1,189.6 161.4,184.8 170.0,180.0 179.0,175.2 188.3,170.4 198.0,165.6 208.0,160.8 218.4,156.0 229.1,151.2 240.2,146.4 251.7,141.6 263.5,136.8 275.6,132.0 288.1,127.2 300.9,122.4 314.1,117.6 327.7,112.8 341.6,108.0 355.9,103.2 370.5,98.4 385.4,93.6 400.7,88.8 416.4,84.0 432.4,79.2 448.8,74.4 465.5,69.6 482.6,64.8 500.0,60.0"/><text x="496" y="50" text-anchor="end" class="d-t s a">III  T ∝ n²</text><polyline class="d-r" points="560.0,285.6 435.0,280.8 360.0,276.0 310.0,271.2 274.3,266.4 247.5,261.6 226.7,256.8 210.0,252.0 196.4,247.2 185.0,242.4 175.4,237.6 167.1,232.8 160.0,228.0 153.8,223.2 148.2,218.4 143.3,213.6 138.9,208.8 135.0,204.0 131.4,199.2 128.2,194.4 125.2,189.6 122.5,184.8 120.0,180.0 117.7,175.2 115.6,170.4 113.6,165.6 111.7,160.8 110.0,156.0 108.4,151.2 106.9,146.4 105.5,141.6 104.1,136.8 102.9,132.0 101.7,127.2 100.5,122.4 99.5,117.6 98.5,112.8 97.5,108.0 96.6,103.2 95.7,98.4 94.9,93.6 94.1,88.8 93.3,84.0 92.6,79.2 91.9,74.4 91.2,69.6 90.6,64.8 90.0,60.0"/><text x="560" y="266" text-anchor="end" class="d-t s r">IV  T ∝ 1/n</text></svg><figcaption>Speed–torque characteristics of mechanical loads.</figcaption></figure>

| Curve | Exponent | Torque | Power $P = T\omega$ | Examples |
|---|---|---|---|---|
| I | $k = 0$ | Constant | $P \propto \omega$ | Hoists, pumping water or gas against constant pressure |
| II | $k = 1$ | $T \propto n$ | $P \propto \omega^2$ | Calendering machines; a motor driving a DC generator with a fixed resistive load and constant field |
| III | $k = 2$ | $T \propto n^2$ | $P \propto \omega^3$ | Fans, centrifugal pumps, propellers |
| IV | $k = -1$ | $T \propto 1/n$ | $P$ constant | Milling and boring machines |

**Notes**

- **Curve I:** torque is independent of speed, so power rises linearly with speed.
- **Curve II:** linear dependence is uncommon and usually found in complex loads.
- **Curve III:** the parabolic fan law. Power rises with $\omega^3$, so it can become excessive at high speed.
- **Curve IV:** constant power. These loads need **large torque at low speed**.
- Real loads often **combine** characteristics. Friction, for example, falls with speed at low speed (stiction) but rises almost linearly at high speed (viscous friction).
