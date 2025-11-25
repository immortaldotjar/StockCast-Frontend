
import React, { useEffect, useRef, memo } from 'react';

function Tickers({ ticker }) {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      const symbols = Array.isArray(ticker)
        ? ticker.map(item => {
        if (Array.isArray(item)) {
          const [proName, title] = item;
          return { proName, title };
        }
        if (typeof item === 'string') {
          return { proName: item, title: item };
        }
        if (item && typeof item === 'object') {
          return { proName: item.proName || item.value || '', title: item.title || item.proName || '' };
        }
        return null;
          }).filter(Boolean)
        : [];
      const widget = {
        symbols,
        colorTheme: "dark",
        locale: "en",
        largeChartUrl: "",
        isTransparent: true,
        showSymbolLogo: true,
        displayMode: "Regular"
      };
      script.innerHTML = JSON.stringify(widget);
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ zIndex: 20, overflow: "hidden", borderRadius: "10px", fontFamily: "Nunito" }}>
      <div className="tradingview-widget-container__widget" ></div>
    </div>
  );
}

export default memo(Tickers)