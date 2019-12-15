import React from "react";
import { Link } from "react-router-dom";

import Timer from "./Timer.js"

function TrialOffer(props) {
  const { isOpen, openOffer } = props;
  return (
    <div>
      <div>
        <span>LIMITED SUMMER OFFER</span>
        <Timer />
      </div>
      <span>Trial</span>
      <span>The first week only for</span>
      <span>$0.99</span>
      <span>Rebills at $8.99 per month after your trial is completed.</span>

      {isOpen ? (
        <Link to="/" onClick={openOffer}>
          <input type='button' value='Change'></input>
        </Link>
      ) : (
        <Link to="/trial" onClick={openOffer}>
          <input type='button' value='Get Started'></input>
          {/* Get Started */}
        </Link>
      )}
    </div>
  );
}

export default TrialOffer;
