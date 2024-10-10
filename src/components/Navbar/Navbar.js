import styles from "./Navbar.module.css";
import BuyButton from "../BuyButton/BuyButton";

const Navbar = () => {
  return (
    <div
      style={
        window.innerWidth > 899
          ? { zoom: `${window.innerWidth * 0.06510416666}%` }
          : {}
      }
      id="navbar"
      className={styles.wrapSection}
    >
      <span
        style={{ width: "90px", height: "30px", background: "#FF474A" }}
      ></span>
      <div className={styles.links}>
        <h1>Characters</h1>
        <h1>About</h1>
        <h1>Story</h1>
      </div>
      <BuyButton link="" text="Buy Token" />
    </div>
  );
};

export default Navbar;
