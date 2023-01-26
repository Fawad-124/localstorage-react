import React from 'react'
import {Link} from 'react-router-dom';
import LOGO from '../../imgs/LOGO.png'
function Footer() {
  return (
    <>
        <footer class="footer">
        <div class="footer-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="comm-footer-navs">
                            <Link to="/" class="brand-footer"><img src={LOGO} alt="..." /></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet fermentum enim. Sed lorem eros, sollicitudin nec nisl sit amet, iaculis mollis ligula.</p>
                            <div class="footer-social-icons d-none">
                                <Link to="#" class="ico-anchor"><img src="" alt="..."/></Link>
                                <Link to="#" class="ico-anchor"><img src="" alt="..."/></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="comm-footer-navs">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="#">Our Blog</Link></li>
                                <li><Link to="#">Support</Link></li>
                                <li><Link to="#">Terms of Service</Link></li>
                                <li><Link to="#">Developers</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="comm-footer-navs">
                            <h4>Languages</h4>
                            <ul>
                                <li><Link to="#">English</Link></li>
                            </ul>
                            <h4 class="mt-2">Countries</h4>
                            <ul>
                                <li><Link to="#">United States</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="comm-footer-navs">
                            <h4>Contact</h4>
                            <ul>
                                <li><Link to="#">1 Sleepy Hollow Drive Wilkes Barre PA 18702</Link></li>
                                <li><Link to="#">info@newlogo.net</Link></li>
                                <li><Link to="#">+1-202-555-0189</Link></li>
                                <li><Link to="#">+1-202-555-0116</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lower-footer" >
            © 2023 newlogo. All Rights Reserved
        </div>
    </footer>

    </>
  )
}

export default Footer