import React from 'react';
import NavBar from '../nav/navbar';

class MainPage extends React.Component {

  render() {
    return (
      <div className="main">
        <NavBar/>
        <h1>NBA BETS APP</h1>
        <footer>
          Copyright &copy; 2021 NBA bets
        </footer>
      </div>
    );
  }
}

export default MainPage;