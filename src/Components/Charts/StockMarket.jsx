import React from 'react'
import TVW from '../../Widgets/TradingViewWidget.jsx';
const StockMarket = () => {
    const config = {
        "exchange": "BSE",
        "colorTheme": "dark",
        "dateRange": "1D",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "showFloatingTooltip": true,
        "plotLineColorGrowing": "rgba(165, 39, 255, 1)",
        "plotLineColorFalling": "rgba(165, 39, 255, 0.48)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "#DBDBDB",
        "belowLineFillColorGrowing": "rgba(165, 39, 255, 0.48)",
        "belowLineFillColorFalling": "rgba(0, 68, 255, 0.33)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "width": "100%",
        "height": "550"
    }

    const styles = {
        zIndex: 20,
        overflow: "hidden",
        borderRadius: "10px",
        border: '1px solid rgba(39, 161, 255, 1)',
        minHeight: "80px",
        width: "100%"
    }
    return (
        <>
            <TVW config={config} styles={styles} source="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js" />
        </>
    )
}

export default StockMarket