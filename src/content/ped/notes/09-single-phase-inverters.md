# Single-phase inverters

*Lecture 3 · EEU 08104 Power Electronics Design*

An **inverter** converts DC power to AC power. There are **single-phase** and **three-phase** inverters. The class notes classify the single-phase ones by circuit and load:

- **Half bridge** with R, RL or RLC load;
- **Full bridge** with R, RL or RLC load.

## Half-bridge inverter

<figure class="fig"><svg viewBox="0 0 600 290" role="img" aria-label="Half-bridge inverter: centre-tapped supply, two switches TR1 and TR2 with antiparallel diodes D1 and D2, load between O and A."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="80" y1="40" x2="80" y2="73.0" class="d-ax" /><line x1="80" y1="117.0" x2="80" y2="150" class="d-ax" /><circle cx="80" cy="95.0" r="22" class="d-box"/><text x="80" y="89.0" text-anchor="middle" class="d-t s">+</text><text x="80" y="109.0" text-anchor="middle" class="d-t s">−</text><text x="48" y="100.0" text-anchor="end" class="d-t b">V/2</text><line x1="80" y1="150" x2="80" y2="183.0" class="d-ax" /><line x1="80" y1="227.0" x2="80" y2="260" class="d-ax" /><circle cx="80" cy="205.0" r="22" class="d-box"/><text x="80" y="199.0" text-anchor="middle" class="d-t s">+</text><text x="80" y="219.0" text-anchor="middle" class="d-t s">−</text><text x="48" y="210.0" text-anchor="end" class="d-t b">V/2</text><circle cx="80" cy="150" r="3.5" class="d-dot"/><text x="70" y="155" text-anchor="end" class="d-t s b">O</text><line x1="80" y1="40" x2="400" y2="40" class="d-ax" /><line x1="80" y1="260" x2="400" y2="260" class="d-ax" /><line x1="400" y1="40" x2="400" y2="79.0" class="d-ax" /><circle cx="400" cy="79.0" r="3.5" class="d-dot"/><line x1="400" y1="111.0" x2="418" y2="83.0" class="d-ax w" /><circle cx="400" cy="111.0" r="3.5" class="d-dot"/><line x1="400" y1="111.0" x2="400" y2="150" class="d-ax" /><text x="386" y="100.0" text-anchor="end" class="d-t s">TR1</text><line x1="400" y1="150" x2="400" y2="189.0" class="d-ax" /><circle cx="400" cy="189.0" r="3.5" class="d-dot"/><line x1="400" y1="221.0" x2="418" y2="193.0" class="d-ax w" /><circle cx="400" cy="221.0" r="3.5" class="d-dot"/><line x1="400" y1="221.0" x2="400" y2="260" class="d-ax" /><text x="386" y="210.0" text-anchor="end" class="d-t s">TR2</text><line x1="400" y1="55" x2="445" y2="55" class="d-ax" /><line x1="445" y1="150" x2="445" y2="92.5" class="d-ax" /><line x1="445" y1="112.5" x2="445" y2="55" class="d-ax" /><path d="M433 112.5 L457 112.5 L445 92.5 Z" class="d-box b"/><line x1="433" y1="92.5" x2="457" y2="92.5" class="d-ax w" /><line x1="400" y1="245" x2="445" y2="245" class="d-ax" /><line x1="445" y1="245" x2="445" y2="187.5" class="d-ax" /><line x1="445" y1="207.5" x2="445" y2="150" class="d-ax" /><path d="M433 207.5 L457 207.5 L445 187.5 Z" class="d-box b"/><line x1="433" y1="187.5" x2="457" y2="187.5" class="d-ax w" /><text x="425" y="202.5" text-anchor="end" class="d-t s"></text><line x1="400" y1="150" x2="445" y2="150" class="d-ax" /><circle cx="400" cy="150" r="3.5" class="d-dot"/><circle cx="445" cy="150" r="3.5" class="d-dot"/><text x="470" y="100" text-anchor="start" class="d-t s">D1</text><text x="470" y="210" text-anchor="start" class="d-t s">D2</text><line x1="80" y1="150" x2="180" y2="150" class="d-ax" /><rect x="180" y="140" width="80" height="20" class="d-box"/><text x="220" y="132" text-anchor="middle" class="d-t s">load</text><line x1="260" y1="150" x2="400" y2="150" class="d-ax" /><text x="330" y="140" text-anchor="middle" class="d-t s b">A</text></svg><figcaption>Half-bridge inverter. TR1 connects A to +V/2 and TR2 to −V/2 for alternate half periods; D1 and D2 return reactive current to the supply. The two switches must never be on together.</figcaption></figure>

