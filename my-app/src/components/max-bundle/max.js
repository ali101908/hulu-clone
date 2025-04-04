import React from 'react'

import Plan from '../home/plan/plan'
import Pricing from '../home/pricing/pricing'
import Faq from '../bundle-pages/frequently-asked-questions/faq'
import Iconic from './iconic-max/iconic'
import Footer from '../home/footer/footer'
import MaxMovies from './max-movies/max-movies'
import MaxWork from './max-work/max-work'
import MaxHead from './max-header/max-head'

const Max = () => {
  return (
	<div>
	    <MaxHead />
		<Iconic />
	  <MaxMovies />
	  <MaxWork />
	  <Plan />
	  <Pricing />
	  <Faq />
	  <Footer />
	</div>
  )
}

export default Max
