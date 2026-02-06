/* =====================================================
   Wide history hover layer (ECharts, transparent)
   - SVG is the visible chart
   - ECharts is ONLY tooltip + crosshair
   - Reads window JSON from: /assets/data/wide/nav_<range>.json
   ===================================================== */

(function () {
  const page = document.querySelector(".v2-nav-history-wide");
  if (!page) return;

  // Must match render_nav_svgs_wide.py:
  // ax = fig.add_axes([0.03, 0.10, 0.94, 0.86])
  // => left 3%, right 3%, bottom 10%, top 4%
  const GRID = {
    left: "3%",
    right: "3%",
    top: "4%",
    bottom: "10%",
    containLabel: false
  };

  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  async function loadWindow(range) {
    const url = `/assets/data/wide/nav_${range}.json`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    return await res.json();
  }

  function toSeries(rows) {
    const t = rows.map(r => String(r.t || ""));
    const b1 = rows.map(r => (r.box1 == null ? null : clamp(Number(r.box1), 0, 100)));
    const b2 = rows.map(r => (r.box2 == null ? null : clamp(Number(r.box2), 0, 100)));
    const b3 = rows.map(r => (r.box3 == null ? null : clamp(Number(r.box3), 0, 100)));
    return { t, b1, b2, b3 };
  }

  function ensureChart(layerEl) {
    let chart = layerEl.__echarts;
    if (chart) return chart;

    chart = echarts.init(layerEl, null, { renderer: "canvas" });
    layerEl.__echarts = chart;

    // Keep it responsive
    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(layerEl);
    layerEl.__echarts_ro = ro;

    return chart;
  }

  function setOption(chart, t, b1, b2, b3) {
    const option = {
      animation: false,
      backgroundColor: "rgba(0,0,0,0)",

      grid: GRID,

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
        confine: true,
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

          // Keep it minimal. Values are 0–100 (same as SVG).
          const f = (v) => (v == null || !Number.isFinite(v)) ? "–" : String(Math.round(v));

          return (
            `<div style="line-height:1.25;">` +
              `<div style="opacity:.85; margin-bottom:4px;">${ts}</div>` +
              `<div>BTC: ${f(v1)}</div>` +
              `<div>ETH: ${f(v2)}</div>` +
              `<div>ALTS: ${f(v3)}</div>` +
            `</div>`
          );
        }
      },

      // Invisible series: we only want tooltip + crosshair
      series: [
        {
          name: "ALTS",
          type: "line",
          data: b3,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          emphasis: { disabled: true },
          silent: true
        },
        {
          name: "ETH",
          type: "line",
          data: b2,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          emphasis: { disabled: true },
          silent: true
        },
        {
          name: "BTC",
          type: "line",
          data: b1,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          emphasis: { disabled: true },
          silent: true
        }
      ]
    };

    chart.setOption(option, true);
  }

  async function mountForRange(range) {
    const layer = page.querySelector(".nav-echarts-layer");
    if (!layer) return;

    layer.setAttribute("data-range", range);

    const rows = await loadWindow(range);
    const { t, b1, b2, b3 } = toSeries(rows);

    const chart = ensureChart(layer);
    setOption(chart, t, b1, b2, b3);
  }

  function getActiveRange() {
    const btn = page.querySelector(".nav-range-btn.is-active");
    return btn?.getAttribute("data-range") || page.querySelector(".entity-history-box.wide")?.getAttribute("data-default-range") || "1w";
  }

  async function init() {
    if (typeof echarts === "undefined") return;

    // initial
    try { await mountForRange(getActiveRange()); } catch (e) {}

    // re-mount after range switch
    page.addEventListener("click", async (ev) => {
      const b = ev.target?.closest?.(".nav-range-btn");
      if (!b) return;
      const r = b.getAttribute("data-range");
      if (!r) return;
      // allow the SVG switch script to run; then rebuild hover
      setTimeout(() => { mountForRange(r).catch(() => {}); }, 0);
    });
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
