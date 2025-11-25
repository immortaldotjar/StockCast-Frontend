import React, { useEffect, useRef, memo } from 'react';

function TVNews({ market, symbol, feedMode }) {
  const container = useRef();

useEffect(() => {
  const style = document.createElement('style');
  
  document.head.appendChild(style);

  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
  script.async = true;
  script.innerHTML = JSON.stringify({
    displayMode: "regular",
    feedMode: feedMode || 'symbol',
    symbol: symbol || '',
    market: market || '',
    colorTheme: "dark",
    isTransparent: false,
    locale: "en",
    width: "100%",
    height: 594,
    isTransparent:true
  });
  container.current.appendChild(script);

  return () => {
    container.current?.replaceChildren();
    document.head.removeChild(style);
  };
}, [market, symbol, feedMode]);


  return (
    <div className="tradingview-widget-container " ref={container} style={{ zIndex:2,minHeight:"750px",overflow: "hidden", borderRadius: "10px" ,}}>
      <div className="tradingview-widget-container__widget">
        
      </div>
    </div>
  );
}

export default memo(TVNews);
