import React from 'react'
import { useUser } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import styles from './dash.module.css'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import Watchlist from '../Watchlist'
import axios from 'axios'
import { CiCircleRemove } from 'react-icons/ci'

const Dash = () => {
  const { user, logout, setUser } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleRemove = async symbol => {
    try {
      const res = await axios.post('http://localhost:5000/api/remove', {
        email: user.email,
        symbol
      })
      if (res.data.status === 'OK') {
        setUser(res.data.user)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.frontPanel}>
      <div className={styles.column1}>
        <div className={styles.profile}>
          <div className={styles.profileImg}>
            <GiPlagueDoctorProfile className={styles.logo} />
          </div>
        </div>
        <div className={styles.detail}>
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>
      <div className={styles.column2}>
        <h2>Watchlists</h2>
        <div className={styles.watchlistContainer}>
          {user?.watchlist?.map((symbol, id) => (
            <div key={id} className={styles.watchlistItem}>
              <button onClick={() => handleRemove(symbol)}>
                <CiCircleRemove fontWeight={900} />
              </button>
              <Watchlist symbol={symbol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dash
