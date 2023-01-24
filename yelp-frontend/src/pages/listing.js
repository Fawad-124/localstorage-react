import React from 'react'
import BodySection from '../components/BodySection'
import Footer from '../src/inc/Footer'
import Header from '../src/inc/Header'
import ListingBody from '../src/components/ListingBody'
import Tabs from '../src/components/Tabs'
import { useRouter } from 'next/router'

function ListingPage() {
  const router = useRouter()
  const { id } = router.query
  console.log(id);
  return (
    <>
        <Header/>
        <Tabs/>
        <ListingBody id={id}/>
        <BodySection/>
        <Footer/>
    </>
  )
}

export default ListingPage