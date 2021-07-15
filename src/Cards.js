import React from "react";
import CardItem from "./CardItem";
import "./Card.scss";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Checkout These Epic Destinations</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-items">
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-900,h-900/i1"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-900,h-900/i2"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </div>
          <div className="cards-items">
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i3"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i4"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i5"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Mysterey"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i4"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
