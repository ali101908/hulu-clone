import React, { useState } from 'react';
import '../home.css';
import HeroSection from '../hero-section/hero';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <div className='navbar'>
        {/* Logo */}
        <h2 className='logo'>hulu</h2>

        {/* Desktop login button */}
        <button className='log-btn'>LOG IN</button>
        <button className='sign-up-btn'>SIGN UP</button>

        {/* Hamburger menu for mobile screens */}
        <div className='menu-icon' onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Mobile version buttons (Login and Sign Up) */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className='log-btn-mobile'>LOG IN</button>
          <button className='sign-up-btn-mobile'>SIGN UP</button>
        </div>
      </div>

      <HeroSection />
    </div>
  );
};

export default Header;
