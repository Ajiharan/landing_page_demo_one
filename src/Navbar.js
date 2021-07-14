import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.scss";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isButtonShow, setButtonShow] = useState(true);

  const closeMobileBtn = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 970) {
      setButtonShow(false);
    } else {
      setButtonShow(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const handleClick = () => setClick(!click);

  window.addEventListener("resize", showButton);

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="./home" className="navbar-logo" onClick={closeMobileBtn}>
            PHCY <i className="fas fa-camera-retro"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="./home" className="nav-links" onClick={closeMobileBtn}>
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="./home" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="./home" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="./home" className="nav-links">
                Offers
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="./home" className="nav-links-mobile">
                Sign Up
              </Link>
            </li>
          </ul>
          {isButtonShow && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
