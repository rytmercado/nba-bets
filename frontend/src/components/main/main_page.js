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

  componentDidMount(){
    this.props.getBets(this.props.userId)
  }

  render() {
    return (
      <div className="main">
        <div className="main-nav">
          <NavBarContainer/>
        </div>
        <div className="all-games">
          <h1>Today's Games</h1>
          <button onClick={() => this.setState({modalOpen: true})} className="make-bet">Make Bet</button>
          <GameIndexContainer />
          <footer>
            Copyright &copy; 2021 NBA bets
          </footer>
        </div>
        <BetModalContainer onClose={() => this.setState({modalOpen: false})} modalOpen={this.state.modalOpen} />
      </div>
    );
  }
}

export default MainPage;