import React from 'react'
import styles from './title.module.css'

const Title = ({ title }) => {
  return (
    <div className={styles.titlebox}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Title
