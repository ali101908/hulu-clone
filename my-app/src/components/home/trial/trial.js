import React from 'react'
import './trial.css'

const Trial = () => {
  return (
	<div className='trial-container' style={{backgroundColor:"#0B0C0F"}}>
	  <p className='trial-head' style={{color:"#1CE783"}}>TRY HULU (WITH ADS) + LIVE TV FREE FOR 3 DAYS</p>
	  <h1 className='trial-head2' style={{color:"white"}}>Watch Live TV From 95+ Channels</h1>
	  <p className='trial-content' style={{color:"white"}}>Get top national and local channels on Hulu (With Ads) + Live TV with your favorite live <br /> sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store <br /> Live TV recordings for up to nine months and fast-forward through your DVR content. <br /> Includes access to endless entertainment with Disney+ and live sports with ESPN+.</p>
	  <button className='trial-btn' style={{backgroundColor:"#1CE783"}}>START YOUR FREE TRIAL</button>
	  <p className='trial-footer-content' style={{color:"gray"}}>Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if any) unless canceled. Cancel anytime. Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to <br /> watch certain content. Offer valid for eligible subscribers only. <a href='#' style={{color:"gray"}}>See details.</a></p>
	  <div className='trial-footer-link'>
		<a href='#' style={{color:"silver"}}>VIEW CHANNELS IN YOUR AREA →</a>
	  </div>
	</div>
  )
}

export default Trial
