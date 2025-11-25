import TVW from "../../Widgets/TradingViewWidget";
import { MiniChart } from 'react-ts-tradingview-widgets';
import Applechart from "./Applechart";
import { color } from "d3";

function AreaChart() {
  const symbol = ["NASDAQ:AAPL", "NASDAQ:NVDA", "NASDAQ:MSFT", "NASDAQ:GOOGL", "NASDAQ:META"];
  const randSymbol = symbol[Math.floor(Math.random() * symbol.length)];
  const config1 = {
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: true,
    hide_legend: true,
    hide_volume: true,
    hotlist: false,
    interval: "H",
    locale: "en",
    save_image: false,
    style: "3",
    symbol: randSymbol,
    theme: "dark",
    timezone: "Etc/UTC",
    backgroundColor: "#0F0F0F",
    gridColor: "#0F0F0F",
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    autosize: false,
    height: 500,
    width: "100%",
  }

  const config2 = {
    symbol: randSymbol,
    colorTheme: "dark",
    isTransparent: true,
    locale: "en",
    width: "100%",
    chartOnly: true,

  }

  const styles1 = {
    parent: {
      fontSize: "0px", 
      height: "0px",
      overflow: "hidden",
    },
    link: {
      textDecoration: "none",
    },
    span: {
      color: "transparent", 
    },
    
  };
  const styles2 = {
    zIndex: 20,
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "10px",

    minHeight: "80px",
    width: "100%"
  }
  const styles3 = {
    zIndex: 20,
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 20px 207px 10px rgba(165, 39, 255, 0.48)",
    border: '2px solid rgba(165, 39, 255,1)',
    marginBottom: "20px",
    minHeight: "80px",
    width: "100%",
    padding: "10px", 

  }

  return (
    <>
      <div style={styles3}>
        <TVW
          config={config2}
          styles={styles2}
          source="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
        />

        <MiniChart symbol={randSymbol}
          colorTheme="dark"
          isTransparent={true}
          locale="en"
          width="100%"
          chartOnly={true}
          copyrightStyles={styles1}
          interval="60"
          dateRange="1D"
          height={400}
          trendLineColor="rgba(165, 39, 255, 1)"
          underLineColor="rgba(165, 39, 255, 0.48)"
        />
      </div >
    </>
  );
}

export default AreaChart
