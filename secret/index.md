---
layout: none
permalink: /secret/
---

<div style="max-width:900px;margin:40px auto;font-family:system-ui,-apple-system,sans-serif;color:#d9d9d9;">
  <div style="font-size:20px;font-weight:600;margin-bottom:10px;">Secret Dashboard</div>
  <div style="opacity:0.6;margin-bottom:22px;">Ranges (diapasons) + current risk and position inside each range.</div>

  <div style="border:1px solid rgba(217,217,217,0.12);border-radius:12px;overflow:hidden;">
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr style="background:rgba(255,255,255,0.04);text-align:left;">
          <th style="padding:12px 14px;font-weight:600;">Box</th>
          <th style="padding:12px 14px;font-weight:600;">Proxy</th>
          <th style="padding:12px 14px;font-weight:600;">Risk</th>
          <th style="padding:12px 14px;font-weight:600;">Diapason</th>
          <th style="padding:12px 14px;font-weight:600;">Position</th>
          <th style="padding:12px 14px;font-weight:600;">Updated</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-top:1px solid rgba(217,217,217,0.08);">
          <td style="padding:12px 14px;">box1</td>
          <td style="padding:12px 14px;">BTC</td>
          <td style="padding:12px 14px;" id="r1">–</td>
          <td style="padding:12px 14px;" id="d1">20–55</td>
          <td style="padding:12px 14px;" id="p1">–</td>
          <td style="padding:12px 14px;opacity:0.7;" id="u1">–</td>
        </tr>

        <tr style="border-top:1px solid rgba(217,217,217,0.08);">
          <td style="padding:12px 14px;">box2</td>
          <td style="padding:12px 14px;">ETH</td>
          <td style="padding:12px 14px;" id="r2">–</td>
          <td style="padding:12px 14px;" id="d2">25–75</td>
          <td style="padding:12px 14px;" id="p2">–</td>
          <td style="padding:12px 14px;opacity:0.7;" id="u2">–</td>
        </tr>

        <tr style="border-top:1px solid rgba(217,217,217,0.08);">
          <td style="padding:12px 14px;">box3</td>
          <td style="padding:12px 14px;">Large-caps (SOL proxy)</td>
          <td style="padding:12px 14px;" id="r3">–</td>
          <td style="padding:12px 14px;" id="d3">35–85</td>
          <td style="padding:12px 14px;" id="p3">–</td>
          <td style="padding:12px 14px;opacity:0.7;" id="u3">–</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top:16px;opacity:0.55;font-size:13px;" id="meta">Loading…</div>
</div>

<script>
(function () {
  const RANGES = {
    1: { min: 20, max: 55, riskKey: "box1_risk", updatedKey: "box1_risk_updated_utc" },
    2: { min: 25, max: 75, riskKey: "box2_risk", updatedKey: "box2_risk_updated_utc" },
    3: { min: 35, max: 85, riskKey: "box3_risk", updatedKey: "box3_risk_updated_utc" },
  };

  function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

  function setText(id, txt){
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  }

  function fmtIntPct(x){
    const n = Number(x);
    if (!Number.isFinite(n)) return "–";
    return String(Math.round(n)) + "%";
  }

  function positionPct(risk, min, max){
    const n = Number(risk);
    if (!Number.isFinite(n)) return "–";
    if (max <= min) return "–";
    const p = ((n - min) / (max - min)) * 100;
    return String(Math.round(clamp(p, 0, 100))) + "% of range";
  }

  async function load(){
    try{
      const res = await fetch("/data/indexes.json", { cache: "no-store" });
      if (!res.ok) throw new Error("fetch failed");
      const data = await res.json();

      for (const k of [1,2,3]) {
        const cfg = RANGES[k];
        const r = data[cfg.riskKey];
        const upd = data[cfg.updatedKey];

        setText("r"+k, fmtIntPct(r));
        setText("p"+k, positionPct(r, cfg.min, cfg.max));
        setText("u"+k, upd ? String(upd) : "–");
      }

      setText("meta", "OK — /data/indexes.json loaded");
    } catch(e){
      setText("meta", "Failed to load /data/indexes.json");
    }
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", load);
  } else {
    load();
  }
})();
</script>
