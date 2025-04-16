import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../home.css';
import styles from '../../../assets/component.module.css/component.module.css';



import HeroSection from '../hero-section/hero';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container1'>
      <div className={`${styles.spaceBetween}`}>
        {/* Logo */}
        <h2 className={`${styles.themeColor} logo`}>hulu</h2>

        {/* Desktop login button */}
        <button className='log-btn' onClick={() => navigate('/login')}>
          LOG IN
        </button>

        {/* Hamburger menu for mobile screens */}
        {window.innerWidth <= 768 && (
          <div className={`${styles.whiteColour} ${styles.hover} ${styles.center} ${styles.textCenter} menu-icon`} onClick={toggleMenu}>
            &#9776;
          </div>
        )}

        {/* Mobile version buttons */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button className='log-btn-mobile' onClick={() => navigate('/login')}>
            LOG IN
          </button>
          <button className='sign-up-btn-mobile'>GET THIS DEAL</button>
        </div>
      </div>

      <HeroSection />
    </div>
  );
};

export default Header;
