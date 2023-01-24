import React from 'react'
import Footer from '../components/inc/Footer'
import Header from '../components/inc/Header'
import Banner from '../components/Banner'
import BodySection from '../components/BodySection'

function Homepage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <BodySection/>
        <Footer/>
    </div>
  )
}

export default Homepage