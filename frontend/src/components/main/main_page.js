import React, { useState } from 'react';
import NavBarContainer from '../nav/navbar_container';
import GameIndexContainer from '../games/game_index_container';
import BetModal from '../bet_modal/bet_modal';


class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="main-nav">
          <NavBarContainer/>
        </div>
        <div className="all-games">
          <h1>Today's Games</h1>
          <button className="make-bet">Make Bet</button>
          <GameIndexContainer />
          <footer>
            Copyright &copy; 2021 NBA bets
          </footer>
        </div>
        <BetModal />
      </div>
    );
  }
}

export default MainPage;