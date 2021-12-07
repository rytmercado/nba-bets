import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component {




  render() {
    return (
      <div className="main-splash">
        <img className="logo" src="https://i.ibb.co/0MHYw3Z/NBAA-Logo.jpg" />
        <div className="age-buttons">
            <Link to="/login"><button>I am over 21 years old</button></Link>
            <button>I am under 21 years</button>
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