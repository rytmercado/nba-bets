import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component {




  render() {
    return (
      <div className="main-splash">
        <img className="bg" src="https://www.nba.com/bulls/sites/bulls/files/covid-19.jpg" />
        <div className="age-buttons">
            <img className="logo" src="https://i.ibb.co/nDm0spD/logo-medium.jpg" />
            <strong>Please verify your age to participate</strong>
            <button id="button1"><span className="button-text">I am 21+</span></button>
            <button id="button2"><span className="button-text2">Not 21</span></button>
            <p id="errors"></p>
            <footer>
              Copyright &copy; 2021 NBA bets
            </footer>
        </div>
        
      </div>
    );
  }
}

export default SplashForm;