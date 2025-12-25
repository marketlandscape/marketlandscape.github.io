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
       position:absolute;
       top:8px;
       width:100%;
       text-align:center;
       font-size:14px;
       color:#ffffff;
       line-height:1.0;   /* ← adjust this */
     ">
    EXAMPLE<br>
    Example Text<br>
    Navigation Index
  </div>

  <!-- center value (dynamic) -->
  <div id="centerValue" style="
       position:absolute;
       top:50%;
       left:50%;
       transform:translate(-50%,-50%);
       font-size:56px;
       font-weight:600;
       color:#ffffff;
       line-height:1;
     ">
    --
  </div>

  <!-- bottom label -->
  <div style="
       position:absolute;
       bottom:12px;
       width:100%;
       text-align:center;
       font-size:14px;
       color:#d9d9d9;
     ">
    Bottom Text
  </div>

  <!-- dot overlay -->
  <svg width="200" height="200"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">

    <circle id="dotOuter" cx="25" cy="146" r="15" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="25" cy="146" r="9" fill="#ffffff"/>
  </svg>
</div>

<script>
function setValue(x){
  // x = logical value (0–100)
  x = Math.max(0, Math.min(100, Number(x)));

  // map x → horizontal pixel position (25 → 175)
  const cx = 25 + (x / 100) * 150;

  document.getElementById("dotOuter").setAttribute("cx", cx);
  document.getElementById("dotInner").setAttribute("cx", cx);

  // update center text (two digits)
  document.getElementById("centerValue").textContent =
    String(Math.round(x)).padStart(2, "0");
}

// example
setValue(21);
</script>

<br>




