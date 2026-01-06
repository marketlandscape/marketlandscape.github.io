<!-- FULL FILE – scale = rectangle bar only (circles ignored)
     - Dot snaps to CENTER of the corresponding rectangle (25 bins)
     - Scale labels centered over 5 groups of rectangles (5 bins each)
     - Titles/left value/right risk keep your “nudged inward” alignment
-->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones (centered over 5 rectangle groups) -->
      <div class="scale-zones">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold</span>
        <span style="flex:1;text-align:center;">Conviction</span>
        <span style="flex:1;text-align:center;">HODL</span>
      </div>

      <!-- value (left) -->
      <div id="val1" class="mid-left">–</div>

      <!-- risk line (right) -->
      <div class="mid-right">
        <span id="warn1" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer (default: center of bin #1) -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="43.11" cy="122" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="43.11" cy="122" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <div class="scale-zones">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold / Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <div id="val2" class="mid-left">–</div>

      <div class="mid-right">
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="43.11" cy="122" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="43.11" cy="122" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <div class="scale-zones">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold / Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <div id="val3" class="mid-left">–</div>

      <div class="mid-right">
        <span id="warn3" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="43.11" cy="122" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="43.11" cy="122" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

</div>

<style>
  .indexes{ display:flex; flex-direction:column; }

  .index-box{
    /* Rectangle bar edges (true scale) */
    --scale-left: 35.53px;
    --scale-right: 414.47px;

    /* Text alignment (your inward nudge) */
    --text-left: 39.53px;
    --text-right: 410.47px;

    position:relative;
    width:450px;
    height:150px;
    background-repeat:no-repeat;
    background-size:450px 150px;
    font-family:system-ui,-apple-system,sans-serif;
  }

  .box-title{
    position:absolute;
    top:18px;
    left:var(--text-left);
    right:auto;
    font-size:15px;
    font-weight:500;
    color:#d9d9d9;
    line-height:1.2;
    z-index:2;
    white-space:nowrap;
  }

  .scale-zones{
    position:absolute;
    left:var(--scale-left);
    top:92px;
    width:calc(var(--scale-right) - var(--scale-left));
    display:flex;
    font-size:13px;
    color:#d9d9d9;
    opacity:0.5;
    letter-spacing:0.02em;
    z-index:2;
    pointer-events:none;
  }

  .mid-left{
    position:absolute;
    top:44%;
    left:var(--text-left);
    transform:translateY(-50%);
    font-size:17px;
    font-weight:500;
    color:#d9d9d9;
    z-index:2;
    text-align:left;
    white-space:nowrap;
  }

  .mid-right{
    position:absolute;
    top:44%;
    left:var(--text-right);
    transform:translate(-100%, -50%);
    font-size:15px;
    color:#d9d9d9;
    z-index:2;
    white-space:nowrap;
    text-align:right;
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
  const TOTAL = 25;

  // percent -> 1..25 (same as before)
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  // TRUE rectangle bar edges (circles ignored)
  const BAR_L = 35.53;
  const BAR_R = 414.47;

  // Each of the 25 rectangles is one equal bin; dot sits at bin center
  const BIN_W = (BAR_R - BAR_L) / TOTAL;
  const cx = BAR_L + (step - 0.5) * BIN_W;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  const val   = document.getElementById("val" + boxId);

  if (outer) outer.setAttribute("cx", cx.toFixed(2));
  if (inner) inner.setAttribute("cx", cx.toFixed(2));
  if (val)   val.textContent = step + "/" + TOTAL;
}

function setRisk(boxId, r){
  const n = Number(r);
  if (!Number.isFinite(n)) return;
  const el = document.getElementById("risk" + boxId);
  if (!el) return;
  el.textContent = Math.round(clamp(n, 0, 100)) + "%";
}

function setWarn(boxId, show){
  const el = document.getElementById("warn" + boxId);
  if (!el) return;
  el.style.visibility = show ? "visible" : "hidden";
}

(function () {
  const KEY = "dashboard_indexes_cache_v6";

  function readCache(){
    try{
      const raw = sessionStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e){
      return null;
    }
  }

  function writeCache(obj){
    try{ sessionStorage.setItem(KEY, JSON.stringify(obj)); } catch(e){}
  }

  function signatureFrom(data){
    return String(
      data.box3_risk_updated_utc ||
      data.box2_risk_updated_utc ||
      data.box1_risk_updated_utc ||
      data.box3_updated_utc ||
      data.box2_updated_utc ||
      data.box1_updated_utc ||
      JSON.stringify([
        data.box1, data.box2, data.box3,
        data.box1_risk, data.box2_risk, data.box3_risk
      ])
    );
  }

  function applyAll(d){
    if (d.box1 !== undefined) setValue(1, d.box1);
    if (d.box2 !== undefined) setValue(2, d.box2);
    if (d.box3 !== undefined) setValue(3, d.box3);

    if (d.box1_risk !== undefined) setRisk(1, d.box1_risk);
    if (d.box2_risk !== undefined) setRisk(2, d.box2_risk);
    if (d.box3_risk !== undefined) setRisk(3, d.box3_risk);

    setWarn(1, false);
    const b2 = Number(d.box2);
    const b3 = Number(d.box3);
    setWarn(2, Number.isFinite(b2) && b2 >= 80);
    setWarn(3, Number.isFinite(b3) && b3 >= 80);
  }

  async function load(){
    const cached = readCache();

    // paint cached immediately
    if (cached) applyAll(cached);

    try{
      const res = await fetch("/data/indexes.json", { cache: "no-store" });
      if (!res.ok) return;

      const data = await res.json();
      const sig = signatureFrom(data);

      if (cached && cached.sig === sig) return;

      applyAll(data);

      writeCache({
        sig,
        box1: data.box1,
        box2: data.box2,
        box3: data.box3,
        box1_risk: data.box1_risk,
        box2_risk: data.box2_risk,
        box3_risk: data.box3_risk,
        box1_risk_updated_utc: data.box1_risk_updated_utc,
        box2_risk_updated_utc: data.box2_risk_updated_utc,
        box3_risk_updated_utc: data.box3_risk_updated_utc,
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

