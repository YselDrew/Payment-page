import React from "react"
import { Link } from "react-router-dom"

function OfferComponent() {
  return (
    <div>
      Offer1
      <Link to='/trial'>
        <input type="button" value="Get Started" />
      </Link>
      Offer2
      <Link to='/trial'>
        <input type="button" value="Get Started" />
      </Link>
    </div>
  )
}

export default OfferComponent
