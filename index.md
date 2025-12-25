---
layout: default
---

<div style="
  display:flex;
  align-items:flex-start;
  gap:24px;
">

  <!-- LEFT: 200×200 box -->
  <div>

  <div id="box1"
         style="
           position:relative;
           width:200px;height:200px;
           background:url('/assets/img/background-yellow.png') no-repeat;
           background-size:200px 200px;
           font-family: system-ui, -apple-system, sans-serif;
         ">

      <!-- top label -->
  <div style="
           position:absolute;
           top:16px;
           width:100%;
           text-align:left;
           padding-left:14px;
           padding-right:12px;
           font-size:14px;
           color:#ffffff;
           line-height:1.2;
         ">
        EXAMPLE<br>
        Example Text<br>
        Navigation Index
      </div>

      <!-- center value (dynamic) -->
  <div id="centerValue1" style="
           position:absolute;
           top:50%;
           left:50%;
           transform:translate(-50%,-50%);
           font-size:54px;
           font-weight:600;
           color:#ffffff;
           line-height:1;
         ">
        --
      </div>

      <!-- bottom label (dynamic) -->
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
  <svg width="200" height="200"
           style="position:absolute;left:0;top:0;pointer-events:none;"
           xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="25" cy="147" r="14" fill="#2d2d2dff"/>
        <circle id="dotInner1" cx="25" cy="147" r="9" fill="#ffffff"/>
      </svg>

    </div>
  </div>

  <!-- RIGHT: comments / explanation -->
  <div style="
    max-width:420px;
    font-size:14px;
    line-height:1.5;
    color:#333333;
  ">
   <p>
      This index shows the current position within the broader market cycle.
   </p>

   <p>
      The indicator is designed to reduce emotional decision-making by providing
      a slow-moving, cycle-aware reference point.
   </p>
  </div>

</div>



<div style="
  display:flex;
  align-items:flex-start;
  gap:24px;
  margin-top:32px;
">

  <!-- LEFT: 200×200 box (BOX 2) -->
  <div>

  <div id="box2"
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
           top:16px;
           width:100%;
           text-align:left;
           padding-left:14px;
           padding-right:12px;
           font-size:14px;
           font-weight:500;
           color:#ffffff;
           line-height:1.2;
         ">
        EXAMPLE<br>
        Second Box<br>
        Navigation Index
      </div>

      <!-- center value (dynamic) -->
   <div id="centerValue2" style="
           position:absolute;
           top:50%;
           left:50%;
           transform:translate(-50%,-50%);
           font-size:54px;
           font-weight:600;
           color:#ffffff;
           line-height:1;
         ">
        --
      </div>

      <!-- bottom label (dynamic) -->
   <div id="bottomText2" style="
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
   <svg width="200" height="200"
           style="position:absolute;left:0;top:0;pointer-events:none;"
           xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="25" cy="147" r="14" fill="#2d2d2dff"/>
        <circle id="dotInner2" cx="25" cy="147" r="9" fill="#ffffff"/>
      </svg>

    </div>
  </div>

  <!-- RIGHT: comments / explanation -->
  <div style="
    max-width:420px;
    font-size:14px;
    line-height:1.5;
    color:#333333;
  ">
    <p>
      This second index represents a different dimension of the cycle.
      Interpretation thresholds and labels may differ from the first box.
    </p>
    <p>
      The visual scale remains identical to preserve comparability,
      while the meaning layer is box-specific.
    </p>
  </div>

</div>




<div style="
  display:flex;
  align-items:flex-start;
  gap:24px;
  margin-top:32px;
">

  <!-- LEFT: 200×200 box (BOX 3) -->
  <div>

 <div id="box3"
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
           top:16px;
           width:100%;
           text-align:left;
           padding-left:14px;
           padding-right:12px;
           font-size:14px;
           font-weight:500;
           color:#ffffff;
           line-height:1.2;
         ">
        EXAMPLE<br>
        Third Box<br>
        Navigation Index
      </div>

      <!-- center value (dynamic) -->
   <div id="centerValue3" style="
           position:absolute;
           top:50%;
           left:50%;
           transform:translate(-50%,-50%);
           font-size:54px;
           font-weight:600;
           color:#ffffff;
           line-height:1;
         ">
        --
      </div>

      <!-- bottom label (dynamic) -->
   <div id="bottomText3" style="
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
   <svg width="200" height="200"
           style="position:absolute;left:0;top:0;pointer-events:none;"
           xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="25" cy="147" r="14" fill="#2d2d2dff"/>
        <circle id="dotInner3" cx="25" cy="147" r="9" fill="#ffffff"/>
      </svg>

    </div>
  </div>

  <!-- RIGHT: comments / explanation -->
  <div style="
    max-width:420px;
    font-size:14px;
    line-height:1.5;
    color:#333333;
  ">
    <p>
      This third index completes the initial set of indicators.
      It follows the same visual scale while expressing a distinct
      interpretation layer.
    </p>

    <p>
      Together with the other boxes, it enables side-by-side
      comparison across different market dimensions.
    </p>
  </div>

