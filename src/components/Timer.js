import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: {}
    };
  }

  secondsToTime(secs) {
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

  componentDidMount() {
    const timeLeftVar = this.secondsToTime(this.props.seconds);
    this.setState({ time: timeLeftVar });
    this.timer = setInterval(this.changeTime, 1000);
  }

  changeTime = () => {
    this.setState({
      time: this.secondsToTime(this.props.seconds)
    });
  };

  render() {
    const { days, hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {days < 10 ? `0${days}` : days}d : {hours < 10 ? `0${hours}` : hours}h :{" "}
        {minutes < 10 ? `0${minutes}` : minutes} m :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}s
      </div>
    );
  }
}

export default Timer;
