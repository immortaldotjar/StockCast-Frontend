import styles from './css/card.module.css'
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io'

const Card = ({ image, symbol, name, price_change, curr_price, volume, market_cap, onClick }) => {
  const color = price_change >= 0 ? 'rgba(0, 255, 42, 0.796)' : 'red'
  const borderColor = price_change >= 0 ? 'rgba(0, 255, 42, 0.796)' : 'rgba(255, 0, 0, 0.796)'

  return (
    <div
      className={`${styles.cardContainer} ${color === 'red' ? styles.red : styles.green}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.row1}>
        <div className={styles.logo}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.nameSymbol}>
          <div className={styles.name}><p>{name}</p></div>
          <div className={styles.symbol}><p>{symbol?.toUpperCase()}</p></div>
        </div>
      </div>

      <div className={styles.row2}>
        <div
          style={{
            color,
            border: `2px solid ${borderColor}`,
            borderRadius: '50px',
            padding: '6px',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
        >
          <p>
            {price_change !== undefined && price_change !== null
              ? `${price_change.toFixed(5)}%`
              : 'N/A'}
          </p>
        </div>
        <div
          style={{
            color,
            border: `2px solid ${borderColor}`,
            borderRadius: '50px',
            padding: '7px',
            height: '40px',
            width: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              margin: 0
            }}
          >
            {price_change !== undefined && price_change !== null
              ? price_change >= 0
                ? <IoMdTrendingUp />
                : <IoMdTrendingDown />
              : null}
          </p>
        </div>
      </div>

      <div className={styles.prices}>
        <p>
          <span>Current Price : </span>
          {curr_price !== undefined && curr_price !== null
            ? `$${curr_price.toLocaleString()}`
            : 'N/A'}
        </p>
      </div>

      <div className={styles.prices}>
        <div>
          <p>
            <span>Total Volume : </span>
            {volume !== undefined && volume !== null
              ? volume.toLocaleString()
              : 'N/A'}
          </p>
        </div>
        <div>
          <p>
            <span>Market Cap : </span>
            {market_cap !== undefined && market_cap !== null
              ? market_cap.toLocaleString()
              : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
