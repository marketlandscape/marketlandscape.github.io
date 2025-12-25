---
layout: default
---

Test.

<div id="box1"
     style="
       position:relative;
       width:200px;height:200px;
       background:url('/assets/img/background.png') no-repeat;
       background-size:200px 200px;
       font-family: system-ui, -apple-system, sans-serif;
     ">

  <!-- top label -->
  <div style="
       position:absolute;
       top:12px;
       width:100%;
       text-align:left;
       padding-left:12px;   /* ← distance from box edge */
       padding-right:12px;
       font-size:14px;
       font-weight:600;
       color:#ffffff;
       line-height:1.0;   /* ← adjust this */
     ">
    EXAMPLE<br>
    Example Text<br>
    Navigation Index
  </div>

  <!-- center value (dynamic) -->
  <div id="centerValue" style="
       position:absolute;
       top:50%;
       left:50%;
       transform:translate(-50%,-50%);
       font-size:54px;
       font-weight:600;
       color:#ffffff;
       line-height:1;
     ">
    --
  </div>

  <!-- bottom label -->
  <div style="
       position:absolute;
       bottom:12px;
       width:100%;
       text-align:center;
       font-size:14px;
       color:#d9d9d9;
     ">
    Bottom Text
  </div>

  <!-- dot overlay -->
  <svg width="200" height="200"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">

    <circle id="dotOuter" cx="25" cy="146" r="15" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="25" cy="146" r="9" fill="#ffffff"/>
  </svg>
</div>


<script>
function setValue(boxId, x){
  x = Math.max(0, Math.min(100, Number(x)));

  const cx = 25 + (x / 100) * 150;

  document.getElementById("dotOuter" + boxId).setAttribute("cx", cx);
  document.getElementById("dotInner" + boxId).setAttribute("cx", cx);

  document.getElementById("centerValue" + boxId).textContent =
    String(Math.round(x)).padStart(2, "0");
}
</script>


<script>
async function loadIndexes(){
  const res = await fetch('/data/indexes.json', { cache: 'no-store' });
  const data = await res.json();

  // map JSON keys → boxes
  setValue(1, data.box1);
  setValue(2, data.box2);
  setValue(3, data.box3);
}

loadIndexes();
</script>




