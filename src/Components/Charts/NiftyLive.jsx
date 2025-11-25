import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, AreaSeries } from 'lightweight-charts';

const NiftyLive = () => {
  const chartContainerRef = useRef();
  const chartRef = useRef();
  const seriesRef = useRef();
  const [chartData, setChartData] = useState([]);
  const [lastPrice, setLastPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(0);
  const [isMarketOpen, setIsMarketOpen] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  const API_URL = 'http://localhost:5000/api/nifty';

  const checkMarketHours = () => {
    const now = new Date();
    const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const currentTime = hours * 60 + minutes;
    
    const marketOpen = 9 * 60; 
    const marketClose = 15 * 60 + 15; 
    
    return currentTime >= marketOpen && currentTime <= marketClose;
  };

  const fetchNiftyData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data');
      
      const result = await response.json();
      const niftyData = result.data.find(item => item.symbol === 'NIFTY 50');
      
      if (niftyData) {
        const timestamp = new Date(niftyData.lastUpdateTime.replace(/(\d{2})-(\w{3})-(\d{4})/, '$2 $1, $3'));
        const unixTime = Math.floor(timestamp.getTime() / 1000);
        
        const newDataPoint = {
          time: unixTime,
          value: niftyData.lastPrice
        };

        setChartData(prevData => {
          const exists = prevData.some(point => point.time === unixTime);
          if (exists) return prevData;

          const updatedData = [...prevData, newDataPoint].sort((a, b) => a.time - b.time);
          return updatedData;
        });

        setLastPrice(niftyData.lastPrice);
        setPriceChange(niftyData.change);
        setLastUpdate(niftyData.lastUpdateTime);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching NIFTY data:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#1e1e1e' },
        textColor: '#d1d5db',
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      grid: {
        vertLines: { color: '#2a2a2a' },
        horzLines: { color: '#2a2a2a' },
      },
      rightPriceScale: {
        borderColor: '#2a2a2a',
      },
      timeScale: {
        borderColor: '#2a2a2a',
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const series = chart.addSeries(AreaSeries, {
      lineColor: '#2962FF',
      topColor: 'rgba(41, 98, 255, 0.4)',
      bottomColor: 'rgba(41, 98, 255, 0.0)',
      lineWidth: 2,
    });

    chartRef.current = chart;
    seriesRef.current = series;

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (seriesRef.current && chartData.length > 0) {
      seriesRef.current.setData(chartData);
      chartRef.current.timeScale().fitContent();
    }
  }, [chartData]);

  useEffect(() => {
    fetchNiftyData();
    setIsMarketOpen(checkMarketHours());

    const interval = setInterval(() => {
      const marketOpen = checkMarketHours();
      setIsMarketOpen(marketOpen);
      
      if (marketOpen) {
        fetchNiftyData();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-white">NIFTY 50</h1>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            isMarketOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {isMarketOpen ? '● Market Open' : '● Market Closed'}
          </div>
        </div>
        
        {lastPrice && (
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold text-white">
              {lastPrice.toFixed(2)}
            </span>
            <span className={`text-xl font-semibold ${
              priceChange >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {priceChange >= 0 ? '▲' : '▼'} {Math.abs(priceChange).toFixed(2)}
            </span>
          </div>
        )}
        
        {lastUpdate && (
          <p className="text-sm text-gray-400 mt-1">
            Last updated: {lastUpdate}
          </p>
        )}
        
        {error && (
          <div className="mt-2 p-3 bg-red-900/50 border border-red-500 rounded text-red-200 text-sm">
            Error: {error}. Make sure your backend server is running on http://localhost:5000
          </div>
        )}
      </div>

      <div 
        ref={chartContainerRef} 
        className="w-full bg-gray-800 rounded-lg overflow-hidden"
        style={{ minHeight: '400px' }}
      />

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="p-3 bg-gray-800 rounded">
          <p className="text-gray-400">Data Points</p>
          <p className="text-xl font-bold text-white">{chartData.length}</p>
        </div>
        <div className="p-3 bg-gray-800 rounded">
          <p className="text-gray-400">Update Interval</p>
          <p className="text-xl font-bold text-white">5 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default NiftyLive;