import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component {




  render() {
    return (
      <div className="main-splash">
        <img className="logo" src="https://i.ibb.co/0MHYw3Z/NBAA-Logo.jpg" />
        <u style={{color: "#CBB26A" }}>Please verify your age to participate</u>
        <div className="age-buttons">
            <button id="button1"><span className="button-text">I am 21+</span></button>
            <button id="button2"><span className="button-text">I am not 21</span></button>
            <p id="errors"></p>
        </div>
        <footer>
          Copyright &copy; 2021 NBA bets
        </footer>
      </div>
    );
  }
}

export default SplashForm;