import React from 'react';
import NavBarContainer from '../nav/navbar_container'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <NavBarContainer />
        <h1>NBA BETS APP</h1>
        <footer>
          Copyright &copy; 2021 NBA bets
        </footer>
      </div>
    );
  }
}

export default MainPage;