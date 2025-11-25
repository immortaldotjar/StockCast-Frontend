import React from 'react'
import styles from './nav.module.css'
import logo from 'D:/StockCast/Frontend/src/assets/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import Button2 from '../../Widgets/Button2'
import { useUser } from '../../Context/UserContext'
import { GiPlagueDoctorProfile } from "react-icons/gi";
const NavBar = () => {
  const loc = useLocation()
  const { user, logout } = useUser()

  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.logo}>
          <img src={logo} alt="StockCast Logo" />
        </li>

        <li className={styles.navigation}>
          {user ? (
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
            >
              Home
            </NavLink>
          )}
        </li>

        <li className={styles.navigation}>
          <NavLink 
            to="/news" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
          >
            News
          </NavLink>
        </li>

        <li className={styles.navigation}>
          <NavLink 
            to="/stock" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
          >
            Stock
          </NavLink>
        </li>

        <li className={styles.navigation}>
          <NavLink 
            to="/crypto" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
          >
            Crypto
          </NavLink>
        </li>

        <li className={styles.navigation}>
          <NavLink 
            to="/chart" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
          >
            Chart
          </NavLink>
        </li>
        
        {user ? (
          <li className={`${styles.navigation} ${styles.username}`}>
            <GiPlagueDoctorProfile /> <span className={styles.userName}>{user.name}</span>
          </li>
        ) : (
          <li>
            <NavLink 
              to="/signup" 
              className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink}
            >
              <Button2 text="SIGN UP"/>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

export default NavBar
