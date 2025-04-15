import React from 'react'
import Header1 from './bundle-header/header1'
import Categories from './categories/categories'
import MoviesBox from './movies-box/movies-box'
import Footer from '../home/footer/footer'
import Work from './work-portion/work'
import Faq from './frequently-asked-questions/faq'
import GreenBg from './green-bg/greenBg'
const Bundle = () => {
  return (
	<div>
	  <Header1 />
	  <Categories />
	  <GreenBg />
	  <MoviesBox />
	  <Work />
	  <Faq />
	  <Footer />
	</div>
  )
}

export default Bundle
