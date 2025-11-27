import React from 'react'
import styles from './css/btn2.module.css'

const Button2 = ({ text, buttonColor, onClick }) => {
  return (
    <div className={styles.btn2}>
      <button onClick={onClick} className={buttonColor}>
        {text}
      </button>
    </div>
  )
}

export default Button2