- The half-bridge needs a **centre-tapped DC supply**: a battery, or a pair of large series capacitors across a rectified AC supply.
- It has two switches, TR1 and TR2. When **TR1** is on for $T/2$, the load voltage is $+V/2$; when **TR2** is on for $T/2$, it is $-V/2$.
- The logic circuit must make sure **TR1 and TR2 are never on at the same time**, or the supply is short-circuited.

### Resistive load

The output (pole) voltage $v_{AO} = v_o$ is a square wave of $\pm V/2$, and with a resistor the current $i_o = v_o/R$ has the same shape, $\pm V/2R$. Each transistor carries $V/2R$ for half of each period.

| Quantity | Value |
|---|---|
| rms output voltage | $V_{rms} = \left[\dfrac{2}{T}\displaystyle\int_0^{T/2}\left(\dfrac{V}{2}\right)^2dt\right]^{1/2} = \dfrac{V}{2}$ |
| Fourier series | $v_o = \displaystyle\sum_{n = 1,3,5,\ldots}\dfrac{2V}{n\pi}\sin n\omega t$ |
| rms fundamental | $V_{1,rms} = \dfrac{2V}{\sqrt2\pi} = 0.45V$ |
| rms harmonic voltage | $V_h = \sqrt{V_{rms}^2 - V_{1,rms}^2}$ |
| Total harmonic distortion | $THD = \dfrac{V_h}{V_{1,rms}}$ |
| Output power, fundamental power | $P_o = \dfrac{V_{rms}^2}{R}$, $\;P_{o1} = \dfrac{V_{1,rms}^2}{R}$ |
| Peak and average transistor current | $I_p = \dfrac{V}{2R}$, $\;I_{avg} = \dfrac{I_p}{2}$ |

### Inductive (RL) load

