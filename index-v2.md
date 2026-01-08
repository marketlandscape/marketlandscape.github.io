---
layout: default
title: Index V2
permalink: /index-v2/
---

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

        <!-- bar scale (picture, theme-ready; same image for now) -->
        <picture
          style="position:absolute; inset:0; width:360px; height:150px; z-index:1; pointer-events:none;"
          aria-hidden="true"
        >
          <source
            media="(prefers-color-scheme: dark)"
            srcset="/assets/img/bar-updated-yellow.svg"
          >
          <img
            src="/assets/img/bar-yellow-light.svg"
            alt=""
            style="position:absolute; left:19.1025px; top:116.7px; width:322.6125px; height:9px;"
          >
        </picture>

        <svg class="entity-frame" viewBox="0 0 360 150" aria-hidden="true">
          <rect class="entity-frame-bg" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
          <rect class="entity-frame-stroke" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
        </svg>

        <div class="entity-steps">
          <span>Entry</span>
          <span>Scale In</span>
          <span>Hold</span>
          <span>Conviction</span>
          <span>HODL</span>
        </div>

        <div class="entity-value" data-role="val">–</div>

        <div class="entity-risk">
          <span class="entity-warn" data-role="warn">⚠</span>
          <span class="entity-risk-label">Risk level:</span>
          <span class="entity-risk-val" data-role="risk">–%</span>
        </div>

        <svg class="entity-dot-layer" viewBox="0 0 360 150" aria-hidden="true">
          <circle class="entity-dot-outer" cx="34" cy="121.2" r="9"></circle>
          <circle class="entity-dot-inner" cx="34" cy="121.2" r="6"></circle>
        </svg>

      </div>
    </div>

    <!-- =========================
         BOX 2 — BLUE
         ========================= -->
    <div style="margin-bottom:28px;">
      <div class="entity-box" data-box="2">

        <div class="entity-title">Navigation Index — Blue</div>

        <picture
          style="position:absolute; inset:0; width:360px; height:150px; z-index:1; pointer-events:none;"
          aria-hidden="true"
        >
          <source
            media="(prefers-color-scheme: dark)"
            srcset="/assets/img/bar-updated-blue.svg"
          >
          <img
            src="/assets/img/bar-updated-blue.svg"
            alt=""
            style="position:absolute; left:19.1025px; top:116.7px; width:322.6125px; height:9px;"
          >
        </picture>

        <svg class="entity-frame" viewBox="0 0 360 150" aria-hidden="true">
          <rect class="entity-frame-bg" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
          <rect class="entity-frame-stroke" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
        </svg>

        <div class="entity-steps">
          <span>Entry</span>
          <span>Scale In</span>
          <span>Hold/Wait</span>
          <span>Reduce</span>
          <span>Exit</span>
        </div>

        <div class="entity-value" data-role="val">–</div>

        <div class="entity-risk">
          <span class="entity-warn" data-role="warn">⚠</span>
          <span class="entity-risk-label">Risk level:</span>
          <span class="entity-risk-val" data-role="risk">–%</span>
        </div>

        <svg class="entity-dot-layer" viewBox="0 0 360 150" aria-hidden="true">
          <circle class="entity-dot-outer" cx="24" cy="121.2" r="9"></circle>
          <circle class="entity-dot-inner" cx="24" cy="121.2" r="6"></circle>
        </svg>

      </div>
    </div>

    <!-- =========================
         BOX 3 — GREY
         ========================= -->
    <div>
      <div class="entity-box" data-box="3">

        <div class="entity-title">Navigation Index — Grey</div>

        <picture
          style="position:absolute; inset:0; width:360px; height:150px; z-index:1; pointer-events:none;"
          aria-hidden="true"
        >
          <source
            media="(prefers-color-scheme: dark)"
            srcset="/assets/img/bar-updated-grey.svg"
          >
          <img
            src="/assets/img/bar-updated-grey.svg"
            alt=""
            style="position:absolute; left:19.1025px; top:116.7px; width:322.6125px; height:9px;"
          >
        </picture>

        <svg class="entity-frame" viewBox="0 0 360 150" aria-hidden="true">
          <rect class="entity-frame-bg" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
          <rect class="entity-frame-stroke" x="0.5" y="0.5" width="359" height="149" rx="14"></rect>
        </svg>

        <div class="entity-steps">
          <span>Entry</span>
          <span>Scale In</span>
          <span>Hold/Wait</span>
          <span>Reduce</span>
          <span>Exit</span>
        </div>

        <div class="entity-value" data-role="val">–</div>

        <div class="entity-risk">
          <span class="entity-warn" data-role="warn">⚠</span>
          <span class="entity-risk-label">Risk level:</span>
          <span class="entity-risk-val" data-role="risk">–%</span>
        </div>

        <svg class="entity-dot-layer" viewBox="0 0 360 150" aria-hidden="true">
          <circle class="entity-dot-outer" cx="24" cy="121.2" r="9"></circle>
          <circle class="entity-dot-inner" cx="24" cy="121.2" r="6"></circle>
        </svg>

      </div>
    </div>

  </div>

</div>

<script>
function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

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
    val.innerHTML = step + '<span style="opacity:0.5">/' + TOTAL + '</span>';
  }
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
