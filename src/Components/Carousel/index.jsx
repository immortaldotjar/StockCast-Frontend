
import styles from "./carousel.module.css"
import Tickers from "../Charts/Tickers"
const RCarousel = () => {
    const StockTicker = [
        ['NASDAQ:TSLA', 'Tesla,Inc.'],
        ['NASDAQ:NVDA', 'NVIDIA Corp.'],
        ['NASDAQ:AAPL', 'Apple Inc.'],
        ['NASDAQ:AMZN', 'Amazon.com, Inc.'],
        ['NASDAQ:META', 'Meta Platform, Inc.'],
        ['NASDAQ:MSFT', 'Microsoft Corp.'],
        ['NASDAQ:AMD', 'Advanced Micro Devices, Inc.'],
        ['NASDAQ:NFLX', 'Netflix'],
        ['NASDAQ:INTC', 'Intel Corp.'],
        ['NASDAQ:GOOGL', 'Google'],
        ['NASDAQ:ADBE', 'Adobe']
      ];
    const CryptoTicker = [
        ['CRYPTO:BTCUSD', 'Bitcoin'],
        ['CRYPTO:AVAXUSD', 'Avalanche'],
        ['CRYPTO:TRXUSD', 'Tron'],
        ['CRYPTO:ADAUSD', 'Cardano'],
        ['CRYPTO:DOGEUSD', 'DOGE'],
        ['CRYPTO:BNBUSD', 'BNB'],
        ['CRYPTO:DOTUSD', 'Polkadot'],
        ['CRYPTO:SOLUSD', 'Solana'],
        ['CRYPTO:XRPUSD', 'XRP'],
        ['CRYPTO:ETHUSD', 'Ethereum Corp.'],
        ['CRYPTO:PEPEUSD', 'Pepe']
      ];
    const ForexTicker = [
        ['FX:EURUSD', 'Euro/US Dollar'],
        ['FX:USDJPY', 'USD/YEN'],
        ['OANDA:AUDUSD', 'AUD/USD'],
        ['OANDA:USDCAD', 'USD/CAD'],
        ['OANDA:USDCHF', 'USD/CHF'],
        ['OANDA:USDJPY', 'USD/JPY'],
        ['OANDA:EURUSD', 'EUR/USD'],
        ['OANDA:GBPUSD', 'GBP/USD'],
        
        
      ];
    return (
        <div className={styles.carousel}>
            <Tickers ticker={StockTicker}/>
            <Tickers ticker={CryptoTicker}/>
            <Tickers ticker={ForexTicker}/>

        </div>
    );
};

export default RCarousel;
