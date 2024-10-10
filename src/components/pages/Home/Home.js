import { useState } from "react";
import styles from "./Home.module.css";
import HeroSection from "../../HeroSection/HeroSection";
import StorySection from "../../StorySection/StorySection";

const Home = () => {
  const [updateBuySectionGsap, setupdateBuySectionGsap] = useState(false);

  return (
    <>
      <HeroSection setupdateBuySectionGsap={setupdateBuySectionGsap} />
      <StorySection />
      <div className={styles.wrap_section}></div>
    </>
  );
};

export default Home;
