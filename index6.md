<!-- Simplified layout: three stacked 450×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:25px;
          top:92px;
          width:400px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Adopt</span>
        <span style="flex:1;text-align:center;">Optimize</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" preserveAspectRatio="none">
        <circle id="dot1-outer" cx="34" cy="122" r="10" fill="rgba(0,0,0,0.55)"/>
        <circle id="dot1-inner" cx="34" cy="122" r="6" fill="#ffffff"/>
      </svg>

      <!-- bottom values -->
      <div class="box-value-row">
        <span class="box-value" id="value1">–</span>
        <span class="box-risk" id="risk1">–</span>
      </div>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:25px;
          top:92px;
          width:400px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Adopt</span>
        <span style="flex:1;text-align:center;">Optimize</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" preserveAspectRatio="none">
        <circle id="dot2-outer" cx="34" cy="122" r="10" fill="rgba(0,0,0,0.55)"/>
        <circle id="dot2-inner" cx="34" cy="122" r="6" fill="#ffffff"/>
      </svg>

      <!-- bottom values -->
      <div class="box-value-row">
        <span class="box-value" id="value2">–</span>
        <span class="box-risk" id="risk2">–</span>
      </div>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:25px;
          top:92px;
          width:400px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Adopt</span>
        <span style="flex:1;text-align:center;">Optimize</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" preserveAspectRatio="none">
        <circle id="dot3-outer" cx="34" cy="122" r="10" fill="rgba(0,0,0,0.55)"/>
        <circle id="dot3-inner" cx="34" cy="122" r="6" fill="#ffffff"/>
      </svg>

      <!-- bottom values -->
      <div class="box-value-row">
        <span class="box-value" id="value3">–</span>
        <span class="box-risk" id="risk3">–</span>
      </div>
    </div>
  </div>

</div>

<style>
  .indexes{
    width:450px;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }
  .index-box{
    width:450px;
    height:150px;
    position:relative;
    border-radius:14px;
    overflow:hidden;
    background-size:450px 150px;
    background-repeat:no-repeat;
    background-position:center;
  }
  .box-title{
    position:absolute;
    left:18px;
    top:12px;
    font-size:14px;
    color:#f5f5f5;
    letter-spacing:0.2px;
    z-index:2;
  }
  .dot-layer{
    position:absolute;
    left:0;
    top:0;
    width:450px;
    height:150px;
    pointer-events:none;
    z-index:1;
  }
  .box-value-row{
    position:absolute;
    left:18px;
    right:18px;
    bottom:12px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    z-index:2;
  }
  .box-value{
    font-size:22px;
    color:#f5f5f5;
    line-height:1;
  }
  .box-risk{
    font-size:12px;
    color:#bdbdbd;
    line-height:1.1;
    text-align:right;
    max-width:58%;
  }
</style>

<script>
(function(){
  // Updated anchors for /assets/img/high-bar-scale-grey.svg rendered at 450px width:
  // SVG viewBox width 540; scale group translate(-15,5); anchors at cx 45 and 525
  // => effective x range 30..510 in SVG coords, scaled by 450/540 => 25..425
  const START = 25;
  const END   = 425;
  const TOTAL = 25;

  function clamp(v, lo, hi){ return Math.min(hi, Math.max(lo, v)); }

  function stepFromPercent(pct){
    const p = clamp(pct, 0, 100);
    return Math.round((p / 100) * (TOTAL - 1)) + 1; // 1..25
  }

  function cxFromStep(step){
    const BIN = (END - START) / TOTAL;
    return START + (step - 0.5) * BIN;
  }

  function setValue(boxId, pct, valueText, riskText){
    const step = stepFromPercent(pct);
    const cx = cxFromStep(step);

    const outer = document.getElementById(`dot${boxId}-outer`);
    const inner = document.getElementById(`dot${boxId}-inner`);
    if (outer) outer.setAttribute("cx", cx);
    if (inner) inner.setAttribute("cx", cx);

    const vEl = document.getElementById(`value${boxId}`);
    const rEl = document.getElementById(`risk${boxId}`);
    if (vEl) vEl.textContent = valueText ?? "–";
    if (rEl) rEl.textContent = riskText ?? "–";
  }

  function load(){
    const data = window.__INDEX_DATA__ || null;

    if (!data){
      setValue(1, 10, "10", "Safe");
      setValue(2, 45, "45", "Moderate");
      setValue(3, 80, "80", "Severe");
      return;
    }

    setValue(1, data.box1_percent, data.box1_value, data.box1_risk);
    setValue(2, data.box2_percent, data.box2_value, data.box2_risk);
    setValue(3, data.box3_percent, data.box3_value, data.box3_risk);
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", load);
  } else {
    load();
  }
})();
</script>
