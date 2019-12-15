import React from "react";
import AnnualOffer from "./AnnualOffer.js";
import FormComponent from "./FormComponent";

import '../styles/components-containers.scss'

function TrialForm(props) {
  return (
    <div className='annual-form-container'>
      <AnnualOffer openOffer={props.openOffer} isOpen={props.isOfferOpen} />
      <FormComponent />
    </div>
  );
}

export default TrialForm;
