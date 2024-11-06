import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundVideo from '../assets/front.mp4'; // Adjust the path as necessary
import './hero.css';

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetQuoteClick = () => {
    navigate('/request-quote'); // Navigate to the Request Quote page
  };

  return (
    <section className="hero" id="hero">
     
      <div className="hero-video">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">STEEL & METAL FABRICATION</h1>
        <p className="hero-description">
        Our sheet metal fabrication expertise allows us to create metal frames, switch racks, control racks, wireways, and a variety of custom sheet metal fabrication services specifically for industrial applications, including Bero, cots, tables, desks, filing cabinets, tinkering items, repainting services, grill works, and banner frames. Call us at 9444333926/9444440353.
        </p>
        <div className="hero-buttons">
          <button className="hero-button" onClick={handleGetQuoteClick}>GET FREE QUOTE</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
