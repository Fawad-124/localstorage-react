import React from 'react'
import arrowLeft from '../imgs/icons/arrowLeft.png';
import arrowRight from '../imgs/icons/arrowRight.png';
function Paginaton() {
  return (
    <div className="theme-pagination">
        <ul>
            <li><a href="#"><img src={arrowLeft} alt="..." width="6" height="12"/></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#"><img src={arrowRight} alt="..." width="6" height="12"/></a></li>
        </ul>
    </div>
  )
}

export default Paginaton