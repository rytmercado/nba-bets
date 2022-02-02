import React from 'react';

class CountDown extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
     
    }
    
    tick () {
      this.setState(state => ({
        seconds: state.seconds - 1 
      }));
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        const start = this.props.game.start_time
        if (start) {
          //removing excess non-date-time data
          const slicedTime = start.slice(11,19)

          //Subtracting game start time from current time
          let hours = parseInt(slicedTime.slice(0, 2)) + 16 - (new Date().getHours())
          let minutes = parseInt(slicedTime.slice(3,5)) - (new Date().getMinutes())
          let seconds = parseInt(slicedTime.slice(6,8)) - (new Date().getSeconds())
          //clock rollover 
          if (hours < 0) {
              hours = "";
          } else if (minutes < 0) {
            minutes = parseInt(slicedTime.slice(3,5)) -  (60 - (new Date().getMinutes())) *-1
            if (hours > 0) {
              hours -= 1;
            }
          } if (seconds < 0) {
            seconds = parseInt(slicedTime.slice(6,8)) - (60 - (new Date().getSeconds())) *-1
            if (minutes > 0) {
              minutes -= 1 
            } else if (minutes === 0 && hours > 1) {
              hours -= 1
            }
          } else if (seconds >= 60) {
            seconds = 60 - seconds
            minutes -= 1
          }

          let finalMinutes = minutes.toString();
          let finalSeconds = seconds.toString();
            //Formatting the time into similar string
            if (minutes < 10 && minutes >= 0) {
              finalMinutes = "0" + minutes.toString()
            } else if (seconds >= 0 && seconds < 10) {
              finalSeconds = "0" + seconds.toString()
            } 

            

        return(
            <div className="countdown">
              <h1>Bets will lock in {hours}:{finalMinutes}:{finalSeconds}</h1>
            </div>
        );
        } else {
          return null
        }
  }
}
  
 export default CountDown;

