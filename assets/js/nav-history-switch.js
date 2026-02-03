/* =====================================================
   NAV HISTORY switcher (single wide page)
   - swaps SVG source for 1w/2w/1m/3m/6m/1y
   - reconstructs x-labels from <desc id="nav-meta">{labels:[...]}</desc>
   ===================================================== */

(function () {
  const box = document.querySelector(".v2-history-page .entity-history-box.wide");
  if (!box) return;

  const img = box.querySelector("img.history-img");
  const host = box.querySelector(".nav-xlabels");
  const buttons = Array.from(document.querySelectorAll(".v2-history-page .nav-range-btn"));

  if (!img || !host || buttons.length === 0) return;

  const lang =
    document.querySelector(".v2-history-page")?.dataset?.lang ||
    document.documentElement.lang ||
    "en";

  function svgUrlFor(range) {
    return `/assets/img/charts/nav_${range}.svg`;
  }

  function setActive(range) {
    for (const b of buttons) {
      b.classList.toggle("is-active", b.dataset.range === range);
    }
  }

  function renderLabels(labels) {
    if (!Array.isArray(labels) || labels.length === 0) return;

    const formatted = labels.map((lab) => {
      // expects DD.MM (e.g. "18.01") from nav-meta
      return (typeof window.formatNavDate === "function")
        ? window.formatNavDate(String(lab), lang)
        : String(lab);
    });

    const current = Array.from(host.querySelectorAll("span")).map((s) => s.textContent);
    const same =
      current.length === formatted.length &&
      current.every((v, i) => v === formatted[i]);

    if (same) return;

    host.textContent = "";
    for (const text of formatted) {
      const s = document.createElement("span");
      s.textContent = text;
      host.appendChild(s);
    }
    host.style.justifyContent = (formatted.length === 1) ? "center" : "space-between";
  }

  async function loadMetaAndRender(range) {
    const url = svgUrlFor(range);
    const CACHE_KEY = `nav_labels_cache_${range}_v1`;

    // instant render from cache (avoids flicker)
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) renderLabels(JSON.parse(cached));
    } catch (e) {}

    // fetch latest meta, update only if changed
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) return;

      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, "image/svg+xml");
      const desc = doc.querySelector("desc#nav-meta");
      if (!desc) return;

      const meta = JSON.parse(desc.textContent.trim() || "{}");
      const labels = Array.isArray(meta.labels) ? meta.labels : [];
      if (!labels.length) return;

      renderLabels(labels);

      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(labels));
      } catch (e) {}
    } catch (e) {}
  }

  function setRange(range) {
    setActive(range);
    img.src = svgUrlFor(range);
    loadMetaAndRender(range);
  }

  // wire buttons
  for (const b of buttons) {
    b.addEventListener("click", () => {
      const r = b.dataset.range;
      if (!r) return;
      setRange(r);
    });
  }

  // init
  const initial = box.dataset.defaultRange || "1w";
  setRange(initial);
})();
