# Speed–torque characteristics and four-quadrant operation

*Lecture 3 · EEU 08102 Electric Drives*

## Speed–torque characteristics of electric motors

<figure class="fig"><svg viewBox="0 0 600 330" role="img" aria-label="Speed–torque characteristics of electric motors: I synchronous, II DC shunt or separately excited, III DC series, IV induction."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="300" x2="560" y2="300" class="d-ax" marker-end="url(#ah)"/><line x1="60" y1="300" x2="60" y2="30" class="d-ax" marker-end="url(#ah)"/><text x="560" y="322" text-anchor="end" class="d-t">Torque T</text><text x="68" y="34" class="d-t">Speed n</text><polyline class="d-a" points="60.0,80.0 470.0,80.0"/><text x="476" y="84" text-anchor="start" class="d-t s a">I  Synchronous</text><polyline class="d-c" points="60.0,110.0 470.0,140.0"/><text x="476" y="144" text-anchor="start" class="d-t s c">II  DC shunt</text><polyline class="d-r" points="78.0,77.8 82.0,100.6 86.0,120.0 90.0,136.7 94.0,151.2 98.0,163.9 102.0,175.0 106.0,184.8 110.0,193.5 114.0,201.2 118.0,208.2 122.0,214.4 126.0,220.0 130.0,225.1 134.0,229.7 138.0,233.9 142.0,237.7 146.0,241.2 150.0,244.4 154.0,247.4 158.0,250.1 162.0,252.7 166.0,255.0 170.0,257.2 174.0,259.2 178.0,261.1 182.0,262.8 186.0,264.4 190.0,266.0 194.0,267.4 198.0,268.8 202.0,270.0 206.0,271.2 210.0,272.3 214.0,273.4 218.0,274.4 222.0,275.3 226.0,276.2 230.0,277.0 234.0,277.8 238.0,278.6 242.0,279.3 246.0,280.0 250.0,280.7 254.0,281.3 258.0,281.9 262.0,282.4 266.0,283.0 270.0,283.5 274.0,284.0 278.0,284.4 282.0,284.9 286.0,285.3 290.0,285.7 294.0,286.1 298.0,286.5 302.0,286.9 306.0,287.2 310.0,287.5 314.0,287.9 318.0,288.2 322.0,288.5 326.0,288.8 330.0,289.0 334.0,289.3 338.0,289.5 342.0,289.8 346.0,290.0 350.0,290.3 354.0,290.5 358.0,290.7 362.0,290.9 366.0,291.1 370.0,291.3 374.0,291.5 378.0,291.7 382.0,291.9 386.0,292.0 390.0,292.2 394.0,292.3 398.0,292.5 402.0,292.7 406.0,292.8 410.0,292.9 414.0,293.1 418.0,293.2 422.0,293.3 426.0,293.5 430.0,293.6 434.0,293.7 438.0,293.8 442.0,293.9 446.0,294.0 450.0,294.2 454.0,294.3 458.0,294.4 462.0,294.5 466.0,294.6 470.0,294.6 474.0,294.7 478.0,294.8"/><text x="470" y="262" text-anchor="start" class="d-t s r">III  DC series</text><polyline class="d-b" points="60.0,50.0 80.8,52.5 101.3,55.0 121.5,57.5 141.1,60.0 160.0,62.5 178.0,65.0 195.0,67.5 210.9,70.0 225.7,72.5 239.3,75.0 251.7,77.5 262.9,80.0 272.8,82.5 281.7,85.0 289.4,87.5 296.1,90.0 301.8,92.5 306.6,95.0 310.5,97.5 313.7,100.0 316.1,102.5 317.9,105.0 319.1,107.5 319.8,110.0 320.0,112.5 319.8,115.0 319.2,117.5 318.3,120.0 317.2,122.5 315.7,125.0 314.1,127.5 312.3,130.0 310.3,132.5 308.2,135.0 305.9,137.5 303.6,140.0 301.2,142.5 298.8,145.0 296.3,147.5 293.7,150.0 291.1,152.5 288.5,155.0 285.9,157.5 283.4,160.0 280.8,162.5 278.2,165.0 275.6,167.5 273.0,170.0 270.5,172.5 268.0,175.0 265.5,177.5 263.1,180.0 260.6,182.5 258.2,185.0 255.9,187.5 253.6,190.0 251.3,192.5 249.0,195.0 246.8,197.5 244.6,200.0 242.5,202.5 240.4,205.0 238.3,207.5 236.2,210.0 234.2,212.5 232.3,215.0 230.3,217.5 228.4,220.0 226.5,222.5 224.7,225.0 222.9,227.5 221.1,230.0 219.4,232.5 217.7,235.0 216.0,237.5 214.4,240.0 212.7,242.5 211.1,245.0 209.6,247.5 208.0,250.0 206.5,252.5 205.1,255.0 203.6,257.5 202.2,260.0 200.8,262.5 199.4,265.0 198.0,267.5 196.7,270.0 195.4,272.5 194.1,275.0 192.8,277.5 191.6,280.0 190.4,282.5 189.2,285.0 188.0,287.5 186.8,290.0 185.7,292.5 184.5,295.0 183.4,297.5 182.4,300.0"/><text x="330" y="190" text-anchor="start" class="d-t s b">IV  Induction</text><line x1="320" y1="300" x2="320" y2="112" class="d-mut"/><text x="320" y="320" text-anchor="middle" class="d-t s">Tmax</text></svg><figcaption>Speed–torque characteristics of electric motors: I synchronous, II DC shunt or separately excited, III DC series, IV induction.</figcaption></figure>

