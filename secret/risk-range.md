---
layout: default
permalink: /risk-range/
---
<!-- Secret dashboard: same as index.md, but shows diapason + warning icon -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:33.75px;
          top:88px;
          width:382.5px;
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
        <span style="flex:1;text-align:center;">Hold</span>
        <span style="flex:1;text-align:center;">Conviction</span>
        <span style="flex:1;text-align:center;">HODL</span>
      </div>

      <!-- value (left) -->
      <div
        id="val1"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:500;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- risk level (right): Risk level: 35% (15% → 60%) ⚠ -->
      <div
        style="
          position:absolute;
          top:44%;
          right:30px;
          transform:translateY(-50%);
          font-size:15px;
          color:#d9d9d9;
          z-index:2;
          white-space:nowrap;
        ">
        <span style="opacity:0.5;">Risk level:</span>
        <span id="riskVal1" style="opacity:0.75;">–%</span>
        <span id="riskRange1" style="opacity:0.5;">(15% → 60%)</span>
        <span id="warn1" style="opacity:0.5;margin-left:6px;font-size:13px;display:none;">⚠</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="34" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="34" cy="118" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <div
        style="
          position:absolute;
          left:33.75px;
          top:88px;
          width:382.5px;
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
        <span style="flex:1;text-align:center;">Hold / Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <div
        id="val2"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:500;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- Risk level: 35% (24% → 77%) ⚠ -->
      <div
        style="
          position:absolute;
          top:44%;
          right:30px;
          transform:translateY(-50%);
          font-size:15px;
          color:#d9d9d9;
          z-index:2;
          white-space:nowrap;
        ">
        <span style="opacity:0.5;">Risk level:</span>
        <span id="riskVal2" style="opacity:0.75;">–%</span>
        <span id="riskRange2" style="opacity:0.5;">(24% → 77%)</span>
        <span id="warn2" style="opacity:0.5;margin-left:6px;font-size:13px;display:none;">⚠</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="34" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="34" cy="118" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <div
        style="
          position:absolute;
          left:33.75px;
          top:88px;
          width:382.5px;
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
        <span style="flex:1;text-align:center;">Hold / Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <div
        id="val3"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:500;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- Box3 requested order: Risk level: 35% ⚠ (34% → 86%) -->
      <div
        style="
          position:absolute;
          top:44%;
          right:30px;
          transform:translateY(-50%);
          font-size:15px;
          color:#d9d9d9;
          z-index:2;
          white-space:nowrap;
        ">
        <span style="opacity:0.5;">Risk level:</span>
        <span id="riskVal3" style="opacity:0.75;">–%</span>
        <span id="warn3" style="opacity:0.5;margin-left:6px;font-size:13px;display:none;">⚠</span>
        <span id="riskRange3" style="opacity:0.5;">(34% → 86%)</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="34" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="34" cy="118" r="6" fill="#ffffff"/>
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
    width:450px;
    height:150px;
    background-repeat:no-repeat;
    background-size:450px 150px;
    font-family:system-ui,-apple-system,sans-serif;
  }

  .box-title{
    position:absolute;
    top:18px;
    left:30px;
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
function setValue(boxId, x){
  const n = Number(x);
  if (!Number.isFinite(n)) return;

  const pct = Math.max(0, Math.min(100, n));
  const TOTAL = 25;
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  const START = 34;
  const END   = 416;
  const BIN   = (END - START) / TOTAL;

  const cx = START + (step - 0.5) * BIN;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  const val   = document.getElementById("val" + boxId);

  if (outer) outer.setAttribute("cx", cx);
  if (inner) inner.setAttribute("cx", cx);
  if (val)   val.textContent = step + "/" + TOTAL;
}

function setRiskLine(boxId, risk, index){
  const r = Number(risk);
  const i = Number(index);
  if (!Number.isFinite(r)) return;

  const riskInt = Math.round(Math.max(0, Math.min(100, r)));
  const valEl = document.getElementById("riskVal" + boxId);
  if (valEl) valEl.textContent = riskInt + "%";

  const warnEl = document.getElementById("warn" + boxId);
  if (warnEl){
    // warning threshold: index enters 80–100 zone
    warnEl.style.display = (Number.isFinite(i) && i >= 80) ? "inline" : "none";
  }
}

(function () {
  const KEY = "secret_dashboard_cache_v1";

  const RANGES = {
    1: { min: 15, max: 60, idxKey: "box1", riskKey: "box1_risk", updKey: "box1_risk_updated_utc" },
    2: { min: 24, max: 77, idxKey: "box2", riskKey: "box2_risk", updKey: "box2_risk_updated_utc" },
    3: { min: 34, max: 86, idxKey: "box3", riskKey: "box3_risk", updKey: "box3_risk_updated_utc" },
  };

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

  async function loadIndexes(){
    const cached = readCache();

    if (cached?.boxes){
      if (cached.boxes.box1 !== undefined) setValue(1, cached.boxes.box1);
      if (cached.boxes.box2 !== undefined) setValue(2, cached.boxes.box2);
      if (cached.boxes.box3 !== undefined) setValue(3, cached.boxes.box3);
    }

    if (cached?.risks){
      if (cached.risks.box1_risk !== undefined) setRiskLine(1, cached.risks.box1_risk, cached.boxes?.box1);
      if (cached.risks.box2_risk !== undefined) setRiskLine(2, cached.risks.box2_risk, cached.boxes?.box2);
      if (cached.risks.box3_risk !== undefined) setRiskLine(3, cached.risks.box3_risk, cached.boxes?.box3);
    }

    try{
      const res = await fetch('/data/indexes.json', { cache: 'no-store' });
      if (!res.ok) return;

      const data = await res.json();
      const sig = signatureFrom(data);

      if (cached && cached.sig === sig) return;

      if ("box1" in data) setValue(1, data.box1);
      if ("box2" in data) setValue(2, data.box2);
      if ("box3" in data) setValue(3, data.box3);

      if ("box1_risk" in data) setRiskLine(1, data.box1_risk, data.box1);
      if ("box2_risk" in data) setRiskLine(2, data.box2_risk, data.box2);
      if ("box3_risk" in data) setRiskLine(3, data.box3_risk, data.box3);

      writeCache({
        sig,
        boxes: {
          box1: data.box1,
          box2: data.box2,
          box3: data.box3
        },
        risks: {
          box1_risk: data.box1_risk,
          box2_risk: data.box2_risk,
          box3_risk: data.box3_risk
        }
      });
    } catch(e){}
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", loadIndexes);
  } else {
    loadIndexes();
  }
})();
</script>
