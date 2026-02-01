/* =========================================================
 * assets/js/i18n-date.js
 * Canonical date formatter for chart labels (no year)
 *
 * Input (internal): DD.MM   e.g. "12.01" = 12 Jan
 * Output:
 *   EN → "12 Jan"
 *   JA → "1月12日"
 *   RU → "12.01"
 * ========================================================= */

(function (global) {
  "use strict";

  const MONTHS_EN = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  function parseDDMM(ddmm) {
    if (typeof ddmm !== "string") return null;
    const m = ddmm.match(/^(\d{2})\.(\d{2})$/);
    if (!m) return null;

    const day = parseInt(m[1], 10);
    const month = parseInt(m[2], 10);

    if (month < 1 || month > 12 || day < 1 || day > 31) return null;
    return { month, day };
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function normalizeLang(lang) {
    if (!lang) return "en";
    const s = String(lang).toLowerCase();
    // "en-us" -> "en"
    const two = s.slice(0, 2);
    if (two === "ja") return "ja";
    if (two === "ru") return "ru";
    return "en";
  }

  function formatNavDate(ddmm, lang) {
    const d = parseDDMM(ddmm);
    if (!d) return String(ddmm); // fail-safe

    const L = normalizeLang(lang);

    if (L === "ja") return `${d.month}月${d.day}日`;
    if (L === "ru") return `${pad2(d.day)}.${pad2(d.month)}`;
    return `${d.day} ${MONTHS_EN[d.month - 1]}`;
  }

  global.formatNavDate = formatNavDate;
  global._mlNormalizeLang = normalizeLang; // optional helper
})(window);
