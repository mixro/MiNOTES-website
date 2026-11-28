# Real-time communication

*Outcome 4 · CSEU 08104 Real Time System Design*

**Real-time communication** is the exchange of data between system components (tasks, processors, sensors, actuators, devices) where **correct timing is as important as correct data**. Each message must arrive within a known, guaranteed time limit; late data may be useless or dangerous even if it is correct.

**Purpose:** to deliver data **predictably and on time**, because power systems, industrial control, SCADA and protection systems decide on the basis of fresh data.

**Key characteristics:**

1. **Deterministic timing:** the delay is bounded and known.
2. **Low latency:** minimal delay.
3. **Reliability:** no lost or corrupted messages; error detection and recovery.
4. **Priority handling:** alarms and faults are sent before routine data.

## Model of real-time communication

*(From the Group 4 presentation.)* The simplest model follows one piece of data from its **source**, through the **communication medium**, to its **destination**, and requires the whole trip to finish within the time constraint.

1. **Source:** a sensor or device produces the data, e.g. a current transformer in a substation.
2. **Communication medium:** a bus, network or wireless link carries it, with bounded delay.
3. **Destination:** a controller or actuator uses it, e.g. a protection relay that trips a breaker.

<figure class="fig"><svg viewBox="0 0 600 150" role="img" aria-label="End-to-end delay. The time from sampling the sensor to the actuator acting is the sum of acquisition, processing, distribution (network) and actuation delays, and the whole chain must finish before the deadline."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><rect x="30" y="40" width="120" height="44" rx="6" class="d-box c"/><text x="90.0" y="67.0" text-anchor="middle" class="d-t s">Acquisition</text><rect x="150" y="40" width="150" height="44" rx="6" class="d-box a"/><text x="225.0" y="67.0" text-anchor="middle" class="d-t s">Processing</text><rect x="300" y="40" width="130" height="44" rx="6" class="d-box b"/><text x="365.0" y="67.0" text-anchor="middle" class="d-t s">Distribution</text><rect x="430" y="40" width="110" height="44" rx="6" class="d-box"/><text x="485.0" y="67.0" text-anchor="middle" class="d-t s">Actuation</text><line x1="30.0" y1="100.0" x2="540.0" y2="100.0" class="d-a"/><line x1="30.0" y1="94.0" x2="30.0" y2="106.0" class="d-a"/><line x1="540.0" y1="94.0" x2="540.0" y2="106.0" class="d-a"/><text x="285.0" y="122.0" text-anchor="middle" class="d-t s a">end-to-end delay</text><line x1="565.0" y1="30.0" x2="565.0" y2="110.0" class="d-r dash"/><text x="565.0" y="24.0" text-anchor="middle" class="d-t s r">deadline</text><text x="30.0" y="22.0" text-anchor="start" class="d-t s m">sensor sampled</text><text x="540.0" y="140.0" text-anchor="end" class="d-t s m">actuator moves</text></svg><figcaption>End-to-end delay. The time from sampling the sensor to the actuator acting is the sum of acquisition, processing, distribution (network) and actuation delays, and the whole chain must finish before the deadline.</figcaption></figure>

$$\text{End-to-end delay} = t_{acquisition} + t_{processing} + t_{distribution} + t_{actuation} \le \text{Deadline}$$

## Types of network

Real-time networks are classified by **size and topology** into CAN, LAN and the Internet.

### Controller Area Network (CAN)

CANs are **very small networks**, usually under about **50 m** end to end, that connect the parts of an embedded controller. The propagation time is tiny, so a CAN behaves like a **local bus**. In cars it links the engine, brakes and other ECUs; in factories it is a **fieldbus** for controllers, drives, sensors and actuators.

