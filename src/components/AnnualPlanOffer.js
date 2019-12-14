import React from "react";
import { Link } from "react-router-dom";
import FormComponent from "./FormComponent";

function AnnualPlanOffer() {
  return (
    <div>
      <span>Annual plan</span>
      <span>$39.00</span> <span>/ year</span>
      <span>Your Premium plan will auto-renew. Cancel any time.</span>
      <Link to="/">
        <input type="button" value="Change" />
      </Link>
      <FormComponent />
    </div>
  );
}

export default AnnualPlanOffer;
