import { connect } from 'react-redux';
import { getGameBets } from '../../actions/bet_actions';
import OddsPercentageDoughnut from './odds_percentage_doughnut';


const mSTP = state => ({
    bets: state.bets,
    game: state.games,
});

const mDTP = dispatch => ({
    fetchGameBets: (gameId) => dispatch(getGameBets(gameId)),
  });

export default connect(mSTP, mDTP)(OddsPercentageDoughnut);