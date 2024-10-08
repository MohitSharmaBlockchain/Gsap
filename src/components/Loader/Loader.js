import styles from './Loader.module.css'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const Loader = ({ loaderComplete }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#loader', { width: '17%', duration: 2 }, 0)
      gsap.to('#loader', { width: '63%', duration: 1.5 }, 2)
    }); 
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    console.log('loaderComplete', loaderComplete)
    const ctx = gsap.context(() => {
      if (loaderComplete) {

        console.log('inloadinggg', loaderComplete)

        gsap.to('#loader', { width: '100%', duration: 2 })
        gsap.to('#wrapSection', { left: '-100%', duration: 1 }, '>')
      }
    }); 
    return () => ctx.revert();
  }, [loaderComplete])

  return (
    <div id="wrapSection" className={styles.wrapSection}>
      <img className={styles.blur} src="https://res.cloudinary.com/seimutants/image/upload/v1728398405/wmjlhj47euypf9qlhdof.png" />
      <img className={styles.image} src="https://res.cloudinary.com/seimutants/image/upload/v1728395874/n8asoq3hmjpaashkbx0c.svg" />
      <div className={styles.loaderWrap}>
        <div className={styles.loaderBackground}></div>
        <div id="loader" className={styles.loader}></div>
      </div>
    </div>
  )
}

export default Loader