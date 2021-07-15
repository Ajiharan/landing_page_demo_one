import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="./home" className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
