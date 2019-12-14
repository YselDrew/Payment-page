import React from "react";
import { Link } from "react-router-dom";

function OfferComponent() {
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
      <Link to="/trial">
        <input type="button" value="Get Started" />
      </Link>
      <span>Annual plan</span>
      <span>$39.00</span> <span>/ year</span>
      <span>Your Premium plan will auto-renew. Cancel any time.</span>
      <Link to="/annual">
        <input type="button" value="Get Started" />
      </Link>
    </div>
  );
}

export default OfferComponent;
