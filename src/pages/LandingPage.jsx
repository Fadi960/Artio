import React from 'react'

import Index from '../components/home/Index'
import Header from '../client-layout/Header'
import Footer from '../client-layout/Footer'

const LandingPage = () => {
  return (
    <>
    <div className='min-h-screen bg-[#12151e]'>
      <Header/>
      <Index/>
      <Footer/>
    </div>
    </>
  )
}

export default LandingPage
