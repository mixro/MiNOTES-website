# Hardware and I/O interfacing

*Outcome 2 · CSEU 08104 Real Time System Design*

Real-time hardware must give **predictable, timely responses** to events, often within milliseconds or microseconds. That rules out much general-purpose hardware.

## Analysing hardware requirements

To analyse the hardware, you select the CPU, DSP or FPGA and the memory for **deterministic timing**, **low latency** and **efficient interrupt handling**. The analysis focuses on:

- the **WCET (worst-case execution time)** of each task;
- robust clocking and reset;
- fast I/O to sensors and actuators;
- the needs of the RTOS, such as pre-emptive scheduling.

<figure class="fig"><svg viewBox="0 0 600 310" role="img" aria-label="Hardware of a real-time system. A processor with deterministic timing sits between memory, clock and timers, an interrupt controller, data converters, digital and PWM I/O and communication interfaces, all on a stable power supply."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="225" y="95" width="150" height="70" rx="10" class="d-box a"/><text x="300.0" y="127.0" text-anchor="middle" class="d-t b">Processor</text><text x="300.0" y="143.0" text-anchor="middle" class="d-t b">(MCU / DSP / FPGA)</text><rect x="20" y="20" width="150" height="54" rx="10" class="d-box"/><text x="95.0" y="44.0" text-anchor="middle" class="d-t b">Memory</text><text x="95.0" y="60.0" text-anchor="middle" class="d-t b">Flash + RAM</text><line x1="95.0" y1="74.0" x2="218.0" y2="93.0" class="d-ax" marker-end="url(#ah)"/><rect x="225" y="15" width="150" height="54" rx="10" class="d-box"/><text x="300.0" y="39.0" text-anchor="middle" class="d-t b">Clock, timers,</text><text x="300.0" y="55.0" text-anchor="middle" class="d-t b">counters</text><line x1="300.0" y1="69.0" x2="300.0" y2="93.0" class="d-ax" marker-end="url(#ah)"/><rect x="430" y="20" width="150" height="54" rx="10" class="d-box"/><text x="505.0" y="44.0" text-anchor="middle" class="d-t b">Interrupt</text><text x="505.0" y="60.0" text-anchor="middle" class="d-t b">controller</text><line x1="505.0" y1="74.0" x2="382.0" y2="93.0" class="d-ax" marker-end="url(#ah)"/><rect x="20" y="190" width="150" height="54" rx="10" class="d-box"/><text x="95.0" y="222.0" text-anchor="middle" class="d-t b">ADC / DAC</text><line x1="218.0" y1="167.0" x2="95.0" y2="188.0" class="d-ax" marker-end="url(#ah)"/><rect x="225" y="200" width="150" height="54" rx="10" class="d-box"/><text x="300.0" y="232.0" text-anchor="middle" class="d-t b">GPIO / PWM</text><line x1="300.0" y1="167.0" x2="300.0" y2="198.0" class="d-ax" marker-end="url(#ah)"/><rect x="430" y="190" width="150" height="54" rx="10" class="d-box"/><text x="505.0" y="214.0" text-anchor="middle" class="d-t b">Comms</text><text x="505.0" y="230.0" text-anchor="middle" class="d-t b">UART SPI I²C CAN</text><line x1="382.0" y1="167.0" x2="505.0" y2="188.0" class="d-ax" marker-end="url(#ah)"/><rect x="20" y="108" width="120" height="44" rx="10" class="d-box c"/><text x="80.0" y="135.0" text-anchor="middle" class="d-t b">Sensors</text><rect x="460" y="108" width="120" height="44" rx="10" class="d-box b"/><text x="520.0" y="135.0" text-anchor="middle" class="d-t b">Actuators</text><line x1="80.0" y1="152.0" x2="90.0" y2="188.0" class="d-ax" marker-end="url(#ah)"/><line x1="375.0" y1="222.0" x2="470.0" y2="154.0" class="d-ax" marker-end="url(#ah)"/><rect x="225" y="270" width="150" height="32" rx="10" class="d-box"/><text x="300.0" y="291.0" text-anchor="middle" class="d-t s">Stable power supply</text></svg><figcaption>Hardware of a real-time system. A processor with deterministic timing sits between memory, clock and timers, an interrupt controller, data converters, digital and PWM I/O and communication interfaces, all on a stable power supply.</figcaption></figure>