<figure class="fig"><svg viewBox="0 0 600 300" role="img" aria-label="Half-bridge inverter waveforms: square pole voltage of plus and minus V/2, and exponential RL load current lagging it."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="80" x2="570" y2="80" class="d-ax"  marker-end="url(#ah)"/><line x1="60" y1="135" x2="60" y2="20" class="d-ax"  marker-end="url(#ah)"/><text x="70" y="26" text-anchor="start" class="d-t b">v<tspan dy="4" font-size="10">o</tspan></text><polyline class="d-a w" points="60.0,35.0 180.0,35.0 180.0,125.0 300.0,125.0 300.0,35.0 420.0,35.0 420.0,125.0 540.0,125.0"/><text x="52" y="40" text-anchor="end" class="d-t s">V/2</text><text x="52" y="130" text-anchor="end" class="d-t s">−V/2</text><line x1="60" y1="220" x2="570" y2="220" class="d-ax"  marker-end="url(#ah)"/><line x1="60" y1="280" x2="60" y2="160" class="d-ax"  marker-end="url(#ah)"/><text x="70" y="166" text-anchor="start" class="d-t b">i<tspan dy="4" font-size="10">o</tspan></text><polyline class="d-b w" points="60.0,254.3 63.0,250.4 66.0,246.7 69.0,243.2 72.0,239.9 75.0,236.7 78.0,233.7 81.0,230.9 84.0,228.1 87.0,225.5 90.0,223.1 93.0,220.7 96.0,218.5 99.0,216.4 102.0,214.4 105.0,212.4 108.0,210.6 111.0,208.9 114.0,207.2 117.0,205.7 120.0,204.2 123.0,202.7 126.0,201.4 129.0,200.1 132.0,198.9 135.0,197.7 138.0,196.6 141.0,195.6 144.0,194.5 147.0,193.6 150.0,192.7 153.0,191.8 156.0,191.0 159.0,190.2 162.0,189.5 165.0,188.8 168.0,188.1 171.0,187.5 174.0,186.9 177.0,186.3 180.0,185.7 180.0,185.7 183.0,189.6 186.0,193.3 189.0,196.8 192.0,200.1 195.0,203.3 198.0,206.3 201.0,209.1 204.0,211.9 207.0,214.5 210.0,216.9 213.0,219.3 216.0,221.5 219.0,223.6 222.0,225.6 225.0,227.6 228.0,229.4 231.0,231.1 234.0,232.8 237.0,234.3 240.0,235.8 243.0,237.3 246.0,238.6 249.0,239.9 252.0,241.1 255.0,242.3 258.0,243.4 261.0,244.4 264.0,245.5 267.0,246.4 270.0,247.3 273.0,248.2 276.0,249.0 279.0,249.8 282.0,250.5 285.0,251.2 288.0,251.9 291.0,252.5 294.0,253.1 297.0,253.7 300.0,254.3 300.0,254.3 303.0,250.4 306.0,246.7 309.0,243.2 312.0,239.9 315.0,236.7 318.0,233.7 321.0,230.9 324.0,228.1 327.0,225.5 330.0,223.1 333.0,220.7 336.0,218.5 339.0,216.4 342.0,214.4 345.0,212.4 348.0,210.6 351.0,208.9 354.0,207.2 357.0,205.7 360.0,204.2 363.0,202.7 366.0,201.4 369.0,200.1 372.0,198.9 375.0,197.7 378.0,196.6 381.0,195.6 384.0,194.5 387.0,193.6 390.0,192.7 393.0,191.8 396.0,191.0 399.0,190.2 402.0,189.5 405.0,188.8 408.0,188.1 411.0,187.5 414.0,186.9 417.0,186.3 420.0,185.7 420.0,185.7 423.0,189.6 426.0,193.3 429.0,196.8 432.0,200.1 435.0,203.3 438.0,206.3 441.0,209.1 444.0,211.9 447.0,214.5 450.0,216.9 453.0,219.3 456.0,221.5 459.0,223.6 462.0,225.6 465.0,227.6 468.0,229.4 471.0,231.1 474.0,232.8 477.0,234.3 480.0,235.8 483.0,237.3 486.0,238.6 489.0,239.9 492.0,241.1 495.0,242.3 498.0,243.4 501.0,244.4 504.0,245.5 507.0,246.4 510.0,247.3 513.0,248.2 516.0,249.0 519.0,249.8 522.0,250.5 525.0,251.2 528.0,251.9 531.0,252.5 534.0,253.1 537.0,253.7 540.0,254.3"/><text x="76.98657508550919" y="282" text-anchor="middle" class="d-t s m">D1</text><text x="136.98657508550917" y="282" text-anchor="middle" class="d-t s m">TR1</text><line x1="93.97315017101837" y1="170" x2="93.97315017101837" y2="268" class="d-mut" /><text x="196.98657508550917" y="282" text-anchor="middle" class="d-t s m">D2</text><text x="256.9865750855092" y="282" text-anchor="middle" class="d-t s m">TR2</text><line x1="213.97315017101837" y1="170" x2="213.97315017101837" y2="268" class="d-mut" /><text x="316.9865750855092" y="282" text-anchor="middle" class="d-t s m">D1</text><text x="376.9865750855092" y="282" text-anchor="middle" class="d-t s m">TR1</text><line x1="333.97315017101835" y1="170" x2="333.97315017101835" y2="268" class="d-mut" /><text x="436.9865750855092" y="282" text-anchor="middle" class="d-t s m">D2</text><text x="496.9865750855092" y="282" text-anchor="middle" class="d-t s m">TR2</text><line x1="453.97315017101835" y1="170" x2="453.97315017101835" y2="268" class="d-mut" /><text x="180" y="146" text-anchor="middle" class="d-t s m">T/2</text><text x="300" y="146" text-anchor="middle" class="d-t s m">T</text></svg><figcaption>Half-bridge inverter with an RL load. The output voltage is a ±V/2 square wave. After each switching the current is still in the old direction, so the diode (D1 or D2) conducts first and returns energy to the supply; then the transistor takes over.</figcaption></figure>

- The load current cannot change instantly with the output voltage.
- When TR1 turns off at $T/2$, the load current keeps flowing through **D2**, the load and the lower half of the supply until it falls to zero; only then does TR2 carry it.
- Similarly, when TR2 turns off at $T$, the current flows through **D1** and the upper half of the supply.
- While D1 or D2 conducts, **energy is fed back to the DC source**. These are the **feedback (freewheeling) diodes**. The DC supply current is therefore negative for part of each half cycle.

The four states in one period are:

| Interval | Conducting | Blocking |
|---|---|---|
| $0 < t < t_1$ | D1 (current still negative) | S1, S2 off; D2 reverse biased |
| $t_1 < t < T/2$ | TR1 | D1, D2 reverse biased |
| $T/2 < t < t_2$ | D2 | S1, S2 off; D1 reverse biased |
| $t_2 < t < T$ | TR2 | D1, D2 reverse biased |

The load current is

