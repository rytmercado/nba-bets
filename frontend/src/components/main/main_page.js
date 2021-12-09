import React, { useState } from 'react';
import NavBarContainer from '../nav/navbar_container';
import GameIndexContainer from '../games/game_index_container';
import BetModal from '../bet_modal/bet_modal';


class MainPage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        modalOpen: false,
      }
  }
  render() {
    if (this.state.modalOpen = false) {
      return null
    } else {
    return (
      <div className="main">
        <div className="main-nav">
          <NavBarContainer/>
        </div>
        <div className="main-content">
          <h1>NBA BETS APP</h1>
          <GameIndexContainer />
          <button onClick={() => this.setState({modalOpen: true})}>Make Bet</button>
          <footer>
            Copyright &copy; 2021 NBA bets
          </footer>
        </div>
        <BetModal onClose={() => this.setState({modalOpen: false})} />
      </div>
    );
  }}
}

export default MainPage;