import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import GameIndexContainer from '../games/game_index_container';


class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="main">
        <NavBarContainer/>
          <div className="all-games">
          <h1>Today's Games</h1>
            <GameIndexContainer />
          <footer>
            Copyright &copy; 2021 NBA bets
          </footer>
          </div>
      </div>
    );
  }
}

export default MainPage;