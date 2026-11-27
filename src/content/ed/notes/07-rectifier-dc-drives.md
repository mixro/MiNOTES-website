# Controlled rectifier fed DC drives

*Lecture 7 · EEU 08102 Electric Drives*

## Classification of DC drives

**Single-phase drives**

- half-wave converter drive
- semi-converter drive
- full converter drive
- dual converter drive

**Three-phase converter drives** and **chopper drives** follow the same ideas.

- A **half-controlled** rectifier controls the DC voltage in **one direction (one quadrant)** only.
- A single-phase **full converter** varies $V_a$ in both polarities: a **two-quadrant** drive, limited to applications up to about **15 kW**.

**Assignment topics:** single-phase full converter drive, single-phase dual converter drive, three-phase converter drive, chopper drives, VFDs.

## How the speed of a DC motor is controlled

The speed of a separately excited DC motor can be varied by:

1. **Armature voltage control:** varying $V_a$.
2. **Field control:** varying the field current $I_f$.
3. **Torque demand:** the armature current $I_a$ needed for the load, at a fixed field current.

$$\omega = \frac{V_a - I_aR_a}{K\phi}$$

The speed at rated armature voltage, rated field current and rated armature current is the **rated (base) speed**.

- **Below base speed:** keep field and armature current constant to meet the torque demand, and **vary $V_a$**. This is the *constant-torque* region.
- **Above base speed:** keep $V_a$ at rated value and **weaken the field**. This is the *constant-power* region.

## Controlled rectifiers

Controlled rectifiers give a **variable DC voltage from a fixed AC supply**. A controlled-rectifier-fed DC drive is also called a **static Ward Leonard drive**.

| Rectifier | DC voltage | Quadrants |
|---|---|---|
| Half-controlled (semi-converter: two thyristors, two diodes) | One polarity only | One quadrant (I) |
| Fully controlled (four thyristors) | Either polarity | I and IV |
| Dual converter (two full converters back to back) | Either polarity, current both ways | All four |

Single-phase rectifier drives are used at **low power**. Three-phase drives are used for larger motors.

## Single-phase full converter drive

The thyristors are fired in pairs. **T1 and T3** are fired together at $\omega t = \alpha$, and half a cycle later (at $\pi + \alpha$) **T2 and T4** are fired together. The supply is $v_s = V_m\sin\omega t$.

**Characteristics**

- It is a **two-quadrant** drive, used up to about **15 kW**.
- The armature voltage can be $+V_a$ or $-V_a$, so it works in **quadrants I and IV**.
- To regenerate with forward speed (quadrant II), the back EMF is reversed by **reversing the field** excitation. Reversing the armature or field connections gives operation in quadrants II and III.
- The field converter can be a full converter or even a dual converter.
- A **freewheeling diode is not needed**.