| Curve | Motor | Behaviour |
|---|---|---|
| I | Synchronous or reluctance | **Constant speed** at steady state, whatever the load torque |
| II | DC shunt or separately excited | Speed **falls slightly** as load torque rises |
| III | DC series | Speed falls steeply with torque: $n \propto \dfrac{1}{\sqrt{T}}$ (from $T \propto I^2$ and $n \propto 1/I$) |
| IV | Induction | As speed falls from synchronous, torque **rises almost linearly** up to $T_{max}$, then speed **collapses** |

> In electric drive applications, the motor must be chosen so its characteristic **matches the load**.

## Joint characteristics of motor and load

When a motor drives a mechanical load, the system settles where the **motor curve meets the load curve**.

<figure class="fig"><svg viewBox="0 0 600 330" role="img" aria-label="The operating point is where the motor curve meets the load curve. Lowering the voltage moves a hoist from H1 to H3 at the same torque."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="300" x2="560" y2="300" class="d-ax" marker-end="url(#ah)"/><line x1="60" y1="300" x2="60" y2="30" class="d-ax" marker-end="url(#ah)"/><text x="560" y="322" text-anchor="end" class="d-t">Torque</text><text x="68" y="34" class="d-t">Speed</text><polyline class="d-a" points="60.0,70.0 69.6,70.1 79.2,70.2 88.8,70.5 98.4,70.8 108.0,71.3 117.6,71.9 127.2,72.5 136.8,73.3 146.4,74.2 156.0,75.2 165.6,76.3 175.2,77.5 184.8,78.8 194.4,80.2 204.0,81.7 213.6,83.3 223.2,85.0 232.8,86.8 242.4,88.8 252.0,90.8 261.6,92.9 271.2,95.2 280.8,97.5 290.4,100.0 300.0,102.5 309.6,105.2 319.2,107.9 328.8,110.8 338.4,113.7 348.0,116.8 357.6,120.0 367.2,123.2 376.8,126.6 386.4,130.1 396.0,133.7 405.6,137.4 415.2,141.2 424.8,145.1 434.4,149.1 444.0,153.2 453.6,157.4 463.2,161.7 472.8,166.1 482.4,170.7 492.0,175.3 501.6,180.0 511.2,184.9 520.8,189.8 530.4,194.9 540.0,200.0"/><text x="540" y="188" text-anchor="end" class="d-t s a">CC1</text><polyline class="d-a" points="60.0,115.0 69.6,115.1 79.2,115.2 88.8,115.5 98.4,115.8 108.0,116.3 117.6,116.9 127.2,117.5 136.8,118.3 146.4,119.2 156.0,120.2 165.6,121.3 175.2,122.5 184.8,123.8 194.4,125.2 204.0,126.7 213.6,128.3 223.2,130.0 232.8,131.8 242.4,133.8 252.0,135.8 261.6,137.9 271.2,140.2 280.8,142.5 290.4,145.0 300.0,147.5 309.6,150.2 319.2,152.9 328.8,155.8 338.4,158.7 348.0,161.8 357.6,165.0 367.2,168.2 376.8,171.6 386.4,175.1 396.0,178.7 405.6,182.4 415.2,186.2 424.8,190.1 434.4,194.1 444.0,198.2 453.6,202.4 463.2,206.7 472.8,211.1 482.4,215.7 492.0,220.3 501.6,225.0 511.2,229.9 520.8,234.8 530.4,239.9 540.0,245.0"/><text x="540" y="233" text-anchor="end" class="d-t s a">CC2</text><polyline class="d-a" points="60.0,160.0 69.6,160.1 79.2,160.2 88.8,160.5 98.4,160.8 108.0,161.3 117.6,161.9 127.2,162.5 136.8,163.3 146.4,164.2 156.0,165.2 165.6,166.3 175.2,167.5 184.8,168.8 194.4,170.2 204.0,171.7 213.6,173.3 223.2,175.0 232.8,176.8 242.4,178.8 252.0,180.8 261.6,182.9 271.2,185.2 280.8,187.5 290.4,190.0 300.0,192.5 309.6,195.2 319.2,197.9 328.8,200.8 338.4,203.7 348.0,206.8 357.6,210.0 367.2,213.2 376.8,216.6 386.4,220.1 396.0,223.7 405.6,227.4 415.2,231.2 424.8,235.1 434.4,239.1 444.0,243.2 453.6,247.4 463.2,251.7 472.8,256.1 482.4,260.7 492.0,265.3 501.6,270.0 511.2,274.9 520.8,279.8 530.4,284.9 540.0,290.0"/><text x="540" y="278" text-anchor="end" class="d-t s a">CC3</text><polyline class="d-b" points="300.0,40.0 300.0,300.0"/><text x="306" y="286" text-anchor="start" class="d-t s b">Hoist load (T constant)</text><polyline class="d-c" points="60.0,300.0 60.1,294.8 60.5,289.6 61.2,284.4 62.0,279.2 63.2,274.0 64.6,268.8 66.3,263.6 68.2,258.4 70.4,253.2 72.8,248.0 75.5,242.8 78.4,237.6 81.6,232.4 85.1,227.2 88.8,222.0 92.8,216.8 97.0,211.6 101.5,206.4 106.2,201.2 111.2,196.0 116.4,190.8 122.0,185.6 127.7,180.4 133.7,175.2 140.0,170.0 146.5,164.8 153.3,159.6 160.4,154.4 167.6,149.2 175.2,144.0 183.0,138.8 191.1,133.6 199.4,128.4 208.0,123.2 216.8,118.0 225.9,112.8 235.2,107.6 244.8,102.4 254.7,97.2 264.8,92.0 275.2,86.8 285.8,81.6 296.7,76.4 307.8,71.2 319.2,66.0 330.8,60.8 342.8,55.6 354.9,50.4 367.3,45.2 380.0,40.0"/><text x="392" y="46" text-anchor="start" class="d-t s c">Fan load (T ∝ n²)</text><circle cx="300" cy="102.5" r="5" class="d-dot"/><text x="308" y="96.5" text-anchor="start" class="d-t s">H1</text><circle cx="300" cy="147.5" r="5" class="d-dot"/><text x="308" y="141.5" text-anchor="start" class="d-t s">H2</text><circle cx="300" cy="192.5" r="5" class="d-dot"/><text x="308" y="186.5" text-anchor="start" class="d-t s">H3</text></svg><figcaption>The operating point is where the motor curve meets the load curve. Lowering the voltage moves a hoist from H1 to H3 at the same torque.</figcaption></figure>

