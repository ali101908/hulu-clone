import React from 'react'
import '../home.css'
import heroImage from '../../../images/hero-img.png'
const HeroSection = () => {
  return (
	<div className='hero-container'>
	<div className='hero-logo'>
	  <h6>LIMITED TIME OFFER</h6>
	  <img src={heroImage} alt="Hulu Hero" width={300} height={100} />
	  </div>
	  <div>
	  <h1>Get Disney+ and Hulu (both <br/> with ads) for $2.99/month <br /> for 4 months</h1>
	  <p className='hero-content1'>Save 72% per month for 4 months on Disney+, Hulu <br /> Bundle Basic. Ends 3/30/25.</p>
	  </div>
	  <div className='hero-btn-container'>
	  <button className='hero-btn'>GET THIS DEAL</button>
	  </div>
	  <p className='hero-content'>Savings compared to the then-current regular monthly price of Disney+, Hulu Bundle Basic. Offer applies to ad-<br />supported Disney+, Hulu Bundle plan. Valid only for new and eligible returning Disney+, Hulu, and/or ESPN+ <br />subscribers, who are 18 years of age or older. <b> After 4-month promo period, Disney+, Hulu Bundle Basic auto-<br />renews at then-current monthly retail price ($10.99/mo (plus tax, where applicable)) until canceled. </b> Select<br /> Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available<br /> via Hulu app. Hulu content can be streamed via Disney+ on up to 2 devices simultaneously. Additional app<br /> feature and device restrictions apply. Offer valid until 11:59 PM PT on 3/30/25. <a href="#" >Additional terms apply..</a>©2025<br /> Disney and its related entities.</p>
	  </div>
	
  )
}

export default HeroSection
