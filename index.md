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
BTC<br>
Market Cycle<br>
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
<p><strong>Entry</strong><br>
Conditions support initial exposure even if confidence is not yet widespread. Price levels support participation despite negative or uncertain sentiment. The emphasis is on establishing exposure rather than optimising timing.</p>

<p><strong>Accumulation</strong><br>
The setup continues to favor increasing exposure. Price behavior and structure remain favorable on a longer horizon. Volatility is expected and does not undermine the broader setup.</p>

<p><strong>Hold</strong><br>
The balance is broadly neutral. Price is neither clearly undervalued nor clearly stretched on a cycle-adjusted basis. Existing exposure is typically maintained, with limited directional bias.</p>

<p><strong>Conviction Hold</strong><br>
Price levels are high relative to earlier ranges, but the broader trend and market structure remain intact. Conditions favor maintaining existing exposure rather than adding aggressively or reacting to short-term fluctuations.</p>

<p><strong>HODL</strong><br>
The asset sits at the upper end of the cycle. Valuation and cycle position dominate over short-term signals. The index reflects this context without implying a specific response.</p>
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
ETH / ALTS<br>
Positioning<br>
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
This index focuses on positioning dynamics outside BTC, using the same scale for consistent navigation across assets.
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
Risk / Context<br>
Overlay<br>
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
This index adds contextual information that complements the other two, enabling side-by-side navigation across multiple market dimensions.
</p>
</div>

</div>


<script>
/* ---- Scales / Labels ---- */

const descriptions = {
  box1: [
    { max: 19, label: "Entry" },
    { max: 39, label: "Accumulation" },
    { max: 59, label: "Hold" },
    { max: 79, label: "Conviction Hold" },
    { max: 100, label: "HODL" }
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

function labelFromX(boxKey, x){
  const steps = descriptions[boxKey] || [];
  for (const step of steps){
    if (x <= step.max) return step.label;
  }
  return "--";
}
</script>
