import React from "react";
import { Link } from "react-router-dom";
import FormComponent from "./FormComponent";

function TrialOffer(props) {
  return (
    <div>
      <div>
        <span>LIMITED SUMMER OFFER</span>
        TIMER
      </div>
      <span>Trial</span>
      <span>The first week only for</span>
      <span>$0.99</span>
      <span>Rebills at $8.99 per month after your trial is completed.</span>
      <Link to="/">
        <input type="button" value="Change" />
      </Link>

      <FormComponent />
    </div>
  );
}

export default TrialOffer;
