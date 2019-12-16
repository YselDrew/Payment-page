import React from "react";
import TrialOffer from "./TrialOffer.js";
import FormComponent from "./FormComponent";

import "../styles/components-containers.scss";

function TrialForm(props) {
  return (
    <div className="form-container">
      <TrialOffer openOffer={props.openOffer} isOpen={props.isOfferOpen} />
      <FormComponent />
    </div>
  );
}

export default TrialForm;