| Hardware | Role | What the analysis checks | Example |
|---|---|---|---|
| **Processing unit** (MCU, microprocessor, DSP) | Runs the tasks and handles interrupts | Clock speed, instruction cycle time, **interrupt latency**, deterministic execution | A motor drive controller |
| **Memory** (Flash/ROM for code, RAM for data) | Stores the program and variables | Fast, **predictable** access time; enough capacity | A robot needs deterministic memory access for precise motion |
| **Input/output interfaces** (ADC, DAC, GPIO) | Connect to the outside world | Conversion speed, resolution, accuracy, compatibility | A temperature sensor and heater in process control |
| **Sensors and actuators** | Measure and act | Response time, accuracy, sensitivity, reliability | Pressure sensor, pump |
| **Timing and clock system** (crystal, timers, counters) | Synchronises everything and schedules tasks | Frequency, **stability**, timer resolution | A pacemaker's precise pulse timing |
| **Power supply** | Powers all parts | Regulation, current capacity, consumption, **backup** (battery) | Grid control equipment in harsh conditions |
| **Communication interfaces** (UART, SPI, I²C, CAN) | Exchange data between parts | Speed, latency, synchronization, error handling | CAN bus in a car |
| **Signal conditioning and data conversion** | Turn real signals into data within a bounded time | ADC/DAC speed and accuracy | ECG digitisation in a monitor |

### Elements of a microcontroller-based real-time system

1. **Microcontroller (CPU):** runs the program and makes decisions; it must be fast enough for every deadline.
2. **Sensors (input devices):** measure temperature, pressure, speed or position.
3. **Actuators (output devices):** motors, relays, LEDs.
4. **Memory:** ROM/Flash holds the code and RAM holds the data.
5. **Timers and counters:** give precise delays, periodic events and task timing.
6. **Communication interfaces:** UART, SPI, I²C, CAN, Ethernet.
7. **Power supply:** stable and uninterrupted.

A **microcontroller** is a compact IC that puts a **processor, memory and I/O peripherals on a single chip**. It handles control, logic, arithmetic and data storage for one dedicated job.

### Devices you should be able to describe

- **Transducer:** converts one form of energy into another, usually a physical quantity into an electrical signal. *Example:* a thermocouple in a power plant.
- **Microcontroller:** a small computer on one chip that processes sensor data and makes control decisions. *Example:* the speed and direction controller in a motor drive.
- **Actuator:** converts electrical control signals into physical action. *Example:* a valve actuator controlling steam flow.
- **Data processor:** the unit that processes input data and runs the control algorithm, such as a CPU, DSP or PLC. *Example:* a PLC controlling a turbine from pressure and flow data.
- **Latch:** stores the previous state of data and changes only when a new state is loaded. It holds an output steady between updates.
- **Valve:** a mechanism that allows or stops the flow of a fluid.

## Analog I/O interfacing

Analog I/O interfacing is the hardware and software chain that lets the controller **sense analog signals** and **produce analog outputs** within guaranteed timing bounds:

$$\text{sensor} \to \text{conditioning} \to \text{ADC} \to \text{processing} \to \text{DAC/PWM} \to \text{driver} \to \text{actuator}$$

