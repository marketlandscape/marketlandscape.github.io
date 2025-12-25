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
     ">

  <svg width="200" height="200"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">

    <!-- dot near bottom -->
    <circle id="dotOuter" cx="25" cy="180" r="6" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="25" cy="180" r="5" fill="#ffffff"/>
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



Some text below.
