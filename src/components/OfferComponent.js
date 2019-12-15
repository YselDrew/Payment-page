import React from "react";
import TrialOffer from "./TrialOffer.js";
import AnnualOffer from "./AnnualOffer.js";

function OfferComponent(props) {
  return (
    <div>
      <TrialOffer deadline={props.deadline} openOffer={props.openOffer} isOpen={props.isOfferOpen} />
      <AnnualOffer openOffer={props.openOffer} isOpen={props.isOfferOpen} />
    </div>
  );
}

export default OfferComponent;
