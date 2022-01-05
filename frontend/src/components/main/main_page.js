import React, { useState } from 'react';
import NavBarContainer from '../nav/navbar_container';
import GameIndexContainer from '../games/game_index_container';
import BetModalContainer from '../bet_modal/bet_modal_container';



class MainPage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        modalOpen: false,
      }

  }

  render() {
    return (
      <div className="main">
        <div className="main-nav">
          <NavBarContainer/>
        </div>
        <div className="all-games">
          <h1 className="main-header">Today's Games</h1>
          {/* <button onClick={() => this.setState({modalOpen: true})} className="make-bet">Make Bet</button> */}
          <GameIndexContainer />
          <footer className="main-footer">
            Copyright &copy; 2021 NBAA bets
          </footer>
        </div>
        {/* <BetModalContainer onClose={() => this.setState({modalOpen: false})} modalOpen={this.state.modalOpen} /> */}
      </div>
    );
  }
}

export default MainPage;