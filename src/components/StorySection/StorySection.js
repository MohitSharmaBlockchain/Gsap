import styles from "./StorySection.module.css";

const StorySection = () => {
  return (
    <div
      style={
        window.innerWidth > 899
          ? { zoom: `${window.innerWidth * 0.06510416666}%` }
          : {}
      }
      id="storySection"
      className={styles.upperWrap}
    >
      <div className={styles.wrapSection}>
        <div className={styles.gridContent}>
          <div className={styles.heading}>
            <span className={styles.line}></span>
            <span className={styles.title}>Dr. GreenSock</span>
            <span className={styles.line}></span>
          </div>
          <h1>Developer Comics</h1>
          <p>Next chapter on 15th October</p>
        </div>
      </div>
      <div className={`${styles.wrapSection} ${styles.wrapSection2}`}></div>
      <div className={`${styles.gridContent} ${styles.mobileWrapSection}`}>
        <div className={styles.heading}>
          <span className={styles.line}></span>
          <span className={styles.title}>Dr. GreenSock</span>
          <span className={styles.line}></span>
        </div>
        <h1>Developer Comics</h1>
        <p>Next chapter on 15th October</p>
      </div>
    </div>
  );
};

export default StorySection;