<figure class="fig"><svg viewBox="0 0 600 200" role="img" aria-label="CAN bus. Every ECU or node connects to the same two-wire bus, terminated by 120 Ω at each end. Messages carry an identifier; when two nodes start together the lower identifier (higher priority) wins without destroying the frame."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><line x1="30.0" y1="110.0" x2="570.0" y2="110.0" class="d-a w"/><line x1="30.0" y1="126.0" x2="570.0" y2="126.0" class="d-b w"/><text x="40.0" y="100.0" text-anchor="start" class="d-t s a">CAN_H</text><text x="40.0" y="146.0" text-anchor="start" class="d-t s m">CAN_L</text><rect x="14" y="104" width="16" height="28" rx="3" class="d-box"/><rect x="570" y="104" width="16" height="28" rx="3" class="d-box"/><text x="22.0" y="160.0" text-anchor="middle" class="d-t s m">120 Ω</text><text x="578.0" y="160.0" text-anchor="end" class="d-t s m">120 Ω</text><rect x="70" y="20" width="84" height="50" rx="10" class="d-box a"/><text x="112.0" y="42.0" text-anchor="middle" class="d-t s">Engine</text><text x="112.0" y="58.0" text-anchor="middle" class="d-t s">ECU</text><line x1="112.0" y1="70.0" x2="112.0" y2="108.0" class="d-ax"/><line x1="100.0" y1="70.0" x2="100.0" y2="124.0" class="d-ax"/><rect x="178" y="20" width="84" height="50" rx="10" class="d-box a"/><text x="220.0" y="42.0" text-anchor="middle" class="d-t s">Brake</text><text x="220.0" y="58.0" text-anchor="middle" class="d-t s">ECU</text><line x1="220.0" y1="70.0" x2="220.0" y2="108.0" class="d-ax"/><line x1="208.0" y1="70.0" x2="208.0" y2="124.0" class="d-ax"/><rect x="286" y="20" width="84" height="50" rx="10" class="d-box a"/><text x="328.0" y="42.0" text-anchor="middle" class="d-t s">Motor</text><text x="328.0" y="58.0" text-anchor="middle" class="d-t s">drive</text><line x1="328.0" y1="70.0" x2="328.0" y2="108.0" class="d-ax"/><line x1="316.0" y1="70.0" x2="316.0" y2="124.0" class="d-ax"/><rect x="394" y="20" width="84" height="50" rx="10" class="d-box a"/><text x="436.0" y="42.0" text-anchor="middle" class="d-t s">Sensor</text><text x="436.0" y="58.0" text-anchor="middle" class="d-t s">node</text><line x1="436.0" y1="70.0" x2="436.0" y2="108.0" class="d-ax"/><line x1="424.0" y1="70.0" x2="424.0" y2="124.0" class="d-ax"/><rect x="502" y="20" width="84" height="50" rx="10" class="d-box c"/><text x="544.0" y="50.0" text-anchor="middle" class="d-t s">PLC</text><line x1="544.0" y1="70.0" x2="544.0" y2="108.0" class="d-ax"/><line x1="532.0" y1="70.0" x2="532.0" y2="124.0" class="d-ax"/><text x="300.0" y="190.0" text-anchor="middle" class="d-t s m">one twisted pair · lowest identifier wins arbitration · up to 1 Mbit/s (CAN 2.0)</text></svg><figcaption>CAN bus. Every ECU or node connects to the same two-wire bus, terminated by 120 Ω at each end. Messages carry an identifier; when two nodes start together the lower identifier (higher priority) wins without destroying the frame.</figcaption></figure>

- **Message oriented:** each frame carries an **identifier**, the data bytes (up to 8) and control information. The identifier names the content, not the destination.
- **Bus arbitration** is priority-based: the **lowest identifier has the highest priority** and wins. A safety message such as "apply brakes" always beats "temperature reading".
- **Error handling:** **CRC**, acknowledgement (**ACK**), and automatic retransmission.
- **Speed:** CAN 2.0 supports up to **1 Mbit/s**.
- **CAN controller:** handles message buffering, arbitration, error detection and acknowledgement.
- **Node versus network:** a **CAN node** is one device (ECU) on the bus; the **CAN network** is all the nodes plus the bus.

**Advantages:** high reliability, low cost, fault tolerance, real-time performance, many nodes on one pair of wires.

> **Correction to the notes.** The source says CAN uses "CSMA/CD". CAN actually uses **CSMA/CR**, also called CSMA with **bitwise (non-destructive) arbitration**. When two nodes start together, a dominant 0 bit overwrites a recessive 1, and the node that reads back a different bit stops sending. The highest-priority frame continues **undamaged**, with no collision and no lost time. That is what makes CAN deterministic, unlike classic Ethernet's CSMA/CD.

