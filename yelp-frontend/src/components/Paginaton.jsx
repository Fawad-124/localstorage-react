import React from 'react'
import Image from 'next/image';
import arrowLeft from '/public/imgs/icons/arrowLeft.png';
import arrowRight from '/public/imgs/icons/arrowRight.png';
function Paginaton() {
  return (
    <div className="theme-pagination">
        <ul>
            <li><a href="#"><Image src={arrowLeft} alt="..." width="6" height="12"/></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#"><Image src={arrowRight} alt="..." width="6" height="12"/></a></li>
        </ul>
    </div>
  )
}

export default Paginaton