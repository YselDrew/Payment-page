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
      seconds: undefined
    };

    this.timer = 0;
  }

  trialDeadline = () => {
    const milisecInSecond = 1000;
    const deadline = new Date("Dec 18, 2019 23:59:59").getTime();
    const today = new Date().getTime();
    const timeLeft = Math.floor((deadline - today) / milisecInSecond);
    console.log(timeLeft);

    return timeLeft;
  };

  countDown = () => {
    const seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  };

  openOffer = () => {
    this.setState({
      isOfferOpen: !this.state.isOfferOpen
    });
  };

  componentDidMount() {
    const timeLeft = this.trialDeadline();
    this.setState({
      seconds: timeLeft
    });
    this.timer = setInterval(this.countDown, 1000);
  }

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
                    seconds={this.state.seconds}
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
                    seconds={this.state.seconds}
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
