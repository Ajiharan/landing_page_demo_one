import React from "react";
import Button from "./Button";
import "./HeadSection.scss";
const HeadSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/v4.mp4" autoPlay loop muted></video>
      <h1>MOMENTS CAPTURED MEMORIES</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH VIDEO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeadSection;
