import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { gsap } from "gsap-trial";
// import Loader from "./components/Loader/Loader";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true });
      ScrollTrigger.config({ limitCallbacks: true });

      const smoother = ScrollSmoother.create({
        wrapper: "#smoothWrapper",
        content: "#smoothContent",
        smooth: 10,
        effects: true,
        smoothTouch: 0.1,
      });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".app",
          start: "top top",
          end: `+=${(200 / 735) * (window.innerWidth / 2.03443708609)}`,
          markers: true,
          scrub: true,
        },
      });
      tl.to(
        "#navbar",
        {
          borderRadius: 0,
          width: "100%",
          marginTop: 0,
        },
        0
      );
      tl.to(
        "#heroSection",
        {
          borderRadius: 0,
          width: "100%",
          marginTop: `${window.innerWidth > 899 ? 230 : 70}px`,
        },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  // if (loading) {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);
  // }

  return (
    <div id="smoothWrapper">
      <div id="smoothContent">
        <div className="app">
          {/* <Loader loaderComplete={!loading} /> */}
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
