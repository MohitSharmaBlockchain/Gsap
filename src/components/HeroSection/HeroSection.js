import { useEffect, useState } from 'react'
import styles from './HeroSection.module.css'
// import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// import { useGSAP } from '@gsap/react'
import BuyButton from '../BuyButton/BuyButton'

const HeroSection = () => {
  const [refresh, setrefresh] = useState(false);

  // useEffect(() => {
    // const ctx = gsap.context(() => {
      // gsap.registerPlugin(ScrollTrigger);
      // ScrollTrigger.normalizeScroll({ allowNestedScroll: true })
      // ScrollTrigger.config({ limitCallbacks: true })
      // let sections = gsap.utils.toArray(".charactersSliderImg");

      // var t1 = gsap.timeline({
      //   // xPercent: -100 * (sections.length - 1),
      //   // ease: "none", // <-- IMPORTANT!
      //   // // stagger: 1,
      //   scrollTrigger: {
      //     trigger: '#charactersSlider',
      //     // onToggle: scrollTrigger => {
      //     //   // refresh because height start changes
      //     //   scrollTrigger.refresh()
      //     // },
      //     markers: true,
      //     pin: true,
      //     pinSpacing: false,
      //     start: 'top top',
      //     end: `+=300`,
      //     scrub: true,
      //     invalidateOnRefresh: true
      //   }
      // })
      // t1.to(sections, {
      //   xPercent: -100 * (sections.length - 1),
      //   ease: "none",
      // })

      // if (refresh) {
      //   console.log(t1)
      //   t1.scrollTrigger.refresh();
      // }
      // gsap.to("#charactersSlider", {
      //   ease: "none", // <-- IMPORTANT!
      //   scrollTrigger: {
      //     trigger: '#charactersSlider',
      //     // start: '160px top',
      //     // end: `+=2000 bottom`,
      //   markers: true,
      //     pin: '#heroSection',
      //     pinSpacing: false,
      //     scrub: 0.1
      //   }
      // })
        
      // tl.to(sections, {
      //   x: -700 * (sections.length - 1),
      //   ease: "none"
      // });

      
    // });     
    
  //   return () => ctx.revert();
  // }, [refresh])

  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY > 450) {
  //     setrefresh(true)
  //   }
  // })

  return (
    // <div id="heroSectionWrapper" className={styles.heroSectionWrapper}>
    <div id="heroSection" className={styles.wrapSection}>
        <div className={styles.heroBanner}>
          <div className={styles.content}>
            <span>Introducing MemeVerse</span>
            <h1>A Place to meet all your superheroes coins.</h1>
            <div className={styles.social}>
              <BuyButton text="Buy Token" link="" />
              <a href="https://twitter.com" target='_blank'><img src="https://res.cloudinary.com/seimutants/image/upload/v1728120175/m28okus4kelrnkzvmxl9.svg" /></a>
              <a href="https://telegram.com" target='_blank'><img src="https://res.cloudinary.com/seimutants/image/upload/v1728120174/r9l2l8syvleninbhovn9.svg" /></a>
            </div>
          </div>
        </div>
        <div id="charactersSlider" className={styles.charactersSlider}>
            <img className="charactersSliderImg" style={{ marginLeft: '30px' }} src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777851/ifhodfhvdqzuxnslgumf.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777848/oyul3xrl5nwt8ixhfelg.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777851/ifhodfhvdqzuxnslgumf.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777848/oyul3xrl5nwt8ixhfelg.webp" />
        </div>
    </div>
  )
}

export default HeroSection