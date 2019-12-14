import React from "react";
import { Link } from "react-router-dom";

function AnnualPlanOffer(props) {
  const { isOpen, openOffer } = props;
  return (
    <div>
      <span>Annual plan</span>
      <span>$39.00</span> <span>/ year</span>
      <span>Your Premium plan will auto-renew. Cancel any time.</span>
      {isOpen ? (
        <Link to="/" role="button" onClick={openOffer}>
          Change
        </Link>
      ) : (
        <Link to="/annual" role="button" onClick={openOffer}>
          Get Started
        </Link>
      )}
    </div>
  );
}

export default AnnualPlanOffer;
