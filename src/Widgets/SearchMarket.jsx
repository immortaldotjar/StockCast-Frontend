import styles from '../Widgets/css/searchMarket.module.css'
import Search2 from './Search2'
import TVNews from './TVNews'
import React, { useState } from 'react'

const SearchMarket = () => {
  const [symbol, setSymbol] = useState('AAPL')

  return (
    <div className={styles.searchMarketContainer}>
      <div className={styles.searchIPContainer}>
        <Search2 onSearch={setSymbol} placeholder="AAPL,TSLA,GOOGL..." />
      </div>
      <div className={styles.tvNewsContainer}>
        <TVNews symbol={`NASDAQ:${symbol}`} />
      </div>
    </div>
  )
}

export default SearchMarket
