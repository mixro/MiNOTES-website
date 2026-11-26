# Induction motor drives

> Starter notes. Replace with your own.

## Synchronous speed and slip

$$n_s = \frac{120 f}{P} \qquad s = \frac{n_s - n_r}{n_s}$$

where $f$ is supply frequency (Hz), $P$ the number of poles and $n_r$ the rotor speed (rpm).

## Torque

From the approximate equivalent circuit:

$$T = \frac{3}{\omega_s}\cdot\frac{V^2\,(R_2'/s)}{(R_1 + R_2'/s)^2 + (X_1 + X_2')^2}$$

The maximum torque occurs at slip

$$s_{max} = \frac{R_2'}{\sqrt{R_1^2 + (X_1+X_2')^2}}$$

Maximum torque does not depend on rotor resistance, but the slip at which it occurs does.

## Speed control methods

- **Stator voltage control**: simple, but limited range and poor efficiency.
- **Rotor resistance control** (slip-ring motors).
- **Variable frequency (V/f) control**: keep $V/f$ constant so the air-gap flux stays constant. This is the most common method in industry.
- **Vector (field-oriented) control**: controls flux and torque separately, like a DC motor. Gives fast dynamic response.

## Worked example

A 4-pole, 50 Hz motor runs at 1440 rpm.

$$n_s = \frac{120 \times 50}{4} = 1500\ \text{rpm}, \qquad s = \frac{1500-1440}{1500} = 0.04$$
