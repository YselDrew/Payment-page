import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import TrialOffer from "./components/TrialOffer";
import AnnualOffer from "./components/AnnualOffer";
import FormComponent from "./components/FormComponent";
import Suggestions from "./components/Suggestions";
import FeedbackSlider from "./components/FeedbackSlider";
import Footer from "./components/Footer";

import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
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
                component={() => (
                  <div className="offers-container">
                    <TrialOffer />
                    <AnnualOffer />
                  </div>
                )}
              />
              <Route
                path="/trial"
                render={() => (
                  <div className="form-container">
                    <TrialOffer />
                    <FormComponent />
                  </div>
                )}
              />
              <Route
                path="/annual"
                component={() => (
                  <div className='form-container'>
                    <AnnualOffer />
                    <FormComponent />
                  </div>
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
