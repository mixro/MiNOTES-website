# AC drives

*Lecture 8 · EEU 08102 Electric Drives*

AC motor drives are used in conveyors, lifts, mixers, escalators and much more.

| Advantages of AC motors | Disadvantages |
|---|---|
| **Lighter**, about 20 to 40% lighter than an equivalent DC motor | Power control is more **complex and expensive** |
| **Cheaper** | Speed control needs a **variable-frequency** supply; misuse of frequency control can damage the motor |
| **Low maintenance** | |

The two main types are **induction motor drives** and **synchronous motor drives**.

## Induction motor basics

Three-phase induction motors are the most common motors in **adjustable-speed drives (ASDs)**. They have a **stator**, a **rotor** and an **air gap**. Balanced three-phase voltages on the stator create a rotating field that induces voltages in the rotor.

**Synchronous speed** (speed of the rotating field):

$$\omega_s = \frac{2\omega}{p} \ \text{rad/s}, \qquad N_s = \frac{120f}{p} \ \text{rpm}$$

where $p$ is the number of poles, $\omega = 2\pi f$ the supply frequency.

**Slip and rotor speed:**

$$S = \frac{\omega_s - \omega_m}{\omega_s} = \frac{N_s - N_m}{N_s}, \qquad \omega_m = \omega_s(1 - S)$$

## Equivalent circuit and power flow

Per-phase equivalent circuit: stator $R_s$, $X_s$; magnetising branch $X_m$ with core-loss resistance $R_m$; rotor referred to the stator $R_r'$, $X_r'$, with the load represented by $R_r'/S$.

