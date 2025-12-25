---
layout: default
---

Test.

<div id="box"
     style="
       position:relative;
       width:200px;height:200px;
       background:url('/assets/img/background.png') no-repeat;
       background-size:200px 200px;
       font-family: system-ui, -apple-system, sans-serif;
     ">

  <!-- top label -->
  <div style="
       position:absolute; top:8px; width:100%;
       text-align:center; font-size:12px; color:#2d2d2d;
     ">
    Example Text
  </div>

  <!-- center value (will be set from x) -->
  <div id="centerValue" style="
       position:absolute;
       top:50%; left:50%;
       transform:translate(-50%,-50%);
       font-size:56px; font-weight:600;
       color:#2d2d2d; line-height:1;
     ">
    00
  </div>

  <!-- dot overlay -->
  <svg width="200" height="200"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">

    <circle id="dotOuter" cx="25" cy="180" r="3.2" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="25" cy="180" r="2.8" fill="#ffffff"/>
  </svg>
</div>

<script>
function setValue(x){
  // x = logical value (0–100). It controls BOTH:
  //   1) the dot horizontal position
  //   2) the big number shown in the center

  x = Math.max(0, Math.min(100, Number(x))); // clamp + ensure number

  // cx = pixel x-position inside the 200px box
  // maps x (0..100) → cx (25..175)
  const cx = 25 + (x / 100) * 150;

  // move dot
  document.getElementById("dotOuter").setAttribute("cx", cx);
  document.getElementById("dotInner").setAttribute("cx", cx);

  // show



<br>
Some text below.
