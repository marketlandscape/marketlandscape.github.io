---
layout: default
---

Test.

Some text above.

<div id="box"
     style="position:relative;width:400px;height:400px;
            background:url('background.png') no-repeat;
            background-size:400px 400px;">

  <svg width="400" height="400"
       style="position:absolute;left:0;top:0;pointer-events:none;"
       xmlns="http://www.w3.org/2000/svg">
    <circle id="dotOuter" cx="50" cy="360" r="6" fill="#2d2d2dff"/>
    <circle id="dotInner" cx="50" cy="360" r="5.5" fill="#ffffff"/>
  </svg>
</div>

<script>
function setDot(x){
  x = Math.max(0, Math.min(100, x));
  const cx = 50 + (x/100) * 300;
  document.getElementById("dotOuter").setAttribute("cx", cx);
  document.getElementById("dotInner").setAttribute("cx", cx);
}
setDot(63);
</script>

Some text below.
