<!-- Desktop-first layout: 420×140 boxes, scale labels moved 2px up -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:24px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones (moved up 2px: 90 → 88) -->
      <div
        style="
          position:absolute;
          left:32px;
          top:88px;
          width:356px;
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

      <!-- value -->
      <div
        id="val1"
        style="
          position:absolute;
          top:54%;
          left:28px;
          transform:translateY(-50%);
          font-size:16px;
          font-weight:500;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- risk -->
      <div
        style="
          position:absolute;
          top:54%;
          right:28px;
          transform:translateY(-50%);
          font-size:16px;
          color:#d9d9d9;
          z-index:2;
          white-space:nowrap;
        ">
        <span id="warn1" style="font-size:17px;opacity:0.5;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;"> Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="32" cy="112" r="8" fill="#323232"/>
        <circle id="dotInner1" cx="32" cy="112" r="6" fill="#ffffff"/>
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
function clamp(v, lo, hi){
  return Math.max(lo, Math.min(hi, v));
}

function setValue(boxId, x){
  const n = Number(x);
  if (!Number.isFinite(n)) return;

  const pct = clamp(n, 0, 100);
  const TOTAL = 25;
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  // geometry for 420×140
  const START = 32;
  const END   = 388;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  const val   = document.getElementById("val" + boxId);

  if (outer) outer.setAttribute("cx", cx);
  if (inner) inner.setAttribute("cx", cx);
  if (val)   val.textContent = step + "/" + TOTAL;
}
</script>
