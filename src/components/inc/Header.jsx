import React from 'react'
// import Image from 'next/image'
import LOGO from '../../imgs/LOGO.png'
import {Link } from 'react-router-dom';
function Header() {
    
  return (
    <>
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img 
                            src={LOGO} 
                            alt="Logo"
                            width={216}
                    />
                    </a> 
                    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">For Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Write a Review</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to="/login" className="btn-nav-login">Login</Link>
                            <Link to="/signup" className="btn-nav">Sign Up</Link>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header