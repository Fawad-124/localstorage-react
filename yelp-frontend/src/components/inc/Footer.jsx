import React from 'react'

function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="comm-footer-navs">
                            <h4>About</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Trust & Safety</a></li>
                                <li><a href="#">Content Guidelines</a></li>
                                <li><a href="#">Accessibility Statement</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Your Privacy Choices</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="comm-footer-navs">
                            <h4>Discover</h4>
                            <ul>
                                <li><a href="#">Yelp Project Cost Guides</a></li>
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">Talk</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Yelp Blog</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Yelp Mobile</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">RSS</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="comm-footer-navs">
                            <h4>Yelp for Business</h4>
                            <ul>
                                <li><a href="#">Yelp for Business</a></li>
                                <li><a href="#">Business Owner Login</a></li>
                                <li><a href="#">Claim your Business Page</a></li>
                                <li><a href="#">Advertise on Yelp</a></li>
                                <li><a href="#">Yelp for Restaurant Owners</a></li>
                                <li><a href="#">Table Management</a></li>
                                <li><a href="#">Business Success Stories</a></li>
                                <li><a href="#">Business Support</a></li>
                                <li><a href="#">Yelp Blog for Business</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="comm-footer-navs">
                            <h4>Languages</h4>
                            <ul>
                                <li><a href="#">English</a></li>
                            </ul>
                            <h4 className="mt-2">Countries</h4>
                            <ul>
                                <li><a href="#">United States</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer