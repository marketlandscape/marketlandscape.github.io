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
      const res = await fetch("/data/prices.json", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();

      const btc = data?.prices?.BTC;
      const eth = data?.prices?.ETH;

      const btcEl = $("btcPrice");
      const ethEl = $("ethPrice");
      const updEl = $("marketUpdated");

      setText(btcEl, "$" + fmt0(btc));
      setText(ethEl, "$" + fmt0(eth));

      if (updEl){
        const t = data.updated_utc ? String(data.updated_utc) : "-- UTC";
        const src = data.source ? (" · " + data.source) : "";
        setText(updEl, "Updated " + t + src);
      }
    } catch (e){
      // keep placeholders silently
    }
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", updateMiniMarket);
  } else {
    updateMiniMarket();
  }
})();
