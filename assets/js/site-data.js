(function () {
  function $(id){ return document.getElementById(id); }

  function fmt0(n){
    const x = Number(n);
    if (!Number.isFinite(x)) return "--";
    return x.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  function setText(el, next){
    if (!el) return;
    if (el.textContent !== next) el.textContent = next;
  }

  const KEY = "mini_market_cache_v1";

  function applyCached(){
    try{
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return;
      const c = JSON.parse(raw);

      setText($("btcPrice"), "$" + fmt0(c?.btc));
      setText($("ethPrice"), "$" + fmt0(c?.eth));

      const t = c?.updated_utc ? String(c.updated_utc) : "-- UTC";
      const src = c?.source ? String(c.source) : "";
      const el = $("marketUpdated");
      const showSource = (el?.dataset?.showSource === "true");
      setText(el, "Updated " + t + (showSource && src ? (" · " + src) : ""));
    } catch(e){}
  }

  async function fetchAndUpdate(){
    try{
      const res = await fetch("/data/prices.json", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();

      const btc = data?.prices?.BTC;
      const eth = data?.prices?.ETH;
      const t = data?.updated_utc ? String(data.updated_utc) : "-- UTC";
      const src = data?.source ? String(data.source) : "";

      setText($("btcPrice"), "$" + fmt0(btc));
      setText($("ethPrice"), "$" + fmt0(eth));
      const el = $("marketUpdated");
      const showSource = (el?.dataset?.showSource === "true");
      setText(el, "Updated " + t + (showSource && src ? (" · " + src) : ""));

      try{
        sessionStorage.setItem(KEY, JSON.stringify({
          btc, eth, updated_utc: t, source: src
        }));
      } catch(e){}
    } catch(e){}
  }

  function run(){
    applyCached();
    fetchAndUpdate();
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
