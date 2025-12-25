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
       text-align:center; font-size:14px; color:#ffffff;
     ">
    Example Text
  </div>

  <!-- center value (dynamic) -->
  <div id="centerValue" style="
       position:absolute;
       top:48%; left:50%;
       transform:translate(-50%,-50%);
       font-size:56px; font-weight:600;
       color:#ffffff;
       line-height:1;
     ">
    --
  </div>

  <!-- dot overlay -->
  <svg width="200" height="200"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">

    <circle id="dotOuter" cx="25" cy="145" r="16" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="25" cy="145" r="10" fill="#ffffff"/>
  </svg>
</div>

<script>
function setValue(x){
  // x = logical value (0–100)
  x = Math.max(0, Math.min(100, Number(x)));

  // map x → horizontal pixel position (25 → 175)
  const cx = 25 + (x / 100) * 150;

  // move dot
  document.getElementById("dotOuter").setAttribute("cx", cx);
  document.getElementById("dotInner").setAttribute("cx", cx);

  // update center text (two digits)
  document.getElementById("centerValue").textContent =
    String(Math.round(x)).padStart(2, "0");
}

// example value
setValue(21);
</script>

<br>

