# Designing, building and deploying real-time systems

*Outcomes 5, 6 and 7 · CSEU 08104 Real Time System Design*

The notes cover these outcomes only briefly: requirements, specification, process models, performance analysis and reliability design. This chapter collects that material and fills the gaps from the assessment matrix (hardware design, firmware, user interface, databases, deployment and testing). Sections marked *(beyond the notes)* are not in the lecture notes.

## Requirements and specification (software development process)

**Requirement engineering** is the process of **gathering and defining the services** the real-time system must provide, together with the constraints it must meet.

- **Functional requirements:** what the system does, its operations and their effects.
- **Non-functional requirements:** timing constraints (deadlines, periods, latency), reliability, safety and security.

Functional and non-functional requirements must be **precisely defined** and together form the **specification**.

| Requirement analysis | Specification |
|---|---|
| Finds out **what** the system must do: functions, timing, performance, reliability | A **formal, detailed, documented** statement of **how the system will behave** |
| Informal, in the users' terms | Precise, often mathematical, so it can be **checked against the requirements** |
| | Its properties can be examined **independently of the implementation** |

**When the Software Requirements Specification (SRS) may be changed:**

1. External interface requirements need adjusting.
2. Performance demands change.
3. Security factors arise.
4. Safety and quality factors arise.
5. The product's scope is widened.

## Software process models

A **software process model** is an abstract description of the activities used to develop software: specification, design and implementation, validation and evolution.

| Model | Idea | Suits |
|---|---|---|
| **Waterfall** | Fixed phases in sequence, each signed off | Stable, well-understood requirements; **safety-critical** systems needing full analysis and certification |
| **Incremental / iterative (agile)** | Deliver in small increments, with feedback after each | Changing requirements; interactive systems |
| **Prototyping (evolutionary)** | Build a prototype to discover requirements | Unclear user-interface requirements |
| **Reuse-based (COTS)** | Assemble from existing components | Business systems where packages exist |
| **V-model** | Waterfall with a test phase matched to each design phase | Embedded and safety systems |
| **Spiral** | Iterations driven by risk analysis | Large, high-risk projects |

**Choosing a model** (a classic exam question):

1. **Anti-lock braking controller:** **waterfall or V-model**, perhaps with formal methods. It is a **hard real-time, safety-critical** system whose requirements are fixed by physics. It needs complete analysis, verification and certification before implementation.
2. **Virtual reality system to support software maintenance:** **incremental with prototyping**. The requirements, especially the user interface, are uncertain and will be discovered by trying them.
3. **University accounting system replacing an existing one:** **waterfall or reuse-based**. The requirements are well known from the old system, and accounting packages can be reused.
4. **Interactive travel planner with the lowest environmental impact:** **incremental or agile**. It is user-facing, the requirements evolve, and early feedback from users is valuable.

## Modelling behaviour: FSM and statechart

- A **finite state machine (FSM)** has a finite set of states and transitions triggered by events. It is simple, but the number of states **explodes** for large systems.
- A **statechart** (Harel) extends the FSM with **hierarchy** (nested superstates), **concurrency** (orthogonal regions running in parallel), **history** states and broadcast events. Large reactive systems can then be modelled compactly.

## Designing the hardware *(Outcome 5, mostly beyond the notes)*

1. **Requirements:** the number and type of I/O; sampling rates; deadlines; environment; power; cost.
2. **Choose the processor** (MCU, DSP or FPGA) by WCET and interrupt latency, its peripherals (ADC, timers, PWM, CAN) and memory, leaving **at least 30–40% spare CPU time**.
3. **Design the interfaces** (chapter 3): sensor conditioning and ADC range; output drivers, relays, MOSFETs and opto-isolation; flyback diodes; debouncing.
4. **Timing hardware:** crystal accuracy, a hardware timer for the sampling tick, a **watchdog timer**, brown-out reset.
5. **Power:** regulation, decoupling, backup battery, supervisor.
6. **Communication:** choose the bus (UART, SPI, I²C, CAN, Ethernet) by distance, speed and determinism.
7. **Build, then integrate one I/O block at a time**, testing each before adding the next.

## Developing the firmware and software *(Outcomes 5 and 6)*

### Firmware structures

