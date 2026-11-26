# DC motor drives

> Starter notes. Replace with your own.

## Separately excited DC motor

$$V = E_b + I_a R_a, \qquad E_b = K\phi\,\omega, \qquad T = K\phi\, I_a$$

So the speed is

$$\omega = \frac{V - I_a R_a}{K\phi}$$

## Methods of speed control

1. **Armature voltage control**: vary $V$ below base speed. Constant torque region.
2. **Field weakening**: reduce $\phi$ above base speed. Constant power region.
3. **Armature resistance control**: add resistance. Simple but wasteful.

## Converter-fed DC drives

- **Single-phase full converter**: $V_a = \dfrac{2V_m}{\pi}\cos\alpha$
- **Three-phase full converter**: $V_a = \dfrac{3\sqrt{3}\,V_m}{\pi}\cos\alpha$, with $V_m$ the peak phase voltage.
- **Chopper (DC-DC) drive**: $V_a = D\,V_s$, where $D$ is the duty cycle.

## Braking

| Method | How it works | Energy |
|---|---|---|
| Regenerative | $E_b > V$, current reverses and returns to supply | Recovered |
| Dynamic (rheostatic) | Armature switched across a resistor | Wasted as heat |
| Plugging | Supply polarity reversed | Wasted, very fast stop |

### Worked example

A 220 V motor has $R_a = 0.5\ \Omega$ and $K\phi = 1.2$ V·s/rad. At $I_a = 20$ A:

$$\omega = \frac{220 - 20(0.5)}{1.2} = 175\ \text{rad/s} \approx 1671\ \text{rpm}$$
