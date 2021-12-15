import { connect } from 'react-redux';
import { getGame } from '../../actions/game_actions';
import ShowGame from './show_game';


const mSTP = state => ({
    game: state.games
});

const mDTP = dispatch => ({
    fetchGame: (gameId) => dispatch(getGame(gameId)),
  });

export default connect(mSTP, mDTP)(ShowGame);