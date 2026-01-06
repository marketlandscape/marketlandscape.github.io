<!-- Simplified layout: three stacked 450×150 boxes with moving dot + per-box risk line -->
<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/short-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:35.53px;
          top:98px;
          width:378.95px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Stabilize</span>
        <span style="flex:1;text-align:center;">Advance</span>
        <span style="flex:1;text-align:center;">Reduce</span>
      </div>

      <!-- risk line (right) -->
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
        <!-- reserved width so layout won't jump -->
        <span id="warn1" style="visibility:hidden;color:#ffcc00;margin-right:8px;">⚠</span>
        <span id="risk1">0%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="36" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="36" cy="118" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/short-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:35.53px;
          top:98px;
          width:378.95px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Stabilize</span>
        <span style="flex:1;text-align:center;">Advance</span>
        <span style="flex:1;text-align:center;">Reduce</span>
      </div>

      <!-- risk line (right) -->
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
        <!-- reserved width so layout won't jump -->
        <span id="warn2" style="visibility:hidden;color:#ffcc00;margin-right:8px;">⚠</span>
        <span id="risk2">0%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="36" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="36" cy="118" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/short-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <!-- scale zones (RESTORED) -->
      <div
        style="
          position:absolute;
          left:35.53px;
          top:98px;
          width:378.95px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Stabilize</span>
        <span style="flex:1;text-align:center;">Advance</span>
        <span style="flex:1;text-align:center;">Reduce</span>
      </div>

      <!-- risk line (right) -->
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
        <span id="warn3" style="visibility:hidden;color:#ffcc00;margin-right:8px;">⚠</span>
        <span id="risk3">0%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="36" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="36" cy="118" r="6" fill="#ffffff"/>
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
function clamp(x, a, b){ return Math.min(b, Math.max(a, x)); }

function setValue(boxId, x){
  const n = Number(x);
  if (!Number.isFinite(n)) return;

  const pct = clamp(n, 0, 100);
  const TOTAL = 25;
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  // bar geometry (short scale asset)
  const START = 35.53;
  const END   = 414.47;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  if (outer) outer.setAttribute("cx", cx.toFixed(2));
  if (inner) inner.setAttribute("cx", cx.toFixed(2));
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
  // no layout jump; alignment is stable because warn1/2/3 always exist
  el.style.visibility = show ? "visible" : "hidden";
}

/* Example usage:
setValue(1, 0);   setRisk(1, 12); setWarn(1, true);
setValue(2, 55);  setRisk(2, 40); setWarn(2, false);
setValue(3, 100); setRisk(3, 88); setWarn(3, true);
*/
</script>
