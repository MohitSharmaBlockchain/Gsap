import { useState } from 'react'
import styles from './Home.module.css'
import HeroSection from '../../HeroSection/HeroSection'
import StorySection from '../../StorySection/StorySection';
import BuySection from '../../BuySection/BuySection';
import CharactersSection from '../../CharactersSection/CharactersSection';

const Home = () => {
  const [updateBuySectionGsap, setupdateBuySectionGsap] = useState(false);
  
  return (
    <>
      <HeroSection setupdateBuySectionGsap={setupdateBuySectionGsap} />
      <CharactersSection />
      <StorySection />
      <BuySection updateBuySectionGsap={updateBuySectionGsap} />
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