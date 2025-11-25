import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card2 from '../Components/Card2';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Search2 from '../Widgets/Search2';
import loading from '../assets/loading2.gif'
import { useNavigate } from 'react-router-dom';
const Stock = () => {
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrPage] = useState(1);
  const navigate = useNavigate()
  

  useEffect(() => {
    axios.get('http://localhost:5000/api/nifty')
      .then(res => {
        setStock(res.data.data);
      })
      .catch(err =>
        console.error('Error :', err));
  }, []);


  const handleSearch = (term) => {
    setSearch(term);
    setCurrPage(1);
  };

  const Stocks = stock.filter(item =>
    item.meta?.companyName?.toUpperCase().includes(search.toUpperCase())
  );

  const pages = 10;
  const indexLast = currentPage * pages;
  const indexFirst = indexLast - pages;
  const currStocks = Stocks.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(Stocks.length / pages);

  const handlePageChange = (e, val) => {
    setCurrPage(val);
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <div style={{ padding: '20px', display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Search2 onSearch={handleSearch} placeholder="Tata, Mahindra, Bajaj....." />
        <Stack spacing={3} alignItems="center" marginTop={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            variant='outlined'
            sx={{
              '& .MuiPaginationItem-root': { color: 'white' },
              '& .Mui-selected': { color: 'white', backgroundColor: 'none' },
            }}
          />
        </Stack>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'stretch',
          marginTop: '20px'
        }}>

          {currStocks.length > 0 ? (
            currStocks.map((stock) => (
              <Card2
                key={stock.symbol}
                image={stock.chartTodayPath}
                symbol={stock.symbol}
                name={stock.meta?.companyName}
                price_change={stock.pChange}
                curr_price={stock.lastPrice}
                volume={stock.totalTradedVolume}
                market_cap={stock.ffmc}
                onClick={() => navigate(`/chart/${stock.symbol}`)}
              />
            ))
          ) : (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>

              <img src={loading} alt="loading" style={{ height: "50px", width: "50px" }} />
              <p style={{ color: "white" }}>LOADING...</p>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Stock;
