<div class="v2">

  <div class="indexes">

    <!-- =====================================================
         Geometry (fixed, do not touch in CSS)
         ===================================================== -->

    <!-- =========================
         BOX 1 — YELLOW
         ========================= -->
    <div style="margin-bottom:28px;">
      <div class="entity-box" data-box="1">

        <div class="entity-title">Navigation Index — Yellow</div>

        <picture
          style="position:absolute; inset:0; width:360px; height:150px; z-index:1; pointer-events:none;"
          aria-hidden="true"
        >
          <source media="(prefers-color-scheme: dark)" srcset="/assets/img/bar-orange-dark.svg">
          <img src="/assets/img/bar-orange-light.svg" alt=""
               style="position:absolute; left:19.1025px; top:116.7px; width:322.6125px; height:9px;">
        </picture>

        <svg class="entity-frame" viewBox="0 0 360 150" aria-hidden="true">
          <rect class="entity-frame-bg" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
          <rect class="entity-frame-stroke" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
        </svg>

        <div class="entity-steps">
          <span>Entry</span><span>Scale In</span><span>Hold</span><span>Conviction</span><span>HODL</span>
        </div>

        <div class="entity-value" data-role="val">-</div>

        <div class="entity-risk">
          <span class="entity-warn" data-role="warn">!</span>
          <span class="entity-risk-label">Risk level:</span>
          <span class="entity-risk-val" data-role="risk">-%</span>
        </div>

        <svg class="entity-dot-layer" viewBox="0 0 360 150" aria-hidden="true">
          <circle class="entity-dot-outer" cx="34" cy="121.2" r="9"></circle>
          <circle class="entity-dot-inner" cx="34" cy="121.2" r="6"></circle>
        </svg>

      </div>

      <!-- Text for box 1 (no box visuals; content set by JS) -->
      <div class="entity-text" data-text="1">text1</div>
    </div>

    <!-- BOX 2 -->
    <div style="margin-bottom:28px;">
      <div class="entity-box" data-box="2">

        <div class="entity-title">Navigation Index — Blue</div>

        <picture style="position:absolute; inset:0; width:360px; height:150px; z-index:1; pointer-events:none;" aria-hidden="true">
          <source media="(prefers-color-scheme: dark)" srcset="/assets/img/bar-blue-dark.svg">
          <img src="/assets/img/bar-blue-light.svg" alt=""
               style="position:absolute; left:19.1025px; top:116.7px; width:322.6125px; height:9px;">
        </picture>

        <svg class="entity-frame" viewBox="0 0 360 150" aria-hidden="true">
          <rect class="entity-frame-bg" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
          <rect class="entity-frame-stroke" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
        </svg>

        <div class="entity-steps">
          <span>Entry</span><span>Scale In</span><span>Hold</span><span>Reduce</span><span>Exit</span>
        </div>

        <div class="entity-value" data-role="val">-</div>

        <div class="entity-risk">
          <span class="entity-warn" data-role="warn">!</span>
          <span class="entity-risk-label">Risk level:</span>
          <span class="entity-risk-val" data-role="risk">-%</span>
        </div>

        <svg class="entity-dot-layer" viewBox="0 0 360 150" aria-hidden="true">
          <circle class="entity-dot-outer" cx="24" cy="121.2" r="9"></circle>
          <circle class="entity-dot-inner" cx="24" cy="121.2" r="6"></circle>
        </svg>

      </div>

      <!-- Text for box 2 -->
      <div class="entity-text" data-text="2">text2</div>
    </div>

    <!-- BOX 3 -->
    <div>
      <div class="entity-box" data-box="3">

        <div class="entity-title">Navigation Index — Grey</div>

        <picture style="position:absolute; inset:0; width:360px; height:150px; z-index:1; pointer-events:none;" aria-hidden="true">
          <source media="(prefers-color-scheme: dark)" srcset="/assets/img/bar-updated-grey.svg">
          <img src="/assets/img/bar-grey-light.svg" alt=""
               style="position:absolute; left:19.1025px; top:116.7px; width:322.6125px; height:9px;">
        </picture>

        <svg class="entity-frame" viewBox="0 0 360 150" aria-hidden="true">
          <rect class="entity-frame-bg" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
          <rect class="entity-frame-stroke" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
        </svg>

        <div class="entity-steps">
          <span>Entry</span><span>Scale In</span><span>Hold</span><span>Reduce</span><span>Exit</span>
        </div>

        <div class="entity-value" data-role="val">-</div>

        <div class="entity-risk">
          <span class="entity-warn" data-role="warn">!</span>
          <span class="entity-risk-label">Risk level:</span>
          <span class="entity-risk-val" data-role="risk">-%</span>
        </div>

        <svg class="entity-dot-layer" viewBox="0 0 360 150" aria-hidden="true">
          <circle class="entity-dot-outer" cx="24" cy="121.2" r="9"></circle>
          <circle class="entity-dot-inner" cx="24" cy="121.2" r="6"></circle>
        </svg>

      </div>

      <!-- Text for box 3 -->
      <div class="entity-text" data-text="3">text3</div>
    </div>

  </div>

</div>

