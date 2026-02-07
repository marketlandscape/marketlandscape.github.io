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
  const COL_BTC  = "#f5841e";   // gold
  const COL_ETH = "rgb(74,141,255)";   // blue
  const COL_ALTS = "rgb(190,190,190)"; // grey

  // Same key used by the SVG/button switcher (nav-history-wide-switch.js)
  const STORAGE_KEY = "nav_history_range_v1";

  // Theme-aware tooltip styling (light vs dark)
  const mql = (typeof window !== "undefined" && window.matchMedia)
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function isDark() {
    return !!(mql && mql.matches);
  }

  function tooltipBg() {
    return isDark() ? "#2c2c2c" : "#ffffff";
  }

  function tooltipBorderColor() {
    return isDark() ? "rgba(255,255,255,0.08)" : "#e5e5e5";
  }

  function tooltipTextColor() {
    return isDark() ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.85)";
  }

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

  function parseUtcMs(ts) {
    const s = String(ts || "");
    const ms = Date.parse(s);
    return Number.isFinite(ms) ? ms : null;
  }

  function utcDayKey(ms) {
    const d = new Date(ms);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const da = String(d.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${da}`;
  }

  function downsampleDailyLastUtc(sortedRows) {
    // rows must be sorted by ms ascending
    const lastByDay = new Map();
    for (const r of sortedRows) {
      const key = utcDayKey(r.ms);
      lastByDay.set(key, r); // overwrites => "daily last"
    }
    // preserve chronological day order
    const days = Array.from(lastByDay.keys()).sort();
    return days.map(d => lastByDay.get(d));
  }

  function fillLinearTime(msArr, vArr) {
    // Interpolate null runs between two known values (time-weighted).
    const out = vArr.slice();
    const n = out.length;
    let i = 0;
    while (i < n) {
      if (out[i] != null && Number.isFinite(out[i])) { i++; continue; }

      const start = i;
      while (i < n && (out[i] == null || !Number.isFinite(out[i]))) i++;
      const end = i - 1;

      const left = start - 1;
      const right = i;

      if (left >= 0 && right < n && out[left] != null && out[right] != null &&
          Number.isFinite(out[left]) && Number.isFinite(out[right])) {
        const t0 = msArr[left];
        const t1 = msArr[right];
        const v0 = out[left];
        const v1 = out[right];
        const dt = t1 - t0;

        if (Number.isFinite(dt) && dt > 0) {
          for (let k = start; k <= end; k++) {
            const tk = msArr[k];
            const f = (tk - t0) / dt;
            out[k] = v0 + (v1 - v0) * f;
          }
        }
      }
      // leading/trailing null runs stay null
    }
    return out;
  }

  function toSeries(rows) {
    // Parse → sort → daily-last (UTC) → clamp → interpolate (time) → [ms,val] pairs
    const parsed = [];
    for (const r of rows) {
      const ms = parseUtcMs(r.t);
      if (ms == null) continue;
      parsed.push({
        ms,
        b1: (r.box1 == null ? null : clamp(Number(r.box1), 0, 100)),
        b2: (r.box2 == null ? null : clamp(Number(r.box2), 0, 100)),
        b3: (r.box3 == null ? null : clamp(Number(r.box3), 0, 100))
      });
    }

    parsed.sort((a, b) => a.ms - b.ms);

    const daily = downsampleDailyLastUtc(parsed);

    const msArr = daily.map(r => r.ms);
    const b1 = fillLinearTime(msArr, daily.map(r => r.b1));
    const b2 = fillLinearTime(msArr, daily.map(r => r.b2));
    const b3 = fillLinearTime(msArr, daily.map(r => r.b3));

    const s1 = msArr.map((ms, i) => [ms, b1[i] == null ? null : b1[i]]);
    const s2 = msArr.map((ms, i) => [ms, b2[i] == null ? null : b2[i]]);
    const s3 = msArr.map((ms, i) => [ms, b3[i] == null ? null : b3[i]]);

    return { s1, s2, s3 };
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

  function dateOnlyFromMs(ms) {
    const d = new Date(ms);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const da = String(d.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${da}`;
  }

  function nav100_to_25(v100) {
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

  function setOption(chart, s1, s2, s3) {
    const option = {
      animation: false,
      backgroundColor: "rgba(0,0,0,0)",

      grid: GRID,

      xAxis: {
        type: "time",
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
          lineStyle: { color: "rgba(255,255,255,0.25)", width: 1 },

          /* =================================================
             CROSSHAIR KNOB
             - Match tooltip dot style: solid fill, no ring
             - Neutral color (same as tooltip text vibe)
             ================================================= */
          handle: {
            show: true,
            size: 26,
            // solid filled dot, no outline (like tooltip dots)
            color: "rgba(255,255,255,0.40)",
            borderColor: "rgba(255,255,255,0.40)",
            borderWidth: 1
          }
        },

        backgroundColor: tooltipBg(),

        borderWidth: isDark() ? 0 : 1,
        borderColor: isDark() ? "transparent" : "#e5e5e5",

        textStyle: { color: tooltipTextColor(), fontSize: 14 },

        extraCssText: "border-radius:10px; padding:10px 12px;",
        formatter: function (params) {
          const arr = Array.isArray(params) ? params : [];
          const first = arr[0];
          const ms = first?.value?.[0];
          const ts = Number.isFinite(ms) ? dateOnlyFromMs(ms) : "–";

          const byName = new Map();
          for (const p of arr) byName.set(p?.seriesName, p);

          const pBTC = byName.get("BTC");
          const pETH = byName.get("ETH");
          const pALT = byName.get("ALTS");

          const v1 = nav100_to_25(pBTC?.value?.[1]);
          const v2 = nav100_to_25(pETH?.value?.[1]);
          const v3 = nav100_to_25(pALT?.value?.[1]);

          const fmt = (v) => (v == null ? "–" : v.toFixed(1));

          return (
            `<div style="line-height:1.25;">` +
              `<div style="opacity:.85; margin-bottom:8px;">${ts}</div>` +
              `<div>${dot(COL_BTC)}BTC: ${fmt(v1)}</div>` +
              `<div>${dot(COL_ETH)}ETH: ${fmt(v2)}</div>` +
              `<div>${dot(COL_ALTS)}L-ALTS: ${fmt(v3)}</div>` +
            `</div>`
          );
        }
      },

      // Invisible lines; tooltip + crosshair only
      series: [
        {
          name: "ALTS",
          type: "line",
          data: s3,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          silent: true,
          itemStyle: { color: COL_ALTS },
          emphasis: { itemStyle: { color: COL_ALTS } }
        },
        {
          name: "ETH",
          type: "line",
          data: s2,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          silent: true,
          itemStyle: { color: COL_ETH },
          emphasis: { itemStyle: { color: COL_ETH } }
        },
        {
          name: "BTC",
          type: "line",
          data: s1,
          showSymbol: false,
          lineStyle: { width: 0, opacity: 0 },
          silent: true,
          itemStyle: { color: COL_BTC },
          emphasis: { itemStyle: { color: COL_BTC } }
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
    const { s1, s2, s3 } = toSeries(rows);

    const chart = ensureChart(layer);
    setOption(chart, s1, s2, s3);
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

  // Re-apply tooltip theme if OS theme changes while page is open
  if (mql && typeof mql.addEventListener === "function") {
    mql.addEventListener("change", () => {
      const layer = page.querySelector(".nav-echarts-layer");
      const chart = layer && layer.__echarts;
      if (chart) chart.setOption({ tooltip: {
        backgroundColor: tooltipBg(),
        borderWidth: 1,
        borderColor: tooltipBorderColor(),
        textStyle: { color: tooltipTextColor(), fontSize: 14 }
      }});
    });
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
