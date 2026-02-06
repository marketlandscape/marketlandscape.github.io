/* =========================================================
   NAV history — WIDE hover layer (ECharts)
   Transparent overlay on top of pre-rendered SVG
   ========================================================= */

(function () {
  const COL_BTC  = "#D8A538"; // gold
  const COL_ETH  = "#4A8DFF"; // blue
  const COL_ALTS = "#BEBEBE"; // grey

  const el = document.querySelector(".entity-history-box.wide");
  if (!el) return;

  const img = el.querySelector(".history-img");
  if (!img) return;

  const chartEl = document.createElement("div");
  chartEl.style.position = "absolute";
  chartEl.style.inset = "0";
  chartEl.style.pointerEvents = "auto";
  chartEl.style.zIndex = "2";
  el.appendChild(chartEl);

  const chart = echarts.init(chartEl, null, {
    renderer: "canvas",
    useDirtyRect: true
  });

  async function load(range) {
    const res = await fetch(`/assets/data/wide/nav_${range}.json`, {
      cache: "no-store"
    });
    if (!res.ok) return;

    const rows = await res.json();

    const xs = rows.map(r => r.t.slice(0, 10)); // date only
    const b1 = rows.map(r => r.box1);
    const b2 = rows.map(r => r.box2);
    const b3 = rows.map(r => r.box3);

    chart.setOption({
      animation: false,
      grid: { left: 0, right: 0, top: 0, bottom: 0 },

      xAxis: {
        type: "category",
        data: xs,
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }
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
          lineStyle: {
            color: "rgba(255,255,255,0.15)",
            width: 1
          }
        },
        backgroundColor: "rgba(20,20,20,0.92)",
        borderWidth: 0,
        textStyle: {
          color: "#fff",
          fontSize: 11
        },
        formatter(params) {
          const d = params[0].axisValue;
          const f = v => (v == null ? "–" : (v / 4).toFixed(1));

          let out = `${d}<br>`;
          for (const p of params) {
            out +=
              `<span style="color:${p.color}">●</span> ` +
              `${p.seriesName}: ${f(p.data)}<br>`;
          }
          return out;
        }
      },

      series: [
        {
          name: "ALTS",
          type: "line",
          data: b3,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { width: 0, opacity: 0 },
          itemStyle: { color: COL_ALTS },
          emphasis: {
            scale: false,
            itemStyle: { color: COL_ALTS }
          }
        },
        {
          name: "ETH",
          type: "line",
          data: b2,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { width: 0, opacity: 0 },
          itemStyle: { color: COL_ETH },
          emphasis: {
            scale: false,
            itemStyle: { color: COL_ETH }
          }
        },
        {
          name: "BTC",
          type: "line",
          data: b1,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { width: 0, opacity: 0 },
          itemStyle: { color: COL_BTC },
          emphasis: {
            scale: false,
            itemStyle: { color: COL_BTC }
          }
        }
      ]
    });
  }

  // initial
  const def = el.dataset.defaultRange || "1w";
  load(def);

  // range buttons
  document.querySelectorAll(".nav-range-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-range-btn")
        .forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const r = btn.dataset.range;
      img.src = `/assets/img/charts/wide/nav_${r}.svg`;
      load(r);
    });
  });

  window.addEventListener("resize", () => chart.resize());
})();
