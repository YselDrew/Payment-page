import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./Header.js"
import OfferComponent from "./OfferComponent.js"
import FormComponent from "./FormComponent.js"
import FeedbackSlider from "./FeedbackSlider.js"
import Footer from "./Footer.js"

function SubscriptionPage() {
  return (
    <Router>
      <div>
        <Header />
        <span>
          Your profile is ready. Get your personalized cover letter now for less
          than the price of a cup of coffee and improve your career.
        </span>

        <div>
          <Switch>
            <Route path="/" exact component={OfferComponent} />
            <Route path="/trial" component={FormComponent} />
            <Route path="/annual" component={FormComponent} />
          </Switch>
          <div>Best Price Guaranteed</div>
        </div>
        <FeedbackSlider />
        <Footer />
      </div>
    </Router>
  )
}

export default SubscriptionPage