- **Super-loop (foreground/background):** `while(1)` polls the tasks in turn, and ISRs handle urgent events. It is simple, but the response time depends on the length of the loop.
- **Interrupt-driven:** the CPU sleeps, and ISRs do the work (chapter 5).
- **Cyclic executive:** a timer tick runs the schedule table (chapter 6).
- **RTOS-based:** each function is a **task** with a priority; tasks communicate through queues, semaphores and mutexes.

```c
/* RTOS sketch: 10 ms control task and an alarm ISR (FreeRTOS style) */
void ControlTask(void *p) {
    TickType_t next = xTaskGetTickCount();
    for (;;) {
        int t = adc_read(TEMP_CH);            /* sample  */
        int u = pid_update(&pid, SETPOINT, t); /* compute */
        pwm_set(HEATER, u);                    /* actuate */
        vTaskDelayUntil(&next, pdMS_TO_TICKS(10)); /* fixed period, no drift */
    }
}
void EStop_ISR(void) {                 /* top half: short */
    heater_off();
    xSemaphoreGiveFromISR(alarmSem, NULL); /* wake AlarmTask (bottom half) */
}
```

### Software development process for real-time systems

The steps are: requirements (with timing) → specification → architecture (tasks, priorities, communication) → detailed design (state machines) → coding (no dynamic memory or unbounded loops in hard tasks) → unit tests → integration on the target → timing verification (WCET, schedulability) → system and acceptance tests → maintenance.

### User interface *(beyond the notes)*

- The UI (LCD, keypad, HMI or web dashboard) runs as a **low-priority task**, so it never delays control.
- It shows status, alarms and trends, and lets the user change setpoints.
- Alarms must stand out, be acknowledged and be logged.

### Event-driven database *(beyond the notes)*

A **real-time database** (chapter 1) stores data whose validity expires. Values have **timestamps** and **validity intervals**.

To make it event driven, store records **when an event occurs** (an alarm, a threshold crossing, a state change), not continuously. Events are pushed into a **buffer or queue** by the acquisition task and written by a lower-priority logging task, so storage never blocks the control path.

## Performance analysis and testing *(Outcomes 5d and 7)*

**Performance analysis** checks whether the **timing and functional requirements** are met. *Example:* does the airbag fire within milliseconds of crash detection?

**System-level parameters** (from the Group 7 presentation):

- **response time:** from the event to the completed reaction;
- **latency:** the delay before the reaction starts;
- **deadline miss ratio:** missed deadlines ÷ total jobs, which must be **0** for hard tasks;
- **CPU utilisation:** $U = \sum C_i/T_i$, with a margin for overload.

**RTOS-level parameters** (from the notes):

- the average **interrupt time** and the average **interrupt latency**;
- the average **task-switch time**;
- the average **pre-emption time**;
- the **semaphore shuffle time** (from release to the waiting task starting);
- the **deadlock break time**.

### Types of testing

*(From the Group 7 presentation.)* Testing checks the system's behaviour under **real and worst-case** conditions.

| Test | What it checks | Example |
|---|---|---|
| **Functional** | Correct outputs for given inputs; the logic, **ignoring timing** | Washing machine: Start begins the wash; wash → rinse → spin in the right order |
| **Timing** | Response time, latency, **deadline compliance** | Traffic lights change exactly at the programmed times; a late change confuses drivers |
| **Stress** | Stability, performance under **overload**, how the system fails | A telecom base station when many users call at once |
| **Hardware-in-the-loop (HIL)** | The **real controller** connected to a **simulated plant**; sensor and actuator interaction; safety before deployment | A motor-drive controller driving a computer model of the motor |

In short: functional = correct operation; timing = correct time; stress = extreme load; HIL = real hardware with a simulated environment. Airbag controllers are tested by feeding them **simulated crash signals** and measuring the firing time.

**How to measure:**

1. Measure the **WCET** of each task: toggle a GPIO pin at the start and end and watch it on an oscilloscope, or use a cycle counter.
2. Run the **schedulability analysis** (utilisation, RM bound or response time, EDF $U \le 1$).
3. **Stress-test** with the worst-case input rates and bursts.
4. **Fault injection:** disconnect sensors, corrupt messages, stop tasks; check that the watchdog and fallback modes work.
5. **Measure jitter and latency** at the I/O pins, not only in software.
6. Run a **long soak test** to find memory leaks and drift.

