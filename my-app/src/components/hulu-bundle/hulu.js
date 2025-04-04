import React from 'react'
import Header from '../home/header/header'
import Plan from '../home/plan/plan'
import Pricing from '../home/pricing/pricing'
import Faq from '../bundle-pages/frequently-asked-questions/faq'
import Footer from '../home/footer/footer'
import MaxMovies from '../max-bundle/max-movies/max-movies'
import MaxWork from '../max-bundle/max-work/max-work'

const Hulu = () => {
  return (
	<div>
	  <Header />
	  <MaxMovies/>
	  <MaxWork />
	  <Plan />
	  <Pricing />
	  <Faq />
	  <Footer />
	</div>
  )
}

export default Hulu
