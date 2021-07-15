import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.scss";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isButtonShow, setButtonShow] = useState(true);
  const [isScroll, setScroll] = useState(false);

  const closeMobileBtn = () => setClick(false);

  const showButton = useCallback(() => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 970) {
      setButtonShow(false);
    } else {
      setButtonShow(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [showButton]);

  const handleClick = () => setClick(!click);

  return (
    <React.Fragment>
      <div className={`navbar ${isScroll ? " navbar-scroll" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileBtn}>
            PHCY <i className="fas fa-camera-retro"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileBtn}>
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="/" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="/" className="nav-links">
                Offers
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileBtn}>
              <Link to="/" className="nav-links-mobile">
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
