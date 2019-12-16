import React from "react";
import TrialOffer from "./TrialOffer.js";
import AnnualOffer from "./AnnualOffer.js";

import "../styles/components-containers.scss";

function OfferComponent(props) {
  return (
    <div className="offers-container">
      <TrialOffer
        deadline={props.deadline}
        openOffer={props.openOffer}
        isOpen={props.isOfferOpen}
      />
      <AnnualOffer openOffer={props.openOffer} isOpen={props.isOfferOpen} />
    </div>
  );
}

export default OfferComponent;
