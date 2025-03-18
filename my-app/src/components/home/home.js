import React from 'react'
import Header from './header/header'
import Show from './shows/show'
import Footer from './footer/footer'
import Newssection from './news-section/news-section'

const HomePage = () => {
  return (
	<div>
	  <Header />
	  <Show />
	  <Newssection />
	  <Footer />
	</div>
  )
}

export default HomePage
