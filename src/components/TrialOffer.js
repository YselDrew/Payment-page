import React from "react";
import { Link } from "react-router-dom";

import Timer from "./Timer.js";
import trialImg from "../images/trial.png";
import "../styles/trialOffer.scss";

function TrialOffer(props) {
  const { isOpen, openOffer } = props;
  return (
    <div className={isOpen ? "opened-trial-container" : "trial-container"}>
      <Timer isOpen={isOpen}/>
      <img src={trialImg} alt="#"></img>
      <div className={isOpen ? "opened-trial-content" : "trial-content"}>
        <span
          className={
            isOpen ? "opened-trial-content__title" : "trial-content__title"
          }
        >
          Trial
        </span>
        <span
          className={
            isOpen
              ? "opened-trial-content__suggestion"
              : "trial-content__suggestion"
          }
        >
          The first week only for
        <span
          className={
            isOpen ? "opened-trial-content__price" : "trial-content__price"
          }
        >
          $0.99
        </span>
        </span>
        <span
          className={
            isOpen ? "opened-trial-content__text" : "trial-content__text"
          }
        >
          Rebills at $8.99 per month after your trial is completed.
        </span>
      </div>

      {isOpen ? (
        <Link to="/" onClick={openOffer}>
          <input
            className="trial-input__close"
            type="button"
            value="Change"
          ></input>
        </Link>
      ) : (
        <Link to="/trial" onClick={openOffer}>
          <input
            className="trial-input__open"
            type="button"
            value="Get Started"
          ></input>
        </Link>
      )}
    </div>
  );
}

export default TrialOffer;
