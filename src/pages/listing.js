import React from 'react'
import Footer from '../components/inc/Footer'
import Header from '../components/inc/Header'
import ListingBody from '../components/ListingBody'
import Tabs from '../components/Tabs'
import { useParams } from "react-router-dom";
function ListingPage() {
const {id} = useParams();
console.log((id,'id:'));
  return (
    <>
        <Header/>
        <Tabs/>
        <ListingBody id= {id} />
        <Footer/>
    </>
  )
}
export default ListingPage