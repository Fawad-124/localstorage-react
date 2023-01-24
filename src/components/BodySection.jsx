import React from 'react'
import line from '../imgs/line.png'
import resturant from '../imgs/resturant.png'
import shopping from '../imgs/shopping.png'
import night from '../imgs/night.png'
import active from '../imgs/active.png'
import beauty from '../imgs/beauty.png'
import automotive from '../imgs/automotive.png'
import home from '../imgs/home.png'
import more from '../imgs/more.png'
// import img from 'next/img'



function BodySection() {
  return (
    <>
        <section className="category">
        <div className="container">
            <h3 className="category-heading-text" style={{display: 'flex', flexDirection: 'row'}}>OUR MAIN<span class="orange">&nbsp;CATEGORIES</span> 

            <img 
                src={line} 
                alt="line"
                height={34} 
                width={268}
                style={{position: "absolute",
                    width: "268px",
                    right: "-10px",
                    bottom: "-18px",
                    
                }}
            />
                </h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <img 
                src={resturant} 
                alt="restaurant logo"
                height={50} 
                width={50}
            />
                            </div>
                        <h5>resturant</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img"><img 
                src={shopping} 
                alt="shopping logo"
                height={50} 
                width={50}
            /></div>
                        <h5>shopping</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img"><img 
                src={night} 
                alt="night logo"
                height={50} 
                width={50}
            /></div>
                        <h5>nightlife</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img"><img 
                src={active} 
                alt="active logo"
                height={50} 
                width={50}
            /></div>
                        <h5>active life</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <img 
                src={beauty} 
                alt="beauty logo"
                height={50} 
                width={50}
            />
                            </div>
                        <h5>Beauty & Spa</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <img 
                            src={automotive} 
                            alt="Logo"
                            height={50} 
                            width={50}
            />                        </div>
                        <h5>Automotive</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <img 
                src={home} 
                alt="home logo"
                height={50} 
                width={50}
            />                        </div>
                        <h5>Home Services</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <img 
                src={more} 
                alt="more logo"
                height={50} 
                width={50}
            />
                        </div>
                        <h5>more</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BodySection