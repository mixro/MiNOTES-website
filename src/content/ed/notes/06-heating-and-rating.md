# Heating, cooling and motor rating

*Lecture 6 · EEU 08102 Electric Drives*

## Choosing the power rating

The motor's power rating must be chosen carefully for **economy with reliability**:

- Too small a rating **cannot drive the load**, or overheats.
- Too large a rating means **extra initial cost** and **extra losses** from running below rated power.

Rules of thumb:

1. The motor must drive the load satisfactorily.
2. Its **speed–torque characteristic** must match the load's.
3. Over-rating is uneconomical because of the extra cost and losses.
4. Induction and synchronous motors run at a **lower power factor** below rated power.

The limit on a motor's output is usually its **temperature rise**. The losses (constant core and friction losses plus variable copper losses $\propto I^2$) heat the machine, and the insulation sets the maximum temperature.

## Thermal model of a motor

Treat the machine as a **homogeneous body**. This is not exact, but good enough to select a motor rating.

| Symbol | Meaning |
|---|---|
| $P_1$ | Heat developed (W) |
| $P_2$ | Heat dissipated to the cooling medium (W) |
| $W$ | Mass of the active parts (kg) |
| $h$ | Specific heat (J/kg·°C) |
| $A$ | Cooling surface area (m²) |
| $d$ | Heat-transfer coefficient (W/m²·°C) |
| $\theta$ | Mean temperature rise above ambient (°C) |

In time $dt$ the temperature rises by $d\theta$:

$$\text{heat stored} = \text{heat developed} - \text{heat dissipated}$$

$$Wh\,d\theta = P_1\,dt - P_2\,dt, \qquad P_2 = \theta d A$$

Let $C = Wh$ (thermal capacity, J/°C) and $D = dA$ (heat-dissipation constant, W/°C):

$$C\frac{d\theta}{dt} + D\theta = P_1$$

Define the **steady-state temperature rise** and the **heating time constant**:

$$\theta_{ss} = \frac{P_1}{D}, \qquad \tau = \frac{C}{D}$$

so

$$\tau\frac{d\theta}{dt} + \theta = \theta_{ss}$$

### Heating

Solving this first-order equation with initial temperature rise $\theta_1$:

$$\theta = \theta_{ss}\left(1 - e^{-t/\tau}\right) + \theta_1 e^{-t/\tau}$$

Starting cold ($\theta_1 = 0$): $\theta = \theta_{ss}\left(1 - e^{-t/\tau}\right)$.

### Cooling

When the load is reduced or removed, losses drop to $P_1'$ and the machine cools towards $\theta_{ss}' = P_1'/D'$ with cooling time constant $\tau' = C/D'$:

$$\theta = \theta_{ss}'\left(1 - e^{-t/\tau'}\right) + \theta_2 e^{-t/\tau'}$$

If the motor is switched off, $\theta_{ss}' = 0$ and $\theta = \theta_2 e^{-t/\tau'}$. A stationary motor cools more slowly (less ventilation), so usually $\tau' > \tau$.

