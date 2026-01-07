<!-- FULL FILE — unified 28px spacing everywhere -->

<div class="indexes-grid">

  <!-- ROW 1 -->
  <div class="row">
    <div id="box1" class="index-box main" style="background-image:url('/assets/img/mobile-bar-updated-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <div class="labels">
        <span>Entry</span>
        <span>Scale In</span>
        <span>Hold</span>
        <span>Conviction</span>
        <span>HODL</span>
      </div>

      <div id="val1" class="val">–</div>

      <div class="risk">
        <span id="warn1" class="warn">⚠</span>
        <span class="risk-label">Risk level:</span>
        <span id="risk1">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="34" cy="121.2" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="34" cy="121.2" r="6" fill="#ffffff"/>
      </svg>
    </div>

    <div class="index-box side"
         style="background-image:url('/assets/img/mobile-grey-280.svg');">
    </div>
  </div>

  <!-- ROW 2 -->
  <div class="row">
    <div id="box2" class="index-box main" style="background-image:url('/assets/img/mobile-bar-scale-blue.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <div class="labels">
        <span>Entry</span>
        <span>Scale In</span>
        <span>Hold/Wait</span>
        <span>Reduce</span>
        <span>Exit</span>
      </div>

      <div id="val2" class="val">–</div>

      <div class="risk">
        <span id="warn2" class="warn">⚠</span>
        <span class="risk-label">Risk level:</span>
        <span id="risk2">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="24" cy="121.2" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="24" cy="121.2" r="6" fill="#ffffff"/>
      </svg>
    </div>

    <div class="index-box side"
         style="background-image:url('/assets/img/mobile-grey-280.svg');">
    </div>
  </div>

  <!-- ROW 3 -->
  <div class="row">
    <div id="box3" class="index-box main" style="background-image:url('/assets/img/mobile-bar-updated-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <div class="labels">
        <span>Entry</span>
        <span>Scale In</span>
        <span>Hold/Wait</span>
        <span>Reduce</span>
        <span>Exit</span>
      </div>

      <div id="val3" class="val">–</div>

      <div class="risk">
        <span id="warn3" class="warn">⚠</span>
        <span class="risk-label">Risk level:</span>
        <span id="risk3">–%</span>
      </div>

      <svg class="dot-layer" viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter3" cx="24" cy="121.2" r="9" fill="#323232ff"/>
        <circle id="dotInner3" cx="24" cy="121.2" r="6" fill="#ffffff"/>
      </svg>
    </div>

    <div class="index-box side"
         style="background-image:url('/assets/img/mobile-grey-280.svg');">
    </div>
  </div>

</div>

<style>
.indexes-grid{
  display:flex;
  flex-direction:column;
  gap:28px;
  font-family:system-ui,-apple-system,sans-serif;
}

.row{
  display:flex;
  gap:28px;
  align-items:flex-start;
}

.index-box{
  position:relative;
  height:150px;
  background-repeat:no-repeat;
}

.index-box.main{
  width:360px;
  background-size:360px 150px;
}

.index-box.side{
  width:280px;
  background-size:280px 150px;
  flex-shrink:0;
}

/* MATCH index visuals exactly */
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

.labels{
  position:absolute;
  left:20px;
  top:92px;
  width:320px;
  display:flex;
  font-size:12px;
  color:#d9d9d9;
  opacity:0.5;
  letter-spacing:0.02em;
  z-index:2;
  pointer-events:none;
}

.labels span{
  flex:1;
  text-align:center;
}

.val{
  position:absolute;
  top:44%;
  left:20px;
  transform:translateY(-50%);
  font-size:16px;
  font-weight:500;
  color:#d9d9d9;
  z-index:2;
}

.risk{
  position:absolute;
  top:44%;
  right:20px;
  transform:translateY(-50%);
  font-size:14px;
  color:#d9d9d9;
  white-space:nowrap;
  z-index:2;
}

.warn{
  margin-right:6px;
  font-size:16px;
  visibility:hidden;
  opacity:0.5;
}

.risk-label{
  opacity:0.5;
}

#risk1,#risk2,#risk3{
  opacity:0.75;
}

.dot-layer{
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:1;
}

@media (max-width:720px){
  .row{
    flex-direction:column;
    gap:28px;          /* vertical spacing = 28 */
  }

  .index-box.side{
    margin-top:0;      /* remove extra spacing */
  }
}
</style>

<script>
function clamp(v,l,h){return Math.max(l,Math.min(h,v));}

function setValue(id,x){
  const n=Number(x); if(!Number.isFinite(n)) return;
  const pct=clamp(n,0,100);
  const TOTAL=25;
  const step=Math.round((pct/100)*(TOTAL-1))+1;
  const START=23.5, END=336.5;
  const BIN=(END-START)/TOTAL;
  const cx=START+(step-0.5)*BIN;

  document.getElementById("dotOuter"+id).setAttribute("cx",cx);
  document.getElementById("dotInner"+id).setAttribute("cx",cx);
  document.getElementById("val"+id).innerHTML=
    step+'<span style="opacity:0.5">/'+TOTAL+'</span>';
}

function setRisk(id,r){
  document.getElementById("risk"+id).textContent=
    Math.round(clamp(r,0,100))+"%";
}

function setWarn(id,show){
  document.getElementById("warn"+id).style.visibility=
    show?"visible":"hidden";
}

(function(){
  const KEY="dashboard_indexes_cache_v6";

  function apply(d){
    if(d.box1!=null) setValue(1,d.box1);
    if(d.box2!=null) setValue(2,d.box2);
    if(d.box3!=null) setValue(3,d.box3);
    if(d.box1_risk!=null) setRisk(1,d.box1_risk);
    if(d.box2_risk!=null) setRisk(2,d.box2_risk);
    if(d.box3_risk!=null) setRisk(3,d.box3_risk);
    setWarn(2,Number(d.box2)>=80);
    setWarn(3,Number(d.box3)>=80);
  }

  async function load(){
    try{
      const c=sessionStorage.getItem(KEY);
      if(c) apply(JSON.parse(c));
      const r=await fetch("/data/indexes.json",{cache:"no-store"});
      if(!r.ok) return;
      const d=await r.json();
      apply(d);
      sessionStorage.setItem(KEY,JSON.stringify(d));
    }catch(e){}
  }

  document.readyState==="loading"
    ? document.addEventListener("DOMContentLoaded",load)
    : load();
})();
</script>
