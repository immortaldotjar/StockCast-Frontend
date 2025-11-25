import TVW from "../../Widgets/TradingViewWidget";
function BSEScreener() {

    const config =
    {
        market: "india",
        showToolbar: false,
        defaultColumn: "overview",
        defaultScreen: "most_capitalized",
        isTransparent: true,
        locale: "en",
        colorTheme: "dark",
        largeChartUrl: "",
        width: "100%",
        height: 550,
    }

    const styles = {
        zIndex:20,
        overflow: "hidden", 
        borderRadius: "10px",
        boxShadow: "0px 20px 207px 10px rgba(165, 39, 255, 0.48)",
        border: '2px solid rgba(165, 39, 255,1)',
        marginTop: "20px",
        marginBottom:"20px",
        
    };

    return (
        <div styles={{padding:"20px"}}>
            <TVW config={config} styles={styles} source={"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"}/>
        </div>
    );
}

export default BSEScreener;