<style>
/* Layout: box + text on one row on wide screens, stacked on narrow screens */
.v2 .indexes > div{
  display:flex;
  align-items:flex-start;
  gap:18px;
}

/* Keep your existing box geometry intact */
.v2 .entity-box{
  flex: 0 0 auto;
}

/* Plain text area (no box), aligned to the right */
.v2 .entity-text{
  flex: 1 1 auto;
  padding-top: 10px;
  line-height: 1.4;
}

/* Narrow screens: text moves under its corresponding box */
@media (max-width: 720px){
  .v2 .indexes > div{
    flex-direction:column;
    gap:10px;
  }
  .v2 .entity-text{
    padding-top: 0;
  }
}
</style>

<script>
function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

/* 1-25 -> 5 buckets */
function bucketForStep(step){
  if (step <= 5)  return 1;   // 1-5
  if (step <= 10) return 2;   // 6-10
  if (step <= 15) return 3;   // 11-15
  if (step <= 20) return 4;   // 16-20
  return 5;                  // 21-25
}

/* Per-box interpretation texts (edit these) */
const INTERP = {
  1: {
    1: "Yellow: interpretation for 1-5",
    2: "Yellow: interpretation for 6-10",
    3: "Yellow: interpretation for 11-15",
    4: "Yellow: interpretation for 16-20",
    5: "Yellow: interpretation for 21-25"
  },
  2: {
    1: "Blue: interpretation for 1-5",
    2: "Blue: interpretation for 6-10",
    3: "Blue: interpretation for 11-15",
    4: "Blue: interpretation for 16-20",
    5: "Blue: interpretation for 21-25"
  },
  3: {
    1: "Grey: interpretation for 1-5",
    2: "Grey: interpretation for 6-10",
    3: "Grey: interpretation for 11-15",
    4: "Grey: interpretation for 16-20",
    5: "Grey: interpretation for 21-25"
  }
};

function setEntityInterpretationText(boxEl, step){
  const boxId = Number(boxEl.getAttribute("data-box"));
  const textEl = document.querySelector('.v2 .entity-text[data-text="' + boxId + '"]');
  if (!textEl) return;

  const bucket = bucketForStep(step);
  const msg = INTERP?.[boxId]?.[bucket];
  textEl.textContent = (msg !== undefined && msg !== null) ? String(msg) : "";
}

function setEntityValue(boxEl, x){
  const n = Number(x);
  if (!Number.isFinite(n)) return;

  const pct = clamp(n, 0, 100);
  const TOTAL = 25;
  const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

  const START = 23.5;
  const END   = 336.5;
  const BIN   = (END - START) / TOTAL;
  const cx = START + (step - 0.5) * BIN;

  boxEl.querySelector(".entity-dot-outer")?.setAttribute("cx", cx);
  boxEl.querySelector(".entity-dot-inner")?.setAttribute("cx", cx);

  const val = boxEl.querySelector('[data-role="val"]');
  if (val){
    val.textContent = String(step) + "/" + String(TOTAL);
  }

  /* update the text based on the computed step (1-25) */
  setEntityInterpretationText(boxEl, step);
}

function setEntityRisk(boxEl, r){
  const n = Number(r);
  if (!Number.isFinite(n)) return;
  const el = boxEl.querySelector('[data-role="risk"]');
  if (el) el.textContent = Math.round(clamp(n, 0, 100)) + "%";
}

function setEntityWarn(boxEl, show){
  const el = boxEl.querySelector('[data-role="warn"]');
  if (el) el.style.visibility = show ? "visible" : "hidden";
}

(function(){
  const KEY = "dashboard_indexes_cache_v6";

  function applyAll(d){
    const b1 = document.querySelector('.v2 .entity-box[data-box="1"]');
    const b2 = document.querySelector('.v2 .entity-box[data-box="2"]');
    const b3 = document.querySelector('.v2 .entity-box[data-box="3"]');

    /* Optional override from indexes.json:
       d.text_map_box1 = { "1":"...", "2":"...", "3":"...", "4":"...", "5":"..." }
       d.text_map_box2 = ...
       d.text_map_box3 = ...
    */
    if (d && typeof d === "object"){
      if (d.text_map_box1) INTERP[1] = d.text_map_box1;
      if (d.text_map_box2) INTERP[2] = d.text_map_box2;
      if (d.text_map_box3) INTERP[3] = d.text_map_box3;
    }

    if (b1 && d.box1 !== undefined) setEntityValue(b1, d.box1);
    if (b2 && d.box2 !== undefined) setEntityValue(b2, d.box2);
    if (b3 && d.box3 !== undefined) setEntityValue(b3, d.box3);

    if (b1 && d.box1_risk !== undefined) setEntityRisk(b1, d.box1_risk);
    if (b2 && d.box2_risk !== undefined) setEntityRisk(b2, d.box2_risk);
    if (b3 && d.box3_risk !== undefined) setEntityRisk(b3, d.box3_risk);

    if (b1) setEntityWarn(b1, false);
    if (b2) setEntityWarn(b2, Number(d.box2) >= 80);
    if (b3) setEntityWarn(b3, Number(d.box3) >= 80);
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
