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
        const start = this.props.start
        if (start) {
          const slicedTime = this.props.start.slice(11,19)
          let hours = parseInt(slicedTime.slice(0, 2)) - 10 + 24 - (new Date().getHours())
          let minutes = parseInt(slicedTime.slice(3,5)) - (new Date().getMinutes())
          let seconds = parseInt(slicedTime.slice(6,8)) - (new Date().getSeconds())
          const total = hours + minutes + seconds
          if (minutes < 0) {
              minutes = 60 + minutes;
              hours += 1
          } else if (minutes >= 60 ) {
            minutes = minutes - 60 
            hours -= 1
          } if (seconds < 0) {
            seconds = 60 + seconds;
            minutes -= 1 
          } else if (seconds >= 60) {
            seconds = 60 - seconds
            minutes += 1
          }
            let finalMinutes = minutes;
            let finalSeconds = seconds;
            if (finalMinutes < 10) {
              finalMinutes = "0" + minutes.toString()
            } else if (finalSeconds < 10) {
              finalSeconds = "0" + seconds.toString()
            }      
        return(
            <div>
              <h1 className="countdown">Bets will lock in {hours}:{finalMinutes}:{finalSeconds}</h1>
            </div>
        );
        } else {
          return null
        }
  }
}
  
 export default CountDown;

