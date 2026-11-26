# Power semiconductor devices

> Starter notes. Replace this file with your own lecture notes for EEU 08104.

Power electronics converts electrical energy from one form to another using **switches**. An ideal switch has zero voltage drop when on, zero leakage when off, and switches instantly.

## Device comparison

| Device | Control | Typical rating | Switching speed | Typical use |
|---|---|---|---|---|
| Power diode | Uncontrolled | kV, kA | Medium | Rectifiers, freewheeling |
| Thyristor (SCR) | Turn-on only (gate) | Up to ~8 kV, 5 kA | Slow | Controlled rectifiers, HVDC |
| Power MOSFET | Voltage, on and off | < 1 kV | Very fast (> 100 kHz) | SMPS, low-voltage converters |
| IGBT | Voltage, on and off | Up to ~6.5 kV | Fast (~20 kHz) | Motor drives, inverters |
| SiC / GaN | Voltage, on and off | Rising | Very fast | EV chargers, high efficiency |

## Thyristor basics

- Turns on with a gate pulse when forward biased.
- Stays on while current is above the **holding current** $I_H$.
- Turns off only when the current falls below $I_H$ (natural or forced commutation).
- Protection: **di/dt** with a series inductor, **dv/dt** with an RC snubber.

## Losses in a switch

$$P_{loss} = P_{cond} + P_{sw}$$

$$P_{cond} = I_{rms}^2\, R_{DS(on)} \quad \text{(MOSFET)}$$

$$P_{sw} \approx \tfrac{1}{2} V I \,(t_{on} + t_{off})\, f_s$$

Switching losses grow with switching frequency, so there is a trade-off between losses and the size of the filters.

## Heat sink design

$$T_j = T_a + P_{loss}\,(R_{\theta jc} + R_{\theta cs} + R_{\theta sa})$$

Choose $R_{\theta sa}$ so the junction temperature $T_j$ stays below its limit.
