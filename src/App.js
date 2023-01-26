import React from 'react'
import Homepage from './pages/homepage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Routes , Route, BrowserRouter } from "react-router-dom" 
import ListingPage from './pages/listing';
import Login from './pages/login';
import Signup from './pages/signup';
import AboutUs from './pages/AboutUsPage';


function App() {
  return (
    <>
        {/* <Homepage/> */}
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage/> } /> 
            <Route path="/listing/:id" element={<ListingPage/> } /> 
            <Route path="/login" element={<Login/> } /> 
            <Route path="/signup" element={<Signup/> } /> 
            <Route path="/aboutus" element={<AboutUs/> } /> 


        </Routes>
        </BrowserRouter>
        </>
  )
}

export default App