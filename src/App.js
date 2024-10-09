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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Loader from './components/Loader/Loader';

function App() {
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.normalizeScroll({ allowNestedScroll: true })
        ScrollTrigger.config({ limitCallbacks: true })
        
        var tl = gsap.timeline({ 
          scrollTrigger: {
            trigger: '.app',
            start: 'top top',
            end: `+=${(200/735)*(window.innerWidth/2.03443708609)}`,
            markers: false,
            scrub: true,
          }
         })
        tl.to('#navbar', {
          borderRadius: 0,
          width: '100%',
          marginTop: 0
        }, 0)
        tl.to('#heroSection', {
          borderRadius: 0,
          width: '100%',
          marginTop: `${window.innerWidth > 899 ? 230 : 70}px`
        }, 0)
      });     
      
      return () => ctx.revert();
  }, [])

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  }

  return (
    <div className="app">
      <Loader loaderComplete={!loading} />
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
