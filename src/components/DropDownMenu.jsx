import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import './style.css'


export default function DropDownMenu(props) {
  const { title, data_array } = props
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Dropdown className=".sub-nav-banner"
      onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
      
      
    >
      <Dropdown.Toggle
        className="main-style"
        id="dropdown-basic"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '0px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '10px',
          fontWeight: 'normal',

        }}
      >
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu show={showDropdown}>

        {data_array?.map((ele) => {
          const url = `listing/${ele[1]}`
          console.log(ele,"here is id");
          return (

            <Dropdown.Item>
              <a href={url}>

              {ele[0]}
              </a>
            </Dropdown.Item>

          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

