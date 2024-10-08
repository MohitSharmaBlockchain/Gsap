import { useEffect, useState } from 'react'
import styles from './BuySection.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Tooltip from '@mui/material/Tooltip';

const BuySection = ({ updateBuySectionGsap }) => {
  const [title, settitle] = useState('Copy')
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true })
      ScrollTrigger.config({ limitCallbacks: true })
      
      var tl = gsap.timeline({ 
        scrollTrigger: {
          trigger: '#buySection',
          start: `-${300*((window.innerWidth*0.06510416666)/100)}px top`,
          end: `+=${200*((window.innerWidth*0.06510416666)/100)}`,
          markers: true,
          scrub: true,
        }
       })
      tl.to('#buySection', {
        borderRadius: '18px',
        width: '91%',
        marginBottom: `${44*(window.innerWidth*0.06510416666)/100}}px`
      }, 0)
      tl.to('#navbar', {
        borderRadius: '8px',
        width: '91%',
        marginTop: '44px'
      }, 0)
      tl.to('#storySection', {
        paddingBottom: '250px'
      }, 0)

    });     
    
    return () => ctx.revert();
  }, [updateBuySectionGsap])

  return (
    <div style={window.innerWidth > 899 ? { height: `calc(100vh - ${200*((window.innerWidth*0.06510416666)/100)}px` } : {}} id="buySection" className={styles.wrapSection}>
      <div style={window.innerWidth > 899 ? { zoom: `${window.innerWidth*0.06510416666}%` } : {}} className={styles.content}>
        <div className={styles.headings}>
          <img src="https://res.cloudinary.com/seimutants/image/upload/v1728241035/xxnmus6t9rzdz58hs8z7.svg" />
          <img src="https://res.cloudinary.com/seimutants/image/upload/v1728241031/jhcqlbjcvyekw0gssaxu.svg" />
        </div>
        <div className={styles.contract}>
          <p>0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</p>
          <Tooltip title={title} followCursor={true}>
            <img style={{ cursor: 'pointer' }} onClick={() => {
              window.navigator.clipboard.writeText((process.env.REACT_APP_CONTRACT_ADDRESS || ''))
                settitle('Copied')
                setTimeout(() => {
                    settitle('Copy')
                }, 1000)
            }} src="https://res.cloudinary.com/seimutants/image/upload/v1728241652/xdp2vkvmqr1tzppqcdmr.svg" />
          </Tooltip>
        </div>
      </div>
      <div style={{ padding: `${(30*(window.innerWidth*0.06510416666))/100}px ${(80*(window.innerWidth*0.06510416666))/100}px ${(30*(window.innerWidth*0.06510416666))/100}px 0` }} className={styles.links}>
        <div onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} style={hover1 ? { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px`, boxShadow: `${(5.5*(window.innerWidth*0.06510416666))/100}px ${(7.3*(window.innerWidth*0.06510416666))/100}px 0px 0px #8B0A0A`, transform: `translate(-${(7*(window.innerWidth*0.06510416666))/100}px, -${(7*(window.innerWidth*0.06510416666))/100}px)` } : { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px` }} className={styles.img}>
          <img src={'https://res.cloudinary.com/seimutants/image/upload/v1725533488/lt3zzspmfiecmghrvq2p.svg'} alt="" />
        </div>
        <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} style={hover2 ? { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px`, boxShadow: `${(5.5*(window.innerWidth*0.06510416666))/100}px ${(7.3*(window.innerWidth*0.06510416666))/100}px 0px 0px #8B0A0A`, transform: `translate(-${(7*(window.innerWidth*0.06510416666))/100}px, -${(7*(window.innerWidth*0.06510416666))/100}px)` } : { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px` }} className={styles.img}>
          <img src={'https://res.cloudinary.com/seimutants/image/upload/v1725533490/urf4ozsvlw6ldifswzky.svg'} alt="" />
        </div>
        <div onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} style={hover3 ? { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px`, boxShadow: `${(5.5*(window.innerWidth*0.06510416666))/100}px ${(7.3*(window.innerWidth*0.06510416666))/100}px 0px 0px #8B0A0A`, transform: `translate(-${(7*(window.innerWidth*0.06510416666))/100}px, -${(7*(window.innerWidth*0.06510416666))/100}px)` } : { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px` }} className={styles.img}>
          <img src={'https://res.cloudinary.com/seimutants/image/upload/v1725533283/q34c0aazle4euf9ibijn.svg'} alt="" />
        </div>
        <div onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} style={hover4 ? { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px`, boxShadow: `${(5.5*(window.innerWidth*0.06510416666))/100}px ${(7.3*(window.innerWidth*0.06510416666))/100}px 0px 0px #8B0A0A`, transform: `translate(-${(7*(window.innerWidth*0.06510416666))/100}px, -${(7*(window.innerWidth*0.06510416666))/100}px)` } : { padding: `${(30*(window.innerWidth*0.06510416666))/100}px`, borderRadius: `${(10*(window.innerWidth*0.06510416666))/100}px` }} className={styles.img}>
          <img src={'https://res.cloudinary.com/seimutants/image/upload/v1728366130/ojnyx3h8xrwtjdv6lpaj.svg'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BuySection