import React, { useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowDown from "../imgs/icons/arrowdown.png";
export default function DropDownMenu(props) {
  const [show, setShow] = useState(false);
  const { title, data_array } = props;
  return (
    <Navbar bsPrefix="pull-left">
      <NavDropdown
        
        title={
          <div>
            {title}
            <img className="thumbnail-image" src={ArrowDown} />
          </div>
        }
        show={show}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          border: "none",
          borderRadius: "0px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "10px",
          fontWeight: "normal",
          color: "#fff",
        }}
      >
        {data_array.map((ele) => {
          const url = `/listing/${ele[1]}`;
          return (
            
              <NavDropdown.Item bsPrefix="btn-nav-drop">
                <Link to={url} style={{ color: "white" }}>
                  {ele[0]}
                </Link>
              </NavDropdown.Item>
           
          );
        })}
      </NavDropdown>
    </Navbar>
  );
}
