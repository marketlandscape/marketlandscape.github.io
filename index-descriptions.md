---
layout: default
title: Market Navigation
---

<div class="v2">

<!-- =========================
     BOX 1
     ========================= -->
<div style="margin-bottom:28px;">
<div style="display:flex; gap:22px; align-items:flex-start; flex-wrap:wrap;">

<div class="entity-box" data-box="1">
<div class="box-header">Market Position</div>
<div class="box-value" data-role="value">-</div>
<div class="box-risk" data-role="risk">-</div>
</div>

<div
  data-role="desc"
  style="
    width:320px;
    min-height:150px;
    padding:14px;
    border-radius:14px;
    border:1px solid rgba(0,0,0,0.10);
    background:rgba(255,255,255,0.55);
    line-height:1.35;
  "
>
<div style="font-size:12px; opacity:0.75; margin-bottom:6px;">Interpretation</div>
<div data-role="desc-text" style="font-size:14px;">-</div>
</div>

</div>
</div>

<!-- =========================
     BOX 2
     ========================= -->
<div style="margin-bottom:28px;">
<div style="display:flex; gap:22px; align-items:flex-start; flex-wrap:wrap;">

<div class="entity-box" data-box="2">
<div class="box-header">Risk Environment</div>
<div class="box-value" data-role="value">-</div>
<div class="box-risk" data-role="risk">-</div>
</div>

<div
  data-role="desc"
  style="
    width:320px;
    min-height:150px;
    padding:14px;
    border-radius:14px;
    border:1px solid rgba(0,0,0,0.10);
    background:rgba(255,255,255,0.55);
    line-height:1.35;
  "
>
<div style="font-size:12px; opacity:0.75; margin-bottom:6px;">Interpretation</div>
<div data-role="desc-text" style="font-size:14px;">-</div>
</div>

</div>
</div>

<!-- =========================
     BOX 3
     ========================= -->
<div style="margin-bottom:28px;">
<div style="display:flex; gap:22px; align-items:flex-start; flex-wrap:wrap;">

<div class="entity-box" data-box="3">
<div class="box-header">Altcoin Context</div>
<div class="box-value" data-role="value">-</div>
<div class="box-risk" data-role="risk">-</div>
</div>

<div
  data-role="desc"
  style="
    width:320px;
    min-height:150px;
    padding:14px;
    border-radius:14px;
    border:1px solid rgba(0,0,0,0.10);
    background:rgba(255,255,255,0.55);
    line-height:1.35;
  "
>
<div style="font-size:12px; opacity:0.75; margin-bottom:6px;">Interpretation</div>
<div data-role="desc-text" style="font-size:14px;">-</div>
</div>

</div>
</div>

</div>

<script>
/* =========================
   DESCRIPTION LIBRARY
   ========================= */

const BOX_TEXT = {
  1: {
    1: "Entry zone. Conditions are favorable; scale positions gradually and keep size flexible.",
    2: "Constructive. Add selectively; prioritize quality setups and avoid leverage.",
    3: "Neutral. Hold core positions; avoid chasing momentum.",
    4: "Late-cycle. Reduce risk into strength; trim speculative exposure.",
    5: "Peak-risk. Defense first; prioritize capital preservation."
  },
  2: {
    1: "Low stress. Risk is muted; accumulation can proceed carefully.",
    2: "Contained. Risk manageable but rising; position sizing matters.",
    3: "Balanced. Neither defensive nor aggressive posture dominates.",
    4: "Elevated. Tighten criteria and reduce marginal exposure.",
    5: "High stress. Preservation mode; avoid new risk."
  },
  3: {
    1: "Early rotation. Exploration acceptable with small sizing.",
    2: "Positive backdrop. Selective rotation into strength.",
    3: "Mid-cycle. Focus on relative strength and quality.",
    4: "Crowded. Reduce weaker narratives first.",
    5: "Excessive. De-risk aggressively; protect gains."
  }
};

/* =========================
   ZONE LOGIC (25 -> 5)
   ========================= */

function pos25ToZone5(pos){
  const p = Number(pos);
  if (!isFinite(p)) return 3;
  if (p <= 5) return 1;
  if (p <= 10) return 2;
  if (p <= 15) return 3;
  if (p <= 20) return 4;
  return 5;
}

/* =========================
   APPLY DESCRIPTION
   ========================= */

function setEntityDesc(boxEl, text){
  const panel = boxEl.parentElement.querySelector('[data-role="desc-text"]');
  if (!panel) return;
  panel.textContent = text || "-";
}

function applyDescFromPos25(boxEl, pos25){
  const boxId = Number(boxEl.getAttribute("data-box"));
  const zone = pos25ToZone5(pos25);
  const text = BOX_TEXT[boxId] && BOX_TEXT[boxId][zone] ? BOX_TEXT[boxId][zone] : "-";
  setEntityDesc(boxEl, text);
}

/* =========================
   DEMO VALUES (replace later)
   ========================= */

function applyAll(){
  const b1 = document.querySelector('.entity-box[data-box="1"]');
  const b2 = document.querySelector('.entity-box[data-box="2"]');
  const b3 = document.querySelector('.entity-box[data-box="3"]');

  const v1 = 7;
  const v2 = 18;
  const v3 = 22;

  b1.querySelector('[data-role="value"]').textContent = v1;
  b2.querySelector('[data-role="value"]').textContent = v2;
  b3.querySelector('[data-role="value"]').textContent = v3;

  applyDescFromPos25(b1, v1);
  applyDescFromPos25(b2, v2);
  applyDescFromPos25(b3, v3);
}

applyAll();
</script>
