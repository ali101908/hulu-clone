import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../plan-and-pricing.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../../assets/component.module.css/component.module.css';
const Header2 = () => {
 

  return (
    <div className={`${styles.spaceEvenly} ${styles.whiteColour} plan-nav-container`}>
      <div className={`${styles.daCenter} plan-nav`}>
        <span>
          <Link to='/'>hulu</Link>
          <button className={`${styles.bgWhite} ${styles.marginRight} ${styles.fontBlack} ${styles.hover}`}>Help Center</button>
        </span>

        <ul className={styles.dFlex}>
          <li><Link to='#'>Home</Link></li>
          <li><Link to='#'>Help Topics</Link></li>
          <li><Link to='#'>Contact Us</Link></li>
        </ul>
      </div>

      <div className={`${styles.daCenter} nav-search-bar`}>
        <div className='search-input-container' >
          <FaSearch className="search-icon" />
          <input className={styles.bgWhite} type='text' placeholder='Enter a question or topic' />
        </div>

        <button className={styles.fontWhite14px}>Log In</button>
      </div>
    </div>
  );
};

export default Header2;
