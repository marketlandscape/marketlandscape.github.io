/* =====================================================
   Wide history hover layer (ECharts, transparent)
   - Uses SVG as the visible chart (already on the page)
   - Uses ECharts ONLY for hover tooltip + crosshair
   - Reads window JSON from: /assets/data/wide/nav_<range>.json
   ===================================================== */

(function () {
  const page = document.querySelector(".v2.v2-nav-history-wide");
  if (!page) return;

  const box = page.querySelector(".entity-history-box.wide");
  if (!box) return;

  const layer = box.querySelector(".nav-echarts-layer");
  const buttons = Array.from(page.querySelectorAll(".nav-range-btn"));
  if (!layer || buttons.length === 0) return;

  // Ensure overlay sits on top and captures mouse, without changing visuals
  layer.style.position = "absolute";
  layer.style.inset = "0";
  layer.style.zIndex = "2";
  layer.style.opacity = "0";
  layer.style.pointerEvents = "auto"; // must receive hover

  function jsonUrlFor(range) {
    return `/assets/data/wide/nav_${range}.json`;
  }

  function getActiveRange() {
    const active = buttons.find(b => b.classList.contains("is-active"));
    return active?.dataset?.range || box.dataset.defaultRange || "1w";
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // Tooltip shows 1–25 (same meaning as your UI), but uses underlying 0–100 values
  function toStep25(v) {
    const n = Number(v);
    if (!Number.isFinite(n)) return null;
    const pct = clamp(n, 0, 100);
    return Math.round((pct / 100) * (25 - 1)) + 1;
  }

  let chart = null;

  function ensureChart() {
    if (!window.echarts) return null;
    if (chart) return chart;
    chart = window.echarts.init(layer, null, { renderer: "svg" });

    // Resize on window resize
    window.addEventListener("resize", () => {
      try { chart.resize(); } catch (e) {}
    }, { passive: true });

    return chart;
  }

  async function loadAndRender(range) {
    const c = ensureChart();
    if (!c) return;

    try {
      const res = await fetch(jsonUrlFor(range), { cache: "no-store" });
      if (!res.ok) throw new Error("missing json");
      const rows = await res.json();
      if (!Array.isArray(rows) || rows.length < 2) throw new Error("bad json");

      const t = rows.map(r => String(r.t || ""));
      const b1 = rows.map(r => (r.box1 == null ? null : Number(r.box1)));
      const b2 = rows.map(r => (r.box2 == null ? null : Number(r.box2)));
      const b3 = rows.map(r => (r.box3 == null ? null : Number(r.box3)));

      const option = {
        animation: false,
        backgroundColor: "rgba(0,0,0,0)",

        grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: false },

        xAxis: {
          type: "category",
          data: t,
          boundaryGap: false,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false }
        },

        yAxis: {
          type: "value",
          min: 0,
          max: 100,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false }
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: { color: "rgba(255,255,255,0.25)", width: 1 }
          },
          backgroundColor: "rgba(20,20,20,0.92)",
          borderWidth: 0,
          textStyle: { color: "rgba(255,255,255,0.92)", fontSize: 11 },
          formatter: function (params) {
            const idx = params?.[0]?.dataIndex ?? 0;
            const ts = t[idx] || "";
            const v1 = b1[idx], v2 = b2[idx], v3 = b3[idx];

            const s1 = v1 == null ? "–" : `${toStep25(v1)}/25`;
            const s2 = v2 == null ? "–" : `${toStep25(v2)}/25`;
            const s3 = v3 == null ? "–" : `${toStep25(v3)}/25`;

            return `${ts}<br/>BTC: ${s1}<br/>ETH: ${s2}<br/>Alts: ${s3}`;
          }
        },

        // Series are INVISIBLE (so your SVG remains the only visible chart)
        // But they provide geometry for the tooltip.
        series: [
          { name: "Alts", type: "line", data: b3, showSymbol: false, connectNulls: true,
            lineStyle: { width: 2, color: "rgba(0,0,0,0)" } },
          { name: "ETH", type: "line", data: b2, showSymbol: false, connectNulls: true,
            lineStyle: { width: 2, color: "rgba(0,0,0,0)" } },
          { name: "BTC", type: "line", data: b1, showSymbol: false, connectNulls: true,
            lineStyle: { width: 2, color: "rgba(0,0,0,0)" } }
        ]
      };

      layer.style.opacity = "0";
      c.setOption(option, { notMerge: true, lazyUpdate: true });

      c.off("finished");
      c.on("finished", () => {
        // After ECharts is ready, enable the hover layer (still visually invisible)
        layer.style.opacity = "1";
      });
    } catch (e) {
      // If JSON missing, keep SVG only (no hover)
      layer.style.opacity = "0";
    }
  }

  // Initial render
  const initRange = getActiveRange();
  loadAndRender(initRange);

  // Update on range clicks (after the SVG switcher updates active class)
  for (const b of buttons) {
    b.addEventListener("click", () => {
      const r = b.dataset.range || "1w";
      // slight delay so nav-history-wide-switch.js applies is-active + swaps SVG
      setTimeout(() => loadAndRender(r), 0);
    });
  }
})();
