import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner'
import AboutUsParagraph from '../components/AboutUsParagraph'
import BodySection from '../components/BodySection'
import Facts from '../components/Facts'
import Founder from '../components/Founder'
import Footer from '../components/inc/Footer'
import Header from '../components/inc/Header'

function AboutUs() {
  return (
    <>
        <Header/>
        <AboutUsBanner/>
        <AboutUsParagraph/>
        <Facts/>
        <Founder/>
        <BodySection/>
        <Footer/>
    </>
  )
}

export default AboutUs