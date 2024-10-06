import { useEffect } from 'react'
import styles from './BuySection.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const BuySection = () => {
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true })
      ScrollTrigger.config({ limitCallbacks: true })
      
      var tl = gsap.timeline({ 
        scrollTrigger: {
          trigger: '#buySection',
          start: '-200px top',
          end: `+=200`,
          markers: true,
          scrub: true,
        }
       })
      tl.to('#buySection', {
        borderRadius: '18px',
        width: '91%'
      }, 0)
      tl.to('#navbar', {
        borderRadius: '8px',
        width: '91%',
        marginTop: '48px'
      }, 0)
      tl.to('#storySection', {
        paddingBottom: '170px'
      }, 0)

    });     
    
    return () => ctx.revert();
  }, [])

  return (
    <div id="buySection" className={styles.wrapSection}>

    </div>
  )
}

export default BuySection