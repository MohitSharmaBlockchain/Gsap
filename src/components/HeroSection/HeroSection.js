import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BuyButton from "../BuyButton/BuyButton";

const HeroSection = ({ setupdateBuySectionGsap }) => {
  const [refresh, setrefresh] = useState(false);
  const [showArrow, setshowArrow] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true });
      ScrollTrigger.config({ limitCallbacks: true });
      let sections = gsap.utils.toArray(".charactersSliderImg");

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#charactersSlider",
          markers: false,
          pin: true,
          pinSpacing: true,
          start: "-10px top",
          end: `+=${
            document.getElementsByClassName("charactersSliderImg")[0]
              .clientWidth * 2
          }`,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress.toFixed(2) > 0.6) {
              setshowArrow(true);
            } else if (self.progress.toFixed(2) < 0.45) {
              setshowArrow(false);
            }
          },
          onLeave: () => {
            console.log("leaving...");
            setupdateBuySectionGsap(true);
          },
        },
      });

      tl.to(sections, {
        x:
          window.innerWidth > 899
            ? `${-(
                document.getElementsByClassName("charactersSliderImg")[0]
                  .clientWidth *
                  5 +
                ((30 * (window.innerWidth * 0.06510416666)) / 100) * 7 -
                window.innerWidth
              )}px`
            : `${-(
                document.getElementsByClassName("charactersSliderImg")[0]
                  .clientWidth *
                  5 +
                ((15 * (window.innerWidth * 0.3333333333333333)) / 100) * 7 -
                window.innerWidth
              )}px`,
        // x: `${-((document.getElementsByClassName('charactersSliderImg')[0].clientWidth)*5 + (30*(window.innerWidth*0.06510416666)/100)*10)/2}px`,
        ease: "none",
      });
      tl.to(".app", {
        background: "#0A090C",
      });
    });

    return () => ctx.revert();
  }, [refresh]);

  useEffect(() => {
    function handleRefresh() {
      if (window.scrollY > 150) {
        setrefresh(true);
      }
    }

    window.addEventListener("scroll", () => {
      handleRefresh();
    });
    return () => window.removeEventListener("scroll", handleRefresh);
  }, []);

  return (
    // <div id="heroSectionWrapper" className={styles.heroSectionWrapper}>
    <div
      style={
        window.innerWidth > 899
          ? {
              paddingBottom: `${
                (30 * (window.innerWidth * 0.06510416666)) / 100
              }px`,
            }
          : {}
      }
      id="heroSection"
      className={styles.wrapSection}
    >
      <div
        style={
          window.innerWidth > 899
            ? { zoom: `${window.innerWidth * 0.06510416666}%` }
            : {}
        }
        className={styles.heroBanner}
      >
        <div className={styles.content}>
          <span>Dummy Heading...</span>
          <h1>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h1>
          <div className={styles.social}>
            <BuyButton text="Button" link="" />
          </div>
        </div>
      </div>
      {/* <div id="characterSliderPin"></div> */}
      <div
        style={
          window.innerWidth > 899
            ? {
                paddingTop: `${
                  (90 * (window.innerWidth * 0.06510416666)) / 100
                }px`,
                gap: `${(30 * (window.innerWidth * 0.06510416666)) / 100}px`,
              }
            : {
                paddingTop: `${
                  (60 * (window.innerWidth * 0.3333333333333333)) / 100
                }px`,
                gap: `${
                  (15 * (window.innerWidth * 0.3333333333333333)) / 100
                }px`,
              }
        }
        id="charactersSlider"
        className={styles.charactersSlider}
      >
        <img
          style={
            window.innerWidth > 899
              ? {
                  height: `calc(100vh - ${
                    136 * ((window.innerWidth * 0.06510416666) / 100)
                  }px)`,
                  marginLeft: `${
                    (30 * (window.innerWidth * 0.06510416666)) / 100
                  }px`,
                }
              : {
                  height: `calc(100vh - ${
                    85 * ((window.innerWidth * 0.3333333333333333) / 100)
                  }px)`,
                  marginLeft: `${
                    (15 * (window.innerWidth * 0.3333333333333333)) / 100
                  }px`,
                }
          }
          className="charactersSliderImg"
          src="https://res.cloudinary.com/seimutants/image/upload/c_scale,w_524/v1727881530/sh9pelhn8vipyhlhxz98.webp"
        />
        <img
          style={
            window.innerWidth > 899
              ? {
                  height: `calc(100vh - ${
                    136 * ((window.innerWidth * 0.06510416666) / 100)
                  }px)`,
                }
              : {
                  height: `calc(100vh - ${
                    85 * ((window.innerWidth * 0.3333333333333333) / 100)
                  }px)`,
                }
          }
          className="charactersSliderImg"
          src="https://res.cloudinary.com/seimutants/image/upload/c_scale,w_524/v1727881530/sh9pelhn8vipyhlhxz98.webp"
        />
        <img
          style={
            window.innerWidth > 899
              ? {
                  height: `calc(100vh - ${
                    136 * ((window.innerWidth * 0.06510416666) / 100)
                  }px)`,
                }
              : {
                  height: `calc(100vh - ${
                    85 * ((window.innerWidth * 0.3333333333333333) / 100)
                  }px)`,
                }
          }
          className="charactersSliderImg"
          src="https://res.cloudinary.com/seimutants/image/upload/c_scale,w_524/v1727881530/sh9pelhn8vipyhlhxz98.webp"
        />
        <img
          style={
            window.innerWidth > 899
              ? {
                  height: `calc(100vh - ${
                    136 * ((window.innerWidth * 0.06510416666) / 100)
                  }px)`,
                }
              : {
                  height: `calc(100vh - ${
                    85 * ((window.innerWidth * 0.3333333333333333) / 100)
                  }px)`,
                }
          }
          className="charactersSliderImg"
          src="https://res.cloudinary.com/seimutants/image/upload/c_scale,w_524/v1727881530/sh9pelhn8vipyhlhxz98.webp"
        />
        <img
          style={
            window.innerWidth > 899
              ? {
                  height: `calc(100vh - ${
                    136 * ((window.innerWidth * 0.06510416666) / 100)
                  }px)`,
                }
              : {
                  height: `calc(100vh - ${
                    85 * ((window.innerWidth * 0.3333333333333333) / 100)
                  }px)`,
                }
          }
          className="charactersSliderImg"
          src="https://res.cloudinary.com/seimutants/image/upload/c_scale,w_524/v1727881530/sh9pelhn8vipyhlhxz98.webp"
        />
        <img
          style={
            showArrow
              ? window.innerWidth > 899
                ? { zoom: `${window.innerWidth * 0.06510416666}%`, opacity: 1 }
                : { opacity: 1 }
              : {}
          }
          className={styles.downArrow}
          src="https://res.cloudinary.com/seimutants/image/upload/v1728172347/vqyxwuyf02lbr4m997a2.svg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
