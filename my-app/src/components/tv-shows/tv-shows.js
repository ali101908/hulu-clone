import React from 'react'
import Footer from '../home/footer/footer'
import FormPage from './form-page/form-page'
import ToastPage from './toast-page/toastPage'
import HeadNav from './nav/navbar'
import Accord from './accord/accord'
import Stats from './stats/stats'

const TvShows = () => {
  return (
    <div>
    <HeadNav />
    <Accord />
      <FormPage /> 
      <Stats />
      <ToastPage />
      <Footer />
    </div>
  )
}

export default TvShows
