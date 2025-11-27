import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MiniChart, CompanyProfile, TechnicalAnalysis, FundamentalData } from 'react-ts-tradingview-widgets'
import Search2 from '../Widgets/Search2'
import { SlScreenDesktop } from 'react-icons/sl'
import { CiUser } from 'react-icons/ci'
import { useUser } from '../Context/UserContext'
import axios from 'axios'

const Charts = () => {
  const { symbol } = useParams()
  const navigate = useNavigate()
  const [search, setSearch] = useState(symbol || 'AAPL')
  const { user, setUser } = useUser()

  useEffect(() => {
    setSearch(symbol || 'AAPL')
  }, [symbol])

  const handleSearch = term => {
    setSearch(term)
    navigate(`/chart/${term}`)
  }

  const handleAddToWatchlist = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/add', {
        email: user.email,
        symbol: search
      })
      if (res.data.status === 'OK') {
        setUser(res.data.user)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const btnStyles = {
    border: 'none',
    height: '50px',
    width: '150px',
    borderRadius: '10px',
    marginTop: '40px',
    transition: 'all .5s ease-in-out',
    backgroundColor: 'rgba(137, 43, 226, 0.626)',
    color: 'white',
    boxShadow: '0 0 30px rgba(153, 10, 255, 0.795)',
    margin: '10px',
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  }

  return (
    <div style={{ marginTop: '10px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Search2 onSearch={handleSearch} />
      </div>
      <div style={{ padding: '10px', margin: '10px', marginTop: '80px' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            border: '1px solid rgba(160, 27, 255, 0.26)',
            display: 'flex',
            padding: '20px',
            borderRadius: '10px',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <h1>{search.toUpperCase()}</h1>
          {!user ? (
            <button onClick={() => navigate('/signup')} style={btnStyles}>
              <CiUser /> Sign up
            </button>
          ) : (
            <button onClick={handleAddToWatchlist} style={btnStyles}>
              <SlScreenDesktop /> Add to Watchlist
            </button>
          )}
        </div>
        <div style={{ height: '80vh', width: '100%' }}>
          <MiniChart
            colorTheme="dark"
            isTransparent={true}
            width="100%"
            height={500}
            dateRange="1Y"
            symbol={search}
            trendLineColor="rgba(165, 39, 255, 1)"
            underLineColor="rgba(165, 39, 255, 0.48)"
          />
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            gap: '20px',
            zIndex: '20',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0px 20px 207px 10px rgba(165, 39, 255, 0.48)',
            border: '2px solid rgba(165, 39, 255,1)',
            marginBottom: '20px',
            marginTop: '70px',
            height: '100%',
            padding: '20px'
          }}
        >
          <div style={{ flex: 1 }}>
            <CompanyProfile colorTheme="dark" height={400} width="100%" isTransparent={true} symbol={search} />
          </div>
          <div style={{ flex: 1 }}>
            <TechnicalAnalysis colorTheme="dark" width="100%" isTransparent={true} symbol={search} />
          </div>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <FundamentalData colorTheme="dark" height={1000} width="100%" isTransparent={true} symbol={search} />
      </div>
    </div>
  )
}

export default Charts
