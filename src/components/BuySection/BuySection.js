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
          start: window.innerWidth > 899 ? `-${300*((window.innerWidth*0.06510416666)/100)}px top` : `-${150*((window.innerWidth*0.3333333333333333)/100)}px top`,
          end: window.innerWidth > 899 ? `+=${200*((window.innerWidth*0.06510416666)/100)}` : `+=${150*((window.innerWidth*0.3333333333333333)/100)}`,
          markers: true,
          scrub: true,
        }
       })
      tl.to('#buySection', {
        borderRadius: window.innerWidth > 899 ? '18px' : '10px',
        width: '91%',
        marginBottom: window.innerWidth > 899 ? `${44*(window.innerWidth*0.06510416666)/100}}px` : `${15*(window.innerWidth*0.3333333333333333)/100}}px`
      }, 0)
      tl.to('#navbar', {
        borderRadius: '8px',
        width: '91%',
        marginTop: window.innerWidth > 899 ? '44px' : '15px'
      }, 0)
      tl.to('#storySection', {
        paddingBottom: window.innerWidth > 899 ? '250px' : '120px'
      }, 0)

    });     
    
    return () => ctx.revert();
  }, [updateBuySectionGsap])

  return (
    <div style={window.innerWidth > 899 ? { height: `calc(100vh - ${200*((window.innerWidth*0.06510416666)/100)}px` } : { height: 'calc(100vh - 100px)' }} id="buySection" className={styles.wrapSection}>
      <div style={window.innerWidth > 899 ? { zoom: `${window.innerWidth*0.06510416666}%` } : {}} className={styles.content}>
        <div className={styles.headings}>
          <img className={styles.buyImg1} src="https://res.cloudinary.com/seimutants/image/upload/v1728241035/xxnmus6t9rzdz58hs8z7.svg" />
          <img className={styles.buyImg2} src="https://res.cloudinary.com/seimutants/image/upload/v1728241031/jhcqlbjcvyekw0gssaxu.svg" />
        </div>
        <div className={styles.contract}>
          {window.innerWidth > 899 ? <p>{process.env.REACT_APP_CONTRACT_ADDRESS}</p> : <p>{process.env.REACT_APP_CONTRACT_ADDRESS?.substring(0, 12)}...{process.env.REACT_APP_CONTRACT_ADDRESS?.substring(process.env.REACT_APP_CONTRACT_ADDRESS?.length - 4, process.env.REACT_APP_CONTRACT_ADDRESS?.length)}</p>}
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
      <div style={window.innerWidth > 899 ? { padding: `${(30*(window.innerWidth*0.06510416666))/100}px ${(80*(window.innerWidth*0.06510416666))/100}px ${(30*(window.innerWidth*0.06510416666))/100}px 0` } : {}} className={styles.links}>
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