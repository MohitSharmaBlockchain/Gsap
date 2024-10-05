import { useState } from 'react'
import styles from './Navbar.module.css'
import BuyButton from '../BuyButton/BuyButton';

const Navbar = () => {
  const [showScreen, setShowScreen] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  
  return (
    <div id="navbar" className={styles.wrapSection}>
      <img src="https://res.cloudinary.com/seimutants/image/upload/v1727759994/raq2w8ytt6j6t2kyctex.svg" />
        <div className={styles.links}>
          <h1>Characters</h1>
          <h1>About</h1>
          <h1>Story</h1>
        </div>
        <BuyButton link="" text="Buy Token" />
    </div>
  )
}

export default Navbar