import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component {




  render() {
    return (
      <div className="main-splash">
        <img className="bg" src="https://www.nba.com/bulls/sites/bulls/files/covid-19.jpg" />
        <div className="age-buttons">
            <img className="logo" src="https://i.ibb.co/nDm0spD/logo-medium.jpg" />
            <div className="splash-text">
              Welcome to NBAA Bets! NBAA Bets is a MERN-Stack web-application that is modeled after real-life live sports betting applications and is specific to NBA Basketball games.
              We utilized two different free API's that retrieve live odds every 2 hours and live game results every 10 minutes to give the most up to date experience and information.
              Feel free to navigate around the application to view the profile page and show pages and go place some bets!
            </div>
            <Link className="button-text" to={'/signup'}><button id="button1">Continue</button></Link>
            <footer className="copyright-footer">
              Copyright &copy; 2021 NBAA Bets
            </footer>
        </div>
        
      </div>
    );
  }
}

export default SplashForm;