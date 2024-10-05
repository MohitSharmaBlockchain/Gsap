import { useState } from 'react'
import styles from './Home.module.css'
import HeroSection from '../../HeroSection/HeroSection'
import StorySection from '../../StorySection/StorySection';
import BuySection from '../../BuySection/BuySection';
import CharactersSection from '../../CharactersSection/CharactersSection';

const Home = () => {
  const [showScreen, setShowScreen] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);
  
  return (
    <>
      <HeroSection />
      <CharactersSection />
      <StorySection />
      <BuySection />
      <div className={styles.wrap_section}>
        {/* <ExploreSection />
        <CreateLick />
        <BuySection /> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Home