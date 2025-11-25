import React, { useEffect, useState } from "react";

const NiftyStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/nifty")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        const stocks = data.data;
        setStocks(stocks);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching NIFTY data:", err);
        setError("Failed to load stock data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ color: "white" }}>Loading NIFTY 50 data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "1rem", color: "white" }}>
      <h2>NIFTY 50 Stocks</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "white" }}>
        <thead>
          <tr>
            <th style={thStyle}>Symbol</th>
            <th style={thStyle}>Open</th>
            <th style={thStyle}>High</th>
            <th style={thStyle}>Low</th>
            <th style={thStyle}>Last</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td style={tdStyle}>{stock.symbol}</td>
              <td style={tdStyle}>{stock.open}</td>
              <td style={tdStyle}>{stock.dayHigh}</td>
              <td style={tdStyle}>{stock.dayLow}</td>
              <td style={tdStyle}>{stock.lastPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid white",
  padding: "0.5rem",
  backgroundColor: "#222",
};

const tdStyle = {
  border: "1px solid white",
  padding: "0.5rem",
  textAlign: "center",
};

export default NiftyStocks;
