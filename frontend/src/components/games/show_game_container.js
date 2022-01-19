import { connect } from 'react-redux';
import { getGame, getGames  } from '../../actions/game_actions';
import ShowGame from './show_game';



const mSTP = state => ({
    games: Object.values(state.games),
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
  });

export default connect(mSTP, mDTP)(ShowGame);