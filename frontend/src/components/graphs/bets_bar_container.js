import { connect } from 'react-redux';
import BetsBar from './bets_bar';
import { getGameBets } from '../../actions/bet_actions';

const mSTP = (state, ownProps) => ({
    bets: state.bets,
    id: ownProps.g._id,
    game: ownProps.g,
});

const mDTP = dispatch => ({
    fetchGameBets: (gameId) => dispatch(getGameBets(gameId)),
});

export default connect(mSTP, mDTP)(BetsBar);