<figure class="fig"><svg viewBox="0 0 600 320" role="img" aria-label="Heating and cooling curves of an electric machine. Both are exponential, with time constants τ and τ′."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="280" x2="560" y2="280" class="d-ax" marker-end="url(#ah)"/><line x1="60" y1="280" x2="60" y2="30" class="d-ax" marker-end="url(#ah)"/><text x="560" y="302" text-anchor="end" class="d-t">Time t</text><text x="68" y="34" class="d-t">Temperature rise θ</text><polyline class="d-r" points="60.0,280.0 64.0,271.3 68.0,263.0 72.0,255.0 76.0,247.4 80.0,240.1 84.0,233.2 88.0,226.5 92.0,220.2 96.0,214.1 100.0,208.2 104.0,202.7 108.0,197.3 112.0,192.2 116.0,187.4 120.0,182.7 124.0,178.2 128.0,173.9 132.0,169.9 136.0,166.0 140.0,162.2 144.0,158.6 148.0,155.2 152.0,152.0 156.0,148.8 160.0,145.8 164.0,143.0 168.0,140.2 172.0,137.6 176.0,135.1 180.0,132.7 184.0,130.4 188.0,128.2 192.0,126.1 196.0,124.1 200.0,122.2 204.0,120.4 208.0,118.6 212.0,116.9 216.0,115.3 220.0,113.8 224.0,112.3 228.0,110.9 232.0,109.6 236.0,108.3 240.0,107.1 244.0,105.9 248.0,104.8 252.0,103.7 256.0,102.7 260.0,101.7 264.0,100.7 268.0,99.8 272.0,99.0 276.0,98.1 280.0,97.4 284.0,96.6 288.0,95.9 292.0,95.2 296.0,94.5 300.0,93.9"/><polyline class="d-a" points="300.0,93.9 304.0,104.2 308.0,114.0 312.0,123.2 316.0,131.9 320.0,140.1 324.0,147.9 328.0,155.3 332.0,162.2 336.0,168.7 340.0,174.9 344.0,180.7 348.0,186.3 352.0,191.5 356.0,196.4 360.0,201.0 364.0,205.4 368.0,209.6 372.0,213.5 376.0,217.2 380.0,220.7 384.0,223.9 388.0,227.1 392.0,230.0 396.0,232.8 400.0,235.4 404.0,237.9 408.0,240.2 412.0,242.4 416.0,244.5 420.0,246.5 424.0,248.3 428.0,250.1 432.0,251.8 436.0,253.3 440.0,254.8 444.0,256.2 448.0,257.5 452.0,258.8 456.0,260.0 460.0,261.1 464.0,262.1 468.0,263.1 472.0,264.1 476.0,264.9 480.0,265.8 484.0,266.6 488.0,267.3 492.0,268.0 496.0,268.7 500.0,269.3 504.0,269.9 508.0,270.5 512.0,271.0 516.0,271.5 520.0,272.0 524.0,272.4 528.0,272.8 532.0,273.2 536.0,273.6 540.0,274.0"/><line x1="60" y1="80" x2="540" y2="80" class="d-mut"/><text x="540" y="74" text-anchor="end" class="d-t s">θss (steady state)</text><text x="150" y="232" text-anchor="start" class="d-t s r">Heating: θ = θss(1 − e^(−t/τ))</text><text x="370" y="190" text-anchor="start" class="d-t s a">Cooling: θ = θ₂e^(−t/τ′)</text><line x1="300" y1="280" x2="300" y2="94" class="d-mut"/><text x="300" y="300" text-anchor="middle" class="d-t s">load removed</text></svg><figcaption>Heating and cooling curves of an electric machine. Both are exponential, with time constants τ and τ′.</figcaption></figure>

### Worked example: periodic duty

> A motor is clutched to its load for **10 min** and declutched (no load) for **20 min**, repeatedly. The **minimum** temperature rise is **40 °C**. The no-load temperature rise is **15 °C**. Heating and cooling time constants are **60 min**. Find the maximum temperature rise and the rise if the load stays on continuously.

Heating for 10 min from $\theta_1 = 40$ °C:

$$\theta_2 = \theta_{ss}\left(1 - e^{-10/60}\right) + 40e^{-10/60} = 0.1535\,\theta_{ss} + 33.86 \qquad (1)$$

Cooling for 20 min towards 15 °C returns to 40 °C:

$$40 = 15\left(1 - e^{-20/60}\right) + \theta_2 e^{-20/60} \quad\Rightarrow\quad \theta_2 = 49.9\ \text{°C}$$

Substituting into (1):

$$\theta_{ss} = \frac{49.9 - 33.86}{0.1535} \approx 104.5\ \text{°C}$$

So the temperature swings between **40 °C and 49.9 °C**, and on continuous load it would reach **104.5 °C**.

## Determining the motor rating

### Continuous duty with a fluctuating load

Use the **rms (equivalent) torque or power** over the cycle, because heating depends on $I^2$:

$$T_{eq} = \sqrt{\frac{T_1^2t_1 + T_2^2t_2 + \dots + T_n^2t_n}{t_1 + t_2 + \dots + t_n}}, \qquad P_{eq} = \sqrt{\frac{P_1^2t_1 + P_2^2t_2 + \dots + P_n^2t_n}{t_1 + t_2 + \dots + t_n}}$$

Power rating from equivalent torque: $P = \dfrac{2\pi N T_{eq}}{60}$ W (with $T$ in N·m and $N$ in rpm). The lecture's form $P_r = \dfrac{T_{eq}N}{975}$ gives kW when $T$ is in kgf·m.

### Short-time duty

A motor that runs for $t_{on}$ and then cools completely can be loaded above its continuous rating. If $P_h$ is the ratio of allowed losses to rated losses:

$$P_h = \frac{1}{1 - e^{-t_{on}/\tau}}$$

and, taking losses as proportional to the square of the load ($P_m^2 = P_h$):

$$P_m = \sqrt{P_h} = \frac{1}{\sqrt{1 - e^{-t_{on}/\tau}}}$$

> **Example.** Find the half-hour rating of a **20 kW** motor with a heating time constant of **2 h**, cooling completely between loads.
>
> $$P = \frac{20}{\sqrt{1 - e^{-30/120}}} = \frac{20}{\sqrt{0.2212}} \approx 42.5\ \text{kW}$$

### Intermittent duty

