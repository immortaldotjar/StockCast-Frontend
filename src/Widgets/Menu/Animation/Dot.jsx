import React from 'react'
import styles from './index.module.css'
const Dot = () => {
    return (
        <div className={styles.dot}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18l0 0" className={styles["rev-s1"]}></path>
                <path d="M6 18l0 0" className={styles["rev-s2"]}></path>
                <path d="M10 18l0 0" className={styles["rev-s3"]}></path>
                <path d="M14 18l0 0" className={styles["rev-s4"]}></path>
            </svg>
        </div>
    )
}

export default Dot