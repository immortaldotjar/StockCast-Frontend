import React from 'react'
import styles from './btn.module.css'
const Button = ({text,buttonColor,onClick}) => {
  return (
    <div className={`${styles.btn} `}>
        <button onClick={onClick}className={`${buttonColor}`}>{text}</button>
    </div>
  )
}

export default Button