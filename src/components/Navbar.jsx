import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';
import logo from '../assets/logo2.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="navbar">
      <nav>
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰ {/* You can replace this with an icon from a library if desired */}
        </button>

        {/* Navigation Links */}
        <ul className={isMenuOpen ? 'show' : ''}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/request-quote">Request Quote</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;