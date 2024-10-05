import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { useEffect, useState } from "react";
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function App() {
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    // const ctx = gsap.context(() => {
        // gsap.registerPlugin(ScrollTrigger);
        // ScrollTrigger.normalizeScroll({ allowNestedScroll: true })
        // ScrollTrigger.config({ limitCallbacks: true })

        // gsap.set('.app', { gap: '36px' })
        
      //   var tl = gsap.timeline({ 
      //     scrollTrigger: {
      //       trigger: '.app',
      //       start: 'top top',
      //       end: `+=300`,
      //       markers: true,
      //       scrub: true,
      //     }
      //    })
      //   tl.to('#navbar', {
      //     borderRadius: 0,
      //     width: '100%',
      //     marginTop: 0
      //   }, 0)
      //   tl.to('#heroSection', {
      //     borderRadius: 0,
      //     width: '100%',
      //     marginTop: '100px'
      //   }, 0)
      // });     
      
      // return () => ctx.revert();
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);

    return () => {
      clearTimeout(timer)
    }
  }, []);

  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Navigate to={'/'} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
