import React from 'react';
<<<<<<< HEAD
import NavBarContainer from '../nav/navbar_container';
import GameIndexContainer from '../games/game_index_container';

=======
import NavBar from '../nav/navbar';
import BetModal from './bet_modal/bet_modal';
>>>>>>> tyler

class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const [show, setShow] = useState(false)
    return (
      <div className="main">
        <div className="main-nav">
          <NavBarContainer/>
        </div>
        <div className="all-games">
          <h1>Today's Games</h1>
          <button onClick={() => setShow(true)}>Make Bet</button>
          <GameIndexContainer />
          <footer>
            Copyright &copy; 2021 NBA bets
          </footer>
        </div>
        <BetModal onClose={() => setShow(false)} show={show} />
      </div>
    );
  }
}

export default MainPage;