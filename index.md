---
layout: default
---

Test.

<!--
<div id="box"
     style="
       position:relative;
       width:200px;height:200px;
       background:url('/assets/img/background.png') no-repeat;
       background-size:200px 200px;
     ">

  <svg width="200" height="200"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">

    <!-- dot near bottom -->
    <circle id="dotOuter" cx="25" cy="160" r="16" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="25" cy="160" r="10" fill="#ffffff"/>
  </svg>
</div>

<script>
function setDot(x){
  // x = logical value, range 0–100
  x = Math.max(0, Math.min(100, x));

  // cx = pixel position inside 200px box
  // maps x (0..100) → cx (25..175)
  const cx = 25 + (x / 100) * 150;

  document.getElementById("dotOuter").setAttribute("cx", cx);
  document.getElementById("dotInner").setAttribute("cx", cx);
}

// example
setDot(63);
</script>
-->


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
       position:absolute;
       top:8px;
       width:100%;
       text-align:center;
       font-size:12px;
       color:#2d2d2d;
     ">
    Example Text
  </div>

  <!-- center value -->
  <div style="
       position:absolute;
       top:50%;
       left:50%;
       transform:translate(-50%,-50%);
       font-size:56px;
       font-weight:600;
       color:#2d2d2d;
       line-height:1;
     ">
    21
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
function setDot(x){
  // x = logical value (0–100)
  x = Math.max(0, Math.min(100, x));

  // map x → horizontal pixel position (25 → 175)
  const cx = 25 + (x / 100) * 150;

  document.getElementById("dotOuter").setAttribute("cx", cx);
  document.getElementById("dotInner").setAttribute("cx", cx);
}

// example
setDot(63);
</script>


<br>
Some text below.
