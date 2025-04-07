import React from 'react';
import { Link } from 'react-router-dom';
// import './login.css';

const LoginFooter = () => {
  return (
    <div className='footer-tags'>
      <Link to="#" >About</Link>
      <Link to="#">
      Jobs</Link>
      <Link to="#">Help</Link>
      <Link to="#">About Ads</Link>
      <Link to="#">Terms of Use</Link>
      <Link to="#">Privacy Policy</Link>
      <p>© 2025 Hulu, LLC</p>
    </div>
  );
};

export default LoginFooter;
