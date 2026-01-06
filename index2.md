<!-- FULL FILE — Desktop boxes 420×140
     Single change in this version:
     • Title label font size: 16px → 15px
     Everything else unchanged.
-->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:24px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <div style="
        position:absolute;
        left:32px;
        top:82px;
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

      <div id="val1" style="
        position:absolute;
        top:45%;
        left:28px;
        transform:translateY(-50%);
        font-size:16px;
        font-weight:500;
        color:#d9d9d9;
        z-index:2;">
        –
      </div>

      <div style="
        position:absolute;
        top:45%;
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

      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle id="dotOuter1" cx="32" cy="110" r="9" fill="#323232"/>
        <circle id="dotInner1" cx="32" cy="110" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:24px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <div style="
        position:absolute;
        left:32px;
        top:82px;
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

      <div id="val2" style="
        position:absolute;
        top:45%;
        left:28px;
        transform:translateY(-50%);
        font-size:16px;
        font-weight:500;
        color:#d9d9d9;
        z-index:2;">
        –
      </div>

      <div style="
        position:absolute;
        top:45%;
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

      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle id="dotOuter2" cx="32" cy="110" r="9" fill="#323232"/>
        <circle id="dotInner2" cx="32" cy="110" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <div style="
        position:absolute;
        left:32px;
        top:82px;
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

      <div id="val3" style="
        position:absolute;
        top:45%;
        left:28px;
        transform:translateY(-50%);
        font-size:16px;
        font-weight:500;
        color:#d9d9d9;
        z-index:2;">
        –
      </div>

      <div style="
        position:absolute;
        top:45%;
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

      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle id="dotOuter3" cx="32" cy="110" r="9" fill="#323232"/>
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
    font-size:15px; /* was 16px */
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

  const START = 32;
  const END   = 389;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  document.getElementById("dotOuter" + boxId).setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId).setAttribute("cx", cx);
  document.getElementById("val" + boxId).textContent = step + "/" + TOTAL;
}
</script>
