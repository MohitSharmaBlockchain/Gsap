import styles from './StorySection.module.css'

const StorySection = () => {
  return (
    <div style={window.innerWidth > 899 ? { zoom: `${window.innerWidth*0.06510416666}%` } : {}} id="storySection" className={styles.upperWrap}>
      <div className={styles.wrapSection}>
        <div className={styles.gridContent}>
          <div className={styles.heading}>
            <span className={styles.line}></span>
            <span className={styles.title}>Dr. Deng</span>
            <span className={styles.line}></span>
          </div>
          <h1>Memeverse Synopsis</h1>
          <p>Next chapter on 10th October</p>
        </div>
        <div className='grid1'><img src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" /></div>
        <div className='grid3'><img src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" /></div>
      </div>
      <div className={`${styles.wrapSection} ${styles.wrapSection2}`}>
        <div className='grid4'><img src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" /></div>
        <div className='grid5'><img src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" /></div>
        <div className='grid6'><img src="https://res.cloudinary.com/seimutants/image/upload/v1727777850/tjnxi7ifbwzmonnsnryn.webp" /></div>
      </div>
      <div className={`${styles.gridContent} ${styles.mobileWrapSection}`}>
        <div className={styles.heading}>
          <span className={styles.line}></span>
          <span className={styles.title}>Dr. Deng</span>
          <span className={styles.line}></span>
        </div>
        <h1>Memeverse Synopsis</h1>
        <p>Next chapter on 10th October</p>
      </div>
      <div className={`${styles.mobileImg} ${styles.mobileWrapSection}`}>
        <img src="https://res.cloudinary.com/seimutants/image/upload/v1728436296/qpbedpq99z7epzuzpz9q.jpg" />
      </div>
    </div>
  )
}

export default StorySection