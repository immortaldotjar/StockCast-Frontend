import React from 'react'
import styles from './index.module.css'
const Bar = () => {
    return (
        <div>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18l0 -3" className={styles["s1"]}></path>
                <path d="M6 18l0 -6" className={styles["s2"]}></path>
                <path d="M10 18l0 -9" className={styles["s3"]}></path>
                <path d="M14 18l0 -12" className={styles["s4"]}></path>
            </svg>
        </div>
    )
}

export default Bar