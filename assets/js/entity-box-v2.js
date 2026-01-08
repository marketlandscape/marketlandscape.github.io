(function () {
  const boxes = document.querySelectorAll(".entity-box");
  if (!boxes.length) return;

  function setValue(boxEl, x) {
    const n = Number(x);
    if (!Number.isFinite(n)) return;

    const pct = Math.max(0, Math.min(100, n));
    const TOTAL = 25;
    const step = Math.round((pct / 100) * (TOTAL - 1)) + 1;

    const START = 23.5, END = 336.5;
    const BIN = (END - START) / TOTAL;
    const cx = START + (step - 0.5) * BIN;

    boxEl.querySelector(".entity-dot-outer")?.setAttribute("cx", cx);
    boxEl.querySelector(".entity-dot-inner")?.setAttribute("cx", cx);

    const val = boxEl.querySelector('[data-role="val"]');
    if (val) val.innerHTML = step + '<span style="opacity:0.5">/' + TOTAL + "</span>";
  }

  function setRisk(boxEl, r) {
    const n = Number(r);
    if (!Number.isFinite(n)) return;
    const risk = Math.round(Math.max(0, Math.min(100, n)));
    boxEl.querySelector('[data-role="risk"]')?.textContent = risk + "%";
  }

  function setWarn(boxEl, show) {
    const warn = boxEl.querySelector('[data-role="warn"]');
    if (warn) warn.style.visibility = show ? "visible" : "hidden";
  }

  // Demo values (replace with your real data binding)
  boxes.forEach((boxEl, i) => {
    const v = 72;        // 0..100
    const risk = 31;     // 0..100
    setValue(boxEl, v);
    setRisk(boxEl, risk);
    setWarn(boxEl, v >= 80);
  });
})();

