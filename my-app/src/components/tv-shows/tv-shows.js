import React from 'react'
import Footer from '../home/footer/footer'
import FormPage from './form-page/form-page'
// import Header1 from '../bundle-pages/bundle-header/header1'
import ToastPage from './toast-page/toastPage'
import HeadNav from './nav/navbar'
import Accord from './accord/accord'

const TvShows = () => {
  return (
    <div>
    <HeadNav />
    {/* <ToastPage /> */}
    <Accord />
      <FormPage /> 
      <Footer />
    </div>
  )
}

export default TvShows
