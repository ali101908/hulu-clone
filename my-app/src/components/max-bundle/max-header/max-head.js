import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './max-head.css'; // Import CSS for styling
import BasicBundle from '../../bundle-pages/disney-basic-bundle/hero-basic';

const MaxHead = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate(); // Initialize navigation
  
	// Function to toggle menu visibility
	const toggleMenu = () => {
	  setIsMenuOpen(!isMenuOpen);
	};
  
	return (
	  <div className='max-container'>
		<div className='navbar1'>
		  {/* Logo */}
		 <a href='/' > <h2 className='logo'>hulu</h2></a>
  
		  {/* Desktop login button */}
		  <button className='log-btn' onClick={() => navigate('/login')}>
			LOG IN
		  </button>
  
		  {/* Hamburger menu for mobile screens */}
		  {window.innerWidth <= 768 && (
			<div className='menu-icon' onClick={toggleMenu}>
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
}

export default MaxHead
