import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const NiftyChart = () => {
    const [chartData, setChartData] = useState([]);
    const [dates, setDates] = useState([]);
    const [ma20, setMa20] = useState([]);
    const [ma50, setMa50] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/nifty');
                const json = await response.json();
                const history = json.chart365dPath ? await fetchYahooHistory() : [];

                if (history.length > 0) {
                    const closePrices = history.map(d => d.close);
                    const ma20Calc = movingAverage(closePrices, 20);
                    const ma50Calc = movingAverage(closePrices, 50);

                    setChartData(history);
                    setDates(history.map(d => d.date));
                    setMa20(ma20Calc);
                    setMa50(ma50Calc);
                }
            } catch (error) {
                console.error('Error loading chart data:', error);
            }
        };

        fetchData();
    }, []);

    const movingAverage = (data, windowSize) => {
        return data.map((_, idx, arr) =>
            idx >= windowSize - 1
                ? arr.slice(idx - windowSize + 1, idx + 1).reduce((a, b) => a + b, 0) / windowSize
                : null
        );
    };

    return (
        <div>
            <h2>Nifty 50 Last 30 Days Candlestick Chart with Moving Averages</h2>
            <Plot
                data={[
                    {
                        x: dates,
                        open: chartData.map(d => d.open),
                        high: chartData.map(d => d.high),
                        low: chartData.map(d => d.low),
                        close: chartData.map(d => d.close),
                        type: 'candlestick',
                        name: 'Price Candlestick',
                    },
                    {
                        x: dates,
                        y: ma20,
                        type: 'scatter',
                        mode: 'lines',
                        name: '20-Day MA',
                        line: { color: 'orange' },
                    },
                    {
                        x: dates,
                        y: ma50,
                        type: 'scatter',
                        mode: 'lines',
                        name: '50-Day MA',
                        line: { color: 'green' },
                    },
                ]}
                layout={{
                    title: 'Nifty 50 Last 30 Days Candlestick Chart with Moving Averages',
                    xaxis: { title: 'Date', rangeslider: { visible: false } },
                    yaxis: { title: 'Price (INR)' },
                    template: 'plotly_dark',
                }}
                style={{ width: '100%', height: '600px' }}
            />
        </div>
    );
};

export default NiftyChart;
