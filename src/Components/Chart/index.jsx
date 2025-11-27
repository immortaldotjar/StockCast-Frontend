import styles from './chart.module.css'

import MarketOverview from '../Charts/MarketOverview'
import Story from '../Charts/Story'
import Heading from '../../Widgets/NewsHeading'
import RCarousel from '../Carousel'
import BSEScreener from '../Charts/BSEScreener'
import CryptoScreener from '../Charts/CryptoScreener'
import AreaChart from '../Charts/AreaChart'
import StockMarket from '../Charts/StockMarket'

const Chart = () => {
  return (
    <div>
      <div className={styles.lastPriceContainer}></div>
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
      </div>
    </div>
  )
}

export default Chart