### Real-time local area network (LAN)

A **real-time LAN** is a local network, usually a **modified Ethernet**, that gives deterministic, low-latency, reliable communication between controllers and devices.

1. **Deterministic communication:** messages arrive within guaranteed deadlines.
2. **Low latency and jitter.**
3. **Modified Ethernet / TSN:** standard Ethernet is not deterministic, so real-time LANs add priority-based transmission, **time scheduling**, traffic shaping and **clock synchronization**. *Examples:* **EtherCAT**, **PROFINET**, EtherNet/IP, **Time-Sensitive Networking (TSN)**.
4. **Connects controllers and devices:** PLCs, industrial PCs, sensors, actuators.
5. **Reliability and safety:** keeps working under heavy load.

**Applications:** factory automation, robotics and motion control, SCADA, power system protection.

### Internet

The Internet is the **backbone** that connects local real-time systems to remote users, servers and the cloud. It is used for **monitoring, data logging and supervision**, not for time-critical control. It:

- sends sensor and controller data to cloud applications;
- enables remote monitoring and alerts;
- connects SCADA to web dashboards;
- covers long distances.

**Advantages:** global connectivity, low cost, easy cloud integration.

**Key limitation:** delays vary with traffic and routing, so the Internet **cannot guarantee deadlines**. It suits **soft** real-time tasks only, never hard control or safety functions.

| | CAN | Real-time LAN | Internet |
|---|---|---|---|
| Size | < 50 m (inside a machine) | A plant or building | Worldwide |
| Determinism | High | High (with TSN etc.) | None |
| Typical use | ECUs, drives, sensors | PLC-to-PLC, motion control | Remote monitoring, IoT |
| Real-time class | Hard | Hard or soft | Soft |

### Network families by technology

The notes classify networks by size (CAN, LAN, Internet). The Group 4 presentation classifies them by **technology**, which is a useful second view:

| Family | Idea | Examples |
|---|---|---|
| **Fieldbus** | Specialised industrial buses for deterministic control over short distances | CAN, Modbus, PROFIBUS |
| **Wireless real-time** | No cabling; timing guaranteed by scheduled (time-slotted) access | **WirelessHART** (process instruments), **5G URLLC** (ultra-reliable low-latency, about 1 ms) |
| **Real-time Ethernet** | Ethernet plus scheduling and clock synchronization for bounded delay | **EtherCAT**, **PROFINET IRT**, **TSN** |

Wireless links suffer interference and fading, so they are used mainly for monitoring and soft control. Hard control loops stay on wired fieldbuses or real-time Ethernet.

## Quality of service (QoS)

Real-time applications need **guarantees** from the network, expressed as **QoS parameters**:

| Parameter | Meaning |
|---|---|
| **Bandwidth** | The maximum data rate of the link; the rate at which a connection is served |
| **Latency (delay)** | Time for a packet to travel from source to destination |
| **Jitter** | Variation in delay, caused by congestion, timing drift and route changes |
| **Packet loss** | Packets dropped when links congest and switches overflow |
| **Loss rate** | The percentage of packets lost, through delay or jitter-bound violation, buffer overflow or corruption |
| **Blocking probability** | The chance a new connection is refused |
| **Mean opinion score (MOS)** | Voice quality on a 1–5 scale (5 = best) |

## Models of communication

A **communication model** defines how information moves between components: the structure, the timing and the mechanism.

| Model | How it works | Example |
|---|---|---|
| **Shared memory** | Tasks read and write a common memory area; it is fast and low latency, but needs synchronization | Robots on a line update a shared table of part status |
| **Message passing** | Tasks explicitly send and receive messages; there is no simultaneous-access conflict; common in distributed systems | A conveyor PLC tells a robot arm a package is ready |
| **Client–server** | A client requests data or a service; the server replies | A data logger requests temperature, pressure and flow from a PLC |
| **Publish–subscribe** (event driven) | Publishers post to topics; subscribers receive them; neither needs to know the other | Sensors publish "temperature exceeded"; alarms, controllers and maintenance subscribe |

### Timing-based models: time-triggered, event-triggered, hybrid

*(From the Group 4 presentation.)* Communication models can also be classified by **when** messages are sent:

