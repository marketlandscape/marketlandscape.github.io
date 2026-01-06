<!-- FULL FILE – fixed so the scale is the RECTANGLE BAR span (not the decorative circles)
     - Dot moves over 25 equal bins from the left edge of the first rectangle to the right edge of the last rectangle.
       Example: step=3 sits at the center of bin #3 (inside the first rectangle).
     - Scale labels are centered over the 5 rectangles (same 5 equal-width segments).

     Based on your current working file :contentReference[oaicite:0]{index=0}, the fix is:
     - introduce separate CSS vars:
         --scale-left / --scale-right  (true bar rectangle edges)
         --text-left  / --text-right   (your “nudged inward” alignment for title/values/risk)
     - setValue() uses --scale-left/right geometry (hardcoded numeric constants matching the SVG)
-->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones (centered over the 5 rectangles) -->
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

      <!-- dot layer (default position = center of bin #1) -->
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
    /*
      TRUE SCALE EDGES (rectangle bar):
        SVG viewBox width = 570
        bar rects span x=45..525
        rendered width = 450
        => scale factor = 450/570
        => left  = 45  * 450/570 = 35.53
           right = 525 * 450/570 = 414.47
    */
    --scale-left: 35.53px;
    --scale-right: 414.47px;

    /* Your visual “nudge inward” for text only */
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

  /* Labels centered over each of the 5 equal rectangles */
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
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  // Rectangle bar edges (not circles)
  const START = 35.53;
  const END   = 414.47;

  // 25 equal bins across the rectangle bar width:
  // step=1 -> center of bin #1 (inside first rectangle)
  // step=25 -> center of bin #25 (inside last rectangle)
  const BIN = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

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

