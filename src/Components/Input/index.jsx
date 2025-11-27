import React from 'react'
import styles from './input.module.css'

const Input = props => {
  const { title, ...rest } = props

  return (
    <div className={styles.inputContainer}>
      <h4>{title}</h4>
      <input className={`${styles.input} ${styles.inputBox}`} {...rest} />
    </div>
  )
}

export default Input
