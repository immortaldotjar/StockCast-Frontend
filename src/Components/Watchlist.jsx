import React from 'react'
import { MiniChart } from 'react-ts-tradingview-widgets'

const Watchlist = ({ symbol }) => {
  return (
    <div>
      <MiniChart
        colorTheme="dark"
        isTransparent={true}
        width={200}
        height={150}
        symbol={symbol}
        dateRange="12M"
        trendLineColor="rgba(165, 39, 255, 1)"
        underLineColor="rgba(165, 39, 255, 0.48)"
      />
    </div>
  )
}

export default Watchlist
