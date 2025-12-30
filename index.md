---
layout: default
---

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
font-weight:400;
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
<circle id="dotOuter1" cx="23" cy="132" r="12" fill="#2d2d2dff"/>
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
<circle id="dotOuter2" cx="23" cy="132" r="12" fill="#2d2d2dff"/>
<circle id="dotInner2" cx="23" cy="132" r="8" fill="#ffffff"/>
</svg>

</div>
</div>

<div class="right">
<p>
This second index represents a different dimension of the cycle.
Interpretation thresholds and labels may differ from the first box.
</p>
<p>
The visual scale remains identical to preserve comparability,
while the meaning layer is box-specific.
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
<circle id="dotOuter3" cx="23" cy="132" r="12" fill="#2d2d2dff"/>
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
],
box4: [
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
</script>


<script>
function setValue(boxKey, boxId, x){

x = Math.max(0, Math.min(100, Number(x)));

const LEFT = 23;
const RANGE = 134;
const cx = LEFT + (x / 100) * RANGE;

document.getElementById("dotOuter" + boxId).setAttribute("cx", cx);
document.getElementById("dotInner" + boxId).setAttribute("cx", cx);

document.getElementById("centerValue" + boxId).textContent =
String(Math.round(x)).padStart(2, "0");

document.getElementById("bottomText" + boxId).textContent =
interpretationFromX(boxKey, Math.round(x));
}
</script>


<script>
async function loadIndexes(){

const res = await fetch('/data/indexes.json', { cache: 'no-store' });
const data = await res.json();

setValue("box1", 1, data.box1);
setValue("box2", 2, data.box2);
setValue("box3", 3, data.box3);
setValue("box4", 4, data.box4);
}

loadIndexes();
</script>
