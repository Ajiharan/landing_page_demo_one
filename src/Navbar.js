import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.scss";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isButtonShow, setButtonShow] = useState(true);

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="./home">PHCY</Link>
          <i className="fas fa-camera-retro"></i>
        </div>
        <div className="menu-icon">
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="./home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./home" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./home" className="nav-links">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./home" className="nav-links">
              Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./home" className="nav-links-mobile">
              Sign Up
            </Link>
          </li>
        </ul>
        {isButtonShow && <Button buttonStyle="btn--outline">SIGNUP</Button>}
      </div>
    </React.Fragment>
  );
};

export default Navbar;