## Designing for high reliability (step by step)

1. **Requirement analysis:** define the functions, timing, deadlines and reliability targets; classify each task as hard, firm or soft.
2. **Error avoidance:** a simple, modular design; proven hardware and RTOS.
3. **Error detection and removal:** watchdog timers, input validation, exception handling, BIST.
4. **Fault tolerance:** redundant processors, sensors and links; backup power; graceful degradation.
5. **Deterministic scheduling:** RM or EDF, analysed for the worst case.
6. **Reliable communication:** CAN, EtherCAT, PROFIBUS.
7. **Testing and validation:** stress testing, fault injection, WCET analysis.

## Applying real-time techniques to engineering problems *(Outcome 7)*

### Identifying the area of deployment

*(From the Group 7 presentation.)* The first step defines **where** the system will be used. It considers:

1. the **purpose** of the system;
2. the **environment** (industrial, medical, automotive, outdoor);
3. the **timing constraints** (hard or soft deadlines).

An embedded real-time system is the right choice when the problem has a deadline-driven physical process (protection, motion, dosing, safety interlocks), local sensing and actuation, unattended continuous operation, or a need for low power and low cost in one dedicated function.

| Area | What the embedded system does |
|---|---|
| **Automotive** | Engine management, ABS braking, airbags, stability control |
| **Medical** | Patient monitoring, ECG and heart-rate monitors, infusion pumps: sensor processing with real-time feedback |
| **Industrial automation** | Machine and motor control, sensor handling, efficiency and reliability |
| **Telecommunications** | Base stations, switching |
| **Consumer electronics** | Washing machines, cameras, smart-home devices |

**Three systems analysed in exam questions:**

| Application | How it works as a real-time system |
|---|---|
| **Air traffic control** | Radar and transponder data are acquired periodically; tracks are updated within each scan period; conflict detection gives alerts to controllers within seconds. It is hierarchical and distributed (radar sites → centres), with high reliability and redundancy. |
| **Networked multimedia** | Audio and video are captured, compressed and sent in frames (RTP over UDP). Each frame has a **firm** deadline: a late frame is dropped. Buffers absorb jitter. QoS covers bandwidth, delay, jitter and loss. |
| **Process control** (chemical plant) | Sensors are sampled periodically; PID loops run as periodic tasks (DDC); supervisory control sets the setpoints; alarms and emergency shutdown are **hard** deadlines. Often a hierarchical DCS. |

### Deploying the system in the environment

**Deployment** means installing and running the system in its real environment. The main activities (from the Group 7 presentation) are:

1. **Hardware installation:** sensors, controller, actuators, wiring.
2. **Software loading:** installing the RTOS and the application firmware.
3. **System configuration:** setting the parameters and operating modes.
4. **Testing and commissioning:** run the plant and check its timing, safety and response.

*Example:* a **PLC for industrial motor control**. Mount and wire the PLC and I/O; load the program; set the parameters (ramp times, overload limits); then run the motor and check the start-up timing, the emergency stop response and the protection trips.

**Environmental requirements** *(beyond the notes)*:

- an enclosure with a suitable **IP rating**, temperature range and vibration resistance;
- **EMC** measures: shielding, grounding, filtering and isolation;
- **power quality**: a UPS or battery;
- **commissioning**: calibrate the sensors and train the operators;
- **maintenance**: remote monitoring and secure firmware updates.

### Problems pipelined processors cause for real-time design *(beyond the notes)*

1. **Variable execution time:** pipeline stalls and hazards, and flushes on branches, make instruction timing depend on history.
2. **WCET is hard to bound**, especially with caches and branch prediction, so designers over-estimate and waste CPU time.
3. **Interrupt latency grows and varies**, because the pipeline must drain or flush.
4. **Context switches cost more**: more state to save, and caches and pipelines are cold afterwards.

### Requirements of real-time image processing *(beyond the notes)*

1. **High throughput:** every frame processed at the camera's frame rate (e.g. 30 frames/s gives 33 ms per frame).
2. **Low, bounded latency** from capture to decision (e.g. a reject gate on a conveyor).
3. **Large memory and bandwidth** for frame buffers.
4. **Parallel or dedicated hardware** (DSP, GPU, FPGA) and deterministic scheduling.
