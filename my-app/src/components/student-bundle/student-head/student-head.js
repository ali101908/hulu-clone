import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import HuluStudent from '../hulu-student-bundle/hulu-student';
import '../student-bundle.css' // Import CSS for styling
import styles from '../../../assets/component.module.css/component.module.css';

const StudentHead = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate(); // Initialize navigation
  
	// Function to toggle menu visibility
	const toggleMenu = () => {
	  setIsMenuOpen(!isMenuOpen);
	};
  
	return (
	  <div className='student-container'>
		<div className={`${styles.spaceBetween}`}>
	
		 <Link to='/' > <h2 className={`${styles.themeColor} ${styles.textDecoration} logo`}>hulu</h2></Link>
  
		  
		  <button className='log-btn' onClick={() => navigate('/login')}>
			LOG IN
		  </button>
  
		  
		  {window.innerWidth <= 768 && (
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
  
		<HuluStudent />
	  </div>
	);
}

export default StudentHead
