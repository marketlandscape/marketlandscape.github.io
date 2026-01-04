<!-- Simplified layout: three stacked 450×150 boxes with moving dot -->

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
          top:90px;
          width:382.5px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">ENTRY</span>
        <span style="flex:1;text-align:center;">SCALE IN</span>
        <span style="flex:1;text-align:center;">HOLD</span>
        <span style="flex:1;text-align:center;">CONVICTION</span>
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
          font-weight:600;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- placeholder value (right) -->
      <div
        style="
          position:absolute;
          top:44%;
          right:30px;
          transform:translateY(-50%);
          font-size:15px;
          color:#d9d9d9;
          z-index:2;
        ">
        Risk level: 75%
      </div>

      <!-- dot layer -->
      <svg id="dotLayer1" class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg" style="opacity:0;">
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
          top:90px;
          width:382.5px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">ENTRY</span>
        <span style="flex:1;text-align:center;">SCALE IN</span>
        <span style="flex:1;text-align:center;">HOLD/WAIT</span>
        <span style="flex:1;text-align:center;">REDUCE</span>
        <span style="flex:1;text-align:center;">EXIT</span>
      </div>

      <div
        id="val2"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:600;
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
        ">
        Risk level: 75%
      </div>

      <svg id="dotLayer2" class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg" style="opacity:0;">
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
          top:90px;
          width:382.5px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">ENTRY</span>
        <span style="flex:1;text-align:center;">SCALE IN</span>
        <span style="flex:1;text-align:center;">HOLD/WAIT</span>
        <span style="flex:1;text-align:center;">REDUCE</span>
        <span style="flex:1;text-align:center;">EXIT</span>
      </div>

      <div
        id="val3"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:600;
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
        ">
        Risk level: 75%
      </div>

      <svg id="dotLayer3" class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg" style="opacity:0;">
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
    transition:opacity 120ms linear;
  }
</style>

<script>
const TOTAL = 25;

// bar-span anchors in the 450×150 dot-layer viewBox
const START = 34;
const END   = 416;
const BIN   = (END - START) / TOTAL;

function setDotCx(boxId, cx){
  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);

  // Avoid needless repaints (some browsers can look like blinking)
  const prev = outer?.dataset?.cx;
  const next = String(cx.toFixed(3));
  if (prev === next) return;

  if (outer){
    outer.setAttribute("cx", cx);
    outer.dataset.cx = next;
  }
  if (inner) inner.setAttribute("cx", cx);
}

function showDotLayer(boxId){
  const layer = document.getElementById("dotLayer" + boxId);
  if (layer && layer.style.opacity !== "1") layer.style.opacity = "1";
}

function setValue(boxId, x){
  const num = Number(x);
  if (!Number.isFinite(num)) return; // prevents NaN flashes

  const pct  = Math.max(0, Math.min(100, num));
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  // center of the selected bar
  const cx = START + (step - 0.5) * BIN;

  setDotCx(boxId, cx);

  const val = document.getElementById("val" + boxId);
  if (val) val.textContent = step + "/" + TOTAL;

  // reveal only after first valid placement
  showDotLayer(boxId);
}

(function () {
  async function
