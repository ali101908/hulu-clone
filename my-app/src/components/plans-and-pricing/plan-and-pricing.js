import React from 'react'
import './plan-and-pricing.css'
import Header2 from './plans-header/header2'
import PricingSection from './pricing-section/pricing-section'
import Help from './plan-help/help'
import Footer2 from './plan-footer/footer2'

const PlanAndPricing = () => {
  return (
	<div className='plan-and-pricing-container'>
	  <Header2 />
	  <PricingSection />
	  <Help />
	  <Footer2 />
	</div>
  )
}

export default PlanAndPricing