$$i_o = \sum_{n = 1,3,5,\ldots}\frac{2V}{n\pi\sqrt{R^2 + (n\omega L)^2}}\sin(n\omega t - \theta_n), \qquad \theta_n = \tan^{-1}\frac{n\omega L}{R}$$

### Worked example: half bridge, R = 2.4 Ω, V = 48 V

*Determine (a) the rms output voltage at the fundamental frequency, (b) the output power, (c) the average and peak transistor currents, (d) the rms harmonic voltage.*

**(a)** $V_{1,rms} = 0.45 \times 48 = 21.6$ V.

**(b)** $V_{rms} = 48/2 = 24$ V; $P_o = 24^2/2.4 = 240$ W.

**(c)** $I_p = \dfrac{48/2}{2.4} = 10$ A. Each transistor conducts for a 50% duty cycle, so $I_{avg} = 0.5 \times 10 = 5$ A.

**(d)** $V_h = \sqrt{24^2 - 21.6^2} = 0.2176 \times 48 = 10.45$ V. *(Added:* $THD = 10.45/21.6 = 48.3\%$.)

## Full-bridge inverter

<figure class="fig"><svg viewBox="0 0 600 290" role="img" aria-label="Full-bridge inverter: two legs, TR1 TR2 on leg A and TR3 TR4 on leg B, load between A and B."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="60" y1="40" x2="60" y2="128.0" class="d-ax" /><line x1="60" y1="172.0" x2="60" y2="260" class="d-ax" /><circle cx="60" cy="150.0" r="22" class="d-box"/><text x="60" y="144.0" text-anchor="middle" class="d-t s">+</text><text x="60" y="164.0" text-anchor="middle" class="d-t s">−</text><text x="28" y="155.0" text-anchor="end" class="d-t b">V<tspan dy="4" font-size="10">d</tspan></text><line x1="60" y1="40" x2="470" y2="40" class="d-ax" /><line x1="60" y1="260" x2="470" y2="260" class="d-ax" /><line x1="140" y1="40" x2="140" y2="79.0" class="d-ax" /><circle cx="140" cy="79.0" r="3.5" class="d-dot"/><line x1="140" y1="111.0" x2="158" y2="83.0" class="d-ax w" /><circle cx="140" cy="111.0" r="3.5" class="d-dot"/><line x1="140" y1="111.0" x2="140" y2="150" class="d-ax" /><text x="126" y="100.0" text-anchor="end" class="d-t s">TR1</text><line x1="140" y1="150" x2="140" y2="189.0" class="d-ax" /><circle cx="140" cy="189.0" r="3.5" class="d-dot"/><line x1="140" y1="221.0" x2="158" y2="193.0" class="d-ax w" /><circle cx="140" cy="221.0" r="3.5" class="d-dot"/><line x1="140" y1="221.0" x2="140" y2="260" class="d-ax" /><text x="126" y="210.0" text-anchor="end" class="d-t s">TR2</text><line x1="140" y1="55" x2="185" y2="55" class="d-ax" /><line x1="185" y1="150" x2="185" y2="92.5" class="d-ax" /><line x1="185" y1="112.5" x2="185" y2="55" class="d-ax" /><path d="M173 112.5 L197 112.5 L185 92.5 Z" class="d-box b"/><line x1="173" y1="92.5" x2="197" y2="92.5" class="d-ax w" /><text x="165" y="107.5" text-anchor="end" class="d-t s"></text><line x1="140" y1="245" x2="185" y2="245" class="d-ax" /><line x1="185" y1="245" x2="185" y2="187.5" class="d-ax" /><line x1="185" y1="207.5" x2="185" y2="150" class="d-ax" /><path d="M173 207.5 L197 207.5 L185 187.5 Z" class="d-box b"/><line x1="173" y1="187.5" x2="197" y2="187.5" class="d-ax w" /><text x="165" y="202.5" text-anchor="end" class="d-t s"></text><line x1="140" y1="150" x2="185" y2="150" class="d-ax" /><circle cx="140" cy="150" r="3.5" class="d-dot"/><circle cx="185" cy="150" r="3.5" class="d-dot"/><line x1="420" y1="40" x2="420" y2="79.0" class="d-ax" /><circle cx="420" cy="79.0" r="3.5" class="d-dot"/><line x1="420" y1="111.0" x2="438" y2="83.0" class="d-ax w" /><circle cx="420" cy="111.0" r="3.5" class="d-dot"/><line x1="420" y1="111.0" x2="420" y2="150" class="d-ax" /><text x="406" y="100.0" text-anchor="end" class="d-t s">TR3</text><line x1="420" y1="150" x2="420" y2="189.0" class="d-ax" /><circle cx="420" cy="189.0" r="3.5" class="d-dot"/><line x1="420" y1="221.0" x2="438" y2="193.0" class="d-ax w" /><circle cx="420" cy="221.0" r="3.5" class="d-dot"/><line x1="420" y1="221.0" x2="420" y2="260" class="d-ax" /><text x="406" y="210.0" text-anchor="end" class="d-t s">TR4</text><line x1="420" y1="55" x2="465" y2="55" class="d-ax" /><line x1="465" y1="150" x2="465" y2="92.5" class="d-ax" /><line x1="465" y1="112.5" x2="465" y2="55" class="d-ax" /><path d="M453 112.5 L477 112.5 L465 92.5 Z" class="d-box b"/><line x1="453" y1="92.5" x2="477" y2="92.5" class="d-ax w" /><text x="445" y="107.5" text-anchor="end" class="d-t s"></text><line x1="420" y1="245" x2="465" y2="245" class="d-ax" /><line x1="465" y1="245" x2="465" y2="187.5" class="d-ax" /><line x1="465" y1="207.5" x2="465" y2="150" class="d-ax" /><path d="M453 207.5 L477 207.5 L465 187.5 Z" class="d-box b"/><line x1="453" y1="187.5" x2="477" y2="187.5" class="d-ax w" /><text x="445" y="202.5" text-anchor="end" class="d-t s"></text><line x1="420" y1="150" x2="465" y2="150" class="d-ax" /><circle cx="420" cy="150" r="3.5" class="d-dot"/><circle cx="465" cy="150" r="3.5" class="d-dot"/><line x1="185" y1="150" x2="260" y2="150" class="d-ax" /><rect x="260" y="140" width="90" height="20" class="d-box"/><text x="305" y="132" text-anchor="middle" class="d-t s">load</text><line x1="350" y1="150" x2="420" y2="150" class="d-ax" /><text x="240" y="172" text-anchor="middle" class="d-t s b">A</text><text x="372" y="172" text-anchor="middle" class="d-t s b">B</text><text x="200" y="100" text-anchor="start" class="d-t s">D1</text><text x="200" y="210" text-anchor="start" class="d-t s">D2</text><text x="480" y="100" text-anchor="start" class="d-t s">D3</text><text x="480" y="210" text-anchor="start" class="d-t s">D4</text></svg><figcaption>Full-bridge (H-bridge) inverter. TR1 with TR4 puts +V<sub>d</sub> across the load; TR2 with TR3 puts −V<sub>d</sub>. Each switch has a feedback diode for inductive loads.</figcaption></figure>

