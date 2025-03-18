import React from 'react';
import huluImage from '../../../images/hulu-logo.jpg';  // Correct import
import '../home.css'
import HeroSection from '../hero-section/hero'

const Header = () => {
  return (
	<div className='container'>
    <div className='navbar'>
      {/* <img className='logo' src={huluImage} alt="Hulu Logo" width={100} height={80} /> */}
      <h2 className='logo'>hulu</h2>
	  <button className='log-btn'>LOG IN</button>
    </div>
	<HeroSection />
	</div>
  );
};

export default Header;
