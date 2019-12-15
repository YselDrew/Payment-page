import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import OfferComponent from "./components/OfferComponent.js";
import TrialForm from "./components/TrialForm.js";
import AnnualForm from "./components/AnnualForm.js";
import FeedbackSlider from "./components/FeedbackSlider.js";
import Footer from "./components/Footer.js";

import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOfferOpen: false,
    };
  }

  openOffer = () => {
    this.setState({
      isOfferOpen: !this.state.isOfferOpen
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <span>
            Your profile is ready. Get your personalized cover letter now for
            less than the price of a cup of coffee and improve your career.
          </span>

          <div>
            <Switch>
              <Route
                path="/"
                exact
                component={props => (
                  <OfferComponent
                    {...props}
                    openOffer={this.openOffer}
                    isOfferOpen={this.state.isOfferOpen}
                  />
                )}
              />
              <Route
                path="/trial"
                render={props => (
                  <TrialForm
                    {...props}
                    openOffer={this.openOffer}
                    isOfferOpen={this.state.isOfferOpen}
                  />
                )}
              />
              <Route
                path="/annual"
                component={props => (
                  <AnnualForm
                    {...props}
                    openOffer={this.openOffer}
                    isOfferOpen={this.state.isOfferOpen}
                  />
                )}
              />
            </Switch>
            <div>Best Price Guaranteed</div>
          </div>
          <FeedbackSlider />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