- TR1 and TR2 are switched on and off for alternate 180° intervals; so are TR3 and TR4. Terminal A is connected alternately to the positive and negative sides of the supply, and so is B.
- The transistors switch in **diagonal pairs**: **TR1 and TR4** together put $+V_d$ across the load; **TR2 and TR3** together put $-V_d$ across it.
- Taking the DC midpoint O as a reference (even though it is not used), the **pole voltages** $v_{AO}$ and $v_{BO}$ are square waves of amplitude $V_d/2$, and the load voltage is their difference:

$$v_{AB} = v_{AO} - v_{BO}$$

a square wave of amplitude $V_d$.

- **Resistive load:** the current is the same square wave, $I_d = V_d/R$, and the feedback diodes are not needed, because the current reverses instantly.
- **Inductive load:** the current lags the voltage. At time zero TR2 and TR3 turn off and TR1 and TR4 turn on, but the current established in the load still flows from B to A for a while, through **D1 and D4** and back into the supply, returning stored energy. After half a period TR1 and TR4 turn off, TR2 and TR3 turn on, and D2, D3 conduct first.
- The **DC supply current** is a replica of the load current with alternate half cycles reversed. The intervals of negative supply current confirm that load energy returns to the source.

| Quantity | Value |
|---|---|
| rms output voltage | $V_{rms} = \left[\dfrac{2}{T}\displaystyle\int_0^{T/2}V_d^2\,dt\right]^{1/2} = V_d$ |
| Fourier series | $v(t) = \displaystyle\sum_{n = 1,3,5,\ldots}\dfrac{4V_d}{n\pi}\sin n\omega t$ |
| rms fundamental | $V_{1,rms} = \dfrac{4V_d}{\sqrt2\pi} = 0.9V_d$ |
| R load current | $i_o = \displaystyle\sum\dfrac{4V_d}{n\pi R}\sin n\omega t$ |
| RLC load impedance | $Z_n = \sqrt{R^2 + \left(n\omega L - \dfrac{1}{n\omega C}\right)^2}$, $\;\theta_n = \tan^{-1}\dfrac{n\omega L - 1/n\omega C}{R}$ |
| Load current | $i(t) = \displaystyle\sum I_{n,max}\sin(n\omega t - \theta_n)$, $\;I_{n,max} = \dfrac{4V_d}{n\pi Z_n}$ |
| Peak load current (estimate) | $I_m = \sqrt{I_1^2 + I_3^2 + I_5^2 + \cdots}$ (peak values) |
| rms load current | $I_o = I_m/\sqrt2$ |
| rms harmonic current | $I_h = \dfrac{\sqrt{I_m^2 - I_{m1}^2}}{\sqrt2}$ |
| Power, supply current | $P_o = I_o^2R$, $\;I_d = P_o/V_d$ |
| Transistor rms current | $I_R = I_o/\sqrt2 = I_m/2$ |

