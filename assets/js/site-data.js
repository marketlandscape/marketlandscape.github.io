(function () {
  function $(id){ return document.getElementById(id); }

  function fmt0(n){
    if (n === null || n === undefined) return "--";
    const x = Number(n);
    if (!Number.isFinite(x)) return "--";
    return x.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  function setText(el, next){
    if (!el) return;
    if (el.textContent !== next) el.textContent = next;
  }

  async function updateMiniMarket(){
    try{
      const res = await fetch("/data/indexes.json", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();

      const btcEl = $("btcPrice");
      const ethEl = $("ethPrice");
      const updEl = $("marketUpdated");

      setText(btcEl, "$" + fmt0(data.btc));
      setText(ethEl, "$" + fmt0(data.eth));

      if (updEl){
        if (data.updated_utc){
          const t = String(data.updated_utc);
          const next = t.includes("UTC") ? ("Updated " + t) : ("Updated " + t + " UTC");
          setText(updEl, next);
        } else {
          setText(updEl, "Updated -- UTC");
        }
      }
    } catch (e){
      // silently ignore
    }
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", updateMiniMarket);
  } else {
    updateMiniMarket();
  }
})();
