---
layout: default
---

<!-- =========================
     180 × 180 NAVIGATION BOXES
     ========================= -->

<div style="
  display:flex;
  align-items:flex-start;
  gap:24px;
">

  <!-- LEFT: 180×180 box -->
  <div>

<div id="box1"
      style="
        position:relative;
        width:180px;
        height:180px;
        background:url('/assets/img/background-arc-grey.svg') no-repeat;
        background-size:180px 180px;
        font-family: system-ui, -apple-system, sans-serif;
      ">

      <!-- top label -->
  <div style="
        position:absolute;
        top:14px;
        width:100%;
        text-align:left;
        padding-left:13px;
        padding-right:11px;
        font-size:13px;
        font-weight:500;
        color:#ffffff;
        line-height:1.2;
      ">
        EXAMPLE<br>
        Example Text<br>
        Navigation Index
      </div>

      <!-- center value -->
<div id="centerValue1" style="
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:49px;
        font-weight:600;
        color:#ffffff;
        line-height:1;
      ">
        --
      </div>

      <!-- bottom label -->
 <div id="bottomText1" style="
        position:absolute;
        bottom:11px;
        width:100%;
        text-align:center;
        font-size:13px;
        color:#d9d9d9;
      ">
        --
      </div>

      <!-- dot overlay -->
 <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        style="position:absolute;left:0;top:0;pointer-events:none;"
        xmlns="http://www.w3.org/2000/svg">

        <!-- dot start position corresponds to x = 0 -->
        <circle id="dotOuter1" cx="22.5" cy="132.3" r="11.7" fill="#2d2d2dff"/>
        <circle id="dotInner1" cx="22.5" cy="132.3" r="8.1" fill="#ffffff"/>
 </svg>

    </div>
  </div>

  <!-- RIGHT: explanation text -->
  <div style="
    max-width:420px;
    font-size:14px;
    line-height:1.5;
    color:#333333;
  ">
    <p>
      This index shows the current position within the broader market cycle.
      Lower values indicate early or accumulation phases, while higher values
      indicate distribution or exit zones.
    </p>

  <p>
      The indicator is intentionally slow-moving and cycle-aware, designed to
      reduce emotional decision-making.
  </p>
  </div>

</div>


<!-- =========================
     INTERPRETATION LOGIC
     ========================= -->

<script>
const interpretations = {
  box1: [
    { max: 19, label: "Buy" },
    { max: 39, label: "Probe Entry" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scale Out" },
    { max: 100, label: "Exit" }
  ]
};

function interpretationFromX(boxKey, x){
  for (const step of interpretations[boxKey]) {
    if (x <= step.max) return step.label;
  }
  return "--";
}
</script>


<!-- =========================
     DOT POSITION SCRIPT
     (180 × 180 geometry)
     ========================= -->

<script>
/*
  Geometry for 180×180 box:

  left  = 22.5
  right = 157.5
  travel = 135
*/
function setValue(boxKey, boxId, x){

  // clamp x to 0–100
  x = Math.max(0, Math.min(100, Number(x)));

  // map x → horizontal position
  const cx = 22.5 + (x / 100) * 135;

  document.getElementById("dotOuter" + boxId).setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId).setAttribute("cx", cx);

  // update center value
  document.getElementById("centerValue" + boxId).textContent =
    String(Math.round(x)).padStart(2, "0");

  // update interpretation text
  document.getElementById("bottomText" + boxId).textContent =
    interpretationFromX(boxKey, Math.round(x));
}
</script>


<!-- =========================
     DATA LOADING
     ========================= -->

<script>
async function loadIndexes(){
  const res = await fetch('/data/indexes.json', { cache: 'no-store' });
  const data = await res.json();

  setValue("box1", 1, data.box1);
}

loadIndexes();
</script>
