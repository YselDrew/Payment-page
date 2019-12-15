import React from "react";
import { Link } from "react-router-dom";

import annualImg from "../images/annual.png";

import "../styles/annualOffer.scss";

function AnnualPlanOffer(props) {
  const { isOpen, openOffer } = props;

  return (
    <div className="annual-container">
      <div className='annual-content'>
        <img src={annualImg} alt="#"></img>
        <span className='annual-content__title'>Annual plan</span>
        <span className='annual-content__price'>
          $39.00<span>/ year</span>
        </span>
        <span className='annual-content__text'>Your Premium plan will auto-renew. Cancel any time.</span>
      </div>
      {isOpen ? (
        <Link to="/" onClick={openOffer}>
          <input type="button" value="Change"></input>
        </Link>
      ) : (
        <Link to="/annual" onClick={openOffer}>
          <input className='annual-input__open' type="button" value="Get Started"></input>
        </Link>
      )}
    </div>
  );
}

export default AnnualPlanOffer;
