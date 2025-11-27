import TVW from '../../Widgets/TradingViewWidget.jsx'

const MarketOverview = () => {
  const config = {
    colorTheme: 'dark',
    dateRange: '1D',
    locale: 'en',
    largeChartUrl: '',
    isTransparent: true,
    showFloatingTooltip: true,
    plotLineColorGrowing: 'rgba(165, 39, 255, 1)',
    plotLineColorFalling: 'rgba(165, 39, 255, 0.48)',
    gridLineColor: 'rgba(240, 243, 250, 0)',
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(165, 39, 255, 0.48)',
    belowLineFillColorFalling: 'rgba(0, 68, 255, 0.33)',
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
    tabs: [
      {
        title: 'Indices',
        symbols: [
          { s: 'FOREXCOM:SPXUSD', d: 'S&P 500 Index' },
          { s: 'FOREXCOM:NSXUSD', d: 'US 100 Cash CFD' },
          { s: 'FOREXCOM:DJI', d: 'Dow Jones Industrial Average Index' },
          { s: 'INDEX:NKY', d: 'Japan 225' },
          { s: 'INDEX:DEU40', d: 'DAX Index' }
        ],
        originalTitle: 'Indices'
      },
      {
        title: 'Futures',
        symbols: [
          { s: 'BMFBOVESPA:ISP1!', d: 'S&P 500' },
          { s: 'BMFBOVESPA:EUR1!', d: 'Euro' },
          { s: 'CMCMARKETS:GOLD', d: 'Gold' },
          { s: 'PYTH:WTI3!', d: 'WTI Crude Oil' },
          { s: 'BMFBOVESPA:CCM1!', d: 'Corn' }
        ],
        originalTitle: 'Futures'
      },
      {
        title: 'Bonds',
        symbols: [
          { s: 'EUREX:FGBL1!', d: 'Euro Bund' },
          { s: 'EUREX:FBTP1!', d: 'Euro BTP' },
          { s: 'EUREX:FGBM1!', d: 'Euro BOBL' }
        ],
        originalTitle: 'Bonds'
      },
      {
        title: 'Forex',
        symbols: [
          { s: 'FX:EURUSD', d: 'EUR to USD' },
          { s: 'FX:GBPUSD', d: 'GBP to USD' },
          { s: 'FX:USDJPY', d: 'USD to JPY' },
          { s: 'FX:USDCHF', d: 'USD to CHF' },
          { s: 'FX:AUDUSD', d: 'AUD to USD' },
          { s: 'FX:USDCAD', d: 'USD to CAD' }
        ],
        originalTitle: 'Forex'
      }
    ],
    support_host: 'https://www.tradingview.com',
    backgroundColor: '#0f0f0f',
    width: '100%',
    height: '550',
    showSymbolLogo: true,
    showChart: true
  }

  const styles = {
    zIndex: 20,
    overflow: 'hidden',
    borderRadius: '10px',
    border: '1px solid rgba(39, 161, 255, 1)',
    minHeight: '80px',
    width: '100%'
  }

  return (
    <TVW
      config={config}
      styles={styles}
      source="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
    />
  )
}

export default MarketOverview
