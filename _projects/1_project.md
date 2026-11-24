---
layout: page
title: Real-Time Finger Kinematics Decoding with Multimodal Sensing
description: Real-time finger-angle prediction from forearm ultrasound, EMG and IMU for assistive robotics
img: assets/img/ultrasound_hand.gif
importance: 1
category: work
---

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/realtime_demo.mp4" class="img-fluid rounded z-depth-1" controls=true muted=true loop=true autoplay=true %}
  </div>
</div>
<div class="caption">
Real-time test: finger angles predicted live from forearm ultrasound.
</div>

### Application: Playing the Piano with Forearm Ultrasound

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/piano.mp4" cache_bust=true class="img-fluid rounded z-depth-1" controls=true loop=true %}
  </div>
</div>
<div class="caption">
Finger motion decoded from forearm ultrasound drives a piano, with no camera.
</div>

The same signal can drive assistive devices such as hand exoskeletons and prostheses, as well as hands-free interfaces.

---

### Research Question

*Can forearm muscle activity, sensed with ultrasound, EMG and IMU, be decoded into continuous finger angles in real time, across different arm positions and as the sensor shrinks to something wearable?*

---

### Idea

The muscles that move the fingers sit in the forearm. EMG is somewhat like *listening* to those muscles through their electrical activity. Ultrasound is *seeing* them: it shows them thicken, slide and change shape as they contract.

A data glove records the true finger angles while B-mode ultrasound, EMG and IMU record the forearm at different arm positions. A neural network learns the mapping:

$$
\hat{\boldsymbol{\theta}}_t = f_{\phi}\left(\mathbf{x}_{t-T+1}, \dots, \mathbf{x}_t\right)
$$

where $$\mathbf{x}_t$$ is the sensor data and $$\hat{\boldsymbol{\theta}}_t$$ the predicted joint angles. All models are tested on unseen recordings, where real-time decoding reached **$$R^2$$ up to 0.91**.

---

### Results

*Left-hand side: glove (ground truth). Right-hand side: prediction.*

**1. B-mode imaging**  
A clinical probe images the full forearm cross-section. This sets the upper bound on accuracy.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/bmode.mp4" cache_bust=true class="img-fluid rounded z-depth-1" controls=true muted=true loop=true %}
  </div>
</div>

**2. From B-mode to M-mode**  
A wearable sensor would see only a few single beams (M-mode). I simulated these from the B-mode data and trained a *student* model on them, guided by the B-mode *teacher*. Most of the accuracy survives.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/bmode_to_mmode.mp4" cache_bust=true class="img-fluid rounded z-depth-1" controls=true muted=true loop=true %}
  </div>
</div>

**3. Wearable ultrasound sensor (TDS)**  
A real wearable sensor, evaluated on a separate recording streamed in real time.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/video/tds.mp4" cache_bust=true class="img-fluid rounded z-depth-1" controls=true muted=true loop=true %}
  </div>
</div>

---

### Significance

Accuracy holds as the sensor shrinks from a clinical probe to a wearable device, which is the step needed to take ultrasound control out of the lab.

---

### Tools & Skills

Ultrasound (B-mode, M-mode) · EMG · IMU · Deep learning · Teacher–student distillation · Real-time inference · Data-glove motion capture
