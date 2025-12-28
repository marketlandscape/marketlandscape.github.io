(async function(){
  function $(id){ return document.getElementById(id); }

  // Format numbers like 98,234 (no decimals)
  function fmt0(n){
    if (n === null || n === undefined) return "--";
    const x = Number(n);
    if (!Number.isFinite(x)) return "--";
    return x.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  try{
    const res = await fetch("/data/indexes.json", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();

    const btcEl = $("btcPrice");
    const ethEl = $("ethPrice");
    const updEl = $("marketUpdated");

    if (btcEl) btcEl.textContent = "$" + fmt0(data.btc);
    if (ethEl) ethEl.textContent = "$" + fmt0(data.eth);

    // updated_utc can be "12:00" or full string
    if (updEl){
      if (data.updated_utc){
        const t = String(data.updated_utc);
        updEl.textContent = t.includes("UTC") ? ("Updated " + t) : ("Updated " + t + " UTC");
      } else {
        updEl.textContent = "Updated -- UTC";
      }
    }
  } catch (e){
    // silently ignore to avoid breaking pages
  }
})();