| Quantity | Expression |
|---|---|
| Stator copper loss | $P_{su} = 3I_s^2R_s$ |
| Rotor copper loss | $P_{ru} = 3(I_r')^2R_r'$ |
| Core loss | $P_c = \dfrac{3V_m^2}{R_m} \approx \dfrac{3V_s^2}{R_m}$ |
| Air-gap power | $P_g = 3(I_r')^2\dfrac{R_r'}{S}$ |
| Developed power | $P_d = P_g - P_{ru} = P_g(1 - S)$ |
| Developed torque | $T_d = \dfrac{P_d}{\omega_m} = \dfrac{P_g}{\omega_s}$ |
| Input power | $P_i = 3V_sI_s\cos\phi_m = P_c + P_{su} + P_g$ |
| Efficiency | $\eta = \dfrac{P_o}{P_i}$, with $P_o = P_d - P_{no\,load}$ |

> **Rotor copper loss = $S \times$ air-gap power.** If stator and core losses are small, $\eta \approx 1 - S$. Running at high slip wastes energy.

### Approximate circuit

Because $X_m \gg R_m$ and $X_m^2 \gg R_s^2 + X_s^2$, the magnetising branch can be moved to the terminals ($V_m \approx V_s$). Then:

$$I_r' = \frac{V_s}{\sqrt{\left(R_s + \dfrac{R_r'}{S}\right)^2 + \left(X_s + X_r'\right)^2}}$$

$$T_d = \frac{3R_r'V_s^2}{S\,\omega_s\left[\left(R_s + \dfrac{R_r'}{S}\right)^2 + \left(X_s + X_r'\right)^2\right]}$$

## Torque–speed characteristic

<figure class="fig"><svg viewBox="0 0 600 320" role="img" aria-label="Torque–speed curve of an induction motor across its three regions: regenerating (s < 0), motoring (0 < s < 1) and plugging (1 < s < 2)."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="40" y1="170" x2="560" y2="170" class="d-ax" marker-end="url(#ah)"/><line x1="230" y1="310" x2="230" y2="25" class="d-ax" marker-end="url(#ah)"/><polyline class="d-a w" points="530.0,199.3 528.5,199.6 527.0,199.9 525.5,200.2 524.0,200.5 522.5,200.8 521.0,201.1 519.5,201.4 518.0,201.8 516.5,202.1 515.0,202.4 513.5,202.8 512.0,203.1 510.5,203.5 509.0,203.9 507.5,204.2 506.0,204.6 504.5,205.0 503.0,205.4 501.5,205.8 500.0,206.2 498.5,206.7 497.0,207.1 495.5,207.5 494.0,208.0 492.5,208.5 491.0,208.9 489.5,209.4 488.0,209.9 486.5,210.4 485.0,211.0 483.5,211.5 482.0,212.1 480.5,212.6 479.0,213.2 477.5,213.8 476.0,214.4 474.5,215.1 473.0,215.7 471.5,216.4 470.0,217.1 468.5,217.8 467.0,218.5 465.5,219.2 464.0,220.0 462.5,220.8 461.0,221.6 459.5,222.4 458.0,223.3 456.5,224.1 455.0,225.0 453.5,226.0 452.0,226.9 450.5,227.9 449.0,228.9 447.5,230.0 446.0,231.1 444.5,232.2 443.0,233.3 441.5,234.5 440.0,235.8 438.5,237.0 437.0,238.3 435.5,239.6 434.0,241.0 432.5,242.4 431.0,243.9 429.5,245.3 428.0,246.9 426.5,248.4 425.0,250.0 423.5,251.6 422.0,253.3 420.5,254.9 419.0,256.6 417.5,258.2 416.0,259.9 414.5,261.5 413.0,263.1 411.5,264.6 410.0,266.0 408.5,267.3 407.0,268.4 405.5,269.2 404.0,269.8 402.5,270.0 401.0,269.8 399.5,269.0 398.0,267.6 396.5,265.4 395.0,262.3 393.5,258.2 392.0,253.0 390.5,246.6 389.0,239.0 387.5,230.0 386.0,219.8 384.5,208.5 383.0,196.2 381.5,183.3 380.0,170.0 378.5,156.7 377.0,143.8 375.5,131.5 374.0,120.2 372.5,110.0 371.0,101.0 369.5,93.4 368.0,87.0 366.5,81.8 365.0,77.7 363.5,74.6 362.0,72.4 360.5,71.0 359.0,70.2 357.5,70.0 356.0,70.2 354.5,70.8 353.0,71.6 351.5,72.7 350.0,74.0 348.5,75.4 347.0,76.9 345.5,78.5 344.0,80.1 342.5,81.8 341.0,83.4 339.5,85.1 338.0,86.7 336.5,88.4 335.0,90.0 333.5,91.6 332.0,93.1 330.5,94.7 329.0,96.1 327.5,97.6 326.0,99.0 324.5,100.4 323.0,101.7 321.5,103.0 320.0,104.2 318.5,105.5 317.0,106.7 315.5,107.8 314.0,108.9 312.5,110.0 311.0,111.1 309.5,112.1 308.0,113.1 306.5,114.0 305.0,115.0 303.5,115.9 302.0,116.7 300.5,117.6 299.0,118.4 297.5,119.2 296.0,120.0 294.5,120.8 293.0,121.5 291.5,122.2 290.0,122.9 288.5,123.6 287.0,124.3 285.5,124.9 284.0,125.6 282.5,126.2 281.0,126.8 279.5,127.4 278.0,127.9 276.5,128.5 275.0,129.0 273.5,129.6 272.0,130.1 270.5,130.6 269.0,131.1 267.5,131.5 266.0,132.0 264.5,132.5 263.0,132.9 261.5,133.3 260.0,133.8 258.5,134.2 257.0,134.6 255.5,135.0 254.0,135.4 252.5,135.8 251.0,136.1 249.5,136.5 248.0,136.9 246.5,137.2 245.0,137.6 243.5,137.9 242.0,138.2 240.5,138.6 239.0,138.9 237.5,139.2 236.0,139.5 234.5,139.8 233.0,140.1 231.5,140.4 230.0,140.7 228.5,140.9 227.0,141.2 225.5,141.5 224.0,141.7 222.5,142.0 221.0,142.3 219.5,142.5 218.0,142.7 216.5,143.0 215.0,143.2 213.5,143.5 212.0,143.7 210.5,143.9 209.0,144.1 207.5,144.3 206.0,144.6 204.5,144.8 203.0,145.0 201.5,145.2 200.0,145.4 198.5,145.6 197.0,145.8 195.5,146.0 194.0,146.2 192.5,146.3 191.0,146.5 189.5,146.7 188.0,146.9 186.5,147.1 185.0,147.2 183.5,147.4 182.0,147.6 180.5,147.7 179.0,147.9 177.5,148.0 176.0,148.2 174.5,148.4 173.0,148.5 171.5,148.7 170.0,148.8 168.5,149.0 167.0,149.1 165.5,149.2 164.0,149.4 162.5,149.5 161.0,149.7 159.5,149.8 158.0,149.9 156.5,150.1 155.0,150.2 153.5,150.3 152.0,150.5 150.5,150.6 149.0,150.7 147.5,150.8 146.0,150.9 144.5,151.1 143.0,151.2 141.5,151.3 140.0,151.4 138.5,151.5 137.0,151.6 135.5,151.7 134.0,151.9 132.5,152.0 131.0,152.1 129.5,152.2 128.0,152.3 126.5,152.4 125.0,152.5 123.5,152.6 122.0,152.7 120.5,152.8 119.0,152.9 117.5,153.0 116.0,153.1 114.5,153.2 113.0,153.3 111.5,153.4 110.0,153.4 108.5,153.5 107.0,153.6 105.5,153.7 104.0,153.8 102.5,153.9 101.0,154.0 99.5,154.1 98.0,154.1 96.5,154.2 95.0,154.3 93.5,154.4 92.0,154.5 90.5,154.5 89.0,154.6 87.5,154.7 86.0,154.8 84.5,154.9 83.0,154.9 81.5,155.0 80.0,155.1"/><text x="560" y="190" text-anchor="end" class="d-t s">Speed ωm</text><text x="236" y="36" text-anchor="start" class="d-t s">Torque</text><line x1="380" y1="166" x2="380" y2="174" class="d-ax"/><text x="380" y="192" text-anchor="middle" class="d-t s">s = 0 (ωs)</text><line x1="230" y1="166" x2="230" y2="174" class="d-ax"/><text x="230" y="192" text-anchor="middle" class="d-t s">s = 1 (ωm = 0)</text><line x1="80" y1="166" x2="80" y2="174" class="d-ax"/><text x="80" y="192" text-anchor="middle" class="d-t s">s = 2</text><text x="455.0" y="300" text-anchor="middle" class="d-t s r">Regenerating</text><text x="305.0" y="300" text-anchor="middle" class="d-t s a">Motoring</text><text x="155.0" y="300" text-anchor="middle" class="d-t s b">Plugging</text><text x="357.5" y="62" text-anchor="middle" class="d-t s">Tmax</text><text x="224" y="136" text-anchor="end" class="d-t s">Tst</text></svg><figcaption>Torque–speed curve of an induction motor across its three regions: regenerating (s < 0), motoring (0 < s < 1) and plugging (1 < s < 2).</figcaption></figure>

| Region | Slip | Description |
|---|---|---|
| Motoring | $0 \le S \le 1$ | Rotor turns with the field, slower than synchronous speed |
| Regenerating | $S < 0$ | Rotor driven faster than synchronous speed; the machine generates |
| Plugging | $1 \le S \le 2$ | Rotor turns against the field; used for fast braking |

**Starting torque** ($S = 1$):

$$T_{st} = \frac{3R_r'V_s^2}{\omega_s\left[\left(R_s + R_r'\right)^2 + \left(X_s + X_r'\right)^2\right]}$$

**Slip at maximum torque** (set $dT_d/dS = 0$):

$$S_m = \pm\frac{R_r'}{\sqrt{R_s^2 + \left(X_s + X_r'\right)^2}}$$

