import React, { Component } from "react";

import "../styles/timer.scss";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 0
    };

    this.timer = 0;
  }

  secondsToTime(secs) {
    const days = Math.floor(secs / (24 * 3600));

    const divisorForHours = secs % (24 * 3600); const hours = Math.floor(divisorForHours / (60 * 60));

    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    const time = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
    return time;
  }

  trialDeadline = () => {
    const milisecInSecond = 1000;
    const deadline = new Date("Dec 31, 2020 23:59:59").getTime();
    const today = new Date().getTime();
    const timeLeft = Math.floor((deadline - today) / milisecInSecond);

    return timeLeft;
  };

  componentDidMount() {
    const timeLeftSeconds = this.trialDeadline();
    const timeLeftObject = this.secondsToTime(timeLeftSeconds);

    this.setState({
      time: timeLeftObject,
      seconds: timeLeftSeconds
    });

    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const nextSecond = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(nextSecond),
      seconds: nextSecond
    });

    if (nextSecond === 0) {
      clearInterval(this.timer);
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { days, hours, minutes } = this.state.time;
    const { isOpen } = this.props;
    return (
      <div className={isOpen ? "opened-timer" : "timer"}>
        <span className={isOpen ? "opened-timer__text" : "timer__text"}>
          LIMITED SUMMER OFFER
        </span>
        <span className={isOpen ? "opened-timer__time" : "timer__time"}>
          {days < 10 ? `0${days}` : days}d : {hours < 10 ? `0${hours}` : hours}h
          : {minutes < 10 ? `0${minutes}` : minutes}m
          {/* {seconds < 10 ? `0${seconds}` : seconds}s */}
        </span>
      </div>
    );
  }
}

export default Timer;
