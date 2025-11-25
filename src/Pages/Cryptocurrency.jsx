import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Search2 from '../Widgets/Search2';
import loading from "../assets/loading2.gif"
import { useNavigate } from 'react-router-dom';
const CryptoCurrency = () => {
    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrPage] = useState(1);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/api/prices')
            .then(response => setCoin(response.data))
            .catch(error => console.error('Error :', error));
    }, []);

    const handleSearch = (term) => {
        setSearch(term);
        setCurrPage(1);
    };

    const Coins = coin.filter(coin =>
        coin.name.toUpperCase().includes(search)
    );
    const pages = 10
    const indexLast = currentPage * pages;
    const indexFirst = indexLast - pages;
    const currentCoins = Coins.slice(indexFirst, indexLast);
    const totalPages = Math.ceil(Coins.length / pages);

    const handlePageChange = (e, val) => {
        setCurrPage(val);
    };

    return (
        <div style={{
            backgroundColor: 'black', height: '100%', width: '100%'
        }}>

            <div style={{ padding: '20px', display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                <Search2 onSearch={handleSearch} placeholder="Bitcoin, Ethereum, Tether..." />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    marginTop: '20px'
                }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={3} alignItems="center" marginTop={4}>
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                                shape="rounded"
                                variant='outlined'
                                sx={{
                                    '& .MuiPaginationItem-root': {
                                        color: 'white',
                                    },
                                    '& .Mui-selected': {
                                        color: 'white',
                                        backgroundColor: 'none',
                                    },
                                }}
                            />
                        </Stack>
                    </div>

                    {currentCoins.length > 0 ? (
                        currentCoins.map((coin) => (
                            <Card
                                key={coin.id}
                                image={coin.image}
                                name={coin.name}
                                symbol={coin.symbol}
                                price_change={coin.price_change_percentage_24h}
                                curr_price={coin.current_price}
                                volume={coin.total_volume}
                                market_cap={coin.market_cap} 
                                onClick = {() => navigate(`/chart/${coin.symbol}`)}/>
                        ))) :
                        (
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>

                                <img src={loading} alt="loading" style={{ height: "50px", width: "50px" }} />
                                <p style={{ color: "white" }}>LOADING...</p>
                            </div>
                        )}
                </div>


            </div>
        </div >
    );
};

export default CryptoCurrency;
