import React, { Component } from "react";

import styles from "./styles.module.scss";

const milisecInSecond = 1000;

function convertSecondsToTime(secs) {
  const days = Math.floor(secs / (24 * 3600));

  const divisorForHours = secs % (24 * 3600); 
  const hours = Math.floor(divisorForHours / (60 * 60));

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

function formatTimeToString(days, hours, minutes) {
  const d = days.toString().padStart(2, '0')
  const h = hours.toString().padStart(2, '0')
  const m = minutes.toString().padStart(2, '0')

  return `${d}d : ${h}h : ${m}m`
}

class Timer extends Component {
  constructor() {
    super();
    
    const timeLeftSeconds = this.trialDeadline();
    const timeLeftObject = convertSecondsToTime(timeLeftSeconds)

    this.timer = null;

    this.state = {
      time: timeLeftObject,
      seconds: timeLeftSeconds,
    }
  }


  trialDeadline = () => {
    const deadline = new Date("Dec 31, 2020 23:59:59").getTime();
    const today = new Date().getTime();
    const timeLeft = Math.floor((deadline - today) / milisecInSecond);

    return timeLeft;
  };

  componentDidMount() {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const nextSecond = this.state.seconds - 1;
    this.setState({
      time: convertSecondsToTime(nextSecond),
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
      <div className={isOpen ? styles.openedTimer : styles.timer}>
        <span className={isOpen ? styles.openedText : styles.text}>
          LIMITED SUMMER OFFER
        </span>
        <span className={isOpen ? styles.openedTime : styles.time}>
          {formatTimeToString(days, hours, minutes)}
        </span>
      </div>
    );
  }
}

export default Timer;
