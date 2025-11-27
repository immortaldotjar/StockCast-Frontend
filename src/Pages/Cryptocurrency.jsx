import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Search2 from '../Widgets/Search2'
import loading from '../assets/loading2.gif'
import { useNavigate } from 'react-router-dom'

const CryptoCurrency = () => {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/api/prices')
      .then(response => setCoin(response.data))
      .catch(error => console.error('Error :', error))
  }, [])

  const handleSearch = term => {
    setSearch(term)
    setCurrPage(1)
  }

  const Coins = coin.filter(c =>
    c.name.toUpperCase().includes(search.toUpperCase())
  )

  const pages = 10
  const indexLast = currentPage * pages
  const indexFirst = indexLast - pages
  const currentCoins = Coins.slice(indexFirst, indexLast)
  const totalPages = Math.ceil(Coins.length / pages)

  const handlePageChange = (e, val) => {
    setCurrPage(val)
  }

  return (
    <div style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
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
                variant="outlined"
                sx={{
                  '& .MuiPaginationItem-root': { color: 'white' },
                  '& .Mui-selected': { color: 'white', backgroundColor: 'none' }
                }}
              />
            </Stack>
          </div>

          {currentCoins.length > 0 ? (
            currentCoins.map(c => (
              <Card
                key={c.id}
                image={c.image}
                name={c.name}
                symbol={c.symbol}
                price_change={c.price_change_percentage_24h}
                curr_price={c.current_price}
                volume={c.total_volume}
                market_cap={c.market_cap}
                onClick={() => navigate(`/chart/${c.symbol}`)}
              />
            ))
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
              <img src={loading} alt="loading" style={{ height: '50px', width: '50px' }} />
              <p style={{ color: 'white' }}>LOADING...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CryptoCurrency
