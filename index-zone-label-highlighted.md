<!-- Simplified layout: three stacked 360×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <div id="labels1" style="position:absolute;left:20px;top:92px;width:320px;display:flex;font-size:12px;color:#d9d9d9;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;opacity:0;">Entry</span>
        <span style="flex:1;text-align:center;opacity:0;">Scale In</span>
        <span style="flex:1;text-align:center;opacity:0;">Hold</span>
        <span style="flex:1;text-align:center;opacity:0;">Conviction</span>
        <span style="flex:1;text-align:center;opacity:0;">HODL</span>
      </div>

      <div id="val1" style="position:absolute;left:0;right:0;top:18px;text-align:center;font-size:38px;color:#fff;font-weight:600;line-height:1;z-index:2;">
        <span style="opacity:0.75">—</span>
      </div>

      <svg width="360" height="150" style="position:absolute;left:0;top:0;z-index:1;">
        <circle id="dotOuter1" r="9" cy="112" cx="23.5" fill="#FFE600" opacity="0.65"></circle>
        <circle id="dotInner1" r="4.2" cy="112" cx="23.5" fill="#FFFFFF"></circle>
      </svg>

    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-green.svg');">
      <div class="box-title">Momentum Index — Green</div>

      <div id="labels2" style="position:absolute;left:20px;top:92px;width:320px;display:flex;font-size:12px;color:#d9d9d9;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;opacity:0;">Entry</span>
        <span style="flex:1;text-align:center;opacity:0;">Scale In</span>
        <span style="flex:1;text-align:center;opacity:0;">Hold/Wait</span>
        <span style="flex:1;text-align:center;opacity:0;">Reduce</span>
        <span style="flex:1;text-align:center;opacity:0;">Exit</span>
      </div>

      <div id="val2" style="position:absolute;left:0;right:0;top:18px;text-align:center;font-size:38px;color:#fff;font-weight:600;line-height:1;z-index:2;">
        <span style="opacity:0.75">—</span>
      </div>

      <svg width="360" height="150" style="position:absolute;left:0;top:0;z-index:1;">
        <circle id="dotOuter2" r="9" cy="112" cx="23.5" fill="#19FF4B" opacity="0.65"></circle>
        <circle id="dotInner2" r="4.2" cy="112" cx="23.5" fill="#FFFFFF"></circle>
      </svg>

    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-red.svg');">
      <div class="box-title">Risk Index — Red</div>

      <div id="labels3" style="position:absolute;left:20px;top:92px;width:320px;display:flex;font-size:12px;color:#d9d9d9;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;opacity:0;">Entry</span>
        <span style="flex:1;text-align:center;opacity:0;">Scale In</span>
        <span style="flex:1;text-align:center;opacity:0;">Hold/Wait</span>
        <span style="flex:1;text-align:center;opacity:0;">Reduce</span>
        <span style="flex:1;text-align:center;opacity:0;">Exit</span>
      </div>

      <div id="val3" style="position:absolute;left:0;right:0;top:18px;text-align:center;font-size:38px;color:#fff;font-weight:600;line-height:1;z-index:2;">
        <span style="opacity:0.75">—</span>
      </div>

      <svg width="360" height="150" style="position:absolute;left:0;top:0;z-index:1;">
        <circle id="dotOuter3" r="9" cy="112" cx="23.5" fill="#FF3B3B" opacity="0.65"></circle>
        <circle id="dotInner3" r="4.2" cy="112" cx="23.5" fill="#FFFFFF"></circle>
      </svg>

    </div>
  </div>

</div>

<style>
.indexes{
  display:flex;
  flex-direction:column;
  gap:0;
  max-width:360px;
}
.index-box{
  position:relative;
  width:360px;
  height:150px;
  border-radius:18px;
  background-size:cover;
  background-position:center;
  overflow:hidden;
}
.box-title{
  position:absolute;
  left:18px;
  top:14px;
  font-size:14px;
  letter-spacing:0.02em;
  color:#fff;
  opacity:0.85;
  z-index:2;
}
</style>

<script>
(() => {
  const KEY = "indexes_cache_v1";

  function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

function highlightScaleLabel(boxId, step){
  // 1..25 split into 5 zones of 5 steps:
  // 1-5, 6-10, 11-15, 16-20, 21-25
  const zone = clamp(Math.floor((step - 1) / 5), 0, 4);

  const row = document.getElementById("labels" + boxId);
  if (!row) return;

  const spans = row.querySelectorAll("span");
  spans.forEach((s, i) => {
    s.style.opacity = (i === zone) ? "0.5" : "0";
  });
}

  function setValue(boxId, x){
    const n = Number(x);
    if (!Number.isFinite(n)) return;

    const pct = clamp(n, 0, 100);
    const TOTAL = 25; // unchanged
    const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

    const START = 23.5;
    const END   = 336.5;
    const BIN   = (END - START) / TOTAL;
    const cx = START + (step - 0.5) * BIN;

    document.getElementById("dotOuter" + boxId)?.setAttribute("cx", cx);
    document.getElementById("dotInner" + boxId)?.setAttribute("cx", cx);

    highlightScaleLabel(boxId, step);

    const val = document.getElementById("val" + boxId);
    if (val){
      val.innerHTML = step + '<span style="opacity:0.5">/' + TOTAL + '</span>';
    }
  }

  function applyAll(obj){
    setValue(1, obj?.yellow);
    setValue(2, obj?.green);
    setValue(3, obj?.red);
  }

  async function load(){
    try{
      const cached = sessionStorage.getItem(KEY);
      if (cached){
        applyAll(JSON.parse(cached));
      }

      const res = await fetch("/data/indexes.json", { cache:"no-store" });
      if (!res.ok) return;
      const data = await res.json();

      applyAll(data);
      sessionStorage.setItem(KEY, JSON.stringify(data));
    }catch(e){}
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", load)
    : load();
})();
</script>
