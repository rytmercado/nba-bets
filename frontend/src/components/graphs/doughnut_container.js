import { connect } from 'react-redux';
import { getGameBets } from '../../actions/bet_actions';
import Doughnut from './doughnut';


const mSTP = state => ({
    game: state.games,
});

const mDTP = dispatch => ({
    fetchGameBets: (gameId) => dispatch(getGameBets(gameId)),
  });

export default connect(mSTP, mDTP)(Doughnut);