# Drive system dynamics

> Starter notes. Replace this file with your own lecture notes for EEU 08102.

An **electric drive** controls the motion of a machine. It has a power source, a power converter, a motor, a mechanical load and a controller with sensors.

## The fundamental torque equation

$$T_m - T_L = J\frac{d\omega_m}{dt}$$

- $T_m$: motor torque (N·m)
- $T_L$: load torque (N·m)
- $J$: total moment of inertia referred to the motor shaft (kg·m²)
- $\omega_m$: shaft speed (rad/s)

If $T_m > T_L$ the drive accelerates. If $T_m < T_L$ it decelerates. If they are equal it runs at a steady speed.

## Referring a load through gears

With a gear ratio $a = \omega_L/\omega_m$ and efficiency $\eta$:

$$J_{eq} = J_m + a^2 J_L, \qquad T_{L,eq} = \frac{a\,T_L}{\eta}$$

## Load torque types

| Load | Torque vs speed | Example |
|---|---|---|
| Constant torque | $T_L$ constant | Hoists, conveyors |
| Fan / pump | $T_L \propto \omega^2$ | Fans, centrifugal pumps |
| Constant power | $T_L \propto 1/\omega$ | Lathes, winders |

## Four-quadrant operation

| Quadrant | Speed | Torque | Mode |
|---|---|---|---|
| I | + | + | Forward motoring |
| II | + | − | Forward braking |
| III | − | − | Reverse motoring |
| IV | − | + | Reverse braking |

## Steady-state stability

An operating point is stable if a small increase in speed makes the load torque exceed the motor torque:

$$\frac{dT_L}{d\omega} > \frac{dT_m}{d\omega}$$
