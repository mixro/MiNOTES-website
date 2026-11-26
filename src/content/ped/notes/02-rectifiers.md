# Controlled rectifiers

> Starter notes. Replace with your own.

A controlled rectifier uses thyristors fired at a **delay angle** $\alpha$ to vary the DC output voltage.

## Single-phase half-wave (resistive load)

$$V_{dc} = \frac{V_m}{2\pi}(1 + \cos\alpha)$$

## Single-phase full converter (continuous current)

$$V_{dc} = \frac{2V_m}{\pi}\cos\alpha$$

- $0 < \alpha < 90°$: $V_{dc} > 0$, **rectifying**.
- $90° < \alpha < 180°$: $V_{dc} < 0$, **inverting** (power flows back to AC, needs an active load such as a motor's back EMF).

## Three-phase full converter

$$V_{dc} = \frac{3\sqrt{3}V_m}{\pi}\cos\alpha = \frac{3V_{mL}}{\pi}\cos\alpha$$

where $V_m$ is the peak phase voltage and $V_{mL}$ is the peak line voltage. The output ripple is at **6 times** the supply frequency.

## Performance measures

- **Ripple factor**: $RF = \sqrt{FF^2 - 1}$, where $FF = V_{rms}/V_{dc}$
- **Power factor**: $PF = \dfrac{P}{V_s I_s}$
- **Total harmonic distortion**: $THD = \dfrac{\sqrt{I_s^2 - I_{s1}^2}}{I_{s1}}$

### Worked example

A single-phase full converter on 230 V rms ($V_m = 325$ V) with $\alpha = 30°$:

$$V_{dc} = \frac{2(325)}{\pi}\cos 30° \approx 179\ \text{V}$$
