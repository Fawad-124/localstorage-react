import React from 'react'
import founder from '../imgs/founder.png';

export default function Founder() {
  return (
    <section class="about-founders">
    <div class="container">
        <div class="about-founder-content">
            <h3>Founders</h3>
            <div class="row">
                <div class="col-md-4">
                    <div class="founder-box">
                        <img src={founder} alt="..."/>
                        <h4>Joe Gebbia</h4>
                        <p>Co-founder and Chairman of Airbnb.org</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
