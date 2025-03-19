import React from 'react'
import Header from './header/header'
import Show from './shows/show'
import Footer from './footer/footer'
import Newssection from './news-section/news-section'
import Plan from './plan/plan'
import Pricing from './pricing/pricing'

const HomePage = () => {
  return (
	<div>
	  <Header />
	  <Show />
	  <Newssection />
	  <Plan />
	  <Pricing />
	  <Footer />
	</div>
  )
}

export default HomePage
