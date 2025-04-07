import React from 'react'
import { Link } from 'react-router-dom'
import './plan-foot.css'
const Footer2 = () => {
  return (
	<div className='plan-footer'>
	<h1 className='plan-foot-title'>hulu</h1>
	  <div className='plan-footer-section'>
	  <div className='plan-foot-tag'>
	  <Link to='#'>About Ads</Link>
      <Link to='#'>Subscriber Agreement</Link>
      <Link to='#'>Privacy Policy</Link>
      <Link to='#'>Do Not Sell or Share My Personal Information</Link>
      <Link to='#'>Your US State Privacy Rights</Link>
	  </div>
	<p className='plan-copyright'> © 2025 Hulu, LLC</p>
	  </div>
	</div>
  )
}

export default Footer2
