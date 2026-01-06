<!-- FULL FILE – final alignment pass
     Change from last version:
     • moved everything **2px more inward again**
       – left anchor +2px
       – right anchor −2px
     • behaviour, dot math, data flow unchanged
-->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:39.53px;
          top:92px;
          width:370.95px;
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

      <div id="val1" class="mid-left">–</div>

      <div class="mid-right">
        <span id="warn1" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150">
        <circle id="dotOuter1" cx="35.53" cy="122" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="35.53" cy="122" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <div
        style="
          position:absolute;
          left:39.53px;
          top:92px;
          width:370.95px;
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

      <div id="val2" class="mid-left">–</div>

      <div class="mid-right">
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150">
        <circle id="dotOuter2" cx="35.53" cy="122" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="35.53" cy="122" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/high-bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <div
        style="
          position:absolute;
          left:39.53px;
          top:92px;
          width:370.95px;
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

      <div id="val3" class="mid-left">–</div>

      <div class="mid-right">
        <span id="warn3" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 450 150">
        <circle id="dotOuter3" cx="35.53" cy="122" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="35.53" cy="122" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

</div>

<style>
  .indexes{ display:flex; flex-direction:column; }

  .index-box{
    /* final anchors */
    --bar-left: 39.53px;    /* +2px */
    --bar-right: 410.47px; /* −2px */

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
    left:var(--bar-left);
    font-size:15px;
    font-weight:500;
    color:#d9d9d9;
    z-index:2;
  }

  .mid-left{
    position:absolute;
    top:44%;
    left:var(--bar-left);
    transform:translateY(-50%);
    font-size:17px;
    font-weight:500;
    color:#d9d9d9;
    z-index:2;
  }

  .mid-right{
    position:absolute;
    top:44%;
    left:var(--bar-right);
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

  const START = 35.53;
  const END   = 414.47;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  document.getElementById("dotOuter"+boxId)?.setAttribute("cx", cx.toFixed(2));
  document.getElementById("dotInner"+boxId)?.setAttribute("cx", cx.toFixed(2));
  const val = document.getElementById("val"+boxId);
  if (val) val.textContent = step + "/" + TOTAL;
}

function setRisk(boxId, r){
  const el = document.getElementById("risk"+boxId);
  if (el) el.textContent = Math.round(clamp(Number(r),0,100)) + "%";
}

function setWarn(boxId, show){
  const el = document.getElementById("warn"+boxId);
  if (el) el.style.visibility = show ? "visible" : "hidden";
}
</script>
