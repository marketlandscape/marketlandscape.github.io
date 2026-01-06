<!-- Simplified layout: three stacked 385×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey-shrink-5.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div class="scale-zones">
        <span>Entry</span>
        <span>Scale In</span>
        <span>Hold</span>
        <span>Conviction</span>
        <span>HODL</span>
      </div>

      <!-- value (left) -->
      <div id="val1" class="value-left">–</div>

      <!-- risk line (right) -->
      <div class="risk-right">
        <span id="warn1" class="warn">⚠</span>
        <span class="risk-label">Risk level:</span>
        <span id="risk1" class="risk-val">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 385 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="22.5" cy="121" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="22.5" cy="121" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey-shrink-5.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <!-- scale zones -->
      <div class="scale-zones">
        <span>Entry</span>
        <span>Scale In</span>
        <span>Hold/Wait</span>
        <span>Reduce</span>
        <span>Exit</span>
      </div>

      <!-- value (left) -->
      <div id="val2" class="value-left">–</div>

      <!-- risk line (right) -->
      <div class="risk-right">
        <span id="warn2" class="warn">⚠</span>
        <span class="risk-label">Risk level:</span>
        <span id="risk2" class="risk-val">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 385 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="22.5" cy="121" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="22.5" cy="121" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey-shrink-5.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <!-- scale zones -->
      <div class="scale-zones">
        <span>Entry</span>
        <span>Scale In</span>
        <span>Hold/Wait</span>
        <span>Reduce</span>
        <span>Exit</span>
      </div>

      <!-- value (left) -->
      <div id="val3" class="value-left">–</div>

      <!-- risk line (right) -->
      <div class="risk-right">
        <span id="warn3" class="warn">⚠</span>
        <span class="risk-label">Risk level:</span>
        <span id="risk3" class="risk-val">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 385 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="22.5" cy="121" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="22.5" cy="121" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

</div>

<style>
.indexes{
  display:flex;
  flex-direction:column;
}

.index-box{
  position:relative;
  width:385px;
  height:150px;

  background-repeat:no-repeat;
  background-size:385px 150px;
  background-position:left top;

  font-family:system-ui,-apple-system,sans-serif;
}

.box-title{
  position:absolute;
  top:18px;
  left:20px;
  right:20px;
  font-size:15px;
  font-weight:500;
  color:#d9d9d9;
  z-index:2;
}

.scale-zones{
  position:absolute;
  left:22.5px;  /* bar region start */
  top:90px;
  width:360px;  /* bar region width (382.5 - 22.5) */
  display:flex;
  font-size:13px;
  color:#d9d9d9;
  opacity:0.5;
  letter-spacing:0.02em;
  z-index:2;
  pointer-events:none;
}
.scale-zones span{ flex:1; text-align:center; }

.value-left{
  position:absolute;
  top:44%;
  left:20px;
  transform:translateY(-50%);
  font-size:17px;
  font-weight:500;
  color:#d9d9d9;
  z-index:2;
}

.risk-right{
  position:absolute;
  top:44%;
  right:20px;
  transform:translateY(-50%);
  font-size:15px;
  color:#d9d9d9;
  z-index:2;
  white-space:nowrap;
}

.warn{
  opacity:0.5;
  margin-right:6px;
  font-size:17px;
  visibility:hidden;
}

.risk-label{ opacity:0.5; }
.risk-val{ opacity:0.75; }

.dot-layer{
  position:absolute;
  top:0;
  left:0;
  width:385px;
  height:150px;
  pointer-events:none;
  z-index:1;
}
</style>

<script>
function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

function setValue(boxId, x){
  const n = Number(x);
  if (!Number.isFinite(n)) return;

  const pct = clamp(n, 0, 100);
  const TOTAL = 25;
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  /*
    Rendered system: 385 × 150
    Bar region (scaled from SVG): START=22.5, END=382.5 (width 360)
  */
  const START = 22.5;
  const END   = 362.5;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  document.getElementById("dotOuter" + boxId)?.setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId)?.setAttribute("cx", cx);
  document.getElementById("val" + boxId).textContent = step + "/" + TOTAL;
}

function setRisk(boxId, r){
  const n = Number(r);
  if (!Number.isFinite(n)) return;
  document.getElementById("risk" + boxId).textContent =
    Math.round(clamp(n, 0, 100)) + "%";
}

function setWarn(boxId, show){
  const el = document.getElementById("warn" + boxId);
  if (el) el.style.visibility = show ? "visible" : "hidden";
}

(function(){
  const KEY = "dashboard_indexes_cache_v6";

  function applyAll(d){
    if (d.box1 !== undefined) setValue(1, d.box1);
    if (d.box2 !== undefined) setValue(2, d.box2);
    if (d.box3 !== undefined) setValue(3, d.box3);

    if (d.box1_risk !== undefined) setRisk(1, d.box1_risk);
    if (d.box2_risk !== undefined) setRisk(2, d.box2_risk);
    if (d.box3_risk !== undefined) setRisk(3, d.box3_risk);

    setWarn(1, false);
    setWarn(2, Number(d.box2) >= 80);
    setWarn(3, Number(d.box3) >= 80);
  }

  async function load(){
    try{
      const cached = sessionStorage.getItem(KEY);
      if (cached) applyAll(JSON.parse(cached));

      const res = await fetch("/data/indexes.json", { cache:"no-store" });
      if (!res.ok) return;
      const data = await res.json();

      applyAll(data);
      sessionStorage.setItem(KEY, JSON.stringify(data));
    }catch(e){}
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", load)
    : load();
})();
</script>
