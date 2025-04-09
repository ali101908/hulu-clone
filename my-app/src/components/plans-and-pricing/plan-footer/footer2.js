import React from 'react'
import { Link } from 'react-router-dom'
import './plan-foot.css'
import styles from '../../../assets/component.module.css/component.module.css';

const Footer2 = () => {
  return (
	<div className={`${styles.widthFull} plan-footer`}>
	<h1 className={`${styles.textCenter} ${styles.themeColor} plan-foot-title`}>hulu</h1>
	  <div className='plan-footer-section'>
	  <div className={`${styles.flexWrap} ${styles.gap} plan-foot-tag`}>
	  <Link to='#'>About Ads</Link>
      <Link to='#'>Subscriber Agreement</Link>
      <Link to='#'>Privacy Policy</Link>
      <Link to='#'>Do Not Sell or Share My Personal Information</Link>
      <Link to='#'>Your US State Privacy Rights</Link>
	  </div>
	<p className={`${styles.fontGray} ${styles.textCenter}`}> © 2025 Hulu, LLC</p>
	  </div>
	</div>
  )
}

export default Footer2
