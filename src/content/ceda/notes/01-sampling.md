# Sampling and reconstruction

> Starter notes. Replace this file with your own lecture notes for EEU 08101.

In digital control, a computer reads the plant output through an **A/D converter** at regular instants $t = kT$, computes the control law, and drives the plant through a **D/A converter** and a hold.

## The sampling theorem

A continuous signal with no frequency content above $f_{max}$ can be recovered exactly from its samples if

$$f_s > 2 f_{max}$$

$f_s/2$ is the **Nyquist frequency**. Sampling slower than this causes **aliasing**, where high frequencies appear as false low frequencies. An analogue **anti-aliasing filter** is placed before the A/D converter.

> Rule of thumb for control: sample 10 to 30 times faster than the closed-loop bandwidth.

## Zero-order hold (ZOH)

The D/A converter holds each value constant for one sampling period:

$$G_{h0}(s) = \frac{1 - e^{-sT}}{s}$$

The ZOH adds a delay of roughly $T/2$, which reduces phase margin.

## Discretising a plant with a ZOH

The pulse transfer function of a plant $G(s)$ preceded by a ZOH is

$$G(z) = (1 - z^{-1})\,\mathcal{Z}\left\{\frac{G(s)}{s}\right\}$$

### Example

For $G(s) = \dfrac{a}{s+a}$:

$$G(z) = \frac{1 - e^{-aT}}{z - e^{-aT}}$$