<figure class="fig"><svg viewBox="0 0 600 290" role="img" aria-label="Output voltage of a single-phase full converter with continuous current (α = 45°). T1, T3 and T2, T4 conduct in turn."><line x1="40" y1="150" x2="560" y2="150" class="d-ax"/><text x="560" y="168" text-anchor="end" class="d-t s">ωt</text><polyline class="d-mut2" points="40.0,150.0 41.7,147.2 43.5,144.3 45.2,141.5 46.9,138.7 48.7,135.9 50.4,133.1 52.1,130.4 53.9,127.6 55.6,124.9 57.3,122.2 59.1,119.5 60.8,116.9 62.5,114.3 64.3,111.7 66.0,109.1 67.7,106.6 69.5,104.2 71.2,101.8 72.9,99.4 74.7,97.1 76.4,94.8 78.1,92.6 79.9,90.5 81.6,88.4 83.3,86.4 85.1,84.4 86.8,82.5 88.5,80.7 90.3,78.9 92.0,77.2 93.7,75.6 95.5,74.0 97.2,72.5 98.9,71.1 100.7,69.8 102.4,68.6 104.1,67.4 105.9,66.3 107.6,65.3 109.3,64.4 111.1,63.6 112.8,62.8 114.5,62.2 116.3,61.6 118.0,61.1 119.7,60.7 121.5,60.4 123.2,60.2 124.9,60.0 126.7,60.0 128.4,60.0 130.1,60.2 131.9,60.4 133.6,60.7 135.3,61.1 137.1,61.6 138.8,62.2 140.5,62.8 142.3,63.6 144.0,64.4 145.7,65.3 147.5,66.3 149.2,67.4 150.9,68.6 152.7,69.8 154.4,71.1 156.1,72.5 157.9,74.0 159.6,75.6 161.3,77.2 163.1,78.9 164.8,80.7 166.5,82.5 168.3,84.4 170.0,86.4 171.7,88.4 173.5,90.5 175.2,92.6 176.9,94.8 178.7,97.1 180.4,99.4 182.1,101.8 183.9,104.2 185.6,106.6 187.3,109.1 189.1,111.7 190.8,114.3 192.5,116.9 194.3,119.5 196.0,122.2 197.7,124.9 199.5,127.6 201.2,130.4 202.9,133.1 204.7,135.9 206.4,138.7 208.1,141.5 209.9,144.3 211.6,147.2 213.3,150.0 215.1,152.8 216.8,155.7 218.5,158.5 220.3,161.3 222.0,164.1 223.7,166.9 225.5,169.6 227.2,172.4 228.9,175.1 230.7,177.8 232.4,180.5 234.1,183.1 235.9,185.7 237.6,188.3 239.3,190.9 241.1,193.4 242.8,195.8 244.5,198.2 246.3,200.6 248.0,202.9 249.7,205.2 251.5,207.4 253.2,209.5 254.9,211.6 256.7,213.6 258.4,215.6 260.1,217.5 261.9,219.3 263.6,221.1 265.3,222.8 267.1,224.4 268.8,226.0 270.5,227.5 272.3,228.9 274.0,230.2 275.7,231.4 277.5,232.6 279.2,233.7 280.9,234.7 282.7,235.6 284.4,236.4 286.1,237.2 287.9,237.8 289.6,238.4 291.3,238.9 293.1,239.3 294.8,239.6 296.5,239.8 298.3,240.0 300.0,240.0 301.7,240.0 303.5,239.8 305.2,239.6 306.9,239.3 308.7,238.9 310.4,238.4 312.1,237.8 313.9,237.2 315.6,236.4 317.3,235.6 319.1,234.7 320.8,233.7 322.5,232.6 324.3,231.4 326.0,230.2 327.7,228.9 329.5,227.5 331.2,226.0 332.9,224.4 334.7,222.8 336.4,221.1 338.1,219.3 339.9,217.5 341.6,215.6 343.3,213.6 345.1,211.6 346.8,209.5 348.5,207.4 350.3,205.2 352.0,202.9 353.7,200.6 355.5,198.2 357.2,195.8 358.9,193.4 360.7,190.9 362.4,188.3 364.1,185.7 365.9,183.1 367.6,180.5 369.3,177.8 371.1,175.1 372.8,172.4 374.5,169.6 376.3,166.9 378.0,164.1 379.7,161.3 381.5,158.5 383.2,155.7 384.9,152.8 386.7,150.0 388.4,147.2 390.1,144.3 391.9,141.5 393.6,138.7 395.3,135.9 397.1,133.1 398.8,130.4 400.5,127.6 402.3,124.9 404.0,122.2 405.7,119.5 407.5,116.9 409.2,114.3 410.9,111.7 412.7,109.1 414.4,106.6 416.1,104.2 417.9,101.8 419.6,99.4 421.3,97.1 423.1,94.8 424.8,92.6 426.5,90.5 428.3,88.4 430.0,86.4 431.7,84.4 433.5,82.5 435.2,80.7 436.9,78.9 438.7,77.2 440.4,75.6 442.1,74.0 443.9,72.5 445.6,71.1 447.3,69.8 449.1,68.6 450.8,67.4 452.5,66.3 454.3,65.3 456.0,64.4 457.7,63.6 459.5,62.8 461.2,62.2 462.9,61.6 464.7,61.1 466.4,60.7 468.1,60.4 469.9,60.2 471.6,60.0 473.3,60.0 475.1,60.0 476.8,60.2 478.5,60.4 480.3,60.7 482.0,61.1 483.7,61.6 485.5,62.2 487.2,62.8 488.9,63.6 490.7,64.4 492.4,65.3 494.1,66.3 495.9,67.4 497.6,68.6 499.3,69.8 501.1,71.1 502.8,72.5 504.5,74.0 506.3,75.6 508.0,77.2 509.7,78.9 511.5,80.7 513.2,82.5 514.9,84.4 516.7,86.4 518.4,88.4 520.1,90.5 521.9,92.6 523.6,94.8 525.3,97.1 527.1,99.4 528.8,101.8 530.5,104.2 532.3,106.6 534.0,109.1 535.7,111.7 537.5,114.3 539.2,116.9 540.9,119.5 542.7,122.2 544.4,124.9 546.1,127.6 547.9,130.4 549.6,133.1 551.3,135.9 553.1,138.7 554.8,141.5 556.5,144.3 558.3,147.2 560.0,150.0"/><polyline class="d-a w" points="40.0,150.0 41.7,152.8 43.5,155.7 45.2,158.5 46.9,161.3 48.7,164.1 50.4,166.9 52.1,169.6 53.9,172.4 55.6,175.1 57.3,177.8 59.1,180.5 60.8,183.1 62.5,185.7 64.3,188.3 66.0,190.9 67.7,193.4 69.5,195.8 71.2,198.2 72.9,200.6 74.7,202.9 76.4,205.2 78.1,207.4 79.9,209.5 81.6,211.6 83.3,86.4 85.1,84.4 86.8,82.5 88.5,80.7 90.3,78.9 92.0,77.2 93.7,75.6 95.5,74.0 97.2,72.5 98.9,71.1 100.7,69.8 102.4,68.6 104.1,67.4 105.9,66.3 107.6,65.3 109.3,64.4 111.1,63.6 112.8,62.8 114.5,62.2 116.3,61.6 118.0,61.1 119.7,60.7 121.5,60.4 123.2,60.2 124.9,60.0 126.7,60.0 128.4,60.0 130.1,60.2 131.9,60.4 133.6,60.7 135.3,61.1 137.1,61.6 138.8,62.2 140.5,62.8 142.3,63.6 144.0,64.4 145.7,65.3 147.5,66.3 149.2,67.4 150.9,68.6 152.7,69.8 154.4,71.1 156.1,72.5 157.9,74.0 159.6,75.6 161.3,77.2 163.1,78.9 164.8,80.7 166.5,82.5 168.3,84.4 170.0,86.4 171.7,88.4 173.5,90.5 175.2,92.6 176.9,94.8 178.7,97.1 180.4,99.4 182.1,101.8 183.9,104.2 185.6,106.6 187.3,109.1 189.1,111.7 190.8,114.3 192.5,116.9 194.3,119.5 196.0,122.2 197.7,124.9 199.5,127.6 201.2,130.4 202.9,133.1 204.7,135.9 206.4,138.7 208.1,141.5 209.9,144.3 211.6,147.2 213.3,150.0 215.1,152.8 216.8,155.7 218.5,158.5 220.3,161.3 222.0,164.1 223.7,166.9 225.5,169.6 227.2,172.4 228.9,175.1 230.7,177.8 232.4,180.5 234.1,183.1 235.9,185.7 237.6,188.3 239.3,190.9 241.1,193.4 242.8,195.8 244.5,198.2 246.3,200.6 248.0,202.9 249.7,205.2 251.5,207.4 253.2,209.5 254.9,211.6 256.7,86.4 258.4,84.4 260.1,82.5 261.9,80.7 263.6,78.9 265.3,77.2 267.1,75.6 268.8,74.0 270.5,72.5 272.3,71.1 274.0,69.8 275.7,68.6 277.5,67.4 279.2,66.3 280.9,65.3 282.7,64.4 284.4,63.6 286.1,62.8 287.9,62.2 289.6,61.6 291.3,61.1 293.1,60.7 294.8,60.4 296.5,60.2 298.3,60.0 300.0,60.0 301.7,60.0 303.5,60.2 305.2,60.4 306.9,60.7 308.7,61.1 310.4,61.6 312.1,62.2 313.9,62.8 315.6,63.6 317.3,64.4 319.1,65.3 320.8,66.3 322.5,67.4 324.3,68.6 326.0,69.8 327.7,71.1 329.5,72.5 331.2,74.0 332.9,75.6 334.7,77.2 336.4,78.9 338.1,80.7 339.9,82.5 341.6,84.4 343.3,86.4 345.1,88.4 346.8,90.5 348.5,92.6 350.3,94.8 352.0,97.1 353.7,99.4 355.5,101.8 357.2,104.2 358.9,106.6 360.7,109.1 362.4,111.7 364.1,114.3 365.9,116.9 367.6,119.5 369.3,122.2 371.1,124.9 372.8,127.6 374.5,130.4 376.3,133.1 378.0,135.9 379.7,138.7 381.5,141.5 383.2,144.3 384.9,147.2 386.7,150.0 388.4,152.8 390.1,155.7 391.9,158.5 393.6,161.3 395.3,164.1 397.1,166.9 398.8,169.6 400.5,172.4 402.3,175.1 404.0,177.8 405.7,180.5 407.5,183.1 409.2,185.7 410.9,188.3 412.7,190.9 414.4,193.4 416.1,195.8 417.9,198.2 419.6,200.6 421.3,202.9 423.1,205.2 424.8,207.4 426.5,209.5 428.3,211.6 430.0,86.4 431.7,84.4 433.5,82.5 435.2,80.7 436.9,78.9 438.7,77.2 440.4,75.6 442.1,74.0 443.9,72.5 445.6,71.1 447.3,69.8 449.1,68.6 450.8,67.4 452.5,66.3 454.3,65.3 456.0,64.4 457.7,63.6 459.5,62.8 461.2,62.2 462.9,61.6 464.7,61.1 466.4,60.7 468.1,60.4 469.9,60.2 471.6,60.0 473.3,60.0 475.1,60.0 476.8,60.2 478.5,60.4 480.3,60.7 482.0,61.1 483.7,61.6 485.5,62.2 487.2,62.8 488.9,63.6 490.7,64.4 492.4,65.3 494.1,66.3 495.9,67.4 497.6,68.6 499.3,69.8 501.1,71.1 502.8,72.5 504.5,74.0 506.3,75.6 508.0,77.2 509.7,78.9 511.5,80.7 513.2,82.5 514.9,84.4 516.7,86.4 518.4,88.4 520.1,90.5 521.9,92.6 523.6,94.8 525.3,97.1 527.1,99.4 528.8,101.8 530.5,104.2 532.3,106.6 534.0,109.1 535.7,111.7 537.5,114.3 539.2,116.9 540.9,119.5 542.7,122.2 544.4,124.9 546.1,127.6 547.9,130.4 549.6,133.1 551.3,135.9 553.1,138.7 554.8,141.5 556.5,144.3 558.3,147.2 560.0,150.0"/><line x1="40" y1="109.5" x2="560" y2="109.5" class="d-b dash"/><text x="556" y="101.48576577293022" text-anchor="end" class="d-t s b">Va = (2Vm/π) cos α</text><line x1="83.3" y1="50" x2="83.3" y2="250" class="d-mut"/><text x="83.33333333333334" y="268" text-anchor="middle" class="d-t s">α</text><line x1="256.7" y1="50" x2="256.7" y2="250" class="d-mut"/><text x="256.66666666666663" y="268" text-anchor="middle" class="d-t s">π + α</text><line x1="430.0" y1="50" x2="430.0" y2="250" class="d-mut"/><text x="430.0" y="268" text-anchor="middle" class="d-t s">2π + α</text><text x="44" y="50" text-anchor="start" class="d-t s">v</text></svg><figcaption>Output voltage of a single-phase full converter with continuous current (α = 45°). T1, T3 and T2, T4 conduct in turn.</figcaption></figure>

