import React from "react";
import AnnualOffer from "./AnnualOffer.js";
import FormComponent from "./FormComponent";

function TrialForm(props) {
  return (
    <div>
      <AnnualOffer openOffer={props.openOffer} isOpen={props.isOfferOpen} />
      <FormComponent />
    </div>
  );
}

export default TrialForm;
