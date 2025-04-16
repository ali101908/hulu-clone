import React from 'react'
import Header2 from './plans-header/header2'
import PricingSection from './pricing-section/pricing-section'
import Help from './plan-help/help'
import Footer2 from './plan-footer/footer2'
import styles from './../../assets/component.module.css/component.module.css';
import Breadcrumbs from './breadcrumb/breadcrumb'

const PlanAndPricing = () => {
  return (
	<div className={styles.width100}>
	  <Header2 />
	  <Breadcrumbs />
	  <PricingSection />
	  <Help />
	  <Footer2 />
	</div>
  )
}

export default PlanAndPricing
