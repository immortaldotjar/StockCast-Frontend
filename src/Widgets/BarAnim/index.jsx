import styles from "./bar.module.css"

const BarAnim = () => {
    const [isBar,setIsBar] = useState(false);
    return (

        
        <div className={styles.barContainer}>
            <div className={styles.bar1}>

            </div>
            <div className={styles.bar2}>

            </div>
            <div className={styles.bar3}>

            </div>
            <div className={styles.bar4}>

            </div>

        </div>
    )
}

export default BarAnim