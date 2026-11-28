# Data acquisition

*Outcomes 2 and 4 · CSEU 08104 Real Time System Design*

**Data acquisition (DAQ or DAS)** is the process of **sampling** signals that measure real-world physical conditions and **converting** the samples into digital values a computer can use, **within a guaranteed time**.

In a real-time system both the **accuracy** of the data and the **time** at which it is acquired and processed matter. A delay beyond the deadline can cause failure in safety-critical applications.

## Components

1. **Sensors and transducers:** convert temperature, pressure, voltage or biological signals into electrical signals.
2. **Signal conditioning:** amplifies weak signals, filters noise and scales the signal for the converter.
3. **Analog-to-digital converter (ADC):** needs a fast conversion time, high resolution and predictable performance.
4. **Processing unit:** an MCU or processor that processes the data at once and makes control decisions.
5. **Memory, communication interfaces and output devices** complete the architecture.

<figure class="fig"><svg viewBox="0 0 600 210" role="img" aria-label="Data acquisition system. Several sensors are conditioned, selected in turn by a multiplexer and converted by one ADC at timer-controlled instants; the processor buffers and processes the samples and sends them to a display, storage or the network."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="6" y="15" width="80" height="42" rx="10" class="d-box c"/><text x="46.0" y="41.0" text-anchor="middle" class="d-t s">Sensor 1</text><rect x="102" y="15" width="92" height="42" rx="10" class="d-box"/><text x="148.0" y="41.0" text-anchor="middle" class="d-t s">Conditioning</text><line x1="86.0" y1="36.0" x2="100.0" y2="36.0" class="d-ax" marker-end="url(#ah)"/><line x1="194.0" y1="36.0" x2="214.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><rect x="6" y="71" width="80" height="42" rx="10" class="d-box c"/><text x="46.0" y="97.0" text-anchor="middle" class="d-t s">Sensor 2</text><rect x="102" y="71" width="92" height="42" rx="10" class="d-box"/><text x="148.0" y="97.0" text-anchor="middle" class="d-t s">Conditioning</text><line x1="86.0" y1="92.0" x2="100.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><line x1="194.0" y1="92.0" x2="214.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><rect x="6" y="127" width="80" height="42" rx="10" class="d-box c"/><text x="46.0" y="153.0" text-anchor="middle" class="d-t s">Sensor 3</text><rect x="102" y="127" width="92" height="42" rx="10" class="d-box"/><text x="148.0" y="153.0" text-anchor="middle" class="d-t s">Conditioning</text><line x1="86.0" y1="148.0" x2="100.0" y2="148.0" class="d-ax" marker-end="url(#ah)"/><line x1="194.0" y1="148.0" x2="214.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><rect x="216" y="66" width="70" height="52" rx="10" class="d-box"/><text x="251.0" y="97.0" text-anchor="middle" class="d-t b">MUX</text><rect x="304" y="66" width="70" height="52" rx="10" class="d-box"/><text x="339.0" y="97.0" text-anchor="middle" class="d-t b">ADC</text><line x1="286.0" y1="92.0" x2="302.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><rect x="392" y="60" width="92" height="64" rx="10" class="d-box a"/><text x="438.0" y="89.0" text-anchor="middle" class="d-t b">Processor</text><text x="438.0" y="105.0" text-anchor="middle" class="d-t b">+ buffer</text><line x1="374.0" y1="92.0" x2="390.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><rect x="502" y="20" width="92" height="40" rx="10" class="d-box b"/><text x="548.0" y="45.0" text-anchor="middle" class="d-t s">Display</text><rect x="502" y="72" width="92" height="40" rx="10" class="d-box b"/><text x="548.0" y="97.0" text-anchor="middle" class="d-t s">Storage</text><rect x="502" y="124" width="92" height="40" rx="10" class="d-box b"/><text x="548.0" y="149.0" text-anchor="middle" class="d-t s">Network</text><line x1="484.0" y1="92.0" x2="500.0" y2="40.0" class="d-ax" marker-end="url(#ah)"/><line x1="484.0" y1="92.0" x2="500.0" y2="92.0" class="d-ax" marker-end="url(#ah)"/><line x1="484.0" y1="92.0" x2="500.0" y2="144.0" class="d-ax" marker-end="url(#ah)"/><line x1="330.0" y1="185.0" x2="330.0" y2="120.0" class="d-mut2" marker-end="url(#ah)"/><text x="330.0" y="200.0" text-anchor="middle" class="d-t s m">timer sets the sampling instants</text></svg><figcaption>Data acquisition system. Several sensors are conditioned, selected in turn by a multiplexer and converted by one ADC at timer-controlled instants; the processor buffers and processes the samples and sends them to a display, storage or the network.</figcaption></figure>

The **architecture** of a DAQ system describes how these hardware and software parts are arranged to **collect, convert, process and deliver** data within strict time constraints.

## Types of data acquisition

| Type | How it works | Suits |
|---|---|---|
| **Analog** | Continuous signals are conditioned and converted by an ADC | Temperature, pressure, ECG |
| **Digital** | Signals already binary are read directly through digital ports; no ADC | Switch states, digital sensors |
| **Continuous** | Samples continuously at a fixed rate | Signals that change all the time |
| **Periodic (time-triggered)** | A timer triggers acquisition at regular intervals: **deterministic** | Real-time control loops |
| **Event-driven (interrupt-based)** | Acquires only when an event occurs, such as a threshold crossing | Alarms, fault detection |
| **Synchronous** | Samples all channels **at the same instant** | Multi-lead ECG/EEG, three-phase power |
| **Asynchronous** | Samples channels at different times | Slowly changing signals |
| **Buffered** | Stores samples in a memory buffer before processing | High-speed or burst data |
| **Centralized** | All sensors go to one central processor | Small systems (simple, limited scalability) |

## Sampling

**Sampling** turns a continuous-time signal into a discrete-time one by measuring it at regular intervals $T_s = 1/f_s$. To avoid **aliasing**, the **Nyquist criterion** must hold:

$$f_s \ge 2 f_{max}$$

In practice $f_s$ is chosen well above $2f_{max}$, and an analog **anti-aliasing filter** removes everything above $f_s/2$ before the ADC *(beyond the notes)*.

**Example.** An ECG has useful content up to 150 Hz. The minimum sampling rate is $2 \times 150 = 300$ Hz, and a practical choice is 500 Hz, which gives $T_s = 2$ ms. Every sample must be converted and processed within 2 ms.

## Timing constraints

Timing constraints define **when tasks must execute and complete**. A real-time DAQ system must be **deterministic**.

- **Hard constraints:** a miss means system failure. *Examples:* pacemaker triggering, infusion pump control, ventilator alarms.
- **Soft constraints:** a miss lowers quality only. *Examples:* the patient monitor display, data logging.

### Key terms

- **Latency:** the delay from acquiring a signal to the system's response. It is the sum of the ADC conversion time, the processing time and the communication delay:
$$\text{Total latency} = t_{ADC} + t_{proc} + t_{comm} \le \text{Deadline}$$
- **Jitter:** the **variation** in sampling or execution timing. It distorts the samples and gives inaccurate measurements. An RTOS and hardware timers keep it small.
- **Synchronization:** keeping several channels or sensors sampled together, as in multi-lead ECG or EEG.

**Example (latency check).** The ADC takes 20 µs, filtering 300 µs and sending the result 500 µs. Total latency $= 0.82$ ms, which meets a 1 ms deadline with 0.18 ms to spare.

### Real-time constraints on acquisition

*(From the Group 4 presentation.)*

- The **sampling period** must be short enough for **control-loop stability**, not only for Nyquist. A common rule is to sample 10–20 times faster than the closed-loop bandwidth *(beyond the notes)*.
- The **latency** from sensor to CPU must be **bounded**.
- **Jitter** must be minimised.
- The **data must be fresh**: a stale value leads to wrong control decisions, so samples are **timestamped**, and a value older than its validity interval is discarded.

Acquisition is either **time-triggered** (fixed periodic sampling, used in hard real-time loops such as motor control, digital power converters and flight-control sensors) or **event-triggered** (sampling on an interrupt or threshold, used for fault detection and emergency shutdown). The RTOS or firmware handles the acquisition tasks and interrupts, and a **sampling clock (timer)** fixes the sampling instants.

## Hardware, processing and storage

- **DAQ hardware:** DAQ cards or modules, embedded systems, microcontrollers and interface buses (USB, PCI, Ethernet). Choose it by **sampling speed, number of channels, real-time constraints and power consumption**.
- **Real-time processing:** digital filtering, feature extraction, event detection and threshold comparison, optimised to avoid delay.
- **Storage and transmission:** buffers hold data before transmission or display. The design considers buffer size, preventing data loss, bandwidth and real-time visualisation.

## Accuracy, reliability and safety

- **Error sources:** sensor drift, noise, **quantization error**, timing inaccuracy (jitter). **Calibration** and good design reduce them.
- **Reliability and safety:** electrical isolation, fault detection, data integrity, compliance with standards.

## Applications and challenges

- **Applications:** patient monitoring, industrial automation, robotics, environmental monitoring, automotive systems.
- **Challenges:** noise and interference, hardware limits, strict timing, high cost, power consumption.
