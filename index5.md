<!-- Simplified layout: three stacked 360×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

   <div style="position:absolute;left:22px;top:90px;width:316px;display:flex;font-size:13px;color:#d9d9d9;opacity:0.5;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold</span>
        <span style="flex:1;text-align:center;">Conviction</span>
        <span style="flex:1;text-align:center;">HODL</span>
      </div>

  <div id="val1" style="position:absolute;top:44%;left:22px;transform:translateY(-50%);font-size:16px;font-weight:500;color:#d9d9d9;z-index:2;">–</div>

   <div style="position:absolute;top:44%;right:22px;transform:translateY(-50%);font-size:14px;color:#d9d9d9;z-index:2;white-space:nowrap;">
        <span id="warn1" style="opacity:0.5;margin-right:6px;font-size:16px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

   <svg class="dot-layer" viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="34" cy="121" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="34" cy="121" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Blue</div>

   <div style="position:absolute;left:22px;top:90px;width:316px;display:flex;font-size:13px;color:#d9d9d9;opacity:0.5;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold/Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

   <div id="val2" style="position:absolute;top:44%;left:22px;transform:translateY(-50%);font-size:16px;font-weight:500;color:#d9d9d9;z-index:2;">–</div>

   <div style="position:absolute;top:44%;right:22px;transform:translateY(-50%);font-size:14px;color:#d9d9d9;z-index:2;white-space:nowrap;">
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:16px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
      </div>

   <svg class="dot-layer" viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="24" cy="121" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="24" cy="121" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

   <div style="position:absolute;left:22px;top:90px;width:316px;display:flex;font-size:13px;color:#d9d9d9;opacity:0.5;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold/Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

  <div id="val3" style="position:absolute;top:44%;left:22px;transform:translateY(-50%);font-size:16px;font-weight:500;color:#d9d9d9;z-index:2;">–</div>

   <div style="position:absolute;top:44%;right:22px;transform:translateY(-50%);font-size:14px;color:#d9d9d9;z-index:2;white-space:nowrap;">
        <span id="warn3" style="opacity:0.5;margin-right:6px;font-size:16px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
      </div>

   <svg class="dot-layer" viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="24" cy="121" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="24" cy="121" r="6" fill="#ffffff"/>
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
  width:360px;
  height:150px;
  background-repeat:no-repeat;
  background-size:360px 150px;
  font-family:system-ui,-apple-system,sans-serif;
}
.box-title{
  position:absolute;
  top:18px;
  left:22px;
  right:17px;
  font-size:15px;
  font-weight:500;
  color:#d9d9d9;
  line-height:1.2;
  z-index:2;
}
.dot-layer{
  position:absolute;
  inset:0;
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
  const TOTAL = 25; // unchanged
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  const START = 20;
  const END   = 340;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  document.getElementById("dotOuter" + boxId)?.setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId)?.setAttribute("cx", cx);

  const val = document.getElementById("val" + boxId);
  if (val){
    val.innerHTML = step + '<span style="opacity:0.5">/' + TOTAL + '</span>';
  }
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
