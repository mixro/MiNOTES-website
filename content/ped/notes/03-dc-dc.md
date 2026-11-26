# DC-DC converters

> Starter notes. Replace with your own.

Switch-mode DC-DC converters change one DC level to another using a switch, a diode, an inductor and a capacitor. The **duty cycle** $D = t_{on}/T_s$ sets the output.

## Ideal conversion ratios (continuous conduction)

| Converter | $V_o / V_s$ | Output polarity |
|---|---|---|
| Buck | $D$ | Same, $V_o < V_s$ |
| Boost | $\dfrac{1}{1-D}$ | Same, $V_o > V_s$ |
| Buck-boost | $-\dfrac{D}{1-D}$ | Inverted |

## Buck converter design

Inductor current ripple:

$$\Delta I_L = \frac{(V_s - V_o)\,D}{L f_s}$$

Minimum inductance for continuous conduction:

$$L_{min} = \frac{(1-D)R}{2 f_s}$$

Output voltage ripple:

$$\frac{\Delta V_o}{V_o} = \frac{1-D}{8 L C f_s^2}$$

## Boost converter design

$$\Delta I_L = \frac{V_s D}{L f_s}, \qquad L_{min} = \frac{D(1-D)^2 R}{2 f_s}, \qquad \frac{\Delta V_o}{V_o} = \frac{D}{R C f_s}$$

### Worked example

A buck converter steps 24 V down to 12 V at $f_s = 50$ kHz with $R = 6\ \Omega$:

$$D = \frac{12}{24} = 0.5, \qquad L_{min} = \frac{(1-0.5)(6)}{2(50\,000)} = 30\ \mu\text{H}$$

Choose $L$ about 25% larger than $L_{min}$ for margin.