- **Time-triggered:** messages go out at **predefined instants** set by a **global schedule** and a synchronized clock. *Examples:* substation automation, flight control, automotive safety (FlexRay static segment, TTP).
- **Event-triggered:** a message is sent **only when an event occurs**, such as a threshold crossing. *Examples:* a fire alarm on smoke, a motion-triggered light, a CAN alarm frame.
- **Hybrid:** both are used. A machine sends scheduled performance data (time-triggered) but sends a **stop immediately** on overheating (event-triggered).

<figure class="fig"><svg viewBox="0 0 600 190" role="img" aria-label="Time-triggered versus event-triggered communication. Time-triggered messages go out in fixed slots, whether or not the data changed. Event-triggered messages go out only when something happens. Hybrid protocols such as FlexRay use both."><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="d-fill"/></marker></defs><text x="100.0" y="50.0" text-anchor="end" class="d-t b">Time-triggered</text><text x="100.0" y="120.0" text-anchor="end" class="d-t b">Event-triggered</text><line x1="110.0" y1="60.0" x2="570.0" y2="60.0" class="d-ax" marker-end="url(#ah)"/><line x1="110.0" y1="130.0" x2="570.0" y2="130.0" class="d-ax" marker-end="url(#ah)"/><rect x="120" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="165" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="210" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="255" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="300" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="345" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="390" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="435" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="480" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="525" y="38" width="22" height="22" rx="3" class="d-box a"/><rect x="150" y="108" width="22" height="22" rx="3" class="d-box b"/><line x1="161.0" y1="160.0" x2="161.0" y2="133.0" class="d-r" marker-end="url(#ah)"/><rect x="175" y="108" width="22" height="22" rx="3" class="d-box b"/><line x1="186.0" y1="160.0" x2="186.0" y2="133.0" class="d-r" marker-end="url(#ah)"/><rect x="330" y="108" width="22" height="22" rx="3" class="d-box b"/><line x1="341.0" y1="160.0" x2="341.0" y2="133.0" class="d-r" marker-end="url(#ah)"/><rect x="505" y="108" width="22" height="22" rx="3" class="d-box b"/><line x1="516.0" y1="160.0" x2="516.0" y2="133.0" class="d-r" marker-end="url(#ah)"/><text x="340.0" y="22.0" text-anchor="middle" class="d-t s m">fixed slots from a global schedule: predictable, may send unchanged data</text><text x="340.0" y="178.0" text-anchor="middle" class="d-t s m">sent only when an event occurs (red): efficient, but bursts are possible</text></svg><figcaption>Time-triggered versus event-triggered communication. Time-triggered messages go out in fixed slots, whether or not the data changed. Event-triggered messages go out only when something happens. Hybrid protocols such as FlexRay use both.</figcaption></figure>

| Model | Determinism | Flexibility | Real-time suitability |
|---|---|---|---|
| Shared memory | Medium | Low | Single-node systems |
| Message passing | High | Medium | Distributed systems |
| Time-triggered | Very high | Low | Hard real-time |
| Event-triggered | Low to medium | High | Soft real-time (or hard, if the worst-case load is bounded) |
| Hybrid | High | High | Modern systems |

> **Note on the examples.** The presentation illustrates publish–subscribe with social-media posts and message passing with e-mail and WhatsApp. These show the *pattern*, but they are not real-time systems, because there is no deadline. Use engineering examples in an exam: an MQTT or DDS sensor topic for publish–subscribe, and RTOS message queues or CAN frames between ECUs for message passing.

## Communication protocols

A **protocol** is the set of rules for exchanging data. Real-time protocols aim for:

1. **Determinism:** delivery within a known time.
2. **Low latency.**
3. **Reliability:** nothing lost or corrupted.
4. **Synchronization** between devices.

### Hard real-time protocols (high criticality)

| Protocol | Key idea |
|---|---|
| **CAN** | Priority-based arbitration; the highest-priority message always gets the bus |
| **EtherCAT** | "Processing on the fly": one frame passes through every node, and each reads or writes its data as it passes, giving microsecond synchronization |
| **TTP** (Time-Triggered Protocol) | Every node has a pre-assigned **time slot**, so the network is fully predictable |
| **FlexRay** | Drive-by-wire cars; combines time-triggered slots with an event-driven segment |

