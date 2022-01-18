import { connect } from 'react-redux';
import { getGames } from '../../actions/game_actions';
import { clearBetErrors } from '../../actions/bet_actions';
import GameIndex from './game_index';


const mSTP = state => ({
    games: Object.values(state.games)
});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch(getGames()),
    clearBetErrors: () => dispatch(clearBetErrors())
  });

export default connect(mSTP, mDTP)(GameIndex);