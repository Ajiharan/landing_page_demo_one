import React from "react";
import CardItem from "./CardItem";
import "./Card.scss";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Checkout These Epic Places</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-items">
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-900,h-900/i1"
              text="Explore the hidden Tree deep inside the Amazon Jungle"
              label="Wild Photography"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-900,h-900/i2"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="In Bali"
              path="/services"
            />
          </div>
          <div className="cards-items">
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i3"
              text="Ride through the Jungle  on a guided camel tour"
              label="In Jungle"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i4"
              text="Take different shots with Modern Cameras"
              label="Modern Cameras"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i5"
              text="Happiest Moment when Take a Picture"
              label="Instant Shot"
              path="/services"
            />
            <CardItem
              src="https://ik.imagekit.io/nqx4uepqs3i/tr:w-500,h-500/i8"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Popularity"
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
