import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../plan-and-pricing.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header2 = () => {
 

  return (
    <div className='plan-nav-container'>
      <div className='plan-nav'>
        <span>
          <Link to='/'>hulu</Link>
          <button>Help Center</button>
        </span>

        {/* Menu Toggle Button */}
        {/* <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button> */}

        {/* Navigation Menu */}
        <ul>
          <li><Link to='#'>Home</Link></li>
          <li><Link to='#'>Help Topics</Link></li>
          <li><Link to='#'>Contact Us</Link></li>
        </ul>
      </div>

      {/* Search Icon for Mobile */}
      <div className='nav-search-bar'>
        {/* <FaSearch className="search-icon-container" onClick={() => setSearchOpen(!searchOpen)} /> */}

        {/* Search Input (Hidden by Default) */}
        <div className='search-input-container' >
          <FaSearch className="search-icon" />
          <input type='text' placeholder='Enter a question or topic' />
        </div>

        <button>Log In</button>
      </div>
    </div>
  );
};

export default Header2;
