import styles from './css/newsHead.module.css';

const Heading = ({ head }) => {
  return (
    <div>
        <p className={styles.newsHeading}>{head}</p>
    </div>
  )
}

export default Heading