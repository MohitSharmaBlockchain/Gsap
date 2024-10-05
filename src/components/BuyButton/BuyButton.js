import styles from './BuyButton.module.css'

const BuyButton = ({ link, text }) => {
  return (
    <div className={styles.buyButton}>
      {text}
    </div>
  )
}

export default BuyButton