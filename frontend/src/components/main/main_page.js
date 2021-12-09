import React from 'react';
import NavBar from '../nav/navbar';
import BetModal from './bet_modal/bet_modal';

class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const [show, setShow] = useState(false)
    return (
      <div className="main">
        <div className="main-nav">
          <NavBar/>
        </div>
        <div className="main-content">
          <h1>NBA BETS APP</h1>
          <button onClick={() => setShow(true)}>Make Bet</button>
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