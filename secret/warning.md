---
layout: default
permalink: /warning/
---

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <div id="val1" style="position:absolute;top:44%;left:30px;transform:translateY(-50%);font-size:17px;color:#d9d9d9;">
        –
      </div>

      <div style="position:absolute;top:44%;right:30px;transform:translateY(-50%);font-size:15px;color:#d9d9d9;white-space:nowrap;">
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
        <!-- reserved space -->
        <span style="opacity:0.5;margin-left:6px;font-size:13px;visibility:hidden;">⚠</span>
      </div>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <div id="val2" style="position:absolute;top:44%;left:30px;transform:translateY(-50%);font-size:17px;color:#d9d9d9;">
        –
      </div>

      <div style="position:absolute;top:44%;right:30px;transform:translateY(-50%);font-size:15px;color:#d9d9d9;white-space:nowrap;">
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
        <!-- reserved space -->
        <span style="opacity:0.5;margin-left:6px;font-size:13px;visibility:hidden;">⚠</span>
      </div>
    </div>
  </div>

  <!-- BOX 3 (FORCED WARNING ICON) -->
  <div>
    <div class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <div id="val3" style="position:absolute;top:44%;left:30px;transform:translateY(-50%);font-size:17px;color:#d9d9d9;">
        –
      </div>

      <div style="position:absolute;top:44%;right:30px;transform:translateY(-50%);font-size:15px;color:#d9d9d9;white-space:nowrap;">
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk3" style="opacity:0.75;">–%</span>
        <!-- ALWAYS visible for visual test -->
        <span style="opacity:0.5;margin-left:6px;font-size:13px;visibility:visible;">⚠</span>
      </div>
    </div>
  </div>

</div>

<style>
.indexes{display:flex;flex-direction:column}
.index-box{
  position:relative;
  width:450px;
  height:150px;
  background-repeat:no-repeat;
  background-size:450px 150px;
  font-family:system-ui,-apple-system,sans-serif;
}
.box-title{
  position:absolute;
  top:18px;
  left:30px;
  font-size:15px;
  color:#d9d9d9;
}
</style>

<script>
function setRisk(id, v){
  const el = document.getElementById("risk"+id);
  if (!el) return;
  el.textContent = Math.round(v) + "%";
}
function setVal(id, v){
  const el = document.getElementById("val"+id);
  if (!el) return;
  el.textContent = v;
}

fetch("/data/indexes.json",{cache:"no-store"})
  .then(r=>r.json())
  .then(d=>{
    if("box1_risk" in d) setRisk(1,d.box1_risk);
    if("box2_risk" in d) setRisk(2,d.box2_risk);
    if("box3_risk" in d) setRisk(3,d.box3_risk);
    if("box1" in d) setVal(1,d.box1);
    if("box2" in d) setVal(2,d.box2);
    if("box3" in d) setVal(3,d.box3);
  });
</script>
