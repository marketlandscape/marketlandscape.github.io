---
layout: default
---

<!-- =========================
     PRICE LINE (visual only)
     ========================= -->
<div
  style="
    margin-left:13px;
    margin-bottom:28px;
    padding-right:16px;
    font-size:14px;
    opacity:0.8;
  "
>
  <span style="margin-right:6px; opacity:0.8;">
    BTC <span id="btcPriceIndex">--</span>
  </span>

  <span style="margin:0 8px; opacity:0.8;">·</span>

  <span style="margin-right:6px; opacity:0.8;">
    ETH <span id="ethPriceIndex">--</span>
  </span>

  <span
    id="priceUpdatedIndex"
    style="
      margin-left:14px;
      font-size:11px;
      opacity:0.7;
    "
  >
    Updated --
  </span>
</div>

<script>
(async function(){
  try{
    const res = await fetch("/data/prices.json", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();

    const fmt = n =>
      Number(n).toLocaleString(undefined, { maximumFractionDigits: 0 });

    const btc = data?.prices?.BTC;
    const eth = data?.prices?.ETH;

    if (Number.isFinite(btc))
      document.getElementById("btcPriceIndex").textContent = "$" + fmt(btc);

    if (Number.isFinite(eth))
      document.getElementById("ethPriceIndex").textContent = "$" + fmt(eth);

    const t = data?.updated_utc ? String(data.updated_utc) : "-- UTC";
    const src = data?.source ? (" · " + data.source) : "";
    document.getElementById("priceUpdatedIndex").textContent =
      "Updated " + t + src;

  } catch(e){}
})();
</script>

<!-- =========================
     INDEX BOX 1
     ========================= -->

<div class="index-row">

<div class="left">
<div id="box1"
style="
position:relative;
width:180px;
height:180px;
background:url('/assets/img/background-yellow.svg') no-repeat;
background-size:180px 180px;
font-family: system-ui, -apple-system, sans-serif;
">

<div style="
position:absolute;
top:14px;
width:100%;
text-align:left;
padding-left:13px;
padding-right:11px;
font-size:14px;
font-weight:500;
color:#d9d9d9;
line-height:1.2;
">
EXAMPLE<br>
Example Text<br>
Navigation Index
</div>

<div id="centerValue1" style="
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
font-size:48px;
font-weight:600;
color:#ffffff;
line-height:1;
">
--
</div>

<div id="bottomText1" style="
position:absolute;
bottom:11px;
width:100%;
text-align:center;
font-size:14px;
color:#d9d9d9;
">
--
</div>

<svg
width="100%"
height="100%"
viewBox="0 0 180 180"
style="position:absolute;left:0;top:0;pointer-events:none;"
xmlns="http://www.w3.org/2000/svg">
<circle id="dotOuter1" cx="23" cy="132" r="12" fill="#323232ff"/>
<circle id="dotInner1" cx="23" cy="132" r="8" fill="#ffffff"/>
</svg>

</div>
</div>

<div class="right">
<p>This index shows the current position within the broader market cycle.</p>
<p>
The indicator is designed to reduce emotional decision-making by providing
a slow-moving, cycle-aware reference point.
</p>
</div>

</div>

<!-- =========================
     INDEX BOX 2
     ========================= -->

<div class="index-row" style="margin-top:32px;">

<div class="left">
<div id="box2"
style="
position:relative;
width:180px;
height:180px;
background:url('/assets/img/background-blue.svg') no-repeat;
background-size:180px 180px;
font-family: system-ui, -apple-system, sans-serif;
">

<div style="
position:absolute;
top:14px;
width:100%;
text-align:left;
padding-left:13px;
padding-right:11px;
font-size:14px;
font-weight:500;
color:#d9d9d9;
line-height:1.2;
">
EXAMPLE<br>
Second Box<br>
Navigation Index
</div>

<div id="centerValue2" style="
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
font-size:48px;
font-weight:600;
color:#ffffff;
line-height:1;
">
--
</div>

<div id="bottomText2" style="
position:absolute;
bottom:11px;
width:100%;
text-align:center;
font-size:14px;
color:#d9d9d9;
">
--
</div>

<svg
width="100%"
height="100%"
viewBox="0 0 180 180"
style="position:absolute;left:0;top:0;pointer-events:none;"
xmlns="http://www.w3.org/2000/svg">
<circle id="dotOuter2" cx="23" cy="132" r="12" fill="#323232ff"/>
<circle id="dotInner2" cx="23" cy="132" r="8" fill="#ffffff"/>
</svg>

</div>
</div>

<div class="right">
<p>
This second index focuses on an additional market dimension,
using the same scale for consistent positioning.
</p>
</div>

</div>

<!-- =========================
     INDEX BOX 3
     ========================= -->

<div class="index-row" style="margin-top:32px;">

<div class="left">
<div id="box3"
style="
position:relative;
width:180px;
height:180px;
background:url('/assets/img/background-grey.svg') no-repeat;
background-size:180px 180px;
font-family: system-ui, -apple-system, sans-serif;
">

<div style="
position:absolute;
top:14px;
width:100%;
text-align:left;
padding-left:13px;
padding-right:11px;
font-size:14px;
font-weight:500;
color:#d9d9d9;
line-height:1.2;
">
EXAMPLE<br>
Third Box<br>
Navigation Index
</div>

<div id="centerValue3" style="
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
font-size:48px;
font-weight:600;
color:#ffffff;
line-height:1;
">
--
</div>

<div id="bottomText3" style="
position:absolute;
bottom:11px;
width:100%;
text-align:center;
font-size:14px;
color:#d9d9d9;
">
--
</div>

<svg
width="100%"
height="100%"
viewBox="0 0 180 180"
style="position:absolute;left:0;top:0;pointer-events:none;"
xmlns="http://www.w3.org/2000/svg">
<circle id="dotOuter3" cx="23" cy="132" r="12" fill="#323232ff"/>
<circle id="dotInner3" cx="23" cy="132" r="8" fill="#ffffff"/>
</svg>

</div>
</div>

<div class="right">
<p>
This third index completes the initial set of indicators.
</p>
</div>

</div>

<!-- =========================
     INTERPRETATION LOGIC
     ========================= -->

<script>
const interpretations = {
  box1: [
    { max: 19, label: "Entry Buy" },
    { max: 39, label: "Probe Entry" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scale Out" },
    { max: 100, label: "Exit" }
  ],
  box2: [
    { max: 19, label: "Entry Buy" },
    { max: 39, label: "Probe Entry" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scale Out" },
    { max: 100, label: "Exit" }
  ],
  box3: [
    { max: 19, label: "Entry Buy" },
    { max: 39, label: "Probe Entry" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scale Out" },
    { max: 100, label: "Exit" }
  ]
};

function interpretationFromX(boxKey, x){
  for (const step of interpretations[boxKey]) {
    if (x <= step.max) return step.label;
  }
  return "--";
}

function setValue(boxKey, boxId, x){
  x = Math.max(0, Math.min(100, Number(x)));

  const LEFT = 23;
  const RANGE = 134;
  const cx = LEFT + (x / 100) * RANGE;

  const o = document.getElementById("dotOuter" + boxId);
  const i = document.getElementById("dotInner" + boxId);
  const c = document.getElementById("centerValue" + boxId);
  const b = document.getElementById("bottomText" + boxId);

  if (!o || !i || !c || !b) return;

  o.setAttribute("cx", cx);
  i.setAttribute("cx", cx);
  c.textContent = String(Math.round(x)).padStart(2, "0");
  b.textContent = interpretationFromX(boxKey, Math.round(x));
}
</script>

<!-- =========================
     INDEX LOADER (no blink)
     ========================= -->

<script>
(function () {
  const KEY = "indexes_cache_v1";

  function readCache(){
    try{
      const raw = sessionStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e){
      return null;
    }
  }

  function writeCache(obj){
    try{
      sessionStorage.setItem(KEY, JSON.stringify(obj));
    } catch(e){}
  }

  function hasBox(n){
    return !!document.getElementById("centerValue" + n);
  }

  function applyBoxes(boxes){
    if (!boxes) return;
    if (hasBox(1) && boxes.box1 !== undefined) setValue("box1", 1, boxes.box1);
    if (hasBox(2) && boxes.box2 !== undefined) setValue("box2", 2, boxes.box2);
    if (hasBox(3) && boxes.box3 !== undefined) setValue("box3", 3, boxes.box3);
  }

  async function loadIndexes(){
    const cached = readCache();
    if (cached && cached.boxes) applyBoxes(cached.boxes);

    try{
      const res = await fetch('/data/indexes.json', { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();

      const sig = String(data.updated_utc || "");
      if (cached && cached.sig === sig) return;

      applyBoxes({
        box1: data.box1,
        box2: data.box2,
        box3: data.box3
      });

      writeCache({
        sig,
        boxes: {
          box1: data.box1,
          box2: data.box2,
          box3: data.box3
        }
      });
    } catch(e){}
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", loadIndexes);
  } else {
    loadIndexes();
  }
})();
</script>
