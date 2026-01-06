<!-- Simplified layout: three stacked 450×150 boxes with moving dot -->

<div class="indexes">

  <!-- BOX 1 -->
  <div style="margin-bottom:28px;">
    <div id="box1" class="index-box" style="background-image:url('/assets/img/bar-scale-yellow.svg');">
      <div class="box-title">Navigation Index — Yellow</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:33.75px;
          top:88px;
          width:382.5px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold</span>
        <span style="flex:1;text-align:center;">Conviction</span>
        <span style="flex:1;text-align:center;">HODL</span>
      </div>

      <!-- value (left) -->
      <div
        id="val1"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:500;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- risk line (right) -->
      <div
        style="
          position:absolute;
          top:44%;
          right:30px;
          transform:translateY(-50%);
          font-size:15px;
          color:#d9d9d9;
          z-index:2;
          white-space:nowrap;
        ">
        <!-- reserved warn slot to keep label alignment identical across all boxes -->
        <span id="warn1" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk1" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter1" cx="34" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner1" cx="34" cy="118" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 2 -->
  <div style="margin-bottom:28px;">
    <div id="box2" class="index-box" style="background-image:url('/assets/img/bar-scale-blue.svg');">
      <div class="box-title">Navigation Index — Blue</div>

      <!-- scale zones -->
      <div
        style="
          position:absolute;
          left:33.75px;
          top:88px;
          width:382.5px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
        ">
        <span style="flex:1;text-align:center;">Entry</span>
        <span style="flex:1;text-align:center;">Scale In</span>
        <span style="flex:1;text-align:center;">Hold / Wait</span>
        <span style="flex:1;text-align:center;">Reduce</span>
        <span style="flex:1;text-align:center;">Exit</span>
      </div>

      <!-- value (left) -->
      <div
        id="val2"
        style="
          position:absolute;
          top:44%;
          left:30px;
          transform:translateY(-50%);
          font-size:17px;
          font-weight:500;
          color:#d9d9d9;
          z-index:2;
        ">
        –
      </div>

      <!-- risk line (right) -->
      <div
        style="
          position:absolute;
          top:44%;
          right:30px;
          transform:translateY(-50%);
          font-size:15px;
          color:#d9d9d9;
          z-index:2;
          white-space:nowrap;
        ">
        <span id="warn2" style="opacity:0.5;margin-right:6px;font-size:17px;visibility:hidden;">⚠</span>
        <span style="opacity:0.5;">Risk level:</span>
        <span id="risk2" style="opacity:0.75;">–%</span>
      </div>

      <!-- dot layer -->
      <svg class="dot-layer" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
        <circle id="dotOuter2" cx="34" cy="118" r="9" fill="#323232ff"/>
        <circle id="dotInner2" cx="34" cy="118" r="6" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  <!-- BOX 3 -->
  <div>
    <div id="box3" class="index-box" style="background-image:url('/assets/img/bar-scale-grey.svg');">
      <div class="box-title">Navigation Index — Grey</div>

      <!-- scale zones (RESTORED) -->
      <div
        style="
          position:absolute;
          left:33.75px;
          top:88px;
          width:382.5px;
          display:flex;
          font-size:13px;
          color:#d9d9d9;
          opacity:0.5;
          letter-spacing:0.02em;
          z-index:2;
          pointer-events:none;