### Soft real-time protocols (time sensitive)

| Protocol | Key idea |
|---|---|
| **UDP** | No acknowledgements or retries, so it is faster than TCP with less jitter |
| **RTP** | Adds timestamps and sequence numbers for audio and video over IP |
| **MQTT** | A lightweight publish–subscribe protocol for IoT sensors |
| **WebRTC** | Peer-to-peer audio and video in browsers |

### Analysing four industrial protocols

*(From the Group 4 presentation, with corrections.)*

| Protocol | Triggering | Medium access | Analysis | Typical use |
|---|---|---|---|---|
| **CAN** | Event triggered | Priority arbitration (lowest ID wins) | Bounded latency for each message, which can be computed by response-time analysis; limited bandwidth (1 Mbit/s, 8-byte payload) | Car ECUs, machine control |
| **FlexRay** | Hybrid: a static (time-triggered) segment and a dynamic (event) segment | TDMA slots plus a global clock | Very deterministic; 10 Mbit/s; dual channels for redundancy; hard real-time | Drive-by-wire, chassis control |
| **PROFINET IRT** | Time triggered (isochronous) | Reserved, scheduled bandwidth on Ethernet | Guaranteed bandwidth; cycle time **under 1 ms** with very low jitter | Motion control, synchronized drives |
| **EtherCAT** | Time triggered by the master | One frame processed **on the fly** by every slave | Extremely low latency (µs), high determinism and speed | Robots, CNC, fast I/O |

> **Correction.** The presentation calls CAN "suitable for soft/firm real-time systems". In fact CAN is widely used for **hard** real-time functions (engine, brakes, airbags). Its worst-case delay for each message identifier can be calculated, so its timing can be guaranteed. Only the **lowest-priority** messages can suffer long, load-dependent delays. The real limits of CAN are its bandwidth and bus length, not its determinism.

## Data distribution

**Data distribution** is how data is shared and delivered among sensors, controllers, actuators and monitors, so that each gets it **on time**.

| Type | How it works | Advantages | Disadvantages | Example |
|---|---|---|---|---|
| **Centralized** | All data goes to one central node, which distributes it | Easy to manage; simple | Single point of failure; bottleneck | Reactor readings to one PLC or SCADA server |
| **Distributed** | Nodes share data directly | No single point of failure; scalable, fast | Hard to synchronize; careful design needed | Robots exchanging status over CAN or EtherCAT |
| **Publish–subscribe** | Devices publish to topics; subscribers receive | Flexible, decoupled, scalable | Needs a broker or middleware | Temperature topic to alarms, controllers and loggers |
| **Time-triggered** | Data sent at fixed intervals on a schedule | Predictable; suits hard real-time | Wastes bandwidth if data changes slowly; inflexible | Turbine sensors to the PLC every 10 ms |

### Distribution strategies and their integration with acquisition

*(From the Group 4 presentation.)* The four distribution types above can be delivered with three strategies:

- **Time-triggered distribution:** data is sent in predefined slots. It is highly deterministic (aerospace, automotive safety).
- **Event-triggered distribution:** data is sent when it changes. Common in monitoring and diagnostics.
- **Hybrid distribution:** both together (FlexRay).

Data can be distributed through a **shared memory** model (buffers on one processor or a multicore chip) or a **message-based** model (queues, CAN, FlexRay, EtherCAT). Shared memory brings the real-time concerns of **mutual exclusion**, **priority inversion** and deterministic access time, which are covered in the chapter *Synchronisation, deadlock and priority inversion*.

Acquisition and distribution are **tightly coupled**:

1. Sensor data is acquired at fixed (time-triggered) or event-based instants.
2. Each sample is **timestamped**, so its **freshness** can be checked.
3. It is distributed by deterministic scheduling or a priority-based network.
4. The control tasks process it before their deadlines.
5. Actuation happens with a **bounded end-to-end delay**.

**Design challenges:**

- synchronizing sampling with transmission;
- managing latency and jitter;
- handling overload;
- ensuring fault tolerance;
- scaling distributed systems.

**Applications:**

- ABS and ECU networks;
- industrial automation and robotics;
- power system protection and monitoring;
- patient monitoring;
- avionics.

