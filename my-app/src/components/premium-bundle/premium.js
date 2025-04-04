import React from 'react'
import Header1 from '../bundle-pages/bundle-header/header1'
import Categories from '../bundle-pages/categories/categories'
import MoviesBox from '../bundle-pages/movies-box/movies-box'
import Work from '../bundle-pages/work-portion/work'
import Faq from '../bundle-pages/frequently-asked-questions/faq'
import Footer from '../home/footer/footer'

const Premium = () => {
  return (
	<div>
	   <Header1 />
	  <Categories />
	  <MoviesBox />
	  <Work />
	  <Faq />
	  <Footer />
	</div>
  )
}

export default Premium
