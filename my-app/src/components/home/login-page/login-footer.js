import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import styles from '../../../assets/component.module.css/component.module.css';

const LoginFooter = () => {
  return (
    <div className={`${styles.width100} ${styles.bgWhite} ${styles.blackColour} ${styles.gap} ${styles.textCenter} ${styles.flexWrap} footer-tags` }>
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
