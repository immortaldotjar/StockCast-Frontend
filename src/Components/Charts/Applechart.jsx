import React, { useEffect, useRef, memo } from 'react'

function AppleChart({ styles }) {
  const container = useRef()

  useEffect(() => {
    if (!container.current) return

    container.current.innerHTML = `
      <div class="tradingview-widget-container__widget" style="height: calc(100% - 32px); width: 100%;"></div>
    `

    const isValidColor = c =>
      typeof c === 'string' &&
      (/^#([0-9A-F]{3}){1,2}$/i.test(c) ||
        /^rgba?\((\d{1,3},\s?){2,3}\d{1,3}(,\s?\d?\.?\d+)?\)$/i.test(c))

    const config = {
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: 'D',
      locale: 'en',
      save_image: true,
      style: '1',
      symbol: 'NASDAQ:AAPL',
      theme: 'dark',
      timezone: 'Etc/UTC',
      backgroundColor: '#0F0F0F',
      gridColor: 'rgba(242, 242, 242, 0.06)',
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true
    }

    if (!isValidColor(config.backgroundColor)) {
      config.backgroundColor = '#0F0F0F'
    }
    if (!isValidColor(config.gridColor)) {
      config.gridColor = 'rgba(242, 242, 242, 0.06)'
    }

    const safeConfig = JSON.parse(JSON.stringify(config))
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify(safeConfig)

    const injectScript = () => {
      try {
        container.current.appendChild(script)
      } catch (err) {
        console.warn('TradingView widget injection failed:', err)
      }
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(injectScript)
    } else {
      setTimeout(injectScript, 100)
    }

    return () => {
      if (container.current) container.current.innerHTML = ''
    }
  }, [])

  return (
    <div className="tradingview-widget-container" ref={container} style={styles}></div>
  )
}

export default memo(AppleChart)
