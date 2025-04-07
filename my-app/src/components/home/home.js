import React from 'react'
import Header from './header/header'
import Show from './shows/show'
import Footer from './footer/footer'
import Newssection from './news-section/news-section'
import Plan from './plan/plan'
import Pricing from './pricing/pricing'
import Trial from './trial/trial'

const HomePage = () => {
  return (
	<div>
	  <Header />
	  <Show />
	  <Trial />
	  <Newssection />
	  <Plan />
	  <Pricing />
	  <Footer />
	</div>
  )
}

export default HomePage
