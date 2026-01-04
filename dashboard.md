<!-- Simplified layout: three stacked 540×180 boxes with moving dot -->
<div class="indexes">

  <!-- BOX 1 -->
  <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
    <div class="box-title">Navigation Index — Yellow</div>

    <!-- scale zones -->
    <div id="zones1"
         style="
           position:absolute;
           left:40.5px;
           top:108px;
           width:459px;
           display:flex;
           font-size:15px;
           color:#d9d9d9;
           opacity:0.75;
           letter-spacing:0.02em;
           z-index:2;
           pointer-events:none;
         ">
      <span style="flex:1;text-align:center;">ENTRY</span>
      <span style="flex:1;text-align:center;">SCALE IN</span>
      <span style="flex:1;text-align:center;">HOLD/WAIT</span>
      <span style="flex:1;text-align:center;">REDUCE</span>
      <span style="flex:1;text-align:center;">EXIT</span>
    </div>

    <!-- value -->
    <div id="val1"
         style="
           position:absolute;
           top:44%;
           left:36px;
           transform:translateY(-50%);
           font-size:15px;
           font-weight:600;
           color:#ffffff;
           z-index:2;
         ">–</div>

    <!-- dot layer -->
    <svg class="dot-layer" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
      <circle id="dotOuter1" cx="45" cy="157" r="12" fill="#323232ff"/>
      <circle id="dotInner1" cx="45" cy="157" r="8" fill="#ffffff"/>
    </svg>
  </div>

  <!-- BOX 2 -->
  <div id="box2" class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
    <div class="box-title">Navigation Index — Blue</div>

    <div id="zones2"
         style="
           position:absolute;
           left:40.5px;
           top:108px;
           width:459px;
           display:flex;
           font-size:15px;
           color:#d9d9d9;
           opacity:0.75;
           letter-spacing:0.02em;
           z-index:2;
           pointer-events:none;
         ">
      <span style="flex:1;text-align:center;">ENTRY</span>
      <span style="flex:1;text-align:center;">SCALE IN</span>
      <span style="flex:1;text-align:center;">HOLD/WAIT</span>
      <span style="flex:1;text-align:center;">REDUCE</span>
      <span style="flex:1;text-align:center;">EXIT</span>
    </div>

    <div id="val2"
         style="
           position:absolute;
           top:44%;
           left:36px;
           transform:translateY(-50%);
           font-size:15px;
           font-weight:600;
           color:#ffffff;
           z-index:2;
         ">–</div>

    <svg class="dot-layer" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
      <circle id="dotOuter2" cx="45" cy="157" r="12" fill="#323232ff"/>
      <circle id="dotInner2" cx="45" cy="157" r="8" fill="#ffffff"/>
    </svg>
  </div>

  <!-- BOX 3 -->
  <div id="box3" class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
    <div class="box-title">Navigation Index — Grey</div>

    <div id="zones3"
         style="
           position:absolute;
           left:40.5px;
           top:108px;
           width:459px;
           display:flex;
           font-size:15px;
           color:#d9d9d9;
           opacity:0.75;
           letter-spacing:0.02em;
           z-index:2;
           pointer-events:none;
         ">
      <span style="flex:1;text-align:center;">ENTRY</span>
      <span style="flex:1;text-align:center;">SCALE IN</span>
      <span style="flex:1;text-align:center;">HOLD/WAIT</span>
      <span style="flex:1;text-align:center;">REDUCE</span>
      <span style="flex:1;text-align:center;">EXIT</span>
    </div>

    <div id="val3"
         style="
           position:absolute;
           top:44%;
           left:36px;
           transform:translateY(-50%);
           font-size:15px;
           font-weight:600;
           color:#ffffff;
           z-index:2;
         ">–</div>

    <svg class="dot-layer" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
      <circle id="dotOuter3" cx="45" cy="157" r="12" fill="#323232ff"/>
      <circle id="dotInner3" cx="45" cy="157" r="8" fill="#ffffff"/>
    </svg>
  </div>

</div>

<style>
  .indexes{
    display:flex;
    flex-direction:column;
    gap:20px;
  }

  .index-box{
    position:relative;
    width:540px;
    height:180px;
    background-repeat:no-repeat;
    background-size:540px 180px;
    font-family:system-ui,-apple-system,sans-serif;
  }

  .box-title{
    position:absolute;
    top:22px;
    left:36px;
    right:20px;
    font-size:15px;
    font-weight:500;
    color:#d9d9d9;
    line-height:1.2;
    z-index:2;
  }

  .dot-layer{
    position:absolute;
    inset:0;
    pointer-events:none;
    z-index:1;
  }
</style>

<script>
function setValue(boxId, x){
  x = Math.max(0, Math.min(100, Number(x)));

  const step = Math.round((x / 100) * 19) + 1;
  const ratio = (step - 1) / 19;

  const LEFT = 45;
  const RANGE = 510;
  const cx = LEFT + ratio * RANGE;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  const val   = document.getElementById("val" + boxId);

  if (outer) outer.setAttribute("cx", cx);
  if (inner) inner.setAttribute("cx", cx);
  if (val)   val.textContent = step + "/20";
}

(function () {
  const KEY = "indexes_cache_v1";

  async function loadIndexes(){
    try{
      const res = await fetch('/data/indexes.json', { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();

      setValue(1, data.box1);
      setValue(2, data.box2);
      setValue(3, data.box3);
    } catch(e){}
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", loadIndexes);
  } else {
    loadIndexes();
  }
})();
</script>