For a cycle of $t_{on}$ on load and $t_{off}$ off load (cooling time constant $\tau'$):

$$P_m = \sqrt{\frac{1 - e^{-\left(\frac{t_{on}}{\tau} + \frac{t_{off}}{\tau'}\right)}}{1 - e^{-t_{on}/\tau}}}$$

> **Example.** Find the rating of a **120 kW** motor on a cycle of **20 min full load, 40 min no load**. Heating and cooling time constants are **100 min** and **120 min**. Losses are proportional to the square of load.
>
> $$P_m = \sqrt{\frac{1 - e^{-(20/100 + 40/120)}}{1 - e^{-20/100}}} = \sqrt{\frac{1 - e^{-0.533}}{1 - e^{-0.2}}} = \sqrt{\frac{0.413}{0.181}} \approx 1.51$$
>
> The motor can be loaded to about $120 \times 1.5 = 180$ kW during the on period.

## Load equalisation

Some loads fluctuate widely over short intervals. A **press**, for example, needs a large torque for a moment and almost none the rest of the time. Without help, the motor draws a **very large current** at each peak, causing **voltage dips** for other consumers and a **mechanical shock** to the motor every cycle.

The fix is a **flywheel** on the motor shaft:

- During **heavy load** the speed drops and the flywheel **gives up kinetic energy**.
- During **light load** the speed rises and the flywheel **stores energy**.

So the motor sees a much smoother load.

<figure class="fig"><svg viewBox="0 0 600 260" role="img" aria-label="Load equalisation with a flywheel: the motor torque rises slowly during the heavy load and the speed dips, so the flywheel supplies the peak."><text x="20" y="40" text-anchor="start" class="d-t s">Load torque</text><polyline class="d-b" points="110.0,110.0 110.0,70.0 145.0,70.0 145.0,110.0 205.0,110.0 205.0,110.0 205.0,70.0 240.0,70.0 240.0,110.0 300.0,110.0 300.0,110.0 300.0,70.0 335.0,70.0 335.0,110.0 395.0,110.0 395.0,110.0 395.0,70.0 430.0,70.0 430.0,110.0 490.0,110.0 490.0,110.0 490.0,70.0 525.0,70.0 525.0,110.0 585.0,110.0"/><text x="20" y="140" text-anchor="start" class="d-t s">Motor torque</text><polyline class="d-a" points="110.0,190.0 145.0,150.0 205.0,190.0 205.0,190.0 240.0,150.0 300.0,190.0 300.0,190.0 335.0,150.0 395.0,190.0 395.0,190.0 430.0,150.0 490.0,190.0 490.0,190.0 525.0,150.0 585.0,190.0"/><text x="20" y="220" text-anchor="start" class="d-t s">Speed</text><polyline class="d-c" points="110.0,230.0 145.0,270.0 205.0,230.0 205.0,230.0 240.0,270.0 300.0,230.0 300.0,230.0 335.0,270.0 395.0,230.0 395.0,230.0 430.0,270.0 490.0,230.0 490.0,230.0 525.0,270.0 585.0,230.0"/></svg><figcaption>Load equalisation with a flywheel: the motor torque rises slowly during the heavy load and the speed dips, so the flywheel supplies the peak.</figcaption></figure>

### Sizing the flywheel

Let $\omega_0$ and $T_0$ be no-load speed and torque, $\omega_r$ and $T_r$ rated speed and torque. If speed falls linearly with torque (and $T_0 \approx 0$):

$$\omega = \omega_0 - \frac{\omega_0 - \omega_r}{T_r}\,T$$

The equation of motion with load torque $T_l$ is $T - T_l = J\dfrac{d\omega}{dt}$. Substituting:

$$\tau_m\frac{dT}{dt} + T = T_l, \qquad \tau_m = J\,\frac{\omega_0 - \omega_r}{T_r}$$

so motor torque follows the load with a **mechanical time constant** $\tau_m$:

$$T = T_l\left(1 - e^{-t/\tau_m}\right) + T' e^{-t/\tau_m}$$

During a heavy load $T_{lh}$ lasting $t_h$, the motor torque rises from $T_{min}$ to $T_{max}$. During a light load $T_{ll}$ lasting $t_l$, it falls back:

$$T_{max} = T_{lh}\left(1 - e^{-t_h/\tau_m}\right) + T_{min}e^{-t_h/\tau_m}$$

$$T_{min} = T_{ll}\left(1 - e^{-t_l/\tau_m}\right) + T_{max}e^{-t_l/\tau_m}$$

Solving for $\tau_m$ and then for the moment of inertia gives either

$$J = \frac{T_r}{\omega_0 - \omega_r}\cdot\frac{t_h}{\ln\left(\dfrac{T_{lh} - T_{min}}{T_{lh} - T_{max}}\right)} \qquad\text{or}\qquad J = \frac{T_r}{\omega_0 - \omega_r}\cdot\frac{t_l}{\ln\left(\dfrac{T_{max} - T_{ll}}{T_{min} - T_{ll}}\right)}$$

Choose $T_{max}$ (usually limited to about 1.5 to 2 times rated torque) and calculate the flywheel inertia $J$.
