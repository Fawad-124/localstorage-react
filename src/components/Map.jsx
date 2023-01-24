import Image from 'next/image'
import React from 'react'
import maps from '/public/imgs/maps.png';
function Map() {
  return (
    <div className="col-md-4">
        <div className="dummy-map">
            <Image src={maps} alt="..."/>
        </div>
    </div>
  )
}

export default Map