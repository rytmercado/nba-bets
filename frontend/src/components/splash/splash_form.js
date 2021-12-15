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
            <Link className="button-text" to={'/main'}><button id="button1">I am 18+</button></Link>
            <a className="button-text2" href="https://www.tiktok.com/"><button id="button2">Not 18</button></a>
            <p id="errors"></p>
            <footer>
              Copyright &copy; 2021 NBA Bets
            </footer>
        </div>
        
      </div>
    );
  }
}

export default SplashForm;