### Worked example: full bridge with an RLC load

*A single-phase full-bridge inverter has an RLC load with R = 10 Ω, L = 31.5 mH and C = 112 µF. The inverter frequency is 60 Hz and $V_d = 220$ V. (a) Express the instantaneous load current as a Fourier series. (b) Calculate (i) the rms load current at the fundamental frequency, (ii) the rms harmonic current up to the 9th harmonic, (iii) the power absorbed by the load and the fundamental power, (iv) the average DC supply current, (v) the rms and peak current of each transistor.*

$\omega = 2\pi \times 60 = 377$ rad/s; $X_L = 377 \times 0.0315\,n = 11.87n\ \Omega$; $X_C = \dfrac{10^6}{377 \times 112\,n} = \dfrac{23.68}{n}\ \Omega$.

| $n$ | $V_{n,max} = \dfrac{4 \times 220}{n\pi}$ (V) | $Z_n$ (Ω) | $I_{n,max}$ (A) | $\theta_n$ |
|---|---|---|---|---|
| 1 | 280.1 | 15.47 | 18.10 | −49.7° (leading) |
| 3 | 93.4 | 29.48 | 3.17 | 70.2° |
| 5 | 56.0 | 55.55 | 1.01 | 79.6° |
| 7 | 40.0 | 80.37 | 0.50 | 82.9° |
| 9 | 31.1 | 104.7 | 0.30 | 84.5° |

**(a)** $i(t) = 18.1\sin(377t + 49.7°) + 3.17\sin(3 \times 377t - 70.2°) + 1.01\sin(5 \times 377t - 79.6°) + 0.5\sin(7 \times 377t - 82.9°) + 0.3\sin(9 \times 377t - 84.5°)$ A.

**(b)(i)** $I_{o1} = 18.1/\sqrt2 = 12.8$ A.

**(ii)** $I_m = \sqrt{18.1^2 + 3.17^2 + 1.01^2 + 0.5^2 + 0.3^2} = 18.41$ A, so $I_h = \dfrac{\sqrt{18.41^2 - 18.1^2}}{\sqrt2} = 2.38$ A.

**(iii)** $I_o = 18.41/\sqrt2 = 13.02$ A; $P_o = 13.02^2 \times 10 = 1695$ W; $P_{o1} = 12.8^2 \times 10 = 1638$ W.

**(iv)** $I_d = 1695/220 = 7.7$ A.

**(v)** rms transistor current $I_R = 13.02/\sqrt2 = 9.2$ A. The slides take the peak as $I_p = I_m = 18.41$ A. That is only an estimate: the harmonics do not peak at the same instant. Adding the five terms with their phase angles gives an actual peak of about **21.0 A**, which is the safer value for rating the transistors.

> **Corrections to the lecture slides and class notes.**
> - In the RLC example the "Given" line says $f = 50$ Hz, but the question and the working use 60 Hz ($\omega = 377$ rad/s).
> - The inductive reactance is labelled $X_C$ on the slide; it is $X_L = j11.87n\ \Omega$.
> - The harmonic current is printed as $\dfrac{I_m^2 - I_{m1}^2}{\sqrt2}$, without the square root. The slide's number (2.38 A) is right; the class notes, which follow the printed formula, get 7.48 A.
> - In the half-bridge example the output power line is labelled $V_d^2/R$; it is $V_{rms}^2/R$ with $V_{rms} = 24$ V.
