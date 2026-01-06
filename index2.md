<!-- FULL FILE — Desktop boxes 420×140
     Fix: restored full fetch/cache + apply logic (so indexes render)
     Requested moves kept:
       • Zone labels up 4px: top 88px → 84px
       • Middle labels up 8px: top 54% → 48%
       • Risk font-size: 14px
-->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:24px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div style="
        position:absolute;
        left:32px;
        top:84px;
        width:356px;
        display:flex;
        font-size:13px;
        color:#d9d9d9;
        opacity:0.5;
        letter-spacing:0.02em;
        z-index:2;
        pointer-events:none;">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold</span>
        <span style="flex:1;text-align:center;">Conviction</span>
        <span style="flex:1;text-align:center;">HODL</span>
      </div>

      <!-- value -->
      <div id="val1" style="
        position:absolute;
        top:48%;
        left:28px;
        transform:translateY(-50%);
        font-size:16px;
        font-weight:500;
        color:#d9d9d9;
        z-index:2;">
        –
      </div>

      <!-- risk -->
      <div style="
        position:absolute;
        top:48%;
        right:28px;
        transform:translateY(-50%);
        font-size:14px;
        color:#d9d9d9;
        z-index:2;
        white-space:nowrap;">
        <span id="warn1" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle id="dotOuter1" cx="32" cy="110" r="8" fill="#323232"/>
        <circle id="dotInner1" cx="32" cy="110" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:24px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <!-- scale zones -->
      <div style="
        position:absolute;
        left:32px;
        top:84px;
        width:356px;
        display:flex;
        font-size:13px;
        color:#d9d9d9;
        opacity:0.5;
        letter-spacing:0.02em;
        z-index:2;
        pointer-events:none;">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold/Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <!-- value -->
      <div id="val2" style="
        position:absolute;
        top:48%;
        left:28px;
        transform:translateY(-50%);
        font-size:16px;
        font-weight:500;
        color:#d9d9d9;
        z-index:2;">
        –
      </div>

      <!-- risk -->
      <div style="
        position:absolute;
        top:48%;
        right:28px;
        transform:translateY(-50%);
        font-size:14px;
        color:#d9d9d9;
        z-index:2;
        white-space:nowrap;">
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle id="dotOuter2" cx="32" cy="110" r="8" fill="#323232"/>
        <circle id="dotInner2" cx="32" cy="110" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <!-- scale zones -->
      <div style="
        position:absolute;
        left:32px;
        top:84px;
        width:356px;
        display:flex;
        font-size:13px;
        color:#d9d9d9;
        opacity:0.5;
        letter-spacing:0.02em;
        z-index:2;
        pointer-events:none;">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold/Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <!-- value -->
      <div id="val3" style="
        position:absolute;
        top:48%;
        left:28px;
        transform:translateY(-50%);
        font-size:16px;
        font-weight:500;
        color:#d9d9d9;
        z-index:2;">
        –
      </div>

      <!-- risk -->
      <div style="
        position:absolute;
        top:48%;
        right:28px;
        transform:translateY(-50%);
        font-size:14px;
        color:#d9d9d9;
        z-index:2;
        white-space:nowrap;">
        <span id="warn3" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle id="dotOuter3" cx="32" cy="110" r="8" fill="#323232"/>
        <circle id="dotInner3" cx="32" cy="110" r="6" fill="#ffffff"/>
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
    width:420px;
    height:140px;
    background-repeat:no-repeat;
    background-size:420px 140px;
    font-family:system-ui,-apple-system,sans-serif;
  }

  .box-title{
    position:absolute;
    top:18px;
    left:28px;
    right:20px;
    font-size:16px;
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
  const TOTAL = 25;
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  // geometry for 420×140
  const START = 32;
  const END   = 389;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  const val   = document.getElementById("val" + boxId);

  if (outer) outer.setAttribute("cx", cx);
  if (inner) inner.setAttribute("cx", cx);
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
  const KEY = "dashboard_indexes_cache_v12";

  function readCache(){
    try{
      const raw = sessionStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e){
      return null;
    }
  }

  function writeCache(obj){
    try{
      sessionStorage.setItem(KEY, JSON.stringify(obj));
    } catch(e){}
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

    // warning behavior: only box2/box3 react at >= 80
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
