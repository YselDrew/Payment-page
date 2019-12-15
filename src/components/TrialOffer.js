import React from "react";
import { Link } from "react-router-dom";

import Timer from "./Timer.js";
import trialImg from "../images/trial.png";
import "../styles/trialOffer.scss";

function TrialOffer(props) {
  const { isOpen, openOffer } = props;
  return (
    <div className="trial-container">
        <Timer />
      <div className="trial-content">
        <img src={trialImg} alt="#"></img>
        <span className='trial-content__title'>Trial</span>
        <span className='trial-content__suggestion'>The first week only for</span>
        <span className='trial-content__price'>$0.99</span>
        <span className='trial-content__text'>Rebills at $8.99 per month after your trial is completed.</span>
      </div>

      {isOpen ? (
        <Link to="/" onClick={openOffer}>
          <input type="button" value="Change"></input>
        </Link>
      ) : (
        <Link to="/trial" onClick={openOffer}>
          <input className='trial-input__open' type="button" value="Get Started"></input>
        </Link>
      )}
    </div>
  );
}

export default TrialOffer;
