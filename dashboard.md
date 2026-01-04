<!-- Simplified layout: three stacked 540×180 boxes with moving dot -->
<div class="indexes">

  <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
    <div class="box-title">Navigation Index — Yellow</div>

    <svg class="dot-layer" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle id="dotOuter1" cx="45" cy="157" r="12" fill="#323232ff"/>
      <circle id="dotInner1" cx="45" cy="157" r="8" fill="#ffffff"/>
    </svg>
  </div>

  <div id="box2" class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
    <div class="box-title">Navigation Index — Blue</div>

    <svg class="dot-layer" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle id="dotOuter2" cx="45" cy="157" r="12" fill="#323232ff"/>
      <circle id="dotInner2" cx="45" cy="157" r="8" fill="#ffffff"/>
    </svg>
  </div>

  <div id="box3" class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
    <div class="box-title">Navigation Index — Grey</div>

    <svg class="dot-layer" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    top:22px;        /* lowered */
    left:36px;       /* aligned with bar start */
    right:20px;
    font-size:14px;
    font-weight:500;
    color:#d9d9d9;
    line-height:1.2;
    z-index:2;
  }

  .dot-layer{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    pointer-events:none;
    z-index:1;
  }
</style>

<script>
/* ---- Dot positioning (matches bar-scale-*.svg geometry) ---- */
/*
  Background SVG coordinate system: viewBox 0 0 600 200
  End circles at cx=45 and cx=555  => LEFT=45, RANGE=510
*/

function setValue(boxId, x){
  x = Math.max(0, Math.min(100, Number(x)));
  const xr = Math.round(x);

  const LEFT = 45;
  const RANGE = 510;
  const cx = LEFT + (xr / 100) * RANGE;

  const outer = document.getElementById("dotOuter" + boxId);
  const inner = document.getElementById("dotInner" + boxId);
  if (outer) outer.setAttribute("cx", cx);
  if (inner) inner.setAttribute("cx", cx);
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
      if (cached.boxes.box1 !== undefined) setValue(1, cached.boxes.box1);
      if (cached.boxes.box2 !== undefined) setValue(2, cached.boxes.box2);
      if (cached.boxes.box3 !== undefined) setValue(3, cached.boxes.box3);
    }

    try{
      const res = await fetch('/data/indexes.json', { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();

      const sig = String(data.updated_utc || "");
      if (cached && cached.sig === sig) return;

      setValue(1, data.box1);
      setValue(2, data.box2);
      setValue(3, data.box3);

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
