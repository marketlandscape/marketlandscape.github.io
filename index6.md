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
          top:88px;
          width:400px;
          display:flex;
          justify-content:space-between;
          font-size:11px;
          color:#bdbdbd;
          pointer-events:none;
        "
      >
        <div style="width:20%; text-align:left;">Safe</div>
        <div style="width:20%; text-align:center;">Low</div>
        <div style="width:20%; text-align:center;">Moderate</div>
        <div style="width:20%; text-align:center;">High</div>
        <div style="width:20%; text-align:right;">Severe</div>
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
          top:88px;
          width:400px;
          display:flex;
          justify-content:space-between;
          font-size:11px;
          color:#bdbdbd;
          pointer-events:none;
        "
      >
        <div style="width:20%; text-align:left;">Safe</div>
        <div style="width:20%; text-align:center;">Low</div>
        <div style="width:20%; text-align:center;">Moderate</div>
        <div style="width:20%; text-align:center;">High</div>
        <div style="width:20%; text-align:right;">Severe</div>
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
          top:88px;
          width:400px;
          display:flex;
          justify-content:space-between;
          font-size:11px;
          color:#bdbdbd;
          pointer-events:none;
        "
      >
        <div style="width:20%; text-align:left;">Safe</div>
        <div style="width:20%; text-align:center;">Low</div>
        <div style="width:20%; text-align:center;">Moderate</div>
        <div style="width:20%; text-align:center;">High</div>
        <div style="width:20%; text-align:right;">Severe</div>
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
  }
  .dot-layer{
    position:absolute;
    left:0;
    top:0;
    width:450px;
    height:150px;
    pointer-events:none;
  }
  .box-value-row{
    position:absolute;
    left:18px;
    right:18px;
    bottom:12px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
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
  // bar horizontal anchors in the 450×150 rendered coordinate system
  // (based on high-bar-scale-grey.svg: viewBox width 540; scale translated -15; anchors at 45 and 525)
  const START = 25;   // left anchor x (scaled)
  const END   = 425;  // right anchor x (scaled)
  const TOTAL = 25;

  function clamp(v, lo, hi){ return Math.min(hi, Math.max(lo, v)); }

  function stepFromPercent(pct){
    // pct expected 0..100
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

  // Example defaults (replace with your real data wiring)
  function load(){
    // If your site injects data via window.__INDEX_DATA__, keep using it:
    const data = window.__INDEX_DATA__ || null;

    if (!data){
      // demo values
      setValue(1, 10, "10", "Safe");
      setValue(2, 45, "45", "Moderate");
      setValue(3, 80, "80", "Severe");
      return;
    }

    // expected fields (same as before)
    setValue(1, data.box1_percent, data.box1_value, data.box1_risk);
    setValue(2, data.box2_percent, data.box2_value, data.box2_risk);
    setValue(3, data.box3_percent, data.box3_value, data.box3_risk);

    // if you had timestamp fields before, keep them (no UI shown here)
    try{
      console.log("updated_utc", {
        box1_updated_utc: data.box1_updated_utc,
        box2_updated_utc: data.box2_updated_utc,
        box3_updated_utc: data.box3_updated_utc
      });
    } catch(e){}
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", load);
  } else {
    load();
  }
})();
</script>

