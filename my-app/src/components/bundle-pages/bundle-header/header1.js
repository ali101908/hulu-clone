import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate
import BasicBundle from '../disney-basic-bundle/hero-basic';
import '../bundles.css'
import styles from '../../../assets/component.module.css/component.module.css';

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bundle-container'>
      <div className={`${styles.spaceBetween}`}>
        {/* Logo */}
       <Link to='/' > <h2 className={`${styles.themeColor} ${styles.textDecoration} logo`}>hulu</h2></Link>

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

      <BasicBundle />
    </div>
  );
};

export default Header1;
