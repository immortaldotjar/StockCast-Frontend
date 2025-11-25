import React, { useEffect, useRef, memo } from 'react';

function TVW({ config, styles, source }) {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script")
      script.src = source
      script.type = "text/javascript"
      script.async = true
      script.innerHTML = JSON.stringify(config)
      container.current.appendChild(script)
    },
    []

  );

  return (
    <div id="tv_chart_container" className="tradingview-widget-container" ref={container} style={styles}>
      <div className="tradingview-widget-container__widget"></div>

    </div>
  );
}

export default memo(TVW);
