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
  const GRID = {
    left: "3%",
    right: "3%",
    top: "4%",
    bottom: "10%",
    containLabel: false
  };

  // Match private renderer colors (render_nav_svgs_wide.py)
  const COL_BTC = "rgb(216,165,56)";   // gold
  const COL_ETH = "rgb(74,141,255)";   // blue
  const COL_ALTS = "rgb(190,190,190)"; // grey

  // Same key used by the SVG/button switcher (nav-history-wide-switch.js)
  const STORAGE_KEY = "nav_history_range_v1";

  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  function getSavedRange() {
    try {
      const r = localStorage.getItem(STORAGE_KEY);
      return r && typeof r === "string" ? r : null;
    } catch (e) {
      return null;
    }
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

    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(layerEl);
    layerEl.__echarts_ro = ro;

    return chart;
  }

  function dateOnly(ts) {
    // If ts is ISO: "YYYY-MM-DDTHH:MM:SSZ" -> "YYYY-MM-DD"
    // If ts already is "YYYY-MM-DD", this keeps it.
    const s = String(ts || "");
    return (s.length >= 10 && s[4] === "-" && s[7] === "-") ? s.slice(0, 10) : s;
  }

  function nav100_to_25(v100) {
    // 0..100 -> 1..25 continuous
    // 1 + (v/100)*24
    if (v100 == null || !Number.isFinite(v100)) return null;
    return 1 + (clamp(v100, 0, 100) / 100) * 24;
  }

  function dot(color) {
    // filled dot (no white center)
    return (
      `<span style="display:inline-block;width:9px;height:9px;border-radius:99px;` +
      `background:${color};vertical-align:middle;margin-right:6px;"></span>`
    );
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
        textStyle: { color: "rgba(255,255,255,0.92)", fontSize: 14 },
        extraCssText: "border-radius:10px; padding:10px 12px;",
        formatter: function (params) {
          const idx = params?.[0]?.dataIndex ?? 0;

          const ts = dateOnly(t[idx]);
          const v1 = nav100_to_25(b1[idx]);
          const v2 = nav100_to_25(b2[idx]);
          const v3 = nav100_to_25(b3[idx]);

          const fmt = (v) => (v == null ? "–" : v.toFixed(1));

          return (
            `<div style="line-height:1.25;">` +
              `<div style="opacity:.85; margin-bottom:8px;">${ts}</div>` +
              `<div>${dot(COL_BTC)}BTC: ${fmt(v1)}</div>` +
              `<div>${dot(COL_ETH)}ETH: ${fmt(v2)}</div>` +
              `<div>${dot(COL_ALTS)}ALTS: ${fmt(v3)}</div>` +
            `</div>`
          );
        }
      },

      // Invisible lines; BUT keep per-series hover dots (emphasis symbols) colored.
      series: [
        {
          name: "ALTS",
          type: "line",
          data: b3,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          silent: true,

          // --- colored intersection dot on crosshair ---
          emphasis: {
            scale: false,
            showSymbol: true,
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
             color: COL_ALTS,
             borderColor: COL_ALTS,
             borderWidth: 1
            }
          }
        },
        {
          name: "ETH",
          type: "line",
          data: b2,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          silent: true,

          emphasis: {
            scale: false,
            showSymbol: true,
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
             color: COL_ETH,
             borderColor: COL_ETH,
             borderWidth: 1
            }
          }
        },
        {
          name: "BTC",
          type: "line",
          data: b1,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          silent: true,

          emphasis: {
            scale: false,
            showSymbol: true,
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
             color: COL_BTC,              // fill
             borderColor: COL_BTC,        // edge = same color
             borderWidth: 1
            }
          }
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
    return (
      btn?.getAttribute("data-range") ||
      page.querySelector(".entity-history-box.wide")?.getAttribute("data-default-range") ||
      "1w"
    );
  }

  async function init() {
    if (typeof echarts === "undefined") return;

    const initial = getSavedRange() || getActiveRange();

    try { await mountForRange(initial); } catch (e) {}

    page.addEventListener("click", async (ev) => {
      const b = ev.target?.closest?.(".nav-range-btn");
      if (!b) return;
      const r = b.getAttribute("data-range");
      if (!r) return;

      setTimeout(() => { mountForRange(r).catch(() => {}); }, 0);
    });
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
