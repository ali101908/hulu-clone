import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css';
import styles from '../../../assets/component.module.css/component.module.css';
import HeroSection from '../hero-section/hero';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container1'>
      <div className={`${styles.spaceBetween}`}>
        <h2 className={`${styles.themeColor} logo`}>hulu</h2>

        <button className='log-btn' onClick={() => navigate('/login')}>
          LOG IN
        </button>

        {windowWidth <= 768 && (
          <div className={`${styles.whiteColour} ${styles.hover} ${styles.center} ${styles.textCenter} menu-icon`} onClick={toggleMenu}>
            &#9776;
          </div>
        )}

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
