---
layout: default
permalink: /warning-auto/
---

<!-- Simplified layout: three stacked 450×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

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
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

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
        <!-- reserved slot before label (keeps alignment stable) -->
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
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
        <!-- reserved slot before label (keeps alignment stable) -->
        <span id="warn3" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
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

function setRisk(boxId, r){
  const n = Number(r);
  if (!Number.isFinite(n)) return;
  const el = document.getElementById("risk" + boxId);
  if (el) el.textContent = Math.round(n) + "%";
}

function setWarn(boxId, show){
  const el = document.getElementById("warn" + boxId);
  if (!el) return;
  // keeps spacing stable (no layout jump)
  el.style.visibility = show ? "visible" : "hidden";
}

(function(){
  fetch("/data/indexes.json",{cache:"no-store"})
    .then(r=>r.json())
    .then(d=>{
      if("box1" in d) setValue(1,d.box1);
      if("box2" in d) setValue(2,d.box2);
      if("box3" in d) setValue(3,d.box3);

      if("box1_risk" in d) setRisk(1,d.box1_risk);
      if("box2_risk" in d) setRisk(2,d.box2_risk);
      if("box3_risk" in d) setRisk(3,d.box3_risk);

      // Warning rule:
      // show ⚠ when navigation index >= 80, only for box2 and box3
      const b2 = Number(d.box2);
      const b3 = Number(d.box3);
      setWarn(2, Number.isFinite(b2) && b2 >= 80);
      setWarn(3, Number.isFinite(b3) && b3 >= 80);
    })
    .catch(()=>{});
})();
</script>