**Maximum (breakdown) torque:**

$$T_{max} = \frac{3V_s^2}{2\omega_s\left[R_s + \sqrt{R_s^2 + \left(X_s + X_r'\right)^2}\right]}$$

and the maximum **regenerative** torque (at $S = -S_m$):

$$T_{mr} = \frac{3V_s^2}{2\omega_s\left[-R_s + \sqrt{R_s^2 + \left(X_s + X_r'\right)^2}\right]}$$

**Approximations**

- **High slip** (near starting), $(R_r'/S)^2 \ll (X_s + X_r')^2$: $T_d \approx \dfrac{3R_r'V_s^2}{S\,\omega_s(X_s + X_r')^2}$.
- **Low slip** (normal running), $R_r'/S \gg$ everything else: $T_d \approx \dfrac{3V_s^2S}{\omega_sR_r'}$. Torque is **proportional to slip**, so the curve is nearly a straight line near synchronous speed.

> $T_{max}$ does **not** depend on rotor resistance, but the slip at which it occurs does.

## Speed control of induction motors

### 1. Stator voltage control

An AC voltage controller varies $V_s$. Since $T_d \propto V_s^2$, lowering the voltage lowers the whole curve, including $T_{st}$ and $T_{max}$, and the operating point moves to a higher slip.

- Simple and cheap, but the **speed range is small** and efficiency is poor at high slip.
- Suits **fan and pump** loads, whose torque falls steeply with speed.

### 2. Frequency (V/f) control

Changing the supply frequency changes $\omega_s$, and so the speed. Let $\omega_b$ be the base (rated) synchronous speed and $\beta = \omega_s/\omega_b$:

$$\omega_s = \beta\omega_b, \qquad S = 1 - \frac{\omega_m}{\beta\omega_b}$$

If voltage stays at rated value while frequency rises **above** rated, the **flux and torque fall**. If frequency is lowered at constant voltage, the flux rises and the core **saturates**. So below base speed the voltage is varied **in proportion to frequency** (constant $V/f$) to keep the flux constant.

<figure class="fig"><svg viewBox="0 0 600 320" role="img" aria-label="Constant V/f control: lowering the frequency shifts the curve down in speed while the peak torque stays about the same."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="50" y1="290" x2="560" y2="290" class="d-ax" marker-end="url(#ah)"/><line x1="50" y1="290" x2="50" y2="30" class="d-ax" marker-end="url(#ah)"/><text x="560" y="312" text-anchor="end" class="d-t">Torque</text><text x="58" y="34" class="d-t">Speed</text><polyline class="d-a" points="50.0,60.0 70.7,62.0 91.1,63.9 111.0,65.9 130.2,67.9 148.5,69.8 165.8,71.8 181.8,73.8 196.6,75.7 210.0,77.7 222.1,79.7 232.9,81.6 242.3,83.6 250.5,85.6 257.5,87.5 263.3,89.5 268.1,91.5 272.0,93.4 275.0,95.4 277.2,97.4 278.7,99.3 279.6,101.3 280.0,103.3 279.9,105.2 279.3,107.2 278.4,109.2 277.2,111.1 275.7,113.1 274.0,115.1 272.1,117.0 270.0,119.0 267.8,121.0 265.5,122.9 263.1,124.9 260.7,126.9 258.2,128.8 255.6,130.8 253.0,132.8 250.5,134.7 247.9,136.7 245.3,138.7 242.7,140.6 240.2,142.6 237.6,144.6 235.1,146.5 232.6,148.5 230.2,150.5 227.8,152.4 225.4,154.4 223.0,156.4 220.7,158.3 218.5,160.3 216.2,162.3 214.0,164.2 211.9,166.2 209.8,168.2 207.7,170.1 205.7,172.1 203.7,174.1 201.7,176.0 199.8,178.0 197.9,180.0 196.1,181.9 194.3,183.9 192.5,185.9 190.8,187.8 189.1,189.8 187.4,191.8 185.8,193.7 184.2,195.7 182.7,197.7 181.1,199.6 179.6,201.6 178.2,203.6 176.7,205.5 175.3,207.5 173.9,209.5 172.5,211.4 171.2,213.4 169.9,215.4 168.6,217.3 167.4,219.3 166.1,221.3 164.9,223.2 163.7,225.2 162.6,227.2 161.4,229.1 160.3,231.1 159.2,233.1 158.1,235.0 157.1,237.0 156.0,239.0 155.0,240.9 154.0,242.9 153.0,244.9 152.0,246.8 151.1,248.8 150.1,250.8 149.2,252.7 148.3,254.7 147.4,256.6"/><text x="62" y="56.0" text-anchor="start" class="d-t s">fb</text><polyline class="d-c" points="50.0,117.5 70.7,119.0 91.1,120.4 111.0,121.9 130.2,123.4 148.5,124.9 165.8,126.3 181.8,127.8 196.6,129.3 210.0,130.8 222.1,132.2 232.9,133.7 242.3,135.2 250.5,136.7 257.5,138.1 263.3,139.6 268.1,141.1 272.0,142.6 275.0,144.0 277.2,145.5 278.7,147.0 279.6,148.5 280.0,149.9 279.9,151.4 279.3,152.9 278.4,154.4 277.2,155.8 275.7,157.3 274.0,158.8 272.1,160.3 270.0,161.7 267.8,163.2 265.5,164.7 263.1,166.2 260.7,167.6 258.2,169.1 255.6,170.6 253.0,172.1 250.5,173.5 247.9,175.0 245.3,176.5 242.7,178.0 240.2,179.4 237.6,180.9 235.1,182.4 232.6,183.9 230.2,185.3 227.8,186.8 225.4,188.3 223.0,189.8 220.7,191.2 218.5,192.7 216.2,194.2 214.0,195.7 211.9,197.1 209.8,198.6 207.7,200.1 205.7,201.6 203.7,203.0 201.7,204.5 199.8,206.0 197.9,207.5 196.1,208.9 194.3,210.4 192.5,211.9 190.8,213.4 189.1,214.8 187.4,216.3 185.8,217.8 184.2,219.3 182.7,220.7 181.1,222.2 179.6,223.7 178.2,225.2 176.7,226.6 175.3,228.1 173.9,229.6 172.5,231.1 171.2,232.5 169.9,234.0 168.6,235.5 167.4,237.0 166.1,238.4 164.9,239.9 163.7,241.4 162.6,242.9 161.4,244.3 160.3,245.8 159.2,247.3 158.1,248.8 157.1,250.2 156.0,251.7 155.0,253.2 154.0,254.7 153.0,256.1 152.0,257.6 151.1,259.1 150.1,260.6 149.2,262.0 148.3,263.5 147.4,265.0"/><text x="62" y="113.5" text-anchor="start" class="d-t s">f₁ < fb</text><polyline class="d-b" points="50.0,175.0 70.7,176.0 91.1,177.0 111.0,177.9 130.2,178.9 148.5,179.9 165.8,180.9 181.8,181.9 196.6,182.9 210.0,183.8 222.1,184.8 232.9,185.8 242.3,186.8 250.5,187.8 257.5,188.8 263.3,189.7 268.1,190.7 272.0,191.7 275.0,192.7 277.2,193.7 278.7,194.7 279.6,195.6 280.0,196.6 279.9,197.6 279.3,198.6 278.4,199.6 277.2,200.6 275.7,201.5 274.0,202.5 272.1,203.5 270.0,204.5 267.8,205.5 265.5,206.5 263.1,207.4 260.7,208.4 258.2,209.4 255.6,210.4 253.0,211.4 250.5,212.4 247.9,213.3 245.3,214.3 242.7,215.3 240.2,216.3 237.6,217.3 235.1,218.3 232.6,219.2 230.2,220.2 227.8,221.2 225.4,222.2 223.0,223.2 220.7,224.2 218.5,225.1 216.2,226.1 214.0,227.1 211.9,228.1 209.8,229.1 207.7,230.1 205.7,231.0 203.7,232.0 201.7,233.0 199.8,234.0 197.9,235.0 196.1,236.0 194.3,236.9 192.5,237.9 190.8,238.9 189.1,239.9 187.4,240.9 185.8,241.9 184.2,242.8 182.7,243.8 181.1,244.8 179.6,245.8 178.2,246.8 176.7,247.8 175.3,248.7 173.9,249.7 172.5,250.7 171.2,251.7 169.9,252.7 168.6,253.7 167.4,254.6 166.1,255.6 164.9,256.6 163.7,257.6 162.6,258.6 161.4,259.6 160.3,260.5 159.2,261.5 158.1,262.5 157.1,263.5 156.0,264.5 155.0,265.5 154.0,266.4 153.0,267.4 152.0,268.4 151.1,269.4 150.1,270.4 149.2,271.4 148.3,272.3 147.4,273.3"/><text x="62" y="171.0" text-anchor="start" class="d-t s">f₂ < f₁</text><polyline class="d-r" points="200.0,30.0 200.0,290.0"/><text x="206" y="44" text-anchor="start" class="d-t s r">Load</text></svg><figcaption>Constant V/f control: lowering the frequency shifts the curve down in speed while the peak torque stays about the same.</figcaption></figure>

With $R_s$ neglected, the maximum torque at base speed and at any frequency at rated voltage are:

$$T_{mb} = \frac{3V_s^2}{2\omega_b\left(X_s + X_r'\right)}, \qquad T_m = \frac{3V_s^2}{2\omega_b\beta^2\left(X_s + X_r'\right)}$$

$$\frac{T_m}{T_{mb}} = \frac{1}{\beta^2}, \qquad S_m = \frac{R_r'}{\beta\left(X_s + X_r'\right)}$$

So above base speed (field-weakening region) the available torque falls with $1/\beta^2$.

> **Worked example.** A 3-phase, **11.2 kW, 1750 rpm, 460 V, 60 Hz, 4-pole**, Y-connected induction motor has $R_s = 0.1\ \Omega$, $R_r' = 0.38\ \Omega$, $X_s = 1.14\ \Omega$, $X_r' = 1.71\ \Omega$, $X_m = 33.2\ \Omega$. The breakdown torque needed is **35 N·m**. Find (a) the supply frequency and (b) the speed at maximum torque.
>
> $V_s = 460/\sqrt{3} = 265.6$ V, $\omega_b = 2\pi \times 60 = 377$ rad/s.
>
> Base torque: $T_{mb} = \dfrac{60P_o}{2\pi N_m} = \dfrac{60 \times 11\,200}{2\pi \times 1750} = 61.11$ N·m.
>
> (a) $\beta = \sqrt{T_{mb}/T_m} = \sqrt{61.11/35} = 1.321$. So $N_s = 1.321 \times 1800 \approx 4756$ rpm and
> $$f_s = \frac{pN_s}{120} = \frac{4 \times 4756}{120} \approx 158.5\ \text{Hz}$$
>
> (b) $S_m = \dfrac{0.38}{1.321(1.14 + 1.71)} = 0.101$, so $N_m = 4756(1 - 0.101) \approx 4275$ rpm.

### 3. Rotor resistance control (wound-rotor motors)

External three-phase resistors $R_x$ are connected to the **slip rings**. Increasing rotor resistance:

- moves the maximum torque to a **higher slip** (lower speed) without changing $T_{max}$
- **raises the starting torque** while **limiting the starting current**

Used where starting and braking are frequent and heavy: **cranes, hoists, mine winders, material handling**. Resistors are also used as ballast for soft-starting squirrel-cage motors, and as current limiters for DC series motors.

**Static rotor resistance control.** The resistors can be replaced by a **three-phase diode rectifier, a smoothing inductor $L_d$, and a DC chopper** across a single resistor $R$. The chopper sets the effective resistance:

$$R_e = R(1 - k)$$

where $k$ is the chopper duty cycle. Varying $k$ from 0 to 1 varies the speed.

### 4. Slip power recovery (static Kramer drive)

Instead of wasting the slip power in $R$, a **thyristor inverter** and transformer return it to the supply. This greatly improves efficiency.

## Worked example: slip power control with a chopper

> A **460 V, 60 Hz, 6-pole**, Y-connected wound-rotor induction motor is speed controlled by a rotor rectifier, inductor $L_d$ and DC chopper with resistor $R$. Rotor-to-stator turns ratio $n_m = 0.9$. $L_d$ is very large, so $I_d$ is ripple-free. Motor and converter losses are negligible. Load torque is proportional to speed squared, **750 N·m at 1175 rpm**. The minimum speed is **800 rpm**. Find (a) $R$, and at **1050 rpm** (b) $I_d$, (c) the duty cycle $k$, (d) $V_d$, (e) the efficiency.

**Key relations**

- Rotor EMF: $E_r = SV_sn_m$. Rectifier output: $V_d = 1.65\sqrt{2}\,E_r = 2.3394\,SV_sn_m$.
- Slip power $V_dI_d$ and developed power $P_d = T_L\omega_m = \dfrac{(1 - S)V_dI_d}{S}$ give

$$I_d = \frac{T_L\,\omega_s}{2.3394\,V_sn_m}$$

so $I_d$ depends only on load torque, not on speed. Then

$$\omega_m = \omega_s\left[1 - \frac{I_dR(1 - k)}{2.3394\,V_sn_m}\right]$$

**Numbers:** $V_s = 265.58$ V, $\omega_s = 2 \times 377/6 = 125.66$ rad/s, $2.3394V_sn_m = 559.2$ V.

**(a)** At 800 rpm ($\omega_m = 83.78$ rad/s), $k = 0$: $T_L = 750(800/1175)^2 = 347.7$ N·m, $I_d = \dfrac{347.7 \times 125.66}{559.2} = 78.1$ A.

$$83.78 = 125.66\left[1 - \frac{78.1R}{559.2}\right] \quad\Rightarrow\quad R = 2.386\ \Omega$$

**(b)** At 1050 rpm ($\omega_m = 109.96$ rad/s): $T_L = 750(1050/1175)^2 = 598.9$ N·m, so $I_d = \dfrac{598.9 \times 125.66}{559.2} = 134.6$ A.

**(c)** $S = 1 - 109.96/125.66 = 0.125$. $V_d = 559.2 \times 0.125 = 69.9$ V. From $V_d = I_dR(1 - k)$: $1 - k = \dfrac{69.9}{134.6 \times 2.386} = 0.218$, so $k \approx 0.78$.

**(d)** $V_d \approx 69.9$ V.

**(e)** Output $P_o = 598.9 \times 109.96 = 65.9$ kW. Slip power lost in $R$: $V_dI_d = 9.4$ kW. With other losses neglected, $\eta = 1 - S = 87.5\%$.