- Curves $CC_1$, $CC_2$, $CC_3$ are the same motor at **decreasing voltage** ($CC_1$ needs the highest voltage).
- A **hoist** (lift) has a load torque **independent of speed**. With $CC_1$ the operating point is $H_1$. Reducing the voltage moves it to $H_2$, then $H_3$. The **torque stays the same**; only the speed changes.
- The same motor driving a **fan** runs at $F_1$, $F_2$ or $F_3$ depending on the voltage. Here both speed and torque change.

> The speed of a drive is **not set by the motor alone**. It depends just as much on the **load characteristic**.

## Four-quadrant operation

<figure class="fig"><svg viewBox="0 0 600 330" role="img" aria-label="The four quadrants of the speed–torque plane. In I and III the machine motors; in II and IV it brakes as a generator."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="40" y1="170" x2="560" y2="170" class="d-ax" marker-end="url(#ah)"/><line x1="300" y1="310" x2="300" y2="20" class="d-ax" marker-end="url(#ah)"/><text x="556" y="192" text-anchor="end" class="d-t">Torque T</text><text x="308" y="30" text-anchor="start" class="d-t">Speed ω</text><text x="430" y="81" text-anchor="middle" class="d-t b a">I · Forward motoring</text><text x="430" y="103" text-anchor="middle" class="d-t s">T > 0, ω > 0</text><text x="430" y="123" text-anchor="middle" class="d-t s m">Power: machine → load</text><text x="170" y="81" text-anchor="middle" class="d-t b r">II · Forward braking</text><text x="170" y="103" text-anchor="middle" class="d-t s">T < 0, ω > 0</text><text x="170" y="123" text-anchor="middle" class="d-t s m">Power: load → machine</text><text x="170" y="231" text-anchor="middle" class="d-t b a">III · Reverse motoring</text><text x="170" y="253" text-anchor="middle" class="d-t s">T < 0, ω < 0</text><text x="170" y="273" text-anchor="middle" class="d-t s m">Power: machine → load</text><text x="430" y="231" text-anchor="middle" class="d-t b r">IV · Reverse braking</text><text x="430" y="253" text-anchor="middle" class="d-t s">T > 0, ω < 0</text><text x="430" y="273" text-anchor="middle" class="d-t s m">Power: load → machine</text></svg><figcaption>The four quadrants of the speed–torque plane. In I and III the machine motors; in II and IV it brakes as a generator.</figcaption></figure>

