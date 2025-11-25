import React from 'react'
import TVNews from '../Widgets/TVNews'
import SearchMarket from '../Widgets/SearchMarket'
import styles from '../Widgets/css/searchMarket.module.css';
import Heading from '../Widgets/NewsHeading';
const News = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflowX: "hidden", backgroundColor: "black" }}>
            <div>
                <SearchMarket />
            </div>
            <div className={styles.searchMarketContainer2}>
                <Heading head="Stock Market" />
                <div className={styles.tvNewsContainer2} >
                    <TVNews feedMode="market" market="stock" />
                </div>
            </div>
            <div className={styles.searchMarketContainer2}>
                <Heading head="Cryptocurrencies" />

                <div className={styles.tvNewsContainer2}>
                    <TVNews feedMode="market" market="crypto" />
                </div>
            </div>
            <div className={styles.searchMarketContainer2}>
                <Heading head="Currencies" />
                <div className={styles.tvNewsContainer2}>

                    <TVNews feedMode="market" market="forex" />
                </div>
            </div>
            <div className={styles.searchMarketContainer2}>
                <Heading head="Indices" />
                <div className={styles.tvNewsContainer2}>
                    <TVNews feedMode="market" market="index" />
                </div>
            </div>
            <div className={styles.searchMarketContainer2}>
                <Heading head="Futures" />
                <div className={styles.tvNewsContainer2}>
                    <TVNews feedMode="market" market="futures" />
                </div>
            </div>


        </div>
    )
}

export default News