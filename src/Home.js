
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function Home() {
  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Home">
      <Navbar />
      
      {}
      <div ref={heroRef}>
        <Hero />
      </div>
      
      <About />
      <Services />
      <Contact />
      
      {/* Upward Arrow element that scrolls to the Hero section */}
      <div className="scroll-arrow" onClick={scrollToHero}>
        &#x2191;  {/* Changed to an upward arrow */}
      </div>
    </div>
  );
}

export default Home;
