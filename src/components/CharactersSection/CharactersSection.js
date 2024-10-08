import styles from './CharactersSection.module.css'
import BuyButton from '../BuyButton/BuyButton'

const CharactersSection = () => {
  return (
    <div style={window.innerWidth > 899 ? { zoom: `${window.innerWidth*0.06510416666}%` } : {}} className={styles.wrapSection}>
      <div className={styles.content}>
        <span>Introducing MemeVerse</span>
        <h1>Memeverse Synopsis</h1>
        <p>Experience a new level of excitement with Lick Coin. It’s not just another crypto; it’s lickably irresistible!Experience a new level of excitement with Lick Coin. It’s not just another crypto; it’s lickably irresistible!</p>
        <BuyButton text="Read Chapter 1" link="" />
      </div>
      <div id="charactersSection" className={styles.characters}>
        <img src="https://res.cloudinary.com/seimutants/image/upload/v1727914932/gggapxot9a2epwuxanvg.png" />
      </div>
    </div>
  )
}

export default CharactersSection