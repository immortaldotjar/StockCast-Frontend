
import React, { useEffect, useRef, memo } from 'react';

function Story() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "displayMode": "regular",
          "feedMode": "all_symbols",
          "colorTheme": "dark",
          "isTransparent": true,
          "locale": "en",
          "width": "100%",
          "height": 610
          
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ zIndex:20,overflow: "hidden", borderRadius: "10px" , boxShadow: "0px 20px 207px 10px rgba(165, 39, 255, 0.48)", border: '2px solid rgba(165, 39, 255,1)', marginTop: "20px",marginBottom:"20px"}}>
      <div className="tradingview-widget-container__widget">

      </div>

    </div>
  );
}

export default memo(Story);
