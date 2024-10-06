import { useEffect, useState } from 'react'
import styles from './HeroSection.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import BuyButton from '../BuyButton/BuyButton'

const HeroSection = () => {
  const [refresh, setrefresh] = useState(false);
  const [showArrow, setshowArrow] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true })
      ScrollTrigger.config({ limitCallbacks: true })
      let sections = gsap.utils.toArray(".charactersSliderImg");

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#charactersSlider',
          markers: false,
          pin: true,
          pinSpacing: false,
          start: '-10px top',
          end: `+=700`,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: self => {
            if (self.progress.toFixed(2) > 0.95) {
                setshowArrow(true)
            } else if (self.progress.toFixed(2) > 0.85) {
              setshowArrow(false)
            }
        },
        }
      })
        
      tl.to(sections, {
        x: -560 * (sections.length - 2),
        ease: "none"
      }); 
      tl.to('.app', {
        background: '#0A090C'
      }) 
    });     
    
    return () => ctx.revert();
  }, [refresh])

  useEffect(() => {
    function handleRefresh () {
      if (window.scrollY > 150) {
        setrefresh(true)
      }
    }

    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      handleRefresh()      
    })
    return () => window.removeEventListener("scroll", handleRefresh);
  }, []);

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
          <img className={styles.image1} src="https://res.cloudinary.com/seimutants/image/upload/v1728155024/qcl3fjhpdlqnxup6trcj.svg" />
          <img className={styles.image2} src="https://res.cloudinary.com/seimutants/image/upload/v1728155024/bcofrmckrgduyupe6iru.svg" />
          <img className={styles.image3} src="https://res.cloudinary.com/seimutants/image/upload/v1728155024/i0z6mj3jwa0wds30b1ll.svg" />
          <img className={styles.image4} src="https://res.cloudinary.com/seimutants/image/upload/v1728155024/wtvlh80srip63bg5gfq7.svg" />
          <img className={styles.image5} src="https://res.cloudinary.com/seimutants/image/upload/v1728155023/urcvgmoot2j3ov3x866c.svg" />
        </div>
        {/* <div id="characterSliderPin"></div> */}
        <div id="charactersSlider" className={styles.charactersSlider}>
            <img className="charactersSliderImg" style={{ marginLeft: '30px' }} src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777851/ifhodfhvdqzuxnslgumf.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1728170847/svea8xu4kljplow8adrm.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1727777848/oyul3xrl5nwt8ixhfelg.webp" />
            <img className="charactersSliderImg" src="https://res.cloudinary.com/seimutants/image/upload/v1728170849/fj8smbdchoxjza73tnu8.webp" />
            <img style={showArrow ? { opacity: 1 } : {}} className={styles.downArrow} src="https://res.cloudinary.com/seimutants/image/upload/v1728172347/vqyxwuyf02lbr4m997a2.svg" />
        </div>
    </div>
  )
}

export default HeroSection