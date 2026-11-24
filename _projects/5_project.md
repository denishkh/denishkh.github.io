---
layout: page
title: Sensor-Agnostic World Model for Hand-Motion Decoding
description: One model that estimates hand state from whichever sensors are available, inspired by the Thousand Brains Theory
img: assets/video/wm_sensors.gif
importance: 1.5
category: work
---

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    <img src="/assets/video/wm_sensors.gif" class="img-fluid rounded z-depth-1" alt="Finger angle estimated from ultrasound, EMG, and both together, with uncertainty" loading="eager">
  </div>
</div>
<div class="caption">
Estimated finger motion from ultrasound, EMG, and both together. The shaded band is the model's uncertainty, which shrinks as sensors are combined.
</div>

### Application

Prosthetic hands and exoskeletons need control signals that keep working in daily life. Wearable sensors move, get swapped for different devices, or fail. Most decoders are trained for one sensor in one position and break when any of that changes.

---

### Research Question

*Can one model estimate hand state from ultrasound and EMG together, keep working when a sensor moves, changes or drops out, and adapt quickly without forgetting what it already learned?*

---

### Idea

Inspired by the [Thousand Brains Theory](https://thousandbrains.org/), the model keeps a shared estimate of the physical state of the hand and forearm. Each sensor, whether B-mode ultrasound, sparse wearable ultrasound or EMG, works as a plug-in module that adds its own evidence to that shared estimate. The model also tracks how certain it is, so unreliable sensors count for less.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/wm_concept.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Ultrasound, sparse ultrasound, EMG or any other sensor feeding one shared physical state that drives the hand" %}
  </div>
</div>
<div class="caption">
Any sensor feeds one shared physical state (hand, tissue, activation), which drives the hand.
</div>

The world model describes which physical states are plausible and what each sensor sees in a given state:

$$
\mathbf{x} \sim \mathcal{N}\left(\boldsymbol{\mu}_0, \mathbf{P}_0\right), \qquad
\mathbf{c}_s = \mathbf{H}_s \mathbf{x} + \boldsymbol{\varepsilon}_s, \quad \boldsymbol{\varepsilon}_s \sim \mathcal{N}\left(\mathbf{0}, \mathbf{R}_s\right)
$$

where $$\mathbf{x}$$ is the physical state (hand, tissue, activation) and $$\mathbf{c}_s$$ the reading from sensor $$s$$. Running it in reverse gives the state and its uncertainty from whichever sensors are present:

$$
\mathbf{P}^{-1} = \mathbf{P}_0^{-1} + \sum_{s} \mathbf{H}_s^{\top} \mathbf{R}_s^{-1} \mathbf{H}_s
$$

Each sensor adds certainty, so losing one only widens the uncertainty instead of breaking the estimate.

---

### Results

- Works across different ultrasound devices without retraining.
- Degrades gracefully when sensors drop out or fail.
- Adapts to a new sensor placement from a few minutes of calibration, without forgetting.

*More details will follow after publication.*

---

### Significance

A decoder that is not tied to one sensor, one device or one placement is a step toward assistive devices people can rely on every day.

---

### Tools & Skills

Ultrasound (B-mode, sparse) · EMG · Bayesian sensor fusion · Continual learning · Uncertainty estimation
