import React from 'react';
import NavBar from '../nav/navbar';
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
          <NavBar/>
        </div>
        <div className="main-content">
          <h1>NBA BETS APP</h1>
          <button className="make-bet" onClick={() => this.setState({modalOpen: true})}>Make Bet</button>
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