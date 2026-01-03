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
<p>This index reflects long-term cycle positioning within the market. It captures structural context and valuation across the cycle, independent of short-term price movements or sentiment.
</p>
</div>

</div>


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

<p>
It is designed to update slowly, reinforcing long-term
orientation over short-term noise.
</p>
</div>

</div>


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
It follows the same visual scale while expressing a distinct
interpretation layer.
</p>

<p>
Together with the other boxes, it enables side-by-side
comparison across different market dimensions.
</p>
</div>

</div>


<script>
/* ---- Scales / Descriptions ---- */

const descriptions = {
  box1: [
    { max: 19, label: "Entry" },
    { max: 39, label: "Scaling In" },
    { max: 59, label: "Hold" },
    { max: 79, label: "Conviction Hold" },
    { max: 100, label: "HODL" }
  ],
  box2: [
    { max: 19, label: "Entry" },
    { max: 39, label: "Scaling In " },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scaling Out" },
    { max: 100, label: "Exit" }
  ],
  box3: [
    { max: 19, label: "Entry" },
    { max: 39, label: "Probe Entry / Scaling In" },
    { max: 59, label: "Hold / Wait" },
    { max: 79, label: "Scaling Out" },
    { max: 100, label: "Exit" }
  ]
};

function labelFromX(boxKey, x){
  const steps = descriptions[boxKey] || [];
  for (const step of steps){
    if (x <= step.max) return step.label;
  }
  return "--";
}

/* ---- UI update ---- */

function setValue(boxKey, boxId, x){
  x = Math.max(0, Math.min(100, Number(x)));
  const xr = Math.round(x);

  const LEFT = 23;
  const RANGE = 134;
  const cx = LEFT + (xr / 100) * RANGE;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  if (outer) outer.setAttribute("cx", cx);
  if (inner) inner.setAttribute("cx", cx);

  const center = document.getElementById("centerValue" + boxId);
  if (center) center.textContent = String(xr).padStart(2, "0");

  const bottom = document.getElementById("bottomText" + boxId);
  if (bottom) bottom.textContent = labelFromX(boxKey, xr);
}

/* ---- Data load (cache + fetch) ---- */

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

  async function loadIndexes(){
    const cached = readCache();

    if (cached && cached.boxes){
      if (cached.boxes.box1 !== undefined) setValue("box1", 1, cached.boxes.box1);
      if (cached.boxes.box2 !== undefined) setValue("box2", 2, cached.boxes.box2);
      if (cached.boxes.box3 !== undefined) setValue("box3", 3, cached.boxes.box3);
    }

    try{
      const res = await fetch('/data/indexes.json', { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();

      const sig = String(data.updated_utc || "");
      if (cached && cached.sig === sig) return;

      setValue("box1", 1, data.box1);
      setValue("box2", 2, data.box2);
      setValue("box3", 3, data.box3);

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
