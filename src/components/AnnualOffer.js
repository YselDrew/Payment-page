import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import annualImg from "../images/annual.png";

import "../styles/annualOffer.scss";

function AnnualPlanOffer({ location }) {
  const isOpen = location.pathname === '/annual'
  return (
    <div className={isOpen ? "opened-annual-container" : "annual-container"}>
      <img src={annualImg} alt="#"></img>
      <div className={isOpen ? "opened-annual-content" : "annual-content"}>
        <span
          className={
            isOpen ? "opened-annual-content__title" : "annual-content__title"
          }
        >
          Annual plan
        </span>
        <span
          className={
            isOpen ? "opened-annual-content__price" : "annual-content__price"
          }
        >
          $39.00<span> / year</span>
        </span>
        <span
          className={
            isOpen ? "opened-annual-content__text" : "annual-content__text"
          }
        >
          Your Premium plan will auto-renew. Cancel any time.
        </span>
      </div>
      {isOpen ? (
        <Link to="/">
          <input
            className="annual-input__close"
            type="button"
            value="Change"
          ></input>
        </Link>
      ) : (
        <Link to="/annual">
          <input
            className="annual-input__open"
            type="button"
            value="Get Started"
          ></input>
        </Link>
      )}
    </div>
  );
}

export default withRouter(AnnualPlanOffer);
