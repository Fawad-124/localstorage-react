import React from 'react'
import BodySection from '../components/BodySection'
import Footer from '../components/inc/Footer'
import Header from '../components/inc/Header'
import ListingBody from '../components/ListingBody'
import Tabs from '../components/Tabs'
// import { useRouter } from 'next/router'

function ListingPage() {
  // const router = useRouter()
  // const { id } = router.query
  // console.log(id);
  return (
    <>
        <Header/>
        <Tabs/>
        <ListingBody/>
        <BodySection/>
        <Footer/>
    </>
  )
}

export default ListingPage