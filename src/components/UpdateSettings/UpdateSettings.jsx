import React, { Component } from "react";
import { db } from "../../db";

class UpdateSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDate: db.month[(new Date).getMonth()] + ' ' + (new Date).getDate() + ', ' + (new Date).getFullYear(),
      day: db.weekday[(new Date).getDay()],
      time: (new Date).getUTCMinutes()
    }

  }

  render() {
    return (
      <>
        <p>{this.state.day}</p>
        <p>{this.state.fullDate}</p>
        {this.state.time}
      </>
    )
  }
  componentDidMount() {
    const hours = new Date();
    let milisec = hours.setHours(23, 59, 59, 999);


    this.oneTime = setTimeout(() => {
      this.interval = setInterval(() => {
        const date = new Date();
        this.setState({
          fullDate: db.month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
          day: db.weekday[date.getDay()],
          time: date.getUTCMinutes()
        });
      }, 86313600);
    }, milisec - Date.now());
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.oneTime);
  }
}

export default UpdateSettings;