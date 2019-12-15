import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import OfferComponent from "./components/OfferComponent.js";
import TrialForm from "./components/TrialForm.js";
import AnnualForm from "./components/AnnualForm.js";
import Suggestions from "./components/Suggestions.js";
import FeedbackSlider from "./components/FeedbackSlider.js";
import Footer from "./components/Footer.js";

import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOfferOpen: false
    };
  }

  componentDidMount() {
    if (window.location.pathname !== '/') {
      this.openOffer()
    }
  }

  openOffer = () => {
    this.setState({
      isOfferOpen: !this.state.isOfferOpen
    });
  };

  render() {
    return (
      <Router>
        <Header />
        <div className="App">
          <span className="page-title">
            Your profile is ready. Get your personalized cover letter now for
            less than the price of a cup of coffee and improve your career.
          </span>

          <div className="offers">
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
            <Suggestions />
          </div>
          <FeedbackSlider />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
