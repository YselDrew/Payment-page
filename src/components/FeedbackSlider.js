import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { feedback } from "../data.js";

import "../styles/feedbackSlider.scss";

const feedbackElement = feedback.map(item => (
  <div key={item.id} className="slide">
    <img src={item.img} alt="#"></img>
    <div className="text">
      <span className="name">{item.name}</span>
      <span className="quote">{item.text}</span>
    </div>
  </div>
));

class FeedbackSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000 
    };

    return <Slider {...settings}>{feedbackElement}</Slider>;
  }
}

export default FeedbackSlider;
