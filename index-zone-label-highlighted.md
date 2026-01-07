<!-- Simplified layout: three stacked 360×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- labels: inactive 50%, active becomes 100% via JS -->
      <div id="labels1" style="position:absolute;left:20px;top:92px;width:320px;display:flex;font-size:12px;color:#d9d9d9;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;opacity:0.5;">Entry</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Scale In</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Hold</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Conviction</span>
        <span style="flex:1;text-align:center;opacity:0.5;">HODL</span>
      </div>

      <div id="val1" style="position:absolute;top:44%;left:20px;transform:translateY(-50%);font-size:42px;font-weight:700;color:#fff;z-index:2;">–</div>

      <div style="position:absolute;top:44%;right:20px;transform:translateY(-50%);font-size:14px;color:#d9d9d9;z-index:2;white-space:nowrap;">
        <span id="warn1" style="opacity:0.5;margin-right:6px;font-size:16px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" width="360" height="150" viewBox="0 0 360 150" aria-hidden="true">
        <circle id="dotOuter1" cx="23.5" cy="112" r="9" fill="#FFE600" opacity="0.65"></circle>
        <circle id="dotInner1" cx="23.5" cy="112" r="4.2" fill="#FFFFFF"></circle>
      </svg>

    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-green.svg');">
      <div class="box-title">Momentum Index — Green</div>

      <!-- labels: inactive 50%, active becomes 100% via JS -->
      <div id="labels2" style="position:absolute;left:20px;top:92px;width:320px;display:flex;font-size:12px;color:#d9d9d9;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;opacity:0.5;">Entry</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Scale In</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Hold/Wait</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Reduce</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Exit</span>
      </div>

      <div id="val2" style="position:absolute;top:44%;left:20px;transform:translateY(-50%);font-size:42px;font-weight:700;color:#fff;z-index:2;">–</div>

      <div style="position:absolute;top:44%;right:20px;transform:translateY(-50%);font-size:14px;color:#d9d9d9;z-index:2;white-space:nowrap;">
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:16px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" width="360" height="150" viewBox="0 0 360 150" aria-hidden="true">
        <circle id="dotOuter2" cx="23.5" cy="112" r="9" fill="#19FF4B" opacity="0.65"></circle>
        <circle id="dotInner2" cx="23.5" cy="112" r="4.2" fill="#FFFFFF"></circle>
      </svg>

    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/mobile-bar-scale-red.svg');">
      <div class="box-title">Risk Index — Red</div>

      <!-- labels: inactive 50%, active becomes 100% via JS -->
      <div id="labels3" style="position:absolute;left:20px;top:92px;width:320px;display:flex;font-size:12px;color:#d9d9d9;letter-spacing:0.02em;z-index:2;pointer-events:none;">
        <span style="flex:1;text-align:center;opacity:0.5;">Entry</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Scale In</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Hold/Wait</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Reduce</span>
        <span style="flex:1;text-align:center;opacity:0.5;">Exit</span>
      </div>

      <div id="val3" style="position:absolute;top:44%;left:20px;transform:translateY(-50%);font-size:42px;font-weight:700;color:#fff;z-index:2;">–</div>

      <div style="position:absolute;top:44%;right:20px;transform:translateY(-50%);font-size:14px;color:#d9d9d9;z-index:2;white-space:nowrap;">
        <span id="warn3" style="opacity:0.5;margin-right:6px;font-size:16px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
      </div>

      <svg class="dot-layer" width="360" height="150" viewBox="0 0 360 150" aria-hidden="true">
        <circle id="dotOuter3" cx="23.5" cy="112" r="9" fill="#FF3B3B" opacity="0.65"></circle>
        <circle id="dotInner3" cx="23.5" cy="112" r="4.2" fill="#FFFFFF"></circle>
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
  top:18px;
  left:20px;
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
function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

function highlightLabel(boxId, step){
  // 5 zones across steps 1..25:
  // 1-5, 6-10, 11-15, 16-20, 21-25
  const zone = clamp(Math.floor((step - 1) / 5), 0, 4);

  const row = document.getElementById("labels" + boxId);
  if (!row) return;

  const spans = row.querySelectorAll("span");
  spans.forEach((s, i) => {
    // inactive labels at 50%, active label at full opacity
    s.style.opacity = (i === zone) ? "1" : "0.5";
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

  highlightLabel(boxId, step);

  const val = document.getElementById("val" + boxId);
  if (val){
    val.innerHTML = step + '<span style="opacity:0.5">/' + TOTAL + '</span>';
  }
}

function setRisk(boxId, r){
  const n = Number(r);
  if (!Number.isFinite(n)) return;
  document.getElementById("risk" + boxId).textContent =
    Math.round(clamp(n, 0, 100)) + "%";
}

function setWarn(boxId, show){
  const el = document.getElementById("warn" + boxId);
  if (el) el.style.visibility = show ? "visible" : "hidden";
}

(function(){
  const KEY = "dashboard_indexes_cache_v6";

  function applyAll(d){
    if (d.box1 !== undefined) setValue(1, d.box1);
    if (d.box2 !== undefined) setValue(2, d.box2);
    if (d.box3 !== undefined) setValue(3, d.box3);

    if (d.box1_risk !== undefined) setRisk(1, d.box1_risk);
    if (d.box2_risk !== undefined) setRisk(2, d.box2_risk);
    if (d.box3_risk !== undefined) setRisk(3, d.box3_risk);

    setWarn(1, false);
    setWarn(2, Number(d.box2) >= 80);
    setWarn(3, Number(d.box3) >= 80);
  }

  async function load(){
    try{
      const cached = sessionStorage.getItem(KEY);
      if (cached) applyAll(JSON.parse(cached));

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
