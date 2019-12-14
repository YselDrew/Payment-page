import React from "react";
import TrialOffer from "./TrialOffer.js";
import FormComponent from "./FormComponent";

function TrialForm(props) {
  return (
    <div>
      <TrialOffer openOffer={props.openOffer} isOpen={props.isOfferOpen} />
      <FormComponent />
    </div>
  );
}

export default TrialForm;
