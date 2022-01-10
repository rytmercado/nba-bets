import { connect } from 'react-redux'
import BetIndex from '.bet_index'
import { getBetsThroughGame } from '../../util/bet_api_util'

const mSTP = (state, ownProps) => ({
  bets: state.bets, 
});

const mDTP = dispatch => ({
  getBetsThroughGame: (gameId) => dispatch(getBetsThroughGame(gameId)),
});

const BetIndexContainer = connect(mSTP, mDTP)(BetIndex);

export default BetIndexContainer; 