### Continuous armature current

With enough armature inductance the current never falls to zero. The output voltage repeats every $\pi$, so its average is:

$$V_a = \frac{1}{\pi}\int_{\alpha}^{\alpha+\pi} V_m\sin\omega t\;d(\omega t) = \frac{2V_m}{\pi}\cos\alpha$$

- $0 \le \alpha < 90°$: $V_a > 0$, **rectifying** (motoring, power flows AC → motor).
- $90° < \alpha \le 180°$: $V_a < 0$, **inverting** (regenerating, power flows motor → AC). This needs an active source such as the motor's back EMF.

The full waveform can be written as a Fourier series:

$$v_o(\omega t) = V_o + \sum_{n=1}^{\infty} V_n\cos\left(n\omega_0 t + \theta_n\right)$$

where $V_o$ is the DC (average) value above and the harmonics cause ripple in the armature current.

### Discontinuous armature current

At light load the current falls to zero before the next pair is fired.

- Current starts when T1 and T3 turn on at $\alpha$. The motor terminal voltage equals the supply.
- Current continues past $\omega t = \pi$ and falls to zero at the **extinction angle** $\beta$. T1 and T3 turn off.
- From $\beta$ until T2 and T4 fire at $\pi + \alpha$, no current flows and the terminal voltage equals the back EMF $E$.

$$V_a = R_a i_a + L_a\frac{di_a}{dt} + E = V_m\sin\omega t, \qquad \alpha \le \omega t \le \beta$$

$$V_a = E,\quad i_a = 0, \qquad \beta \le \omega t \le \pi + \alpha$$

Averaging over one period:

$$V_a = \frac{1}{\pi}\left[\int_{\alpha}^{\beta} V_m\sin\omega t\;d(\omega t) + \int_{\beta}^{\pi+\alpha} E\;d(\omega t)\right] = \frac{1}{\pi}\Big[V_m\left(\cos\alpha - \cos\beta\right) + \left(\pi + \alpha - \beta\right)E\Big]$$

So in discontinuous conduction the average voltage **depends on the back EMF**, and therefore on speed. This is why speed regulation is poorer at light load.

## Read further

- Single-phase dual converter drive
- Three-phase converter drives: $V_a = \dfrac{3\sqrt{3}V_m}{\pi}\cos\alpha$ for a full converter, with $V_m$ the peak phase voltage
- Chopper (DC–DC) drives: $V_a = DV_s$ for duty cycle $D$ (see the DC–DC converters chapter)
- Variable-frequency drives (see the AC drives chapter)