| Quadrant | Speed | Torque | Machine acts as | Power flow |
|---|---|---|---|---|
| I | + | + | Motor (forward motoring) | Source → machine → load |
| II | + | − | Generator (forward braking) | Load → machine |
| III | − | − | Motor (reverse motoring) | Source → machine → load |
| IV | − | + | Generator (reverse braking) | Load → machine |

1. **Quadrant I:** machine torque is in the same direction as speed; load torque opposes it. The machine takes electrical power and delivers mechanical power.
2. **Quadrant II:** speed is unchanged but torques reverse. The load torque now acts **with** the speed, so the load drives the machine, which works as a **generator**.
3. **Quadrant III:** speed and torque are both reversed relative to quadrant I, so the machine **motors in reverse**. *Example:* a bi-directional grinder works in quadrants I and III.
4. **Quadrant IV:** torque is as in quadrant I but speed reverses. Power flows from the load to the machine, which works as a **generator**. *Example:* a lift going **down**: speed reverses, torque direction does not.

### Practical example: the hoist (lift)

- A rope wound on a drum on the motor shaft carries the **cage** at one end and a **counterweight** at the other.
- The counterweight is **heavier than the empty cage** but **lighter than the fully loaded cage**, so the motor load is shared in both directions.

| Cage | Direction | Quadrant |
|---|---|---|
| Loaded | Up | I · forward motoring |
| Loaded | Down | IV · reverse braking (the load drives the motor) |
| Empty | Up | II · forward braking (the counterweight drives the motor) |
| Empty | Down | III · reverse motoring |

## Starting electric motors

The key processes in a controlled drive are **starting, speed control, braking and reversing**.

A motor started at full voltage draws a large **starting current**. The resulting **voltage dip** can disturb other equipment on the same supply, and the extra current **heats the motor**. How much depends on:

- the rms value of the starting current
- how often the motor is started
- the equipment connected
- the type of acceleration cycle and the maximum permitted acceleration

### Methods of starting

1. **Full-voltage (direct-on-line) starting:** full line voltage is applied at once. Used for DC motors up to about **2 kW**, and squirrel-cage induction and synchronous motors up to about **4 to 5 kW**.
2. **Reduced-voltage starting:** a lower voltage limits the starting current and supply dip, then rises to normal. For induction motors:
   - stator resistance starting
   - **star–delta** starting
   - **auto-transformer** starting
   - rotor resistance starting

   Starting torque is reduced.
3. **Increased-torque starting:** in a **wound-rotor** induction motor, extra **rotor resistance** reduces the current while **raising starting torque**, even up to the motor's maximum torque.
4. **Smooth variation of voltage or frequency:** a DC motor can be started by raising its voltage smoothly (for example from an AC motor–DC generator set). Induction and synchronous motors can be started from a variable-frequency source, raising frequency and voltage **in proportion**.