</div>




<div style="
  display:flex;
  align-items:flex-start;
  gap:24px;
  margin-top:32px;
">
  <!-- LEFT: 200×200 box (BOX 4) -->
    <div>
    <div id="box4"
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
           top:16px;
           width:100%;
           text-align:left;
           padding-left:14px;
           padding-right:12px;
           font-size:14px;
           font-weight:500;
           color:#ffffff;
           line-height:1.2;
         ">
        EXAMPLE<br>
        Fourth Box<br>
        Navigation Index
      </div>
      <!-- center value (dynamic) -->
      <div id="centerValue4" style="
           position:absolute;
           top:50%;
           left:50%;
           transform:translate(-50%,-50%);
           font-size:54px;
           font-weight:600;
           color:#ffffff;
           line-height:1;
         ">
        --
      </div>
      <!-- bottom label (dynamic) -->
      <div id="bottomText4" style="
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
      <svg width="200" height="200"
           style="position:absolute;left:0;top:0;pointer-events:none;"
           xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter4" cx="25" cy="147" r="14" fill="#2d2d2dff"/>
        <circle id="dotInner4" cx="25" cy="147" r="9" fill="#ffffff"/>
      </svg>
    </div>
    </div>
  <!-- RIGHT: comments / explanation -->
    <div style="
    max-width:420px;
    font-size:14px;
    line-height:1.5;
    color:#333333;
    ">
    <p>
      This fourth index is prepared but intentionally hidden.
      It can be activated later without structural changes.
    </p>
    <p>
      All IDs, layout rules, and logic hooks are already in place.
    </p>
    </div>
    </div>






<script>
/* interpretation rules (shared, static) */
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
/*
  Updates one box based on a single numeric value.

  Parameters:
  - boxKey : string
      Logical identifier of the box ("box1", "box2", ...)
      Used to select interpretation rules.
  - boxId  : number
      Numeric suffix used in DOM element IDs (1, 2, 3, ...)
  - x      : number
      Index value in range 0–100 (may come from JSON or API)
*/
function setValue(boxKey, boxId, x){

  // Ensure x is a number and clamp it to 0–100
  x = Math.max(0, Math.min(100, Number(x)));

  // Convert logical value x (0–100)
  // into a horizontal pixel position inside the 200px box
  // 25px = left limit, 175px = right limit
  const cx = 25 + (x / 100) * 150;

  // Move the dot (outer ring and inner core)
  document.getElementById("dotOuter" + boxId).setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId).setAttribute("cx", cx);

  // Update the large numeric value in the center (always two digits)
  document.getElementById("centerValue" + boxId).textContent =
    String(Math.round(x)).padStart(2, "0");

  // Update the bottom interpretation text
  // based on box-specific rules and the current x value
  document.getElementById("bottomText" + boxId).textContent =
    interpretationFromX(boxKey, Math.round(x));
}
</script>




<script>
/*
  Loads index values from a public JSON file
  and applies them to the visual boxes.

  Flow:
  1) Fetch /data/indexes.json from the website
  2) Parse JSON into a JS object
  3) For each box:
     - read its value (0–100)
     - pass it to setValue(...)
*/
async function loadIndexes(){

  // Fetch the published index values (no browser caching)
  const res = await fetch('/data/indexes.json', { cache: 'no-store' });

  // Convert the response body to a JavaScript object
  const data = await res.json();

  // Apply values to each box
  // Arguments:
  //  - boxKey: selects interpretation logic
  //  - boxId: selects DOM elements (dot, text)
  //  - value: numeric index (0–100)
  setValue("box1", 1, data.box1);
  setValue("box2", 2, data.box2);
  setValue("box3", 3, data.box3);
  setValue("box4", 4, data.box4);
}

// Run once when the page is loaded
loadIndexes();
</script>




