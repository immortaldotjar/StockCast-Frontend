import styles from './chart.module.css'

import MarketOverview from '../Charts/MarketOverview'
import Story from '../Charts/Story'
import Heading from '../../Widgets/NewsHeading'
import RCarousel from '../Carousel'
import BSEScreener from '../Charts/BSEScreener'
import CryptoScreener from '../Charts/CryptoScreener'
import NiftyLive from '../Charts/NiftyLive'
import NiftyChart from '../Charts/NiftyChart'
import AreaChart from '../Charts/AreaChart'
import Applechart from '../Charts/Applechart'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import StockMarket from '../Charts/StockMarket'

const Chart = () => {

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
    symbol: "NASDAQ:AAPL",
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
  return (
    <div>
      <div className={styles.lastPriceContainer}>

      </div>
      <div className={styles.chartContainer}>
        <AreaChart />
        <Heading head="Market Overview" />
        <div className={styles.market}>
          <MarketOverview />
          <StockMarket />
        </div>
        <Heading head="News" />
        <Story />
        <RCarousel />
        <Heading head="Indian Market" />
        <BSEScreener />
        <Heading head="Cryptocurrencies" />
        <CryptoScreener />
        {/* <NiftyLive/> */}
        {/* <NiftyChart/> */}
      </div>
    </div>
  )
}

export default Chart 