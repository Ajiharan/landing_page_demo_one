import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ path, src, label, text }) => {
  return (
    <div className="card-item">
      <Link to={path} className="card-item-link">
        <figure className="card-item-pic-wrap" data-category={label}>
          <img alt="Travel" src={src} className="card-item-image" />
        </figure>
        <div className="card-item-info">
          <h5 className="card-item-text">{text}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
