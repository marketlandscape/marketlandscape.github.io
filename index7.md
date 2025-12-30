---
layout: default
---

<!--
Responsive layout for mobile added
-->

<div class="index-row">

  <!-- LEFT: 180×180 box -->
  <div class="left">
    <div id="box1"
      style="
        position:relative;
        width:180px;
        height:180px;
        background:url('/assets/img/background-circle-yellow-light.svg') no-repeat;
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
        font-size:14px;
        font-weight:500;
        color:#d9d9d9;
        line-height:1.2;
      ">
        EXAMPLE<br>
        Example Text<br>
        Navigation Index
      </div>

      <!-- center value -->
   <div id="centerValue1" style="
        position:absolute;
        top:67%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:48px;
        font-weight:600;
        color:#ffffff;
        line-height:1;
      ">
        --
      </div>

      <!-- bottom label -->
  <div id="bottomText1" style="
        position:absolute;
        bottom:12px;
        width:100%;
        text-align:center;
        font-size:14px;
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
        <circle id="dotOuter1" cx="23" cy="132" r="12" fill="#2d2d2d"/>
        <circle id="dotInner1" cx="23" cy="132" r="8" fill="#ffffff"/>
      </svg>

  </div>
  </div>

  <!-- RIGHT -->
  <div class="right">
    <p>
      This index shows the current position within the broader market cycle.
    </p>
    <p>
      The indicator is designed to reduce emotional decision-making by providing
      a slow-moving, cycle-aware reference point.
    </p>
  </div>

</div>


<div class="index-row" style="margin-top:32px;">

  <!-- LEFT: 180×180 box -->
  <div class="left">
    <div id="box2"
      style="
        position:relative;
        width:180px;
        height:180px;
        background:url('/assets/img/background-circle-blue.svg') no-repeat;
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
        color:#d9d9d9;
        line-height:1.2;
      ">
        EXAMPLE<br>
        Second Box<br>
        Navigation Index
      </div>

      <!-- center value -->
  <div id="centerValue2" style="
        position:absolute;
        top:67%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:46px;
        font-weight:600;
        color:#ffffff;
        line-height:1;
      ">
        --
      </div>

      <!-- bottom label -->
  <div id="bottomText2" style="
        position:absolute;
        bottom:12px;
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
        <circle id="dotOuter2" cx="23" cy="132" r="12" fill="#2d2d2d"/>
        <circle id="dotInner2" cx="23" cy="132" r="8" fill="#ffffff"/>
      </svg>

    </div>
  </div>

  <!-- RIGHT -->
  <div class="right">
    <p>
      This second index represents a different dimension of the cycle.
    </p>
    <p>
      The visual scale remains identical to preserve comparability.
    </p>
  </div>

</div>


<div class="index-row" style="margin-top:32px;">

  <!-- LEFT: 180×180 box -->
  <div class="left">
    <div id="box3"
      style="
        position:relative;
        width:180px;
        height:180px;
        background:url('/assets/img/background-circle-grey.svg') no-repeat;
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
        color:#d9d9d9;
        line-height:1.2;
      ">
        EXAMPLE<br>
        Third Box<br>
        Navigation Index
      </div>

      <!-- center value -->
  <div id="centerValue3" style="
        position:absolute;
        top:67%;
        left:50%;
        transform:translate(-50%,-50%);
        font-size:46px;
        font-weight:600;
        color:#ffffff;
        line-height:1;
      ">
        --
      </div>

      <!-- bottom label -->
  <div id="bottomText3" style="
        position:absolute;
        bottom:12px;
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
        <circle id="dotOuter3" cx="23" cy="132" r="12" fill="#none"/>
        <circle id="dotInner3" cx="23" cy="132" r="8" fill="#2d2d2d"/>
      </svg>

   </div>
  </div>

  <!-- RIGHT -->
  <div class="right">
    <p>
      This third index completes the initial set of indicators.
    </p>
    <p>
      Together with the other boxes, it enables side-by-side comparison.
    </p>
  </div>

</div>


<script>
const interpretations = {
  box1: [
    { max: 19, label: "Entry Buy" },
    { max: 39, label: "Probe Entry" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scale Out" },
    { max: 100, label: "Exit" }
  ],
  box2: [
    { max: 19, label: "Entry Buy" },
    { max: 39, label: "Probe Entry" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scale Out" },
    { max: 100, label: "Exit" }
  ],
  box3: [
    { max: 19, label: "Entry Buy" },
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


<script>
function setValue(boxKey, boxId, x){

  x = Math.max(0, Math.min(100, Number(x)));

  const t = (x / 100) * Math.PI;

  /* 180px geometry */
  const cx0 = 90;
  const cy0 = 144;
  const r   = 67;

  const cx = cx0 - r * Math.cos(t);
  const cy = cy0 - r * Math.sin(t);

  document.getElementById("dotOuter" + boxId).setAttribute("cx", cx);
  document.getElementById("dotOuter" + boxId).setAttribute("cy", cy);
  document.getElementById("dotInner" + boxId).setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId).setAttribute("cy", cy);

  document.getElementById("centerValue" + boxId).textContent =
    String(Math.round(x)).padStart(2, "0");

  document.getElementById("bottomText" + boxId).textContent =
    interpretationFromX(boxKey, Math.round(x));
}
</script>


<script>
async function loadIndexes(){

  const res = await fetch('/data/indexes.json', { cache: 'no-store' });
  const data = await res.json();

  setValue("box1", 1, data.box1);
  setValue("box2", 2, data.box2);
  setValue("box3", 3, data.box3);
}

loadIndexes();
</script>