<figure class="fig"><svg viewBox="0 0 600 210" role="img" aria-label="Analog I/O chain. The sensor signal is conditioned, sampled by the ADC at fixed instants (period T), processed, and returned to the actuator through a DAC or PWM output and a driver. Every step must finish inside one sampling period."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="6" y="40" width="74" height="56" rx="10" class="d-box c"/><text x="43.0" y="73.0" text-anchor="middle" class="d-t s">Sensor</text><rect x="90" y="40" width="74" height="56" rx="10" class="d-box"/><text x="127.0" y="65.0" text-anchor="middle" class="d-t s">Amplify,</text><text x="127.0" y="81.0" text-anchor="middle" class="d-t s">filter</text><line x1="80.0" y1="68.0" x2="89.0" y2="68.0" class="d-ax" marker-end="url(#ah)"/><rect x="174" y="40" width="74" height="56" rx="10" class="d-box"/><text x="211.0" y="65.0" text-anchor="middle" class="d-t s">S/H</text><text x="211.0" y="81.0" text-anchor="middle" class="d-t s">+ ADC</text><line x1="164.0" y1="68.0" x2="173.0" y2="68.0" class="d-ax" marker-end="url(#ah)"/><rect x="258" y="40" width="74" height="56" rx="10" class="d-box a"/><text x="295.0" y="65.0" text-anchor="middle" class="d-t s">CPU</text><text x="295.0" y="81.0" text-anchor="middle" class="d-t s">control</text><line x1="248.0" y1="68.0" x2="257.0" y2="68.0" class="d-ax" marker-end="url(#ah)"/><rect x="342" y="40" width="74" height="56" rx="10" class="d-box"/><text x="379.0" y="65.0" text-anchor="middle" class="d-t s">DAC /</text><text x="379.0" y="81.0" text-anchor="middle" class="d-t s">PWM</text><line x1="332.0" y1="68.0" x2="341.0" y2="68.0" class="d-ax" marker-end="url(#ah)"/><rect x="426" y="40" width="74" height="56" rx="10" class="d-box"/><text x="463.0" y="73.0" text-anchor="middle" class="d-t s">Driver</text><line x1="416.0" y1="68.0" x2="425.0" y2="68.0" class="d-ax" marker-end="url(#ah)"/><rect x="510" y="40" width="74" height="56" rx="10" class="d-box b"/><text x="547.0" y="73.0" text-anchor="middle" class="d-t s">Actuator</text><line x1="500.0" y1="68.0" x2="509.0" y2="68.0" class="d-ax" marker-end="url(#ah)"/><line x1="174.0" y1="120.0" x2="416.0" y2="120.0" class="d-a"/><text x="300.0" y="140.0" text-anchor="middle" class="d-t s a">sample → compute → update: bounded latency, low jitter</text><line x1="40.0" y1="185.0" x2="560.0" y2="185.0" class="d-ax"/><line x1="60.0" y1="185.0" x2="60.0" y2="162.0" class="d-ax" marker-end="url(#ah)"/><text x="60.0" y="202.0" text-anchor="middle" class="d-t s m">0</text><line x1="160.0" y1="185.0" x2="160.0" y2="162.0" class="d-ax" marker-end="url(#ah)"/><text x="160.0" y="202.0" text-anchor="middle" class="d-t s m">T</text><line x1="260.0" y1="185.0" x2="260.0" y2="162.0" class="d-ax" marker-end="url(#ah)"/><text x="260.0" y="202.0" text-anchor="middle" class="d-t s m">2T</text><line x1="360.0" y1="185.0" x2="360.0" y2="162.0" class="d-ax" marker-end="url(#ah)"/><text x="360.0" y="202.0" text-anchor="middle" class="d-t s m">3T</text><line x1="460.0" y1="185.0" x2="460.0" y2="162.0" class="d-ax" marker-end="url(#ah)"/><text x="460.0" y="202.0" text-anchor="middle" class="d-t s m">4T</text><text x="470.0" y="160.0" text-anchor="middle" class="d-t s m">sampling instants</text></svg><figcaption>Analog I/O chain. The sensor signal is conditioned, sampled by the ADC at fixed instants (period T), processed, and returned to the actuator through a DAC or PWM output and a driver. Every step must finish inside one sampling period.</figcaption></figure>

The critical real-time requirement is that **both measurement and actuation happen at predictable instants**, with **bounded latency and low jitter**. That is why the ADC is triggered by a hardware timer, not by a software loop.

## Digital and pulse I/O interfacing

Digital and pulse interfaces handle **on/off** signals and **time-based** signals such as pulse trains.

### Digital input

- **Sources:** switches, push buttons, limit switches, proximity sensors, logic outputs.
- **Hardware:** input buffering and **level shifting** (5 V → 3.3 V); **debouncing** for mechanical contacts; **opto-isolation** for industrial safety.
- **Real-time behaviour:** critical inputs use **interrupts**, with bounded, deterministic latency. **Polling** is acceptable for non-critical inputs with known timing.
- **Examples:** an emergency stop switch; a door open/closed sensor.

### Digital output

- **Hardware:** GPIO with output drivers; relay drivers, transistor switches, opto-isolated outputs; **flyback diodes** on inductive loads.
- **Real-time behaviour:** the output must change **within the deadline** after the computation.
- **Examples:** switching a heater; driving alarms or indicator LEDs.

### Pulse input

Pulse inputs carry their information in **frequency, period or pulse count**, and are used for speed, position and event counting.

- **Hardware:** hardware counters, **timer capture units**, edge-triggered interrupts.
- **Real-time behaviour:** minimal jitter is needed, because a missed pulse means a wrong measurement. **Hardware capture is preferred** over software polling.
- **Examples:** an encoder for motor speed and position; a flow-meter pulse output.

### Pulse output (PWM)

- **Hardware:** hardware timers and **PWM generators**, plus driver circuits.
- **Real-time behaviour:** the width and frequency must be precise and stable, because jitter directly harms control quality.
- **Examples:** motor speed control, servo control, LED dimming.

### Comparison

| Feature | Analog I/O | Digital I/O | Pulse I/O |
|---|---|---|---|
| Signal | Continuous | Discrete (0/1) | Time-based digital |
| Information in | Amplitude | Logic level | Pulse width, frequency or count |
| Hardware | ADC, DAC, conditioning | GPIO, buffers, drivers | Timers, counters, PWM units |
| Complexity | High | Low | Medium |
| Timing sensitivity | Very high | High | Very high |
| Latency requirement | Strictly bounded | Bounded | Strictly bounded |
| Jitter tolerance | Low | Moderate | Very low |
| Real-time impact | Control stability | Event detection | Speed and position control |
